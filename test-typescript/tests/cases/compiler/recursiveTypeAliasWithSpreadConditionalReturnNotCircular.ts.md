__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    901
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        10,
        309
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            37,
            309
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "range": [
                  40,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 1,
                    "line": 3
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "range": [
                      78,
                      84
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
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    },
                    "range": [
                      84,
                      87
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "range": [
                          86,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 3
                          },
                          "start": {
                            "column": 47,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        86,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 3
                        },
                        "start": {
                          "column": 47,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    75,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 3
                    },
                    "start": {
                      "column": 36,
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
                    "column": 87,
                    "line": 3
                  },
                  "start": {
                    "column": 49,
                    "line": 3
                  }
                },
                "range": [
                  88,
                  126
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      96,
                      126
                    ],
                    "params": [
                      {
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
                                98,
                                99
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 3
                                },
                                "start": {
                                  "column": 59,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              98,
                              99
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 3
                              },
                              "start": {
                                "column": 59,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  121,
                                  124
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "range": [
                                        122,
                                        123
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 84,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 83,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      122,
                                      123
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 84,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 3
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 3
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray1",
                                "optional": false,
                                "range": [
                                  104,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                104,
                                124
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 3
                                },
                                "start": {
                                  "column": 65,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              101,
                              124
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 3
                              },
                              "start": {
                                "column": 62,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          97,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 3
                          },
                          "start": {
                            "column": 58,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 3
                      },
                      "start": {
                        "column": 57,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      90,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 3
                      },
                      "start": {
                        "column": 51,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    90,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
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
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                },
                "range": [
                  44,
                  74
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
                          60,
                          73
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                67,
                                72
                              ],
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    68,
                                    71
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 3
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 3
                                },
                                "start": {
                                  "column": 28,
                                  "line": 3
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "range": [
                                61,
                                67
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 3
                                },
                                "start": {
                                  "column": 22,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              61,
                              72
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 3
                              },
                              "start": {
                                "column": 22,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 3
                          },
                          "start": {
                            "column": 21,
                            "line": 3
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          55,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        55,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "range": [
                        45,
                        46
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 3
                        },
                        "start": {
                          "column": 6,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      45,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                40,
                127
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 3
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "range": [
                  130,
                  134
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "range": [
                      168,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 39,
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
                        "column": 48,
                        "line": 5
                      },
                      "start": {
                        "column": 45,
                        "line": 5
                      }
                    },
                    "range": [
                      174,
                      177
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "range": [
                          176,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 5
                          },
                          "start": {
                            "column": 47,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        176,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 5
                        },
                        "start": {
                          "column": 47,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    165,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
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
                    "column": 87,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                },
                "range": [
                  178,
                  216
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      186,
                      216
                    ],
                    "params": [
                      {
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
                                188,
                                189
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 5
                                },
                                "start": {
                                  "column": 59,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              188,
                              189
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 5
                              },
                              "start": {
                                "column": 59,
                                "line": 5
                              }
                            }
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  211,
                                  214
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "range": [
                                        212,
                                        213
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 84,
                                          "line": 5
                                        },
                                        "start": {
                                          "column": 83,
                                          "line": 5
                                        }
                                      }
                                    },
                                    "range": [
                                      212,
                                      213
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 84,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 5
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 5
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray2",
                                "optional": false,
                                "range": [
                                  194,
                                  211
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                194,
                                214
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 5
                                },
                                "start": {
                                  "column": 65,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              191,
                              214
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 5
                              },
                              "start": {
                                "column": 62,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          187,
                          215
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 5
                          },
                          "start": {
                            "column": 58,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 5
                      },
                      "start": {
                        "column": 57,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      180,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 5
                      },
                      "start": {
                        "column": 51,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    180,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 5
                    },
                    "start": {
                      "column": 51,
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
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                },
                "range": [
                  134,
                  164
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
                          150,
                          163
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                157,
                                162
                              ],
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    158,
                                    161
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 5
                                },
                                "start": {
                                  "column": 28,
                                  "line": 5
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "range": [
                                151,
                                157
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 22,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              151,
                              162
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 5
                              },
                              "start": {
                                "column": 22,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "range": [
                          145,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        145,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
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
                      "name": "O",
                      "optional": false,
                      "range": [
                        135,
                        136
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
                      135,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                130,
                217
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 5
                },
                "start": {
                  "column": 1,
                  "line": 5
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "range": [
                  220,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "others",
                    "optional": false,
                    "range": [
                      258,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 7
                      },
                      "start": {
                        "column": 39,
                        "line": 7
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 7
                      },
                      "start": {
                        "column": 45,
                        "line": 7
                      }
                    },
                    "range": [
                      264,
                      267
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "range": [
                          266,
                          267
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 7
                          },
                          "start": {
                            "column": 47,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        266,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 7
                        },
                        "start": {
                          "column": 47,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    255,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 7
                    },
                    "start": {
                      "column": 36,
                      "line": 7
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 7
                  },
                  "start": {
                    "column": 49,
                    "line": 7
                  }
                },
                "range": [
                  268,
                  306
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      276,
                      306
                    ],
                    "params": [
                      {
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
                                278,
                                279
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 7
                                },
                                "start": {
                                  "column": 59,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              278,
                              279
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 7
                              },
                              "start": {
                                "column": 59,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  301,
                                  304
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "O",
                                      "optional": false,
                                      "range": [
                                        302,
                                        303
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
                                      302,
                                      303
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
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 7
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UnzipOptionArray3",
                                "optional": false,
                                "range": [
                                  284,
                                  301
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                284,
                                304
                              ],
                              "loc": {
                                "end": {
                                  "column": 85,
                                  "line": 7
                                },
                                "start": {
                                  "column": 65,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              281,
                              304
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 7
                              },
                              "start": {
                                "column": 62,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          277,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 7
                          },
                          "start": {
                            "column": 58,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 7
                      },
                      "start": {
                        "column": 57,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Option",
                    "optional": false,
                    "range": [
                      270,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 7
                      },
                      "start": {
                        "column": 51,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    270,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 7
                    },
                    "start": {
                      "column": 51,
                      "line": 7
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
                  }
                },
                "range": [
                  224,
                  254
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
                          240,
                          253
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                247,
                                252
                              ],
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    248,
                                    251
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 7
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 7
                                },
                                "start": {
                                  "column": 28,
                                  "line": 7
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Option",
                              "optional": false,
                              "range": [
                                241,
                                247
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              241,
                              252
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
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
                          235,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        235,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "range": [
                        225,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 7
                        },
                        "start": {
                          "column": 6,
                          "line": 7
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      225,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 7
                      },
                      "start": {
                        "column": 6,
                        "line": 7
                      }
                    }
                  }
                ]
              },
              "range": [
                220,
                307
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 7
                },
                "start": {
                  "column": 1,
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
              "column": 27,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Option",
          "optional": false,
          "range": [
            27,
            33
          ],
          "loc": {
            "end": {
              "column": 23,
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
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          },
          "range": [
            33,
            36
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
                  34,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          17,
          309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOption",
        "optional": false,
        "range": [
          316,
          327
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
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
              333,
              334
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            }
          },
          "range": [
            333,
            334
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 10
            },
            "start": {
              "column": 22,
              "line": 10
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              349,
              358
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
                    "name": "V",
                    "optional": false,
                    "range": [
                      356,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 10
                      },
                      "start": {
                        "column": 45,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    356,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 10
                    },
                    "start": {
                      "column": 45,
                      "line": 10
                    }
                  }
                },
                "range": [
                  350,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 10
                  },
                  "start": {
                    "column": 39,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 38,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Option",
            "optional": false,
            "range": [
              343,
              349
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 32,
                "line": 10
              }
            }
          },
          "range": [
            343,
            358
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 10
            },
            "start": {
              "column": 32,
              "line": 10
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            365,
            370
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 10
            },
            "start": {
              "column": 54,
              "line": 10
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "range": [
              361,
              362
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
          "range": [
            361,
            362
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
        "range": [
          333,
          370
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 10
          },
          "start": {
            "column": 22,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        },
        "range": [
          327,
          330
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
                328,
                329
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              328,
              329
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 17,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        311,
        371
      ],
      "loc": {
        "end": {
          "column": 60,
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
        "name": "UnzipOptionArray1",
        "optional": false,
        "range": [
          400,
          417
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 13
          },
          "start": {
            "column": 5,
            "line": 13
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
                437,
                438
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 13
                },
                "start": {
                  "column": 42,
                  "line": 13
                }
              }
            },
            "range": [
              437,
              438
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 13
              },
              "start": {
                "column": 42,
                "line": 13
              }
            }
          },
          "range": [
            431,
            438
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 13
            },
            "start": {
              "column": 36,
              "line": 13
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            426,
            427
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 13
            },
            "start": {
              "column": 31,
              "line": 13
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  443,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 13
                  },
                  "start": {
                    "column": 48,
                    "line": 13
                  }
                }
              },
              "range": [
                443,
                444
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 13
                },
                "start": {
                  "column": 48,
                  "line": 13
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
                  441,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 13
                  },
                  "start": {
                    "column": 46,
                    "line": 13
                  }
                }
              },
              "range": [
                441,
                442
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 13
                },
                "start": {
                  "column": 46,
                  "line": 13
                }
              }
            },
            "range": [
              441,
              445
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 13
              },
              "start": {
                "column": 46,
                "line": 13
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                460,
                465
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    461,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 13
                    },
                    "start": {
                      "column": 66,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 13
                },
                "start": {
                  "column": 65,
                  "line": 13
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Option",
              "optional": false,
              "range": [
                454,
                460
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 13
                },
                "start": {
                  "column": 59,
                  "line": 13
                }
              }
            },
            "range": [
              454,
              465
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 13
              },
              "start": {
                "column": 59,
                "line": 13
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              488,
              493
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 13
              },
              "start": {
                "column": 93,
                "line": 13
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                479,
                485
              ],
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "range": [
                        482,
                        483
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 13
                        },
                        "start": {
                          "column": 87,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      482,
                      483
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 13
                      },
                      "start": {
                        "column": 87,
                        "line": 13
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
                        480,
                        481
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 13
                        },
                        "start": {
                          "column": 85,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      480,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 13
                      },
                      "start": {
                        "column": 85,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    480,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 13
                    },
                    "start": {
                      "column": 85,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 13
                },
                "start": {
                  "column": 84,
                  "line": 13
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnzipOption",
              "optional": false,
              "range": [
                468,
                479
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 13
                },
                "start": {
                  "column": 73,
                  "line": 13
                }
              }
            },
            "range": [
              468,
              485
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 13
              },
              "start": {
                "column": 73,
                "line": 13
              }
            }
          },
          "range": [
            441,
            493
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 13
            },
            "start": {
              "column": 46,
              "line": 13
            }
          }
        },
        "range": [
          423,
          495
        ],
        "loc": {
          "end": {
            "column": 100,
            "line": 13
          },
          "start": {
            "column": 28,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 13
          },
          "start": {
            "column": 22,
            "line": 13
          }
        },
        "range": [
          417,
          420
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
                418,
                419
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              418,
              419
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        395,
        496
      ],
      "loc": {
        "end": {
          "column": 101,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray2",
        "optional": false,
        "range": [
          522,
          539
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
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
                559,
                560
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 16
                },
                "start": {
                  "column": 42,
                  "line": 16
                }
              }
            },
            "range": [
              559,
              560
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 16
              },
              "start": {
                "column": 42,
                "line": 16
              }
            }
          },
          "range": [
            553,
            560
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 16
            },
            "start": {
              "column": 36,
              "line": 16
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            548,
            549
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 16
            },
            "start": {
              "column": 31,
              "line": 16
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              574,
              580
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "range": [
                      577,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 16
                      },
                      "start": {
                        "column": 60,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    577,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 16
                    },
                    "start": {
                      "column": 60,
                      "line": 16
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
                      575,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 16
                      },
                      "start": {
                        "column": 58,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    575,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 16
                    },
                    "start": {
                      "column": 58,
                      "line": 16
                    }
                  }
                },
                "range": [
                  575,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 16
                  },
                  "start": {
                    "column": 58,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 16
              },
              "start": {
                "column": 57,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnzipOption",
            "optional": false,
            "range": [
              563,
              574
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 16
              },
              "start": {
                "column": 46,
                "line": 16
              }
            }
          },
          "range": [
            563,
            580
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 16
            },
            "start": {
              "column": 46,
              "line": 16
            }
          }
        },
        "range": [
          545,
          582
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 16
          },
          "start": {
            "column": 28,
            "line": 16
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 16
          },
          "start": {
            "column": 22,
            "line": 16
          }
        },
        "range": [
          539,
          542
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
                540,
                541
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 23,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              540,
              541
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        517,
        583
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnzipOptionArray3",
        "optional": false,
        "range": [
          589,
          606
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
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
                626,
                627
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 17
                },
                "start": {
                  "column": 42,
                  "line": 17
                }
              }
            },
            "range": [
              626,
              627
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 17
              },
              "start": {
                "column": 42,
                "line": 17
              }
            }
          },
          "range": [
            620,
            627
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 17
            },
            "start": {
              "column": 36,
              "line": 17
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            615,
            616
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 17
            },
            "start": {
              "column": 31,
              "line": 17
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  632,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 17
                  },
                  "start": {
                    "column": 48,
                    "line": 17
                  }
                }
              },
              "range": [
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 17
                },
                "start": {
                  "column": 48,
                  "line": 17
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
                  630,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 17
                  },
                  "start": {
                    "column": 46,
                    "line": 17
                  }
                }
              },
              "range": [
                630,
                631
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 17
                },
                "start": {
                  "column": 46,
                  "line": 17
                }
              }
            },
            "range": [
              630,
              634
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 17
              },
              "start": {
                "column": 46,
                "line": 17
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                649,
                658
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
                      "name": "V",
                      "optional": false,
                      "range": [
                        656,
                        657
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 17
                        },
                        "start": {
                          "column": 72,
                          "line": 17
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      656,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 17
                      },
                      "start": {
                        "column": 72,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    650,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 17
                    },
                    "start": {
                      "column": 66,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 17
                },
                "start": {
                  "column": 65,
                  "line": 17
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Option",
              "optional": false,
              "range": [
                643,
                649
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 17
                },
                "start": {
                  "column": 59,
                  "line": 17
                }
              }
            },
            "range": [
              643,
              658
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 17
              },
              "start": {
                "column": 59,
                "line": 17
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              665,
              670
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 17
              },
              "start": {
                "column": 81,
                "line": 17
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                661,
                662
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 17
                },
                "start": {
                  "column": 77,
                  "line": 17
                }
              }
            },
            "range": [
              661,
              662
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 17
              },
              "start": {
                "column": 77,
                "line": 17
              }
            }
          },
          "range": [
            630,
            670
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 17
            },
            "start": {
              "column": 46,
              "line": 17
            }
          }
        },
        "range": [
          612,
          672
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 17
          },
          "start": {
            "column": 28,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 17
          },
          "start": {
            "column": 22,
            "line": 17
          }
        },
        "range": [
          606,
          609
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
                607,
                608
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              607,
              608
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 17
              },
              "start": {
                "column": 23,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        584,
        673
      ],
      "loc": {
        "end": {
          "column": 89,
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
            "name": "opt1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              },
              "range": [
                693,
                709
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    701,
                    709
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        702,
                        708
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 26,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "range": [
                    695,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 20,
                      "line": 19
                    }
                  }
                },
                "range": [
                  695,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              689,
              709
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            689,
            709
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        675,
        710
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "opt2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 20
                },
                "start": {
                  "column": 18,
                  "line": 20
                }
              },
              "range": [
                729,
                745
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    737,
                    745
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        738,
                        744
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 20
                        },
                        "start": {
                          "column": 27,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "range": [
                    731,
                    737
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "range": [
                  731,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              725,
              745
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 20
              },
              "start": {
                "column": 14,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            725,
            745
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 20
            },
            "start": {
              "column": 14,
              "line": 20
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        711,
        746
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "opt3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              },
              "range": [
                765,
                782
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    773,
                    782
                  ],
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        774,
                        781
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 21
                        },
                        "start": {
                          "column": 27,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 21
                    },
                    "start": {
                      "column": 26,
                      "line": 21
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Option",
                  "optional": false,
                  "range": [
                    767,
                    773
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  }
                },
                "range": [
                  767,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 21
                  },
                  "start": {
                    "column": 20,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              761,
              782
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 21
              },
              "start": {
                "column": 14,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            761,
            782
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 21
            },
            "start": {
              "column": 14,
              "line": 21
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        747,
        783
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "zipped1",
            "optional": false,
            "range": [
              791,
              798
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "range": [
                  811,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 23
                  },
                  "start": {
                    "column": 26,
                    "line": 23
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "range": [
                  817,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 32,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "range": [
                  801,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 16,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip1",
                "optional": false,
                "range": [
                  806,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 23
                  },
                  "start": {
                    "column": 21,
                    "line": 23
                  }
                }
              },
              "range": [
                801,
                810
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 23
                },
                "start": {
                  "column": 16,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              801,
              822
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 23
              },
              "start": {
                "column": 16,
                "line": 23
              }
            }
          },
          "range": [
            791,
            822
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        785,
        823
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "zipped2",
            "optional": false,
            "range": [
              830,
              837
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "range": [
                  850,
                  854
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 26,
                    "line": 24
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "range": [
                  856,
                  860
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 24
                  },
                  "start": {
                    "column": 32,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "range": [
                  840,
                  844
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 24
                  },
                  "start": {
                    "column": 16,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip2",
                "optional": false,
                "range": [
                  845,
                  849
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 24
                  },
                  "start": {
                    "column": 21,
                    "line": 24
                  }
                }
              },
              "range": [
                840,
                849
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 16,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              840,
              861
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 24
              },
              "start": {
                "column": 16,
                "line": 24
              }
            }
          },
          "range": [
            830,
            861
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        824,
        862
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "zipped3",
            "optional": false,
            "range": [
              869,
              876
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt2",
                "optional": false,
                "range": [
                  889,
                  893
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 26,
                    "line": 25
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opt3",
                "optional": false,
                "range": [
                  895,
                  899
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 25
                  },
                  "start": {
                    "column": 32,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "opt1",
                "optional": false,
                "range": [
                  879,
                  883
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 25
                  },
                  "start": {
                    "column": 16,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "zip3",
                "optional": false,
                "range": [
                  884,
                  888
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 25
                  },
                  "start": {
                    "column": 21,
                    "line": 25
                  }
                }
              },
              "range": [
                879,
                888
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              879,
              900
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          },
          "range": [
            869,
            900
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        863,
        901
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 38,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
