__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    388
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "range": [
          35,
          43
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
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
                78,
                82
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 3
                },
                "start": {
                  "column": 56,
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
                  "column": 66,
                  "line": 3
                },
                "start": {
                  "column": 60,
                  "line": 3
                }
              },
              "range": [
                82,
                88
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "range": [
                    84,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 3
                    },
                    "start": {
                      "column": 62,
                      "line": 3
                    }
                  }
                },
                "range": [
                  84,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 3
                  },
                  "start": {
                    "column": 62,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              75,
              88
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 3
              },
              "start": {
                "column": 53,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 87,
              "line": 3
            },
            "start": {
              "column": 68,
              "line": 3
            }
          },
          "range": [
            90,
            109
          ],
          "typeAnnotation": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 3
                    },
                    "start": {
                      "column": 76,
                      "line": 3
                    }
                  },
                  "range": [
                    98,
                    103
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Out",
                      "optional": false,
                      "range": [
                        100,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 3
                        },
                        "start": {
                          "column": 78,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      100,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 3
                      },
                      "start": {
                        "column": 78,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  94,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 3
                  },
                  "start": {
                    "column": 72,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 87,
                  "line": 3
                },
                "start": {
                  "column": 83,
                  "line": 3
                }
              },
              "range": [
                105,
                109
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    108,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 3
                    },
                    "start": {
                      "column": 86,
                      "line": 3
                    }
                  }
                },
                "range": [
                  108,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 3
                  },
                  "start": {
                    "column": 86,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              93,
              109
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 3
              },
              "start": {
                "column": 71,
                "line": 3
              }
            }
          }
        },
        "range": [
          74,
          109
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 3
          },
          "start": {
            "column": 52,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 3
          }
        },
        "range": [
          43,
          71
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
                  57,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                57,
                62
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "range": [
                44,
                48
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              44,
              62
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
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
              "name": "Out",
              "optional": false,
              "range": [
                64,
                67
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              64,
              67
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
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
              "name": "R",
              "optional": false,
              "range": [
                69,
                70
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
            "out": false,
            "range": [
              69,
              70
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
        ]
      },
      "range": [
        22,
        110
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 3
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
        "name": "factory",
        "optional": false,
        "range": [
          128,
          135
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 114,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        },
        "range": [
          142,
          225
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 4
                  },
                  "start": {
                    "column": 65,
                    "line": 4
                  }
                },
                "range": [
                  176,
                  200
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      186,
                      200
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Args",
                          "optional": false,
                          "range": [
                            187,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 4
                            },
                            "start": {
                              "column": 76,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          187,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 4
                          },
                          "start": {
                            "column": 76,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Out",
                          "optional": false,
                          "range": [
                            193,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 4
                            },
                            "start": {
                              "column": 82,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          193,
                          196
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 4
                          },
                          "start": {
                            "column": 82,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            198,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 4
                            },
                            "start": {
                              "column": 87,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          198,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 4
                          },
                          "start": {
                            "column": 87,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 4
                      },
                      "start": {
                        "column": 75,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "range": [
                      178,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 4
                      },
                      "start": {
                        "column": 67,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    178,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 4
                    },
                    "start": {
                      "column": 67,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                168,
                200
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 4
                },
                "start": {
                  "column": 57,
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
                "column": 91,
                "line": 4
              }
            },
            "range": [
              202,
              225
            ],
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
                      209,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 102,
                        "line": 4
                      },
                      "start": {
                        "column": 98,
                        "line": 4
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 4
                      },
                      "start": {
                        "column": 102,
                        "line": 4
                      }
                    },
                    "range": [
                      213,
                      219
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "range": [
                          215,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 4
                          },
                          "start": {
                            "column": 104,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        215,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 4
                        },
                        "start": {
                          "column": 104,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    206,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 108,
                      "line": 4
                    },
                    "start": {
                      "column": 95,
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
                    "column": 110,
                    "line": 4
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
                    "name": "R",
                    "optional": false,
                    "range": [
                      224,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 114,
                        "line": 4
                      },
                      "start": {
                        "column": 113,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    224,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 114,
                      "line": 4
                    },
                    "start": {
                      "column": 113,
                      "line": 4
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
                  "column": 114,
                  "line": 4
                },
                "start": {
                  "column": 94,
                  "line": 4
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "loc": {
              "end": {
                "column": 56,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            },
            "range": [
              144,
              167
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
                      158,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    158,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "range": [
                    145,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                },
                "out": false,
                "range": [
                  145,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 4
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
                  "name": "R",
                  "optional": false,
                  "range": [
                    165,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 4
                    },
                    "start": {
                      "column": 54,
                      "line": 4
                    }
                  }
                },
                "out": false,
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 4
                  },
                  "start": {
                    "column": 54,
                    "line": 4
                  }
                }
              }
            ]
          },
          "range": [
            144,
            225
          ],
          "loc": {
            "end": {
              "column": 114,
              "line": 4
            },
            "start": {
              "column": 33,
              "line": 4
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 4
          },
          "start": {
            "column": 24,
            "line": 4
          }
        },
        "range": [
          135,
          140
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Out",
              "optional": false,
              "range": [
                136,
                139
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              136,
              139
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 25,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        111,
        226
      ],
      "loc": {
        "end": {
          "column": 115,
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
            "name": "make",
            "optional": false,
            "range": [
              234,
              238
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "factory",
              "optional": false,
              "range": [
                241,
                248
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                248,
                277
              ],
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "range": [
                            250,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
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
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          },
                          "range": [
                            252,
                            260
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              254,
                              260
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
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
                          250,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "age",
                          "optional": false,
                          "range": [
                            262,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 6
                            },
                            "start": {
                              "column": 34,
                              "line": 6
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
                              "line": 6
                            },
                            "start": {
                              "column": 37,
                              "line": 6
                            }
                          },
                          "range": [
                            265,
                            273
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              267,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 6
                              },
                              "start": {
                                "column": 39,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          262,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 6
                          },
                          "start": {
                            "column": 34,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      249,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    249,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "range": [
              241,
              279
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          },
          "range": [
            234,
            279
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        228,
        280
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "usersOverAge",
            "optional": false,
            "range": [
              288,
              300
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
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
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BinaryExpression",
                                "operator": ">=",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "user",
                                    "optional": false,
                                    "range": [
                                      366,
                                      370
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "age",
                                    "optional": false,
                                    "range": [
                                      371,
                                      374
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    366,
                                    374
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 9
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "range": [
                                    378,
                                    381
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  366,
                                  381
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 9
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
                                  "name": "user",
                                  "optional": false,
                                  "range": [
                                    358,
                                    362
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "range": [
                                358,
                                381
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 9
                                },
                                "start": {
                                  "column": 23,
                                  "line": 9
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
                              "name": "data",
                              "optional": false,
                              "range": [
                                346,
                                350
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 9
                                },
                                "start": {
                                  "column": 11,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "range": [
                                351,
                                357
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 9
                                },
                                "start": {
                                  "column": 16,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              346,
                              357
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 9
                              },
                              "start": {
                                "column": 11,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            346,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 9
                            },
                            "start": {
                              "column": 11,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          339,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 9
                          },
                          "start": {
                            "column": 4,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      333,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 10
                      },
                      "start": {
                        "column": 51,
                        "line": 8
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
                      "name": "data",
                      "optional": false,
                      "range": [
                        325,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 8
                        },
                        "start": {
                          "column": 43,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    325,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 10
                    },
                    "start": {
                      "column": 43,
                      "line": 8
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
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 8
                        },
                        "start": {
                          "column": 30,
                          "line": 8
                        }
                      },
                      "range": [
                        312,
                        320
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          314,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 8
                          },
                          "start": {
                            "column": 32,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      309,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  308,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 10
                  },
                  "start": {
                    "column": 26,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "make",
              "optional": false,
              "range": [
                303,
                307
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              303,
              386
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          },
          "range": [
            288,
            386
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        282,
        387
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
