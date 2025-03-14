__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    302
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          65
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "emit",
              "optional": false,
              "range": [
                18,
                22
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  },
                  "range": [
                    28,
                    36
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      30,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  23,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
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
                    41,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  },
                  "range": [
                    45,
                    52
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        47,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 33,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      47,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 33,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  38,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 2
                },
                "start": {
                  "column": 39,
                  "line": 2
                }
              },
              "range": [
                53,
                62
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  55,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              18,
              63
            ],
            "loc": {
              "end": {
                "column": 49,
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
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
        65
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Args",
        "optional": false,
        "range": [
          72,
          76
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
            "name": "F",
            "optional": false,
            "range": [
              82,
              83
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          },
          "range": [
            82,
            83
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 5
            },
            "start": {
              "column": 15,
              "line": 5
            }
          }
        },
        "extendsType": {
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
                  96,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
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
                    "column": 42,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                },
                "range": [
                  100,
                  109
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
                      "name": "A",
                      "optional": false,
                      "range": [
                        108,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 5
                        },
                        "start": {
                          "column": 41,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      108,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 41,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    102,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
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
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 5
              },
              "start": {
                "column": 44,
                "line": 5
              }
            },
            "range": [
              111,
              118
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                114,
                118
              ],
              "loc": {
                "end": {
                  "column": 51,
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
            92,
            118
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            125,
            130
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 5
            },
            "start": {
              "column": 58,
              "line": 5
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              121,
              122
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 5
              },
              "start": {
                "column": 54,
                "line": 5
              }
            }
          },
          "range": [
            121,
            122
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 5
            },
            "start": {
              "column": 54,
              "line": 5
            }
          }
        },
        "range": [
          82,
          130
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        },
        "range": [
          76,
          79
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              77,
              78
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        67,
        131
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventMap",
        "optional": false,
        "range": [
          138,
          146
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            155,
            173
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                156,
                162
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  164,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "range": [
                164,
                172
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 22,
              "line": 7
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            149,
            155
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "range": [
          149,
          173
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "range": [
        133,
        174
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 7
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
          218,
          302
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "emit",
              "optional": false,
              "range": [
                224,
                228
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                      "column": 44,
                      "line": 10
                    },
                    "start": {
                      "column": 37,
                      "line": 10
                    }
                  },
                  "range": [
                    257,
                    264
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Event",
                      "optional": false,
                      "range": [
                        259,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 10
                        },
                        "start": {
                          "column": 39,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      259,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 10
                      },
                      "start": {
                        "column": 39,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  252,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 10
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
                    269,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 10
                    },
                    "start": {
                      "column": 49,
                      "line": 10
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 10
                    },
                    "start": {
                      "column": 53,
                      "line": 10
                    }
                  },
                  "range": [
                    273,
                    289
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        279,
                        289
                      ],
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Event",
                              "optional": false,
                              "range": [
                                282,
                                287
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 10
                                },
                                "start": {
                                  "column": 62,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              282,
                              287
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 10
                              },
                              "start": {
                                "column": 62,
                                "line": 10
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "M",
                              "optional": false,
                              "range": [
                                280,
                                281
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 10
                                },
                                "start": {
                                  "column": 60,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              280,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 10
                              },
                              "start": {
                                "column": 60,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            280,
                            288
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 10
                            },
                            "start": {
                              "column": 60,
                              "line": 10
                            }
                          }
                        }
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
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Args",
                      "optional": false,
                      "range": [
                        275,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 10
                        },
                        "start": {
                          "column": 55,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      275,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 10
                      },
                      "start": {
                        "column": 55,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  266,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 10
                  },
                  "start": {
                    "column": 46,
                    "line": 10
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 79,
                  "line": 10
                },
                "start": {
                  "column": 70,
                  "line": 10
                }
              },
              "range": [
                290,
                299
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  292,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 10
                  },
                  "start": {
                    "column": 72,
                    "line": 10
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                228,
                251
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
                        "name": "M",
                        "optional": false,
                        "range": [
                          249,
                          250
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
                      },
                      "range": [
                        249,
                        250
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
                    },
                    "range": [
                      243,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "range": [
                      229,
                      234
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
                  "out": false,
                  "range": [
                    229,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                }
              ]
            },
            "range": [
              224,
              300
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
            "column": 42,
            "line": 9
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
            "name": "A",
            "optional": false,
            "range": [
              216,
              217
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 9
              },
              "start": {
                "column": 40,
                "line": 9
              }
            }
          },
          "range": [
            216,
            217
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 9
            },
            "start": {
              "column": 40,
              "line": 9
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          186,
          187
        ],
        "loc": {
          "end": {
            "column": 11,
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
            "column": 31,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        },
        "range": [
          187,
          207
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
                "name": "EventMap",
                "optional": false,
                "range": [
                  198,
                  206
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
                198,
                206
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                188,
                189
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
              188,
              206
            ],
            "loc": {
              "end": {
                "column": 30,
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
        176,
        302
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
