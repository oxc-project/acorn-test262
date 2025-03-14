__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    367
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyFunction",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                23,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              },
              "range": [
                27,
                34
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    29,
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                },
                "range": [
                  29,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              20,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 42,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          },
          "range": [
            36,
            42
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              39,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          }
        },
        "range": [
          19,
          42
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 1
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
        "name": "Params",
        "optional": false,
        "range": [
          49,
          55
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
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            71,
            96
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  79,
                  95
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
                        80,
                        81
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
                      80,
                      81
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
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyFunction",
                      "optional": false,
                      "range": [
                        83,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 2
                        },
                        "start": {
                          "column": 39,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      83,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 39,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
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
                "name": "Extract",
                "optional": false,
                "range": [
                  72,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
                    "line": 2
                  }
                }
              },
              "range": [
                72,
                95
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 2
            },
            "start": {
              "column": 27,
              "line": 2
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "range": [
            61,
            71
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          61,
          96
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        },
        "range": [
          55,
          58
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
                56,
                57
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
              56,
              57
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
          }
        ]
      },
      "range": [
        44,
        97
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          120,
          188
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "range": [
                123,
                127
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 1,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
                    }
                  },
                  "range": [
                    152,
                    155
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  147,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
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
                    160,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 38,
                      "line": 5
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 5
                    },
                    "start": {
                      "column": 42,
                      "line": 5
                    }
                  },
                  "range": [
                    164,
                    178
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        172,
                        178
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
                                175,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 5
                                },
                                "start": {
                                  "column": 53,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              175,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 5
                              },
                              "start": {
                                "column": 53,
                                "line": 5
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
                                173,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 5
                                },
                                "start": {
                                  "column": 51,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              173,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 5
                              },
                              "start": {
                                "column": 51,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            173,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 5
                            },
                            "start": {
                              "column": 51,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 5
                        },
                        "start": {
                          "column": 50,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Params",
                      "optional": false,
                      "range": [
                        166,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 5
                        },
                        "start": {
                          "column": 44,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      166,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 5
                      },
                      "start": {
                        "column": 44,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  157,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 5
                  },
                  "start": {
                    "column": 35,
                    "line": 5
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 5
                },
                "start": {
                  "column": 57,
                  "line": 5
                }
              },
              "range": [
                179,
                185
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  181,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 59,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                127,
                146
              ],
              "params": [
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
                          144,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 5
                          },
                          "start": {
                            "column": 22,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        144,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      138,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 16,
                        "line": 5
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
                      128,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 5
                      },
                      "start": {
                        "column": 6,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    128,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              123,
              186
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 21,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "range": [
          109,
          116
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        },
        "range": [
          116,
          119
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
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        99,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          209,
          226
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                212,
                215
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 9
                },
                "start": {
                  "column": 1,
                  "line": 9
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
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              },
              "range": [
                217,
                223
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  219,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            },
            "static": false,
            "range": [
              212,
              224
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 19,
            "line": 8
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AWrapped",
        "optional": false,
        "range": [
          200,
          208
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        190,
        226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          236,
          264
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
                239,
                242
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 13
                },
                "start": {
                  "column": 1,
                  "line": 13
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
                  "column": 23,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              },
              "range": [
                242,
                261
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    251,
                    261
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AWrapped",
                        "optional": false,
                        "range": [
                          252,
                          260
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        252,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 13,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapper",
                  "optional": false,
                  "range": [
                    244,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 13
                    },
                    "start": {
                      "column": 6,
                      "line": 13
                    }
                  }
                },
                "range": [
                  244,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                }
              }
            },
            "value": null,
            "range": [
              239,
              262
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 12
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
          234,
          235
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        228,
        264
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          302,
          319
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                305,
                308
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 17
                },
                "start": {
                  "column": 1,
                  "line": 17
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
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
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
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            },
            "static": false,
            "range": [
              305,
              317
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 1,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 36,
            "line": 16
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
            "name": "AWrapped",
            "optional": false,
            "range": [
              293,
              301
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 16
              },
              "start": {
                "column": 27,
                "line": 16
              }
            }
          },
          "range": [
            293,
            301
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 16
            },
            "start": {
              "column": 27,
              "line": 16
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BWrapped",
        "optional": false,
        "range": [
          276,
          284
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "range": [
        266,
        319
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          339,
          367
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
                342,
                345
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 21
                },
                "start": {
                  "column": 1,
                  "line": 21
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
                  "column": 23,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              },
              "range": [
                345,
                364
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    354,
                    364
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BWrapped",
                        "optional": false,
                        "range": [
                          355,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        355,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapper",
                  "optional": false,
                  "range": [
                    347,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 21
                    },
                    "start": {
                      "column": 6,
                      "line": 21
                    }
                  }
                },
                "range": [
                  347,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 6,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              342,
              365
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 21
              },
              "start": {
                "column": 1,
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
            "column": 18,
            "line": 20
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
          327,
          328
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
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
          337,
          338
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 16,
            "line": 20
          }
        }
      },
      "range": [
        321,
        367
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
