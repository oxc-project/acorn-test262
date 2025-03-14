__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1109
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TakeString",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
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
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              },
              "range": [
                20,
                28
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              19,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          },
          "range": [
            30,
            36
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              33,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 33,
                "line": 1
              }
            }
          }
        },
        "range": [
          18,
          36
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "mapped1",
        "optional": false,
        "range": [
          176,
          183
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
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
                "column": 70,
                "line": 5
              },
              "start": {
                "column": 67,
                "line": 5
              }
            },
            "range": [
              226,
              229
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  228,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 5
                  },
                  "start": {
                    "column": 69,
                    "line": 5
                  }
                }
              },
              "range": [
                228,
                229
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 5
                },
                "start": {
                  "column": 69,
                  "line": 5
                }
              }
            }
          },
          "range": [
            223,
            229
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 5
            },
            "start": {
              "column": 64,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 77,
            "line": 5
          },
          "start": {
            "column": 71,
            "line": 5
          }
        },
        "range": [
          230,
          236
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            232,
            236
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 5
            },
            "start": {
              "column": 73,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 63,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        },
        "range": [
          183,
          222
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSStringKeyword",
                "range": [
                  201,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  196,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    210,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 5
                    },
                    "start": {
                      "column": 51,
                      "line": 5
                    }
                  }
                },
                "range": [
                  210,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 5
                  },
                  "start": {
                    "column": 51,
                    "line": 5
                  }
                }
              },
              "range": [
                194,
                221
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 5
                },
                "start": {
                  "column": 35,
                  "line": 5
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
                184,
                185
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              184,
              221
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        159,
        237
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
        "name": "mapped2",
        "optional": false,
        "range": [
          255,
          262
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
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
                "column": 71,
                "line": 6
              },
              "start": {
                "column": 68,
                "line": 6
              }
            },
            "range": [
              306,
              309
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  308,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 6
                  },
                  "start": {
                    "column": 70,
                    "line": 6
                  }
                }
              },
              "range": [
                308,
                309
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 6
                },
                "start": {
                  "column": 70,
                  "line": 6
                }
              }
            }
          },
          "range": [
            303,
            309
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 6
            },
            "start": {
              "column": 65,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 6
          },
          "start": {
            "column": 72,
            "line": 6
          }
        },
        "range": [
          310,
          316
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            312,
            316
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 6
            },
            "start": {
              "column": 74,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 6
          }
        },
        "range": [
          262,
          302
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                      286,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 6
                      },
                      "start": {
                        "column": 48,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    286,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 6
                    },
                    "start": {
                      "column": 48,
                      "line": 6
                    }
                  }
                },
                "range": [
                  280,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  275,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 6
                  },
                  "start": {
                    "column": 37,
                    "line": 6
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    290,
                    300
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 6
                    },
                    "start": {
                      "column": 52,
                      "line": 6
                    }
                  }
                },
                "range": [
                  290,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 6
                  },
                  "start": {
                    "column": 52,
                    "line": 6
                  }
                }
              },
              "range": [
                273,
                301
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
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
                263,
                264
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              263,
              301
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 6
              },
              "start": {
                "column": 25,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        238,
        317
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "mapped3",
        "optional": false,
        "range": [
          335,
          342
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 7
              },
              "start": {
                "column": 70,
                "line": 7
              }
            },
            "range": [
              388,
              391
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  390,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 7
                  },
                  "start": {
                    "column": 72,
                    "line": 7
                  }
                }
              },
              "range": [
                390,
                391
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 7
                },
                "start": {
                  "column": 72,
                  "line": 7
                }
              }
            }
          },
          "range": [
            385,
            391
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 7
            },
            "start": {
              "column": 67,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 7
          },
          "start": {
            "column": 74,
            "line": 7
          }
        },
        "range": [
          392,
          398
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            394,
            398
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 7
            },
            "start": {
              "column": 76,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 7
          }
        },
        "range": [
          342,
          384
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    366,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 7
                    },
                    "start": {
                      "column": 48,
                      "line": 7
                    }
                  }
                },
                "range": [
                  360,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 42,
                    "line": 7
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  355,
                  356
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
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    372,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 7
                    },
                    "start": {
                      "column": 54,
                      "line": 7
                    }
                  }
                },
                "range": [
                  372,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 7
                  },
                  "start": {
                    "column": 54,
                    "line": 7
                  }
                }
              },
              "range": [
                353,
                383
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 7
                },
                "start": {
                  "column": 35,
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
                343,
                344
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              343,
              383
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        318,
        399
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "mapped4",
        "optional": false,
        "range": [
          417,
          424
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
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
                "column": 65,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 8
              }
            },
            "range": [
              431,
              465
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      433,
                      434
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
                    433,
                    434
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
                {
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
                          450,
                          451
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 8
                          },
                          "start": {
                            "column": 50,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        450,
                        451
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 8
                        },
                        "start": {
                          "column": 50,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      444,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 8
                      },
                      "start": {
                        "column": 44,
                        "line": 8
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      439,
                      440
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
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "range": [
                        454,
                        464
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 8
                        },
                        "start": {
                          "column": 54,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      454,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 8
                      },
                      "start": {
                        "column": 54,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    437,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 8
                    },
                    "start": {
                      "column": 37,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                433,
                465
              ],
              "loc": {
                "end": {
                  "column": 65,
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
            428,
            465
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 8
            },
            "start": {
              "column": 28,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 72,
            "line": 8
          },
          "start": {
            "column": 66,
            "line": 8
          }
        },
        "range": [
          466,
          472
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            468,
            472
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 8
            },
            "start": {
              "column": 68,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 8
          },
          "start": {
            "column": 24,
            "line": 8
          }
        },
        "range": [
          424,
          427
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
                425,
                426
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              425,
              426
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 25,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        400,
        473
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
        "name": "mapped5",
        "optional": false,
        "range": [
          491,
          498
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
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
                "column": 78,
                "line": 9
              },
              "start": {
                "column": 50,
                "line": 9
              }
            },
            "range": [
              524,
              552
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      526,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 9
                      },
                      "start": {
                        "column": 52,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    526,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 9
                    },
                    "start": {
                      "column": 52,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSMappedType",
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        537,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 9
                        },
                        "start": {
                          "column": 63,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      537,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 9
                      },
                      "start": {
                        "column": 63,
                        "line": 9
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      532,
                      533
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 9
                      },
                      "start": {
                        "column": 58,
                        "line": 9
                      }
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TakeString",
                      "optional": false,
                      "range": [
                        541,
                        551
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 9
                        },
                        "start": {
                          "column": 67,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      541,
                      551
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 9
                      },
                      "start": {
                        "column": 67,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    530,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 9
                    },
                    "start": {
                      "column": 56,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                526,
                552
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 9
                },
                "start": {
                  "column": 52,
                  "line": 9
                }
              }
            }
          },
          "range": [
            521,
            552
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 9
            },
            "start": {
              "column": 47,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 85,
            "line": 9
          },
          "start": {
            "column": 79,
            "line": 9
          }
        },
        "range": [
          553,
          559
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            555,
            559
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 9
            },
            "start": {
              "column": 81,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 9
          },
          "start": {
            "column": 24,
            "line": 9
          }
        },
        "range": [
          498,
          520
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
                499,
                500
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              499,
              500
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
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
                    518,
                    519
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
                  518,
                  519
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
                512,
                519
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 38,
                  "line": 9
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
                502,
                503
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 9
                },
                "start": {
                  "column": 28,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              502,
              519
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        474,
        560
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
        "name": "mapped6",
        "optional": false,
        "range": [
          578,
          585
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 10
          },
          "start": {
            "column": 17,
            "line": 10
          }
        }
      },
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
                "column": 70,
                "line": 10
              },
              "start": {
                "column": 46,
                "line": 10
              }
            },
            "range": [
              607,
              631
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    616,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 10
                    },
                    "start": {
                      "column": 55,
                      "line": 10
                    }
                  }
                },
                "range": [
                  616,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 10
                  },
                  "start": {
                    "column": 55,
                    "line": 10
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  611,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 10
                  },
                  "start": {
                    "column": 50,
                    "line": 10
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    620,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 10
                    },
                    "start": {
                      "column": 59,
                      "line": 10
                    }
                  }
                },
                "range": [
                  620,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 59,
                    "line": 10
                  }
                }
              },
              "range": [
                609,
                631
              ],
              "loc": {
                "end": {
                  "column": 70,
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
            604,
            631
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 10
            },
            "start": {
              "column": 43,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 77,
            "line": 10
          },
          "start": {
            "column": 71,
            "line": 10
          }
        },
        "range": [
          632,
          638
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            634,
            638
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 10
            },
            "start": {
              "column": 73,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 10
          }
        },
        "range": [
          585,
          603
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                596,
                602
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 10
                },
                "start": {
                  "column": 35,
                  "line": 10
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
                586,
                587
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
            "out": false,
            "range": [
              586,
              602
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 10
              },
              "start": {
                "column": 25,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        561,
        639
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
        "name": "mapped7",
        "optional": false,
        "range": [
          657,
          664
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
                "column": 73,
                "line": 11
              },
              "start": {
                "column": 49,
                "line": 11
              }
            },
            "range": [
              689,
              713
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    698,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 11
                    },
                    "start": {
                      "column": 58,
                      "line": 11
                    }
                  }
                },
                "range": [
                  698,
                  699
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 11
                  },
                  "start": {
                    "column": 58,
                    "line": 11
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  693,
                  694
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 11
                  },
                  "start": {
                    "column": 53,
                    "line": 11
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    702,
                    712
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 11
                    },
                    "start": {
                      "column": 62,
                      "line": 11
                    }
                  }
                },
                "range": [
                  702,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 11
                  },
                  "start": {
                    "column": 62,
                    "line": 11
                  }
                }
              },
              "range": [
                691,
                713
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 11
                },
                "start": {
                  "column": 51,
                  "line": 11
                }
              }
            }
          },
          "range": [
            686,
            713
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 11
            },
            "start": {
              "column": 46,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 11
          },
          "start": {
            "column": 74,
            "line": 11
          }
        },
        "range": [
          714,
          720
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            716,
            720
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 11
            },
            "start": {
              "column": 76,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 45,
            "line": 11
          },
          "start": {
            "column": 24,
            "line": 11
          }
        },
        "range": [
          664,
          685
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  681,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 11
                  },
                  "start": {
                    "column": 41,
                    "line": 11
                  }
                }
              },
              "range": [
                675,
                684
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 11
                },
                "start": {
                  "column": 35,
                  "line": 11
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
                665,
                666
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              665,
              684
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        640,
        721
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "mapped8",
        "optional": false,
        "range": [
          739,
          746
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
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
                "column": 69,
                "line": 12
              },
              "start": {
                "column": 45,
                "line": 12
              }
            },
            "range": [
              767,
              791
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    776,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 12
                    },
                    "start": {
                      "column": 54,
                      "line": 12
                    }
                  }
                },
                "range": [
                  776,
                  777
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 12
                  },
                  "start": {
                    "column": 54,
                    "line": 12
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  771,
                  772
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 12
                  },
                  "start": {
                    "column": 49,
                    "line": 12
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    780,
                    790
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 12
                    },
                    "start": {
                      "column": 58,
                      "line": 12
                    }
                  }
                },
                "range": [
                  780,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 12
                  },
                  "start": {
                    "column": 58,
                    "line": 12
                  }
                }
              },
              "range": [
                769,
                791
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 12
                },
                "start": {
                  "column": 47,
                  "line": 12
                }
              }
            }
          },
          "range": [
            764,
            791
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 12
            },
            "start": {
              "column": 42,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 76,
            "line": 12
          },
          "start": {
            "column": 70,
            "line": 12
          }
        },
        "range": [
          792,
          798
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            794,
            798
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 12
            },
            "start": {
              "column": 72,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 12
          },
          "start": {
            "column": 24,
            "line": 12
          }
        },
        "range": [
          746,
          763
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  757,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                }
              },
              "range": [
                757,
                762
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 12
                },
                "start": {
                  "column": 35,
                  "line": 12
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
                747,
                748
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              747,
              762
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        722,
        799
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
        "name": "mapped9",
        "optional": false,
        "range": [
          817,
          824
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
          }
        }
      },
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
                "column": 75,
                "line": 13
              },
              "start": {
                "column": 51,
                "line": 13
              }
            },
            "range": [
              851,
              875
            ],
            "typeAnnotation": {
              "type": "TSMappedType",
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    860,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 13
                    },
                    "start": {
                      "column": 60,
                      "line": 13
                    }
                  }
                },
                "range": [
                  860,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 13
                  },
                  "start": {
                    "column": 60,
                    "line": 13
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  855,
                  856
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 13
                  },
                  "start": {
                    "column": 55,
                    "line": 13
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TakeString",
                  "optional": false,
                  "range": [
                    864,
                    874
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 13
                    },
                    "start": {
                      "column": 64,
                      "line": 13
                    }
                  }
                },
                "range": [
                  864,
                  874
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 13
                  },
                  "start": {
                    "column": 64,
                    "line": 13
                  }
                }
              },
              "range": [
                853,
                875
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 13
                },
                "start": {
                  "column": 53,
                  "line": 13
                }
              }
            }
          },
          "range": [
            848,
            875
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 13
            },
            "start": {
              "column": 48,
              "line": 13
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 13
          },
          "start": {
            "column": 76,
            "line": 13
          }
        },
        "range": [
          876,
          882
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            878,
            882
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 13
            },
            "start": {
              "column": 78,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 13
          },
          "start": {
            "column": 24,
            "line": 13
          }
        },
        "range": [
          824,
          847
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      835,
                      840
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 13
                      },
                      "start": {
                        "column": 35,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    835,
                    840
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 13
                    },
                    "start": {
                      "column": 35,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'bar'",
                    "value": "bar",
                    "range": [
                      841,
                      846
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 13
                      },
                      "start": {
                        "column": 41,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    841,
                    846
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 13
                    },
                    "start": {
                      "column": 41,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                835,
                846
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 13
                },
                "start": {
                  "column": 35,
                  "line": 13
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
                825,
                826
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              825,
              846
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 13
              },
              "start": {
                "column": 25,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        800,
        883
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    894,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      904,
                      906
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 19,
                        "line": 15
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
                        899,
                        900
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    899,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                },
                "range": [
                  894,
                  906
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              893,
              907
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped1",
          "optional": false,
          "range": [
            885,
            892
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          885,
          908
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        885,
        909
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    919,
                    922
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 16
                    },
                    "start": {
                      "column": 9,
                      "line": 16
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      929,
                      931
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
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
                        924,
                        925
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    924,
                    931
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "range": [
                  919,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              918,
              932
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped2",
          "optional": false,
          "range": [
            910,
            917
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          910,
          933
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        910,
        934
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    944,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      954,
                      956
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
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
                        949,
                        950
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    949,
                    956
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "range": [
                  944,
                  956
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              943,
              957
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped3",
          "optional": false,
          "range": [
            935,
            942
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          935,
          958
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        935,
        959
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    969,
                    972
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      979,
                      981
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 19,
                        "line": 18
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
                        974,
                        975
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
                    }
                  ],
                  "range": [
                    974,
                    981
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
                "range": [
                  969,
                  981
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              968,
              982
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 8,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped4",
          "optional": false,
          "range": [
            960,
            967
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          960,
          983
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        960,
        984
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    994,
                    997
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 19
                    },
                    "start": {
                      "column": 9,
                      "line": 19
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1004,
                      1006
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 19,
                        "line": 19
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
                        999,
                        1000
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    999,
                    1006
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "range": [
                  994,
                  1006
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              993,
              1007
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped5",
          "optional": false,
          "range": [
            985,
            992
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          985,
          1008
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        985,
        1009
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1019,
                    1022
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 20
                    },
                    "start": {
                      "column": 9,
                      "line": 20
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1029,
                      1031
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 20
                      },
                      "start": {
                        "column": 19,
                        "line": 20
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
                        1024,
                        1025
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 20
                        },
                        "start": {
                          "column": 14,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    1024,
                    1031
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                },
                "range": [
                  1019,
                  1031
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              1018,
              1032
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped6",
          "optional": false,
          "range": [
            1010,
            1017
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          1010,
          1033
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        1010,
        1034
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1044,
                    1047
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 21
                    },
                    "start": {
                      "column": 9,
                      "line": 21
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1054,
                      1056
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 21
                      },
                      "start": {
                        "column": 19,
                        "line": 21
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
                        1049,
                        1050
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    1049,
                    1056
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 21
                    },
                    "start": {
                      "column": 14,
                      "line": 21
                    }
                  }
                },
                "range": [
                  1044,
                  1056
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              1043,
              1057
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped7",
          "optional": false,
          "range": [
            1035,
            1042
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          1035,
          1058
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        1035,
        1059
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1069,
                    1072
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1079,
                      1081
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 22
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
                        1074,
                        1075
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
                    }
                  ],
                  "range": [
                    1074,
                    1081
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
                    }
                  }
                },
                "range": [
                  1069,
                  1081
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              1068,
              1082
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped8",
          "optional": false,
          "range": [
            1060,
            1067
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          1060,
          1083
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        1060,
        1084
      ],
      "loc": {
        "end": {
          "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1094,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
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
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1104,
                      1106
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 23
                      },
                      "start": {
                        "column": 19,
                        "line": 23
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
                        1099,
                        1100
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    1099,
                    1106
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 23
                    },
                    "start": {
                      "column": 14,
                      "line": 23
                    }
                  }
                },
                "range": [
                  1094,
                  1106
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              1093,
              1107
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mapped9",
          "optional": false,
          "range": [
            1085,
            1092
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          1085,
          1108
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        1085,
        1109
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 24,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
