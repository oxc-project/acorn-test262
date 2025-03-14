__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    6394
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unpacked",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              23,
              24
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "range": [
            23,
            24
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              34,
              41
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
              }
            }
          },
          "range": [
            33,
            44
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              55,
              56
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    69,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  },
                  "range": [
                    73,
                    80
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        75,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      75,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  66,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              },
              "range": [
                82,
                92
              ],
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 40,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    91,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 40,
                      "line": 3
                    }
                  }
                },
                "range": [
                  85,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              65,
              92
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
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
                103,
                104
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
            "extendsType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  120,
                  129
                ],
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          127,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 4
                          },
                          "start": {
                            "column": 28,
                            "line": 4
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      121,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  113,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              },
              "range": [
                113,
                129
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              },
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  132,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              },
              "range": [
                132,
                133
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              141
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                95,
                96
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 44,
                  "line": 3
                }
              }
            },
            "range": [
              95,
              96
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          },
          "range": [
            55,
            141
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 28,
                "line": 2
              }
            }
          },
          "range": [
            47,
            48
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 28,
              "line": 2
            }
          }
        },
        "range": [
          23,
          141
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          16
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
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        142
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 5
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
        "name": "T00",
        "optional": false,
        "range": [
          149,
          152
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            163,
            171
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                164,
                170
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 19,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            155,
            163
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 7
            },
            "start": {
              "column": 11,
              "line": 7
            }
          }
        },
        "range": [
          155,
          171
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        }
      },
      "range": [
        144,
        172
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "range": [
          189,
          192
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            203,
            213
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  204,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "range": [
                204,
                212
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 8
            },
            "start": {
              "column": 19,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            195,
            203
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        },
        "range": [
          195,
          213
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        }
      },
      "range": [
        184,
        214
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "range": [
          231,
          234
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            245,
            259
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
                  }
                },
                "range": [
                  249,
                  258
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    252,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                246,
                258
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 19,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            237,
            245
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          237,
          259
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        }
      },
      "range": [
        226,
        260
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "range": [
          277,
          280
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            291,
            308
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  299,
                  307
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      300,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  292,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "range": [
                292,
                307
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 10
            },
            "start": {
              "column": 19,
              "line": 10
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            283,
            291
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        },
        "range": [
          283,
          308
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        272,
        309
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "range": [
          326,
          329
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            340,
            369
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  349,
                  368
                ],
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          357,
                          365
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              358,
                              364
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 11
                              },
                              "start": {
                                "column": 37,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 11
                          },
                          "start": {
                            "column": 36,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          350,
                          357
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 11
                          },
                          "start": {
                            "column": 29,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        350,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 11
                        },
                        "start": {
                          "column": 29,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      350,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unpacked",
                "optional": false,
                "range": [
                  341,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                341,
                368
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 11
            },
            "start": {
              "column": 19,
              "line": 11
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            332,
            340
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 11
            },
            "start": {
              "column": 11,
              "line": 11
            }
          }
        },
        "range": [
          332,
          369
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        }
      },
      "range": [
        321,
        370
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "range": [
          387,
          390
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            401,
            406
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                402,
                405
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 19,
              "line": 12
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            393,
            401
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 12
            },
            "start": {
              "column": 11,
              "line": 12
            }
          }
        },
        "range": [
          393,
          406
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 12
          }
        }
      },
      "range": [
        382,
        407
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "range": [
          421,
          424
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            435,
            442
          ],
          "params": [
            {
              "type": "TSNeverKeyword",
              "range": [
                436,
                441
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 13
            },
            "start": {
              "column": 19,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "range": [
            427,
            435
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 13
            },
            "start": {
              "column": 11,
              "line": 13
            }
          }
        },
        "range": [
          427,
          442
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 13
          }
        }
      },
      "range": [
        416,
        443
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 13
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      493,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      496,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 16
                      },
                      "start": {
                        "column": 16,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    493,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      499,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      502,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 22,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    499,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 16
                    },
                    "start": {
                      "column": 19,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                491,
                505
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              484,
              506
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          478,
          508
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 23,
            "line": 15
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
          464,
          466
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 13,
                "line": 15
              }
            },
            "range": [
              468,
              476
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                470,
                476
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            }
          },
          "range": [
            467,
            476
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        }
      ],
      "range": [
        455,
        508
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          518,
          543
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
              "name": "x",
              "optional": false,
              "range": [
                524,
                525
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                528,
                529
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "range": [
              524,
              530
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                535,
                536
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                539,
                540
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              535,
              541
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 8,
            "line": 19
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
          516,
          517
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        510,
        543
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          569,
          594
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
              "name": "x",
              "optional": false,
              "range": [
                575,
                576
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                579,
                580
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "range": [
              575,
              581
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                586,
                587
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                590,
                591
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              586,
              592
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 24,
            "line": 24
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abstract",
        "optional": false,
        "range": [
          560,
          568
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 24
          },
          "start": {
            "column": 15,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        545,
        594
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "range": [
          601,
          604
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            617,
            631
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 29
                  }
                },
                "range": [
                  621,
                  630
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    624,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 29
                    },
                    "start": {
                      "column": 28,
                      "line": 29
                    }
                  }
                }
              },
              "range": [
                618,
                630
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 29
            },
            "start": {
              "column": 21,
              "line": 29
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            607,
            617
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 29
            },
            "start": {
              "column": 11,
              "line": 29
            }
          }
        },
        "range": [
          607,
          631
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 29
          },
          "start": {
            "column": 11,
            "line": 29
          }
        }
      },
      "range": [
        596,
        632
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "range": [
          649,
          652
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 30
          },
          "start": {
            "column": 5,
            "line": 30
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            665,
            686
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 30
                      },
                      "start": {
                        "column": 24,
                        "line": 30
                      }
                    },
                    "range": [
                      668,
                      676
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        670,
                        676
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 30
                        },
                        "start": {
                          "column": 26,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    667,
                    676
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 30
                    },
                    "start": {
                      "column": 23,
                      "line": 30
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 30
                  },
                  "start": {
                    "column": 34,
                    "line": 30
                  }
                },
                "range": [
                  678,
                  685
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    681,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 30
                    },
                    "start": {
                      "column": 37,
                      "line": 30
                    }
                  }
                }
              },
              "range": [
                666,
                685
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 30
                },
                "start": {
                  "column": 22,
                  "line": 30
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 30
            },
            "start": {
              "column": 21,
              "line": 30
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            655,
            665
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 30
            },
            "start": {
              "column": 11,
              "line": 30
            }
          }
        },
        "range": [
          655,
          686
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 30
          },
          "start": {
            "column": 11,
            "line": 30
          }
        }
      },
      "range": [
        644,
        687
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "range": [
          702,
          705
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            718,
            732
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 31
                  },
                  "start": {
                    "column": 29,
                    "line": 31
                  }
                },
                "range": [
                  726,
                  730
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      729,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 31
                      },
                      "start": {
                        "column": 32,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    729,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 31
                    },
                    "start": {
                      "column": 32,
                      "line": 31
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 31
                  },
                  "start": {
                    "column": 23,
                    "line": 31
                  }
                },
                "range": [
                  720,
                  723
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
                        721,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 31
                        },
                        "start": {
                          "column": 24,
                          "line": 31
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      721,
                      722
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 31
                      },
                      "start": {
                        "column": 24,
                        "line": 31
                      }
                    }
                  }
                ]
              },
              "range": [
                720,
                730
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 31
                },
                "start": {
                  "column": 23,
                  "line": 31
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 31
            },
            "start": {
              "column": 21,
              "line": 31
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            708,
            718
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 31
            },
            "start": {
              "column": 11,
              "line": 31
            }
          }
        },
        "range": [
          708,
          732
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 31
          },
          "start": {
            "column": 11,
            "line": 31
          }
        }
      },
      "range": [
        697,
        733
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "range": [
          746,
          749
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            762,
            806
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 32
                  },
                  "start": {
                    "column": 59,
                    "line": 32
                  }
                },
                "range": [
                  800,
                  804
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      803,
                      804
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 32
                      },
                      "start": {
                        "column": 62,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    803,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 32
                    },
                    "start": {
                      "column": 62,
                      "line": 32
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 32
                  },
                  "start": {
                    "column": 23,
                    "line": 32
                  }
                },
                "range": [
                  764,
                  797
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
                        "name": "U",
                        "optional": false,
                        "range": [
                          775,
                          776
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 32
                          },
                          "start": {
                            "column": 34,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        775,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 32
                        },
                        "start": {
                          "column": 34,
                          "line": 32
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
                        765,
                        766
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 32
                        },
                        "start": {
                          "column": 24,
                          "line": 32
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      765,
                      776
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 24,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          788,
                          794
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 32
                          },
                          "start": {
                            "column": 47,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        788,
                        796
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 32
                        },
                        "start": {
                          "column": 47,
                          "line": 32
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
                        778,
                        779
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 32
                        },
                        "start": {
                          "column": 37,
                          "line": 32
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      778,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 32
                      },
                      "start": {
                        "column": 37,
                        "line": 32
                      }
                    }
                  }
                ]
              },
              "range": [
                764,
                804
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 32
                },
                "start": {
                  "column": 23,
                  "line": 32
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 32
            },
            "start": {
              "column": 21,
              "line": 32
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            752,
            762
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 32
            },
            "start": {
              "column": 11,
              "line": 32
            }
          }
        },
        "range": [
          752,
          806
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 32
          },
          "start": {
            "column": 11,
            "line": 32
          }
        }
      },
      "range": [
        741,
        807
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "range": [
          826,
          829
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            842,
            853
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "range": [
                  850,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 33
                  },
                  "start": {
                    "column": 29,
                    "line": 33
                  }
                }
              },
              "range": [
                843,
                852
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 33
                },
                "start": {
                  "column": 22,
                  "line": 33
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 33
            },
            "start": {
              "column": 21,
              "line": 33
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            832,
            842
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 33
            },
            "start": {
              "column": 11,
              "line": 33
            }
          }
        },
        "range": [
          832,
          853
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 33
          },
          "start": {
            "column": 11,
            "line": 33
          }
        }
      },
      "range": [
        821,
        854
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "range": [
          889,
          892
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            905,
            910
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                906,
                909
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 22,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 34
            },
            "start": {
              "column": 21,
              "line": 34
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            895,
            905
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 34
            },
            "start": {
              "column": 11,
              "line": 34
            }
          }
        },
        "range": [
          895,
          910
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 34
          },
          "start": {
            "column": 11,
            "line": 34
          }
        }
      },
      "range": [
        884,
        911
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "range": [
          925,
          928
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            941,
            948
          ],
          "params": [
            {
              "type": "TSNeverKeyword",
              "range": [
                942,
                947
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 35
                },
                "start": {
                  "column": 22,
                  "line": 35
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 35
            },
            "start": {
              "column": 21,
              "line": 35
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            931,
            941
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 35
            },
            "start": {
              "column": 11,
              "line": 35
            }
          }
        },
        "range": [
          931,
          948
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 35
          },
          "start": {
            "column": 11,
            "line": 35
          }
        }
      },
      "range": [
        920,
        949
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T17",
        "optional": false,
        "range": [
          965,
          968
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            981,
            989
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                982,
                988
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 22,
                  "line": 36
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 36
            },
            "start": {
              "column": 21,
              "line": 36
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            971,
            981
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 36
            },
            "start": {
              "column": 11,
              "line": 36
            }
          }
        },
        "range": [
          971,
          989
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 36
          },
          "start": {
            "column": 11,
            "line": 36
          }
        }
      },
      "range": [
        960,
        990
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T18",
        "optional": false,
        "range": [
          1006,
          1009
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1022,
            1032
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  1023,
                  1031
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 37
                  },
                  "start": {
                    "column": 22,
                    "line": 37
                  }
                }
              },
              "range": [
                1023,
                1031
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 22,
                  "line": 37
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 37
            },
            "start": {
              "column": 21,
              "line": 37
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            1012,
            1022
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 37
            },
            "start": {
              "column": 11,
              "line": 37
            }
          }
        },
        "range": [
          1012,
          1032
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 37
          },
          "start": {
            "column": 11,
            "line": 37
          }
        }
      },
      "range": [
        1001,
        1033
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T19",
        "optional": false,
        "range": [
          1049,
          1052
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1082,
            1114
          ],
          "params": [
            {
              "type": "TSFunctionType",
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
                        "column": 49,
                        "line": 38
                      },
                      "start": {
                        "column": 41,
                        "line": 38
                      }
                    },
                    "range": [
                      1085,
                      1093
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1087,
                        1093
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 38
                        },
                        "start": {
                          "column": 43,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    1084,
                    1093
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 38
                    },
                    "start": {
                      "column": 40,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1098,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 38
                      },
                      "start": {
                        "column": 54,
                        "line": 38
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 38
                      },
                      "start": {
                        "column": 58,
                        "line": 38
                      }
                    },
                    "range": [
                      1102,
                      1105
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1104,
                          1105
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 38
                          },
                          "start": {
                            "column": 60,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        1104,
                        1105
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 38
                        },
                        "start": {
                          "column": 60,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    1095,
                    1105
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 38
                    },
                    "start": {
                      "column": 51,
                      "line": 38
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 38
                  },
                  "start": {
                    "column": 63,
                    "line": 38
                  }
                },
                "range": [
                  1107,
                  1113
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1110,
                        1111
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 38
                        },
                        "start": {
                          "column": 66,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1110,
                      1111
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 38
                      },
                      "start": {
                        "column": 66,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1110,
                    1113
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 38
                    },
                    "start": {
                      "column": 66,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                1083,
                1113
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 38
                },
                "start": {
                  "column": 39,
                  "line": 38
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 38
            },
            "start": {
              "column": 38,
              "line": 38
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            1072,
            1082
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 38
            },
            "start": {
              "column": 28,
              "line": 38
            }
          }
        },
        "range": [
          1072,
          1114
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 38
          },
          "start": {
            "column": 28,
            "line": 38
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 38
          },
          "start": {
            "column": 8,
            "line": 38
          }
        },
        "range": [
          1052,
          1069
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  1063,
                  1066
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 38
                  },
                  "start": {
                    "column": 19,
                    "line": 38
                  }
                }
              },
              "range": [
                1063,
                1068
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 38
                },
                "start": {
                  "column": 19,
                  "line": 38
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
                1053,
                1054
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              1053,
              1068
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 38
              },
              "start": {
                "column": 9,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        1044,
        1115
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U10",
        "optional": false,
        "range": [
          1130,
          1133
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1148,
            1158
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  1156,
                  1157
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 40
                  },
                  "start": {
                    "column": 31,
                    "line": 40
                  }
                }
              },
              "range": [
                1149,
                1157
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 40
                },
                "start": {
                  "column": 24,
                  "line": 40
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 40
            },
            "start": {
              "column": 23,
              "line": 40
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1136,
            1148
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 40
            },
            "start": {
              "column": 11,
              "line": 40
            }
          }
        },
        "range": [
          1136,
          1158
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 40
          },
          "start": {
            "column": 11,
            "line": 40
          }
        }
      },
      "range": [
        1125,
        1159
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U11",
        "optional": false,
        "range": [
          1171,
          1174
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 41
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1189,
            1194
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                1190,
                1193
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 41
                },
                "start": {
                  "column": 24,
                  "line": 41
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 41
            },
            "start": {
              "column": 23,
              "line": 41
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1177,
            1189
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 41
            },
            "start": {
              "column": 11,
              "line": 41
            }
          }
        },
        "range": [
          1177,
          1194
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 41
          },
          "start": {
            "column": 11,
            "line": 41
          }
        }
      },
      "range": [
        1166,
        1195
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U12",
        "optional": false,
        "range": [
          1209,
          1212
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1227,
            1234
          ],
          "params": [
            {
              "type": "TSNeverKeyword",
              "range": [
                1228,
                1233
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 42
                },
                "start": {
                  "column": 24,
                  "line": 42
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 42
            },
            "start": {
              "column": 23,
              "line": 42
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1215,
            1227
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 42
            },
            "start": {
              "column": 11,
              "line": 42
            }
          }
        },
        "range": [
          1215,
          1234
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 42
          },
          "start": {
            "column": 11,
            "line": 42
          }
        }
      },
      "range": [
        1204,
        1235
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U13",
        "optional": false,
        "range": [
          1251,
          1254
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1269,
            1277
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                1270,
                1276
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 43
                },
                "start": {
                  "column": 24,
                  "line": 43
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 43
            },
            "start": {
              "column": 23,
              "line": 43
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1257,
            1269
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 43
            },
            "start": {
              "column": 11,
              "line": 43
            }
          }
        },
        "range": [
          1257,
          1277
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 43
          },
          "start": {
            "column": 11,
            "line": 43
          }
        }
      },
      "range": [
        1246,
        1278
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U14",
        "optional": false,
        "range": [
          1294,
          1297
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 44
          },
          "start": {
            "column": 5,
            "line": 44
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1312,
            1322
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  1313,
                  1321
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 24,
                    "line": 44
                  }
                }
              },
              "range": [
                1313,
                1321
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 24,
                  "line": 44
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 44
            },
            "start": {
              "column": 23,
              "line": 44
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1300,
            1312
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 44
            },
            "start": {
              "column": 11,
              "line": 44
            }
          }
        },
        "range": [
          1300,
          1322
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 44
          },
          "start": {
            "column": 11,
            "line": 44
          }
        }
      },
      "range": [
        1289,
        1323
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U15",
        "optional": false,
        "range": [
          1339,
          1342
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 45
          },
          "start": {
            "column": 5,
            "line": 45
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1357,
            1374
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Abstract",
                "optional": false,
                "range": [
                  1365,
                  1373
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 45
                  },
                  "start": {
                    "column": 31,
                    "line": 45
                  }
                }
              },
              "range": [
                1358,
                1373
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 45
                },
                "start": {
                  "column": 24,
                  "line": 45
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 45
            },
            "start": {
              "column": 23,
              "line": 45
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1345,
            1357
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 45
            },
            "start": {
              "column": 11,
              "line": 45
            }
          }
        },
        "range": [
          1345,
          1374
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 45
          },
          "start": {
            "column": 11,
            "line": 45
          }
        }
      },
      "range": [
        1334,
        1375
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U16",
        "optional": false,
        "range": [
          1394,
          1397
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 46
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1429,
            1465
          ],
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
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
                        "column": 55,
                        "line": 46
                      },
                      "start": {
                        "column": 47,
                        "line": 46
                      }
                    },
                    "range": [
                      1436,
                      1444
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1438,
                        1444
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 46
                        },
                        "start": {
                          "column": 49,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1435,
                    1444
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 46
                    },
                    "start": {
                      "column": 46,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1449,
                      1453
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 46
                      },
                      "start": {
                        "column": 60,
                        "line": 46
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 46
                      },
                      "start": {
                        "column": 64,
                        "line": 46
                      }
                    },
                    "range": [
                      1453,
                      1456
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1455,
                          1456
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 46
                          },
                          "start": {
                            "column": 66,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1455,
                        1456
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 46
                        },
                        "start": {
                          "column": 66,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1446,
                    1456
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 46
                    },
                    "start": {
                      "column": 57,
                      "line": 46
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 46
                  },
                  "start": {
                    "column": 69,
                    "line": 46
                  }
                },
                "range": [
                  1458,
                  1464
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1461,
                        1462
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 46
                        },
                        "start": {
                          "column": 72,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1461,
                      1462
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 46
                      },
                      "start": {
                        "column": 72,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1461,
                    1464
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 46
                    },
                    "start": {
                      "column": 72,
                      "line": 46
                    }
                  }
                }
              },
              "range": [
                1430,
                1464
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 46
                },
                "start": {
                  "column": 41,
                  "line": 46
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 46
            },
            "start": {
              "column": 40,
              "line": 46
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1417,
            1429
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 46
            },
            "start": {
              "column": 28,
              "line": 46
            }
          }
        },
        "range": [
          1417,
          1465
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 46
          },
          "start": {
            "column": 28,
            "line": 46
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 46
          },
          "start": {
            "column": 8,
            "line": 46
          }
        },
        "range": [
          1397,
          1414
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  1408,
                  1411
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 46
                  },
                  "start": {
                    "column": 19,
                    "line": 46
                  }
                }
              },
              "range": [
                1408,
                1413
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 46
                },
                "start": {
                  "column": 19,
                  "line": 46
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
                1398,
                1399
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              }
            },
            "out": false,
            "range": [
              1398,
              1413
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 46
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          }
        ]
      },
      "range": [
        1389,
        1466
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U17",
        "optional": false,
        "range": [
          1480,
          1483
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 47
          },
          "start": {
            "column": 5,
            "line": 47
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1515,
            1560
          ],
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": true,
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
                        "column": 64,
                        "line": 47
                      },
                      "start": {
                        "column": 56,
                        "line": 47
                      }
                    },
                    "range": [
                      1531,
                      1539
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1533,
                        1539
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 47
                        },
                        "start": {
                          "column": 58,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    1530,
                    1539
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 47
                    },
                    "start": {
                      "column": 55,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1544,
                      1548
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 47
                      },
                      "start": {
                        "column": 69,
                        "line": 47
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 47
                      },
                      "start": {
                        "column": 73,
                        "line": 47
                      }
                    },
                    "range": [
                      1548,
                      1551
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1550,
                          1551
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 47
                          },
                          "start": {
                            "column": 75,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1550,
                        1551
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 47
                        },
                        "start": {
                          "column": 75,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    1541,
                    1551
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 47
                    },
                    "start": {
                      "column": 66,
                      "line": 47
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 47
                  },
                  "start": {
                    "column": 78,
                    "line": 47
                  }
                },
                "range": [
                  1553,
                  1559
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1556,
                        1557
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 47
                        },
                        "start": {
                          "column": 81,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1556,
                      1557
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 47
                      },
                      "start": {
                        "column": 81,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1556,
                    1559
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 47
                    },
                    "start": {
                      "column": 81,
                      "line": 47
                    }
                  }
                }
              },
              "range": [
                1516,
                1559
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 47
                },
                "start": {
                  "column": 41,
                  "line": 47
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 47
            },
            "start": {
              "column": 40,
              "line": 47
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "range": [
            1503,
            1515
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 47
            },
            "start": {
              "column": 28,
              "line": 47
            }
          }
        },
        "range": [
          1503,
          1560
        ],
        "loc": {
          "end": {
            "column": 85,
            "line": 47
          },
          "start": {
            "column": 28,
            "line": 47
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 47
          },
          "start": {
            "column": 8,
            "line": 47
          }
        },
        "range": [
          1483,
          1500
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  1494,
                  1497
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 47
                  },
                  "start": {
                    "column": 19,
                    "line": 47
                  }
                }
              },
              "range": [
                1494,
                1499
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 47
                },
                "start": {
                  "column": 19,
                  "line": 47
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
                1484,
                1485
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 47
                },
                "start": {
                  "column": 9,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              1484,
              1499
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 47
              },
              "start": {
                "column": 9,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        1475,
        1561
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArgumentType",
        "optional": false,
        "range": [
          1576,
          1588
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 49
          },
          "start": {
            "column": 5,
            "line": 49
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1618,
              1619
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 49
              },
              "start": {
                "column": 47,
                "line": 49
              }
            }
          },
          "range": [
            1618,
            1619
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 49
            },
            "start": {
              "column": 47,
              "line": 49
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                    "column": 68,
                    "line": 49
                  },
                  "start": {
                    "column": 59,
                    "line": 49
                  }
                },
                "range": [
                  1630,
                  1639
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        1638,
                        1639
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 49
                        },
                        "start": {
                          "column": 67,
                          "line": 49
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1638,
                      1639
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 49
                      },
                      "start": {
                        "column": 67,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1632,
                    1639
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 49
                    },
                    "start": {
                      "column": 61,
                      "line": 49
                    }
                  }
                }
              },
              "range": [
                1629,
                1639
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 49
                },
                "start": {
                  "column": 58,
                  "line": 49
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 49
              },
              "start": {
                "column": 70,
                "line": 49
              }
            },
            "range": [
              1641,
              1647
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1644,
                1647
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 49
                },
                "start": {
                  "column": 73,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1628,
            1647
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 49
            },
            "start": {
              "column": 57,
              "line": 49
            }
          }
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "range": [
            1654,
            1657
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 49
            },
            "start": {
              "column": 83,
              "line": 49
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              1650,
              1651
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 49
              },
              "start": {
                "column": 79,
                "line": 49
              }
            }
          },
          "range": [
            1650,
            1651
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 49
            },
            "start": {
              "column": 79,
              "line": 49
            }
          }
        },
        "range": [
          1618,
          1657
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 49
          },
          "start": {
            "column": 47,
            "line": 49
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 49
          },
          "start": {
            "column": 17,
            "line": 49
          }
        },
        "range": [
          1588,
          1615
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
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
                        "column": 35,
                        "line": 49
                      },
                      "start": {
                        "column": 30,
                        "line": 49
                      }
                    },
                    "range": [
                      1601,
                      1606
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1603,
                        1606
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 49
                        },
                        "start": {
                          "column": 32,
                          "line": 49
                        }
                      }
                    }
                  },
                  "range": [
                    1600,
                    1606
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 49
                    },
                    "start": {
                      "column": 29,
                      "line": 49
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 49
                  },
                  "start": {
                    "column": 37,
                    "line": 49
                  }
                },
                "range": [
                  1608,
                  1614
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1611,
                    1614
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 49
                    },
                    "start": {
                      "column": 40,
                      "line": 49
                    }
                  }
                }
              },
              "range": [
                1599,
                1614
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 49
                },
                "start": {
                  "column": 28,
                  "line": 49
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
                1589,
                1590
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 49
                },
                "start": {
                  "column": 18,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1589,
              1614
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 49
              },
              "start": {
                "column": 18,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1571,
        1658
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "range": [
          1665,
          1668
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 51
          },
          "start": {
            "column": 5,
            "line": 51
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1683,
            1695
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 51
                  },
                  "start": {
                    "column": 27,
                    "line": 51
                  }
                },
                "range": [
                  1687,
                  1694
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1690,
                    1694
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 51
                    },
                    "start": {
                      "column": 30,
                      "line": 51
                    }
                  }
                }
              },
              "range": [
                1684,
                1694
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 51
                },
                "start": {
                  "column": 24,
                  "line": 51
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 51
            },
            "start": {
              "column": 23,
              "line": 51
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            1671,
            1683
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 51
            },
            "start": {
              "column": 11,
              "line": 51
            }
          }
        },
        "range": [
          1671,
          1695
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 51
          },
          "start": {
            "column": 11,
            "line": 51
          }
        }
      },
      "range": [
        1660,
        1696
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "range": [
          1709,
          1712
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1727,
            1750
          ],
          "params": [
            {
              "type": "TSFunctionType",
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
                        "line": 52
                      },
                      "start": {
                        "column": 26,
                        "line": 52
                      }
                    },
                    "range": [
                      1730,
                      1738
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1732,
                        1738
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 52
                        },
                        "start": {
                          "column": 28,
                          "line": 52
                        }
                      }
                    }
                  },
                  "range": [
                    1729,
                    1738
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 52
                    },
                    "start": {
                      "column": 25,
                      "line": 52
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 52
                  },
                  "start": {
                    "column": 36,
                    "line": 52
                  }
                },
                "range": [
                  1740,
                  1749
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1743,
                    1749
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 52
                    },
                    "start": {
                      "column": 39,
                      "line": 52
                    }
                  }
                }
              },
              "range": [
                1728,
                1749
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 52
                },
                "start": {
                  "column": 24,
                  "line": 52
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 52
            },
            "start": {
              "column": 23,
              "line": 52
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            1715,
            1727
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 52
            },
            "start": {
              "column": 11,
              "line": 52
            }
          }
        },
        "range": [
          1715,
          1750
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 52
          },
          "start": {
            "column": 11,
            "line": 52
          }
        }
      },
      "range": [
        1704,
        1751
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "range": [
          1768,
          1771
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 53
          },
          "start": {
            "column": 5,
            "line": 53
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1786,
            1810
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 53
                      },
                      "start": {
                        "column": 27,
                        "line": 53
                      }
                    },
                    "range": [
                      1790,
                      1798
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1792,
                        1798
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 53
                        },
                        "start": {
                          "column": 29,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1788,
                    1798
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 53
                    },
                    "start": {
                      "column": 25,
                      "line": 53
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 53
                  },
                  "start": {
                    "column": 37,
                    "line": 53
                  }
                },
                "range": [
                  1800,
                  1809
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1803,
                    1809
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 53
                    },
                    "start": {
                      "column": 40,
                      "line": 53
                    }
                  }
                }
              },
              "range": [
                1787,
                1809
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 53
                },
                "start": {
                  "column": 24,
                  "line": 53
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 53
            },
            "start": {
              "column": 23,
              "line": 53
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            1774,
            1786
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 53
            },
            "start": {
              "column": 11,
              "line": 53
            }
          }
        },
        "range": [
          1774,
          1810
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 53
          },
          "start": {
            "column": 11,
            "line": 53
          }
        }
      },
      "range": [
        1763,
        1811
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "range": [
          1840,
          1843
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 54
          },
          "start": {
            "column": 5,
            "line": 54
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1858,
            1889
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      1863,
                      1867
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 54
                      },
                      "start": {
                        "column": 28,
                        "line": 54
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 54
                      },
                      "start": {
                        "column": 32,
                        "line": 54
                      }
                    },
                    "range": [
                      1867,
                      1877
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          1869,
                          1875
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 54
                          },
                          "start": {
                            "column": 34,
                            "line": 54
                          }
                        }
                      },
                      "range": [
                        1869,
                        1877
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 54
                        },
                        "start": {
                          "column": 34,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    1860,
                    1877
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 54
                    },
                    "start": {
                      "column": 25,
                      "line": 54
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 54
                  },
                  "start": {
                    "column": 44,
                    "line": 54
                  }
                },
                "range": [
                  1879,
                  1888
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1882,
                    1888
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 54
                    },
                    "start": {
                      "column": 47,
                      "line": 54
                    }
                  }
                }
              },
              "range": [
                1859,
                1888
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 54
                },
                "start": {
                  "column": 24,
                  "line": 54
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 54
            },
            "start": {
              "column": 23,
              "line": 54
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            1846,
            1858
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 54
            },
            "start": {
              "column": 11,
              "line": 54
            }
          }
        },
        "range": [
          1846,
          1889
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 54
          },
          "start": {
            "column": 11,
            "line": 54
          }
        }
      },
      "range": [
        1835,
        1890
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T24",
        "optional": false,
        "range": [
          1907,
          1910
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 55
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1925,
            1959
          ],
          "params": [
            {
              "type": "TSFunctionType",
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
                        "line": 55
                      },
                      "start": {
                        "column": 26,
                        "line": 55
                      }
                    },
                    "range": [
                      1928,
                      1936
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1930,
                        1936
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 55
                        },
                        "start": {
                          "column": 28,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    1927,
                    1936
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 55
                    },
                    "start": {
                      "column": 25,
                      "line": 55
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
                        "line": 55
                      },
                      "start": {
                        "column": 37,
                        "line": 55
                      }
                    },
                    "range": [
                      1939,
                      1947
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1941,
                        1947
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 55
                        },
                        "start": {
                          "column": 39,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    1938,
                    1947
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 55
                    },
                    "start": {
                      "column": 36,
                      "line": 55
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 55
                  },
                  "start": {
                    "column": 47,
                    "line": 55
                  }
                },
                "range": [
                  1949,
                  1958
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1952,
                    1958
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 55
                    },
                    "start": {
                      "column": 50,
                      "line": 55
                    }
                  }
                }
              },
              "range": [
                1926,
                1958
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 55
                },
                "start": {
                  "column": 24,
                  "line": 55
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 55
            },
            "start": {
              "column": 23,
              "line": 55
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            1913,
            1925
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 55
            },
            "start": {
              "column": 11,
              "line": 55
            }
          }
        },
        "range": [
          1913,
          1959
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 55
          },
          "start": {
            "column": 11,
            "line": 55
          }
        }
      },
      "range": [
        1902,
        1960
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T25",
        "optional": false,
        "range": [
          1976,
          1979
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 56
          },
          "start": {
            "column": 5,
            "line": 56
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1994,
            2004
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  1995,
                  2003
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 56
                  },
                  "start": {
                    "column": 24,
                    "line": 56
                  }
                }
              },
              "range": [
                1995,
                2003
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 56
                },
                "start": {
                  "column": 24,
                  "line": 56
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 56
            },
            "start": {
              "column": 23,
              "line": 56
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            1982,
            1994
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 56
            },
            "start": {
              "column": 11,
              "line": 56
            }
          }
        },
        "range": [
          1982,
          2004
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 56
          },
          "start": {
            "column": 11,
            "line": 56
          }
        }
      },
      "range": [
        1971,
        2005
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T26",
        "optional": false,
        "range": [
          2021,
          2024
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 57
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2039,
            2044
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                2040,
                2043
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 57
                },
                "start": {
                  "column": 24,
                  "line": 57
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 57
            },
            "start": {
              "column": 23,
              "line": 57
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            2027,
            2039
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 57
            },
            "start": {
              "column": 11,
              "line": 57
            }
          }
        },
        "range": [
          2027,
          2044
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 57
          },
          "start": {
            "column": 11,
            "line": 57
          }
        }
      },
      "range": [
        2016,
        2045
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T27",
        "optional": false,
        "range": [
          2059,
          2062
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2077,
            2084
          ],
          "params": [
            {
              "type": "TSNeverKeyword",
              "range": [
                2078,
                2083
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 58
                },
                "start": {
                  "column": 24,
                  "line": 58
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 58
            },
            "start": {
              "column": 23,
              "line": 58
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "range": [
            2065,
            2077
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 58
            },
            "start": {
              "column": 11,
              "line": 58
            }
          }
        },
        "range": [
          2065,
          2084
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 58
          },
          "start": {
            "column": 11,
            "line": 58
          }
        }
      },
      "range": [
        2054,
        2085
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "range": [
          2102,
          2104
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2137,
              2138
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 60
              },
              "start": {
                "column": 40,
                "line": 60
              }
            }
          },
          "range": [
            2137,
            2138
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 60
            },
            "start": {
              "column": 40,
              "line": 60
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2149,
                  2150
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 60
                  },
                  "start": {
                    "column": 52,
                    "line": 60
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
                    "column": 62,
                    "line": 60
                  },
                  "start": {
                    "column": 53,
                    "line": 60
                  }
                },
                "range": [
                  2150,
                  2159
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "range": [
                        2158,
                        2159
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 60
                        },
                        "start": {
                          "column": 61,
                          "line": 60
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2158,
                      2159
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 60
                      },
                      "start": {
                        "column": 61,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    2152,
                    2159
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 60
                    },
                    "start": {
                      "column": 55,
                      "line": 60
                    }
                  }
                }
              },
              "range": [
                2149,
                2160
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 60
                },
                "start": {
                  "column": 52,
                  "line": 60
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  2161,
                  2162
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 60
                  },
                  "start": {
                    "column": 64,
                    "line": 60
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
                    "column": 74,
                    "line": 60
                  },
                  "start": {
                    "column": 65,
                    "line": 60
                  }
                },
                "range": [
                  2162,
                  2171
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "range": [
                        2170,
                        2171
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 60
                        },
                        "start": {
                          "column": 73,
                          "line": 60
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2170,
                      2171
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 60
                      },
                      "start": {
                        "column": 73,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    2164,
                    2171
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 60
                    },
                    "start": {
                      "column": 67,
                      "line": 60
                    }
                  }
                }
              },
              "range": [
                2161,
                2171
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 60
                },
                "start": {
                  "column": 64,
                  "line": 60
                }
              }
            }
          ],
          "range": [
            2147,
            2173
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 60
            },
            "start": {
              "column": 50,
              "line": 60
            }
          }
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "range": [
            2185,
            2188
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 60
            },
            "start": {
              "column": 88,
              "line": 60
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "range": [
                  2177,
                  2178
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 60
                  },
                  "start": {
                    "column": 80,
                    "line": 60
                  }
                }
              },
              "range": [
                2177,
                2178
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 60
                },
                "start": {
                  "column": 80,
                  "line": 60
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "range": [
                  2180,
                  2181
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 60
                  },
                  "start": {
                    "column": 83,
                    "line": 60
                  }
                }
              },
              "range": [
                2180,
                2181
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 60
                },
                "start": {
                  "column": 83,
                  "line": 60
                }
              }
            }
          ],
          "range": [
            2176,
            2182
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 60
            },
            "start": {
              "column": 79,
              "line": 60
            }
          }
        },
        "range": [
          2137,
          2188
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 60
          },
          "start": {
            "column": 40,
            "line": 60
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 60
          },
          "start": {
            "column": 7,
            "line": 60
          }
        },
        "range": [
          2104,
          2134
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      2117,
                      2118
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 60
                      },
                      "start": {
                        "column": 20,
                        "line": 60
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
                        "column": 26,
                        "line": 60
                      },
                      "start": {
                        "column": 21,
                        "line": 60
                      }
                    },
                    "range": [
                      2118,
                      2123
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2120,
                        2123
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 60
                        },
                        "start": {
                          "column": 23,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    2117,
                    2124
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 60
                    },
                    "start": {
                      "column": 20,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      2125,
                      2126
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 60
                      },
                      "start": {
                        "column": 28,
                        "line": 60
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
                        "line": 60
                      },
                      "start": {
                        "column": 29,
                        "line": 60
                      }
                    },
                    "range": [
                      2126,
                      2131
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2128,
                        2131
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 60
                        },
                        "start": {
                          "column": 31,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    2125,
                    2131
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 60
                    },
                    "start": {
                      "column": 28,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                2115,
                2133
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 60
                },
                "start": {
                  "column": 18,
                  "line": 60
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
                2105,
                2106
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 60
                }
              }
            },
            "out": false,
            "range": [
              2105,
              2133
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 60
              },
              "start": {
                "column": 8,
                "line": 60
              }
            }
          }
        ]
      },
      "range": [
        2097,
        2189
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "range": [
          2196,
          2199
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 62
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2204,
            2224
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2207,
                      2208
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 62
                      },
                      "start": {
                        "column": 16,
                        "line": 62
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
                        "column": 22,
                        "line": 62
                      },
                      "start": {
                        "column": 17,
                        "line": 62
                      }
                    },
                    "range": [
                      2208,
                      2213
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2210,
                        2213
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 62
                        },
                        "start": {
                          "column": 19,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    2207,
                    2214
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 62
                    },
                    "start": {
                      "column": 16,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      2215,
                      2216
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 62
                      },
                      "start": {
                        "column": 24,
                        "line": 62
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
                        "line": 62
                      },
                      "start": {
                        "column": 25,
                        "line": 62
                      }
                    },
                    "range": [
                      2216,
                      2221
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2218,
                        2221
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 62
                        },
                        "start": {
                          "column": 27,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    2215,
                    2221
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 62
                    },
                    "start": {
                      "column": 24,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                2205,
                2223
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 62
                },
                "start": {
                  "column": 14,
                  "line": 62
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 62
            },
            "start": {
              "column": 13,
              "line": 62
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "range": [
            2202,
            2204
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 62
            },
            "start": {
              "column": 11,
              "line": 62
            }
          }
        },
        "range": [
          2202,
          2224
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 62
          },
          "start": {
            "column": 11,
            "line": 62
          }
        }
      },
      "range": [
        2191,
        2225
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "range": [
          2246,
          2249
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 63
          },
          "start": {
            "column": 5,
            "line": 63
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2254,
            2280
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2257,
                      2258
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 63
                      },
                      "start": {
                        "column": 17,
                        "line": 63
                      }
                    },
                    "range": [
                      2258,
                      2266
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2260,
                        2266
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 63
                        },
                        "start": {
                          "column": 19,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    2257,
                    2267
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 63
                    },
                    "start": {
                      "column": 16,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      2268,
                      2269
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 63
                      },
                      "start": {
                        "column": 27,
                        "line": 63
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
                        "line": 63
                      },
                      "start": {
                        "column": 28,
                        "line": 63
                      }
                    },
                    "range": [
                      2269,
                      2277
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2271,
                        2277
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 63
                        },
                        "start": {
                          "column": 30,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    2268,
                    2277
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 63
                    },
                    "start": {
                      "column": 27,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                2255,
                2279
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 63
                },
                "start": {
                  "column": 14,
                  "line": 63
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 63
            },
            "start": {
              "column": 13,
              "line": 63
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "range": [
            2252,
            2254
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 63
            },
            "start": {
              "column": 11,
              "line": 63
            }
          }
        },
        "range": [
          2252,
          2280
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 63
          },
          "start": {
            "column": 11,
            "line": 63
          }
        }
      },
      "range": [
        2241,
        2281
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "range": [
          2308,
          2311
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 64
          },
          "start": {
            "column": 5,
            "line": 64
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2316,
            2354
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2319,
                      2320
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 64
                      },
                      "start": {
                        "column": 16,
                        "line": 64
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
                        "column": 25,
                        "line": 64
                      },
                      "start": {
                        "column": 17,
                        "line": 64
                      }
                    },
                    "range": [
                      2320,
                      2328
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2322,
                        2328
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 64
                        },
                        "start": {
                          "column": 19,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    2319,
                    2329
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 64
                    },
                    "start": {
                      "column": 16,
                      "line": 64
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      2330,
                      2331
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 64
                      },
                      "start": {
                        "column": 27,
                        "line": 64
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
                        "line": 64
                      },
                      "start": {
                        "column": 28,
                        "line": 64
                      }
                    },
                    "range": [
                      2331,
                      2339
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2333,
                        2339
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 64
                        },
                        "start": {
                          "column": 30,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    2330,
                    2340
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 64
                    },
                    "start": {
                      "column": 27,
                      "line": 64
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      2341,
                      2342
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 64
                      },
                      "start": {
                        "column": 38,
                        "line": 64
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
                        "column": 48,
                        "line": 64
                      },
                      "start": {
                        "column": 39,
                        "line": 64
                      }
                    },
                    "range": [
                      2342,
                      2351
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2344,
                        2351
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 64
                        },
                        "start": {
                          "column": 41,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    2341,
                    2351
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 64
                    },
                    "start": {
                      "column": 38,
                      "line": 64
                    }
                  }
                }
              ],
              "range": [
                2317,
                2353
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 64
                },
                "start": {
                  "column": 14,
                  "line": 64
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 64
            },
            "start": {
              "column": 13,
              "line": 64
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X1",
          "optional": false,
          "range": [
            2314,
            2316
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 64
            },
            "start": {
              "column": 11,
              "line": 64
            }
          }
        },
        "range": [
          2314,
          2354
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 64
          },
          "start": {
            "column": 11,
            "line": 64
          }
        }
      },
      "range": [
        2303,
        2355
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "range": [
          2383,
          2385
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 66
          },
          "start": {
            "column": 5,
            "line": 66
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2391,
              2392
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 66
              },
              "start": {
                "column": 13,
                "line": 66
              }
            }
          },
          "range": [
            2391,
            2392
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 66
            },
            "start": {
              "column": 13,
              "line": 66
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  2403,
                  2404
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 66
                  },
                  "start": {
                    "column": 25,
                    "line": 66
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
                    "column": 35,
                    "line": 66
                  },
                  "start": {
                    "column": 26,
                    "line": 66
                  }
                },
                "range": [
                  2404,
                  2413
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        2412,
                        2413
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 66
                        },
                        "start": {
                          "column": 34,
                          "line": 66
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2412,
                      2413
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 66
                      },
                      "start": {
                        "column": 34,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    2406,
                    2413
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 66
                    },
                    "start": {
                      "column": 28,
                      "line": 66
                    }
                  }
                }
              },
              "range": [
                2403,
                2414
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 66
                },
                "start": {
                  "column": 25,
                  "line": 66
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
                  2415,
                  2416
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 66
                  },
                  "start": {
                    "column": 37,
                    "line": 66
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
                    "column": 47,
                    "line": 66
                  },
                  "start": {
                    "column": 38,
                    "line": 66
                  }
                },
                "range": [
                  2416,
                  2425
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        2424,
                        2425
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 66
                        },
                        "start": {
                          "column": 46,
                          "line": 66
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2424,
                      2425
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 66
                      },
                      "start": {
                        "column": 46,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    2418,
                    2425
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 66
                    },
                    "start": {
                      "column": 40,
                      "line": 66
                    }
                  }
                }
              },
              "range": [
                2415,
                2425
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 66
                },
                "start": {
                  "column": 37,
                  "line": 66
                }
              }
            }
          ],
          "range": [
            2401,
            2427
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 66
            },
            "start": {
              "column": 23,
              "line": 66
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2434,
            2439
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 66
            },
            "start": {
              "column": 56,
              "line": 66
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              2430,
              2431
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 66
              },
              "start": {
                "column": 52,
                "line": 66
              }
            }
          },
          "range": [
            2430,
            2431
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 66
            },
            "start": {
              "column": 52,
              "line": 66
            }
          }
        },
        "range": [
          2391,
          2439
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 66
          },
          "start": {
            "column": 13,
            "line": 66
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 66
          },
          "start": {
            "column": 7,
            "line": 66
          }
        },
        "range": [
          2385,
          2388
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
                2386,
                2387
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 66
                },
                "start": {
                  "column": 8,
                  "line": 66
                }
              }
            },
            "out": false,
            "range": [
              2386,
              2387
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 66
              },
              "start": {
                "column": 8,
                "line": 66
              }
            }
          }
        ]
      },
      "range": [
        2378,
        2440
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "range": [
          2447,
          2450
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2455,
            2459
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                2456,
                2458
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 68
                },
                "start": {
                  "column": 14,
                  "line": 68
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 68
            },
            "start": {
              "column": 13,
              "line": 68
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            2453,
            2455
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 68
            },
            "start": {
              "column": 11,
              "line": 68
            }
          }
        },
        "range": [
          2453,
          2459
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 68
          },
          "start": {
            "column": 11,
            "line": 68
          }
        }
      },
      "range": [
        2442,
        2460
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "range": [
          2476,
          2479
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 69
          },
          "start": {
            "column": 5,
            "line": 69
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2484,
            2499
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2487,
                      2488
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 69
                      },
                      "start": {
                        "column": 16,
                        "line": 69
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
                        "column": 25,
                        "line": 69
                      },
                      "start": {
                        "column": 17,
                        "line": 69
                      }
                    },
                    "range": [
                      2488,
                      2496
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2490,
                        2496
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 69
                        },
                        "start": {
                          "column": 19,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    2487,
                    2496
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 69
                    },
                    "start": {
                      "column": 16,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                2485,
                2498
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            }
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
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            2482,
            2484
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 69
            },
            "start": {
              "column": 11,
              "line": 69
            }
          }
        },
        "range": [
          2482,
          2499
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 69
          },
          "start": {
            "column": 11,
            "line": 69
          }
        }
      },
      "range": [
        2471,
        2500
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 69
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
        "name": "T42",
        "optional": false,
        "range": [
          2516,
          2519
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 70
          },
          "start": {
            "column": 5,
            "line": 70
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2524,
            2550
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2527,
                      2528
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 70
                      },
                      "start": {
                        "column": 16,
                        "line": 70
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
                        "column": 25,
                        "line": 70
                      },
                      "start": {
                        "column": 17,
                        "line": 70
                      }
                    },
                    "range": [
                      2528,
                      2536
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2530,
                        2536
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 70
                        },
                        "start": {
                          "column": 19,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    2527,
                    2537
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 70
                    },
                    "start": {
                      "column": 16,
                      "line": 70
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
                      2538,
                      2539
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 70
                      },
                      "start": {
                        "column": 27,
                        "line": 70
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
                        "line": 70
                      },
                      "start": {
                        "column": 28,
                        "line": 70
                      }
                    },
                    "range": [
                      2539,
                      2547
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2541,
                        2547
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 70
                        },
                        "start": {
                          "column": 30,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    2538,
                    2547
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 70
                    },
                    "start": {
                      "column": 27,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                2525,
                2549
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 70
                },
                "start": {
                  "column": 14,
                  "line": 70
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 70
            },
            "start": {
              "column": 13,
              "line": 70
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            2522,
            2524
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 70
            },
            "start": {
              "column": 11,
              "line": 70
            }
          }
        },
        "range": [
          2522,
          2550
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 70
          },
          "start": {
            "column": 11,
            "line": 70
          }
        }
      },
      "range": [
        2511,
        2551
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "range": [
          2568,
          2571
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 71
          },
          "start": {
            "column": 5,
            "line": 71
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2576,
            2602
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2579,
                      2580
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 71
                      },
                      "start": {
                        "column": 16,
                        "line": 71
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
                        "column": 25,
                        "line": 71
                      },
                      "start": {
                        "column": 17,
                        "line": 71
                      }
                    },
                    "range": [
                      2580,
                      2588
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2582,
                        2588
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 71
                        },
                        "start": {
                          "column": 19,
                          "line": 71
                        }
                      }
                    }
                  },
                  "range": [
                    2579,
                    2589
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 71
                    },
                    "start": {
                      "column": 16,
                      "line": 71
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
                      2590,
                      2591
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 71
                      },
                      "start": {
                        "column": 27,
                        "line": 71
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
                        "line": 71
                      },
                      "start": {
                        "column": 28,
                        "line": 71
                      }
                    },
                    "range": [
                      2591,
                      2599
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2593,
                        2599
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 71
                        },
                        "start": {
                          "column": 30,
                          "line": 71
                        }
                      }
                    }
                  },
                  "range": [
                    2590,
                    2599
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 71
                    },
                    "start": {
                      "column": 27,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                2577,
                2601
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 71
                },
                "start": {
                  "column": 14,
                  "line": 71
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 71
            },
            "start": {
              "column": 13,
              "line": 71
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            2574,
            2576
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 71
            },
            "start": {
              "column": 11,
              "line": 71
            }
          }
        },
        "range": [
          2574,
          2602
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 71
          },
          "start": {
            "column": 11,
            "line": 71
          }
        }
      },
      "range": [
        2563,
        2603
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T44",
        "optional": false,
        "range": [
          2629,
          2632
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 72
          },
          "start": {
            "column": 5,
            "line": 72
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2637,
            2675
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2640,
                      2641
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 72
                      },
                      "start": {
                        "column": 16,
                        "line": 72
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
                        "column": 25,
                        "line": 72
                      },
                      "start": {
                        "column": 17,
                        "line": 72
                      }
                    },
                    "range": [
                      2641,
                      2649
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2643,
                        2649
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 72
                        },
                        "start": {
                          "column": 19,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    2640,
                    2650
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 72
                    },
                    "start": {
                      "column": 16,
                      "line": 72
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
                      2651,
                      2652
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 72
                      },
                      "start": {
                        "column": 27,
                        "line": 72
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
                        "line": 72
                      },
                      "start": {
                        "column": 28,
                        "line": 72
                      }
                    },
                    "range": [
                      2652,
                      2660
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2654,
                        2660
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 72
                        },
                        "start": {
                          "column": 30,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    2651,
                    2661
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 72
                    },
                    "start": {
                      "column": 27,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      2662,
                      2663
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 72
                      },
                      "start": {
                        "column": 38,
                        "line": 72
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
                        "column": 48,
                        "line": 72
                      },
                      "start": {
                        "column": 39,
                        "line": 72
                      }
                    },
                    "range": [
                      2663,
                      2672
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2665,
                        2672
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 72
                        },
                        "start": {
                          "column": 41,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    2662,
                    2672
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 72
                    },
                    "start": {
                      "column": 38,
                      "line": 72
                    }
                  }
                }
              ],
              "range": [
                2638,
                2674
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 72
                },
                "start": {
                  "column": 14,
                  "line": 72
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 72
            },
            "start": {
              "column": 13,
              "line": 72
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X2",
          "optional": false,
          "range": [
            2635,
            2637
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 72
            },
            "start": {
              "column": 11,
              "line": 72
            }
          }
        },
        "range": [
          2635,
          2675
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 72
          },
          "start": {
            "column": 11,
            "line": 72
          }
        }
      },
      "range": [
        2624,
        2676
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "range": [
          2703,
          2705
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 74
          },
          "start": {
            "column": 5,
            "line": 74
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2711,
              2712
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 74
              },
              "start": {
                "column": 13,
                "line": 74
              }
            }
          },
          "range": [
            2711,
            2712
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 74
            },
            "start": {
              "column": 13,
              "line": 74
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  2723,
                  2724
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 74
                  },
                  "start": {
                    "column": 25,
                    "line": 74
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
                    "column": 48,
                    "line": 74
                  },
                  "start": {
                    "column": 26,
                    "line": 74
                  }
                },
                "range": [
                  2724,
                  2746
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
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
                            "line": 74
                          },
                          "start": {
                            "column": 30,
                            "line": 74
                          }
                        },
                        "range": [
                          2728,
                          2737
                        ],
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                2736,
                                2737
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 74
                                },
                                "start": {
                                  "column": 38,
                                  "line": 74
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              2736,
                              2737
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 74
                              },
                              "start": {
                                "column": 38,
                                "line": 74
                              }
                            }
                          },
                          "range": [
                            2730,
                            2737
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 74
                            },
                            "start": {
                              "column": 32,
                              "line": 74
                            }
                          }
                        }
                      },
                      "range": [
                        2727,
                        2737
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 74
                        },
                        "start": {
                          "column": 29,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 74
                      },
                      "start": {
                        "column": 41,
                        "line": 74
                      }
                    },
                    "range": [
                      2739,
                      2746
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        2742,
                        2746
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 74
                        },
                        "start": {
                          "column": 44,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    2726,
                    2746
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 74
                    },
                    "start": {
                      "column": 28,
                      "line": 74
                    }
                  }
                }
              },
              "range": [
                2723,
                2747
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 74
                },
                "start": {
                  "column": 25,
                  "line": 74
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
                  2748,
                  2749
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 74
                  },
                  "start": {
                    "column": 50,
                    "line": 74
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
                    "column": 73,
                    "line": 74
                  },
                  "start": {
                    "column": 51,
                    "line": 74
                  }
                },
                "range": [
                  2749,
                  2771
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
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
                            "column": 64,
                            "line": 74
                          },
                          "start": {
                            "column": 55,
                            "line": 74
                          }
                        },
                        "range": [
                          2753,
                          2762
                        ],
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                2761,
                                2762
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 74
                                },
                                "start": {
                                  "column": 63,
                                  "line": 74
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              2761,
                              2762
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 74
                              },
                              "start": {
                                "column": 63,
                                "line": 74
                              }
                            }
                          },
                          "range": [
                            2755,
                            2762
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 74
                            },
                            "start": {
                              "column": 57,
                              "line": 74
                            }
                          }
                        }
                      },
                      "range": [
                        2752,
                        2762
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 74
                        },
                        "start": {
                          "column": 54,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 74
                      },
                      "start": {
                        "column": 66,
                        "line": 74
                      }
                    },
                    "range": [
                      2764,
                      2771
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        2767,
                        2771
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 74
                        },
                        "start": {
                          "column": 69,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    2751,
                    2771
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 74
                    },
                    "start": {
                      "column": 53,
                      "line": 74
                    }
                  }
                }
              },
              "range": [
                2748,
                2771
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 74
                },
                "start": {
                  "column": 50,
                  "line": 74
                }
              }
            }
          ],
          "range": [
            2721,
            2773
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 74
            },
            "start": {
              "column": 23,
              "line": 74
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            2780,
            2785
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 74
            },
            "start": {
              "column": 82,
              "line": 74
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              2776,
              2777
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 74
              },
              "start": {
                "column": 78,
                "line": 74
              }
            }
          },
          "range": [
            2776,
            2777
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 74
            },
            "start": {
              "column": 78,
              "line": 74
            }
          }
        },
        "range": [
          2711,
          2785
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 74
          },
          "start": {
            "column": 13,
            "line": 74
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 74
          },
          "start": {
            "column": 7,
            "line": 74
          }
        },
        "range": [
          2705,
          2708
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
                2706,
                2707
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
            "out": false,
            "range": [
              2706,
              2707
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
          }
        ]
      },
      "range": [
        2698,
        2786
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "range": [
          2793,
          2796
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2801,
            2805
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                2802,
                2804
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 76
                },
                "start": {
                  "column": 14,
                  "line": 76
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 76
            },
            "start": {
              "column": 13,
              "line": 76
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            2799,
            2801
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 76
            },
            "start": {
              "column": 11,
              "line": 76
            }
          }
        },
        "range": [
          2799,
          2805
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 76
          },
          "start": {
            "column": 11,
            "line": 76
          }
        }
      },
      "range": [
        2788,
        2806
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T51",
        "optional": false,
        "range": [
          2822,
          2825
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 77
          },
          "start": {
            "column": 5,
            "line": 77
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2830,
            2858
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2833,
                      2834
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 77
                      },
                      "start": {
                        "column": 16,
                        "line": 77
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
                        "column": 38,
                        "line": 77
                      },
                      "start": {
                        "column": 17,
                        "line": 77
                      }
                    },
                    "range": [
                      2834,
                      2855
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "line": 77
                              },
                              "start": {
                                "column": 21,
                                "line": 77
                              }
                            },
                            "range": [
                              2838,
                              2846
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2840,
                                2846
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 77
                                },
                                "start": {
                                  "column": 23,
                                  "line": 77
                                }
                              }
                            }
                          },
                          "range": [
                            2837,
                            2846
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 77
                            },
                            "start": {
                              "column": 20,
                              "line": 77
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 77
                          },
                          "start": {
                            "column": 31,
                            "line": 77
                          }
                        },
                        "range": [
                          2848,
                          2855
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            2851,
                            2855
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 77
                            },
                            "start": {
                              "column": 34,
                              "line": 77
                            }
                          }
                        }
                      },
                      "range": [
                        2836,
                        2855
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 77
                        },
                        "start": {
                          "column": 19,
                          "line": 77
                        }
                      }
                    }
                  },
                  "range": [
                    2833,
                    2855
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 77
                    },
                    "start": {
                      "column": 16,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                2831,
                2857
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 77
                },
                "start": {
                  "column": 14,
                  "line": 77
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 77
            },
            "start": {
              "column": 13,
              "line": 77
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            2828,
            2830
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 77
            },
            "start": {
              "column": 11,
              "line": 77
            }
          }
        },
        "range": [
          2828,
          2858
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 77
          },
          "start": {
            "column": 11,
            "line": 77
          }
        }
      },
      "range": [
        2817,
        2859
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "range": [
          2875,
          2878
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 78
          },
          "start": {
            "column": 5,
            "line": 78
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2883,
            2935
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2886,
                      2887
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 78
                      },
                      "start": {
                        "column": 16,
                        "line": 78
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
                        "column": 38,
                        "line": 78
                      },
                      "start": {
                        "column": 17,
                        "line": 78
                      }
                    },
                    "range": [
                      2887,
                      2908
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "line": 78
                              },
                              "start": {
                                "column": 21,
                                "line": 78
                              }
                            },
                            "range": [
                              2891,
                              2899
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2893,
                                2899
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 78
                                },
                                "start": {
                                  "column": 23,
                                  "line": 78
                                }
                              }
                            }
                          },
                          "range": [
                            2890,
                            2899
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 78
                            },
                            "start": {
                              "column": 20,
                              "line": 78
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 78
                          },
                          "start": {
                            "column": 31,
                            "line": 78
                          }
                        },
                        "range": [
                          2901,
                          2908
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            2904,
                            2908
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 78
                            },
                            "start": {
                              "column": 34,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        2889,
                        2908
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 78
                        },
                        "start": {
                          "column": 19,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    2886,
                    2909
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 78
                    },
                    "start": {
                      "column": 16,
                      "line": 78
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
                      2910,
                      2911
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 78
                      },
                      "start": {
                        "column": 40,
                        "line": 78
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
                        "column": 62,
                        "line": 78
                      },
                      "start": {
                        "column": 41,
                        "line": 78
                      }
                    },
                    "range": [
                      2911,
                      2932
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 53,
                                "line": 78
                              },
                              "start": {
                                "column": 45,
                                "line": 78
                              }
                            },
                            "range": [
                              2915,
                              2923
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2917,
                                2923
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 78
                                },
                                "start": {
                                  "column": 47,
                                  "line": 78
                                }
                              }
                            }
                          },
                          "range": [
                            2914,
                            2923
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 78
                            },
                            "start": {
                              "column": 44,
                              "line": 78
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 78
                          },
                          "start": {
                            "column": 55,
                            "line": 78
                          }
                        },
                        "range": [
                          2925,
                          2932
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            2928,
                            2932
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 78
                            },
                            "start": {
                              "column": 58,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        2913,
                        2932
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 78
                        },
                        "start": {
                          "column": 43,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    2910,
                    2932
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 78
                    },
                    "start": {
                      "column": 40,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                2884,
                2934
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 78
                },
                "start": {
                  "column": 14,
                  "line": 78
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 78
            },
            "start": {
              "column": 13,
              "line": 78
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            2881,
            2883
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 78
            },
            "start": {
              "column": 11,
              "line": 78
            }
          }
        },
        "range": [
          2881,
          2935
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 78
          },
          "start": {
            "column": 11,
            "line": 78
          }
        }
      },
      "range": [
        2870,
        2936
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "range": [
          2953,
          2956
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 79
          },
          "start": {
            "column": 5,
            "line": 79
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2961,
            3013
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      2964,
                      2965
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 79
                      },
                      "start": {
                        "column": 16,
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
                        "column": 38,
                        "line": 79
                      },
                      "start": {
                        "column": 17,
                        "line": 79
                      }
                    },
                    "range": [
                      2965,
                      2986
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "line": 79
                              },
                              "start": {
                                "column": 21,
                                "line": 79
                              }
                            },
                            "range": [
                              2969,
                              2977
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                2971,
                                2977
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 79
                                },
                                "start": {
                                  "column": 23,
                                  "line": 79
                                }
                              }
                            }
                          },
                          "range": [
                            2968,
                            2977
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 79
                            },
                            "start": {
                              "column": 20,
                              "line": 79
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 79
                          },
                          "start": {
                            "column": 31,
                            "line": 79
                          }
                        },
                        "range": [
                          2979,
                          2986
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            2982,
                            2986
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 79
                            },
                            "start": {
                              "column": 34,
                              "line": 79
                            }
                          }
                        }
                      },
                      "range": [
                        2967,
                        2986
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 79
                        },
                        "start": {
                          "column": 19,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    2964,
                    2987
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      2988,
                      2989
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 79
                      },
                      "start": {
                        "column": 40,
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
                        "column": 62,
                        "line": 79
                      },
                      "start": {
                        "column": 41,
                        "line": 79
                      }
                    },
                    "range": [
                      2989,
                      3010
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 53,
                                "line": 79
                              },
                              "start": {
                                "column": 45,
                                "line": 79
                              }
                            },
                            "range": [
                              2993,
                              3001
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2995,
                                3001
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 79
                                },
                                "start": {
                                  "column": 47,
                                  "line": 79
                                }
                              }
                            }
                          },
                          "range": [
                            2992,
                            3001
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 79
                            },
                            "start": {
                              "column": 44,
                              "line": 79
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 79
                          },
                          "start": {
                            "column": 55,
                            "line": 79
                          }
                        },
                        "range": [
                          3003,
                          3010
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            3006,
                            3010
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 79
                            },
                            "start": {
                              "column": 58,
                              "line": 79
                            }
                          }
                        }
                      },
                      "range": [
                        2991,
                        3010
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 79
                        },
                        "start": {
                          "column": 43,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    2988,
                    3010
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 79
                    },
                    "start": {
                      "column": 40,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                2962,
                3012
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 79
                },
                "start": {
                  "column": 14,
                  "line": 79
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 79
            },
            "start": {
              "column": 13,
              "line": 79
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            2959,
            2961
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 79
            },
            "start": {
              "column": 11,
              "line": 79
            }
          }
        },
        "range": [
          2959,
          3013
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 79
          },
          "start": {
            "column": 11,
            "line": 79
          }
        }
      },
      "range": [
        2948,
        3014
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T54",
        "optional": false,
        "range": [
          3030,
          3033
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 80
          },
          "start": {
            "column": 5,
            "line": 80
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            3038,
            3081
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      3041,
                      3042
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 80
                      },
                      "start": {
                        "column": 16,
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
                        "column": 38,
                        "line": 80
                      },
                      "start": {
                        "column": 17,
                        "line": 80
                      }
                    },
                    "range": [
                      3042,
                      3063
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "line": 80
                              },
                              "start": {
                                "column": 21,
                                "line": 80
                              }
                            },
                            "range": [
                              3046,
                              3054
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                3048,
                                3054
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 80
                                },
                                "start": {
                                  "column": 23,
                                  "line": 80
                                }
                              }
                            }
                          },
                          "range": [
                            3045,
                            3054
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 80
                            },
                            "start": {
                              "column": 20,
                              "line": 80
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 80
                          },
                          "start": {
                            "column": 31,
                            "line": 80
                          }
                        },
                        "range": [
                          3056,
                          3063
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            3059,
                            3063
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 80
                            },
                            "start": {
                              "column": 34,
                              "line": 80
                            }
                          }
                        }
                      },
                      "range": [
                        3044,
                        3063
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 80
                        },
                        "start": {
                          "column": 19,
                          "line": 80
                        }
                      }
                    }
                  },
                  "range": [
                    3041,
                    3064
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 80
                    },
                    "start": {
                      "column": 16,
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
                      3065,
                      3066
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 80
                      },
                      "start": {
                        "column": 40,
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
                        "column": 53,
                        "line": 80
                      },
                      "start": {
                        "column": 41,
                        "line": 80
                      }
                    },
                    "range": [
                      3066,
                      3078
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 80
                          },
                          "start": {
                            "column": 46,
                            "line": 80
                          }
                        },
                        "range": [
                          3071,
                          3078
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            3074,
                            3078
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 80
                            },
                            "start": {
                              "column": 49,
                              "line": 80
                            }
                          }
                        }
                      },
                      "range": [
                        3068,
                        3078
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 80
                        },
                        "start": {
                          "column": 43,
                          "line": 80
                        }
                      }
                    }
                  },
                  "range": [
                    3065,
                    3078
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 80
                    },
                    "start": {
                      "column": 40,
                      "line": 80
                    }
                  }
                }
              ],
              "range": [
                3039,
                3080
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 80
                },
                "start": {
                  "column": 14,
                  "line": 80
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 80
            },
            "start": {
              "column": 13,
              "line": 80
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X3",
          "optional": false,
          "range": [
            3036,
            3038
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 80
            },
            "start": {
              "column": 11,
              "line": 80
            }
          }
        },
        "range": [
          3036,
          3081
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 80
          },
          "start": {
            "column": 11,
            "line": 80
          }
        }
      },
      "range": [
        3025,
        3082
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T60",
        "optional": false,
        "range": [
          3100,
          3103
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 82
          }
        }
      },
      "typeAnnotation": {
        "type": "TSInferType",
        "typeParameter": {
          "type": "TSTypeParameter",
          "const": false,
          "in": false,
          "name": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              3112,
              3113
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
          "out": false,
          "range": [
            3112,
            3113
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
          3106,
          3113
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 82
          },
          "start": {
            "column": 11,
            "line": 82
          }
        }
      },
      "range": [
        3095,
        3114
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T61",
        "optional": false,
        "range": [
          3130,
          3133
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 83
          },
          "start": {
            "column": 5,
            "line": 83
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                3146,
                3147
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 83
                },
                "start": {
                  "column": 21,
                  "line": 83
                }
              }
            },
            "out": false,
            "range": [
              3146,
              3147
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 83
              },
              "start": {
                "column": 21,
                "line": 83
              }
            }
          },
          "range": [
            3140,
            3147
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 83
            },
            "start": {
              "column": 15,
              "line": 83
            }
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                3163,
                3164
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 83
                },
                "start": {
                  "column": 38,
                  "line": 83
                }
              }
            },
            "out": false,
            "range": [
              3163,
              3164
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 83
              },
              "start": {
                "column": 38,
                "line": 83
              }
            }
          },
          "range": [
            3157,
            3164
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 83
            },
            "start": {
              "column": 32,
              "line": 83
            }
          }
        },
        "falseType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                3183,
                3184
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 83
                },
                "start": {
                  "column": 58,
                  "line": 83
                }
              }
            },
            "out": false,
            "range": [
              3183,
              3184
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 83
              },
              "start": {
                "column": 58,
                "line": 83
              }
            }
          },
          "range": [
            3177,
            3184
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 83
            },
            "start": {
              "column": 52,
              "line": 83
            }
          }
        },
        "trueType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                3173,
                3174
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 83
                },
                "start": {
                  "column": 48,
                  "line": 83
                }
              }
            },
            "out": false,
            "range": [
              3173,
              3174
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 83
              },
              "start": {
                "column": 48,
                "line": 83
              }
            }
          },
          "range": [
            3167,
            3174
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 83
            },
            "start": {
              "column": 42,
              "line": 83
            }
          }
        },
        "range": [
          3139,
          3184
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 83
          },
          "start": {
            "column": 14,
            "line": 83
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 83
          },
          "start": {
            "column": 8,
            "line": 83
          }
        },
        "range": [
          3133,
          3136
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
                3134,
                3135
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 83
                },
                "start": {
                  "column": 9,
                  "line": 83
                }
              }
            },
            "out": false,
            "range": [
              3134,
              3135
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 83
              },
              "start": {
                "column": 9,
                "line": 83
              }
            }
          }
        ]
      },
      "range": [
        3125,
        3185
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T62",
        "optional": false,
        "range": [
          3201,
          3204
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 84
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              3210,
              3211
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 84
              },
              "start": {
                "column": 14,
                "line": 84
              }
            }
          },
          "range": [
            3210,
            3211
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 84
            },
            "start": {
              "column": 14,
              "line": 84
            }
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  3227,
                  3228
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 84
                  },
                  "start": {
                    "column": 31,
                    "line": 84
                  }
                }
              },
              "out": false,
              "range": [
                3227,
                3228
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 84
                },
                "start": {
                  "column": 31,
                  "line": 84
                }
              }
            },
            "range": [
              3221,
              3228
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 84
              },
              "start": {
                "column": 25,
                "line": 84
              }
            }
          },
          "range": [
            3220,
            3231
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 84
            },
            "start": {
              "column": 24,
              "line": 84
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              3238,
              3239
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 84
              },
              "start": {
                "column": 42,
                "line": 84
              }
            }
          },
          "range": [
            3238,
            3239
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 84
            },
            "start": {
              "column": 42,
              "line": 84
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              3234,
              3235
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 84
              },
              "start": {
                "column": 38,
                "line": 84
              }
            }
          },
          "range": [
            3234,
            3235
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 84
            },
            "start": {
              "column": 38,
              "line": 84
            }
          }
        },
        "range": [
          3210,
          3239
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 84
          },
          "start": {
            "column": 14,
            "line": 84
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 84
          },
          "start": {
            "column": 8,
            "line": 84
          }
        },
        "range": [
          3204,
          3207
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
                3205,
                3206
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              3205,
              3206
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 84
              },
              "start": {
                "column": 9,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        3196,
        3240
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T63",
        "optional": false,
        "range": [
          3256,
          3259
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 85
          },
          "start": {
            "column": 5,
            "line": 85
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3265,
              3266
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 85
              },
              "start": {
                "column": 14,
                "line": 85
              }
            }
          },
          "range": [
            3265,
            3266
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 85
            },
            "start": {
              "column": 14,
              "line": 85
            }
          }
        },
        "extendsType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  3283,
                  3284
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 85
                  },
                  "start": {
                    "column": 32,
                    "line": 85
                  }
                }
              },
              "out": false,
              "range": [
                3283,
                3284
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 85
                },
                "start": {
                  "column": 32,
                  "line": 85
                }
              }
            },
            "range": [
              3277,
              3284
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 85
              },
              "start": {
                "column": 26,
                "line": 85
              }
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  3300,
                  3301
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 85
                  },
                  "start": {
                    "column": 49,
                    "line": 85
                  }
                }
              },
              "out": false,
              "range": [
                3300,
                3301
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 85
                },
                "start": {
                  "column": 49,
                  "line": 85
                }
              }
            },
            "range": [
              3294,
              3301
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 85
              },
              "start": {
                "column": 43,
                "line": 85
              }
            }
          },
          "falseType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  3320,
                  3321
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 85
                  },
                  "start": {
                    "column": 69,
                    "line": 85
                  }
                }
              },
              "out": false,
              "range": [
                3320,
                3321
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 85
                },
                "start": {
                  "column": 69,
                  "line": 85
                }
              }
            },
            "range": [
              3314,
              3321
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 85
              },
              "start": {
                "column": 63,
                "line": 85
              }
            }
          },
          "trueType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  3310,
                  3311
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 85
                  },
                  "start": {
                    "column": 59,
                    "line": 85
                  }
                }
              },
              "out": false,
              "range": [
                3310,
                3311
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 85
                },
                "start": {
                  "column": 59,
                  "line": 85
                }
              }
            },
            "range": [
              3304,
              3311
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 85
              },
              "start": {
                "column": 53,
                "line": 85
              }
            }
          },
          "range": [
            3276,
            3321
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 85
            },
            "start": {
              "column": 25,
              "line": 85
            }
          }
        },
        "falseType": {
          "type": "TSNumberKeyword",
          "range": [
            3334,
            3340
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 85
            },
            "start": {
              "column": 83,
              "line": 85
            }
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "range": [
            3325,
            3331
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 85
            },
            "start": {
              "column": 74,
              "line": 85
            }
          }
        },
        "range": [
          3265,
          3340
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 85
          },
          "start": {
            "column": 14,
            "line": 85
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 85
          },
          "start": {
            "column": 8,
            "line": 85
          }
        },
        "range": [
          3259,
          3262
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
                3260,
                3261
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 85
                },
                "start": {
                  "column": 9,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              3260,
              3261
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 85
              },
              "start": {
                "column": 9,
                "line": 85
              }
            }
          }
        ]
      },
      "range": [
        3251,
        3341
      ],
      "loc": {
        "end": {
          "column": 90,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T70",
        "optional": false,
        "range": [
          3348,
          3351
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 87
          },
          "start": {
            "column": 5,
            "line": 87
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
              "name": "x",
              "optional": false,
              "range": [
                3374,
                3375
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 87
                },
                "start": {
                  "column": 31,
                  "line": 87
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
                  "column": 35,
                  "line": 87
                },
                "start": {
                  "column": 32,
                  "line": 87
                }
              },
              "range": [
                3375,
                3378
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3377,
                    3378
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 87
                    },
                    "start": {
                      "column": 34,
                      "line": 87
                    }
                  }
                },
                "range": [
                  3377,
                  3378
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 87
                  },
                  "start": {
                    "column": 34,
                    "line": 87
                  }
                }
              }
            },
            "range": [
              3374,
              3378
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 87
              },
              "start": {
                "column": 31,
                "line": 87
              }
            }
          }
        ],
        "range": [
          3372,
          3380
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 87
          },
          "start": {
            "column": 29,
            "line": 87
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 87
          },
          "start": {
            "column": 8,
            "line": 87
          }
        },
        "range": [
          3351,
          3369
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3362,
                3368
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 87
                },
                "start": {
                  "column": 19,
                  "line": 87
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
                3352,
                3353
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 87
                },
                "start": {
                  "column": 9,
                  "line": 87
                }
              }
            },
            "out": false,
            "range": [
              3352,
              3368
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 87
              },
              "start": {
                "column": 9,
                "line": 87
              }
            }
          }
        ]
      },
      "range": [
        3343,
        3381
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T71",
        "optional": false,
        "range": [
          3387,
          3390
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 88
          },
          "start": {
            "column": 5,
            "line": 88
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3396,
              3397
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 88
              },
              "start": {
                "column": 14,
                "line": 88
              }
            }
          },
          "range": [
            3396,
            3397
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 88
            },
            "start": {
              "column": 14,
              "line": 88
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3409,
              3418
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3416,
                      3417
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 88
                      },
                      "start": {
                        "column": 34,
                        "line": 88
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3416,
                    3417
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 88
                    },
                    "start": {
                      "column": 34,
                      "line": 88
                    }
                  }
                },
                "range": [
                  3410,
                  3417
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 88
                  },
                  "start": {
                    "column": 28,
                    "line": 88
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 88
              },
              "start": {
                "column": 27,
                "line": 88
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T70",
            "optional": false,
            "range": [
              3406,
              3409
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 88
              },
              "start": {
                "column": 24,
                "line": 88
              }
            }
          },
          "range": [
            3406,
            3418
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 88
            },
            "start": {
              "column": 24,
              "line": 88
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3430,
            3435
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 88
            },
            "start": {
              "column": 48,
              "line": 88
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3424,
              3427
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    3425,
                    3426
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 88
                    },
                    "start": {
                      "column": 43,
                      "line": 88
                    }
                  }
                },
                "range": [
                  3425,
                  3426
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 88
                  },
                  "start": {
                    "column": 43,
                    "line": 88
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 88
              },
              "start": {
                "column": 42,
                "line": 88
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T70",
            "optional": false,
            "range": [
              3421,
              3424
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 88
              },
              "start": {
                "column": 39,
                "line": 88
              }
            }
          },
          "range": [
            3421,
            3427
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 88
            },
            "start": {
              "column": 39,
              "line": 88
            }
          }
        },
        "range": [
          3396,
          3435
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 88
          },
          "start": {
            "column": 14,
            "line": 88
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 88
          },
          "start": {
            "column": 8,
            "line": 88
          }
        },
        "range": [
          3390,
          3393
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
                3391,
                3392
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 88
                },
                "start": {
                  "column": 9,
                  "line": 88
                }
              }
            },
            "out": false,
            "range": [
              3391,
              3392
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 88
              },
              "start": {
                "column": 9,
                "line": 88
              }
            }
          }
        ]
      },
      "range": [
        3382,
        3436
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T72",
        "optional": false,
        "range": [
          3443,
          3446
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
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
              "name": "y",
              "optional": false,
              "range": [
                3469,
                3470
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 90
                },
                "start": {
                  "column": 31,
                  "line": 90
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
                  "column": 35,
                  "line": 90
                },
                "start": {
                  "column": 32,
                  "line": 90
                }
              },
              "range": [
                3470,
                3473
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3472,
                    3473
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 90
                    },
                    "start": {
                      "column": 34,
                      "line": 90
                    }
                  }
                },
                "range": [
                  3472,
                  3473
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 90
                  },
                  "start": {
                    "column": 34,
                    "line": 90
                  }
                }
              }
            },
            "range": [
              3469,
              3473
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 90
              },
              "start": {
                "column": 31,
                "line": 90
              }
            }
          }
        ],
        "range": [
          3467,
          3475
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 90
          },
          "start": {
            "column": 29,
            "line": 90
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 90
          },
          "start": {
            "column": 8,
            "line": 90
          }
        },
        "range": [
          3446,
          3464
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3457,
                3463
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 90
                },
                "start": {
                  "column": 19,
                  "line": 90
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
                3447,
                3448
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 90
                },
                "start": {
                  "column": 9,
                  "line": 90
                }
              }
            },
            "out": false,
            "range": [
              3447,
              3463
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 90
              },
              "start": {
                "column": 9,
                "line": 90
              }
            }
          }
        ]
      },
      "range": [
        3438,
        3476
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T73",
        "optional": false,
        "range": [
          3482,
          3485
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 91
          },
          "start": {
            "column": 5,
            "line": 91
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3491,
              3492
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 91
              },
              "start": {
                "column": 14,
                "line": 91
              }
            }
          },
          "range": [
            3491,
            3492
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 91
            },
            "start": {
              "column": 14,
              "line": 91
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3504,
              3513
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3511,
                      3512
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 91
                      },
                      "start": {
                        "column": 34,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3511,
                    3512
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 91
                    },
                    "start": {
                      "column": 34,
                      "line": 91
                    }
                  }
                },
                "range": [
                  3505,
                  3512
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 91
                  },
                  "start": {
                    "column": 28,
                    "line": 91
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 91
              },
              "start": {
                "column": 27,
                "line": 91
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T72",
            "optional": false,
            "range": [
              3501,
              3504
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 91
              },
              "start": {
                "column": 24,
                "line": 91
              }
            }
          },
          "range": [
            3501,
            3513
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 91
            },
            "start": {
              "column": 24,
              "line": 91
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3525,
            3530
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 91
            },
            "start": {
              "column": 48,
              "line": 91
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3519,
              3522
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    3520,
                    3521
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 91
                    },
                    "start": {
                      "column": 43,
                      "line": 91
                    }
                  }
                },
                "range": [
                  3520,
                  3521
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 91
                  },
                  "start": {
                    "column": 43,
                    "line": 91
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 91
              },
              "start": {
                "column": 42,
                "line": 91
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T70",
            "optional": false,
            "range": [
              3516,
              3519
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 91
              },
              "start": {
                "column": 39,
                "line": 91
              }
            }
          },
          "range": [
            3516,
            3522
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 91
            },
            "start": {
              "column": 39,
              "line": 91
            }
          }
        },
        "range": [
          3491,
          3530
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 91
          },
          "start": {
            "column": 14,
            "line": 91
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 91
          },
          "start": {
            "column": 8,
            "line": 91
          }
        },
        "range": [
          3485,
          3488
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
                3486,
                3487
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 91
                },
                "start": {
                  "column": 9,
                  "line": 91
                }
              }
            },
            "out": false,
            "range": [
              3486,
              3487
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 91
              },
              "start": {
                "column": 9,
                "line": 91
              }
            }
          }
        ]
      },
      "range": [
        3477,
        3531
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T74",
        "optional": false,
        "range": [
          3548,
          3551
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 93
          },
          "start": {
            "column": 5,
            "line": 93
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
              "name": "x",
              "optional": false,
              "range": [
                3592,
                3593
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 93
                },
                "start": {
                  "column": 49,
                  "line": 93
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
                  "column": 53,
                  "line": 93
                },
                "start": {
                  "column": 50,
                  "line": 93
                }
              },
              "range": [
                3593,
                3596
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3595,
                    3596
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 93
                    },
                    "start": {
                      "column": 52,
                      "line": 93
                    }
                  }
                },
                "range": [
                  3595,
                  3596
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 93
                  },
                  "start": {
                    "column": 52,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              3592,
              3597
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 93
              },
              "start": {
                "column": 49,
                "line": 93
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                3598,
                3599
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 93
                },
                "start": {
                  "column": 55,
                  "line": 93
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
                  "column": 59,
                  "line": 93
                },
                "start": {
                  "column": 56,
                  "line": 93
                }
              },
              "range": [
                3599,
                3602
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    3601,
                    3602
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 93
                    },
                    "start": {
                      "column": 58,
                      "line": 93
                    }
                  }
                },
                "range": [
                  3601,
                  3602
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 93
                  },
                  "start": {
                    "column": 58,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              3598,
              3602
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 93
              },
              "start": {
                "column": 55,
                "line": 93
              }
            }
          }
        ],
        "range": [
          3590,
          3604
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 93
          },
          "start": {
            "column": 47,
            "line": 93
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 93
          },
          "start": {
            "column": 8,
            "line": 93
          }
        },
        "range": [
          3551,
          3587
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                3562,
                3568
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 93
                },
                "start": {
                  "column": 19,
                  "line": 93
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
                3552,
                3553
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 93
                },
                "start": {
                  "column": 9,
                  "line": 93
                }
              }
            },
            "out": false,
            "range": [
              3552,
              3568
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 93
              },
              "start": {
                "column": 9,
                "line": 93
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3580,
                3586
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 93
                },
                "start": {
                  "column": 37,
                  "line": 93
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
                3570,
                3571
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 93
                },
                "start": {
                  "column": 27,
                  "line": 93
                }
              }
            },
            "out": false,
            "range": [
              3570,
              3586
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 93
              },
              "start": {
                "column": 27,
                "line": 93
              }
            }
          }
        ]
      },
      "range": [
        3543,
        3605
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T75",
        "optional": false,
        "range": [
          3611,
          3614
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 94
          },
          "start": {
            "column": 5,
            "line": 94
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3620,
              3621
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 94
              },
              "start": {
                "column": 14,
                "line": 94
              }
            }
          },
          "range": [
            3620,
            3621
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 94
            },
            "start": {
              "column": 14,
              "line": 94
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3633,
              3651
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3640,
                      3641
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 94
                      },
                      "start": {
                        "column": 34,
                        "line": 94
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3640,
                    3641
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 94
                    },
                    "start": {
                      "column": 34,
                      "line": 94
                    }
                  }
                },
                "range": [
                  3634,
                  3641
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 94
                  },
                  "start": {
                    "column": 28,
                    "line": 94
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3649,
                      3650
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 94
                      },
                      "start": {
                        "column": 43,
                        "line": 94
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3649,
                    3650
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 94
                    },
                    "start": {
                      "column": 43,
                      "line": 94
                    }
                  }
                },
                "range": [
                  3643,
                  3650
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 94
                  },
                  "start": {
                    "column": 37,
                    "line": 94
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 94
              },
              "start": {
                "column": 27,
                "line": 94
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T74",
            "optional": false,
            "range": [
              3630,
              3633
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 94
              },
              "start": {
                "column": 24,
                "line": 94
              }
            }
          },
          "range": [
            3630,
            3651
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 94
            },
            "start": {
              "column": 24,
              "line": 94
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3684,
            3689
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 94
            },
            "start": {
              "column": 78,
              "line": 94
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3657,
                  3660
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3658,
                        3659
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 94
                        },
                        "start": {
                          "column": 52,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      3658,
                      3659
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 94
                      },
                      "start": {
                        "column": 52,
                        "line": 94
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 94
                  },
                  "start": {
                    "column": 51,
                    "line": 94
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T70",
                "optional": false,
                "range": [
                  3654,
                  3657
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 94
                  },
                  "start": {
                    "column": 48,
                    "line": 94
                  }
                }
              },
              "range": [
                3654,
                3660
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 94
                },
                "start": {
                  "column": 48,
                  "line": 94
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3666,
                  3669
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3667,
                        3668
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 94
                        },
                        "start": {
                          "column": 61,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      3667,
                      3668
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 94
                      },
                      "start": {
                        "column": 61,
                        "line": 94
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 94
                  },
                  "start": {
                    "column": 60,
                    "line": 94
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T72",
                "optional": false,
                "range": [
                  3663,
                  3666
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 94
                  },
                  "start": {
                    "column": 57,
                    "line": 94
                  }
                }
              },
              "range": [
                3663,
                3669
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 94
                },
                "start": {
                  "column": 57,
                  "line": 94
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3675,
                  3681
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        3676,
                        3677
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 94
                        },
                        "start": {
                          "column": 70,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      3676,
                      3677
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 94
                      },
                      "start": {
                        "column": 70,
                        "line": 94
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
                        3679,
                        3680
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 94
                        },
                        "start": {
                          "column": 73,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      3679,
                      3680
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 94
                      },
                      "start": {
                        "column": 73,
                        "line": 94
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 94
                  },
                  "start": {
                    "column": 69,
                    "line": 94
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T74",
                "optional": false,
                "range": [
                  3672,
                  3675
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 94
                  },
                  "start": {
                    "column": 66,
                    "line": 94
                  }
                }
              },
              "range": [
                3672,
                3681
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 94
                },
                "start": {
                  "column": 66,
                  "line": 94
                }
              }
            }
          ],
          "range": [
            3654,
            3681
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 94
            },
            "start": {
              "column": 48,
              "line": 94
            }
          }
        },
        "range": [
          3620,
          3689
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 94
          },
          "start": {
            "column": 14,
            "line": 94
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 94
          },
          "start": {
            "column": 8,
            "line": 94
          }
        },
        "range": [
          3614,
          3617
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
                3615,
                3616
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 94
                },
                "start": {
                  "column": 9,
                  "line": 94
                }
              }
            },
            "out": false,
            "range": [
              3615,
              3616
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 94
              },
              "start": {
                "column": 9,
                "line": 94
              }
            }
          }
        ]
      },
      "range": [
        3606,
        3690
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T76",
        "optional": false,
        "range": [
          3697,
          3700
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
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
              "name": "x",
              "optional": false,
              "range": [
                3733,
                3734
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 96
                },
                "start": {
                  "column": 41,
                  "line": 96
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
                  "column": 45,
                  "line": 96
                },
                "start": {
                  "column": 42,
                  "line": 96
                }
              },
              "range": [
                3734,
                3737
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3736,
                    3737
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 96
                    },
                    "start": {
                      "column": 44,
                      "line": 96
                    }
                  }
                },
                "range": [
                  3736,
                  3737
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 96
                  },
                  "start": {
                    "column": 44,
                    "line": 96
                  }
                }
              }
            },
            "range": [
              3733,
              3737
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 96
              },
              "start": {
                "column": 41,
                "line": 96
              }
            }
          }
        ],
        "range": [
          3731,
          3739
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 96
          },
          "start": {
            "column": 39,
            "line": 96
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 96
          },
          "start": {
            "column": 8,
            "line": 96
          }
        },
        "range": [
          3700,
          3728
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3711,
                    3712
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 96
                    },
                    "start": {
                      "column": 19,
                      "line": 96
                    }
                  }
                },
                "range": [
                  3711,
                  3712
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 96
                  },
                  "start": {
                    "column": 19,
                    "line": 96
                  }
                }
              },
              "range": [
                3711,
                3714
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 96
                },
                "start": {
                  "column": 19,
                  "line": 96
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
                3701,
                3702
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 96
                },
                "start": {
                  "column": 9,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              3701,
              3714
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 96
              },
              "start": {
                "column": 9,
                "line": 96
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
                  3726,
                  3727
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 96
                  },
                  "start": {
                    "column": 34,
                    "line": 96
                  }
                }
              },
              "range": [
                3726,
                3727
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 96
                },
                "start": {
                  "column": 34,
                  "line": 96
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
                3716,
                3717
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 96
                },
                "start": {
                  "column": 24,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              3716,
              3727
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 96
              },
              "start": {
                "column": 24,
                "line": 96
              }
            }
          }
        ]
      },
      "range": [
        3692,
        3740
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T77",
        "optional": false,
        "range": [
          3746,
          3749
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 97
          },
          "start": {
            "column": 5,
            "line": 97
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3755,
              3756
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 97
              },
              "start": {
                "column": 14,
                "line": 97
              }
            }
          },
          "range": [
            3755,
            3756
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 97
            },
            "start": {
              "column": 14,
              "line": 97
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3768,
              3786
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      3775,
                      3776
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 97
                      },
                      "start": {
                        "column": 34,
                        "line": 97
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3775,
                    3776
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 97
                    },
                    "start": {
                      "column": 34,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3769,
                  3776
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 97
                  },
                  "start": {
                    "column": 28,
                    "line": 97
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "range": [
                      3784,
                      3785
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 97
                      },
                      "start": {
                        "column": 43,
                        "line": 97
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3784,
                    3785
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 97
                    },
                    "start": {
                      "column": 43,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3778,
                  3785
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 97
                  },
                  "start": {
                    "column": 37,
                    "line": 97
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 97
              },
              "start": {
                "column": 27,
                "line": 97
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "range": [
              3765,
              3768
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 97
              },
              "start": {
                "column": 24,
                "line": 97
              }
            }
          },
          "range": [
            3765,
            3786
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 97
            },
            "start": {
              "column": 24,
              "line": 97
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3801,
            3806
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 97
            },
            "start": {
              "column": 60,
              "line": 97
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3792,
              3798
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    3793,
                    3794
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 97
                    },
                    "start": {
                      "column": 52,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3793,
                  3794
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 97
                  },
                  "start": {
                    "column": 52,
                    "line": 97
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    3796,
                    3797
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 97
                    },
                    "start": {
                      "column": 55,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3796,
                  3797
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 97
                  },
                  "start": {
                    "column": 55,
                    "line": 97
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 97
              },
              "start": {
                "column": 51,
                "line": 97
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "range": [
              3789,
              3792
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 97
              },
              "start": {
                "column": 48,
                "line": 97
              }
            }
          },
          "range": [
            3789,
            3798
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 97
            },
            "start": {
              "column": 48,
              "line": 97
            }
          }
        },
        "range": [
          3755,
          3806
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 97
          },
          "start": {
            "column": 14,
            "line": 97
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 97
          },
          "start": {
            "column": 8,
            "line": 97
          }
        },
        "range": [
          3749,
          3752
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
                3750,
                3751
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 97
                },
                "start": {
                  "column": 9,
                  "line": 97
                }
              }
            },
            "out": false,
            "range": [
              3750,
              3751
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 97
              },
              "start": {
                "column": 9,
                "line": 97
              }
            }
          }
        ]
      },
      "range": [
        3741,
        3807
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T78",
        "optional": false,
        "range": [
          3813,
          3816
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 98
          },
          "start": {
            "column": 5,
            "line": 98
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3822,
              3823
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 98
              },
              "start": {
                "column": 14,
                "line": 98
              }
            }
          },
          "range": [
            3822,
            3823
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 98
            },
            "start": {
              "column": 14,
              "line": 98
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3835,
              3853
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      3842,
                      3843
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 98
                      },
                      "start": {
                        "column": 34,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3842,
                    3843
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 98
                    },
                    "start": {
                      "column": 34,
                      "line": 98
                    }
                  }
                },
                "range": [
                  3836,
                  3843
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 98
                  },
                  "start": {
                    "column": 28,
                    "line": 98
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      3851,
                      3852
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 98
                      },
                      "start": {
                        "column": 43,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3851,
                    3852
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 98
                    },
                    "start": {
                      "column": 43,
                      "line": 98
                    }
                  }
                },
                "range": [
                  3845,
                  3852
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 98
                  },
                  "start": {
                    "column": 37,
                    "line": 98
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 98
              },
              "start": {
                "column": 27,
                "line": 98
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "range": [
              3832,
              3835
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 98
              },
              "start": {
                "column": 24,
                "line": 98
              }
            }
          },
          "range": [
            3832,
            3853
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 98
            },
            "start": {
              "column": 24,
              "line": 98
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3868,
            3873
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 98
            },
            "start": {
              "column": 60,
              "line": 98
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3859,
              3865
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    3860,
                    3861
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 98
                    },
                    "start": {
                      "column": 52,
                      "line": 98
                    }
                  }
                },
                "range": [
                  3860,
                  3861
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 98
                  },
                  "start": {
                    "column": 52,
                    "line": 98
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    3863,
                    3864
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 98
                    },
                    "start": {
                      "column": 55,
                      "line": 98
                    }
                  }
                },
                "range": [
                  3863,
                  3864
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 98
                  },
                  "start": {
                    "column": 55,
                    "line": 98
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 98
              },
              "start": {
                "column": 51,
                "line": 98
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T76",
            "optional": false,
            "range": [
              3856,
              3859
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 98
              },
              "start": {
                "column": 48,
                "line": 98
              }
            }
          },
          "range": [
            3856,
            3865
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 98
            },
            "start": {
              "column": 48,
              "line": 98
            }
          }
        },
        "range": [
          3822,
          3873
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 98
          },
          "start": {
            "column": 14,
            "line": 98
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 98
          },
          "start": {
            "column": 8,
            "line": 98
          }
        },
        "range": [
          3816,
          3819
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
                3817,
                3818
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 98
                },
                "start": {
                  "column": 9,
                  "line": 98
                }
              }
            },
            "out": false,
            "range": [
              3817,
              3818
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 98
              },
              "start": {
                "column": 9,
                "line": 98
              }
            }
          }
        ]
      },
      "range": [
        3808,
        3874
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          3881,
          3884
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                3919,
                3920
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 100
                },
                "start": {
                  "column": 43,
                  "line": 100
                }
              }
            },
            "range": [
              3919,
              3920
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 100
              },
              "start": {
                "column": 43,
                "line": 100
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
                3922,
                3923
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 100
                },
                "start": {
                  "column": 46,
                  "line": 100
                }
              }
            },
            "range": [
              3922,
              3923
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 100
              },
              "start": {
                "column": 46,
                "line": 100
              }
            }
          }
        ],
        "range": [
          3918,
          3924
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 100
          },
          "start": {
            "column": 42,
            "line": 100
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 100
          },
          "start": {
            "column": 8,
            "line": 100
          }
        },
        "range": [
          3884,
          3915
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                3895,
                3901
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 100
                },
                "start": {
                  "column": 19,
                  "line": 100
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
                3885,
                3886
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 100
                },
                "start": {
                  "column": 9,
                  "line": 100
                }
              }
            },
            "out": false,
            "range": [
              3885,
              3901
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 100
              },
              "start": {
                "column": 9,
                "line": 100
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
                  3913,
                  3914
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 100
                  },
                  "start": {
                    "column": 37,
                    "line": 100
                  }
                }
              },
              "range": [
                3913,
                3914
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 100
                },
                "start": {
                  "column": 37,
                  "line": 100
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
                3903,
                3904
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 100
                },
                "start": {
                  "column": 27,
                  "line": 100
                }
              }
            },
            "out": false,
            "range": [
              3903,
              3914
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 100
              },
              "start": {
                "column": 27,
                "line": 100
              }
            }
          }
        ]
      },
      "range": [
        3876,
        3925
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          3931,
          3934
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 101
          },
          "start": {
            "column": 5,
            "line": 101
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3940,
              3941
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 101
              },
              "start": {
                "column": 14,
                "line": 101
              }
            }
          },
          "range": [
            3940,
            3941
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 101
            },
            "start": {
              "column": 14,
              "line": 101
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3953,
              3971
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "range": [
                      3960,
                      3961
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 101
                      },
                      "start": {
                        "column": 34,
                        "line": 101
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3960,
                    3961
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 101
                    },
                    "start": {
                      "column": 34,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3954,
                  3961
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 101
                  },
                  "start": {
                    "column": 28,
                    "line": 101
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "range": [
                      3969,
                      3970
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 101
                      },
                      "start": {
                        "column": 43,
                        "line": 101
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3969,
                    3970
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 101
                    },
                    "start": {
                      "column": 43,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3963,
                  3970
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 101
                  },
                  "start": {
                    "column": 37,
                    "line": 101
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 101
              },
              "start": {
                "column": 27,
                "line": 101
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              3950,
              3953
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 101
              },
              "start": {
                "column": 24,
                "line": 101
              }
            }
          },
          "range": [
            3950,
            3971
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 101
            },
            "start": {
              "column": 24,
              "line": 101
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            3986,
            3991
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 101
            },
            "start": {
              "column": 60,
              "line": 101
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              3977,
              3983
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    3978,
                    3979
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 101
                    },
                    "start": {
                      "column": 52,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3978,
                  3979
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 101
                  },
                  "start": {
                    "column": 52,
                    "line": 101
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    3981,
                    3982
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 101
                    },
                    "start": {
                      "column": 55,
                      "line": 101
                    }
                  }
                },
                "range": [
                  3981,
                  3982
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 101
                  },
                  "start": {
                    "column": 55,
                    "line": 101
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 101
              },
              "start": {
                "column": 51,
                "line": 101
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              3974,
              3977
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 101
              },
              "start": {
                "column": 48,
                "line": 101
              }
            }
          },
          "range": [
            3974,
            3983
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 101
            },
            "start": {
              "column": 48,
              "line": 101
            }
          }
        },
        "range": [
          3940,
          3991
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 101
          },
          "start": {
            "column": 14,
            "line": 101
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 101
          },
          "start": {
            "column": 8,
            "line": 101
          }
        },
        "range": [
          3934,
          3937
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
                3935,
                3936
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "out": false,
            "range": [
              3935,
              3936
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 101
              },
              "start": {
                "column": 9,
                "line": 101
              }
            }
          }
        ]
      },
      "range": [
        3926,
        3992
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T90",
        "optional": false,
        "range": [
          3999,
          4002
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 103
          },
          "start": {
            "column": 5,
            "line": 103
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4008,
            4026
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4010,
                    4016
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
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4018,
                    4024
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 103
                    },
                    "start": {
                      "column": 24,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                4009,
                4025
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 103
                },
                "start": {
                  "column": 15,
                  "line": 103
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 103
            },
            "start": {
              "column": 14,
              "line": 103
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            4005,
            4008
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 103
            },
            "start": {
              "column": 11,
              "line": 103
            }
          }
        },
        "range": [
          4005,
          4026
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 103
          },
          "start": {
            "column": 11,
            "line": 103
          }
        }
      },
      "range": [
        3994,
        4027
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T91",
        "optional": false,
        "range": [
          4054,
          4057
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 104
          },
          "start": {
            "column": 5,
            "line": 104
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4063,
            4078
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4065,
                    4071
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 104
                    },
                    "start": {
                      "column": 16,
                      "line": 104
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      4073,
                      4076
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 104
                      },
                      "start": {
                        "column": 24,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    4073,
                    4076
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 104
                    },
                    "start": {
                      "column": 24,
                      "line": 104
                    }
                  }
                }
              ],
              "range": [
                4064,
                4077
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 104
                },
                "start": {
                  "column": 15,
                  "line": 104
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 104
            },
            "start": {
              "column": 14,
              "line": 104
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            4060,
            4063
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 104
            },
            "start": {
              "column": 11,
              "line": 104
            }
          }
        },
        "range": [
          4060,
          4078
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 104
          },
          "start": {
            "column": 11,
            "line": 104
          }
        }
      },
      "range": [
        4049,
        4079
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T92",
        "optional": false,
        "range": [
          4103,
          4106
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 105
          },
          "start": {
            "column": 5,
            "line": 105
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4112,
            4143
          ],
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        4114,
                        4120
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 105
                        },
                        "start": {
                          "column": 16,
                          "line": 105
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          4122,
                          4125
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 105
                          },
                          "start": {
                            "column": 24,
                            "line": 105
                          }
                        }
                      },
                      "range": [
                        4122,
                        4125
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 105
                        },
                        "start": {
                          "column": 24,
                          "line": 105
                        }
                      }
                    }
                  ],
                  "range": [
                    4113,
                    4126
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 105
                    },
                    "start": {
                      "column": 15,
                      "line": 105
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          4131,
                          4132
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 105
                          },
                          "start": {
                            "column": 33,
                            "line": 105
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
                            "line": 105
                          },
                          "start": {
                            "column": 34,
                            "line": 105
                          }
                        },
                        "range": [
                          4132,
                          4140
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            4134,
                            4140
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 105
                            },
                            "start": {
                              "column": 36,
                              "line": 105
                            }
                          }
                        }
                      },
                      "range": [
                        4131,
                        4140
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 105
                        },
                        "start": {
                          "column": 33,
                          "line": 105
                        }
                      }
                    }
                  ],
                  "range": [
                    4129,
                    4142
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 105
                    },
                    "start": {
                      "column": 31,
                      "line": 105
                    }
                  }
                }
              ],
              "range": [
                4113,
                4142
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 105
                },
                "start": {
                  "column": 15,
                  "line": 105
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 105
            },
            "start": {
              "column": 14,
              "line": 105
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            4109,
            4112
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 105
            },
            "start": {
              "column": 11,
              "line": 105
            }
          }
        },
        "range": [
          4109,
          4143
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 105
          },
          "start": {
            "column": 11,
            "line": 105
          }
        }
      },
      "range": [
        4098,
        4144
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T93",
        "optional": false,
        "range": [
          4168,
          4171
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4177,
            4192
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      4179,
                      4182
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 106
                      },
                      "start": {
                        "column": 16,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    4179,
                    4182
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 106
                    },
                    "start": {
                      "column": 16,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    4184,
                    4190
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 106
                    },
                    "start": {
                      "column": 21,
                      "line": 106
                    }
                  }
                }
              ],
              "range": [
                4178,
                4191
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
          "loc": {
            "end": {
              "column": 29,
              "line": 106
            },
            "start": {
              "column": 14,
              "line": 106
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            4174,
            4177
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 106
            },
            "start": {
              "column": 11,
              "line": 106
            }
          }
        },
        "range": [
          4174,
          4192
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 106
          },
          "start": {
            "column": 11,
            "line": 106
          }
        }
      },
      "range": [
        4163,
        4193
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T94",
        "optional": false,
        "range": [
          4209,
          4212
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 107
          },
          "start": {
            "column": 5,
            "line": 107
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4218,
            4236
          ],
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4220,
                    4226
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 107
                    },
                    "start": {
                      "column": 16,
                      "line": 107
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    4228,
                    4234
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 107
                    },
                    "start": {
                      "column": 24,
                      "line": 107
                    }
                  }
                }
              ],
              "range": [
                4219,
                4235
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 107
                },
                "start": {
                  "column": 15,
                  "line": 107
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 107
            },
            "start": {
              "column": 14,
              "line": 107
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            4215,
            4218
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 107
            },
            "start": {
              "column": 11,
              "line": 107
            }
          }
        },
        "range": [
          4215,
          4236
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 107
          },
          "start": {
            "column": 11,
            "line": 107
          }
        }
      },
      "range": [
        4204,
        4237
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonifiedObject",
        "optional": false,
        "range": [
          4278,
          4293
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 111
          },
          "start": {
            "column": 5,
            "line": 111
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                4328,
                4329
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 111
                },
                "start": {
                  "column": 55,
                  "line": 111
                }
              }
            },
            "range": [
              4328,
              4329
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 111
              },
              "start": {
                "column": 55,
                "line": 111
              }
            }
          },
          "range": [
            4322,
            4329
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 111
            },
            "start": {
              "column": 49,
              "line": 111
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            4317,
            4318
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 111
            },
            "start": {
              "column": 44,
              "line": 111
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              4341,
              4347
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      4344,
                      4345
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 111
                      },
                      "start": {
                        "column": 71,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    4344,
                    4345
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 111
                    },
                    "start": {
                      "column": 71,
                      "line": 111
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      4342,
                      4343
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 111
                      },
                      "start": {
                        "column": 69,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    4342,
                    4343
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 111
                    },
                    "start": {
                      "column": 69,
                      "line": 111
                    }
                  }
                },
                "range": [
                  4342,
                  4346
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 111
                  },
                  "start": {
                    "column": 69,
                    "line": 111
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 111
              },
              "start": {
                "column": 68,
                "line": 111
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Jsonified",
            "optional": false,
            "range": [
              4332,
              4341
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 111
              },
              "start": {
                "column": 59,
                "line": 111
              }
            }
          },
          "range": [
            4332,
            4347
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 111
            },
            "start": {
              "column": 59,
              "line": 111
            }
          }
        },
        "range": [
          4314,
          4349
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 111
          },
          "start": {
            "column": 41,
            "line": 111
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 111
          },
          "start": {
            "column": 20,
            "line": 111
          }
        },
        "range": [
          4293,
          4311
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                4304,
                4310
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 111
                },
                "start": {
                  "column": 31,
                  "line": 111
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
                4294,
                4295
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 111
                },
                "start": {
                  "column": 21,
                  "line": 111
                }
              }
            },
            "out": false,
            "range": [
              4294,
              4310
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 111
              },
              "start": {
                "column": 21,
                "line": 111
              }
            }
          }
        ]
      },
      "range": [
        4273,
        4350
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Jsonified",
        "optional": false,
        "range": [
          4357,
          4366
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 113
          },
          "start": {
            "column": 5,
            "line": 113
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4376,
              4377
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
          "range": [
            4376,
            4377
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 114
            },
            "start": {
              "column": 4,
              "line": 114
            }
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                4386,
                4392
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 114
                },
                "start": {
                  "column": 14,
                  "line": 114
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                4395,
                4401
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 114
                },
                "start": {
                  "column": 23,
                  "line": 114
                }
              }
            },
            {
              "type": "TSBooleanKeyword",
              "range": [
                4404,
                4411
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 114
                },
                "start": {
                  "column": 32,
                  "line": 114
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                4414,
                4418
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 114
                },
                "start": {
                  "column": 42,
                  "line": 114
                }
              }
            }
          ],
          "range": [
            4386,
            4418
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 114
            },
            "start": {
              "column": 14,
              "line": 114
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                4429,
                4430
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 115
                },
                "start": {
                  "column": 6,
                  "line": 115
                }
              }
            },
            "range": [
              4429,
              4430
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 115
              },
              "start": {
                "column": 6,
                "line": 115
              }
            }
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  4439,
                  4448
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 115
                  },
                  "start": {
                    "column": 16,
                    "line": 115
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    4451,
                    4459
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 115
                    },
                    "start": {
                      "column": 28,
                      "line": 115
                    }
                  }
                },
                "range": [
                  4451,
                  4459
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 115
                  },
                  "start": {
                    "column": 28,
                    "line": 115
                  }
                }
              }
            ],
            "range": [
              4439,
              4459
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 115
              },
              "start": {
                "column": 16,
                "line": 115
              }
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4513,
                  4514
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 116
                  },
                  "start": {
                    "column": 6,
                    "line": 116
                  }
                }
              },
              "range": [
                4513,
                4514
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 116
                },
                "start": {
                  "column": 6,
                  "line": 116
                }
              }
            },
            "extendsType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toJSON",
                    "optional": false,
                    "range": [
                      4525,
                      4531
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 116
                      },
                      "start": {
                        "column": 18,
                        "line": 116
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 116
                      },
                      "start": {
                        "column": 26,
                        "line": 116
                      }
                    },
                    "range": [
                      4533,
                      4542
                    ],
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            4541,
                            4542
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 116
                            },
                            "start": {
                              "column": 34,
                              "line": 116
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          4541,
                          4542
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 116
                          },
                          "start": {
                            "column": 34,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        4535,
                        4542
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 116
                        },
                        "start": {
                          "column": 28,
                          "line": 116
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    4525,
                    4542
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 116
                    },
                    "start": {
                      "column": 18,
                      "line": 116
                    }
                  }
                }
              ],
              "range": [
                4523,
                4544
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 116
                },
                "start": {
                  "column": 16,
                  "line": 116
                }
              }
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    4600,
                    4601
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 117
                    },
                    "start": {
                      "column": 6,
                      "line": 117
                    }
                  }
                },
                "range": [
                  4600,
                  4601
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 117
                  },
                  "start": {
                    "column": 6,
                    "line": 117
                  }
                }
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "range": [
                  4610,
                  4616
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 117
                  },
                  "start": {
                    "column": 16,
                    "line": 117
                  }
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"what is this\"",
                  "value": "what is this",
                  "range": [
                    4644,
                    4658
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 118
                    },
                    "start": {
                      "column": 6,
                      "line": 118
                    }
                  }
                },
                "range": [
                  4644,
                  4658
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 118
                  },
                  "start": {
                    "column": 6,
                    "line": 118
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4634,
                    4637
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4635,
                          4636
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 117
                          },
                          "start": {
                            "column": 41,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        4635,
                        4636
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 117
                        },
                        "start": {
                          "column": 41,
                          "line": 117
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 117
                    },
                    "start": {
                      "column": 40,
                      "line": 117
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonifiedObject",
                  "optional": false,
                  "range": [
                    4619,
                    4634
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 117
                    },
                    "start": {
                      "column": 25,
                      "line": 117
                    }
                  }
                },
                "range": [
                  4619,
                  4637
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 117
                  },
                  "start": {
                    "column": 25,
                    "line": 117
                  }
                }
              },
              "range": [
                4600,
                4658
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 118
                },
                "start": {
                  "column": 6,
                  "line": 117
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "range": [
                  4547,
                  4548
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 116
                  },
                  "start": {
                    "column": 40,
                    "line": 116
                  }
                }
              },
              "range": [
                4547,
                4548
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 116
                },
                "start": {
                  "column": 40,
                  "line": 116
                }
              }
            },
            "range": [
              4513,
              4658
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 118
              },
              "start": {
                "column": 6,
                "line": 116
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "range": [
              4462,
              4467
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 115
              },
              "start": {
                "column": 39,
                "line": 115
              }
            }
          },
          "range": [
            4429,
            4658
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 118
            },
            "start": {
              "column": 6,
              "line": 115
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4421,
              4422
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 114
              },
              "start": {
                "column": 49,
                "line": 114
              }
            }
          },
          "range": [
            4421,
            4422
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 114
            },
            "start": {
              "column": 49,
              "line": 114
            }
          }
        },
        "range": [
          4376,
          4658
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 118
          },
          "start": {
            "column": 4,
            "line": 114
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 113
          },
          "start": {
            "column": 14,
            "line": 113
          }
        },
        "range": [
          4366,
          4369
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
                4367,
                4368
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 113
                },
                "start": {
                  "column": 15,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              4367,
              4368
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 113
              },
              "start": {
                "column": 15,
                "line": 113
              }
            }
          }
        ]
      },
      "range": [
        4352,
        4659
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "range": [
          4666,
          4673
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 120
          },
          "start": {
            "column": 5,
            "line": 120
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
              "name": "str",
              "optional": false,
              "range": [
                4682,
                4685
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 121
                },
                "start": {
                  "column": 4,
                  "line": 121
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
                  "column": 24,
                  "line": 121
                },
                "start": {
                  "column": 7,
                  "line": 121
                }
              },
              "range": [
                4685,
                4702
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"literalstring\"",
                  "value": "literalstring",
                  "range": [
                    4687,
                    4702
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 121
                    },
                    "start": {
                      "column": 9,
                      "line": 121
                    }
                  }
                },
                "range": [
                  4687,
                  4702
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 121
                  },
                  "start": {
                    "column": 9,
                    "line": 121
                  }
                }
              }
            },
            "range": [
              4682,
              4703
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 121
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "range": [
                4708,
                4710
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 122
                },
                "start": {
                  "column": 4,
                  "line": 122
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
                  "column": 18,
                  "line": 122
                },
                "start": {
                  "column": 6,
                  "line": 122
                }
              },
              "range": [
                4710,
                4722
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 122
                    },
                    "start": {
                      "column": 11,
                      "line": 122
                    }
                  },
                  "range": [
                    4715,
                    4722
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      4718,
                      4722
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 122
                      },
                      "start": {
                        "column": 14,
                        "line": 122
                      }
                    }
                  }
                },
                "range": [
                  4712,
                  4722
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 122
                  },
                  "start": {
                    "column": 8,
                    "line": 122
                  }
                }
              }
            },
            "range": [
              4708,
              4723
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "date",
              "optional": false,
              "range": [
                4728,
                4732
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 123
                },
                "start": {
                  "column": 4,
                  "line": 123
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
                  "column": 14,
                  "line": 123
                },
                "start": {
                  "column": 8,
                  "line": 123
                }
              },
              "range": [
                4732,
                4738
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    4734,
                    4738
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 123
                    },
                    "start": {
                      "column": 10,
                      "line": 123
                    }
                  }
                },
                "range": [
                  4734,
                  4738
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 123
                  },
                  "start": {
                    "column": 10,
                    "line": 123
                  }
                }
              }
            },
            "range": [
              4728,
              4739
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "customClass",
              "optional": false,
              "range": [
                4744,
                4755
              ],
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 124
                },
                "start": {
                  "column": 15,
                  "line": 124
                }
              },
              "range": [
                4755,
                4764
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "range": [
                    4757,
                    4764
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 124
                    },
                    "start": {
                      "column": 17,
                      "line": 124
                    }
                  }
                },
                "range": [
                  4757,
                  4764
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 124
                  },
                  "start": {
                    "column": 17,
                    "line": 124
                  }
                }
              }
            },
            "range": [
              4744,
              4765
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                4770,
                4773
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 125
                },
                "start": {
                  "column": 4,
                  "line": 125
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
                  "column": 5,
                  "line": 129
                },
                "start": {
                  "column": 7,
                  "line": 125
                }
              },
              "range": [
                4773,
                4861
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "range": [
                        4785,
                        4789
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 126
                        },
                        "start": {
                          "column": 8,
                          "line": 126
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
                          "column": 24,
                          "line": 126
                        },
                        "start": {
                          "column": 12,
                          "line": 126
                        }
                      },
                      "range": [
                        4789,
                        4801
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"property\"",
                          "value": "property",
                          "range": [
                            4791,
                            4801
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 126
                            },
                            "start": {
                              "column": 14,
                              "line": 126
                            }
                          }
                        },
                        "range": [
                          4791,
                          4801
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 126
                          },
                          "start": {
                            "column": 14,
                            "line": 126
                          }
                        }
                      }
                    },
                    "range": [
                      4785,
                      4802
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clz",
                      "optional": false,
                      "range": [
                        4811,
                        4814
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 127
                        },
                        "start": {
                          "column": 8,
                          "line": 127
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
                          "column": 20,
                          "line": 127
                        },
                        "start": {
                          "column": 11,
                          "line": 127
                        }
                      },
                      "range": [
                        4814,
                        4823
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyClass",
                          "optional": false,
                          "range": [
                            4816,
                            4823
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 127
                            },
                            "start": {
                              "column": 13,
                              "line": 127
                            }
                          }
                        },
                        "range": [
                          4816,
                          4823
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 127
                          },
                          "start": {
                            "column": 13,
                            "line": 127
                          }
                        }
                      }
                    },
                    "range": [
                      4811,
                      4824
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 127
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "range": [
                        4833,
                        4839
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 128
                        },
                        "start": {
                          "column": 8,
                          "line": 128
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
                          "line": 128
                        },
                        "start": {
                          "column": 14,
                          "line": 128
                        }
                      },
                      "range": [
                        4839,
                        4855
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "attr",
                              "optional": false,
                              "range": [
                                4843,
                                4847
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 128
                                },
                                "start": {
                                  "column": 18,
                                  "line": 128
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
                                  "line": 128
                                },
                                "start": {
                                  "column": 22,
                                  "line": 128
                                }
                              },
                              "range": [
                                4847,
                                4853
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "range": [
                                    4849,
                                    4853
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 128
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 128
                                    }
                                  }
                                },
                                "range": [
                                  4849,
                                  4853
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 128
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 128
                                  }
                                }
                              }
                            },
                            "range": [
                              4843,
                              4853
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 128
                              },
                              "start": {
                                "column": 18,
                                "line": 128
                              }
                            }
                          }
                        ],
                        "range": [
                          4841,
                          4855
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 128
                          },
                          "start": {
                            "column": 16,
                            "line": 128
                          }
                        }
                      }
                    },
                    "range": [
                      4833,
                      4855
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 128
                      },
                      "start": {
                        "column": 8,
                        "line": 128
                      }
                    }
                  }
                ],
                "range": [
                  4775,
                  4861
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 129
                  },
                  "start": {
                    "column": 9,
                    "line": 125
                  }
                }
              }
            },
            "range": [
              4770,
              4862
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 125
              }
            }
          }
        ],
        "range": [
          4676,
          4864
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 130
          },
          "start": {
            "column": 15,
            "line": 120
          }
        }
      },
      "range": [
        4661,
        4864
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 130
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4888,
          4916
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toJSON",
              "optional": false,
              "range": [
                4894,
                4900
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 133
                },
                "start": {
                  "column": 4,
                  "line": 133
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                4900,
                4914
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 133
                  },
                  "start": {
                    "column": 12,
                    "line": 133
                  }
                },
                "range": [
                  4902,
                  4913
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"correct\"",
                    "value": "correct",
                    "range": [
                      4904,
                      4913
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 133
                      },
                      "start": {
                        "column": 14,
                        "line": 133
                      }
                    }
                  },
                  "range": [
                    4904,
                    4913
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 133
                    },
                    "start": {
                      "column": 14,
                      "line": 133
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 24,
                  "line": 133
                },
                "start": {
                  "column": 10,
                  "line": 133
                }
              }
            },
            "range": [
              4894,
              4914
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "column": 22,
            "line": 132
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          4880,
          4887
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 132
          },
          "start": {
            "column": 14,
            "line": 132
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        4866,
        4916
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonifiedExample",
        "optional": false,
        "range": [
          4923,
          4939
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 136
          },
          "start": {
            "column": 5,
            "line": 136
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            4951,
            4960
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "range": [
                  4952,
                  4959
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 136
                  },
                  "start": {
                    "column": 34,
                    "line": 136
                  }
                }
              },
              "range": [
                4952,
                4959
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 136
                },
                "start": {
                  "column": 34,
                  "line": 136
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 136
            },
            "start": {
              "column": 33,
              "line": 136
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Jsonified",
          "optional": false,
          "range": [
            4942,
            4951
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 136
            },
            "start": {
              "column": 24,
              "line": 136
            }
          }
        },
        "range": [
          4942,
          4960
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 136
          },
          "start": {
            "column": 24,
            "line": 136
          }
        }
      },
      "range": [
        4918,
        4961
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 136
        },
        "start": {
          "column": 0,
          "line": 136
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
            "name": "ex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 137
                },
                "start": {
                  "column": 14,
                  "line": 137
                }
              },
              "range": [
                4976,
                4994
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonifiedExample",
                  "optional": false,
                  "range": [
                    4978,
                    4994
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 137
                    },
                    "start": {
                      "column": 16,
                      "line": 137
                    }
                  }
                },
                "range": [
                  4978,
                  4994
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 137
                  },
                  "start": {
                    "column": 16,
                    "line": 137
                  }
                }
              }
            },
            "range": [
              4974,
              4994
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 137
              },
              "start": {
                "column": 12,
                "line": 137
              }
            }
          },
          "init": null,
          "range": [
            4974,
            4994
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 137
            },
            "start": {
              "column": 12,
              "line": 137
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        4962,
        4995
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 137
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 138
                },
                "start": {
                  "column": 8,
                  "line": 138
                }
              },
              "range": [
                5004,
                5015
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"correct\"",
                  "value": "correct",
                  "range": [
                    5006,
                    5015
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 138
                    },
                    "start": {
                      "column": 10,
                      "line": 138
                    }
                  }
                },
                "range": [
                  5006,
                  5015
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 138
                  },
                  "start": {
                    "column": 10,
                    "line": 138
                  }
                }
              }
            },
            "range": [
              5002,
              5015
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 138
              },
              "start": {
                "column": 6,
                "line": 138
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ex",
              "optional": false,
              "range": [
                5018,
                5020
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 138
                },
                "start": {
                  "column": 22,
                  "line": 138
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "customClass",
              "optional": false,
              "range": [
                5021,
                5032
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 138
                },
                "start": {
                  "column": 25,
                  "line": 138
                }
              }
            },
            "range": [
              5018,
              5032
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 138
              },
              "start": {
                "column": 22,
                "line": 138
              }
            }
          },
          "range": [
            5002,
            5032
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 138
            },
            "start": {
              "column": 6,
              "line": 138
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4996,
        5033
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 138
        },
        "start": {
          "column": 0,
          "line": 138
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 139
                },
                "start": {
                  "column": 8,
                  "line": 139
                }
              },
              "range": [
                5042,
                5050
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  5044,
                  5050
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 139
                  },
                  "start": {
                    "column": 10,
                    "line": 139
                  }
                }
              }
            },
            "range": [
              5040,
              5050
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 139
              },
              "start": {
                "column": 6,
                "line": 139
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ex",
                  "optional": false,
                  "range": [
                    5053,
                    5055
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    5056,
                    5059
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 139
                    },
                    "start": {
                      "column": 22,
                      "line": 139
                    }
                  }
                },
                "range": [
                  5053,
                  5059
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 139
                  },
                  "start": {
                    "column": 19,
                    "line": 139
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "range": [
                  5060,
                  5066
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 139
                  },
                  "start": {
                    "column": 26,
                    "line": 139
                  }
                }
              },
              "range": [
                5053,
                5066
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 139
                },
                "start": {
                  "column": 19,
                  "line": 139
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "attr",
              "optional": false,
              "range": [
                5067,
                5071
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 139
                },
                "start": {
                  "column": 33,
                  "line": 139
                }
              }
            },
            "range": [
              5053,
              5071
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 139
              },
              "start": {
                "column": 19,
                "line": 139
              }
            }
          },
          "range": [
            5040,
            5071
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 139
            },
            "start": {
              "column": 6,
              "line": 139
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5034,
        5072
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 139
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "range": [
          5102,
          5104
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 143
          },
          "start": {
            "column": 5,
            "line": 143
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5135,
                5136
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 143
                },
                "start": {
                  "column": 38,
                  "line": 143
                }
              }
            },
            "range": [
              5135,
              5136
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 143
              },
              "start": {
                "column": 38,
                "line": 143
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
                5138,
                5139
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 143
                },
                "start": {
                  "column": 41,
                  "line": 143
                }
              }
            },
            "range": [
              5138,
              5139
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 143
              },
              "start": {
                "column": 41,
                "line": 143
              }
            }
          }
        ],
        "range": [
          5134,
          5140
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 143
          },
          "start": {
            "column": 37,
            "line": 143
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 143
          },
          "start": {
            "column": 7,
            "line": 143
          }
        },
        "range": [
          5104,
          5131
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
                5105,
                5106
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 143
                },
                "start": {
                  "column": 8,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              5105,
              5106
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 143
              },
              "start": {
                "column": 8,
                "line": 143
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  5120,
                  5130
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      5121,
                      5124
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 143
                      },
                      "start": {
                        "column": 24,
                        "line": 143
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      5126,
                      5129
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 143
                      },
                      "start": {
                        "column": 29,
                        "line": 143
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 143
                  },
                  "start": {
                    "column": 23,
                    "line": 143
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "range": [
                  5118,
                  5120
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 143
                  },
                  "start": {
                    "column": 21,
                    "line": 143
                  }
                }
              },
              "range": [
                5118,
                5130
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 143
                },
                "start": {
                  "column": 21,
                  "line": 143
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
                5108,
                5109
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 143
                },
                "start": {
                  "column": 11,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              5108,
              5130
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 143
              },
              "start": {
                "column": 11,
                "line": 143
              }
            }
          }
        ]
      },
      "range": [
        5097,
        5141
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 143
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "range": [
          5147,
          5149
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 144
          },
          "start": {
            "column": 5,
            "line": 144
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "range": [
              5155,
              5156
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 144
              },
              "start": {
                "column": 13,
                "line": 144
              }
            }
          },
          "range": [
            5155,
            5156
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 144
            },
            "start": {
              "column": 13,
              "line": 144
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              5167,
              5185
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      5174,
                      5175
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 144
                      },
                      "start": {
                        "column": 32,
                        "line": 144
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5174,
                    5175
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 144
                    },
                    "start": {
                      "column": 32,
                      "line": 144
                    }
                  }
                },
                "range": [
                  5168,
                  5175
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 144
                  },
                  "start": {
                    "column": 26,
                    "line": 144
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      5183,
                      5184
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 144
                      },
                      "start": {
                        "column": 41,
                        "line": 144
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5183,
                    5184
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 144
                    },
                    "start": {
                      "column": 41,
                      "line": 144
                    }
                  }
                },
                "range": [
                  5177,
                  5184
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 144
                  },
                  "start": {
                    "column": 35,
                    "line": 144
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 144
              },
              "start": {
                "column": 25,
                "line": 144
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A1",
            "optional": false,
            "range": [
              5165,
              5167
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 144
              },
              "start": {
                "column": 23,
                "line": 144
              }
            }
          },
          "range": [
            5165,
            5185
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 144
            },
            "start": {
              "column": 23,
              "line": 144
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5197,
            5202
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 144
            },
            "start": {
              "column": 55,
              "line": 144
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5189,
                  5190
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 144
                  },
                  "start": {
                    "column": 47,
                    "line": 144
                  }
                }
              },
              "range": [
                5189,
                5190
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 144
                },
                "start": {
                  "column": 47,
                  "line": 144
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
                  5192,
                  5193
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 144
                  },
                  "start": {
                    "column": 50,
                    "line": 144
                  }
                }
              },
              "range": [
                5192,
                5193
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 144
                },
                "start": {
                  "column": 50,
                  "line": 144
                }
              }
            }
          ],
          "range": [
            5188,
            5194
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 144
            },
            "start": {
              "column": 46,
              "line": 144
            }
          }
        },
        "range": [
          5155,
          5202
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 144
          },
          "start": {
            "column": 13,
            "line": 144
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 144
          },
          "start": {
            "column": 7,
            "line": 144
          }
        },
        "range": [
          5149,
          5152
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                5150,
                5151
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 144
                },
                "start": {
                  "column": 8,
                  "line": 144
                }
              }
            },
            "out": false,
            "range": [
              5150,
              5151
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 144
              },
              "start": {
                "column": 8,
                "line": 144
              }
            }
          }
        ]
      },
      "range": [
        5142,
        5203
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 144
        },
        "start": {
          "column": 0,
          "line": 144
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
          5210,
          5212
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 146
          },
          "start": {
            "column": 5,
            "line": 146
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5235,
                5236
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 146
                },
                "start": {
                  "column": 30,
                  "line": 146
                }
              }
            },
            "range": [
              5235,
              5236
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 146
              },
              "start": {
                "column": 30,
                "line": 146
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
                5238,
                5239
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 146
                },
                "start": {
                  "column": 33,
                  "line": 146
                }
              }
            },
            "range": [
              5238,
              5239
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 146
              },
              "start": {
                "column": 33,
                "line": 146
              }
            }
          }
        ],
        "range": [
          5234,
          5240
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 146
          },
          "start": {
            "column": 29,
            "line": 146
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 146
          },
          "start": {
            "column": 7,
            "line": 146
          }
        },
        "range": [
          5212,
          5231
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
                5213,
                5214
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 146
                },
                "start": {
                  "column": 8,
                  "line": 146
                }
              }
            },
            "out": false,
            "range": [
              5213,
              5214
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 146
              },
              "start": {
                "column": 8,
                "line": 146
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSVoidKeyword",
              "range": [
                5226,
                5230
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 146
                },
                "start": {
                  "column": 21,
                  "line": 146
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
                5216,
                5217
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 146
                },
                "start": {
                  "column": 11,
                  "line": 146
                }
              }
            },
            "out": false,
            "range": [
              5216,
              5230
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 146
              },
              "start": {
                "column": 11,
                "line": 146
              }
            }
          }
        ]
      },
      "range": [
        5205,
        5241
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 146
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "range": [
          5247,
          5249
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 147
          },
          "start": {
            "column": 5,
            "line": 147
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "range": [
              5255,
              5256
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 147
              },
              "start": {
                "column": 13,
                "line": 147
              }
            }
          },
          "range": [
            5255,
            5256
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 147
            },
            "start": {
              "column": 13,
              "line": 147
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              5267,
              5285
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      5274,
                      5275
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 147
                      },
                      "start": {
                        "column": 32,
                        "line": 147
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5274,
                    5275
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 147
                    },
                    "start": {
                      "column": 32,
                      "line": 147
                    }
                  }
                },
                "range": [
                  5268,
                  5275
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 147
                  },
                  "start": {
                    "column": 26,
                    "line": 147
                  }
                }
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      5283,
                      5284
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 147
                      },
                      "start": {
                        "column": 41,
                        "line": 147
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5283,
                    5284
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 147
                    },
                    "start": {
                      "column": 41,
                      "line": 147
                    }
                  }
                },
                "range": [
                  5277,
                  5284
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 147
                  },
                  "start": {
                    "column": 35,
                    "line": 147
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 147
              },
              "start": {
                "column": 25,
                "line": 147
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "range": [
              5265,
              5267
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 147
              },
              "start": {
                "column": 23,
                "line": 147
              }
            }
          },
          "range": [
            5265,
            5285
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 147
            },
            "start": {
              "column": 23,
              "line": 147
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5297,
            5302
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 147
            },
            "start": {
              "column": 55,
              "line": 147
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5289,
                  5290
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 147
                  },
                  "start": {
                    "column": 47,
                    "line": 147
                  }
                }
              },
              "range": [
                5289,
                5290
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 147
                },
                "start": {
                  "column": 47,
                  "line": 147
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
                  5292,
                  5293
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 147
                  },
                  "start": {
                    "column": 50,
                    "line": 147
                  }
                }
              },
              "range": [
                5292,
                5293
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 147
                },
                "start": {
                  "column": 50,
                  "line": 147
                }
              }
            }
          ],
          "range": [
            5288,
            5294
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 147
            },
            "start": {
              "column": 46,
              "line": 147
            }
          }
        },
        "range": [
          5255,
          5302
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 147
          },
          "start": {
            "column": 13,
            "line": 147
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 147
          },
          "start": {
            "column": 7,
            "line": 147
          }
        },
        "range": [
          5249,
          5252
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                5250,
                5251
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 147
                },
                "start": {
                  "column": 8,
                  "line": 147
                }
              }
            },
            "out": false,
            "range": [
              5250,
              5251
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 147
              },
              "start": {
                "column": 8,
                "line": 147
              }
            }
          }
        ]
      },
      "range": [
        5242,
        5303
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 147
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          5309,
          5311
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 148
          },
          "start": {
            "column": 5,
            "line": 148
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "range": [
              5333,
              5334
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 148
              },
              "start": {
                "column": 29,
                "line": 148
              }
            }
          },
          "range": [
            5333,
            5334
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 148
            },
            "start": {
              "column": 29,
              "line": 148
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              5345,
              5357
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      5352,
                      5353
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 148
                      },
                      "start": {
                        "column": 48,
                        "line": 148
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5352,
                    5353
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 148
                    },
                    "start": {
                      "column": 48,
                      "line": 148
                    }
                  }
                },
                "range": [
                  5346,
                  5353
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 148
                  },
                  "start": {
                    "column": 42,
                    "line": 148
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
                    5355,
                    5356
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 148
                    },
                    "start": {
                      "column": 51,
                      "line": 148
                    }
                  }
                },
                "range": [
                  5355,
                  5356
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 148
                  },
                  "start": {
                    "column": 51,
                    "line": 148
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 148
              },
              "start": {
                "column": 41,
                "line": 148
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "range": [
              5343,
              5345
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 148
              },
              "start": {
                "column": 39,
                "line": 148
              }
            }
          },
          "range": [
            5343,
            5357
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 148
            },
            "start": {
              "column": 39,
              "line": 148
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5369,
            5374
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 148
            },
            "start": {
              "column": 65,
              "line": 148
            }
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5361,
                  5362
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 148
                  },
                  "start": {
                    "column": 57,
                    "line": 148
                  }
                }
              },
              "range": [
                5361,
                5362
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 148
                },
                "start": {
                  "column": 57,
                  "line": 148
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
                  5364,
                  5365
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 148
                  },
                  "start": {
                    "column": 60,
                    "line": 148
                  }
                }
              },
              "range": [
                5364,
                5365
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 148
                },
                "start": {
                  "column": 60,
                  "line": 148
                }
              }
            }
          ],
          "range": [
            5360,
            5366
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 148
            },
            "start": {
              "column": 56,
              "line": 148
            }
          }
        },
        "range": [
          5333,
          5374
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 148
          },
          "start": {
            "column": 29,
            "line": 148
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 148
          },
          "start": {
            "column": 7,
            "line": 148
          }
        },
        "range": [
          5311,
          5330
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                5312,
                5313
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 148
                },
                "start": {
                  "column": 8,
                  "line": 148
                }
              }
            },
            "out": false,
            "range": [
              5312,
              5313
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 148
              },
              "start": {
                "column": 8,
                "line": 148
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSVoidKeyword",
              "range": [
                5325,
                5329
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 148
                },
                "start": {
                  "column": 21,
                  "line": 148
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
                5315,
                5316
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 148
                },
                "start": {
                  "column": 11,
                  "line": 148
                }
              }
            },
            "out": false,
            "range": [
              5315,
              5329
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 148
              },
              "start": {
                "column": 11,
                "line": 148
              }
            }
          }
        ]
      },
      "range": [
        5304,
        5375
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          5404,
          5405
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 152
          },
          "start": {
            "column": 5,
            "line": 152
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5411,
              5412
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 152
              },
              "start": {
                "column": 12,
                "line": 152
              }
            }
          },
          "range": [
            5411,
            5412
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 152
            },
            "start": {
              "column": 12,
              "line": 152
            }
          }
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "range": [
            5421,
            5427
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 152
            },
            "start": {
              "column": 22,
              "line": 152
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5452,
              5453
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 152
              },
              "start": {
                "column": 53,
                "line": 152
              }
            }
          },
          "range": [
            5452,
            5453
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 152
            },
            "start": {
              "column": 53,
              "line": 152
            }
          }
        },
        "trueType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5438,
                5439
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 152
                },
                "start": {
                  "column": 39,
                  "line": 152
                }
              }
            },
            "range": [
              5438,
              5439
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 152
              },
              "start": {
                "column": 39,
                "line": 152
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              5433,
              5434
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 152
              },
              "start": {
                "column": 34,
                "line": 152
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              5442,
              5446
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 152
              },
              "start": {
                "column": 43,
                "line": 152
              }
            }
          },
          "range": [
            5430,
            5449
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 152
            },
            "start": {
              "column": 31,
              "line": 152
            }
          }
        },
        "range": [
          5411,
          5453
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 152
          },
          "start": {
            "column": 12,
            "line": 152
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 152
          },
          "start": {
            "column": 6,
            "line": 152
          }
        },
        "range": [
          5405,
          5408
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
                5406,
                5407
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 152
                },
                "start": {
                  "column": 7,
                  "line": 152
                }
              }
            },
            "out": false,
            "range": [
              5406,
              5407
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 152
              },
              "start": {
                "column": 7,
                "line": 152
              }
            }
          }
        ]
      },
      "range": [
        5399,
        5454
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 152
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          5460,
          5461
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 153
          },
          "start": {
            "column": 5,
            "line": 153
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "range": [
            5467,
            5473
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 153
            },
            "start": {
              "column": 12,
              "line": 153
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5482,
              5483
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 153
              },
              "start": {
                "column": 27,
                "line": 153
              }
            }
          },
          "range": [
            5482,
            5483
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 153
            },
            "start": {
              "column": 27,
              "line": 153
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5508,
              5509
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 153
              },
              "start": {
                "column": 53,
                "line": 153
              }
            }
          },
          "range": [
            5508,
            5509
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 153
            },
            "start": {
              "column": 53,
              "line": 153
            }
          }
        },
        "trueType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5494,
                5495
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 153
                },
                "start": {
                  "column": 39,
                  "line": 153
                }
              }
            },
            "range": [
              5494,
              5495
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 153
              },
              "start": {
                "column": 39,
                "line": 153
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              5489,
              5490
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 153
              },
              "start": {
                "column": 34,
                "line": 153
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              5498,
              5502
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 153
              },
              "start": {
                "column": 43,
                "line": 153
              }
            }
          },
          "range": [
            5486,
            5505
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 153
            },
            "start": {
              "column": 31,
              "line": 153
            }
          }
        },
        "range": [
          5467,
          5509
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 153
          },
          "start": {
            "column": 12,
            "line": 153
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 153
          },
          "start": {
            "column": 6,
            "line": 153
          }
        },
        "range": [
          5461,
          5464
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
                5462,
                5463
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 153
                },
                "start": {
                  "column": 7,
                  "line": 153
                }
              }
            },
            "out": false,
            "range": [
              5462,
              5463
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 153
              },
              "start": {
                "column": 7,
                "line": 153
              }
            }
          }
        ]
      },
      "range": [
        5455,
        5510
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 153
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MatchingKeys",
        "optional": false,
        "range": [
          5549,
          5561
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 157
          },
          "start": {
            "column": 5,
            "line": 157
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              5603,
              5604
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 158
              }
            }
          },
          "range": [
            5603,
            5604
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 158
            },
            "start": {
              "column": 4,
              "line": 158
            }
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                5619,
                5620
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 158
                },
                "start": {
                  "column": 20,
                  "line": 158
                }
              }
            },
            "range": [
              5619,
              5620
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 158
              },
              "start": {
                "column": 20,
                "line": 158
              }
            }
          },
          "range": [
            5613,
            5620
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 158
            },
            "start": {
              "column": 14,
              "line": 158
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5652,
            5657
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 158
            },
            "start": {
              "column": 53,
              "line": 158
            }
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  5625,
                  5626
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 158
                  },
                  "start": {
                    "column": 26,
                    "line": 158
                  }
                }
              },
              "range": [
                5625,
                5626
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 158
                },
                "start": {
                  "column": 26,
                  "line": 158
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5623,
                  5624
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 158
                  },
                  "start": {
                    "column": 24,
                    "line": 158
                  }
                }
              },
              "range": [
                5623,
                5624
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 158
                },
                "start": {
                  "column": 24,
                  "line": 158
                }
              }
            },
            "range": [
              5623,
              5627
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 158
              },
              "start": {
                "column": 24,
                "line": 158
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                5636,
                5637
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 158
                },
                "start": {
                  "column": 37,
                  "line": 158
                }
              }
            },
            "range": [
              5636,
              5637
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 158
              },
              "start": {
                "column": 37,
                "line": 158
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              5644,
              5649
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 158
              },
              "start": {
                "column": 45,
                "line": 158
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                5640,
                5641
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 158
                },
                "start": {
                  "column": 41,
                  "line": 158
                }
              }
            },
            "range": [
              5640,
              5641
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 158
              },
              "start": {
                "column": 41,
                "line": 158
              }
            }
          },
          "range": [
            5623,
            5649
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 158
            },
            "start": {
              "column": 24,
              "line": 158
            }
          }
        },
        "range": [
          5603,
          5657
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 158
          },
          "start": {
            "column": 4,
            "line": 158
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 157
          },
          "start": {
            "column": 17,
            "line": 157
          }
        },
        "range": [
          5561,
          5596
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
                5562,
                5563
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 157
                },
                "start": {
                  "column": 18,
                  "line": 157
                }
              }
            },
            "out": false,
            "range": [
              5562,
              5563
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 157
              },
              "start": {
                "column": 18,
                "line": 157
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
                5565,
                5566
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 157
                },
                "start": {
                  "column": 21,
                  "line": 157
                }
              }
            },
            "out": false,
            "range": [
              5565,
              5566
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 157
              },
              "start": {
                "column": 21,
                "line": 157
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    5584,
                    5585
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 157
                    },
                    "start": {
                      "column": 40,
                      "line": 157
                    }
                  }
                },
                "range": [
                  5584,
                  5585
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 157
                  },
                  "start": {
                    "column": 40,
                    "line": 157
                  }
                }
              },
              "range": [
                5578,
                5585
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 157
                },
                "start": {
                  "column": 34,
                  "line": 157
                }
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    5594,
                    5595
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 157
                    },
                    "start": {
                      "column": 50,
                      "line": 157
                    }
                  }
                },
                "range": [
                  5594,
                  5595
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 157
                  },
                  "start": {
                    "column": 50,
                    "line": 157
                  }
                }
              },
              "range": [
                5588,
                5595
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 157
                },
                "start": {
                  "column": 44,
                  "line": 157
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                5568,
                5569
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 157
                },
                "start": {
                  "column": 24,
                  "line": 157
                }
              }
            },
            "out": false,
            "range": [
              5568,
              5595
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 157
              },
              "start": {
                "column": 24,
                "line": 157
              }
            }
          }
        ]
      },
      "range": [
        5544,
        5658
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 157
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VoidKeys",
        "optional": false,
        "range": [
          5665,
          5673
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 160
          },
          "start": {
            "column": 5,
            "line": 160
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5691,
            5700
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5692,
                  5693
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 160
                  },
                  "start": {
                    "column": 32,
                    "line": 160
                  }
                }
              },
              "range": [
                5692,
                5693
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 160
                },
                "start": {
                  "column": 32,
                  "line": 160
                }
              }
            },
            {
              "type": "TSVoidKeyword",
              "range": [
                5695,
                5699
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 160
                },
                "start": {
                  "column": 35,
                  "line": 160
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 160
            },
            "start": {
              "column": 31,
              "line": 160
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchingKeys",
          "optional": false,
          "range": [
            5679,
            5691
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 160
            },
            "start": {
              "column": 19,
              "line": 160
            }
          }
        },
        "range": [
          5679,
          5700
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 160
          },
          "start": {
            "column": 19,
            "line": 160
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 160
          },
          "start": {
            "column": 13,
            "line": 160
          }
        },
        "range": [
          5673,
          5676
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
                5674,
                5675
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 160
                },
                "start": {
                  "column": 14,
                  "line": 160
                }
              }
            },
            "out": false,
            "range": [
              5674,
              5675
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 160
              },
              "start": {
                "column": 14,
                "line": 160
              }
            }
          }
        ]
      },
      "range": [
        5660,
        5701
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 160
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          5718,
          5743
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                5724,
                5725
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 163
                },
                "start": {
                  "column": 4,
                  "line": 163
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
                  "column": 8,
                  "line": 163
                },
                "start": {
                  "column": 5,
                  "line": 163
                }
              },
              "range": [
                5725,
                5728
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    5727,
                    5728
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 163
                    },
                    "start": {
                      "column": 7,
                      "line": 163
                    }
                  }
                },
                "range": [
                  5727,
                  5728
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 163
                  },
                  "start": {
                    "column": 7,
                    "line": 163
                  }
                }
              }
            },
            "range": [
              5724,
              5729
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 163
              },
              "start": {
                "column": 4,
                "line": 163
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
                5734,
                5735
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 164
                },
                "start": {
                  "column": 4,
                  "line": 164
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
                  "line": 164
                },
                "start": {
                  "column": 5,
                  "line": 164
                }
              },
              "range": [
                5735,
                5741
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  5737,
                  5741
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 164
                  },
                  "start": {
                    "column": 7,
                    "line": 164
                  }
                }
              }
            },
            "range": [
              5734,
              5741
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 164
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 165
          },
          "start": {
            "column": 15,
            "line": 162
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          5713,
          5717
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 162
          },
          "start": {
            "column": 10,
            "line": 162
          }
        }
      },
      "range": [
        5703,
        5743
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 165
        },
        "start": {
          "column": 0,
          "line": 162
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T80",
        "optional": false,
        "range": [
          5750,
          5753
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 167
          },
          "start": {
            "column": 5,
            "line": 167
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5768,
            5780
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  5769,
                  5773
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 167
                  },
                  "start": {
                    "column": 24,
                    "line": 167
                  }
                }
              },
              "range": [
                5769,
                5773
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 167
                },
                "start": {
                  "column": 24,
                  "line": 167
                }
              }
            },
            {
              "type": "TSVoidKeyword",
              "range": [
                5775,
                5779
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 167
                },
                "start": {
                  "column": 30,
                  "line": 167
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 167
            },
            "start": {
              "column": 23,
              "line": 167
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MatchingKeys",
          "optional": false,
          "range": [
            5756,
            5768
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 167
            },
            "start": {
              "column": 11,
              "line": 167
            }
          }
        },
        "range": [
          5756,
          5780
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 167
          },
          "start": {
            "column": 11,
            "line": 167
          }
        }
      },
      "range": [
        5745,
        5781
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 167
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T81",
        "optional": false,
        "range": [
          5787,
          5790
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 168
          },
          "start": {
            "column": 5,
            "line": 168
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5801,
            5807
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  5802,
                  5806
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 168
                  },
                  "start": {
                    "column": 20,
                    "line": 168
                  }
                }
              },
              "range": [
                5802,
                5806
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 168
                },
                "start": {
                  "column": 20,
                  "line": 168
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 168
            },
            "start": {
              "column": 19,
              "line": 168
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "VoidKeys",
          "optional": false,
          "range": [
            5793,
            5801
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 168
            },
            "start": {
              "column": 11,
              "line": 168
            }
          }
        },
        "range": [
          5793,
          5807
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 168
          },
          "start": {
            "column": 11,
            "line": 168
          }
        }
      },
      "range": [
        5782,
        5808
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 168
        },
        "start": {
          "column": 0,
          "line": 168
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MustBeString",
        "optional": false,
        "range": [
          5837,
          5849
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 172
          },
          "start": {
            "column": 5,
            "line": 172
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            5870,
            5871
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 172
            },
            "start": {
              "column": 38,
              "line": 172
            }
          }
        },
        "range": [
          5870,
          5871
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 172
          },
          "start": {
            "column": 38,
            "line": 172
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 172
          },
          "start": {
            "column": 17,
            "line": 172
          }
        },
        "range": [
          5849,
          5867
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                5860,
                5866
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 172
                },
                "start": {
                  "column": 28,
                  "line": 172
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
                5850,
                5851
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 172
                },
                "start": {
                  "column": 18,
                  "line": 172
                }
              }
            },
            "out": false,
            "range": [
              5850,
              5866
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 172
              },
              "start": {
                "column": 18,
                "line": 172
              }
            }
          }
        ]
      },
      "range": [
        5832,
        5872
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 172
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnsureIsString",
        "optional": false,
        "range": [
          5878,
          5892
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 173
          },
          "start": {
            "column": 5,
            "line": 173
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5898,
              5899
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 173
              },
              "start": {
                "column": 25,
                "line": 173
              }
            }
          },
          "range": [
            5898,
            5899
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 173
            },
            "start": {
              "column": 25,
              "line": 173
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              5920,
              5929
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      5927,
                      5928
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 173
                      },
                      "start": {
                        "column": 54,
                        "line": 173
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    5927,
                    5928
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 173
                    },
                    "start": {
                      "column": 54,
                      "line": 173
                    }
                  }
                },
                "range": [
                  5921,
                  5928
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 173
                  },
                  "start": {
                    "column": 48,
                    "line": 173
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 173
              },
              "start": {
                "column": 47,
                "line": 173
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MustBeString",
            "optional": false,
            "range": [
              5908,
              5920
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 173
              },
              "start": {
                "column": 35,
                "line": 173
              }
            }
          },
          "range": [
            5908,
            5929
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 173
            },
            "start": {
              "column": 35,
              "line": 173
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            5936,
            5941
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 173
            },
            "start": {
              "column": 63,
              "line": 173
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              5932,
              5933
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 173
              },
              "start": {
                "column": 59,
                "line": 173
              }
            }
          },
          "range": [
            5932,
            5933
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 173
            },
            "start": {
              "column": 59,
              "line": 173
            }
          }
        },
        "range": [
          5898,
          5941
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 173
          },
          "start": {
            "column": 25,
            "line": 173
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 173
          },
          "start": {
            "column": 19,
            "line": 173
          }
        },
        "range": [
          5892,
          5895
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
                5893,
                5894
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 173
                },
                "start": {
                  "column": 20,
                  "line": 173
                }
              }
            },
            "out": false,
            "range": [
              5893,
              5894
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 173
              },
              "start": {
                "column": 20,
                "line": 173
              }
            }
          }
        ]
      },
      "range": [
        5873,
        5942
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 173
        },
        "start": {
          "column": 0,
          "line": 173
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          5949,
          5954
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 175
          },
          "start": {
            "column": 5,
            "line": 175
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5971,
            5980
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  5972,
                  5979
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 175
                  },
                  "start": {
                    "column": 28,
                    "line": 175
                  }
                }
              },
              "range": [
                5972,
                5979
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 175
                },
                "start": {
                  "column": 28,
                  "line": 175
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 175
            },
            "start": {
              "column": 27,
              "line": 175
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnsureIsString",
          "optional": false,
          "range": [
            5957,
            5971
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 175
            },
            "start": {
              "column": 13,
              "line": 175
            }
          }
        },
        "range": [
          5957,
          5980
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 175
          },
          "start": {
            "column": 13,
            "line": 175
          }
        }
      },
      "range": [
        5944,
        5981
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          5999,
          6004
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 176
          },
          "start": {
            "column": 5,
            "line": 176
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            6021,
            6025
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  6022,
                  6024
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 176
                  },
                  "start": {
                    "column": 28,
                    "line": 176
                  }
                }
              },
              "range": [
                6022,
                6024
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 176
                },
                "start": {
                  "column": 28,
                  "line": 176
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 176
            },
            "start": {
              "column": 27,
              "line": 176
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnsureIsString",
          "optional": false,
          "range": [
            6007,
            6021
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 176
            },
            "start": {
              "column": 13,
              "line": 176
            }
          }
        },
        "range": [
          6007,
          6025
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 176
          },
          "start": {
            "column": 13,
            "line": 176
          }
        }
      },
      "range": [
        5994,
        6026
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 176
        },
        "start": {
          "column": 0,
          "line": 176
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "range": [
                        6251,
                        6255
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 181
                        },
                        "start": {
                          "column": 96,
                          "line": 181
                        }
                      }
                    },
                    "range": [
                      6248,
                      6255
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 181
                      },
                      "start": {
                        "column": 93,
                        "line": 181
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      6239,
                      6242
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 181
                      },
                      "start": {
                        "column": 84,
                        "line": 181
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      6243,
                      6246
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 181
                      },
                      "start": {
                        "column": 88,
                        "line": 181
                      }
                    }
                  },
                  "range": [
                    6239,
                    6247
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 181
                    },
                    "start": {
                      "column": 84,
                      "line": 181
                    }
                  }
                },
                "optional": false,
                "range": [
                  6239,
                  6256
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 181
                  },
                  "start": {
                    "column": 84,
                    "line": 181
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 181
                      },
                      "start": {
                        "column": 58,
                        "line": 181
                      }
                    },
                    "range": [
                      6213,
                      6216
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          6215,
                          6216
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 181
                          },
                          "start": {
                            "column": 60,
                            "line": 181
                          }
                        }
                      },
                      "range": [
                        6215,
                        6216
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 181
                        },
                        "start": {
                          "column": 60,
                          "line": 181
                        }
                      }
                    }
                  },
                  "range": [
                    6210,
                    6216
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 181
                    },
                    "start": {
                      "column": 55,
                      "line": 181
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 181
                  },
                  "start": {
                    "column": 62,
                    "line": 181
                  }
                },
                "range": [
                  6217,
                  6235
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      6229,
                      6235
                    ],
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              6232,
                              6233
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 181
                              },
                              "start": {
                                "column": 77,
                                "line": 181
                              }
                            }
                          },
                          "range": [
                            6232,
                            6233
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 181
                            },
                            "start": {
                              "column": 77,
                              "line": 181
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              6230,
                              6231
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 181
                              },
                              "start": {
                                "column": 75,
                                "line": 181
                              }
                            }
                          },
                          "range": [
                            6230,
                            6231
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 181
                            },
                            "start": {
                              "column": 75,
                              "line": 181
                            }
                          }
                        },
                        "range": [
                          6230,
                          6234
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 181
                          },
                          "start": {
                            "column": 75,
                            "line": 181
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 181
                      },
                      "start": {
                        "column": 74,
                        "line": 181
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "range": [
                      6219,
                      6229
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 181
                      },
                      "start": {
                        "column": 64,
                        "line": 181
                      }
                    }
                  },
                  "range": [
                    6219,
                    6235
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 181
                    },
                    "start": {
                      "column": 64,
                      "line": 181
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 181
                  },
                  "start": {
                    "column": 11,
                    "line": 181
                  }
                },
                "range": [
                  6166,
                  6208
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
                          6183,
                          6207
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "range": [
                                6184,
                                6185
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 181
                                },
                                "start": {
                                  "column": 29,
                                  "line": 181
                                }
                              }
                            },
                            "range": [
                              6184,
                              6185
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 181
                              },
                              "start": {
                                "column": 29,
                                "line": 181
                              }
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "RestElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    6191,
                                    6195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 181
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 181
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 181
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 181
                                    }
                                  },
                                  "range": [
                                    6195,
                                    6198
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        6197,
                                        6198
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 181
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 181
                                        }
                                      }
                                    },
                                    "range": [
                                      6197,
                                      6198
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 181
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 181
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  6188,
                                  6198
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 181
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 181
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 181
                                },
                                "start": {
                                  "column": 45,
                                  "line": 181
                                }
                              },
                              "range": [
                                6200,
                                6206
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  6203,
                                  6206
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 181
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 181
                                  }
                                }
                              }
                            },
                            "range": [
                              6187,
                              6206
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 181
                              },
                              "start": {
                                "column": 32,
                                "line": 181
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 181
                          },
                          "start": {
                            "column": 28,
                            "line": 181
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "range": [
                          6177,
                          6183
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 181
                          },
                          "start": {
                            "column": 22,
                            "line": 181
                          }
                        }
                      },
                      "range": [
                        6177,
                        6207
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 181
                        },
                        "start": {
                          "column": 22,
                          "line": 181
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
                        6167,
                        6168
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 181
                        },
                        "start": {
                          "column": 12,
                          "line": 181
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      6167,
                      6207
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 181
                      },
                      "start": {
                        "column": 12,
                        "line": 181
                      }
                    }
                  }
                ]
              },
              "range": [
                6166,
                6256
              ],
              "loc": {
                "end": {
                  "column": 101,
                  "line": 181
                },
                "start": {
                  "column": 11,
                  "line": 181
                }
              }
            },
            "range": [
              6159,
              6256
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 181
              },
              "start": {
                "column": 4,
                "line": 181
              }
            }
          }
        ],
        "range": [
          6153,
          6258
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 182
          },
          "start": {
            "column": 92,
            "line": 180
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoker",
        "optional": false,
        "range": [
          6070,
          6077
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 180
          },
          "start": {
            "column": 9,
            "line": 180
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 180
              },
              "start": {
                "column": 75,
                "line": 180
              }
            },
            "range": [
              6136,
              6139
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  6138,
                  6139
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 180
                  },
                  "start": {
                    "column": 77,
                    "line": 180
                  }
                }
              },
              "range": [
                6138,
                6139
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 180
                },
                "start": {
                  "column": 77,
                  "line": 180
                }
              }
            }
          },
          "range": [
            6133,
            6139
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 180
            },
            "start": {
              "column": 72,
              "line": 180
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              6144,
              6148
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 180
              },
              "start": {
                "column": 83,
                "line": 180
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 90,
                "line": 180
              },
              "start": {
                "column": 87,
                "line": 180
              }
            },
            "range": [
              6148,
              6151
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  6150,
                  6151
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 180
                  },
                  "start": {
                    "column": 89,
                    "line": 180
                  }
                }
              },
              "range": [
                6150,
                6151
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 180
                },
                "start": {
                  "column": 89,
                  "line": 180
                }
              }
            }
          },
          "range": [
            6141,
            6151
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 180
            },
            "start": {
              "column": 80,
              "line": 180
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 70,
            "line": 180
          },
          "start": {
            "column": 17,
            "line": 180
          }
        },
        "range": [
          6078,
          6131
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    6089,
                    6095
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 180
                    },
                    "start": {
                      "column": 28,
                      "line": 180
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    6098,
                    6104
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 180
                    },
                    "start": {
                      "column": 37,
                      "line": 180
                    }
                  }
                },
                {
                  "type": "TSSymbolKeyword",
                  "range": [
                    6107,
                    6113
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 180
                    },
                    "start": {
                      "column": 46,
                      "line": 180
                    }
                  }
                }
              ],
              "range": [
                6089,
                6113
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 180
                },
                "start": {
                  "column": 28,
                  "line": 180
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                6079,
                6080
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 180
                },
                "start": {
                  "column": 18,
                  "line": 180
                }
              }
            },
            "out": false,
            "range": [
              6079,
              6113
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 180
              },
              "start": {
                "column": 18,
                "line": 180
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  6125,
                  6128
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 180
                  },
                  "start": {
                    "column": 64,
                    "line": 180
                  }
                }
              },
              "range": [
                6125,
                6130
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 180
                },
                "start": {
                  "column": 64,
                  "line": 180
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                6115,
                6116
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 180
                },
                "start": {
                  "column": 54,
                  "line": 180
                }
              }
            },
            "out": false,
            "range": [
              6115,
              6130
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 180
              },
              "start": {
                "column": 54,
                "line": 180
              }
            }
          }
        ]
      },
      "range": [
        6061,
        6258
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
              6266,
              6272
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 184
              },
              "start": {
                "column": 6,
                "line": 184
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
                      "name": "test",
                      "optional": false,
                      "range": [
                        6299,
                        6303
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 184
                        },
                        "start": {
                          "column": 39,
                          "line": 184
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "raw": "123",
                        "value": 123,
                        "range": [
                          6321,
                          6324
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 184
                          },
                          "start": {
                            "column": 61,
                            "line": 184
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
                                "column": 56,
                                "line": 184
                              },
                              "start": {
                                "column": 47,
                                "line": 184
                              }
                            },
                            "range": [
                              6307,
                              6316
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                6309,
                                6316
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 184
                                },
                                "start": {
                                  "column": 49,
                                  "line": 184
                                }
                              }
                            }
                          },
                          "range": [
                            6306,
                            6316
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 184
                            },
                            "start": {
                              "column": 46,
                              "line": 184
                            }
                          }
                        }
                      ],
                      "range": [
                        6305,
                        6324
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 184
                        },
                        "start": {
                          "column": 45,
                          "line": 184
                        }
                      }
                    },
                    "range": [
                      6299,
                      6324
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 184
                      },
                      "start": {
                        "column": 39,
                        "line": 184
                      }
                    }
                  }
                ],
                "range": [
                  6297,
                  6326
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 184
                  },
                  "start": {
                    "column": 37,
                    "line": 184
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "'test'",
                  "value": "test",
                  "range": [
                    6283,
                    6289
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 184
                    },
                    "start": {
                      "column": 23,
                      "line": 184
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    6291,
                    6295
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 184
                    },
                    "start": {
                      "column": 31,
                      "line": 184
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "invoker",
                "optional": false,
                "range": [
                  6275,
                  6282
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 184
                  },
                  "start": {
                    "column": 15,
                    "line": 184
                  }
                }
              },
              "optional": false,
              "range": [
                6275,
                6296
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 184
                },
                "start": {
                  "column": 15,
                  "line": 184
                }
              }
            },
            "optional": false,
            "range": [
              6275,
              6327
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 184
              },
              "start": {
                "column": 15,
                "line": 184
              }
            }
          },
          "range": [
            6266,
            6327
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 184
            },
            "start": {
              "column": 6,
              "line": 184
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        6260,
        6327
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 184
        },
        "start": {
          "column": 0,
          "line": 184
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "range": [
          6334,
          6338
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 186
          },
          "start": {
            "column": 5,
            "line": 186
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            6368,
            6392
          ],
          "params": [
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      6373,
                      6377
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 186
                      },
                      "start": {
                        "column": 44,
                        "line": 186
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 186
                      },
                      "start": {
                        "column": 48,
                        "line": 186
                      }
                    },
                    "range": [
                      6377,
                      6380
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          6379,
                          6380
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 186
                          },
                          "start": {
                            "column": 50,
                            "line": 186
                          }
                        }
                      },
                      "range": [
                        6379,
                        6380
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 186
                        },
                        "start": {
                          "column": 50,
                          "line": 186
                        }
                      }
                    }
                  },
                  "range": [
                    6370,
                    6380
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 186
                    },
                    "start": {
                      "column": 41,
                      "line": 186
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 186
                  },
                  "start": {
                    "column": 53,
                    "line": 186
                  }
                },
                "range": [
                  6382,
                  6391
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    6385,
                    6391
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 186
                    },
                    "start": {
                      "column": 56,
                      "line": 186
                    }
                  }
                }
              },
              "range": [
                6369,
                6391
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 186
                },
                "start": {
                  "column": 40,
                  "line": 186
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 186
            },
            "start": {
              "column": 39,
              "line": 186
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "range": [
            6358,
            6368
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 186
            },
            "start": {
              "column": 29,
              "line": 186
            }
          }
        },
        "range": [
          6358,
          6392
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 186
          },
          "start": {
            "column": 29,
            "line": 186
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 186
          },
          "start": {
            "column": 9,
            "line": 186
          }
        },
        "range": [
          6338,
          6355
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  6349,
                  6352
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 186
                  },
                  "start": {
                    "column": 20,
                    "line": 186
                  }
                }
              },
              "range": [
                6349,
                6354
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 186
                },
                "start": {
                  "column": 20,
                  "line": 186
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                6339,
                6340
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 186
                },
                "start": {
                  "column": 10,
                  "line": 186
                }
              }
            },
            "out": false,
            "range": [
              6339,
              6354
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 186
              },
              "start": {
                "column": 10,
                "line": 186
              }
            }
          }
        ]
      },
      "range": [
        6329,
        6393
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 186
        },
        "start": {
          "column": 0,
          "line": 186
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 187
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
