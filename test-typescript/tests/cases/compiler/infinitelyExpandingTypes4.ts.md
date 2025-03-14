__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    443
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          112
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "range": [
                36,
                43
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  },
                  "range": [
                    58,
                    74
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 3
                            },
                            "start": {
                              "column": 33,
                              "line": 3
                            }
                          },
                          "range": [
                            65,
                            68
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                67,
                                68
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 3
                                },
                                "start": {
                                  "column": 35,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              67,
                              68
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 3
                              },
                              "start": {
                                "column": 35,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          61,
                          68
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
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      },
                      "range": [
                        70,
                        74
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            73,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 3
                            },
                            "start": {
                              "column": 41,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          73,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 3
                          },
                          "start": {
                            "column": 41,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      60,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  47,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 3
                },
                "start": {
                  "column": 43,
                  "line": 3
                }
              },
              "range": [
                75,
                98
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    82,
                    98
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          91,
                          97
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
                                92,
                                93
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 3
                                },
                                "start": {
                                  "column": 60,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              92,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 3
                              },
                              "start": {
                                "column": 60,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                95,
                                96
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 3
                                },
                                "start": {
                                  "column": 63,
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
                                "column": 64,
                                "line": 3
                              },
                              "start": {
                                "column": 63,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 3
                          },
                          "start": {
                            "column": 59,
                            "line": 3
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grouping",
                        "optional": false,
                        "range": [
                          83,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 3
                          },
                          "start": {
                            "column": 51,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        83,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 3
                        },
                        "start": {
                          "column": 51,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 3
                    },
                    "start": {
                      "column": 50,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    77,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 45,
                      "line": 3
                    }
                  }
                },
                "range": [
                  77,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 3
                  },
                  "start": {
                    "column": 45,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                43,
                46
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      44,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    44,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ]
            },
            "range": [
              36,
              99
            ],
            "loc": {
              "end": {
                "column": 67,
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
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          18
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        112
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          143,
          246
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "range": [
                160,
                167
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  },
                  "range": [
                    182,
                    198
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          },
                          "range": [
                            189,
                            192
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                191,
                                192
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 9
                                },
                                "start": {
                                  "column": 35,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              191,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 9
                              },
                              "start": {
                                "column": 35,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          185,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 9
                          },
                          "start": {
                            "column": 29,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 9
                        },
                        "start": {
                          "column": 38,
                          "line": 9
                        }
                      },
                      "range": [
                        194,
                        198
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            197,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 9
                            },
                            "start": {
                              "column": 41,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          197,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 9
                          },
                          "start": {
                            "column": 41,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      184,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  171,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 9
                },
                "start": {
                  "column": 43,
                  "line": 9
                }
              },
              "range": [
                199,
                232
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    216,
                    232
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          225,
                          231
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
                                226,
                                227
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 9
                                },
                                "start": {
                                  "column": 70,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              226,
                              227
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 9
                              },
                              "start": {
                                "column": 70,
                                "line": 9
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                229,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 9
                                },
                                "start": {
                                  "column": 73,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              229,
                              230
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 9
                              },
                              "start": {
                                "column": 73,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 9
                          },
                          "start": {
                            "column": 69,
                            "line": 9
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Grouping",
                        "optional": false,
                        "range": [
                          217,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 9
                          },
                          "start": {
                            "column": 61,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        217,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 9
                        },
                        "start": {
                          "column": 61,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 9
                    },
                    "start": {
                      "column": 60,
                      "line": 9
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryEnumerator",
                  "optional": false,
                  "range": [
                    201,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 9
                    },
                    "start": {
                      "column": 45,
                      "line": 9
                    }
                  }
                },
                "range": [
                  201,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 9
                  },
                  "start": {
                    "column": 45,
                    "line": 9
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              },
              "range": [
                167,
                170
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      168,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    168,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                }
              ]
            },
            "range": [
              160,
              233
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 29,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryEnumerator",
        "optional": false,
        "range": [
          124,
          139
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 25,
            "line": 7
          }
        },
        "range": [
          139,
          142
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
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 26,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              140,
              141
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        114,
        246
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          290,
          307
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "range": [
                296,
                299
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 12,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                301,
                304
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    303,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  303,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              296,
              305
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 42,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "range": [
              281,
              286
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 13
              },
              "start": {
                "column": 33,
                "line": 13
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              286,
              289
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
                    287,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 13
                    },
                    "start": {
                      "column": 39,
                      "line": 13
                    }
                  }
                },
                "range": [
                  287,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 13
                  },
                  "start": {
                    "column": 39,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 13
              },
              "start": {
                "column": 38,
                "line": 13
              }
            }
          },
          "range": [
            281,
            289
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 13
            },
            "start": {
              "column": 33,
              "line": 13
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grouping",
        "optional": false,
        "range": [
          258,
          266
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 13
          },
          "start": {
            "column": 18,
            "line": 13
          }
        },
        "range": [
          266,
          272
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                267,
                268
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              267,
              268
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
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
                270,
                271
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              270,
              271
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        248,
        307
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "name": "q1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              },
              "range": [
                315,
                330
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    322,
                    330
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        323,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    317,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "range": [
                  317,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              313,
              330
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": null,
          "range": [
            313,
            330
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        309,
        331
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "q2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
                }
              },
              "range": [
                338,
                363
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    355,
                    363
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        356,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 18
                    },
                    "start": {
                      "column": 23,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryEnumerator",
                  "optional": false,
                  "range": [
                    340,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "range": [
                  340,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              336,
              363
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            336,
            363
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
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
        332,
        364
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 18
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
            "name": "q3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              },
              "range": [
                371,
                386
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    378,
                    386
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        379,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 13,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    373,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "range": [
                  373,
                  386
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
              369,
              386
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            369,
            386
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        365,
        387
      ],
      "loc": {
        "end": {
          "column": 22,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "q1",
          "optional": false,
          "range": [
            389,
            391
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "q2",
          "optional": false,
          "range": [
            394,
            396
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 21
            },
            "start": {
              "column": 5,
              "line": 21
            }
          }
        },
        "range": [
          389,
          396
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
      "range": [
        389,
        397
      ],
      "loc": {
        "end": {
          "column": 8,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "q1",
          "optional": false,
          "range": [
            414,
            416
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "q3",
          "optional": false,
          "range": [
            419,
            421
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 22
            },
            "start": {
              "column": 5,
              "line": 22
            }
          }
        },
        "range": [
          414,
          421
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
      "range": [
        414,
        422
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
