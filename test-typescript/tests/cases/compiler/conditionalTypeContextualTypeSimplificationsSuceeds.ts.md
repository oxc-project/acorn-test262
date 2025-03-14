__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    67,
    524
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          83,
          124
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "when",
              "optional": false,
              "range": [
                89,
                93
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 4,
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
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                93,
                121
              ],
              "typeAnnotation": {
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
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      },
                      "range": [
                        101,
                        109
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          103,
                          109
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
                    "range": [
                      96,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  },
                  "range": [
                    111,
                    121
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      114,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  95,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              89,
              122
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          77,
          82
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        67,
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
          246,
          249
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 7
          },
          "start": {
            "column": 89,
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
        "name": "bad",
        "optional": false,
        "range": [
          135,
          138
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 87,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
              }
            },
            "range": [
              166,
              244
            ],
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "range": [
                  168,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
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
                    "name": "P",
                    "optional": false,
                    "range": [
                      189,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    189,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 32,
                      "line": 7
                    }
                  }
                },
                "range": [
                  183,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 26,
                    "line": 7
                  }
                }
              },
              "falseType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        234,
                        235
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
                      234,
                      235
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
                    228,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 7
                    },
                    "start": {
                      "column": 71,
                      "line": 7
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    223,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 7
                    },
                    "start": {
                      "column": 66,
                      "line": 7
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        240,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 7
                        },
                        "start": {
                          "column": 83,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      240,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 7
                      },
                      "start": {
                        "column": 83,
                        "line": 7
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        238,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 7
                        },
                        "start": {
                          "column": 81,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      238,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 7
                      },
                      "start": {
                        "column": 81,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    238,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 7
                    },
                    "start": {
                      "column": 81,
                      "line": 7
                    }
                  }
                },
                "range": [
                  220,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 7
                  },
                  "start": {
                    "column": 63,
                    "line": 7
                  }
                }
              },
              "trueType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        207,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 7
                        },
                        "start": {
                          "column": 50,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      207,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 7
                      },
                      "start": {
                        "column": 50,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    201,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    196,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
                      "line": 7
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        213,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 7
                        },
                        "start": {
                          "column": 56,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      213,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 7
                      },
                      "start": {
                        "column": 56,
                        "line": 7
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        211,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 7
                        },
                        "start": {
                          "column": 54,
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
                        "column": 55,
                        "line": 7
                      },
                      "start": {
                        "column": 54,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    211,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 7
                    },
                    "start": {
                      "column": 54,
                      "line": 7
                    }
                  }
                },
                "range": [
                  193,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
                    "line": 7
                  }
                }
              },
              "range": [
                168,
                244
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            }
          },
          "range": [
            161,
            244
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        },
        "range": [
          138,
          155
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
                "name": "Props",
                "optional": false,
                "range": [
                  149,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              "range": [
                149,
                154
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                139,
                140
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              139,
              154
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        126,
        249
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 6
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
          349,
          352
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 9
          },
          "start": {
            "column": 66,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good1",
        "optional": false,
        "range": [
          259,
          264
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            },
            "range": [
              292,
              347
            ],
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSStringKeyword",
                "range": [
                  294,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
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
                    "name": "P",
                    "optional": false,
                    "range": [
                      315,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 9
                      },
                      "start": {
                        "column": 32,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    315,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 32,
                      "line": 9
                    }
                  }
                },
                "range": [
                  309,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              },
              "falseType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        337,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 9
                        },
                        "start": {
                          "column": 54,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      337,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 9
                      },
                      "start": {
                        "column": 54,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    331,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 9
                    },
                    "start": {
                      "column": 48,
                      "line": 9
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    326,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 43,
                      "line": 9
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        343,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 9
                        },
                        "start": {
                          "column": 60,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      343,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 9
                      },
                      "start": {
                        "column": 60,
                        "line": 9
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        341,
                        342
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
                    "range": [
                      341,
                      342
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
                  "range": [
                    341,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 9
                    },
                    "start": {
                      "column": 58,
                      "line": 9
                    }
                  }
                },
                "range": [
                  323,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 9
                  },
                  "start": {
                    "column": 40,
                    "line": 9
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 36,
                      "line": 9
                    }
                  }
                },
                "range": [
                  319,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 9
                  },
                  "start": {
                    "column": 36,
                    "line": 9
                  }
                }
              },
              "range": [
                294,
                347
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            }
          },
          "range": [
            287,
            347
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        },
        "range": [
          264,
          281
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
                "name": "Props",
                "optional": false,
                "range": [
                  275,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 8
                  }
                }
              },
              "range": [
                275,
                280
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                265,
                266
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              265,
              280
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        250,
        352
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 8
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
          423,
          426
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 11
          },
          "start": {
            "column": 37,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "good2",
        "optional": false,
        "range": [
          362,
          367
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attrs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            },
            "range": [
              395,
              421
            ],
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
                    "name": "P",
                    "optional": false,
                    "range": [
                      411,
                      412
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
                  "range": [
                    411,
                    412
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
                "range": [
                  405,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  400,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      417,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 31,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    417,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 31,
                      "line": 11
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      415,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    415,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 29,
                      "line": 11
                    }
                  }
                },
                "range": [
                  415,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "range": [
                397,
                421
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            }
          },
          "range": [
            390,
            421
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 10
          },
          "start": {
            "column": 14,
            "line": 10
          }
        },
        "range": [
          367,
          384
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
                "name": "Props",
                "optional": false,
                "range": [
                  378,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 10
                  },
                  "start": {
                    "column": 25,
                    "line": 10
                  }
                }
              },
              "range": [
                378,
                383
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 10
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                368,
                369
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              368,
              383
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        353,
        426
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 10
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
                  "name": "when",
                  "optional": false,
                  "range": [
                    434,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
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
                    "raw": "false",
                    "value": false,
                    "range": [
                      449,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        440,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    440,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "range": [
                  434,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              432,
              456
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "range": [
            428,
            431
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          428,
          457
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        428,
        458
      ],
      "loc": {
        "end": {
          "column": 30,
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
                  "name": "when",
                  "optional": false,
                  "range": [
                    467,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
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
                    "raw": "false",
                    "value": false,
                    "range": [
                      482,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        473,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    473,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                "range": [
                  467,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              465,
              489
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good1",
          "optional": false,
          "range": [
            459,
            464
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
        "optional": false,
        "range": [
          459,
          490
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        459,
        491
      ],
      "loc": {
        "end": {
          "column": 32,
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
                  "name": "when",
                  "optional": false,
                  "range": [
                    500,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
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
                    "raw": "false",
                    "value": false,
                    "range": [
                      515,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        506,
                        511
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
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
                    506,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                },
                "range": [
                  500,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 28,
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
              498,
              522
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "good2",
          "optional": false,
          "range": [
            492,
            497
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
        "optional": false,
        "range": [
          492,
          523
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        492,
        524
      ],
      "loc": {
        "end": {
          "column": 32,
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
      "column": 32,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
