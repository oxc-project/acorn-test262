__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    595
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          20,
          48
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "range": [
                33,
                36
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                36,
                46
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  43,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    },
                    "range": [
                      38,
                      41
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          40,
                          41
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 18,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        40,
                        41
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    37,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              26,
              46
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "range": [
          6,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        48
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
          65,
          244
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fold",
              "optional": false,
              "range": [
                71,
                75
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 4,
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
                "name": "c",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  },
                  "range": [
                    84,
                    99
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        96,
                        99
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
                              97,
                              98
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 5
                              },
                              "start": {
                                "column": 30,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            97,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 5
                            },
                            "start": {
                              "column": 30,
                              "line": 5
                            }
                          }
                        }
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "range": [
                        86,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 5
                        },
                        "start": {
                          "column": 19,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      86,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  82,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "folder",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 5
                    },
                    "start": {
                      "column": 41,
                      "line": 5
                    }
                  },
                  "range": [
                    108,
                    127
                  ],
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
                              "column": 48,
                              "line": 5
                            },
                            "start": {
                              "column": 45,
                              "line": 5
                            }
                          },
                          "range": [
                            112,
                            115
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                114,
                                115
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
                              114,
                              115
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
                          111,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 5
                          },
                          "start": {
                            "column": 44,
                            "line": 5
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 5
                            },
                            "start": {
                              "column": 51,
                              "line": 5
                            }
                          },
                          "range": [
                            118,
                            121
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                120,
                                121
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
                              120,
                              121
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
                          }
                        },
                        "range": [
                          117,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 5
                          },
                          "start": {
                            "column": 50,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 5
                        },
                        "start": {
                          "column": 56,
                          "line": 5
                        }
                      },
                      "range": [
                        123,
                        127
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            126,
                            127
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
                          126,
                          127
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
                      }
                    },
                    "range": [
                      110,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 5
                      },
                      "start": {
                        "column": 43,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  101,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": true,
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
                    134,
                    137
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        136,
                        137
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
                      136,
                      137
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
                  129,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 5
                  },
                  "start": {
                    "column": 62,
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
                  "column": 74,
                  "line": 5
                },
                "start": {
                  "column": 71,
                  "line": 5
                }
              },
              "range": [
                138,
                141
              ],
              "typeAnnotation": {
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
                      "column": 74,
                      "line": 5
                    },
                    "start": {
                      "column": 73,
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
                    "column": 74,
                    "line": 5
                  },
                  "start": {
                    "column": 73,
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
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              },
              "range": [
                75,
                81
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
                      76,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    76,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
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
                    "name": "S",
                    "optional": false,
                    "range": [
                      79,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    79,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              71,
              142
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 5
              },
              "start": {
                "column": 4,
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
              "name": "mapReduce",
              "optional": false,
              "range": [
                147,
                156
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 24,
                      "line": 6
                    }
                  },
                  "range": [
                    167,
                    182
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        179,
                        182
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
                              180,
                              181
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
                          "range": [
                            180,
                            181
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
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 6
                        },
                        "start": {
                          "column": 36,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "range": [
                        169,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 6
                        },
                        "start": {
                          "column": 26,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      169,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  166,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mapper",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 6
                    },
                    "start": {
                      "column": 47,
                      "line": 6
                    }
                  },
                  "range": [
                    190,
                    203
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
                              "column": 54,
                              "line": 6
                            },
                            "start": {
                              "column": 51,
                              "line": 6
                            }
                          },
                          "range": [
                            194,
                            197
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                196,
                                197
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 6
                                },
                                "start": {
                                  "column": 53,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              196,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 6
                              },
                              "start": {
                                "column": 53,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          193,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 6
                          },
                          "start": {
                            "column": 50,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 6
                        },
                        "start": {
                          "column": 56,
                          "line": 6
                        }
                      },
                      "range": [
                        199,
                        203
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            202,
                            203
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 6
                            },
                            "start": {
                              "column": 59,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          202,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 6
                          },
                          "start": {
                            "column": 59,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      192,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 6
                      },
                      "start": {
                        "column": 49,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  184,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 6
                  },
                  "start": {
                    "column": 41,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "reducer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 6
                    },
                    "start": {
                      "column": 69,
                      "line": 6
                    }
                  },
                  "range": [
                    212,
                    225
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 6
                            },
                            "start": {
                              "column": 73,
                              "line": 6
                            }
                          },
                          "range": [
                            216,
                            219
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                218,
                                219
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 6
                                },
                                "start": {
                                  "column": 75,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              218,
                              219
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 6
                              },
                              "start": {
                                "column": 75,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          215,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 6
                          },
                          "start": {
                            "column": 72,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 6
                        },
                        "start": {
                          "column": 78,
                          "line": 6
                        }
                      },
                      "range": [
                        221,
                        225
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            224,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 6
                            },
                            "start": {
                              "column": 81,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          224,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 6
                          },
                          "start": {
                            "column": 81,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      214,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 6
                      },
                      "start": {
                        "column": 71,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  205,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 6
                  },
                  "start": {
                    "column": 62,
                    "line": 6
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 98,
                  "line": 6
                },
                "start": {
                  "column": 83,
                  "line": 6
                }
              },
              "range": [
                226,
                241
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    238,
                    241
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          239,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 6
                          },
                          "start": {
                            "column": 96,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        239,
                        240
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 6
                        },
                        "start": {
                          "column": 96,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 6
                    },
                    "start": {
                      "column": 95,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "range": [
                    228,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 6
                    },
                    "start": {
                      "column": 85,
                      "line": 6
                    }
                  }
                },
                "range": [
                  228,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 6
                  },
                  "start": {
                    "column": 85,
                    "line": 6
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              },
              "range": [
                156,
                165
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
                      157,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    157,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
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
                      160,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
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
                    "name": "V",
                    "optional": false,
                    "range": [
                      163,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    163,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              147,
              242
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "range": [
          59,
          64
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        49,
        244
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              },
              "range": [
                254,
                261
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "range": [
                    256,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  256,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              249,
              261
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            249,
            261
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        245,
        262
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "c",
            "optional": false,
            "range": [
              267,
              268
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "range": [
                275,
                285
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                285,
                293
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    286,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 23,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 22,
                  "line": 9
                }
              }
            },
            "range": [
              271,
              295
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            267,
            295
          ],
          "loc": {
            "end": {
              "column": 32,
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
        263,
        296
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "name": "r3",
            "optional": false,
            "range": [
              301,
              303
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  322,
                  323
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
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          341,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 10
                          },
                          "start": {
                            "column": 44,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        334,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 10
                        },
                        "start": {
                          "column": 37,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    332,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      326,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  325,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "range": [
                            366,
                            370
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 10
                            },
                            "start": {
                              "column": 69,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          362,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 10
                          },
                          "start": {
                            "column": 65,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        355,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 10
                        },
                        "start": {
                          "column": 58,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    353,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 10
                    },
                    "start": {
                      "column": 56,
                      "line": 10
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      347,
                      348
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
                  }
                ],
                "range": [
                  346,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 10
                  },
                  "start": {
                    "column": 49,
                    "line": 10
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
                "name": "utils",
                "optional": false,
                "range": [
                  306,
                  311
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mapReduce",
                "optional": false,
                "range": [
                  312,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "range": [
                306,
                321
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              306,
              375
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 10
              },
              "start": {
                "column": 9,
                "line": 10
              }
            }
          },
          "range": [
            301,
            375
          ],
          "loc": {
            "end": {
              "column": 78,
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
        297,
        376
      ],
      "loc": {
        "end": {
          "column": 79,
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
            "name": "r4",
            "optional": false,
            "range": [
              381,
              383
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  402,
                  403
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
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          429,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 11
                          },
                          "start": {
                            "column": 52,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        422,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 11
                        },
                        "start": {
                          "column": 45,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    420,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 11
                    },
                    "start": {
                      "column": 43,
                      "line": 11
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
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
                          "column": 38,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      },
                      "range": [
                        407,
                        415
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          409,
                          415
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 11
                          },
                          "start": {
                            "column": 32,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      406,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 11
                      },
                      "start": {
                        "column": 29,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  405,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "range": [
                            462,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 11
                            },
                            "start": {
                              "column": 85,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          458,
                          468
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 11
                          },
                          "start": {
                            "column": 81,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        451,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 11
                        },
                        "start": {
                          "column": 74,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    449,
                    470
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 11
                    },
                    "start": {
                      "column": 72,
                      "line": 11
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 11
                        },
                        "start": {
                          "column": 59,
                          "line": 11
                        }
                      },
                      "range": [
                        436,
                        444
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          438,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 11
                          },
                          "start": {
                            "column": 61,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      435,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 11
                      },
                      "start": {
                        "column": 58,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  434,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 11
                  },
                  "start": {
                    "column": 57,
                    "line": 11
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
                "name": "utils",
                "optional": false,
                "range": [
                  386,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mapReduce",
                "optional": false,
                "range": [
                  392,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "range": [
                386,
                401
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              386,
              471
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            381,
            471
          ],
          "loc": {
            "end": {
              "column": 94,
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
        377,
        472
      ],
      "loc": {
        "end": {
          "column": 95,
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
            "name": "f1",
            "optional": false,
            "range": [
              477,
              479
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      506,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 33,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    499,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 26,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                497,
                509
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
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
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  },
                  "range": [
                    484,
                    492
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      486,
                      492
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  483,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              482,
              509
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            477,
            509
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        473,
        510
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "f2",
            "optional": false,
            "range": [
              515,
              517
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "range": [
                        548,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 13
                        },
                        "start": {
                          "column": 37,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      544,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    537,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                535,
                556
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  },
                  "range": [
                    522,
                    530
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      524,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  521,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              520,
              556
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            515,
            556
          ],
          "loc": {
            "end": {
              "column": 45,
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
        511,
        557
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "r5",
            "optional": false,
            "range": [
              562,
              564
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  583,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "range": [
                  586,
                  588
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "range": [
                  590,
                  592
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 14
                  },
                  "start": {
                    "column": 32,
                    "line": 14
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
                "name": "utils",
                "optional": false,
                "range": [
                  567,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mapReduce",
                "optional": false,
                "range": [
                  573,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              },
              "range": [
                567,
                582
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              567,
              593
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            562,
            593
          ],
          "loc": {
            "end": {
              "column": 35,
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
        558,
        594
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
