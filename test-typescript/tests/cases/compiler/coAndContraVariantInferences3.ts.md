__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    5824
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          29,
          94
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "range": [
                35,
                42
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              },
              "range": [
                43,
                51
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  45,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              35,
              52
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "range": [
                57,
                62
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              },
              "range": [
                63,
                72
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  65,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              57,
              73
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                78,
                82
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                83,
                91
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  85,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              78,
              92
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "column": 29,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeprecationOptions",
        "optional": false,
        "range": [
          10,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        94
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "range": [
          101,
          120
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
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
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            },
            "range": [
              127,
              128
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 31,
                "line": 7
              }
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "range": [
              137,
              140
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 41,
                "line": 7
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              160,
              165
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 7
              },
              "start": {
                "column": 64,
                "line": 7
              }
            }
          },
          "trueType": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 7
                    },
                    "start": {
                      "column": 49,
                      "line": 7
                    }
                  },
                  "range": [
                    145,
                    148
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        147,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 7
                        },
                        "start": {
                          "column": 51,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      147,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 7
                      },
                      "start": {
                        "column": 51,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  144,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 7
                  },
                  "start": {
                    "column": 48,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 7
                },
                "start": {
                  "column": 54,
                  "line": 7
                }
              },
              "range": [
                150,
                157
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  153,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 7
                  },
                  "start": {
                    "column": 57,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              143,
              157
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 7
              },
              "start": {
                "column": 47,
                "line": 7
              }
            }
          },
          "range": [
            127,
            165
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 7
            },
            "start": {
              "column": 31,
              "line": 7
            }
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 7
                  },
                  "start": {
                    "column": 82,
                    "line": 7
                  }
                },
                "range": [
                  178,
                  187
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
                      "name": "I",
                      "optional": false,
                      "range": [
                        186,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 7
                        },
                        "start": {
                          "column": 90,
                          "line": 7
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      186,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 7
                      },
                      "start": {
                        "column": 90,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    180,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 7
                    },
                    "start": {
                      "column": 84,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                177,
                187
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 7
                },
                "start": {
                  "column": 81,
                  "line": 7
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 100,
                "line": 7
              },
              "start": {
                "column": 93,
                "line": 7
              }
            },
            "range": [
              189,
              196
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                192,
                196
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 7
                },
                "start": {
                  "column": 96,
                  "line": 7
                }
              }
            }
          },
          "range": [
            176,
            196
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 7
            },
            "start": {
              "column": 80,
              "line": 7
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            204,
            209
          ],
          "loc": {
            "end": {
              "column": 113,
              "line": 7
            },
            "start": {
              "column": 108,
              "line": 7
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "range": [
              200,
              201
            ],
            "loc": {
              "end": {
                "column": 105,
                "line": 7
              },
              "start": {
                "column": 104,
                "line": 7
              }
            }
          },
          "range": [
            200,
            201
          ],
          "loc": {
            "end": {
              "column": 105,
              "line": 7
            },
            "start": {
              "column": 104,
              "line": 7
            }
          }
        },
        "range": [
          126,
          209
        ],
        "loc": {
          "end": {
            "column": 113,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 7
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
          120,
          123
        ],
        "params": [
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
                121,
                122
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
              121,
              122
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
        96,
        210
      ],
      "loc": {
        "end": {
          "column": 114,
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
        "name": "OverloadDefinitions",
        "optional": false,
        "range": [
          217,
          236
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSNumberKeyword",
          "range": [
            256,
            262
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 9
            },
            "start": {
              "column": 44,
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
            251,
            252
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 9
            },
            "start": {
              "column": 39,
              "line": 9
            }
          }
        },
        "nameType": null,
        "readonly": true,
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
                  269,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 9
                  },
                  "start": {
                    "column": 57,
                    "line": 9
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 9
                  },
                  "start": {
                    "column": 61,
                    "line": 9
                  }
                },
                "range": [
                  273,
                  280
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      275,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 9
                      },
                      "start": {
                        "column": 63,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    275,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 9
                    },
                    "start": {
                      "column": 63,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                266,
                280
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 9
                },
                "start": {
                  "column": 54,
                  "line": 9
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 9
              },
              "start": {
                "column": 70,
                "line": 9
              }
            },
            "range": [
              282,
              288
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                285,
                288
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 9
                },
                "start": {
                  "column": 73,
                  "line": 9
                }
              }
            }
          },
          "range": [
            265,
            288
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 9
            },
            "start": {
              "column": 53,
              "line": 9
            }
          }
        },
        "range": [
          239,
          291
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 9
          },
          "start": {
            "column": 27,
            "line": 9
          }
        }
      },
      "range": [
        212,
        292
      ],
      "loc": {
        "end": {
          "column": 80,
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
        "name": "OverloadBinder",
        "optional": false,
        "range": [
          299,
          313
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 11
                },
                "start": {
                  "column": 58,
                  "line": 11
                }
              },
              "range": [
                352,
                375
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    372,
                    375
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
                          373,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 11
                          },
                          "start": {
                            "column": 79,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        373,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 11
                        },
                        "start": {
                          "column": 79,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 11
                    },
                    "start": {
                      "column": 78,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadParameters",
                  "optional": false,
                  "range": [
                    354,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 11
                    },
                    "start": {
                      "column": 60,
                      "line": 11
                    }
                  }
                },
                "range": [
                  354,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 11
                  },
                  "start": {
                    "column": 60,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              348,
              375
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 11
              },
              "start": {
                "column": 54,
                "line": 11
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 113,
              "line": 11
            },
            "start": {
              "column": 83,
              "line": 11
            }
          },
          "range": [
            377,
            407
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    392,
                    395
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
                          393,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 11
                          },
                          "start": {
                            "column": 99,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        393,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 11
                        },
                        "start": {
                          "column": 99,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 11
                    },
                    "start": {
                      "column": 98,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "range": [
                    380,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 11
                    },
                    "start": {
                      "column": 86,
                      "line": 11
                    }
                  }
                },
                "range": [
                  380,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 11
                  },
                  "start": {
                    "column": 86,
                    "line": 11
                  }
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  398,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 11
                  },
                  "start": {
                    "column": 104,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              380,
              407
            ],
            "loc": {
              "end": {
                "column": 113,
                "line": 11
              },
              "start": {
                "column": 86,
                "line": 11
              }
            }
          }
        },
        "range": [
          347,
          407
        ],
        "loc": {
          "end": {
            "column": 113,
            "line": 11
          },
          "start": {
            "column": 53,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 11
          }
        },
        "range": [
          313,
          344
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  324,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              },
              "range": [
                324,
                343
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 11
                },
                "start": {
                  "column": 30,
                  "line": 11
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
                314,
                315
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              314,
              343
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 11
              },
              "start": {
                "column": 20,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        294,
        408
      ],
      "loc": {
        "end": {
          "column": 114,
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
        "name": "OverloadKeys",
        "optional": false,
        "range": [
          415,
          427
        ],
        "loc": {
          "end": {
            "column": 17,
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
            468,
            485
          ],
          "params": [
            {
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
                    475,
                    476
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 13
                    },
                    "start": {
                      "column": 65,
                      "line": 13
                    }
                  }
                },
                "range": [
                  475,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 13
                  },
                  "start": {
                    "column": 65,
                    "line": 13
                  }
                }
              },
              "range": [
                469,
                476
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 13
                },
                "start": {
                  "column": 59,
                  "line": 13
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                478,
                484
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 13
                },
                "start": {
                  "column": 68,
                  "line": 13
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 13
            },
            "start": {
              "column": 58,
              "line": 13
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "range": [
            461,
            468
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 13
            },
            "start": {
              "column": 51,
              "line": 13
            }
          }
        },
        "range": [
          461,
          485
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 13
          },
          "start": {
            "column": 51,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
          }
        },
        "range": [
          427,
          458
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  438,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 13
                  },
                  "start": {
                    "column": 28,
                    "line": 13
                  }
                }
              },
              "range": [
                438,
                457
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 13
                },
                "start": {
                  "column": 28,
                  "line": 13
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
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              428,
              457
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 13
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        410,
        486
      ],
      "loc": {
        "end": {
          "column": 76,
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
        "name": "OverloadParameters",
        "optional": false,
        "range": [
          493,
          511
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            555,
            607
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    602,
                    605
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
                          603,
                          604
                        ],
                        "loc": {
                          "end": {
                            "column": 116,
                            "line": 15
                          },
                          "start": {
                            "column": 115,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        603,
                        604
                      ],
                      "loc": {
                        "end": {
                          "column": 116,
                          "line": 15
                        },
                        "start": {
                          "column": 115,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 117,
                      "line": 15
                    },
                    "start": {
                      "column": 114,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "range": [
                    590,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 15
                    },
                    "start": {
                      "column": 102,
                      "line": 15
                    }
                  }
                },
                "range": [
                  590,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 117,
                    "line": 15
                  },
                  "start": {
                    "column": 102,
                    "line": 15
                  }
                }
              },
              "objectType": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      576,
                      579
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
                            577,
                            578
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 15
                            },
                            "start": {
                              "column": 89,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          577,
                          578
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 15
                          },
                          "start": {
                            "column": 89,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 15
                      },
                      "start": {
                        "column": 88,
                        "line": 15
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OverloadKeys",
                    "optional": false,
                    "range": [
                      564,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 15
                      },
                      "start": {
                        "column": 76,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    564,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 15
                    },
                    "start": {
                      "column": 76,
                      "line": 15
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    559,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 15
                    },
                    "start": {
                      "column": 71,
                      "line": 15
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
                      "name": "P",
                      "optional": false,
                      "range": [
                        584,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 15
                        },
                        "start": {
                          "column": 96,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      584,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 15
                      },
                      "start": {
                        "column": 96,
                        "line": 15
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
                        582,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 15
                        },
                        "start": {
                          "column": 94,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      582,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 15
                      },
                      "start": {
                        "column": 94,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    582,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 15
                    },
                    "start": {
                      "column": 94,
                      "line": 15
                    }
                  }
                },
                "range": [
                  556,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 15
                  },
                  "start": {
                    "column": 68,
                    "line": 15
                  }
                }
              },
              "range": [
                556,
                606
              ],
              "loc": {
                "end": {
                  "column": 118,
                  "line": 15
                },
                "start": {
                  "column": 68,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 119,
              "line": 15
            },
            "start": {
              "column": 67,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "range": [
            545,
            555
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 15
            },
            "start": {
              "column": 57,
              "line": 15
            }
          }
        },
        "range": [
          545,
          607
        ],
        "loc": {
          "end": {
            "column": 119,
            "line": 15
          },
          "start": {
            "column": 57,
            "line": 15
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 15
          },
          "start": {
            "column": 23,
            "line": 15
          }
        },
        "range": [
          511,
          542
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  522,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 15
                  },
                  "start": {
                    "column": 34,
                    "line": 15
                  }
                }
              },
              "range": [
                522,
                541
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 15
                },
                "start": {
                  "column": 34,
                  "line": 15
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
                512,
                513
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              512,
              541
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        488,
        608
      ],
      "loc": {
        "end": {
          "column": 120,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadFunction",
        "optional": false,
        "range": [
          615,
          631
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            684,
            696
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
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
                      693,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 17
                      },
                      "start": {
                        "column": 83,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    693,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 17
                    },
                    "start": {
                      "column": 83,
                      "line": 17
                    }
                  }
                },
                "range": [
                  687,
                  694
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 17
                  },
                  "start": {
                    "column": 77,
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
                    685,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 17
                    },
                    "start": {
                      "column": 75,
                      "line": 17
                    }
                  }
                },
                "range": [
                  685,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 17
                  },
                  "start": {
                    "column": 75,
                    "line": 17
                  }
                }
              },
              "range": [
                685,
                695
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 17
                },
                "start": {
                  "column": 75,
                  "line": 17
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 17
            },
            "start": {
              "column": 74,
              "line": 17
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false,
          "range": [
            665,
            684
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 17
            },
            "start": {
              "column": 55,
              "line": 17
            }
          }
        },
        "range": [
          665,
          696
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 17
          },
          "start": {
            "column": 55,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 17
          },
          "start": {
            "column": 21,
            "line": 17
          }
        },
        "range": [
          631,
          662
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  642,
                  661
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 17
                  },
                  "start": {
                    "column": 32,
                    "line": 17
                  }
                }
              },
              "range": [
                642,
                661
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 17
                },
                "start": {
                  "column": 32,
                  "line": 17
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
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              632,
              661
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        610,
        697
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBinders",
        "optional": false,
        "range": [
          704,
          719
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              773,
              776
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
                    774,
                    775
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 19
                    },
                    "start": {
                      "column": 75,
                      "line": 19
                    }
                  }
                },
                "range": [
                  774,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 19
                  },
                  "start": {
                    "column": 75,
                    "line": 19
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 19
              },
              "start": {
                "column": 74,
                "line": 19
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "range": [
              761,
              773
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 19
              },
              "start": {
                "column": 62,
                "line": 19
              }
            }
          },
          "range": [
            761,
            776
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 19
            },
            "start": {
              "column": 62,
              "line": 19
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            756,
            757
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 19
            },
            "start": {
              "column": 57,
              "line": 19
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 108,
                    "line": 19
                  },
                  "start": {
                    "column": 85,
                    "line": 19
                  }
                },
                "range": [
                  784,
                  807
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      804,
                      807
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
                            805,
                            806
                          ],
                          "loc": {
                            "end": {
                              "column": 107,
                              "line": 19
                            },
                            "start": {
                              "column": 106,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          805,
                          806
                        ],
                        "loc": {
                          "end": {
                            "column": 107,
                            "line": 19
                          },
                          "start": {
                            "column": 106,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 19
                      },
                      "start": {
                        "column": 105,
                        "line": 19
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OverloadParameters",
                    "optional": false,
                    "range": [
                      786,
                      804
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 19
                      },
                      "start": {
                        "column": 87,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    786,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 108,
                      "line": 19
                    },
                    "start": {
                      "column": 87,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                780,
                807
              ],
              "loc": {
                "end": {
                  "column": 108,
                  "line": 19
                },
                "start": {
                  "column": 81,
                  "line": 19
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 132,
                "line": 19
              },
              "start": {
                "column": 110,
                "line": 19
              }
            },
            "range": [
              809,
              831
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    812,
                    819
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 19
                    },
                    "start": {
                      "column": 113,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    822,
                    831
                  ],
                  "loc": {
                    "end": {
                      "column": 132,
                      "line": 19
                    },
                    "start": {
                      "column": 123,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                812,
                831
              ],
              "loc": {
                "end": {
                  "column": 132,
                  "line": 19
                },
                "start": {
                  "column": 113,
                  "line": 19
                }
              }
            }
          },
          "range": [
            779,
            831
          ],
          "loc": {
            "end": {
              "column": 132,
              "line": 19
            },
            "start": {
              "column": 80,
              "line": 19
            }
          }
        },
        "range": [
          753,
          834
        ],
        "loc": {
          "end": {
            "column": 135,
            "line": 19
          },
          "start": {
            "column": 54,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        },
        "range": [
          719,
          750
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  730,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 19
                  },
                  "start": {
                    "column": 31,
                    "line": 19
                  }
                }
              },
              "range": [
                730,
                749
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 19
                },
                "start": {
                  "column": 31,
                  "line": 19
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
                720,
                721
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              720,
              749
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        699,
        835
      ],
      "loc": {
        "end": {
          "column": 136,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadDeprecations",
        "optional": false,
        "range": [
          842,
          862
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              916,
              919
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
                    917,
                    918
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 21
                    },
                    "start": {
                      "column": 80,
                      "line": 21
                    }
                  }
                },
                "range": [
                  917,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 21
                  },
                  "start": {
                    "column": 80,
                    "line": 21
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 21
              },
              "start": {
                "column": 79,
                "line": 21
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "range": [
              904,
              916
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 21
              },
              "start": {
                "column": 67,
                "line": 21
              }
            }
          },
          "range": [
            904,
            919
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 21
            },
            "start": {
              "column": 67,
              "line": 21
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            899,
            900
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 21
            },
            "start": {
              "column": 62,
              "line": 21
            }
          }
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeprecationOptions",
            "optional": false,
            "range": [
              923,
              941
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 21
              },
              "start": {
                "column": 86,
                "line": 21
              }
            }
          },
          "range": [
            923,
            941
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 21
            },
            "start": {
              "column": 86,
              "line": 21
            }
          }
        },
        "range": [
          896,
          944
        ],
        "loc": {
          "end": {
            "column": 107,
            "line": 21
          },
          "start": {
            "column": 59,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 21
          },
          "start": {
            "column": 25,
            "line": 21
          }
        },
        "range": [
          862,
          893
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  873,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              },
              "range": [
                873,
                892
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 21
                },
                "start": {
                  "column": 36,
                  "line": 21
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
                863,
                864
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
              863,
              892
            ],
            "loc": {
              "end": {
                "column": 55,
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
        837,
        945
      ],
      "loc": {
        "end": {
          "column": 108,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
        "name": "createOverload",
        "optional": false,
        "range": [
          964,
          978
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 23
          },
          "start": {
            "column": 17,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 23
              },
              "start": {
                "column": 67,
                "line": 23
              }
            },
            "range": [
              1014,
              1022
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1016,
                1022
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 23
                },
                "start": {
                  "column": 69,
                  "line": 23
                }
              }
            }
          },
          "range": [
            1010,
            1022
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 23
            },
            "start": {
              "column": 63,
              "line": 23
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "overloads",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 89,
                "line": 23
              },
              "start": {
                "column": 86,
                "line": 23
              }
            },
            "range": [
              1033,
              1036
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1035,
                  1036
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 23
                  },
                  "start": {
                    "column": 88,
                    "line": 23
                  }
                }
              },
              "range": [
                1035,
                1036
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 23
                },
                "start": {
                  "column": 88,
                  "line": 23
                }
              }
            }
          },
          "range": [
            1024,
            1036
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 23
            },
            "start": {
              "column": 77,
              "line": 23
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 117,
                "line": 23
              },
              "start": {
                "column": 97,
                "line": 23
              }
            },
            "range": [
              1044,
              1064
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1061,
                  1064
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
                        1062,
                        1063
                      ],
                      "loc": {
                        "end": {
                          "column": 116,
                          "line": 23
                        },
                        "start": {
                          "column": 115,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      1062,
                      1063
                    ],
                    "loc": {
                      "end": {
                        "column": 116,
                        "line": 23
                      },
                      "start": {
                        "column": 115,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 117,
                    "line": 23
                  },
                  "start": {
                    "column": 114,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "range": [
                  1046,
                  1061
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 23
                  },
                  "start": {
                    "column": 99,
                    "line": 23
                  }
                }
              },
              "range": [
                1046,
                1064
              ],
              "loc": {
                "end": {
                  "column": 117,
                  "line": 23
                },
                "start": {
                  "column": 99,
                  "line": 23
                }
              }
            }
          },
          "range": [
            1038,
            1064
          ],
          "loc": {
            "end": {
              "column": 117,
              "line": 23
            },
            "start": {
              "column": 91,
              "line": 23
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deprecations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 157,
                "line": 23
              },
              "start": {
                "column": 132,
                "line": 23
              }
            },
            "range": [
              1079,
              1104
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1101,
                  1104
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
                        1102,
                        1103
                      ],
                      "loc": {
                        "end": {
                          "column": 156,
                          "line": 23
                        },
                        "start": {
                          "column": 155,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      1102,
                      1103
                    ],
                    "loc": {
                      "end": {
                        "column": 156,
                        "line": 23
                      },
                      "start": {
                        "column": 155,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 157,
                    "line": 23
                  },
                  "start": {
                    "column": 154,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDeprecations",
                "optional": false,
                "range": [
                  1081,
                  1101
                ],
                "loc": {
                  "end": {
                    "column": 154,
                    "line": 23
                  },
                  "start": {
                    "column": 134,
                    "line": 23
                  }
                }
              },
              "range": [
                1081,
                1104
              ],
              "loc": {
                "end": {
                  "column": 157,
                  "line": 23
                },
                "start": {
                  "column": 134,
                  "line": 23
                }
              }
            }
          },
          "range": [
            1066,
            1104
          ],
          "loc": {
            "end": {
              "column": 157,
              "line": 23
            },
            "start": {
              "column": 119,
              "line": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 191,
            "line": 23
          },
          "start": {
            "column": 158,
            "line": 23
          }
        },
        "range": [
          1105,
          1138
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1126,
              1138
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
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
                        1135,
                        1136
                      ],
                      "loc": {
                        "end": {
                          "column": 189,
                          "line": 23
                        },
                        "start": {
                          "column": 188,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      1135,
                      1136
                    ],
                    "loc": {
                      "end": {
                        "column": 189,
                        "line": 23
                      },
                      "start": {
                        "column": 188,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    1129,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 189,
                      "line": 23
                    },
                    "start": {
                      "column": 182,
                      "line": 23
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
                      1127,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 181,
                        "line": 23
                      },
                      "start": {
                        "column": 180,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    1127,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 181,
                      "line": 23
                    },
                    "start": {
                      "column": 180,
                      "line": 23
                    }
                  }
                },
                "range": [
                  1127,
                  1137
                ],
                "loc": {
                  "end": {
                    "column": 190,
                    "line": 23
                  },
                  "start": {
                    "column": 180,
                    "line": 23
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 191,
                "line": 23
              },
              "start": {
                "column": 179,
                "line": 23
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionToIntersection",
            "optional": false,
            "range": [
              1107,
              1126
            ],
            "loc": {
              "end": {
                "column": 179,
                "line": 23
              },
              "start": {
                "column": 160,
                "line": 23
              }
            }
          },
          "range": [
            1107,
            1138
          ],
          "loc": {
            "end": {
              "column": 191,
              "line": 23
            },
            "start": {
              "column": 160,
              "line": 23
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 62,
            "line": 23
          },
          "start": {
            "column": 31,
            "line": 23
          }
        },
        "range": [
          978,
          1009
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  989,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 23
                  },
                  "start": {
                    "column": 42,
                    "line": 23
                  }
                }
              },
              "range": [
                989,
                1008
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 23
                },
                "start": {
                  "column": 42,
                  "line": 23
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
                979,
                980
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 32,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              979,
              1008
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 23
              },
              "start": {
                "column": 32,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        947,
        1139
      ],
      "loc": {
        "end": {
          "column": 192,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
        "name": "createBinder",
        "optional": false,
        "range": [
          1158,
          1170
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "overloads",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 25
              },
              "start": {
                "column": 70,
                "line": 25
              }
            },
            "range": [
              1211,
              1214
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1213,
                  1214
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 25
                  },
                  "start": {
                    "column": 72,
                    "line": 25
                  }
                }
              },
              "range": [
                1213,
                1214
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 25
                },
                "start": {
                  "column": 72,
                  "line": 25
                }
              }
            }
          },
          "range": [
            1202,
            1214
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 25
            },
            "start": {
              "column": 61,
              "line": 25
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 101,
                "line": 25
              },
              "start": {
                "column": 81,
                "line": 25
              }
            },
            "range": [
              1222,
              1242
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1239,
                  1242
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
                        1240,
                        1241
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 25
                        },
                        "start": {
                          "column": 99,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      1240,
                      1241
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 25
                      },
                      "start": {
                        "column": 99,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 25
                  },
                  "start": {
                    "column": 98,
                    "line": 25
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "range": [
                  1224,
                  1239
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 25
                  },
                  "start": {
                    "column": 83,
                    "line": 25
                  }
                }
              },
              "range": [
                1224,
                1242
              ],
              "loc": {
                "end": {
                  "column": 101,
                  "line": 25
                },
                "start": {
                  "column": 83,
                  "line": 25
                }
              }
            }
          },
          "range": [
            1216,
            1242
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 25
            },
            "start": {
              "column": 75,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 121,
            "line": 25
          },
          "start": {
            "column": 102,
            "line": 25
          }
        },
        "range": [
          1243,
          1262
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1259,
              1262
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
                    1260,
                    1261
                  ],
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 25
                    },
                    "start": {
                      "column": 119,
                      "line": 25
                    }
                  }
                },
                "range": [
                  1260,
                  1261
                ],
                "loc": {
                  "end": {
                    "column": 120,
                    "line": 25
                  },
                  "start": {
                    "column": 119,
                    "line": 25
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 121,
                "line": 25
              },
              "start": {
                "column": 118,
                "line": 25
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadBinder",
            "optional": false,
            "range": [
              1245,
              1259
            ],
            "loc": {
              "end": {
                "column": 118,
                "line": 25
              },
              "start": {
                "column": 104,
                "line": 25
              }
            }
          },
          "range": [
            1245,
            1262
          ],
          "loc": {
            "end": {
              "column": 121,
              "line": 25
            },
            "start": {
              "column": 104,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 60,
            "line": 25
          },
          "start": {
            "column": 29,
            "line": 25
          }
        },
        "range": [
          1170,
          1201
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  1181,
                  1200
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 25
                  },
                  "start": {
                    "column": 40,
                    "line": 25
                  }
                }
              },
              "range": [
                1181,
                1200
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 25
                },
                "start": {
                  "column": 40,
                  "line": 25
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
                1171,
                1172
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              1171,
              1200
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 25
              },
              "start": {
                "column": 30,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        1141,
        1263
      ],
      "loc": {
        "end": {
          "column": 122,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1291,
          1381
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload",
              "optional": false,
              "range": [
                1297,
                1305
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "overloads",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 28
                    },
                    "start": {
                      "column": 53,
                      "line": 28
                    }
                  },
                  "range": [
                    1346,
                    1349
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1348,
                        1349
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 28
                        },
                        "start": {
                          "column": 55,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      1348,
                      1349
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 28
                      },
                      "start": {
                        "column": 55,
                        "line": 28
                      }
                    }
                  }
                },
                "range": [
                  1337,
                  1349
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 28
                  },
                  "start": {
                    "column": 44,
                    "line": 28
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 85,
                  "line": 28
                },
                "start": {
                  "column": 57,
                  "line": 28
                }
              },
              "range": [
                1350,
                1378
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1375,
                    1378
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
                          1376,
                          1377
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 28
                          },
                          "start": {
                            "column": 83,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        1376,
                        1377
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 28
                        },
                        "start": {
                          "column": 83,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 28
                    },
                    "start": {
                      "column": 82,
                      "line": 28
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BindableOverloadBuilder",
                  "optional": false,
                  "range": [
                    1352,
                    1375
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 28
                    },
                    "start": {
                      "column": 59,
                      "line": 28
                    }
                  }
                },
                "range": [
                  1352,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 28
                  },
                  "start": {
                    "column": 59,
                    "line": 28
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 28
                }
              },
              "range": [
                1305,
                1336
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
                      "name": "OverloadDefinitions",
                      "optional": false,
                      "range": [
                        1316,
                        1335
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 28
                        },
                        "start": {
                          "column": 23,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      1316,
                      1335
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
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
                      1306,
                      1307
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 28
                      },
                      "start": {
                        "column": 13,
                        "line": 28
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1306,
                    1335
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                }
              ]
            },
            "range": [
              1297,
              1379
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 26,
            "line": 27
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBuilder",
        "optional": false,
        "range": [
          1275,
          1290
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "range": [
        1265,
        1381
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1448,
          1514
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "range": [
                1454,
                1458
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "binder",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 32
                    },
                    "start": {
                      "column": 15,
                      "line": 32
                    }
                  },
                  "range": [
                    1465,
                    1485
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1482,
                        1485
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
                              1483,
                              1484
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 32
                              },
                              "start": {
                                "column": 33,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            1483,
                            1484
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 32
                            },
                            "start": {
                              "column": 33,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 32
                        },
                        "start": {
                          "column": 32,
                          "line": 32
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadBinders",
                      "optional": false,
                      "range": [
                        1467,
                        1482
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 32
                        },
                        "start": {
                          "column": 17,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      1467,
                      1485
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 17,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  1459,
                  1485
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 32
                  },
                  "start": {
                    "column": 9,
                    "line": 32
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 32
                },
                "start": {
                  "column": 36,
                  "line": 32
                }
              },
              "range": [
                1486,
                1511
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1508,
                    1511
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
                          1509,
                          1510
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 32
                          },
                          "start": {
                            "column": 59,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        1509,
                        1510
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 32
                        },
                        "start": {
                          "column": 59,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 32
                    },
                    "start": {
                      "column": 58,
                      "line": 32
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BoundOverloadBuilder",
                  "optional": false,
                  "range": [
                    1488,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 32
                    },
                    "start": {
                      "column": 38,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1488,
                  1511
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 32
                  },
                  "start": {
                    "column": 38,
                    "line": 32
                  }
                }
              }
            },
            "static": false,
            "range": [
              1454,
              1512
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 65,
            "line": 31
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BindableOverloadBuilder",
        "optional": false,
        "range": [
          1393,
          1416
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 31
          },
          "start": {
            "column": 33,
            "line": 31
          }
        },
        "range": [
          1416,
          1447
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  1427,
                  1446
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 31
                  },
                  "start": {
                    "column": 44,
                    "line": 31
                  }
                }
              },
              "range": [
                1427,
                1446
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 31
                },
                "start": {
                  "column": 44,
                  "line": 31
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
                1417,
                1418
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 31
                },
                "start": {
                  "column": 34,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              1417,
              1446
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 31
              },
              "start": {
                "column": 34,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        1383,
        1514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1583,
          1621
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "finish",
              "optional": false,
              "range": [
                1589,
                1595
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
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
                  "column": 33,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 36
                }
              },
              "range": [
                1597,
                1618
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1615,
                    1618
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
                          1616,
                          1617
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 36
                          },
                          "start": {
                            "column": 31,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        1616,
                        1617
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 36
                        },
                        "start": {
                          "column": 31,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 36
                    },
                    "start": {
                      "column": 30,
                      "line": 36
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadFunction",
                  "optional": false,
                  "range": [
                    1599,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1599,
                  1618
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 36
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              }
            },
            "static": false,
            "range": [
              1589,
              1619
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 67,
            "line": 35
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FinishableOverloadBuilder",
        "optional": false,
        "range": [
          1526,
          1551
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 35
          },
          "start": {
            "column": 35,
            "line": 35
          }
        },
        "range": [
          1551,
          1582
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  1562,
                  1581
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 35
                  },
                  "start": {
                    "column": 46,
                    "line": 35
                  }
                }
              },
              "range": [
                1562,
                1581
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 35
                },
                "start": {
                  "column": 46,
                  "line": 35
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
                1552,
                1553
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 35
                },
                "start": {
                  "column": 36,
                  "line": 35
                }
              }
            },
            "out": false,
            "range": [
              1552,
              1581
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 35
              },
              "start": {
                "column": 36,
                "line": 35
              }
            }
          }
        ]
      },
      "range": [
        1516,
        1621
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1722,
          1809
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "deprecate",
              "optional": false,
              "range": [
                1728,
                1737
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deprecations",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 40
                    },
                    "start": {
                      "column": 26,
                      "line": 40
                    }
                  },
                  "range": [
                    1750,
                    1775
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1772,
                        1775
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
                              1773,
                              1774
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 40
                              },
                              "start": {
                                "column": 49,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            1773,
                            1774
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 40
                            },
                            "start": {
                              "column": 49,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 40
                        },
                        "start": {
                          "column": 48,
                          "line": 40
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadDeprecations",
                      "optional": false,
                      "range": [
                        1752,
                        1772
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 40
                        },
                        "start": {
                          "column": 28,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1752,
                      1775
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 40
                      },
                      "start": {
                        "column": 28,
                        "line": 40
                      }
                    }
                  }
                },
                "range": [
                  1738,
                  1775
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 40
                  },
                  "start": {
                    "column": 14,
                    "line": 40
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 40
                },
                "start": {
                  "column": 52,
                  "line": 40
                }
              },
              "range": [
                1776,
                1806
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1803,
                    1806
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
                          1804,
                          1805
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 40
                          },
                          "start": {
                            "column": 80,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        1804,
                        1805
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 40
                        },
                        "start": {
                          "column": 80,
                          "line": 40
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 40
                    },
                    "start": {
                      "column": 79,
                      "line": 40
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FinishableOverloadBuilder",
                  "optional": false,
                  "range": [
                    1778,
                    1803
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 40
                    },
                    "start": {
                      "column": 54,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1778,
                  1806
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 40
                  },
                  "start": {
                    "column": 54,
                    "line": 40
                  }
                }
              }
            },
            "static": false,
            "range": [
              1728,
              1807
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 99,
            "line": 39
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
            "name": "FinishableOverloadBuilder",
            "optional": false,
            "range": [
              1693,
              1718
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 39
              },
              "start": {
                "column": 70,
                "line": 39
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1718,
              1721
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
                    1719,
                    1720
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 39
                    },
                    "start": {
                      "column": 96,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1719,
                  1720
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 39
                  },
                  "start": {
                    "column": 96,
                    "line": 39
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 39
              },
              "start": {
                "column": 95,
                "line": 39
              }
            }
          },
          "range": [
            1693,
            1721
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 39
            },
            "start": {
              "column": 70,
              "line": 39
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoundOverloadBuilder",
        "optional": false,
        "range": [
          1633,
          1653
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 61,
            "line": 39
          },
          "start": {
            "column": 30,
            "line": 39
          }
        },
        "range": [
          1653,
          1684
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
                "name": "OverloadDefinitions",
                "optional": false,
                "range": [
                  1664,
                  1683
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 39
                  },
                  "start": {
                    "column": 41,
                    "line": 39
                  }
                }
              },
              "range": [
                1664,
                1683
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 39
                },
                "start": {
                  "column": 41,
                  "line": 39
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
                1654,
                1655
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 39
                },
                "start": {
                  "column": 31,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              1654,
              1683
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 39
              },
              "start": {
                "column": 31,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        1623,
        1809
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "buildOverload",
        "optional": false,
        "range": [
          1828,
          1841
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 43
          },
          "start": {
            "column": 17,
            "line": 43
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 43
              },
              "start": {
                "column": 35,
                "line": 43
              }
            },
            "range": [
              1846,
              1854
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1848,
                1854
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 43
                },
                "start": {
                  "column": 37,
                  "line": 43
                }
              }
            }
          },
          "range": [
            1842,
            1854
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 43
            },
            "start": {
              "column": 31,
              "line": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 43
          },
          "start": {
            "column": 44,
            "line": 43
          }
        },
        "range": [
          1855,
          1872
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadBuilder",
            "optional": false,
            "range": [
              1857,
              1872
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 43
              },
              "start": {
                "column": 46,
                "line": 43
              }
            }
          },
          "range": [
            1857,
            1872
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 43
            },
            "start": {
              "column": 46,
              "line": 43
            }
          }
        }
      },
      "range": [
        1811,
        1873
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1897,
          1987
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportDeclaration",
              "optional": false,
              "range": [
                1903,
                1920
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              1903,
              1920
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Modifier",
              "optional": false,
              "range": [
                1926,
                1934
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1926,
              1934
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "range": [
                1940,
                1952
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              1940,
              1952
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AssertClause",
              "optional": false,
              "range": [
                1958,
                1970
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1958,
              1970
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Decorator",
              "optional": false,
              "range": [
                1976,
                1985
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1976,
              1985
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 22,
            "line": 45
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "range": [
          1886,
          1896
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 45
          },
          "start": {
            "column": 11,
            "line": 45
          }
        }
      },
      "range": [
        1875,
        1987
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2004,
          2029
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2010,
                2014
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
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
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
                }
              },
              "range": [
                2014,
                2026
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "range": [
                    2016,
                    2026
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 54
                    },
                    "start": {
                      "column": 10,
                      "line": 54
                    }
                  }
                },
                "range": [
                  2016,
                  2026
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              2010,
              2027
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 15,
            "line": 53
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
          1999,
          2003
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 53
          },
          "start": {
            "column": 10,
            "line": 53
          }
        }
      },
      "range": [
        1989,
        2029
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2066,
          2092
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_declarationBrand",
              "optional": false,
              "range": [
                2068,
                2085
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 57
                },
                "start": {
                  "column": 37,
                  "line": 57
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
                  "line": 57
                },
                "start": {
                  "column": 54,
                  "line": 57
                }
              },
              "range": [
                2085,
                2090
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2087,
                  2090
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 57
                  },
                  "start": {
                    "column": 56,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              2068,
              2090
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 57
              },
              "start": {
                "column": 37,
                "line": 57
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 57
          },
          "start": {
            "column": 35,
            "line": 57
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
            "name": "Node",
            "optional": false,
            "range": [
              2061,
              2065
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 57
              },
              "start": {
                "column": 30,
                "line": 57
              }
            }
          },
          "range": [
            2061,
            2065
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 57
            },
            "start": {
              "column": 30,
              "line": 57
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Declaration",
        "optional": false,
        "range": [
          2041,
          2052
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 57
          },
          "start": {
            "column": 10,
            "line": 57
          }
        }
      },
      "range": [
        2031,
        2092
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2126,
          2150
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_statementBrand",
              "optional": false,
              "range": [
                2128,
                2143
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 58
                },
                "start": {
                  "column": 35,
                  "line": 58
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
                  "column": 55,
                  "line": 58
                },
                "start": {
                  "column": 50,
                  "line": 58
                }
              },
              "range": [
                2143,
                2148
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2145,
                  2148
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 58
                  },
                  "start": {
                    "column": 52,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              2128,
              2148
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 58
              },
              "start": {
                "column": 35,
                "line": 58
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 58
          },
          "start": {
            "column": 33,
            "line": 58
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
            "name": "Node",
            "optional": false,
            "range": [
              2121,
              2125
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 58
              },
              "start": {
                "column": 28,
                "line": 58
              }
            }
          },
          "range": [
            2121,
            2125
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 58
            },
            "start": {
              "column": 28,
              "line": 58
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statement",
        "optional": false,
        "range": [
          2103,
          2112
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 58
          },
          "start": {
            "column": 10,
            "line": 58
          }
        }
      },
      "range": [
        2093,
        2150
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        2150,
        2151
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 58
        },
        "start": {
          "column": 57,
          "line": 58
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2186,
          2212
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_expressionBrand",
              "optional": false,
              "range": [
                2188,
                2204
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 59
                },
                "start": {
                  "column": 36,
                  "line": 59
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
                  "column": 57,
                  "line": 59
                },
                "start": {
                  "column": 52,
                  "line": 59
                }
              },
              "range": [
                2204,
                2209
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2206,
                  2209
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 59
                  },
                  "start": {
                    "column": 54,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              2188,
              2210
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 59
              },
              "start": {
                "column": 36,
                "line": 59
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 59
          },
          "start": {
            "column": 34,
            "line": 59
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
            "name": "Node",
            "optional": false,
            "range": [
              2181,
              2185
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 59
              },
              "start": {
                "column": 29,
                "line": 59
              }
            }
          },
          "range": [
            2181,
            2185
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 59
            },
            "start": {
              "column": 29,
              "line": 59
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expression",
        "optional": false,
        "range": [
          2162,
          2172
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 59
          },
          "start": {
            "column": 10,
            "line": 59
          }
        }
      },
      "range": [
        2152,
        2212
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2260,
          2299
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2262,
                2266
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 61
                },
                "start": {
                  "column": 48,
                  "line": 61
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
                  "column": 82,
                  "line": 61
                },
                "start": {
                  "column": 52,
                  "line": 61
                }
              },
              "range": [
                2266,
                2296
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2268,
                      2278
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 61
                      },
                      "start": {
                        "column": 54,
                        "line": 61
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportDeclaration",
                    "optional": false,
                    "range": [
                      2279,
                      2296
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 61
                      },
                      "start": {
                        "column": 65,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    2268,
                    2296
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 61
                    },
                    "start": {
                      "column": 54,
                      "line": 61
                    }
                  }
                },
                "range": [
                  2268,
                  2296
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 61
                  },
                  "start": {
                    "column": 54,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              2262,
              2297
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 61
              },
              "start": {
                "column": 48,
                "line": 61
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 85,
            "line": 61
          },
          "start": {
            "column": 46,
            "line": 61
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
            "name": "Statement",
            "optional": false,
            "range": [
              2250,
              2259
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 61
              },
              "start": {
                "column": 36,
                "line": 61
              }
            }
          },
          "range": [
            2250,
            2259
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 61
            },
            "start": {
              "column": 36,
              "line": 61
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportDeclaration",
        "optional": false,
        "range": [
          2224,
          2241
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 61
          },
          "start": {
            "column": 10,
            "line": 61
          }
        }
      },
      "range": [
        2214,
        2299
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2332,
          2362
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2334,
                2338
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 62
                },
                "start": {
                  "column": 34,
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
                  "column": 59,
                  "line": 62
                },
                "start": {
                  "column": 38,
                  "line": 62
                }
              },
              "range": [
                2338,
                2359
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2340,
                      2350
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 62
                      },
                      "start": {
                        "column": 40,
                        "line": 62
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "range": [
                      2351,
                      2359
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 62
                      },
                      "start": {
                        "column": 51,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    2340,
                    2359
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 62
                    },
                    "start": {
                      "column": 40,
                      "line": 62
                    }
                  }
                },
                "range": [
                  2340,
                  2359
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 62
                  },
                  "start": {
                    "column": 40,
                    "line": 62
                  }
                }
              }
            },
            "range": [
              2334,
              2360
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 62
              },
              "start": {
                "column": 34,
                "line": 62
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 62
          },
          "start": {
            "column": 32,
            "line": 62
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
            "name": "Node",
            "optional": false,
            "range": [
              2327,
              2331
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 62
              },
              "start": {
                "column": 27,
                "line": 62
              }
            }
          },
          "range": [
            2327,
            2331
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 62
            },
            "start": {
              "column": 27,
              "line": 62
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Modifier",
        "optional": false,
        "range": [
          2310,
          2318
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 62
          },
          "start": {
            "column": 10,
            "line": 62
          }
        }
      },
      "range": [
        2300,
        2362
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2396,
          2427
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2398,
                2402
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 63
                },
                "start": {
                  "column": 35,
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
                  "column": 61,
                  "line": 63
                },
                "start": {
                  "column": 39,
                  "line": 63
                }
              },
              "range": [
                2402,
                2424
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2404,
                      2414
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 63
                      },
                      "start": {
                        "column": 41,
                        "line": 63
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decorator",
                    "optional": false,
                    "range": [
                      2415,
                      2424
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 63
                      },
                      "start": {
                        "column": 52,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2404,
                    2424
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 63
                    },
                    "start": {
                      "column": 41,
                      "line": 63
                    }
                  }
                },
                "range": [
                  2404,
                  2424
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 63
                  },
                  "start": {
                    "column": 41,
                    "line": 63
                  }
                }
              }
            },
            "range": [
              2398,
              2425
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 63
              },
              "start": {
                "column": 35,
                "line": 63
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 63
          },
          "start": {
            "column": 33,
            "line": 63
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
            "name": "Node",
            "optional": false,
            "range": [
              2391,
              2395
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 63
              },
              "start": {
                "column": 28,
                "line": 63
              }
            }
          },
          "range": [
            2391,
            2395
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 63
            },
            "start": {
              "column": 28,
              "line": 63
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Decorator",
        "optional": false,
        "range": [
          2373,
          2382
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 63
          },
          "start": {
            "column": 10,
            "line": 63
          }
        }
      },
      "range": [
        2363,
        2427
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2471,
          2505
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2473,
                2477
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 64
                },
                "start": {
                  "column": 45,
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
                  "column": 74,
                  "line": 64
                },
                "start": {
                  "column": 49,
                  "line": 64
                }
              },
              "range": [
                2477,
                2502
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2479,
                      2489
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 64
                      },
                      "start": {
                        "column": 51,
                        "line": 64
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "range": [
                      2490,
                      2502
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 64
                      },
                      "start": {
                        "column": 62,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    2479,
                    2502
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 64
                    },
                    "start": {
                      "column": 51,
                      "line": 64
                    }
                  }
                },
                "range": [
                  2479,
                  2502
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 64
                  },
                  "start": {
                    "column": 51,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              2473,
              2503
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 64
              },
              "start": {
                "column": 45,
                "line": 64
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 64
          },
          "start": {
            "column": 43,
            "line": 64
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
            "name": "Declaration",
            "optional": false,
            "range": [
              2459,
              2470
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 64
              },
              "start": {
                "column": 31,
                "line": 64
              }
            }
          },
          "range": [
            2459,
            2470
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 64
            },
            "start": {
              "column": 31,
              "line": 64
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportClause",
        "optional": false,
        "range": [
          2438,
          2450
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 64
          },
          "start": {
            "column": 10,
            "line": 64
          }
        }
      },
      "range": [
        2428,
        2505
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2542,
          2576
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                2544,
                2548
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 65
                },
                "start": {
                  "column": 38,
                  "line": 65
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
                  "column": 67,
                  "line": 65
                },
                "start": {
                  "column": 42,
                  "line": 65
                }
              },
              "range": [
                2548,
                2573
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "range": [
                      2550,
                      2560
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 65
                      },
                      "start": {
                        "column": 44,
                        "line": 65
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AssertClause",
                    "optional": false,
                    "range": [
                      2561,
                      2573
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 65
                      },
                      "start": {
                        "column": 55,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    2550,
                    2573
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 65
                    },
                    "start": {
                      "column": 44,
                      "line": 65
                    }
                  }
                },
                "range": [
                  2550,
                  2573
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 65
                  },
                  "start": {
                    "column": 44,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              2544,
              2574
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 65
              },
              "start": {
                "column": 38,
                "line": 65
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 65
          },
          "start": {
            "column": 36,
            "line": 65
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
            "name": "Node",
            "optional": false,
            "range": [
              2537,
              2541
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 65
              },
              "start": {
                "column": 31,
                "line": 65
              }
            }
          },
          "range": [
            2537,
            2541
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 65
            },
            "start": {
              "column": 31,
              "line": 65
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssertClause",
        "optional": false,
        "range": [
          2516,
          2528
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 65
          },
          "start": {
            "column": 10,
            "line": 65
          }
        }
      },
      "range": [
        2506,
        2576
      ],
      "loc": {
        "end": {
          "column": 70,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isExpression",
        "optional": false,
        "range": [
          2595,
          2607
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 67
          },
          "start": {
            "column": 17,
            "line": 67
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
                "column": 40,
                "line": 67
              },
              "start": {
                "column": 34,
                "line": 67
              }
            },
            "range": [
              2612,
              2618
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  2614,
                  2618
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 67
                  },
                  "start": {
                    "column": 36,
                    "line": 67
                  }
                }
              },
              "range": [
                2614,
                2618
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 67
                },
                "start": {
                  "column": 36,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2608,
            2618
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 67
            },
            "start": {
              "column": 30,
              "line": 67
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 67
          },
          "start": {
            "column": 41,
            "line": 67
          }
        },
        "range": [
          2619,
          2639
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "range": [
              2621,
              2625
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 67
              },
              "start": {
                "column": 43,
                "line": 67
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 67
              },
              "start": {
                "column": 51,
                "line": 67
              }
            },
            "range": [
              2629,
              2639
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Expression",
                "optional": false,
                "range": [
                  2629,
                  2639
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 67
                  },
                  "start": {
                    "column": 51,
                    "line": 67
                  }
                }
              },
              "range": [
                2629,
                2639
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 67
                },
                "start": {
                  "column": 51,
                  "line": 67
                }
              }
            }
          },
          "range": [
            2621,
            2639
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 67
            },
            "start": {
              "column": 43,
              "line": 67
            }
          }
        }
      },
      "range": [
        2578,
        2640
      ],
      "loc": {
        "end": {
          "column": 62,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAssertClause",
        "optional": false,
        "range": [
          2658,
          2672
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 68
          },
          "start": {
            "column": 17,
            "line": 68
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
                "column": 42,
                "line": 68
              },
              "start": {
                "column": 36,
                "line": 68
              }
            },
            "range": [
              2677,
              2683
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  2679,
                  2683
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 68
                  },
                  "start": {
                    "column": 38,
                    "line": 68
                  }
                }
              },
              "range": [
                2679,
                2683
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 68
                },
                "start": {
                  "column": 38,
                  "line": 68
                }
              }
            }
          },
          "range": [
            2673,
            2683
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 68
            },
            "start": {
              "column": 32,
              "line": 68
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 68
          },
          "start": {
            "column": 43,
            "line": 68
          }
        },
        "range": [
          2684,
          2706
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "range": [
              2686,
              2690
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 68
              },
              "start": {
                "column": 45,
                "line": 68
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 68
              },
              "start": {
                "column": 53,
                "line": 68
              }
            },
            "range": [
              2694,
              2706
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AssertClause",
                "optional": false,
                "range": [
                  2694,
                  2706
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 68
                  },
                  "start": {
                    "column": 53,
                    "line": 68
                  }
                }
              },
              "range": [
                2694,
                2706
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 68
                },
                "start": {
                  "column": 53,
                  "line": 68
                }
              }
            }
          },
          "range": [
            2686,
            2706
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 68
            },
            "start": {
              "column": 45,
              "line": 68
            }
          }
        }
      },
      "range": [
        2641,
        2707
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
        "name": "isImportClause",
        "optional": false,
        "range": [
          2725,
          2739
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 69
          },
          "start": {
            "column": 17,
            "line": 69
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
                "column": 42,
                "line": 69
              },
              "start": {
                "column": 36,
                "line": 69
              }
            },
            "range": [
              2744,
              2750
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  2746,
                  2750
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 69
                  },
                  "start": {
                    "column": 38,
                    "line": 69
                  }
                }
              },
              "range": [
                2746,
                2750
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 69
                },
                "start": {
                  "column": 38,
                  "line": 69
                }
              }
            }
          },
          "range": [
            2740,
            2750
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 69
            },
            "start": {
              "column": 32,
              "line": 69
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 69
          },
          "start": {
            "column": 43,
            "line": 69
          }
        },
        "range": [
          2751,
          2773
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "range": [
              2753,
              2757
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 69
              },
              "start": {
                "column": 45,
                "line": 69
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 69
              },
              "start": {
                "column": 53,
                "line": 69
              }
            },
            "range": [
              2761,
              2773
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImportClause",
                "optional": false,
                "range": [
                  2761,
                  2773
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 69
                  },
                  "start": {
                    "column": 53,
                    "line": 69
                  }
                }
              },
              "range": [
                2761,
                2773
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 69
                },
                "start": {
                  "column": 53,
                  "line": 69
                }
              }
            }
          },
          "range": [
            2753,
            2773
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 69
            },
            "start": {
              "column": 45,
              "line": 69
            }
          }
        }
      },
      "range": [
        2708,
        2774
      ],
      "loc": {
        "end": {
          "column": 66,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isModifier",
        "optional": false,
        "range": [
          2792,
          2802
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 70
          },
          "start": {
            "column": 17,
            "line": 70
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
                "line": 70
              },
              "start": {
                "column": 32,
                "line": 70
              }
            },
            "range": [
              2807,
              2813
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  2809,
                  2813
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 70
                  },
                  "start": {
                    "column": 34,
                    "line": 70
                  }
                }
              },
              "range": [
                2809,
                2813
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 70
                },
                "start": {
                  "column": 34,
                  "line": 70
                }
              }
            }
          },
          "range": [
            2803,
            2813
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 70
            },
            "start": {
              "column": 28,
              "line": 70
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 70
          },
          "start": {
            "column": 39,
            "line": 70
          }
        },
        "range": [
          2814,
          2832
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "range": [
              2816,
              2820
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 70
              },
              "start": {
                "column": 41,
                "line": 70
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 70
              },
              "start": {
                "column": 49,
                "line": 70
              }
            },
            "range": [
              2824,
              2832
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "range": [
                  2824,
                  2832
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 70
                  },
                  "start": {
                    "column": 49,
                    "line": 70
                  }
                }
              },
              "range": [
                2824,
                2832
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 70
                },
                "start": {
                  "column": 49,
                  "line": 70
                }
              }
            }
          },
          "range": [
            2816,
            2832
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 70
            },
            "start": {
              "column": 41,
              "line": 70
            }
          }
        }
      },
      "range": [
        2775,
        2833
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
        "name": "isDecorator",
        "optional": false,
        "range": [
          2851,
          2862
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 71
          },
          "start": {
            "column": 17,
            "line": 71
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
                "line": 71
              },
              "start": {
                "column": 33,
                "line": 71
              }
            },
            "range": [
              2867,
              2873
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "range": [
                  2869,
                  2873
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 71
                  },
                  "start": {
                    "column": 35,
                    "line": 71
                  }
                }
              },
              "range": [
                2869,
                2873
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 71
                },
                "start": {
                  "column": 35,
                  "line": 71
                }
              }
            }
          },
          "range": [
            2863,
            2873
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 71
            },
            "start": {
              "column": 29,
              "line": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 71
          },
          "start": {
            "column": 40,
            "line": 71
          }
        },
        "range": [
          2874,
          2893
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "range": [
              2876,
              2880
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 71
              },
              "start": {
                "column": 42,
                "line": 71
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 71
              },
              "start": {
                "column": 50,
                "line": 71
              }
            },
            "range": [
              2884,
              2893
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Decorator",
                "optional": false,
                "range": [
                  2884,
                  2893
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 71
                  },
                  "start": {
                    "column": 50,
                    "line": 71
                  }
                }
              },
              "range": [
                2884,
                2893
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 71
                },
                "start": {
                  "column": 50,
                  "line": 71
                }
              }
            }
          },
          "range": [
            2876,
            2893
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 71
            },
            "start": {
              "column": 42,
              "line": 71
            }
          }
        }
      },
      "range": [
        2834,
        2894
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "name": "updateImportDeclaration",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 76
                },
                "start": {
                  "column": 37,
                  "line": 73
                }
              },
              "range": [
                2933,
                3390
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 28,
                              "line": 74
                            },
                            "start": {
                              "column": 9,
                              "line": 74
                            }
                          },
                          "range": [
                            2946,
                            2965
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "range": [
                                2948,
                                2965
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 74
                                },
                                "start": {
                                  "column": 11,
                                  "line": 74
                                }
                              }
                            },
                            "range": [
                              2948,
                              2965
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 74
                              },
                              "start": {
                                "column": 11,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          2942,
                          2965
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 74
                          },
                          "start": {
                            "column": 5,
                            "line": 74
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 74
                            },
                            "start": {
                              "column": 39,
                              "line": 74
                            }
                          },
                          "range": [
                            2976,
                            3009
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
                                      "name": "Modifier",
                                      "optional": false,
                                      "range": [
                                        2987,
                                        2995
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 74
                                        },
                                        "start": {
                                          "column": 50,
                                          "line": 74
                                        }
                                      }
                                    },
                                    "range": [
                                      2987,
                                      2995
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 74
                                      }
                                    }
                                  },
                                  "range": [
                                    2987,
                                    2997
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 50,
                                      "line": 74
                                    }
                                  }
                                },
                                "range": [
                                  2978,
                                  2997
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 74
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3000,
                                  3009
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 63,
                                    "line": 74
                                  }
                                }
                              }
                            ],
                            "range": [
                              2978,
                              3009
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 74
                              },
                              "start": {
                                "column": 41,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          2967,
                          3009
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 74
                          },
                          "start": {
                            "column": 30,
                            "line": 74
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "importClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 112,
                              "line": 74
                            },
                            "start": {
                              "column": 86,
                              "line": 74
                            }
                          },
                          "range": [
                            3023,
                            3049
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ImportClause",
                                  "optional": false,
                                  "range": [
                                    3025,
                                    3037
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 100,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 88,
                                      "line": 74
                                    }
                                  }
                                },
                                "range": [
                                  3025,
                                  3037
                                ],
                                "loc": {
                                  "end": {
                                    "column": 100,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 88,
                                    "line": 74
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3040,
                                  3049
                                ],
                                "loc": {
                                  "end": {
                                    "column": 112,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 103,
                                    "line": 74
                                  }
                                }
                              }
                            ],
                            "range": [
                              3025,
                              3049
                            ],
                            "loc": {
                              "end": {
                                "column": 112,
                                "line": 74
                              },
                              "start": {
                                "column": 88,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          3011,
                          3049
                        ],
                        "loc": {
                          "end": {
                            "column": 112,
                            "line": 74
                          },
                          "start": {
                            "column": 74,
                            "line": 74
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 141,
                              "line": 74
                            },
                            "start": {
                              "column": 129,
                              "line": 74
                            }
                          },
                          "range": [
                            3066,
                            3078
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "range": [
                                3068,
                                3078
                              ],
                              "loc": {
                                "end": {
                                  "column": 141,
                                  "line": 74
                                },
                                "start": {
                                  "column": 131,
                                  "line": 74
                                }
                              }
                            },
                            "range": [
                              3068,
                              3078
                            ],
                            "loc": {
                              "end": {
                                "column": 141,
                                "line": 74
                              },
                              "start": {
                                "column": 131,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          3051,
                          3078
                        ],
                        "loc": {
                          "end": {
                            "column": 141,
                            "line": 74
                          },
                          "start": {
                            "column": 114,
                            "line": 74
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 181,
                              "line": 74
                            },
                            "start": {
                              "column": 155,
                              "line": 74
                            }
                          },
                          "range": [
                            3092,
                            3118
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AssertClause",
                                  "optional": false,
                                  "range": [
                                    3094,
                                    3106
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 169,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 157,
                                      "line": 74
                                    }
                                  }
                                },
                                "range": [
                                  3094,
                                  3106
                                ],
                                "loc": {
                                  "end": {
                                    "column": 169,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 157,
                                    "line": 74
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3109,
                                  3118
                                ],
                                "loc": {
                                  "end": {
                                    "column": 181,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 172,
                                    "line": 74
                                  }
                                }
                              }
                            ],
                            "range": [
                              3094,
                              3118
                            ],
                            "loc": {
                              "end": {
                                "column": 181,
                                "line": 74
                              },
                              "start": {
                                "column": 157,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          3080,
                          3118
                        ],
                        "loc": {
                          "end": {
                            "column": 181,
                            "line": 74
                          },
                          "start": {
                            "column": 143,
                            "line": 74
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 201,
                          "line": 74
                        },
                        "start": {
                          "column": 182,
                          "line": 74
                        }
                      },
                      "range": [
                        3119,
                        3138
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "range": [
                            3121,
                            3138
                          ],
                          "loc": {
                            "end": {
                              "column": 201,
                              "line": 74
                            },
                            "start": {
                              "column": 184,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          3121,
                          3138
                        ],
                        "loc": {
                          "end": {
                            "column": 201,
                            "line": 74
                          },
                          "start": {
                            "column": 184,
                            "line": 74
                          }
                        }
                      }
                    },
                    "range": [
                      2941,
                      3139
                    ],
                    "loc": {
                      "end": {
                        "column": 202,
                        "line": 74
                      },
                      "start": {
                        "column": 4,
                        "line": 74
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 28,
                              "line": 75
                            },
                            "start": {
                              "column": 9,
                              "line": 75
                            }
                          },
                          "range": [
                            3149,
                            3168
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "range": [
                                3151,
                                3168
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 75
                                },
                                "start": {
                                  "column": 11,
                                  "line": 75
                                }
                              }
                            },
                            "range": [
                              3151,
                              3168
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 75
                              },
                              "start": {
                                "column": 11,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3145,
                          3168
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 75
                          },
                          "start": {
                            "column": 5,
                            "line": 75
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "decorators",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 75
                            },
                            "start": {
                              "column": 40,
                              "line": 75
                            }
                          },
                          "range": [
                            3180,
                            3214
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
                                      "name": "Decorator",
                                      "optional": false,
                                      "range": [
                                        3191,
                                        3200
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 60,
                                          "line": 75
                                        },
                                        "start": {
                                          "column": 51,
                                          "line": 75
                                        }
                                      }
                                    },
                                    "range": [
                                      3191,
                                      3200
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 75
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 75
                                      }
                                    }
                                  },
                                  "range": [
                                    3191,
                                    3202
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 75
                                    }
                                  }
                                },
                                "range": [
                                  3182,
                                  3202
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 75
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3205,
                                  3214
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 75
                                  }
                                }
                              }
                            ],
                            "range": [
                              3182,
                              3214
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 75
                              },
                              "start": {
                                "column": 42,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3170,
                          3214
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 75
                          },
                          "start": {
                            "column": 30,
                            "line": 75
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 118,
                              "line": 75
                            },
                            "start": {
                              "column": 85,
                              "line": 75
                            }
                          },
                          "range": [
                            3225,
                            3258
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
                                      "name": "Modifier",
                                      "optional": false,
                                      "range": [
                                        3236,
                                        3244
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 104,
                                          "line": 75
                                        },
                                        "start": {
                                          "column": 96,
                                          "line": 75
                                        }
                                      }
                                    },
                                    "range": [
                                      3236,
                                      3244
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 104,
                                        "line": 75
                                      },
                                      "start": {
                                        "column": 96,
                                        "line": 75
                                      }
                                    }
                                  },
                                  "range": [
                                    3236,
                                    3246
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 106,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 96,
                                      "line": 75
                                    }
                                  }
                                },
                                "range": [
                                  3227,
                                  3246
                                ],
                                "loc": {
                                  "end": {
                                    "column": 106,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 87,
                                    "line": 75
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3249,
                                  3258
                                ],
                                "loc": {
                                  "end": {
                                    "column": 118,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 109,
                                    "line": 75
                                  }
                                }
                              }
                            ],
                            "range": [
                              3227,
                              3258
                            ],
                            "loc": {
                              "end": {
                                "column": 118,
                                "line": 75
                              },
                              "start": {
                                "column": 87,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3216,
                          3258
                        ],
                        "loc": {
                          "end": {
                            "column": 118,
                            "line": 75
                          },
                          "start": {
                            "column": 76,
                            "line": 75
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "importClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 158,
                              "line": 75
                            },
                            "start": {
                              "column": 132,
                              "line": 75
                            }
                          },
                          "range": [
                            3272,
                            3298
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ImportClause",
                                  "optional": false,
                                  "range": [
                                    3274,
                                    3286
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 146,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 134,
                                      "line": 75
                                    }
                                  }
                                },
                                "range": [
                                  3274,
                                  3286
                                ],
                                "loc": {
                                  "end": {
                                    "column": 146,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 134,
                                    "line": 75
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3289,
                                  3298
                                ],
                                "loc": {
                                  "end": {
                                    "column": 158,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 149,
                                    "line": 75
                                  }
                                }
                              }
                            ],
                            "range": [
                              3274,
                              3298
                            ],
                            "loc": {
                              "end": {
                                "column": 158,
                                "line": 75
                              },
                              "start": {
                                "column": 134,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3260,
                          3298
                        ],
                        "loc": {
                          "end": {
                            "column": 158,
                            "line": 75
                          },
                          "start": {
                            "column": 120,
                            "line": 75
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 187,
                              "line": 75
                            },
                            "start": {
                              "column": 175,
                              "line": 75
                            }
                          },
                          "range": [
                            3315,
                            3327
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "range": [
                                3317,
                                3327
                              ],
                              "loc": {
                                "end": {
                                  "column": 187,
                                  "line": 75
                                },
                                "start": {
                                  "column": 177,
                                  "line": 75
                                }
                              }
                            },
                            "range": [
                              3317,
                              3327
                            ],
                            "loc": {
                              "end": {
                                "column": 187,
                                "line": 75
                              },
                              "start": {
                                "column": 177,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3300,
                          3327
                        ],
                        "loc": {
                          "end": {
                            "column": 187,
                            "line": 75
                          },
                          "start": {
                            "column": 160,
                            "line": 75
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertClause",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 227,
                              "line": 75
                            },
                            "start": {
                              "column": 201,
                              "line": 75
                            }
                          },
                          "range": [
                            3341,
                            3367
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AssertClause",
                                  "optional": false,
                                  "range": [
                                    3343,
                                    3355
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 215,
                                      "line": 75
                                    },
                                    "start": {
                                      "column": 203,
                                      "line": 75
                                    }
                                  }
                                },
                                "range": [
                                  3343,
                                  3355
                                ],
                                "loc": {
                                  "end": {
                                    "column": 215,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 203,
                                    "line": 75
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  3358,
                                  3367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 227,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 218,
                                    "line": 75
                                  }
                                }
                              }
                            ],
                            "range": [
                              3343,
                              3367
                            ],
                            "loc": {
                              "end": {
                                "column": 227,
                                "line": 75
                              },
                              "start": {
                                "column": 203,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          3329,
                          3367
                        ],
                        "loc": {
                          "end": {
                            "column": 227,
                            "line": 75
                          },
                          "start": {
                            "column": 189,
                            "line": 75
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 247,
                          "line": 75
                        },
                        "start": {
                          "column": 228,
                          "line": 75
                        }
                      },
                      "range": [
                        3368,
                        3387
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "range": [
                            3370,
                            3387
                          ],
                          "loc": {
                            "end": {
                              "column": 247,
                              "line": 75
                            },
                            "start": {
                              "column": 230,
                              "line": 75
                            }
                          }
                        },
                        "range": [
                          3370,
                          3387
                        ],
                        "loc": {
                          "end": {
                            "column": 247,
                            "line": 75
                          },
                          "start": {
                            "column": 230,
                            "line": 75
                          }
                        }
                      }
                    },
                    "range": [
                      3144,
                      3388
                    ],
                    "loc": {
                      "end": {
                        "column": 248,
                        "line": 75
                      },
                      "start": {
                        "column": 4,
                        "line": 75
                      }
                    }
                  }
                ],
                "range": [
                  2935,
                  3390
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 76
                  },
                  "start": {
                    "column": 39,
                    "line": 73
                  }
                }
              }
            },
            "range": [
              2910,
              3390
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 76
              },
              "start": {
                "column": 14,
                "line": 73
              }
            }
          },
          "init": null,
          "range": [
            2910,
            3390
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 76
            },
            "start": {
              "column": 14,
              "line": 73
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2896,
        3390
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "range": [
          3409,
          3414
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 78
          },
          "start": {
            "column": 17,
            "line": 78
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 78
              },
              "start": {
                "column": 44,
                "line": 78
              }
            },
            "range": [
              3436,
              3450
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
                      3447,
                      3448
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 78
                      },
                      "start": {
                        "column": 55,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    3447,
                    3448
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 78
                    },
                    "start": {
                      "column": 55,
                      "line": 78
                    }
                  }
                },
                "range": [
                  3447,
                  3450
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 78
                  },
                  "start": {
                    "column": 55,
                    "line": 78
                  }
                }
              },
              "range": [
                3438,
                3450
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 78
                },
                "start": {
                  "column": 46,
                  "line": 78
                }
              }
            }
          },
          "range": [
            3431,
            3450
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 78
            },
            "start": {
              "column": 39,
              "line": 78
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 113,
                "line": 78
              },
              "start": {
                "column": 68,
                "line": 78
              }
            },
            "range": [
              3460,
              3505
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 78
                      },
                      "start": {
                        "column": 78,
                        "line": 78
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
                            "column": 81,
                            "line": 78
                          },
                          "start": {
                            "column": 80,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        3472,
                        3473
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 78
                        },
                        "start": {
                          "column": 80,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    3463,
                    3473
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 78
                    },
                    "start": {
                      "column": 71,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 78
                      },
                      "start": {
                        "column": 88,
                        "line": 78
                      }
                    },
                    "range": [
                      3480,
                      3488
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3482,
                        3488
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 78
                        },
                        "start": {
                          "column": 90,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    3475,
                    3488
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 78
                    },
                    "start": {
                      "column": 83,
                      "line": 78
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 113,
                    "line": 78
                  },
                  "start": {
                    "column": 98,
                    "line": 78
                  }
                },
                "range": [
                  3490,
                  3505
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "range": [
                      3493,
                      3500
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 78
                      },
                      "start": {
                        "column": 101,
                        "line": 78
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 113,
                        "line": 78
                      },
                      "start": {
                        "column": 112,
                        "line": 78
                      }
                    },
                    "range": [
                      3504,
                      3505
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3504,
                          3505
                        ],
                        "loc": {
                          "end": {
                            "column": 113,
                            "line": 78
                          },
                          "start": {
                            "column": 112,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        3504,
                        3505
                      ],
                      "loc": {
                        "end": {
                          "column": 113,
                          "line": 78
                        },
                        "start": {
                          "column": 112,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    3493,
                    3505
                  ],
                  "loc": {
                    "end": {
                      "column": 113,
                      "line": 78
                    },
                    "start": {
                      "column": 101,
                      "line": 78
                    }
                  }
                }
              },
              "range": [
                3462,
                3505
              ],
              "loc": {
                "end": {
                  "column": 113,
                  "line": 78
                },
                "start": {
                  "column": 70,
                  "line": 78
                }
              }
            }
          },
          "range": [
            3452,
            3505
          ],
          "loc": {
            "end": {
              "column": 113,
              "line": 78
            },
            "start": {
              "column": 60,
              "line": 78
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 137,
            "line": 78
          },
          "start": {
            "column": 114,
            "line": 78
          }
        },
        "range": [
          3506,
          3529
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "range": [
              3508,
              3513
            ],
            "loc": {
              "end": {
                "column": 121,
                "line": 78
              },
              "start": {
                "column": 116,
                "line": 78
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 137,
                "line": 78
              },
              "start": {
                "column": 125,
                "line": 78
              }
            },
            "range": [
              3517,
              3529
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
                    "name": "U",
                    "optional": false,
                    "range": [
                      3526,
                      3527
                    ],
                    "loc": {
                      "end": {
                        "column": 135,
                        "line": 78
                      },
                      "start": {
                        "column": 134,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    3526,
                    3527
                  ],
                  "loc": {
                    "end": {
                      "column": 135,
                      "line": 78
                    },
                    "start": {
                      "column": 134,
                      "line": 78
                    }
                  }
                },
                "range": [
                  3526,
                  3529
                ],
                "loc": {
                  "end": {
                    "column": 137,
                    "line": 78
                  },
                  "start": {
                    "column": 134,
                    "line": 78
                  }
                }
              },
              "range": [
                3517,
                3529
              ],
              "loc": {
                "end": {
                  "column": 137,
                  "line": 78
                },
                "start": {
                  "column": 125,
                  "line": 78
                }
              }
            }
          },
          "range": [
            3508,
            3529
          ],
          "loc": {
            "end": {
              "column": 137,
              "line": 78
            },
            "start": {
              "column": 116,
              "line": 78
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 78
          },
          "start": {
            "column": 22,
            "line": 78
          }
        },
        "range": [
          3414,
          3430
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
                3415,
                3416
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 78
                },
                "start": {
                  "column": 23,
                  "line": 78
                }
              }
            },
            "out": false,
            "range": [
              3415,
              3416
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 78
              },
              "start": {
                "column": 23,
                "line": 78
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
                  3428,
                  3429
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 78
                  },
                  "start": {
                    "column": 36,
                    "line": 78
                  }
                }
              },
              "range": [
                3428,
                3429
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 78
                },
                "start": {
                  "column": 36,
                  "line": 78
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
                3418,
                3419
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 78
                },
                "start": {
                  "column": 26,
                  "line": 78
                }
              }
            },
            "out": false,
            "range": [
              3418,
              3429
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 78
              },
              "start": {
                "column": 26,
                "line": 78
              }
            }
          }
        ]
      },
      "range": [
        3392,
        3530
      ],
      "loc": {
        "end": {
          "column": 138,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 78
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
        "name": "every",
        "optional": false,
        "range": [
          3548,
          3553
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 79
          },
          "start": {
            "column": 17,
            "line": 79
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 70,
                "line": 79
              },
              "start": {
                "column": 44,
                "line": 79
              }
            },
            "range": [
              3575,
              3601
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
                          3586,
                          3587
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 79
                          },
                          "start": {
                            "column": 55,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        3586,
                        3587
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 79
                        },
                        "start": {
                          "column": 55,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      3586,
                      3589
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 79
                      },
                      "start": {
                        "column": 55,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    3577,
                    3589
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 79
                    },
                    "start": {
                      "column": 46,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    3592,
                    3601
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 79
                    },
                    "start": {
                      "column": 61,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                3577,
                3601
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 79
                },
                "start": {
                  "column": 46,
                  "line": 79
                }
              }
            }
          },
          "range": [
            3570,
            3601
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 79
            },
            "start": {
              "column": 39,
              "line": 79
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 125,
                "line": 79
              },
              "start": {
                "column": 80,
                "line": 79
              }
            },
            "range": [
              3611,
              3656
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 79
                      },
                      "start": {
                        "column": 90,
                        "line": 79
                      }
                    },
                    "range": [
                      3621,
                      3624
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3623,
                          3624
                        ],
                        "loc": {
                          "end": {
                            "column": 93,
                            "line": 79
                          },
                          "start": {
                            "column": 92,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        3623,
                        3624
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 79
                        },
                        "start": {
                          "column": 92,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    3614,
                    3624
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 79
                    },
                    "start": {
                      "column": 83,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 79
                      },
                      "start": {
                        "column": 100,
                        "line": 79
                      }
                    },
                    "range": [
                      3631,
                      3639
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3633,
                        3639
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 79
                        },
                        "start": {
                          "column": 102,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    3626,
                    3639
                  ],
                  "loc": {
                    "end": {
                      "column": 108,
                      "line": 79
                    },
                    "start": {
                      "column": 95,
                      "line": 79
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 125,
                    "line": 79
                  },
                  "start": {
                    "column": 110,
                    "line": 79
                  }
                },
                "range": [
                  3641,
                  3656
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "range": [
                      3644,
                      3651
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 79
                      },
                      "start": {
                        "column": 113,
                        "line": 79
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 125,
                        "line": 79
                      },
                      "start": {
                        "column": 124,
                        "line": 79
                      }
                    },
                    "range": [
                      3655,
                      3656
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3655,
                          3656
                        ],
                        "loc": {
                          "end": {
                            "column": 125,
                            "line": 79
                          },
                          "start": {
                            "column": 124,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        3655,
                        3656
                      ],
                      "loc": {
                        "end": {
                          "column": 125,
                          "line": 79
                        },
                        "start": {
                          "column": 124,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    3644,
                    3656
                  ],
                  "loc": {
                    "end": {
                      "column": 125,
                      "line": 79
                    },
                    "start": {
                      "column": 113,
                      "line": 79
                    }
                  }
                }
              },
              "range": [
                3613,
                3656
              ],
              "loc": {
                "end": {
                  "column": 125,
                  "line": 79
                },
                "start": {
                  "column": 82,
                  "line": 79
                }
              }
            }
          },
          "range": [
            3603,
            3656
          ],
          "loc": {
            "end": {
              "column": 125,
              "line": 79
            },
            "start": {
              "column": 72,
              "line": 79
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 161,
            "line": 79
          },
          "start": {
            "column": 126,
            "line": 79
          }
        },
        "range": [
          3657,
          3692
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "range": [
              3659,
              3664
            ],
            "loc": {
              "end": {
                "column": 133,
                "line": 79
              },
              "start": {
                "column": 128,
                "line": 79
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 161,
                "line": 79
              },
              "start": {
                "column": 137,
                "line": 79
              }
            },
            "range": [
              3668,
              3692
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
                        "name": "U",
                        "optional": false,
                        "range": [
                          3677,
                          3678
                        ],
                        "loc": {
                          "end": {
                            "column": 147,
                            "line": 79
                          },
                          "start": {
                            "column": 146,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        3677,
                        3678
                      ],
                      "loc": {
                        "end": {
                          "column": 147,
                          "line": 79
                        },
                        "start": {
                          "column": 146,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      3677,
                      3680
                    ],
                    "loc": {
                      "end": {
                        "column": 149,
                        "line": 79
                      },
                      "start": {
                        "column": 146,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    3668,
                    3680
                  ],
                  "loc": {
                    "end": {
                      "column": 149,
                      "line": 79
                    },
                    "start": {
                      "column": 137,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    3683,
                    3692
                  ],
                  "loc": {
                    "end": {
                      "column": 161,
                      "line": 79
                    },
                    "start": {
                      "column": 152,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                3668,
                3692
              ],
              "loc": {
                "end": {
                  "column": 161,
                  "line": 79
                },
                "start": {
                  "column": 137,
                  "line": 79
                }
              }
            }
          },
          "range": [
            3659,
            3692
          ],
          "loc": {
            "end": {
              "column": 161,
              "line": 79
            },
            "start": {
              "column": 128,
              "line": 79
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 79
          },
          "start": {
            "column": 22,
            "line": 79
          }
        },
        "range": [
          3553,
          3569
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
                3554,
                3555
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 79
                },
                "start": {
                  "column": 23,
                  "line": 79
                }
              }
            },
            "out": false,
            "range": [
              3554,
              3555
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 79
              },
              "start": {
                "column": 23,
                "line": 79
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
                  3567,
                  3568
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 79
                  },
                  "start": {
                    "column": 36,
                    "line": 79
                  }
                }
              },
              "range": [
                3567,
                3568
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 79
                },
                "start": {
                  "column": 36,
                  "line": 79
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
                3557,
                3558
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 79
                },
                "start": {
                  "column": 26,
                  "line": 79
                }
              }
            },
            "out": false,
            "range": [
              3557,
              3568
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 79
              },
              "start": {
                "column": 26,
                "line": 79
              }
            }
          }
        ]
      },
      "range": [
        3531,
        3693
      ],
      "loc": {
        "end": {
          "column": 162,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "range": [
          3711,
          3716
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 80
          },
          "start": {
            "column": 17,
            "line": 80
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 80
              },
              "start": {
                "column": 31,
                "line": 80
              }
            },
            "range": [
              3725,
              3751
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
                          3736,
                          3737
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 80
                          },
                          "start": {
                            "column": 42,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        3736,
                        3737
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 80
                        },
                        "start": {
                          "column": 42,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      3736,
                      3739
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 80
                      },
                      "start": {
                        "column": 42,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    3727,
                    3739
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 80
                    },
                    "start": {
                      "column": 33,
                      "line": 80
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    3742,
                    3751
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 80
                    },
                    "start": {
                      "column": 48,
                      "line": 80
                    }
                  }
                }
              ],
              "range": [
                3727,
                3751
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 80
                },
                "start": {
                  "column": 33,
                  "line": 80
                }
              }
            }
          },
          "range": [
            3720,
            3751
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 80
            },
            "start": {
              "column": 26,
              "line": 80
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 107,
                "line": 80
              },
              "start": {
                "column": 67,
                "line": 80
              }
            },
            "range": [
              3761,
              3801
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 80
                      },
                      "start": {
                        "column": 77,
                        "line": 80
                      }
                    },
                    "range": [
                      3771,
                      3774
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3773,
                          3774
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 80
                          },
                          "start": {
                            "column": 79,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        3773,
                        3774
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 80
                        },
                        "start": {
                          "column": 79,
                          "line": 80
                        }
                      }
                    }
                  },
                  "range": [
                    3764,
                    3774
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 80
                    },
                    "start": {
                      "column": 70,
                      "line": 80
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 80
                      },
                      "start": {
                        "column": 87,
                        "line": 80
                      }
                    },
                    "range": [
                      3781,
                      3789
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        3783,
                        3789
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 80
                        },
                        "start": {
                          "column": 89,
                          "line": 80
                        }
                      }
                    }
                  },
                  "range": [
                    3776,
                    3789
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 80
                    },
                    "start": {
                      "column": 82,
                      "line": 80
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 107,
                    "line": 80
                  },
                  "start": {
                    "column": 97,
                    "line": 80
                  }
                },
                "range": [
                  3791,
                  3801
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    3794,
                    3801
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 80
                    },
                    "start": {
                      "column": 100,
                      "line": 80
                    }
                  }
                }
              },
              "range": [
                3763,
                3801
              ],
              "loc": {
                "end": {
                  "column": 107,
                  "line": 80
                },
                "start": {
                  "column": 69,
                  "line": 80
                }
              }
            }
          },
          "range": [
            3753,
            3801
          ],
          "loc": {
            "end": {
              "column": 107,
              "line": 80
            },
            "start": {
              "column": 59,
              "line": 80
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 117,
            "line": 80
          },
          "start": {
            "column": 108,
            "line": 80
          }
        },
        "range": [
          3802,
          3811
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            3804,
            3811
          ],
          "loc": {
            "end": {
              "column": 117,
              "line": 80
            },
            "start": {
              "column": 110,
              "line": 80
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 80
          },
          "start": {
            "column": 22,
            "line": 80
          }
        },
        "range": [
          3716,
          3719
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
                3717,
                3718
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 80
                },
                "start": {
                  "column": 23,
                  "line": 80
                }
              }
            },
            "out": false,
            "range": [
              3717,
              3718
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 80
              },
              "start": {
                "column": 23,
                "line": 80
              }
            }
          }
        ]
      },
      "range": [
        3694,
        3812
      ],
      "loc": {
        "end": {
          "column": 118,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
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
        "name": "isArray",
        "optional": false,
        "range": [
          3831,
          3838
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 82
          },
          "start": {
            "column": 17,
            "line": 82
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
                "column": 35,
                "line": 82
              },
              "start": {
                "column": 30,
                "line": 82
              }
            },
            "range": [
              3844,
              3849
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                3846,
                3849
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 82
                },
                "start": {
                  "column": 32,
                  "line": 82
                }
              }
            }
          },
          "range": [
            3839,
            3849
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 82
            },
            "start": {
              "column": 25,
              "line": 82
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 82
          },
          "start": {
            "column": 36,
            "line": 82
          }
        },
        "range": [
          3850,
          3879
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              3852,
              3857
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 82
              },
              "start": {
                "column": 38,
                "line": 82
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 82
              },
              "start": {
                "column": 47,
                "line": 82
              }
            },
            "range": [
              3861,
              3879
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    3870,
                    3877
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 82
                    },
                    "start": {
                      "column": 56,
                      "line": 82
                    }
                  }
                },
                "range": [
                  3870,
                  3879
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 82
                  },
                  "start": {
                    "column": 56,
                    "line": 82
                  }
                }
              },
              "range": [
                3861,
                3879
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 82
                },
                "start": {
                  "column": 47,
                  "line": 82
                }
              }
            }
          },
          "range": [
            3852,
            3879
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 82
            },
            "start": {
              "column": 38,
              "line": 82
            }
          }
        }
      },
      "range": [
        3814,
        3880
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
            "name": "DISALLOW_DECORATORS",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 84
                },
                "start": {
                  "column": 33,
                  "line": 84
                }
              },
              "range": [
                3915,
                3935
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeprecationOptions",
                  "optional": false,
                  "range": [
                    3917,
                    3935
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 84
                    },
                    "start": {
                      "column": 35,
                      "line": 84
                    }
                  }
                },
                "range": [
                  3917,
                  3935
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 84
                  },
                  "start": {
                    "column": 35,
                    "line": 84
                  }
                }
              }
            },
            "range": [
              3896,
              3935
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 84
              },
              "start": {
                "column": 14,
                "line": 84
              }
            }
          },
          "init": null,
          "range": [
            3896,
            3935
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 84
            },
            "start": {
              "column": 14,
              "line": 84
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        3882,
        3936
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        5619,
                        5620
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 112
                        },
                        "start": {
                          "column": 8,
                          "line": 112
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
                      "name": "DISALLOW_DECORATORS",
                      "optional": false,
                      "range": [
                        5622,
                        5641
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 112
                        },
                        "start": {
                          "column": 11,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      5619,
                      5641
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 112
                      },
                      "start": {
                        "column": 8,
                        "line": 112
                      }
                    }
                  }
                ],
                "range": [
                  5609,
                  5647
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 113
                  },
                  "start": {
                    "column": 15,
                    "line": 111
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            4722,
                            4723
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 97
                            },
                            "start": {
                              "column": 8,
                              "line": 97
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
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "range": [
                                        4809,
                                        4814
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 98
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 98
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "range": [
                                        4819,
                                        4828
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 98
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 98
                                        }
                                      }
                                    },
                                    "range": [
                                      4809,
                                      4828
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 98
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "range": [
                                          4846,
                                          4855
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 99
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 99
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "range": [
                                          4860,
                                          4869
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 99
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 99
                                          }
                                        }
                                      },
                                      "range": [
                                        4846,
                                        4869
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 99
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 99
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "range": [
                                            4879,
                                            4888
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 55,
                                              "line": 99
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 99
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isModifier",
                                          "optional": false,
                                          "range": [
                                            4890,
                                            4900
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 67,
                                              "line": 99
                                            },
                                            "start": {
                                              "column": 57,
                                              "line": 99
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "range": [
                                          4873,
                                          4878
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 45,
                                            "line": 99
                                          },
                                          "start": {
                                            "column": 40,
                                            "line": 99
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        4873,
                                        4901
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 68,
                                          "line": 99
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 99
                                        }
                                      }
                                    },
                                    "range": [
                                      4846,
                                      4901
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 68,
                                        "line": 99
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 99
                                      }
                                    }
                                  },
                                  "range": [
                                    4808,
                                    4902
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 99
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 98
                                    }
                                  }
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "range": [
                                        4919,
                                        4931
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 100
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 100
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "range": [
                                        4936,
                                        4945
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 100
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 100
                                        }
                                      }
                                    },
                                    "range": [
                                      4919,
                                      4945
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 100
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 100
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "range": [
                                            4958,
                                            4970
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 64,
                                              "line": 100
                                            },
                                            "start": {
                                              "column": 52,
                                              "line": 100
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "range": [
                                          4950,
                                          4957
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 51,
                                            "line": 100
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 100
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        4950,
                                        4971
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 65,
                                          "line": 100
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 100
                                        }
                                      }
                                    },
                                    "operator": "!",
                                    "prefix": true,
                                    "range": [
                                      4949,
                                      4971
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 65,
                                        "line": 100
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 100
                                      }
                                    }
                                  },
                                  "range": [
                                    4919,
                                    4971
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 65,
                                      "line": 100
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 100
                                    }
                                  }
                                },
                                "range": [
                                  4808,
                                  4972
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 98
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "||",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "range": [
                                      4989,
                                      5004
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 101
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 101
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "range": [
                                      5009,
                                      5018
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 101
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 101
                                      }
                                    }
                                  },
                                  "range": [
                                    4989,
                                    5018
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 101
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 101
                                    }
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "range": [
                                        5035,
                                        5050
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 74,
                                          "line": 101
                                        },
                                        "start": {
                                          "column": 59,
                                          "line": 101
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "range": [
                                      5022,
                                      5034
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 101
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 101
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    5022,
                                    5051
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 101
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 101
                                    }
                                  }
                                },
                                "range": [
                                  4989,
                                  5051
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 101
                                  }
                                }
                              },
                              "range": [
                                4808,
                                5052
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 101
                                },
                                "start": {
                                  "column": 12,
                                  "line": 98
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "range": [
                                    5069,
                                    5081
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 102
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 102
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "range": [
                                    5086,
                                    5095
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 102
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 102
                                    }
                                  }
                                },
                                "range": [
                                  5069,
                                  5095
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 102
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 102
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "range": [
                                      5114,
                                      5126
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 102
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 102
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "range": [
                                    5099,
                                    5113
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 102
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 102
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  5099,
                                  5127
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 102
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 102
                                  }
                                }
                              },
                              "range": [
                                5069,
                                5127
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 102
                                },
                                "start": {
                                  "column": 13,
                                  "line": 102
                                }
                              }
                            },
                            "range": [
                              4808,
                              5128
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 102
                              },
                              "start": {
                                "column": 12,
                                "line": 98
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "range": [
                                    4729,
                                    4738
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "range": [
                                    4740,
                                    4752
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "range": [
                                    4754,
                                    4769
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "range": [
                                    4771,
                                    4783
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "range": [
                                    4785,
                                    4790
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 71,
                                      "line": 97
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                4726,
                                4791
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 97
                                },
                                "start": {
                                  "column": 12,
                                  "line": 97
                                }
                              }
                            }
                          ],
                          "range": [
                            4725,
                            5128
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 102
                            },
                            "start": {
                              "column": 11,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          4722,
                          5128
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 102
                          },
                          "start": {
                            "column": 8,
                            "line": 97
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            5139,
                            5140
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 104
                            },
                            "start": {
                              "column": 8,
                              "line": 104
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
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "LogicalExpression",
                                  "operator": "&&",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "decorators",
                                        "optional": false,
                                        "range": [
                                          5231,
                                          5241
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 105
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 105
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "range": [
                                          5246,
                                          5255
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 105
                                          },
                                          "start": {
                                            "column": 28,
                                            "line": 105
                                          }
                                        }
                                      },
                                      "range": [
                                        5231,
                                        5255
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 105
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 105
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "decorators",
                                          "optional": false,
                                          "range": [
                                            5265,
                                            5275
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 57,
                                              "line": 105
                                            },
                                            "start": {
                                              "column": 47,
                                              "line": 105
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isDecorator",
                                          "optional": false,
                                          "range": [
                                            5277,
                                            5288
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 70,
                                              "line": 105
                                            },
                                            "start": {
                                              "column": 59,
                                              "line": 105
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "range": [
                                          5259,
                                          5264
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 46,
                                            "line": 105
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 105
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        5259,
                                        5289
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 71,
                                          "line": 105
                                        },
                                        "start": {
                                          "column": 41,
                                          "line": 105
                                        }
                                      }
                                    },
                                    "range": [
                                      5231,
                                      5289
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 71,
                                        "line": 105
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 105
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "LogicalExpression",
                                    "operator": "||",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "===",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "range": [
                                          5307,
                                          5316
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 106
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 106
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "range": [
                                          5321,
                                          5330
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 106
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 106
                                          }
                                        }
                                      },
                                      "range": [
                                        5307,
                                        5330
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 106
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 106
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "range": [
                                            5342,
                                            5351
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 57,
                                              "line": 106
                                            },
                                            "start": {
                                              "column": 48,
                                              "line": 106
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "range": [
                                          5334,
                                          5341
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 106
                                          },
                                          "start": {
                                            "column": 40,
                                            "line": 106
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        5334,
                                        5352
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 106
                                        },
                                        "start": {
                                          "column": 40,
                                          "line": 106
                                        }
                                      }
                                    },
                                    "range": [
                                      5307,
                                      5352
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 106
                                      }
                                    }
                                  },
                                  "range": [
                                    5230,
                                    5353
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 106
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 105
                                    }
                                  }
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "range": [
                                        5370,
                                        5382
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 107
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 107
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "range": [
                                        5387,
                                        5396
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 107
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 107
                                        }
                                      }
                                    },
                                    "range": [
                                      5370,
                                      5396
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "importClause",
                                        "optional": false,
                                        "range": [
                                          5415,
                                          5427
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 70,
                                            "line": 107
                                          },
                                          "start": {
                                            "column": 58,
                                            "line": 107
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isImportClause",
                                      "optional": false,
                                      "range": [
                                        5400,
                                        5414
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 57,
                                          "line": 107
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 107
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      5400,
                                      5428
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 71,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "range": [
                                    5370,
                                    5428
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 71,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 107
                                    }
                                  }
                                },
                                "range": [
                                  5230,
                                  5429
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 107
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 105
                                  }
                                }
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "!==",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "range": [
                                      5446,
                                      5461
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 108
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 108
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "range": [
                                      5466,
                                      5475
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 108
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 108
                                      }
                                    }
                                  },
                                  "range": [
                                    5446,
                                    5475
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 108
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 108
                                    }
                                  }
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "range": [
                                        5492,
                                        5507
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 74,
                                          "line": 108
                                        },
                                        "start": {
                                          "column": 59,
                                          "line": 108
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "range": [
                                      5479,
                                      5491
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 108
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 108
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    5479,
                                    5508
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 108
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 108
                                    }
                                  }
                                },
                                "range": [
                                  5446,
                                  5508
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 108
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 108
                                  }
                                }
                              },
                              "range": [
                                5230,
                                5509
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 108
                                },
                                "start": {
                                  "column": 12,
                                  "line": 105
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "range": [
                                    5526,
                                    5538
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 109
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 109
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "range": [
                                    5543,
                                    5552
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 109
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 109
                                    }
                                  }
                                },
                                "range": [
                                  5526,
                                  5552
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 109
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 109
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "range": [
                                      5571,
                                      5583
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 109
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 109
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "range": [
                                    5556,
                                    5570
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 109
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 109
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  5556,
                                  5584
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 109
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 109
                                  }
                                }
                              },
                              "range": [
                                5526,
                                5584
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 109
                                },
                                "start": {
                                  "column": 13,
                                  "line": 109
                                }
                              }
                            },
                            "range": [
                              5230,
                              5585
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 109
                              },
                              "start": {
                                "column": 12,
                                "line": 105
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorators",
                                  "optional": false,
                                  "range": [
                                    5146,
                                    5156
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 104
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "range": [
                                    5158,
                                    5167
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 104
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "range": [
                                    5169,
                                    5181
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 104
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "range": [
                                    5183,
                                    5198
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 67,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 104
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "range": [
                                    5200,
                                    5212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 69,
                                      "line": 104
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                5143,
                                5213
                              ],
                              "loc": {
                                "end": {
                                  "column": 82,
                                  "line": 104
                                },
                                "start": {
                                  "column": 12,
                                  "line": 104
                                }
                              }
                            }
                          ],
                          "range": [
                            5142,
                            5585
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 109
                            },
                            "start": {
                              "column": 11,
                              "line": 104
                            }
                          }
                        },
                        "range": [
                          5139,
                          5585
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 109
                          },
                          "start": {
                            "column": 8,
                            "line": 104
                          }
                        }
                      }
                    ],
                    "range": [
                      4712,
                      5592
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 110
                      },
                      "start": {
                        "column": 10,
                        "line": 96
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                4003,
                                4004
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 88
                                },
                                "start": {
                                  "column": 8,
                                  "line": 88
                                }
                              }
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                4004,
                                4319
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "range": [
                                            4247,
                                            4251
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 47,
                                              "line": 89
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 89
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "range": [
                                            4253,
                                            4262
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 58,
                                              "line": 89
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 89
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "range": [
                                            4264,
                                            4276
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 72,
                                              "line": 89
                                            },
                                            "start": {
                                              "column": 60,
                                              "line": 89
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "range": [
                                            4278,
                                            4293
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 89,
                                              "line": 89
                                            },
                                            "start": {
                                              "column": 74,
                                              "line": 89
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "range": [
                                            4295,
                                            4307
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 103,
                                              "line": 89
                                            },
                                            "start": {
                                              "column": 91,
                                              "line": 89
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "range": [
                                          4223,
                                          4246
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 89
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 89
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        4223,
                                        4308
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 104,
                                          "line": 89
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 89
                                        }
                                      }
                                    },
                                    "range": [
                                      4216,
                                      4309
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 105,
                                        "line": 89
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 89
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  4202,
                                  4319
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 90
                                  },
                                  "start": {
                                    "column": 207,
                                    "line": 88
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
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 88
                                      }
                                    },
                                    "range": [
                                      4009,
                                      4028
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "range": [
                                          4011,
                                          4028
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 88
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 88
                                          }
                                        }
                                      },
                                      "range": [
                                        4011,
                                        4028
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 88
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4005,
                                    4028
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 88
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 77,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 88
                                      }
                                    },
                                    "range": [
                                      4039,
                                      4072
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
                                                "name": "Modifier",
                                                "optional": false,
                                                "range": [
                                                  4050,
                                                  4058
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 63,
                                                    "line": 88
                                                  },
                                                  "start": {
                                                    "column": 55,
                                                    "line": 88
                                                  }
                                                }
                                              },
                                              "range": [
                                                4050,
                                                4058
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 63,
                                                  "line": 88
                                                },
                                                "start": {
                                                  "column": 55,
                                                  "line": 88
                                                }
                                              }
                                            },
                                            "range": [
                                              4050,
                                              4060
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 65,
                                                "line": 88
                                              },
                                              "start": {
                                                "column": 55,
                                                "line": 88
                                              }
                                            }
                                          },
                                          "range": [
                                            4041,
                                            4060
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 65,
                                              "line": 88
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 88
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4063,
                                            4072
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 77,
                                              "line": 88
                                            },
                                            "start": {
                                              "column": 68,
                                              "line": 88
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4041,
                                        4072
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 77,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 88
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4030,
                                    4072
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 77,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 88
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 117,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 91,
                                        "line": 88
                                      }
                                    },
                                    "range": [
                                      4086,
                                      4112
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ImportClause",
                                            "optional": false,
                                            "range": [
                                              4088,
                                              4100
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 105,
                                                "line": 88
                                              },
                                              "start": {
                                                "column": 93,
                                                "line": 88
                                              }
                                            }
                                          },
                                          "range": [
                                            4088,
                                            4100
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 105,
                                              "line": 88
                                            },
                                            "start": {
                                              "column": 93,
                                              "line": 88
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4103,
                                            4112
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 117,
                                              "line": 88
                                            },
                                            "start": {
                                              "column": 108,
                                              "line": 88
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4088,
                                        4112
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 117,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 93,
                                          "line": 88
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4074,
                                    4112
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 117,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 79,
                                      "line": 88
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 146,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 134,
                                        "line": 88
                                      }
                                    },
                                    "range": [
                                      4129,
                                      4141
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "range": [
                                          4131,
                                          4141
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 146,
                                            "line": 88
                                          },
                                          "start": {
                                            "column": 136,
                                            "line": 88
                                          }
                                        }
                                      },
                                      "range": [
                                        4131,
                                        4141
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 146,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 136,
                                          "line": 88
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4114,
                                    4141
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 146,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 119,
                                      "line": 88
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 186,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 160,
                                        "line": 88
                                      }
                                    },
                                    "range": [
                                      4155,
                                      4181
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "AssertClause",
                                            "optional": false,
                                            "range": [
                                              4157,
                                              4169
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 174,
                                                "line": 88
                                              },
                                              "start": {
                                                "column": 162,
                                                "line": 88
                                              }
                                            }
                                          },
                                          "range": [
                                            4157,
                                            4169
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 174,
                                              "line": 88
                                            },
                                            "start": {
                                              "column": 162,
                                              "line": 88
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4172,
                                            4181
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 186,
                                              "line": 88
                                            },
                                            "start": {
                                              "column": 177,
                                              "line": 88
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4157,
                                        4181
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 186,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 162,
                                          "line": 88
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4143,
                                    4181
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 186,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 148,
                                      "line": 88
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 206,
                                    "line": 88
                                  },
                                  "start": {
                                    "column": 187,
                                    "line": 88
                                  }
                                },
                                "range": [
                                  4182,
                                  4201
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "range": [
                                      4184,
                                      4201
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 206,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 189,
                                        "line": 88
                                      }
                                    }
                                  },
                                  "range": [
                                    4184,
                                    4201
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 206,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 189,
                                      "line": 88
                                    }
                                  }
                                }
                              },
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 90
                                },
                                "start": {
                                  "column": 9,
                                  "line": 88
                                }
                              }
                            },
                            "range": [
                              4003,
                              4319
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 90
                              },
                              "start": {
                                "column": 8,
                                "line": 88
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                4330,
                                4331
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 92
                                },
                                "start": {
                                  "column": 8,
                                  "line": 92
                                }
                              }
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                4331,
                                4693
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "range": [
                                            4621,
                                            4625
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 47,
                                              "line": 93
                                            },
                                            "start": {
                                              "column": 43,
                                              "line": 93
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "range": [
                                            4627,
                                            4636
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 58,
                                              "line": 93
                                            },
                                            "start": {
                                              "column": 49,
                                              "line": 93
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "range": [
                                            4638,
                                            4650
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 72,
                                              "line": 93
                                            },
                                            "start": {
                                              "column": 60,
                                              "line": 93
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "range": [
                                            4652,
                                            4667
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 89,
                                              "line": 93
                                            },
                                            "start": {
                                              "column": 74,
                                              "line": 93
                                            }
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "range": [
                                            4669,
                                            4681
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 103,
                                              "line": 93
                                            },
                                            "start": {
                                              "column": 91,
                                              "line": 93
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "range": [
                                          4597,
                                          4620
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 93
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 93
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        4597,
                                        4682
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 104,
                                          "line": 93
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 93
                                        }
                                      }
                                    },
                                    "range": [
                                      4590,
                                      4683
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 105,
                                        "line": 93
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 93
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  4576,
                                  4693
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 94
                                  },
                                  "start": {
                                    "column": 254,
                                    "line": 92
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
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 92
                                      }
                                    },
                                    "range": [
                                      4336,
                                      4355
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "range": [
                                          4338,
                                          4355
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 92
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 92
                                          }
                                        }
                                      },
                                      "range": [
                                        4338,
                                        4355
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 92
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 92
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4332,
                                    4355
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 92
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_decorators",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 80,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 92
                                      }
                                    },
                                    "range": [
                                      4368,
                                      4402
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
                                                "name": "Decorator",
                                                "optional": false,
                                                "range": [
                                                  4379,
                                                  4388
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 66,
                                                    "line": 92
                                                  },
                                                  "start": {
                                                    "column": 57,
                                                    "line": 92
                                                  }
                                                }
                                              },
                                              "range": [
                                                4379,
                                                4388
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 66,
                                                  "line": 92
                                                },
                                                "start": {
                                                  "column": 57,
                                                  "line": 92
                                                }
                                              }
                                            },
                                            "range": [
                                              4379,
                                              4390
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 68,
                                                "line": 92
                                              },
                                              "start": {
                                                "column": 57,
                                                "line": 92
                                              }
                                            }
                                          },
                                          "range": [
                                            4370,
                                            4390
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 68,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 48,
                                              "line": 92
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4393,
                                            4402
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 80,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 71,
                                              "line": 92
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4370,
                                        4402
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 80,
                                          "line": 92
                                        },
                                        "start": {
                                          "column": 48,
                                          "line": 92
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4357,
                                    4402
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 80,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 92
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 124,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 91,
                                        "line": 92
                                      }
                                    },
                                    "range": [
                                      4413,
                                      4446
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
                                                "name": "Modifier",
                                                "optional": false,
                                                "range": [
                                                  4424,
                                                  4432
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 110,
                                                    "line": 92
                                                  },
                                                  "start": {
                                                    "column": 102,
                                                    "line": 92
                                                  }
                                                }
                                              },
                                              "range": [
                                                4424,
                                                4432
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 110,
                                                  "line": 92
                                                },
                                                "start": {
                                                  "column": 102,
                                                  "line": 92
                                                }
                                              }
                                            },
                                            "range": [
                                              4424,
                                              4434
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 112,
                                                "line": 92
                                              },
                                              "start": {
                                                "column": 102,
                                                "line": 92
                                              }
                                            }
                                          },
                                          "range": [
                                            4415,
                                            4434
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 112,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 93,
                                              "line": 92
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4437,
                                            4446
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 124,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 115,
                                              "line": 92
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4415,
                                        4446
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 124,
                                          "line": 92
                                        },
                                        "start": {
                                          "column": 93,
                                          "line": 92
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4404,
                                    4446
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 124,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 82,
                                      "line": 92
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 164,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 138,
                                        "line": 92
                                      }
                                    },
                                    "range": [
                                      4460,
                                      4486
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ImportClause",
                                            "optional": false,
                                            "range": [
                                              4462,
                                              4474
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 152,
                                                "line": 92
                                              },
                                              "start": {
                                                "column": 140,
                                                "line": 92
                                              }
                                            }
                                          },
                                          "range": [
                                            4462,
                                            4474
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 152,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 140,
                                              "line": 92
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4477,
                                            4486
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 164,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 155,
                                              "line": 92
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4462,
                                        4486
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 164,
                                          "line": 92
                                        },
                                        "start": {
                                          "column": 140,
                                          "line": 92
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4448,
                                    4486
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 164,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 126,
                                      "line": 92
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 193,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 181,
                                        "line": 92
                                      }
                                    },
                                    "range": [
                                      4503,
                                      4515
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "range": [
                                          4505,
                                          4515
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 193,
                                            "line": 92
                                          },
                                          "start": {
                                            "column": 183,
                                            "line": 92
                                          }
                                        }
                                      },
                                      "range": [
                                        4505,
                                        4515
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 193,
                                          "line": 92
                                        },
                                        "start": {
                                          "column": 183,
                                          "line": 92
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4488,
                                    4515
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 193,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 166,
                                      "line": 92
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 233,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 207,
                                        "line": 92
                                      }
                                    },
                                    "range": [
                                      4529,
                                      4555
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "AssertClause",
                                            "optional": false,
                                            "range": [
                                              4531,
                                              4543
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 221,
                                                "line": 92
                                              },
                                              "start": {
                                                "column": 209,
                                                "line": 92
                                              }
                                            }
                                          },
                                          "range": [
                                            4531,
                                            4543
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 221,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 209,
                                              "line": 92
                                            }
                                          }
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "range": [
                                            4546,
                                            4555
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 233,
                                              "line": 92
                                            },
                                            "start": {
                                              "column": 224,
                                              "line": 92
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        4531,
                                        4555
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 233,
                                          "line": 92
                                        },
                                        "start": {
                                          "column": 209,
                                          "line": 92
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4517,
                                    4555
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 233,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 195,
                                      "line": 92
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 253,
                                    "line": 92
                                  },
                                  "start": {
                                    "column": 234,
                                    "line": 92
                                  }
                                },
                                "range": [
                                  4556,
                                  4575
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "range": [
                                      4558,
                                      4575
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 253,
                                        "line": 92
                                      },
                                      "start": {
                                        "column": 236,
                                        "line": 92
                                      }
                                    }
                                  },
                                  "range": [
                                    4558,
                                    4575
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 253,
                                      "line": 92
                                    },
                                    "start": {
                                      "column": 236,
                                      "line": 92
                                    }
                                  }
                                }
                              },
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 94
                                },
                                "start": {
                                  "column": 9,
                                  "line": 92
                                }
                              }
                            },
                            "range": [
                              4330,
                              4693
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 94
                              },
                              "start": {
                                "column": 8,
                                "line": 92
                              }
                            }
                          }
                        ],
                        "range": [
                          3993,
                          4700
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 95
                          },
                          "start": {
                            "column": 14,
                            "line": 87
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"updateImportDeclaration\"",
                            "value": "updateImportDeclaration",
                            "range": [
                              3952,
                              3977
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 86
                              },
                              "start": {
                                "column": 14,
                                "line": 86
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "buildOverload",
                          "optional": false,
                          "range": [
                            3938,
                            3951
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 86
                            },
                            "start": {
                              "column": 0,
                              "line": 86
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          3938,
                          3978
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 86
                          },
                          "start": {
                            "column": 0,
                            "line": 86
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overload",
                        "optional": false,
                        "range": [
                          3984,
                          3992
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 87
                          },
                          "start": {
                            "column": 5,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        3938,
                        3992
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 87
                        },
                        "start": {
                          "column": 0,
                          "line": 86
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3938,
                      4701
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 95
                      },
                      "start": {
                        "column": 0,
                        "line": 86
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bind",
                    "optional": false,
                    "range": [
                      4707,
                      4711
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 96
                      },
                      "start": {
                        "column": 5,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    3938,
                    4711
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 96
                    },
                    "start": {
                      "column": 0,
                      "line": 86
                    }
                  }
                },
                "optional": false,
                "range": [
                  3938,
                  5593
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 110
                  },
                  "start": {
                    "column": 0,
                    "line": 86
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deprecate",
                "optional": false,
                "range": [
                  5599,
                  5608
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 111
                  },
                  "start": {
                    "column": 5,
                    "line": 111
                  }
                }
              },
              "range": [
                3938,
                5608
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 111
                },
                "start": {
                  "column": 0,
                  "line": 86
                }
              }
            },
            "optional": false,
            "range": [
              3938,
              5648
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 113
              },
              "start": {
                "column": 0,
                "line": 86
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "finish",
            "optional": false,
            "range": [
              5654,
              5660
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 114
              },
              "start": {
                "column": 5,
                "line": 114
              }
            }
          },
          "range": [
            3938,
            5660
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 114
            },
            "start": {
              "column": 0,
              "line": 86
            }
          }
        },
        "optional": false,
        "range": [
          3938,
          5662
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 114
          },
          "start": {
            "column": 0,
            "line": 86
          }
        }
      },
      "range": [
        3938,
        5663
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 86
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
            "name": "modifiers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 117
                },
                "start": {
                  "column": 23,
                  "line": 117
                }
              },
              "range": [
                5689,
                5733
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
                          "name": "Modifier",
                          "optional": false,
                          "range": [
                            5700,
                            5708
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 117
                            },
                            "start": {
                              "column": 34,
                              "line": 117
                            }
                          }
                        },
                        "range": [
                          5700,
                          5708
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 117
                          },
                          "start": {
                            "column": 34,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        5700,
                        5710
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 117
                        },
                        "start": {
                          "column": 34,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      5691,
                      5710
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 117
                      },
                      "start": {
                        "column": 25,
                        "line": 117
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
                          "name": "Decorator",
                          "optional": false,
                          "range": [
                            5722,
                            5731
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 117
                            },
                            "start": {
                              "column": 56,
                              "line": 117
                            }
                          }
                        },
                        "range": [
                          5722,
                          5731
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 117
                          },
                          "start": {
                            "column": 56,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        5722,
                        5733
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 117
                        },
                        "start": {
                          "column": 56,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      5713,
                      5733
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 117
                      },
                      "start": {
                        "column": 47,
                        "line": 117
                      }
                    }
                  }
                ],
                "range": [
                  5691,
                  5733
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 117
                  },
                  "start": {
                    "column": 25,
                    "line": 117
                  }
                }
              }
            },
            "range": [
              5680,
              5733
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 117
              },
              "start": {
                "column": 14,
                "line": 117
              }
            }
          },
          "init": null,
          "range": [
            5680,
            5733
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 117
            },
            "start": {
              "column": 14,
              "line": 117
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        5666,
        5734
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 117
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "range": [
                    5763,
                    5772
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 120
                    },
                    "start": {
                      "column": 10,
                      "line": 120
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isModifier",
                  "optional": false,
                  "range": [
                    5774,
                    5784
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 120
                    },
                    "start": {
                      "column": 21,
                      "line": 120
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "range": [
                  5757,
                  5762
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 120
                  },
                  "start": {
                    "column": 4,
                    "line": 120
                  }
                }
              },
              "optional": false,
              "range": [
                5757,
                5785
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 120
                },
                "start": {
                  "column": 4,
                  "line": 120
                }
              }
            },
            "range": [
              5757,
              5786
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "range": [
                    5797,
                    5806
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 121
                    },
                    "start": {
                      "column": 10,
                      "line": 121
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isDecorator",
                  "optional": false,
                  "range": [
                    5808,
                    5819
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 121
                    },
                    "start": {
                      "column": 21,
                      "line": 121
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "range": [
                  5791,
                  5796
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 121
                  },
                  "start": {
                    "column": 4,
                    "line": 121
                  }
                }
              },
              "optional": false,
              "range": [
                5791,
                5820
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 121
                },
                "start": {
                  "column": 4,
                  "line": 121
                }
              }
            },
            "range": [
              5791,
              5821
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 121
              }
            }
          }
        ],
        "range": [
          5751,
          5823
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 122
          },
          "start": {
            "column": 15,
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
        "name": "foo",
        "optional": false,
        "range": [
          5745,
          5748
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 119
          },
          "start": {
            "column": 9,
            "line": 119
          }
        }
      },
      "params": [],
      "range": [
        5736,
        5823
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 123
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
