__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    966
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          61,
          63
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 63,
            "line": 1
          },
          "start": {
            "column": 61,
            "line": 1
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
            "name": "ReadonlyArray",
            "optional": false,
            "range": [
              44,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 44,
                "line": 1
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              57,
              60
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
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 1
                    },
                    "start": {
                      "column": 58,
                      "line": 1
                    }
                  }
                },
                "range": [
                  58,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 1
                  },
                  "start": {
                    "column": 58,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 1
              },
              "start": {
                "column": 57,
                "line": 1
              }
            }
          },
          "range": [
            44,
            60
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 1
            },
            "start": {
              "column": 44,
              "line": 1
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeArray",
        "optional": false,
        "range": [
          10,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
            "column": 35,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          35
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
                "name": "Node",
                "optional": false,
                "range": [
                  30,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                }
              },
              "range": [
                30,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
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
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "out": false,
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
        ]
      },
      "range": [
        0,
        63
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 1
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
          80,
          215
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEachChild",
              "optional": false,
              "range": [
                86,
                98
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cbNode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  },
                  "range": [
                    108,
                    139
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 4
                            },
                            "start": {
                              "column": 33,
                              "line": 4
                            }
                          },
                          "range": [
                            115,
                            121
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Node",
                              "optional": false,
                              "range": [
                                117,
                                121
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 4
                                },
                                "start": {
                                  "column": 35,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              117,
                              121
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 4
                              },
                              "start": {
                                "column": 35,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          111,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 4
                          },
                          "start": {
                            "column": 29,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 4
                        },
                        "start": {
                          "column": 41,
                          "line": 4
                        }
                      },
                      "range": [
                        123,
                        139
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
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
                                  "column": 45,
                                  "line": 4
                                },
                                "start": {
                                  "column": 44,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              126,
                              127
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 4
                              },
                              "start": {
                                "column": 44,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              130,
                              139
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 4
                              },
                              "start": {
                                "column": 48,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          126,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      110,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  102,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cbNodeArray",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 4
                    },
                    "start": {
                      "column": 71,
                      "line": 4
                    }
                  },
                  "range": [
                    153,
                    196
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 4
                            },
                            "start": {
                              "column": 79,
                              "line": 4
                            }
                          },
                          "range": [
                            161,
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Node",
                                    "optional": false,
                                    "range": [
                                      173,
                                      177
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 95,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 91,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    173,
                                    177
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 95,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 91,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 96,
                                  "line": 4
                                },
                                "start": {
                                  "column": 90,
                                  "line": 4
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NodeArray",
                              "optional": false,
                              "range": [
                                163,
                                172
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 4
                                },
                                "start": {
                                  "column": 81,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              163,
                              178
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 4
                              },
                              "start": {
                                "column": 81,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          156,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 4
                          },
                          "start": {
                            "column": 74,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 4
                        },
                        "start": {
                          "column": 98,
                          "line": 4
                        }
                      },
                      "range": [
                        180,
                        196
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                183,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 102,
                                  "line": 4
                                },
                                "start": {
                                  "column": 101,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              183,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 102,
                                "line": 4
                              },
                              "start": {
                                "column": 101,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              187,
                              196
                            ],
                            "loc": {
                              "end": {
                                "column": 114,
                                "line": 4
                              },
                              "start": {
                                "column": 105,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          183,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 114,
                            "line": 4
                          },
                          "start": {
                            "column": 101,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      155,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 4
                      },
                      "start": {
                        "column": 73,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  141,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 4
                  },
                  "start": {
                    "column": 59,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 130,
                  "line": 4
                },
                "start": {
                  "column": 115,
                  "line": 4
                }
              },
              "range": [
                197,
                212
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        199,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 118,
                          "line": 4
                        },
                        "start": {
                          "column": 117,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      199,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 118,
                        "line": 4
                      },
                      "start": {
                        "column": 117,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      203,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 130,
                        "line": 4
                      },
                      "start": {
                        "column": 121,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  199,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 130,
                    "line": 4
                  },
                  "start": {
                    "column": 117,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              },
              "range": [
                98,
                101
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
                      99,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    99,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              86,
              213
            ],
            "loc": {
              "end": {
                "column": 131,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "range": [
          75,
          79
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        65,
        215
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "toArray",
        "optional": false,
        "range": [
          234,
          241
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            },
            "range": [
              250,
              259
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      252,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 35,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    252,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        256,
                        257
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
                    "range": [
                      256,
                      257
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
                  "range": [
                    256,
                    259
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                252,
                259
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 35,
                  "line": 7
                }
              }
            }
          },
          "range": [
            245,
            259
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 28,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 7
          },
          "start": {
            "column": 43,
            "line": 7
          }
        },
        "range": [
          260,
          265
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
                262,
                263
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 45,
                  "line": 7
                }
              }
            },
            "range": [
              262,
              263
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 7
              },
              "start": {
                "column": 45,
                "line": 7
              }
            }
          },
          "range": [
            262,
            265
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 7
            },
            "start": {
              "column": 45,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 7
          }
        },
        "range": [
          241,
          244
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
                242,
                243
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
              242,
              243
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
          }
        ]
      },
      "range": [
        217,
        266
      ],
      "loc": {
        "end": {
          "column": 49,
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
        "name": "toArray",
        "optional": false,
        "range": [
          284,
          291
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
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 33,
                "line": 8
              }
            },
            "range": [
              300,
              318
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      302,
                      303
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 35,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    302,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 35,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
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
                          315,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 8
                          },
                          "start": {
                            "column": 48,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        315,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 8
                        },
                        "start": {
                          "column": 48,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      315,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 8
                      },
                      "start": {
                        "column": 48,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    306,
                    318
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                302,
                318
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 35,
                  "line": 8
                }
              }
            }
          },
          "range": [
            295,
            318
          ],
          "loc": {
            "end": {
              "column": 51,
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
            "column": 66,
            "line": 8
          },
          "start": {
            "column": 52,
            "line": 8
          }
        },
        "range": [
          319,
          333
        ],
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
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
                  330,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 8
                  },
                  "start": {
                    "column": 63,
                    "line": 8
                  }
                }
              },
              "range": [
                330,
                331
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 8
                },
                "start": {
                  "column": 63,
                  "line": 8
                }
              }
            },
            "range": [
              330,
              333
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 8
              },
              "start": {
                "column": 63,
                "line": 8
              }
            }
          },
          "range": [
            321,
            333
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 8
            },
            "start": {
              "column": 54,
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
          291,
          294
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
                292,
                293
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
              292,
              293
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
        267,
        334
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 8
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    },
                    "range": [
                      459,
                      464
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
                            461,
                            462
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          461,
                          462
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        461,
                        464
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 18,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    453,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    467,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                },
                "range": [
                  453,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              447,
              470
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                518,
                                523
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 13
                                },
                                "start": {
                                  "column": 14,
                                  "line": 13
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "child",
                                  "optional": false,
                                  "range": [
                                    529,
                                    534
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cb",
                                "optional": false,
                                "range": [
                                  526,
                                  528
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 13
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                526,
                                535
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 13
                                },
                                "start": {
                                  "column": 22,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              518,
                              535
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 13
                              },
                              "start": {
                                "column": 14,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          512,
                          536
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "range": [
                                            607,
                                            612
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 40,
                                              "line": 15
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 15
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toArray",
                                        "optional": false,
                                        "range": [
                                          599,
                                          606
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        599,
                                        613
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      596,
                                      613
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 15
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
                                    "name": "result",
                                    "optional": false,
                                    "range": [
                                      584,
                                      590
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "range": [
                                      591,
                                      595
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "range": [
                                    584,
                                    595
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  584,
                                  614
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                584,
                                615
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
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
                            570,
                            625
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 16
                            },
                            "start": {
                              "column": 33,
                              "line": 14
                            }
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!==",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              549,
                              554
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              559,
                              568
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 14
                              },
                              "start": {
                                "column": 22,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            549,
                            568
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          545,
                          625
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      502,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 31,
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
                      "name": "child",
                      "optional": false,
                      "range": [
                        493,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 22,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    493,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 12
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
                  "name": "node",
                  "optional": false,
                  "range": [
                    475,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEachChild",
                  "optional": false,
                  "range": [
                    480,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  475,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                475,
                632
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              475,
              633
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                645,
                651
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              638,
              652
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          441,
          654
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 105,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMapChildren",
        "optional": false,
        "range": [
          345,
          360
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 32,
                "line": 10
              }
            },
            "range": [
              368,
              374
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  370,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
                  }
                }
              },
              "range": [
                370,
                374
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
                }
              }
            }
          },
          "range": [
            364,
            374
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 10
            },
            "start": {
              "column": 28,
              "line": 10
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 89,
                "line": 10
              },
              "start": {
                "column": 42,
                "line": 10
              }
            },
            "range": [
              378,
              425
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "child",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 10
                      },
                      "start": {
                        "column": 50,
                        "line": 10
                      }
                    },
                    "range": [
                      386,
                      392
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "range": [
                          388,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 10
                          },
                          "start": {
                            "column": 52,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        388,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 10
                        },
                        "start": {
                          "column": 52,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    381,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 10
                    },
                    "start": {
                      "column": 45,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 10
                  },
                  "start": {
                    "column": 58,
                    "line": 10
                  }
                },
                "range": [
                  394,
                  425
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
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
                              406,
                              407
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 10
                              },
                              "start": {
                                "column": 70,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            406,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 10
                            },
                            "start": {
                              "column": 70,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          406,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 10
                          },
                          "start": {
                            "column": 70,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        397,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 10
                        },
                        "start": {
                          "column": 61,
                          "line": 10
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
                          412,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 10
                          },
                          "start": {
                            "column": 76,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        412,
                        413
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 10
                        },
                        "start": {
                          "column": 76,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        416,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 10
                        },
                        "start": {
                          "column": 80,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    397,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 10
                    },
                    "start": {
                      "column": 61,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                380,
                425
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 10
                },
                "start": {
                  "column": 44,
                  "line": 10
                }
              }
            }
          },
          "range": [
            376,
            425
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 10
            },
            "start": {
              "column": 40,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 104,
            "line": 10
          },
          "start": {
            "column": 90,
            "line": 10
          }
        },
        "range": [
          426,
          440
        ],
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
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
                  437,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 10
                  },
                  "start": {
                    "column": 101,
                    "line": 10
                  }
                }
              },
              "range": [
                437,
                438
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 10
                },
                "start": {
                  "column": 101,
                  "line": 10
                }
              }
            },
            "range": [
              437,
              440
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 10
              },
              "start": {
                "column": 101,
                "line": 10
              }
            }
          },
          "range": [
            428,
            440
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 10
            },
            "start": {
              "column": 92,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 10
          }
        },
        "range": [
          360,
          363
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
                361,
                362
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
              361,
              362
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
          }
        ]
      },
      "range": [
        336,
        654
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 10
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 16,
                        "line": 22
                      }
                    },
                    "range": [
                      775,
                      780
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
                            777,
                            778
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 22
                            },
                            "start": {
                              "column": 18,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          777,
                          778
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 22
                          },
                          "start": {
                            "column": 18,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        777,
                        780
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 22
                        },
                        "start": {
                          "column": 18,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    769,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    783,
                    785
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
                    }
                  }
                },
                "range": [
                  769,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              763,
              786
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 22
              },
              "start": {
                "column": 4,
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
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                834,
                                839
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 24
                                },
                                "start": {
                                  "column": 14,
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
                                  "name": "child",
                                  "optional": false,
                                  "range": [
                                    845,
                                    850
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 24
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cb",
                                "optional": false,
                                "range": [
                                  842,
                                  844
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 24
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                842,
                                851
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 24
                                },
                                "start": {
                                  "column": 22,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              834,
                              851
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 24
                              },
                              "start": {
                                "column": 14,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          828,
                          852
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "range": [
                                            918,
                                            923
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 40,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 26
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toArray",
                                        "optional": false,
                                        "range": [
                                          910,
                                          917
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        910,
                                        924
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "range": [
                                      907,
                                      924
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 26
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
                                    "name": "result",
                                    "optional": false,
                                    "range": [
                                      895,
                                      901
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "range": [
                                      902,
                                      906
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    895,
                                    906
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  895,
                                  925
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                895,
                                926
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 26
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            881,
                            936
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 27
                            },
                            "start": {
                              "column": 28,
                              "line": 25
                            }
                          }
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "!==",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              865,
                              870
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 25
                              },
                              "start": {
                                "column": 12,
                                "line": 25
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              875,
                              879
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 25
                              },
                              "start": {
                                "column": 22,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            865,
                            879
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          861,
                          936
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      818,
                      942
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 28
                      },
                      "start": {
                        "column": 31,
                        "line": 23
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
                      "name": "child",
                      "optional": false,
                      "range": [
                        809,
                        814
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 23
                        },
                        "start": {
                          "column": 22,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "range": [
                    809,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 22,
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
                  "name": "node",
                  "optional": false,
                  "range": [
                    791,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEachChild",
                  "optional": false,
                  "range": [
                    796,
                    808
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
                },
                "range": [
                  791,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "range": [
                791,
                943
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              791,
              944
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                956,
                962
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "range": [
              949,
              963
            ],
            "loc": {
              "end": {
                "column": 18,
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
          757,
          965
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 101,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMapChildren2",
        "optional": false,
        "range": [
          665,
          681
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 21
              },
              "start": {
                "column": 33,
                "line": 21
              }
            },
            "range": [
              689,
              695
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  691,
                  695
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 21
                  },
                  "start": {
                    "column": 35,
                    "line": 21
                  }
                }
              },
              "range": [
                691,
                695
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 21
                },
                "start": {
                  "column": 35,
                  "line": 21
                }
              }
            }
          },
          "range": [
            685,
            695
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 21
            },
            "start": {
              "column": 29,
              "line": 21
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 85,
                "line": 21
              },
              "start": {
                "column": 43,
                "line": 21
              }
            },
            "range": [
              699,
              741
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "child",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 21
                      },
                      "start": {
                        "column": 51,
                        "line": 21
                      }
                    },
                    "range": [
                      707,
                      713
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "range": [
                          709,
                          713
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 21
                          },
                          "start": {
                            "column": 53,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        709,
                        713
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 21
                        },
                        "start": {
                          "column": 53,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    702,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 21
                    },
                    "start": {
                      "column": 46,
                      "line": 21
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 21
                  },
                  "start": {
                    "column": 59,
                    "line": 21
                  }
                },
                "range": [
                  715,
                  741
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
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
                              727,
                              728
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 21
                              },
                              "start": {
                                "column": 71,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            727,
                            728
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 21
                            },
                            "start": {
                              "column": 71,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          727,
                          730
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 21
                          },
                          "start": {
                            "column": 71,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        718,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 21
                        },
                        "start": {
                          "column": 62,
                          "line": 21
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
                          733,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 21
                          },
                          "start": {
                            "column": 77,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        733,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 21
                        },
                        "start": {
                          "column": 77,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        737,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 21
                        },
                        "start": {
                          "column": 81,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    718,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 21
                    },
                    "start": {
                      "column": 62,
                      "line": 21
                    }
                  }
                }
              },
              "range": [
                701,
                741
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 21
                },
                "start": {
                  "column": 45,
                  "line": 21
                }
              }
            }
          },
          "range": [
            697,
            741
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 21
            },
            "start": {
              "column": 41,
              "line": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 21
          },
          "start": {
            "column": 86,
            "line": 21
          }
        },
        "range": [
          742,
          756
        ],
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
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
                  753,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 21
                  },
                  "start": {
                    "column": 97,
                    "line": 21
                  }
                }
              },
              "range": [
                753,
                754
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 21
                },
                "start": {
                  "column": 97,
                  "line": 21
                }
              }
            },
            "range": [
              753,
              756
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 21
              },
              "start": {
                "column": 97,
                "line": 21
              }
            }
          },
          "range": [
            744,
            756
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 21
            },
            "start": {
              "column": 88,
              "line": 21
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 25,
            "line": 21
          }
        },
        "range": [
          681,
          684
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
                682,
                683
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 21
                },
                "start": {
                  "column": 26,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              682,
              683
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        656,
        965
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
