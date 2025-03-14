__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    40,
    561
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
            "name": "simpleUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                55,
                72
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      57,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      66,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  57,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              44,
              72
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            44,
            72
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        40,
        73
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "unionOfUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              },
              "range": [
                90,
                117
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      92,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      101,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      110,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  92,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              78,
              117
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            78,
            117
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        74,
        118
      ],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "arrayOfUnions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 6
                }
              },
              "range": [
                137,
                158
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        140,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        149,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 6
                        },
                        "start": {
                          "column": 29,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    140,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                },
                "range": [
                  139,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              124,
              158
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            124,
            158
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        120,
        159
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "arrayOfUnions",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                177,
                201
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    184,
                    201
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            185,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            194,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 7
                            },
                            "start": {
                              "column": 34,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        185,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 7
                        },
                        "start": {
                          "column": 25,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    179,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "range": [
                  179,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              164,
              201
            ],
            "loc": {
              "end": {
                "column": 41,
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
            164,
            201
          ],
          "loc": {
            "end": {
              "column": 41,
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
        160,
        202
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "unionOfFunctionType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 9
                },
                "start": {
                  "column": 23,
                  "line": 9
                }
              },
              "range": [
                227,
                260
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      },
                      "range": [
                        233,
                        242
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          236,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 9
                          },
                          "start": {
                            "column": 32,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      230,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 9
                      },
                      "start": {
                        "column": 26,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 9
                        },
                        "start": {
                          "column": 46,
                          "line": 9
                        }
                      },
                      "range": [
                        250,
                        259
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          253,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 9
                          },
                          "start": {
                            "column": 49,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      247,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 9
                      },
                      "start": {
                        "column": 43,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  229,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 9
                  },
                  "start": {
                    "column": 25,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              208,
              260
            ],
            "loc": {
              "end": {
                "column": 56,
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
            208,
            260
          ],
          "loc": {
            "end": {
              "column": 56,
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
        204,
        261
      ],
      "loc": {
        "end": {
          "column": 57,
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
            "name": "unionOfFunctionType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              },
              "range": [
                285,
                318
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 10
                            },
                            "start": {
                              "column": 29,
                              "line": 10
                            }
                          },
                          "range": [
                            291,
                            299
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              293,
                              299
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 10
                              },
                              "start": {
                                "column": 31,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          289,
                          299
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 10
                          },
                          "start": {
                            "column": 27,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      287,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 25,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 10
                            },
                            "start": {
                              "column": 46,
                              "line": 10
                            }
                          },
                          "range": [
                            308,
                            316
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              310,
                              316
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 10
                              },
                              "start": {
                                "column": 48,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          306,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 10
                          },
                          "start": {
                            "column": 44,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      304,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 10
                      },
                      "start": {
                        "column": 42,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  287,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 56,
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
              266,
              318
            ],
            "loc": {
              "end": {
                "column": 56,
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
            266,
            318
          ],
          "loc": {
            "end": {
              "column": 56,
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
        262,
        319
      ],
      "loc": {
        "end": {
          "column": 57,
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
            "name": "unionOfFunctionType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 11
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              },
              "range": [
                343,
                366
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 11
                    },
                    "start": {
                      "column": 28,
                      "line": 11
                    }
                  },
                  "range": [
                    348,
                    366
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          351,
                          357
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 11
                          },
                          "start": {
                            "column": 31,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          360,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 11
                          },
                          "start": {
                            "column": 40,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      351,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 11
                      },
                      "start": {
                        "column": 31,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  345,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              324,
              366
            ],
            "loc": {
              "end": {
                "column": 46,
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
            324,
            366
          ],
          "loc": {
            "end": {
              "column": 46,
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
        320,
        367
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "unionOfConstructorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 13
                },
                "start": {
                  "column": 26,
                  "line": 13
                }
              },
              "range": [
                395,
                436
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 13
                        },
                        "start": {
                          "column": 36,
                          "line": 13
                        }
                      },
                      "range": [
                        405,
                        414
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          408,
                          414
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 13
                          },
                          "start": {
                            "column": 39,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      398,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 13
                        },
                        "start": {
                          "column": 57,
                          "line": 13
                        }
                      },
                      "range": [
                        426,
                        435
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          429,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 13
                          },
                          "start": {
                            "column": 60,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      419,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 13
                      },
                      "start": {
                        "column": 50,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  397,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 13
                  },
                  "start": {
                    "column": 28,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              373,
              436
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            373,
            436
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 13
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
        369,
        437
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 13
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
            "name": "unionOfConstructorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 14
                },
                "start": {
                  "column": 26,
                  "line": 14
                }
              },
              "range": [
                464,
                505
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 14
                            },
                            "start": {
                              "column": 36,
                              "line": 14
                            }
                          },
                          "range": [
                            474,
                            482
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              476,
                              482
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 14
                              },
                              "start": {
                                "column": 38,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          468,
                          482
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 14
                          },
                          "start": {
                            "column": 30,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      466,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 14
                            },
                            "start": {
                              "column": 57,
                              "line": 14
                            }
                          },
                          "range": [
                            495,
                            503
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              497,
                              503
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 14
                              },
                              "start": {
                                "column": 59,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          489,
                          503
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 14
                          },
                          "start": {
                            "column": 51,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      487,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 14
                      },
                      "start": {
                        "column": 49,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  466,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              442,
              505
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            442,
            505
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        438,
        506
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "unionOfConstructorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              },
              "range": [
                533,
                560
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 15
                    },
                    "start": {
                      "column": 35,
                      "line": 15
                    }
                  },
                  "range": [
                    542,
                    560
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          545,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 15
                          },
                          "start": {
                            "column": 38,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          554,
                          560
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 15
                          },
                          "start": {
                            "column": 47,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      545,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 15
                      },
                      "start": {
                        "column": 38,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  535,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              511,
              560
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            511,
            560
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        507,
        561
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 54,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
