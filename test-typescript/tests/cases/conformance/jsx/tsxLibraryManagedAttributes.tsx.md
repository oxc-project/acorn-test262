__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4902
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Defaultize",
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
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  57,
                  88
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
                        "name": "TProps",
                        "optional": false,
                        "range": [
                          64,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 27,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        64,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      58,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDefaults",
                        "optional": false,
                        "range": [
                          78,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 2
                          },
                          "start": {
                            "column": 41,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        78,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 2
                        },
                        "start": {
                          "column": 41,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      72,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
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
                    "column": 20,
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
                  50,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              },
              "range": [
                50,
                88
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "nameType": null,
            "optional": true,
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
                    99,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 2
                    },
                    "start": {
                      "column": 62,
                      "line": 2
                    }
                  }
                },
                "range": [
                  99,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 62,
                    "line": 2
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "range": [
                    92,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 2
                    },
                    "start": {
                      "column": 55,
                      "line": 2
                    }
                  }
                },
                "range": [
                  92,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 55,
                    "line": 2
                  }
                }
              },
              "range": [
                92,
                101
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 2
                },
                "start": {
                  "column": 55,
                  "line": 2
                }
              }
            },
            "range": [
              43,
              102
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  123,
                  154
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
                        "name": "TProps",
                        "optional": false,
                        "range": [
                          130,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 3
                          },
                          "start": {
                            "column": 27,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        130,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 27,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      124,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDefaults",
                        "optional": false,
                        "range": [
                          144,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 3
                          },
                          "start": {
                            "column": 41,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        144,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 3
                        },
                        "start": {
                          "column": 41,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      138,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "range": [
                  116,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              },
              "range": [
                116,
                154
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
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
                    164,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 3
                    },
                    "start": {
                      "column": 61,
                      "line": 3
                    }
                  }
                },
                "range": [
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 3
                  },
                  "start": {
                    "column": 61,
                    "line": 3
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "range": [
                    157,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 3
                    },
                    "start": {
                      "column": 54,
                      "line": 3
                    }
                  }
                },
                "range": [
                  157,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 3
                  },
                  "start": {
                    "column": 54,
                    "line": 3
                  }
                }
              },
              "range": [
                157,
                166
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 54,
                  "line": 3
                }
              }
            },
            "range": [
              109,
              167
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                181,
                192
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDefaults",
                    "optional": false,
                    "range": [
                      182,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    182,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "range": [
                174,
                181
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              174,
              192
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          }
        ],
        "range": [
          41,
          192
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          34
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TProps",
              "optional": false,
              "range": [
                16,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
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
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
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
              "name": "TDefaults",
              "optional": false,
              "range": [
                24,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              24,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        193
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 4
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
        "name": "InferredPropTypes",
        "optional": false,
        "range": [
          200,
          217
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
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
              "name": "P",
              "optional": false,
              "range": [
                236,
                237
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 41,
                  "line": 6
                }
              }
            },
            "range": [
              236,
              237
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 41,
                "line": 6
              }
            }
          },
          "range": [
            230,
            237
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 6
            },
            "start": {
              "column": 35,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            225,
            226
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
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
                "name": "K",
                "optional": false,
                "range": [
                  242,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 6
                  },
                  "start": {
                    "column": 47,
                    "line": 6
                  }
                }
              },
              "range": [
                242,
                243
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 6
                },
                "start": {
                  "column": 47,
                  "line": 6
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
                  240,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 6
                  }
                }
              },
              "range": [
                240,
                241
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 45,
                  "line": 6
                }
              }
            },
            "range": [
              240,
              244
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 6
              },
              "start": {
                "column": 45,
                "line": 6
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                268,
                286
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
                      "name": "T",
                      "optional": false,
                      "range": [
                        275,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 6
                        },
                        "start": {
                          "column": 80,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      275,
                      276
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 6
                      },
                      "start": {
                        "column": 80,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    269,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 6
                    },
                    "start": {
                      "column": 74,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        284,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 6
                        },
                        "start": {
                          "column": 89,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      284,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 6
                      },
                      "start": {
                        "column": 89,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    278,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 6
                    },
                    "start": {
                      "column": 83,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 6
                },
                "start": {
                  "column": 73,
                  "line": 6
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropTypeChecker",
              "optional": false,
              "range": [
                253,
                268
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 6
                },
                "start": {
                  "column": 58,
                  "line": 6
                }
              }
            },
            "range": [
              253,
              286
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 6
              },
              "start": {
                "column": 58,
                "line": 6
              }
            }
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              333,
              335
            ],
            "loc": {
              "end": {
                "column": 140,
                "line": 6
              },
              "start": {
                "column": 138,
                "line": 6
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "checkedType",
                "optional": false,
                "range": [
                  318,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 134,
                    "line": 6
                  },
                  "start": {
                    "column": 123,
                    "line": 6
                  }
                }
              },
              "range": [
                311,
                329
              ],
              "loc": {
                "end": {
                  "column": 134,
                  "line": 6
                },
                "start": {
                  "column": 116,
                  "line": 6
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  304,
                  310
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
                        305,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 111,
                          "line": 6
                        },
                        "start": {
                          "column": 110,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      305,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 111,
                        "line": 6
                      },
                      "start": {
                        "column": 110,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        308,
                        309
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 6
                        },
                        "start": {
                          "column": 113,
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
                        "column": 114,
                        "line": 6
                      },
                      "start": {
                        "column": 113,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 6
                  },
                  "start": {
                    "column": 109,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropTypeChecker",
                "optional": false,
                "range": [
                  289,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 6
                  },
                  "start": {
                    "column": 94,
                    "line": 6
                  }
                }
              },
              "range": [
                289,
                310
              ],
              "loc": {
                "end": {
                  "column": 115,
                  "line": 6
                },
                "start": {
                  "column": 94,
                  "line": 6
                }
              }
            },
            "range": [
              289,
              330
            ],
            "loc": {
              "end": {
                "column": 135,
                "line": 6
              },
              "start": {
                "column": 94,
                "line": 6
              }
            }
          },
          "range": [
            240,
            335
          ],
          "loc": {
            "end": {
              "column": 140,
              "line": 6
            },
            "start": {
              "column": 45,
              "line": 6
            }
          }
        },
        "range": [
          223,
          336
        ],
        "loc": {
          "end": {
            "column": 141,
            "line": 6
          },
          "start": {
            "column": 28,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 6
          },
          "start": {
            "column": 22,
            "line": 6
          }
        },
        "range": [
          217,
          220
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                218,
                219
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              218,
              219
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        195,
        337
      ],
      "loc": {
        "end": {
          "column": 142,
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
            "name": "checkedType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 8
                },
                "start": {
                  "column": 25,
                  "line": 8
                }
              },
              "range": [
                364,
                379
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    373,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 8
                    },
                    "start": {
                      "column": 34,
                      "line": 8
                    }
                  }
                },
                "range": [
                  366,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              353,
              379
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            353,
            379
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        339,
        380
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          429,
          649
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  },
                  "range": [
                    441,
                    446
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      443,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  436,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  },
                  "range": [
                    456,
                    464
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      458,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 27,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  448,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "componentName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 10
                    },
                    "start": {
                      "column": 48,
                      "line": 10
                    }
                  },
                  "range": [
                    479,
                    487
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      481,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 10
                      },
                      "start": {
                        "column": 50,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  466,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "location",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 10
                    },
                    "start": {
                      "column": 66,
                      "line": 10
                    }
                  },
                  "range": [
                    497,
                    502
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      499,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 10
                      },
                      "start": {
                        "column": 68,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  489,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 10
                  },
                  "start": {
                    "column": 58,
                    "line": 10
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propFullName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 10
                    },
                    "start": {
                      "column": 85,
                      "line": 10
                    }
                  },
                  "range": [
                    516,
                    524
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      518,
                      524
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 10
                      },
                      "start": {
                        "column": 87,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  504,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 10
                  },
                  "start": {
                    "column": 73,
                    "line": 10
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 103,
                  "line": 10
                },
                "start": {
                  "column": 94,
                  "line": 10
                }
              },
              "range": [
                525,
                534
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  527,
                  534
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 10
                  },
                  "start": {
                    "column": 96,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              435,
              535
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRequired",
              "optional": false,
              "range": [
                540,
                550
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              },
              "range": [
                550,
                576
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    567,
                    576
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          568,
                          569
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 11
                          },
                          "start": {
                            "column": 32,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        568,
                        569
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 32,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          571,
                          575
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 11
                          },
                          "start": {
                            "column": 35,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        571,
                        575
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 11
                        },
                        "start": {
                          "column": 35,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 11
                    },
                    "start": {
                      "column": 31,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypeChecker",
                  "optional": false,
                  "range": [
                    552,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  552,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              540,
              577
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "checkedType",
              "optional": false,
              "range": [
                583,
                594
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
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
                  "column": 68,
                  "line": 12
                },
                "start": {
                  "column": 17,
                  "line": 12
                }
              },
              "range": [
                595,
                646
              ],
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TRequired",
                    "optional": false,
                    "range": [
                      597,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 19,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    597,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 19,
                      "line": 12
                    }
                  }
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      615,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 12
                      },
                      "start": {
                        "column": 37,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    615,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 12
                    },
                    "start": {
                      "column": 37,
                      "line": 12
                    }
                  }
                },
                "falseType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          626,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 48,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        626,
                        627
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 48,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        630,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 12
                        },
                        "start": {
                          "column": 52,
                          "line": 12
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        637,
                        646
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 12
                        },
                        "start": {
                          "column": 59,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    626,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 12
                    },
                    "start": {
                      "column": 48,
                      "line": 12
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      622,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 12
                      },
                      "start": {
                        "column": 44,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    622,
                    623
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 12
                    },
                    "start": {
                      "column": 44,
                      "line": 12
                    }
                  }
                },
                "range": [
                  597,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 12
                  },
                  "start": {
                    "column": 19,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              582,
              647
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 48,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropTypeChecker",
        "optional": false,
        "range": [
          391,
          406
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 9
          }
        },
        "range": [
          406,
          428
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
                407,
                408
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 26,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              407,
              408
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  422,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 41,
                    "line": 9
                  }
                }
              },
              "range": [
                422,
                427
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 41,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRequired",
              "optional": false,
              "range": [
                410,
                419
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 9
                },
                "start": {
                  "column": 29,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              410,
              427
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 29,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        381,
        649
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              685,
              730
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 16
                        },
                        "start": {
                          "column": 23,
                          "line": 16
                        }
                      },
                      "range": [
                        704,
                        729
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            721,
                            729
                          ],
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "range": [
                                722,
                                728
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 16
                                },
                                "start": {
                                  "column": 41,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 16
                            },
                            "start": {
                              "column": 40,
                              "line": 16
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "range": [
                            706,
                            721
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 16
                            },
                            "start": {
                              "column": 25,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          706,
                          729
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 16
                          },
                          "start": {
                            "column": 25,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      698,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    698,
                    729
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                692,
                730
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 49,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              735,
              780
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 17
                        },
                        "start": {
                          "column": 23,
                          "line": 17
                        }
                      },
                      "range": [
                        754,
                        779
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            771,
                            779
                          ],
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                772,
                                778
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 17
                                },
                                "start": {
                                  "column": 41,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 17
                            },
                            "start": {
                              "column": 40,
                              "line": 17
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "range": [
                            756,
                            771
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 17
                            },
                            "start": {
                              "column": 25,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          756,
                          779
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 17
                          },
                          "start": {
                            "column": 25,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      748,
                      779
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    748,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                742,
                780
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 49,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              785,
              831
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 18
                        },
                        "start": {
                          "column": 21,
                          "line": 18
                        }
                      },
                      "range": [
                        802,
                        830
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            819,
                            830
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactNode",
                                "optional": false,
                                "range": [
                                  820,
                                  829
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                820,
                                829
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 18
                                },
                                "start": {
                                  "column": 39,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 18
                            },
                            "start": {
                              "column": 38,
                              "line": 18
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "range": [
                            804,
                            819
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 18
                            },
                            "start": {
                              "column": 23,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          804,
                          830
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 18
                          },
                          "start": {
                            "column": 23,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      798,
                      830
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    798,
                    830
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                792,
                831
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 50,
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
          679,
          833
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 28,
            "line": 15
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          669,
          678
        ],
        "decorators": [],
        "name": "PropTypes",
        "optional": false,
        "loc": {
          "end": {
            "column": 27,
            "line": 15
          },
          "start": {
            "column": 18,
            "line": 15
          }
        }
      },
      "kind": "namespace",
      "range": [
        651,
        833
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
        "name": "ReactNode",
        "optional": false,
        "range": [
          840,
          849
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              852,
              858
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            }
          },
          {
            "type": "TSNumberKeyword",
            "range": [
              861,
              867
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 26,
                "line": 21
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                884,
                892
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    885,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 21
                    },
                    "start": {
                      "column": 50,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    889,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 21
                    },
                    "start": {
                      "column": 54,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 21
                },
                "start": {
                  "column": 49,
                  "line": 21
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactComponent",
              "optional": false,
              "range": [
                870,
                884
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 21
                },
                "start": {
                  "column": 35,
                  "line": 21
                }
              }
            },
            "range": [
              870,
              892
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 21
              },
              "start": {
                "column": 35,
                "line": 21
              }
            }
          }
        ],
        "range": [
          852,
          892
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        }
      },
      "range": [
        835,
        893
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          936,
          1073
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                942,
                953
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                953,
                964
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 24
                      },
                      "start": {
                        "column": 21,
                        "line": 24
                      }
                    },
                    "range": [
                      959,
                      962
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          961,
                          962
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 24
                          },
                          "start": {
                            "column": 23,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        961,
                        962
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 24
                        },
                        "start": {
                          "column": 23,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    954,
                    962
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 16,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              }
            },
            "range": [
              942,
              964
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "range": [
                969,
                974
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                  "column": 48,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              },
              "range": [
                974,
                1013
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        976,
                        977
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      976,
                      977
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        988,
                        1013
                      ],
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "range": [
                                  990,
                                  998
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 25
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
                                    "column": 46,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 25
                                  }
                                },
                                "range": [
                                  998,
                                  1011
                                ],
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ReactNode",
                                      "optional": false,
                                      "range": [
                                        1000,
                                        1009
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      1000,
                                      1009
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    1000,
                                    1011
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 25
                                    }
                                  }
                                }
                              },
                              "range": [
                                990,
                                1011
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 25
                                },
                                "start": {
                                  "column": 25,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            989,
                            1012
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 25
                            },
                            "start": {
                              "column": 24,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 25
                        },
                        "start": {
                          "column": 23,
                          "line": 25
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "range": [
                        980,
                        988
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      980,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  976,
                  1013
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 25
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              }
            },
            "value": null,
            "range": [
              969,
              1014
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "range": [
                1019,
                1027
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1027,
                1046
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 26,
                        "line": 26
                      },
                      "start": {
                        "column": 14,
                        "line": 26
                      }
                    },
                    "range": [
                      1029,
                      1041
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1038,
                          1041
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                1039,
                                1040
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 26
                                },
                                "start": {
                                  "column": 24,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              1039,
                              1040
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 26
                              },
                              "start": {
                                "column": 24,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 26
                          },
                          "start": {
                            "column": 23,
                            "line": 26
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "range": [
                          1031,
                          1038
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 26
                          },
                          "start": {
                            "column": 16,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        1031,
                        1041
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 26
                        },
                        "start": {
                          "column": 16,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    1028,
                    1041
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 26
                  },
                  "start": {
                    "column": 27,
                    "line": 26
                  }
                },
                "range": [
                  1042,
                  1045
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      1044,
                      1045
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 26
                      },
                      "start": {
                        "column": 29,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    1044,
                    1045
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 26
                    },
                    "start": {
                      "column": 29,
                      "line": 26
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 31,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "range": [
              1019,
              1046
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                1051,
                1057
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1057,
                1071
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
                  }
                },
                "range": [
                  1059,
                  1070
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "range": [
                      1061,
                      1070
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 27
                      },
                      "start": {
                        "column": 14,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    1061,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 10,
                  "line": 27
                }
              }
            },
            "range": [
              1051,
              1071
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 41,
            "line": 23
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          909,
          923
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 23
          },
          "start": {
            "column": 14,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 23
          },
          "start": {
            "column": 28,
            "line": 23
          }
        },
        "range": [
          923,
          935
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                926,
                928
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 31,
                  "line": 23
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
                924,
                925
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 23
                },
                "start": {
                  "column": 29,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              924,
              928
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 29,
                "line": 23
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                932,
                934
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 37,
                  "line": 23
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                930,
                931
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 23
                },
                "start": {
                  "column": 35,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              930,
              934
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 35,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        895,
        1073
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1144,
                1146
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 31
                },
                "start": {
                  "column": 45,
                  "line": 31
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
                  "name": "ReactComponent",
                  "optional": false,
                  "range": [
                    1129,
                    1143
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 31
                    },
                    "start": {
                      "column": 30,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1129,
                  1143
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 31
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                1113,
                1120
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 31
                }
              }
            },
            "range": [
              1103,
              1146
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1179,
                1181
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 32
                },
                "start": {
                  "column": 32,
                  "line": 32
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "range": [
                1161,
                1178
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 32
                },
                "start": {
                  "column": 14,
                  "line": 32
                }
              }
            },
            "range": [
              1151,
              1181
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LibraryManagedAttributes",
              "optional": false,
              "range": [
                1191,
                1215
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
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
                  "name": "TComponent",
                  "optional": false,
                  "range": [
                    1246,
                    1256
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1246,
                  1256
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultProps",
                      "optional": false,
                      "range": [
                        1267,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 34
                        },
                        "start": {
                          "column": 29,
                          "line": 34
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
                          "column": 50,
                          "line": 34
                        },
                        "start": {
                          "column": 41,
                          "line": 34
                        }
                      },
                      "range": [
                        1279,
                        1288
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
                            "name": "D",
                            "optional": false,
                            "range": [
                              1287,
                              1288
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 34
                              },
                              "start": {
                                "column": 49,
                                "line": 34
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            1287,
                            1288
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 34
                            },
                            "start": {
                              "column": 49,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1281,
                          1288
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 34
                          },
                          "start": {
                            "column": 43,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      1267,
                      1289
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 34
                      },
                      "start": {
                        "column": 29,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propTypes",
                      "optional": false,
                      "range": [
                        1290,
                        1299
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 34
                        },
                        "start": {
                          "column": 52,
                          "line": 34
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
                          "column": 70,
                          "line": 34
                        },
                        "start": {
                          "column": 61,
                          "line": 34
                        }
                      },
                      "range": [
                        1299,
                        1308
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
                            "name": "P",
                            "optional": false,
                            "range": [
                              1307,
                              1308
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 34
                              },
                              "start": {
                                "column": 69,
                                "line": 34
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            1307,
                            1308
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 34
                            },
                            "start": {
                              "column": 69,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1301,
                          1308
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 34
                          },
                          "start": {
                            "column": 63,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      1290,
                      1309
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 34
                      },
                      "start": {
                        "column": 52,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  1265,
                  1311
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 34
                  },
                  "start": {
                    "column": 27,
                    "line": 34
                  }
                }
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TComponent",
                    "optional": false,
                    "range": [
                      1385,
                      1395
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 36
                      },
                      "start": {
                        "column": 14,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1385,
                    1395
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultProps",
                        "optional": false,
                        "range": [
                          1406,
                          1418
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 36
                          },
                          "start": {
                            "column": 35,
                            "line": 36
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
                            "column": 56,
                            "line": 36
                          },
                          "start": {
                            "column": 47,
                            "line": 36
                          }
                        },
                        "range": [
                          1418,
                          1427
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
                              "name": "D",
                              "optional": false,
                              "range": [
                                1426,
                                1427
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 36
                                },
                                "start": {
                                  "column": 55,
                                  "line": 36
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              1426,
                              1427
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 36
                              },
                              "start": {
                                "column": 55,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1420,
                            1427
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 36
                            },
                            "start": {
                              "column": 49,
                              "line": 36
                            }
                          }
                        }
                      },
                      "range": [
                        1406,
                        1427
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 36
                        },
                        "start": {
                          "column": 35,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    1404,
                    1429
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 36
                    },
                    "start": {
                      "column": 33,
                      "line": 36
                    }
                  }
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TComponent",
                      "optional": false,
                      "range": [
                        1488,
                        1498
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 38
                        },
                        "start": {
                          "column": 18,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1488,
                      1498
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 38
                      },
                      "start": {
                        "column": 18,
                        "line": 38
                      }
                    }
                  },
                  "extendsType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "propTypes",
                          "optional": false,
                          "range": [
                            1509,
                            1518
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 38
                            },
                            "start": {
                              "column": 39,
                              "line": 38
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
                              "line": 38
                            },
                            "start": {
                              "column": 48,
                              "line": 38
                            }
                          },
                          "range": [
                            1518,
                            1527
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
                                "name": "P",
                                "optional": false,
                                "range": [
                                  1526,
                                  1527
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 38
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                1526,
                                1527
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 38
                                },
                                "start": {
                                  "column": 56,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              1520,
                              1527
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 38
                              },
                              "start": {
                                "column": 50,
                                "line": 38
                              }
                            }
                          }
                        },
                        "range": [
                          1509,
                          1527
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 38
                          },
                          "start": {
                            "column": 39,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "range": [
                      1507,
                      1529
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 38
                      },
                      "start": {
                        "column": 37,
                        "line": 38
                      }
                    }
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TProps",
                      "optional": false,
                      "range": [
                        1604,
                        1610
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 40
                        },
                        "start": {
                          "column": 22,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1604,
                      1610
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 40
                      },
                      "start": {
                        "column": 22,
                        "line": 40
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TProps",
                          "optional": false,
                          "range": [
                            1552,
                            1558
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 39
                            },
                            "start": {
                              "column": 22,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1552,
                          1558
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 39
                          },
                          "start": {
                            "column": 22,
                            "line": 39
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1578,
                            1581
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "range": [
                                  1579,
                                  1580
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 39
                                  }
                                }
                              },
                              "range": [
                                1579,
                                1580
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 39
                                },
                                "start": {
                                  "column": 49,
                                  "line": 39
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 39
                            },
                            "start": {
                              "column": 48,
                              "line": 39
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InferredPropTypes",
                          "optional": false,
                          "range": [
                            1561,
                            1578
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 39
                            },
                            "start": {
                              "column": 31,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1561,
                          1581
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 39
                          },
                          "start": {
                            "column": 31,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      1552,
                      1581
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 39
                      },
                      "start": {
                        "column": 22,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1488,
                    1610
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 40
                    },
                    "start": {
                      "column": 18,
                      "line": 38
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1458,
                      1469
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TProps",
                          "optional": false,
                          "range": [
                            1459,
                            1465
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 37
                            },
                            "start": {
                              "column": 29,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1459,
                          1465
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 37
                          },
                          "start": {
                            "column": 29,
                            "line": 37
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            1467,
                            1468
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 37
                            },
                            "start": {
                              "column": 37,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1467,
                          1468
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 37
                          },
                          "start": {
                            "column": 37,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 37
                      },
                      "start": {
                        "column": 28,
                        "line": 37
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "range": [
                      1448,
                      1458
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 37
                      },
                      "start": {
                        "column": 18,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1448,
                    1469
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 37
                    },
                    "start": {
                      "column": 18,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1385,
                  1610
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 40
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1336,
                    1370
                  ],
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TProps",
                            "optional": false,
                            "range": [
                              1337,
                              1343
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 35
                              },
                              "start": {
                                "column": 25,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1337,
                            1343
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 35
                            },
                            "start": {
                              "column": 25,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1363,
                              1366
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "range": [
                                    1364,
                                    1365
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 35
                                    }
                                  }
                                },
                                "range": [
                                  1364,
                                  1365
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 35
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 35
                              },
                              "start": {
                                "column": 51,
                                "line": 35
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "InferredPropTypes",
                            "optional": false,
                            "range": [
                              1346,
                              1363
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 35
                              },
                              "start": {
                                "column": 34,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1346,
                            1366
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 35
                            },
                            "start": {
                              "column": 34,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1337,
                        1366
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 35
                        },
                        "start": {
                          "column": 25,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          1368,
                          1369
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 35
                          },
                          "start": {
                            "column": 56,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1368,
                        1369
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 35
                        },
                        "start": {
                          "column": 56,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 35
                    },
                    "start": {
                      "column": 24,
                      "line": 35
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Defaultize",
                  "optional": false,
                  "range": [
                    1326,
                    1336
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 35
                    },
                    "start": {
                      "column": 14,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1326,
                  1370
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 35
                  },
                  "start": {
                    "column": 14,
                    "line": 35
                  }
                }
              },
              "range": [
                1246,
                1610
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 33
                },
                "start": {
                  "column": 33,
                  "line": 33
                }
              },
              "range": [
                1215,
                1235
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TComponent",
                    "optional": false,
                    "range": [
                      1216,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 33
                      },
                      "start": {
                        "column": 34,
                        "line": 33
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1216,
                    1226
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 33
                    },
                    "start": {
                      "column": 34,
                      "line": 33
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
                    "name": "TProps",
                    "optional": false,
                    "range": [
                      1228,
                      1234
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 33
                      },
                      "start": {
                        "column": 46,
                        "line": 33
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1228,
                    1234
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 33
                    },
                    "start": {
                      "column": 46,
                      "line": 33
                    }
                  }
                }
              ]
            },
            "range": [
              1186,
              1611
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          1097,
          1613
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 22,
            "line": 30
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1093,
          1096
        ],
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "loc": {
          "end": {
            "column": 21,
            "line": 30
          },
          "start": {
            "column": 18,
            "line": 30
          }
        }
      },
      "kind": "namespace",
      "range": [
        1075,
        1613
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1654,
          1842
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
              "name": "propTypes",
              "optional": false,
              "range": [
                1667,
                1676
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      1689,
                      1692
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        1694,
                        1703
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 45
                        },
                        "start": {
                          "column": 13,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "range": [
                        1704,
                        1710
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 45
                        },
                        "start": {
                          "column": 23,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1694,
                      1710
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 45
                      },
                      "start": {
                        "column": 13,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1689,
                    1710
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      1720,
                      1723
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        1725,
                        1734
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 46
                        },
                        "start": {
                          "column": 13,
                          "line": 46
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        1735,
                        1739
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 46
                        },
                        "start": {
                          "column": 23,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1725,
                      1739
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 46
                      },
                      "start": {
                        "column": 13,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1720,
                    1739
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      1749,
                      1752
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          1754,
                          1763
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 47
                          },
                          "start": {
                            "column": 13,
                            "line": 47
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "range": [
                          1764,
                          1770
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 47
                          },
                          "start": {
                            "column": 23,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1754,
                        1770
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 47
                        },
                        "start": {
                          "column": 13,
                          "line": 47
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "range": [
                        1771,
                        1781
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 47
                        },
                        "start": {
                          "column": 30,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1754,
                      1781
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 47
                      },
                      "start": {
                        "column": 13,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1749,
                    1781
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1679,
                1788
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 23,
                  "line": 44
                }
              }
            },
            "range": [
              1660,
              1789
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "range": [
                1801,
                1813
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 49
                },
                "start": {
                  "column": 11,
                  "line": 49
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      1826,
                      1829
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1831,
                      1833
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 50
                      },
                      "start": {
                        "column": 13,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1826,
                    1833
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1816,
                1840
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 26,
                  "line": 49
                }
              }
            },
            "range": [
              1794,
              1840
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 39,
            "line": 43
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          1621,
          1630
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 43
          },
          "start": {
            "column": 6,
            "line": 43
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          1639,
          1653
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 43
          },
          "start": {
            "column": 24,
            "line": 43
          }
        }
      },
      "range": [
        1615,
        1842
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "a",
            "optional": false,
            "range": [
              1850,
              1851
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                1854,
                1897
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      1865,
                      1868
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 54
                      },
                      "start": {
                        "column": 21,
                        "line": 54
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        1870,
                        1872
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 54
                        },
                        "start": {
                          "column": 26,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1869,
                      1873
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 54
                      },
                      "start": {
                        "column": 25,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1865,
                    1873
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 54
                    },
                    "start": {
                      "column": 21,
                      "line": 54
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      1874,
                      1877
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 54
                      },
                      "start": {
                        "column": 30,
                        "line": 54
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yes\"",
                    "value": "yes",
                    "range": [
                      1878,
                      1883
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 54
                      },
                      "start": {
                        "column": 34,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1874,
                    1883
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 54
                    },
                    "start": {
                      "column": 30,
                      "line": 54
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      1884,
                      1887
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 54
                      },
                      "start": {
                        "column": 40,
                        "line": 54
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yeah\"",
                    "value": "yeah",
                    "range": [
                      1888,
                      1894
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 54
                      },
                      "start": {
                        "column": 44,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1884,
                    1894
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 54
                    },
                    "start": {
                      "column": 40,
                      "line": 54
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  1855,
                  1864
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 54
                  },
                  "start": {
                    "column": 11,
                    "line": 54
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 53,
                  "line": 54
                },
                "start": {
                  "column": 10,
                  "line": 54
                }
              }
            },
            "range": [
              1854,
              1897
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 54
              },
              "start": {
                "column": 10,
                "line": 54
              }
            }
          },
          "range": [
            1850,
            1897
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1844,
        1898
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "b",
            "optional": false,
            "range": [
              1905,
              1906
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 55
              },
              "start": {
                "column": 6,
                "line": 55
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                1909,
                1931
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      1920,
                      1923
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 55
                      },
                      "start": {
                        "column": 21,
                        "line": 55
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        1925,
                        1927
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 55
                        },
                        "start": {
                          "column": 26,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1924,
                      1928
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 55
                      },
                      "start": {
                        "column": 25,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1920,
                    1928
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 55
                    },
                    "start": {
                      "column": 21,
                      "line": 55
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  1910,
                  1919
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 55
                  },
                  "start": {
                    "column": 11,
                    "line": 55
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 32,
                  "line": 55
                },
                "start": {
                  "column": 10,
                  "line": 55
                }
              }
            },
            "range": [
              1909,
              1931
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 55
              },
              "start": {
                "column": 10,
                "line": 55
              }
            }
          },
          "range": [
            1905,
            1931
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 55
            },
            "start": {
              "column": 6,
              "line": 55
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1899,
        1932
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
              1975,
              1976
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 56
              },
              "start": {
                "column": 6,
                "line": 56
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                1979,
                2013
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      1990,
                      1993
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 56
                      },
                      "start": {
                        "column": 21,
                        "line": 56
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yes\"",
                    "value": "yes",
                    "range": [
                      1994,
                      1999
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 56
                      },
                      "start": {
                        "column": 25,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1990,
                    1999
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 56
                    },
                    "start": {
                      "column": 21,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      2000,
                      2003
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 56
                      },
                      "start": {
                        "column": 31,
                        "line": 56
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yeah\"",
                    "value": "yeah",
                    "range": [
                      2004,
                      2010
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 56
                      },
                      "start": {
                        "column": 35,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    2000,
                    2010
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 56
                    },
                    "start": {
                      "column": 31,
                      "line": 56
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  1980,
                  1989
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 56
                  },
                  "start": {
                    "column": 11,
                    "line": 56
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 44,
                  "line": 56
                },
                "start": {
                  "column": 10,
                  "line": 56
                }
              }
            },
            "range": [
              1979,
              2013
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 56
              },
              "start": {
                "column": 10,
                "line": 56
              }
            }
          },
          "range": [
            1975,
            2013
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 56
            },
            "start": {
              "column": 6,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1969,
        2014
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "d",
            "optional": false,
            "range": [
              2021,
              2022
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 57
              },
              "start": {
                "column": 6,
                "line": 57
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2025,
                2068
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2036,
                      2039
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 57
                      },
                      "start": {
                        "column": 21,
                        "line": 57
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yes\"",
                    "value": "yes",
                    "range": [
                      2040,
                      2045
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 57
                      },
                      "start": {
                        "column": 25,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    2036,
                    2045
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 57
                    },
                    "start": {
                      "column": 21,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      2046,
                      2049
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 57
                      },
                      "start": {
                        "column": 31,
                        "line": 57
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yo\"",
                    "value": "yo",
                    "range": [
                      2050,
                      2054
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 57
                      },
                      "start": {
                        "column": 35,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    2046,
                    2054
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 57
                    },
                    "start": {
                      "column": 31,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bat",
                    "range": [
                      2055,
                      2058
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 57
                      },
                      "start": {
                        "column": 40,
                        "line": 57
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ohno\"",
                    "value": "ohno",
                    "range": [
                      2059,
                      2065
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 57
                      },
                      "start": {
                        "column": 44,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    2055,
                    2065
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 57
                    },
                    "start": {
                      "column": 40,
                      "line": 57
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  2026,
                  2035
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 57
                  },
                  "start": {
                    "column": 11,
                    "line": 57
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 53,
                  "line": 57
                },
                "start": {
                  "column": 10,
                  "line": 57
                }
              }
            },
            "range": [
              2025,
              2068
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 57
              },
              "start": {
                "column": 10,
                "line": 57
              }
            }
          },
          "range": [
            2021,
            2068
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 57
            },
            "start": {
              "column": 6,
              "line": 57
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2015,
        2069
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
            "name": "e",
            "optional": false,
            "range": [
              2107,
              2108
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2111,
                2155
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2122,
                      2125
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 58
                      },
                      "start": {
                        "column": 21,
                        "line": 58
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2127,
                        2129
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 58
                        },
                        "start": {
                          "column": 26,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      2126,
                      2130
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 58
                      },
                      "start": {
                        "column": 25,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    2122,
                    2130
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 58
                    },
                    "start": {
                      "column": 21,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2131,
                      2134
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 58
                      },
                      "start": {
                        "column": 30,
                        "line": 58
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        2136,
                        2140
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 58
                        },
                        "start": {
                          "column": 35,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      2135,
                      2141
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 58
                      },
                      "start": {
                        "column": 34,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    2131,
                    2141
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 58
                    },
                    "start": {
                      "column": 30,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      2142,
                      2145
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 58
                      },
                      "start": {
                        "column": 41,
                        "line": 58
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"cool\"",
                    "value": "cool",
                    "range": [
                      2146,
                      2152
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 58
                      },
                      "start": {
                        "column": 45,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    2142,
                    2152
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 58
                    },
                    "start": {
                      "column": 41,
                      "line": 58
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  2112,
                  2121
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 58
                  },
                  "start": {
                    "column": 11,
                    "line": 58
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 54,
                  "line": 58
                },
                "start": {
                  "column": 10,
                  "line": 58
                }
              }
            },
            "range": [
              2111,
              2155
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 58
              },
              "start": {
                "column": 10,
                "line": 58
              }
            }
          },
          "range": [
            2107,
            2155
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2101,
        2156
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "f",
            "optional": false,
            "range": [
              2229,
              2230
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 59
              },
              "start": {
                "column": 6,
                "line": 59
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2233,
                2277
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2244,
                      2247
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 59
                      },
                      "start": {
                        "column": 21,
                        "line": 59
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2249,
                        2251
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 59
                        },
                        "start": {
                          "column": 26,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      2248,
                      2252
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 59
                      },
                      "start": {
                        "column": 25,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    2244,
                    2252
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 59
                    },
                    "start": {
                      "column": 21,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2253,
                      2256
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 59
                      },
                      "start": {
                        "column": 30,
                        "line": 59
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yeah\"",
                    "value": "yeah",
                    "range": [
                      2257,
                      2263
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 59
                      },
                      "start": {
                        "column": 34,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    2253,
                    2263
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 59
                    },
                    "start": {
                      "column": 30,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      2264,
                      2267
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 59
                      },
                      "start": {
                        "column": 41,
                        "line": 59
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        2269,
                        2273
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 59
                        },
                        "start": {
                          "column": 46,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      2268,
                      2274
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 59
                      },
                      "start": {
                        "column": 45,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    2264,
                    2274
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 59
                    },
                    "start": {
                      "column": 41,
                      "line": 59
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  2234,
                  2243
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 54,
                  "line": 59
                },
                "start": {
                  "column": 10,
                  "line": 59
                }
              }
            },
            "range": [
              2233,
              2277
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 59
              },
              "start": {
                "column": 10,
                "line": 59
              }
            }
          },
          "range": [
            2229,
            2277
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2223,
        2278
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2398,
          2504
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
              "name": "propTypes",
              "optional": false,
              "range": [
                2411,
                2420
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 62
                },
                "start": {
                  "column": 11,
                  "line": 62
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      2433,
                      2436
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        2438,
                        2447
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 63
                        },
                        "start": {
                          "column": 13,
                          "line": 63
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "range": [
                        2448,
                        2454
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 63
                        },
                        "start": {
                          "column": 23,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      2438,
                      2454
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 63
                      },
                      "start": {
                        "column": 13,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    2433,
                    2454
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      2464,
                      2467
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          2469,
                          2478
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 64
                          },
                          "start": {
                            "column": 13,
                            "line": 64
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          2479,
                          2483
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 64
                          },
                          "start": {
                            "column": 23,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        2469,
                        2483
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 64
                        },
                        "start": {
                          "column": 13,
                          "line": 64
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "range": [
                        2484,
                        2494
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 64
                        },
                        "start": {
                          "column": 28,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      2469,
                      2494
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 64
                      },
                      "start": {
                        "column": 13,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    2464,
                    2494
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                }
              ],
              "range": [
                2423,
                2501
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 23,
                  "line": 62
                }
              }
            },
            "range": [
              2404,
              2502
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 43,
            "line": 61
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustPropTypes",
        "optional": false,
        "range": [
          2361,
          2374
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 61
          },
          "start": {
            "column": 6,
            "line": 61
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          2383,
          2397
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 61
          },
          "start": {
            "column": 28,
            "line": 61
          }
        }
      },
      "range": [
        2355,
        2504
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "g",
            "optional": false,
            "range": [
              2512,
              2513
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 68
              },
              "start": {
                "column": 6,
                "line": 68
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2516,
                2551
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2531,
                      2534
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 68
                      },
                      "start": {
                        "column": 25,
                        "line": 68
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2536,
                        2538
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 68
                        },
                        "start": {
                          "column": 30,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      2535,
                      2539
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 68
                      },
                      "start": {
                        "column": 29,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    2531,
                    2539
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 68
                    },
                    "start": {
                      "column": 25,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2540,
                      2543
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 68
                      },
                      "start": {
                        "column": 34,
                        "line": 68
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      2544,
                      2548
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
                    2540,
                    2548
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 68
                    },
                    "start": {
                      "column": 34,
                      "line": 68
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "range": [
                  2517,
                  2530
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 68
                  },
                  "start": {
                    "column": 11,
                    "line": 68
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 45,
                  "line": 68
                },
                "start": {
                  "column": 10,
                  "line": 68
                }
              }
            },
            "range": [
              2516,
              2551
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 68
              },
              "start": {
                "column": 10,
                "line": 68
              }
            }
          },
          "range": [
            2512,
            2551
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 68
            },
            "start": {
              "column": 6,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2506,
        2552
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "h",
            "optional": false,
            "range": [
              2559,
              2560
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2563,
                2589
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2578,
                      2581
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 69
                      },
                      "start": {
                        "column": 25,
                        "line": 69
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"no\"",
                    "value": "no",
                    "range": [
                      2582,
                      2586
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 69
                      },
                      "start": {
                        "column": 29,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    2578,
                    2586
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 69
                    },
                    "start": {
                      "column": 25,
                      "line": 69
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "range": [
                  2564,
                  2577
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 69
                  },
                  "start": {
                    "column": 11,
                    "line": 69
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 36,
                  "line": 69
                },
                "start": {
                  "column": 10,
                  "line": 69
                }
              }
            },
            "range": [
              2563,
              2589
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 69
              },
              "start": {
                "column": 10,
                "line": 69
              }
            }
          },
          "range": [
            2559,
            2589
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 69
            },
            "start": {
              "column": 6,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2553,
        2590
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
            "name": "i",
            "optional": false,
            "range": [
              2618,
              2619
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 70
              },
              "start": {
                "column": 6,
                "line": 70
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2622,
                2659
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2637,
                      2640
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 70
                      },
                      "start": {
                        "column": 25,
                        "line": 70
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        2642,
                        2646
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 70
                        },
                        "start": {
                          "column": 30,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      2641,
                      2647
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 70
                      },
                      "start": {
                        "column": 29,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    2637,
                    2647
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 70
                    },
                    "start": {
                      "column": 25,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2648,
                      2651
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 70
                      },
                      "start": {
                        "column": 36,
                        "line": 70
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      2652,
                      2656
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 70
                      },
                      "start": {
                        "column": 40,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    2648,
                    2656
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 70
                    },
                    "start": {
                      "column": 36,
                      "line": 70
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "range": [
                  2623,
                  2636
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 70
                  },
                  "start": {
                    "column": 11,
                    "line": 70
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 47,
                  "line": 70
                },
                "start": {
                  "column": 10,
                  "line": 70
                }
              }
            },
            "range": [
              2622,
              2659
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 70
              },
              "start": {
                "column": 10,
                "line": 70
              }
            }
          },
          "range": [
            2618,
            2659
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 70
            },
            "start": {
              "column": 6,
              "line": 70
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2612,
        2660
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
            "name": "j",
            "optional": false,
            "range": [
              2667,
              2668
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 71
              },
              "start": {
                "column": 6,
                "line": 71
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2671,
                2708
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2686,
                      2689
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 71
                      },
                      "start": {
                        "column": 25,
                        "line": 71
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2691,
                        2693
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 71
                        },
                        "start": {
                          "column": 30,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      2690,
                      2694
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 71
                      },
                      "start": {
                        "column": 29,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2686,
                    2694
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 71
                    },
                    "start": {
                      "column": 25,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2695,
                      2698
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 71
                      },
                      "start": {
                        "column": 34,
                        "line": 71
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        2700,
                        2704
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 71
                        },
                        "start": {
                          "column": 39,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      2699,
                      2705
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 71
                      },
                      "start": {
                        "column": 38,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2695,
                    2705
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 71
                    },
                    "start": {
                      "column": 34,
                      "line": 71
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "range": [
                  2672,
                  2685
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 71
                  },
                  "start": {
                    "column": 11,
                    "line": 71
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 47,
                  "line": 71
                },
                "start": {
                  "column": 10,
                  "line": 71
                }
              }
            },
            "range": [
              2671,
              2708
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 71
              },
              "start": {
                "column": 10,
                "line": 71
              }
            }
          },
          "range": [
            2667,
            2708
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 71
            },
            "start": {
              "column": 6,
              "line": 71
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2661,
        2709
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2783,
          2838
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
              "name": "defaultProps",
              "optional": false,
              "range": [
                2796,
                2808
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 74
                },
                "start": {
                  "column": 11,
                  "line": 74
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      2821,
                      2824
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      2826,
                      2828
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 75
                      },
                      "start": {
                        "column": 13,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    2821,
                    2828
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                }
              ],
              "range": [
                2811,
                2835
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 26,
                  "line": 74
                }
              }
            },
            "range": [
              2789,
              2836
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 46,
            "line": 73
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustDefaultProps",
        "optional": false,
        "range": [
          2743,
          2759
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 73
          },
          "start": {
            "column": 6,
            "line": 73
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          2768,
          2782
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 73
          },
          "start": {
            "column": 31,
            "line": 73
          }
        }
      },
      "range": [
        2737,
        2838
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 73
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
            "name": "k",
            "optional": false,
            "range": [
              2846,
              2847
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2850,
                2879
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2868,
                      2871
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 79
                      },
                      "start": {
                        "column": 28,
                        "line": 79
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2873,
                        2875
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 79
                        },
                        "start": {
                          "column": 33,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      2872,
                      2876
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 79
                      },
                      "start": {
                        "column": 32,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2868,
                    2876
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 79
                    },
                    "start": {
                      "column": 28,
                      "line": 79
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultProps",
                "range": [
                  2851,
                  2867
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 79
                  },
                  "start": {
                    "column": 11,
                    "line": 79
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 39,
                  "line": 79
                },
                "start": {
                  "column": 10,
                  "line": 79
                }
              }
            },
            "range": [
              2850,
              2879
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 79
              },
              "start": {
                "column": 10,
                "line": 79
              }
            }
          },
          "range": [
            2846,
            2879
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 79
            },
            "start": {
              "column": 6,
              "line": 79
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2840,
        2880
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
            "name": "l",
            "optional": false,
            "range": [
              2887,
              2888
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 80
              },
              "start": {
                "column": 6,
                "line": 80
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2891,
                2929
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2909,
                      2912
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 80
                      },
                      "start": {
                        "column": 28,
                        "line": 80
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2914,
                        2916
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 80
                        },
                        "start": {
                          "column": 33,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      2913,
                      2917
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 80
                      },
                      "start": {
                        "column": 32,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    2909,
                    2917
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 80
                    },
                    "start": {
                      "column": 28,
                      "line": 80
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      2918,
                      2921
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 80
                      },
                      "start": {
                        "column": 37,
                        "line": 80
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      2922,
                      2926
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 80
                      },
                      "start": {
                        "column": 41,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    2918,
                    2926
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 80
                    },
                    "start": {
                      "column": 37,
                      "line": 80
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultProps",
                "range": [
                  2892,
                  2908
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 80
                  },
                  "start": {
                    "column": 11,
                    "line": 80
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 48,
                  "line": 80
                },
                "start": {
                  "column": 10,
                  "line": 80
                }
              }
            },
            "range": [
              2891,
              2929
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 80
              },
              "start": {
                "column": 10,
                "line": 80
              }
            }
          },
          "range": [
            2887,
            2929
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 80
            },
            "start": {
              "column": 6,
              "line": 80
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2881,
        2930
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
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
            "name": "m",
            "optional": false,
            "range": [
              2965,
              2966
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 81
              },
              "start": {
                "column": 6,
                "line": 81
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                2969,
                2998
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      2987,
                      2990
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 81
                      },
                      "start": {
                        "column": 28,
                        "line": 81
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"no\"",
                    "value": "no",
                    "range": [
                      2991,
                      2995
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 81
                      },
                      "start": {
                        "column": 32,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    2987,
                    2995
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 81
                    },
                    "start": {
                      "column": 28,
                      "line": 81
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultProps",
                "range": [
                  2970,
                  2986
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 81
                  },
                  "start": {
                    "column": 11,
                    "line": 81
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 39,
                  "line": 81
                },
                "start": {
                  "column": 10,
                  "line": 81
                }
              }
            },
            "range": [
              2969,
              2998
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 81
              },
              "start": {
                "column": 10,
                "line": 81
              }
            }
          },
          "range": [
            2965,
            2998
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 81
            },
            "start": {
              "column": 6,
              "line": 81
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2959,
        2999
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3041,
          3061
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                3047,
                3050
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
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
                  "column": 15,
                  "line": 84
                },
                "start": {
                  "column": 7,
                  "line": 84
                }
              },
              "range": [
                3050,
                3058
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3052,
                  3058
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 84
                  },
                  "start": {
                    "column": 9,
                    "line": 84
                  }
                }
              }
            },
            "range": [
              3047,
              3059
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 19,
            "line": 83
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooProps",
        "optional": false,
        "range": [
          3032,
          3040
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 83
          },
          "start": {
            "column": 10,
            "line": 83
          }
        }
      },
      "range": [
        3022,
        3061
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3127,
          3318
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
              "name": "propTypes",
              "optional": false,
              "range": [
                3140,
                3149
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 88
                },
                "start": {
                  "column": 11,
                  "line": 88
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      3162,
                      3165
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        3167,
                        3176
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 89
                        },
                        "start": {
                          "column": 13,
                          "line": 89
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "range": [
                        3177,
                        3183
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 89
                        },
                        "start": {
                          "column": 23,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      3167,
                      3183
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 89
                      },
                      "start": {
                        "column": 13,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    3162,
                    3183
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      3193,
                      3196
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        3198,
                        3207
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 90
                        },
                        "start": {
                          "column": 13,
                          "line": 90
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "range": [
                        3208,
                        3212
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 90
                        },
                        "start": {
                          "column": 23,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      3198,
                      3212
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 90
                      },
                      "start": {
                        "column": 13,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    3193,
                    3212
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "range": [
                      3222,
                      3225
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          3227,
                          3236
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 91
                          },
                          "start": {
                            "column": 13,
                            "line": 91
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "range": [
                          3237,
                          3243
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 91
                          },
                          "start": {
                            "column": 23,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        3227,
                        3243
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 91
                        },
                        "start": {
                          "column": 13,
                          "line": 91
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "range": [
                        3244,
                        3254
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 91
                        },
                        "start": {
                          "column": 30,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      3227,
                      3254
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 91
                      },
                      "start": {
                        "column": 13,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    3222,
                    3254
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                }
              ],
              "range": [
                3152,
                3261
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 23,
                  "line": 88
                }
              }
            },
            "range": [
              3133,
              3262
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "range": [
                3274,
                3286
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 93
                },
                "start": {
                  "column": 11,
                  "line": 93
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      3299,
                      3302
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 94
                      },
                      "start": {
                        "column": 8,
                        "line": 94
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"yo\"",
                    "value": "yo",
                    "range": [
                      3304,
                      3308
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 94
                      },
                      "start": {
                        "column": 13,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    3299,
                    3308
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 94
                    },
                    "start": {
                      "column": 8,
                      "line": 94
                    }
                  }
                }
              ],
              "range": [
                3289,
                3315
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 95
                },
                "start": {
                  "column": 26,
                  "line": 93
                }
              }
            },
            "range": [
              3267,
              3316
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 64,
            "line": 87
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BothWithSpecifiedGeneric",
        "optional": false,
        "range": [
          3069,
          3093
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 87
          },
          "start": {
            "column": 6,
            "line": 87
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          3102,
          3116
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 87
          },
          "start": {
            "column": 39,
            "line": 87
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          3116,
          3126
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "range": [
                3117,
                3125
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 87
                },
                "start": {
                  "column": 54,
                  "line": 87
                }
              }
            },
            "range": [
              3117,
              3125
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 87
              },
              "start": {
                "column": 54,
                "line": 87
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 87
          },
          "start": {
            "column": 53,
            "line": 87
          }
        }
      },
      "range": [
        3063,
        3318
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 87
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
            "name": "n",
            "optional": false,
            "range": [
              3325,
              3326
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 97
              },
              "start": {
                "column": 6,
                "line": 97
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                3329,
                3387
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      3355,
                      3358
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 97
                      },
                      "start": {
                        "column": 36,
                        "line": 97
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"fine\"",
                    "value": "fine",
                    "range": [
                      3359,
                      3365
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 97
                      },
                      "start": {
                        "column": 40,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    3355,
                    3365
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 97
                    },
                    "start": {
                      "column": 36,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      3366,
                      3369
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 97
                      },
                      "start": {
                        "column": 47,
                        "line": 97
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yes\"",
                    "value": "yes",
                    "range": [
                      3370,
                      3375
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 97
                      },
                      "start": {
                        "column": 51,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    3366,
                    3375
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 97
                    },
                    "start": {
                      "column": 47,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      3376,
                      3379
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 97
                      },
                      "start": {
                        "column": 57,
                        "line": 97
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        3381,
                        3383
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 97
                        },
                        "start": {
                          "column": 62,
                          "line": 97
                        }
                      }
                    },
                    "range": [
                      3380,
                      3384
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 97
                      },
                      "start": {
                        "column": 61,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    3376,
                    3384
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 97
                    },
                    "start": {
                      "column": 57,
                      "line": 97
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "range": [
                  3330,
                  3354
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 97
                  },
                  "start": {
                    "column": 11,
                    "line": 97
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 68,
                  "line": 97
                },
                "start": {
                  "column": 10,
                  "line": 97
                }
              }
            },
            "range": [
              3329,
              3387
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 97
              },
              "start": {
                "column": 10,
                "line": 97
              }
            }
          },
          "range": [
            3325,
            3387
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 97
            },
            "start": {
              "column": 6,
              "line": 97
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3319,
        3388
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
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
            "name": "o",
            "optional": false,
            "range": [
              3395,
              3396
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 98
              },
              "start": {
                "column": 6,
                "line": 98
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                3399,
                3436
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      3425,
                      3428
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 98
                      },
                      "start": {
                        "column": 36,
                        "line": 98
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"no\"",
                    "value": "no",
                    "range": [
                      3429,
                      3433
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 98
                      },
                      "start": {
                        "column": 40,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    3425,
                    3433
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 98
                    },
                    "start": {
                      "column": 36,
                      "line": 98
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "range": [
                  3400,
                  3424
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 98
                  },
                  "start": {
                    "column": 11,
                    "line": 98
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 47,
                  "line": 98
                },
                "start": {
                  "column": 10,
                  "line": 98
                }
              }
            },
            "range": [
              3399,
              3436
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 98
              },
              "start": {
                "column": 10,
                "line": 98
              }
            }
          },
          "range": [
            3395,
            3436
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 98
            },
            "start": {
              "column": 6,
              "line": 98
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3389,
        3437
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
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
            "name": "p",
            "optional": false,
            "range": [
              3480,
              3481
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 99
              },
              "start": {
                "column": 6,
                "line": 99
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                3484,
                3531
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      3510,
                      3513
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 99
                      },
                      "start": {
                        "column": 36,
                        "line": 99
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yes\"",
                    "value": "yes",
                    "range": [
                      3514,
                      3519
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
                  "range": [
                    3510,
                    3519
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 99
                    },
                    "start": {
                      "column": 36,
                      "line": 99
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      3520,
                      3523
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 99
                      },
                      "start": {
                        "column": 46,
                        "line": 99
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        3525,
                        3527
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 99
                        },
                        "start": {
                          "column": 51,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      3524,
                      3528
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 99
                      },
                      "start": {
                        "column": 50,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    3520,
                    3528
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 99
                    },
                    "start": {
                      "column": 46,
                      "line": 99
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "range": [
                  3485,
                  3509
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 99
                  },
                  "start": {
                    "column": 11,
                    "line": 99
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 57,
                  "line": 99
                },
                "start": {
                  "column": 10,
                  "line": 99
                }
              }
            },
            "range": [
              3484,
              3531
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 99
              },
              "start": {
                "column": 10,
                "line": 99
              }
            }
          },
          "range": [
            3480,
            3531
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 99
            },
            "start": {
              "column": 6,
              "line": 99
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3474,
        3532
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
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
            "name": "q",
            "optional": false,
            "range": [
              3539,
              3540
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 100
              },
              "start": {
                "column": 6,
                "line": 100
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                3543,
                3601
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      3569,
                      3572
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 100
                      },
                      "start": {
                        "column": 36,
                        "line": 100
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yes\"",
                    "value": "yes",
                    "range": [
                      3573,
                      3578
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 100
                      },
                      "start": {
                        "column": 40,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    3569,
                    3578
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 100
                    },
                    "start": {
                      "column": 36,
                      "line": 100
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      3579,
                      3582
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 100
                      },
                      "start": {
                        "column": 46,
                        "line": 100
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        3584,
                        3586
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 100
                        },
                        "start": {
                          "column": 51,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      3583,
                      3587
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 100
                      },
                      "start": {
                        "column": 50,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    3579,
                    3587
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 100
                    },
                    "start": {
                      "column": 46,
                      "line": 100
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bat",
                    "range": [
                      3588,
                      3591
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 100
                      },
                      "start": {
                        "column": 55,
                        "line": 100
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ohno\"",
                    "value": "ohno",
                    "range": [
                      3592,
                      3598
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 100
                      },
                      "start": {
                        "column": 59,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    3588,
                    3598
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 100
                    },
                    "start": {
                      "column": 55,
                      "line": 100
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "range": [
                  3544,
                  3568
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 100
                  },
                  "start": {
                    "column": 11,
                    "line": 100
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 68,
                  "line": 100
                },
                "start": {
                  "column": 10,
                  "line": 100
                }
              }
            },
            "range": [
              3543,
              3601
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 100
              },
              "start": {
                "column": 10,
                "line": 100
              }
            }
          },
          "range": [
            3539,
            3601
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 100
            },
            "start": {
              "column": 6,
              "line": 100
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3533,
        3602
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
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
            "name": "r",
            "optional": false,
            "range": [
              3640,
              3641
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 101
              },
              "start": {
                "column": 6,
                "line": 101
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                3644,
                3700
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      3670,
                      3673
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 101
                      },
                      "start": {
                        "column": 36,
                        "line": 101
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"no\"",
                    "value": "no",
                    "range": [
                      3674,
                      3678
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 101
                      },
                      "start": {
                        "column": 40,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    3670,
                    3678
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 101
                    },
                    "start": {
                      "column": 36,
                      "line": 101
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      3679,
                      3682
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 101
                      },
                      "start": {
                        "column": 45,
                        "line": 101
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        3684,
                        3688
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 101
                        },
                        "start": {
                          "column": 50,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      3683,
                      3689
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 101
                      },
                      "start": {
                        "column": 49,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    3679,
                    3689
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 101
                    },
                    "start": {
                      "column": 45,
                      "line": 101
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      3690,
                      3693
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 101
                      },
                      "start": {
                        "column": 56,
                        "line": 101
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        3695,
                        3696
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 101
                        },
                        "start": {
                          "column": 61,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      3694,
                      3697
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 101
                      },
                      "start": {
                        "column": 60,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    3690,
                    3697
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 101
                    },
                    "start": {
                      "column": 56,
                      "line": 101
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "range": [
                  3645,
                  3669
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 101
                  },
                  "start": {
                    "column": 11,
                    "line": 101
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 66,
                  "line": 101
                },
                "start": {
                  "column": 10,
                  "line": 101
                }
              }
            },
            "range": [
              3644,
              3700
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 101
              },
              "start": {
                "column": 10,
                "line": 101
              }
            }
          },
          "range": [
            3640,
            3700
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 101
            },
            "start": {
              "column": 6,
              "line": 101
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3634,
        3701
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
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
            "name": "s",
            "optional": false,
            "range": [
              3774,
              3775
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 102
              },
              "start": {
                "column": 6,
                "line": 102
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                3778,
                3837
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      3804,
                      3807
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 102
                      },
                      "start": {
                        "column": 36,
                        "line": 102
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"eh\"",
                    "value": "eh",
                    "range": [
                      3808,
                      3812
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 102
                      },
                      "start": {
                        "column": 40,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    3804,
                    3812
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 102
                    },
                    "start": {
                      "column": 36,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      3813,
                      3816
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 102
                      },
                      "start": {
                        "column": 45,
                        "line": 102
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"yeah\"",
                    "value": "yeah",
                    "range": [
                      3817,
                      3823
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 102
                      },
                      "start": {
                        "column": 49,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    3813,
                    3823
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 102
                    },
                    "start": {
                      "column": 45,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "range": [
                      3824,
                      3827
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 102
                      },
                      "start": {
                        "column": 56,
                        "line": 102
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        3829,
                        3833
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 102
                        },
                        "start": {
                          "column": 61,
                          "line": 102
                        }
                      }
                    },
                    "range": [
                      3828,
                      3834
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 102
                      },
                      "start": {
                        "column": 60,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    3824,
                    3834
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 102
                    },
                    "start": {
                      "column": 56,
                      "line": 102
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "range": [
                  3779,
                  3803
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 102
                  },
                  "start": {
                    "column": 11,
                    "line": 102
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 69,
                  "line": 102
                },
                "start": {
                  "column": 10,
                  "line": 102
                }
              }
            },
            "range": [
              3778,
              3837
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 102
              },
              "start": {
                "column": 10,
                "line": 102
              }
            }
          },
          "range": [
            3774,
            3837
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 102
            },
            "start": {
              "column": 6,
              "line": 102
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3768,
        3838
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3988,
          4094
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
              "name": "propTypes",
              "optional": false,
              "range": [
                4001,
                4010
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 105
                },
                "start": {
                  "column": 11,
                  "line": 105
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      4023,
                      4026
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 106
                      },
                      "start": {
                        "column": 8,
                        "line": 106
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "range": [
                        4028,
                        4037
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
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "range": [
                        4038,
                        4044
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 106
                        },
                        "start": {
                          "column": 23,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      4028,
                      4044
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 106
                      },
                      "start": {
                        "column": 13,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    4023,
                    4044
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      4054,
                      4057
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 107
                      },
                      "start": {
                        "column": 8,
                        "line": 107
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "range": [
                          4059,
                          4068
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 107
                          },
                          "start": {
                            "column": 13,
                            "line": 107
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "range": [
                          4069,
                          4073
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 107
                          },
                          "start": {
                            "column": 23,
                            "line": 107
                          }
                        }
                      },
                      "range": [
                        4059,
                        4073
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 107
                        },
                        "start": {
                          "column": 13,
                          "line": 107
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "range": [
                        4074,
                        4084
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 107
                        },
                        "start": {
                          "column": 28,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      4059,
                      4084
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 107
                      },
                      "start": {
                        "column": 13,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    4054,
                    4084
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 107
                    },
                    "start": {
                      "column": 8,
                      "line": 107
                    }
                  }
                }
              ],
              "range": [
                4013,
                4091
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 23,
                  "line": 105
                }
              }
            },
            "range": [
              3994,
              4092
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 73,
            "line": 104
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustPropTypesWithSpecifiedGeneric",
        "optional": false,
        "range": [
          3921,
          3954
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 104
          },
          "start": {
            "column": 6,
            "line": 104
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          3963,
          3977
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 104
          },
          "start": {
            "column": 48,
            "line": 104
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          3977,
          3987
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "range": [
                3978,
                3986
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 104
                },
                "start": {
                  "column": 63,
                  "line": 104
                }
              }
            },
            "range": [
              3978,
              3986
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 104
              },
              "start": {
                "column": 63,
                "line": 104
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 104
          },
          "start": {
            "column": 62,
            "line": 104
          }
        }
      },
      "range": [
        3915,
        4094
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 104
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
            "name": "t",
            "optional": false,
            "range": [
              4101,
              4102
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 110
              },
              "start": {
                "column": 6,
                "line": 110
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4105,
                4162
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4140,
                      4143
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 110
                      },
                      "start": {
                        "column": 45,
                        "line": 110
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"nice\"",
                    "value": "nice",
                    "range": [
                      4144,
                      4150
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 110
                      },
                      "start": {
                        "column": 49,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    4140,
                    4150
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 110
                    },
                    "start": {
                      "column": 45,
                      "line": 110
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      4151,
                      4154
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 110
                      },
                      "start": {
                        "column": 56,
                        "line": 110
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      4155,
                      4159
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 110
                      },
                      "start": {
                        "column": 60,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    4151,
                    4159
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 110
                    },
                    "start": {
                      "column": 56,
                      "line": 110
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "range": [
                  4106,
                  4139
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 110
                  },
                  "start": {
                    "column": 11,
                    "line": 110
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 67,
                  "line": 110
                },
                "start": {
                  "column": 10,
                  "line": 110
                }
              }
            },
            "range": [
              4105,
              4162
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 110
              },
              "start": {
                "column": 10,
                "line": 110
              }
            }
          },
          "range": [
            4101,
            4162
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 110
            },
            "start": {
              "column": 6,
              "line": 110
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4095,
        4163
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
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
            "name": "u",
            "optional": false,
            "range": [
              4170,
              4171
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 111
              },
              "start": {
                "column": 6,
                "line": 111
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4174,
                4220
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4209,
                      4212
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 111
                      },
                      "start": {
                        "column": 45,
                        "line": 111
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        4214,
                        4216
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 111
                        },
                        "start": {
                          "column": 50,
                          "line": 111
                        }
                      }
                    },
                    "range": [
                      4213,
                      4217
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 111
                      },
                      "start": {
                        "column": 49,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    4209,
                    4217
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 111
                    },
                    "start": {
                      "column": 45,
                      "line": 111
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "range": [
                  4175,
                  4208
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 111
                  },
                  "start": {
                    "column": 11,
                    "line": 111
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 56,
                  "line": 111
                },
                "start": {
                  "column": 10,
                  "line": 111
                }
              }
            },
            "range": [
              4174,
              4220
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 111
              },
              "start": {
                "column": 10,
                "line": 111
              }
            }
          },
          "range": [
            4170,
            4220
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 111
            },
            "start": {
              "column": 6,
              "line": 111
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4164,
        4221
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
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
            "name": "v",
            "optional": false,
            "range": [
              4249,
              4250
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 112
              },
              "start": {
                "column": 6,
                "line": 112
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4253,
                4310
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4288,
                      4291
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 112
                      },
                      "start": {
                        "column": 45,
                        "line": 112
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        4293,
                        4297
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 112
                        },
                        "start": {
                          "column": 50,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      4292,
                      4298
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 112
                      },
                      "start": {
                        "column": 49,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    4288,
                    4298
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 112
                    },
                    "start": {
                      "column": 45,
                      "line": 112
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      4299,
                      4302
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 112
                      },
                      "start": {
                        "column": 56,
                        "line": 112
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      4303,
                      4307
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 112
                      },
                      "start": {
                        "column": 60,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    4299,
                    4307
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 112
                    },
                    "start": {
                      "column": 56,
                      "line": 112
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "range": [
                  4254,
                  4287
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 112
                  },
                  "start": {
                    "column": 11,
                    "line": 112
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 67,
                  "line": 112
                },
                "start": {
                  "column": 10,
                  "line": 112
                }
              }
            },
            "range": [
              4253,
              4310
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 112
              },
              "start": {
                "column": 10,
                "line": 112
              }
            }
          },
          "range": [
            4249,
            4310
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 112
            },
            "start": {
              "column": 6,
              "line": 112
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4243,
        4311
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 112
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
            "name": "w",
            "optional": false,
            "range": [
              4381,
              4382
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 113
              },
              "start": {
                "column": 6,
                "line": 113
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4385,
                4444
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4420,
                      4423
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 113
                      },
                      "start": {
                        "column": 45,
                        "line": 113
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"cool\"",
                    "value": "cool",
                    "range": [
                      4424,
                      4430
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 113
                      },
                      "start": {
                        "column": 49,
                        "line": 113
                      }
                    }
                  },
                  "range": [
                    4420,
                    4430
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 113
                    },
                    "start": {
                      "column": 45,
                      "line": 113
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      4431,
                      4434
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 113
                      },
                      "start": {
                        "column": 56,
                        "line": 113
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        4436,
                        4440
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 113
                        },
                        "start": {
                          "column": 61,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      4435,
                      4441
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 113
                      },
                      "start": {
                        "column": 60,
                        "line": 113
                      }
                    }
                  },
                  "range": [
                    4431,
                    4441
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 113
                    },
                    "start": {
                      "column": 56,
                      "line": 113
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "range": [
                  4386,
                  4419
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 113
                  },
                  "start": {
                    "column": 11,
                    "line": 113
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 69,
                  "line": 113
                },
                "start": {
                  "column": 10,
                  "line": 113
                }
              }
            },
            "range": [
              4385,
              4444
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 113
              },
              "start": {
                "column": 10,
                "line": 113
              }
            }
          },
          "range": [
            4381,
            4444
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 113
            },
            "start": {
              "column": 6,
              "line": 113
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4375,
        4445
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4549,
          4606
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
              "name": "defaultProps",
              "optional": false,
              "range": [
                4562,
                4574
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 116
                },
                "start": {
                  "column": 11,
                  "line": 116
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                      4587,
                      4590
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 117
                      },
                      "start": {
                        "column": 8,
                        "line": 117
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"no\"",
                    "value": "no",
                    "range": [
                      4592,
                      4596
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 117
                      },
                      "start": {
                        "column": 13,
                        "line": 117
                      }
                    }
                  },
                  "range": [
                    4587,
                    4596
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                }
              ],
              "range": [
                4577,
                4603
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 118
                },
                "start": {
                  "column": 26,
                  "line": 116
                }
              }
            },
            "range": [
              4555,
              4604
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 119
          },
          "start": {
            "column": 76,
            "line": 115
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustDefaultPropsWithSpecifiedGeneric",
        "optional": false,
        "range": [
          4479,
          4515
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 115
          },
          "start": {
            "column": 6,
            "line": 115
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "range": [
          4524,
          4538
        ],
        "loc": {
          "end": {
            "column": 65,
            "line": 115
          },
          "start": {
            "column": 51,
            "line": 115
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          4538,
          4548
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "range": [
                4539,
                4547
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 115
                },
                "start": {
                  "column": 66,
                  "line": 115
                }
              }
            },
            "range": [
              4539,
              4547
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 115
              },
              "start": {
                "column": 66,
                "line": 115
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 115
          },
          "start": {
            "column": 65,
            "line": 115
          }
        }
      },
      "range": [
        4473,
        4606
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 115
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
            "name": "x",
            "optional": false,
            "range": [
              4614,
              4615
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 121
              },
              "start": {
                "column": 6,
                "line": 121
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4618,
                4667
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4656,
                      4659
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 121
                      },
                      "start": {
                        "column": 48,
                        "line": 121
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"eh\"",
                    "value": "eh",
                    "range": [
                      4660,
                      4664
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 121
                      },
                      "start": {
                        "column": 52,
                        "line": 121
                      }
                    }
                  },
                  "range": [
                    4656,
                    4664
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 121
                    },
                    "start": {
                      "column": 48,
                      "line": 121
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "range": [
                  4619,
                  4655
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 121
                  },
                  "start": {
                    "column": 11,
                    "line": 121
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 59,
                  "line": 121
                },
                "start": {
                  "column": 10,
                  "line": 121
                }
              }
            },
            "range": [
              4618,
              4667
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 121
              },
              "start": {
                "column": 10,
                "line": 121
              }
            }
          },
          "range": [
            4614,
            4667
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 121
            },
            "start": {
              "column": 6,
              "line": 121
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4608,
        4668
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 121
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
            "name": "y",
            "optional": false,
            "range": [
              4675,
              4676
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 122
              },
              "start": {
                "column": 6,
                "line": 122
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4679,
                4737
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4717,
                      4720
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 122
                      },
                      "start": {
                        "column": 48,
                        "line": 122
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"no\"",
                    "value": "no",
                    "range": [
                      4721,
                      4725
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 122
                      },
                      "start": {
                        "column": 52,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    4717,
                    4725
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 122
                    },
                    "start": {
                      "column": 48,
                      "line": 122
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "range": [
                      4726,
                      4729
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 122
                      },
                      "start": {
                        "column": 57,
                        "line": 122
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      4730,
                      4734
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 122
                      },
                      "start": {
                        "column": 61,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    4726,
                    4734
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 122
                    },
                    "start": {
                      "column": 57,
                      "line": 122
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "range": [
                  4680,
                  4716
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 122
                  },
                  "start": {
                    "column": 11,
                    "line": 122
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 68,
                  "line": 122
                },
                "start": {
                  "column": 10,
                  "line": 122
                }
              }
            },
            "range": [
              4679,
              4737
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 122
              },
              "start": {
                "column": 10,
                "line": 122
              }
            }
          },
          "range": [
            4675,
            4737
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 122
            },
            "start": {
              "column": 6,
              "line": 122
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4669,
        4738
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
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
            "name": "z",
            "optional": false,
            "range": [
              4773,
              4774
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 123
              },
              "start": {
                "column": 6,
                "line": 123
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4777,
                4826
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      4815,
                      4818
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 123
                      },
                      "start": {
                        "column": 48,
                        "line": 123
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        4820,
                        4822
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 123
                        },
                        "start": {
                          "column": 53,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      4819,
                      4823
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 123
                      },
                      "start": {
                        "column": 52,
                        "line": 123
                      }
                    }
                  },
                  "range": [
                    4815,
                    4823
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 123
                    },
                    "start": {
                      "column": 48,
                      "line": 123
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "range": [
                  4778,
                  4814
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 123
                  },
                  "start": {
                    "column": 11,
                    "line": 123
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 59,
                  "line": 123
                },
                "start": {
                  "column": 10,
                  "line": 123
                }
              }
            },
            "range": [
              4777,
              4826
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 123
              },
              "start": {
                "column": 10,
                "line": 123
              }
            }
          },
          "range": [
            4773,
            4826
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 123
            },
            "start": {
              "column": 6,
              "line": 123
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4767,
        4827
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
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
            "name": "aa",
            "optional": false,
            "range": [
              4855,
              4857
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 124
              },
              "start": {
                "column": 6,
                "line": 124
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                4860,
                4900
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "range": [
                  4861,
                  4897
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 124
                  },
                  "start": {
                    "column": 12,
                    "line": 124
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 51,
                  "line": 124
                },
                "start": {
                  "column": 11,
                  "line": 124
                }
              }
            },
            "range": [
              4860,
              4900
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 124
              },
              "start": {
                "column": 11,
                "line": 124
              }
            }
          },
          "range": [
            4855,
            4900
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 124
            },
            "start": {
              "column": 6,
              "line": 124
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4849,
        4901
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 125
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
