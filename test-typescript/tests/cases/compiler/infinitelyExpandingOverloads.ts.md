__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    910
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          35,
          78
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "range": [
                41,
                47
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                47,
                75
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    72,
                    75
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
                          73,
                          74
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
                        73,
                        74
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
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
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
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "range": [
                    49,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  49,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              41,
              76
            ],
            "loc": {
              "end": {
                "column": 39,
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
            "column": 35,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutSubscription2",
        "optional": false,
        "range": [
          10,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
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
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 31,
            "line": 1
          }
        },
        "range": [
          31,
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
              "name": "T",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              32,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        78
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
          116,
          223
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subscribe",
              "optional": false,
              "range": [
                122,
                131
              ],
              "loc": {
                "end": {
                  "column": 13,
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
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  },
                  "range": [
                    140,
                    163
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 5
                            },
                            "start": {
                              "column": 33,
                              "line": 5
                            }
                          },
                          "range": [
                            151,
                            154
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                153,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 5
                                },
                                "start": {
                                  "column": 35,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              153,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
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
                          143,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 5
                        },
                        "start": {
                          "column": 38,
                          "line": 5
                        }
                      },
                      "range": [
                        156,
                        163
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          159,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 5
                          },
                          "start": {
                            "column": 41,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      142,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  132,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 54,
                      "line": 5
                    }
                  },
                  "range": [
                    172,
                    177
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      174,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 56,
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
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 47,
                    "line": 5
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "topic",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 5
                    },
                    "start": {
                      "column": 67,
                      "line": 5
                    }
                  },
                  "range": [
                    185,
                    193
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      187,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
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
                  179,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 5
                  },
                  "start": {
                    "column": 61,
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
                  "column": 102,
                  "line": 5
                },
                "start": {
                  "column": 76,
                  "line": 5
                }
              },
              "range": [
                194,
                220
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    217,
                    220
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
                          218,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 5
                          },
                          "start": {
                            "column": 100,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        218,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 5
                        },
                        "start": {
                          "column": 100,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 102,
                      "line": 5
                    },
                    "start": {
                      "column": 99,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "range": [
                    196,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 5
                    },
                    "start": {
                      "column": 78,
                      "line": 5
                    }
                  }
                },
                "range": [
                  196,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 5
                  },
                  "start": {
                    "column": 78,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "range": [
              122,
              221
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 5
              },
              "start": {
                "column": 4,
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
            "column": 37,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableBase2",
        "optional": false,
        "range": [
          89,
          112
        ],
        "loc": {
          "end": {
            "column": 33,
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
            "column": 36,
            "line": 4
          },
          "start": {
            "column": 33,
            "line": 4
          }
        },
        "range": [
          112,
          115
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
                113,
                114
              ],
              "loc": {
                "end": {
                  "column": 35,
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
              113,
              114
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 34,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        79,
        223
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
          263,
          323
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialize",
              "optional": false,
              "range": [
                269,
                279
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "validatable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  },
                  "range": [
                    291,
                    313
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        305,
                        313
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              306,
                              312
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 8
                              },
                              "start": {
                                "column": 41,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            306,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 8
                            },
                            "start": {
                              "column": 41,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 8
                        },
                        "start": {
                          "column": 40,
                          "line": 8
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Validatable2",
                      "optional": false,
                      "range": [
                        293,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 28,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      293,
                      313
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  280,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 55,
                  "line": 8
                },
                "start": {
                  "column": 49,
                  "line": 8
                }
              },
              "range": [
                314,
                320
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  316,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 8
                  },
                  "start": {
                    "column": 51,
                    "line": 8
                  }
                }
              }
            },
            "static": false,
            "range": [
              269,
              321
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 39,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidationPlacement2",
        "optional": false,
        "range": [
          234,
          254
        ],
        "loc": {
          "end": {
            "column": 30,
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
            "column": 38,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 7
          }
        },
        "range": [
          254,
          262
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "range": [
                255,
                261
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              255,
              261
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 31,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        224,
        323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
          355,
          419
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validators",
              "optional": false,
              "range": [
                361,
                371
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
                  "column": 59,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              },
              "range": [
                371,
                416
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    396,
                    416
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          407,
                          415
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "range": [
                                408,
                                414
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 11
                                },
                                "start": {
                                  "column": 51,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              408,
                              414
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 11
                              },
                              "start": {
                                "column": 51,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 11
                          },
                          "start": {
                            "column": 50,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Validator2",
                        "optional": false,
                        "range": [
                          397,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 11
                          },
                          "start": {
                            "column": 40,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        397,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 11
                        },
                        "start": {
                          "column": 40,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 11
                    },
                    "start": {
                      "column": 39,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableBase2",
                  "optional": false,
                  "range": [
                    373,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "range": [
                  373,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 59,
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
              361,
              417
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 31,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validatable2",
        "optional": false,
        "range": [
          334,
          346
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 22,
            "line": 10
          }
        },
        "range": [
          346,
          354
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "range": [
                347,
                353
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              347,
              353
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 23,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        324,
        419
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          445,
          506
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_subscription",
              "optional": false,
              "range": [
                459,
                472
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
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
                  "column": 56,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              },
              "range": [
                472,
                503
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    495,
                    503
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "range": [
                          496,
                          502
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 14
                          },
                          "start": {
                            "column": 49,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        496,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 14
                        },
                        "start": {
                          "column": 49,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 14
                    },
                    "start": {
                      "column": 48,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutSubscription2",
                  "optional": false,
                  "range": [
                    474,
                    495
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 14
                    },
                    "start": {
                      "column": 27,
                      "line": 14
                    }
                  }
                },
                "range": [
                  474,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              451,
              504
            ],
            "loc": {
              "end": {
                "column": 57,
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
            "column": 25,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator2",
        "optional": false,
        "range": [
          426,
          436
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 13
          }
        },
        "range": [
          436,
          444
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "range": [
                437,
                443
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              437,
              443
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 17,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        420,
        506
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          531,
          648
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validationPlacements",
              "optional": false,
              "range": [
                544,
                564
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
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
                  "column": 68,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 17
                }
              },
              "range": [
                564,
                601
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    571,
                    601
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          592,
                          600
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "range": [
                                593,
                                599
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 17
                                },
                                "start": {
                                  "column": 60,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              593,
                              599
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 17
                              },
                              "start": {
                                "column": 60,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 17
                          },
                          "start": {
                            "column": 59,
                            "line": 17
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValidationPlacement2",
                        "optional": false,
                        "range": [
                          572,
                          592
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 17
                          },
                          "start": {
                            "column": 39,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        572,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 17
                        },
                        "start": {
                          "column": 39,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 17
                    },
                    "start": {
                      "column": 38,
                      "line": 17
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "range": [
                    566,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 17
                    },
                    "start": {
                      "column": 33,
                      "line": 17
                    }
                  }
                },
                "range": [
                  566,
                  601
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 17
                  },
                  "start": {
                    "column": 33,
                    "line": 17
                  }
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  608,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 17
                  },
                  "start": {
                    "column": 75,
                    "line": 17
                  }
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  613,
                  643
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        634,
                        642
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "range": [
                              635,
                              641
                            ],
                            "loc": {
                              "end": {
                                "column": 108,
                                "line": 17
                              },
                              "start": {
                                "column": 102,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            635,
                            641
                          ],
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 17
                            },
                            "start": {
                              "column": 102,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 17
                        },
                        "start": {
                          "column": 101,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValidationPlacement2",
                      "optional": false,
                      "range": [
                        614,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 17
                        },
                        "start": {
                          "column": 81,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      614,
                      642
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 17
                      },
                      "start": {
                        "column": 81,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 17
                  },
                  "start": {
                    "column": 80,
                    "line": 17
                  }
                }
              },
              "range": [
                604,
                645
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 17
                },
                "start": {
                  "column": 71,
                  "line": 17
                }
              }
            },
            "range": [
              537,
              646
            ],
            "loc": {
              "end": {
                "column": 113,
                "line": 17
              },
              "start": {
                "column": 4,
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
            "column": 24,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewModel",
        "optional": false,
        "range": [
          513,
          522
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 15,
            "line": 16
          }
        },
        "range": [
          522,
          530
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "range": [
                523,
                529
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              523,
              529
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        507,
        648
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
          670,
          910
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                676,
                687
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                687,
                732
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
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 20
                      },
                      "start": {
                        "column": 29,
                        "line": 20
                      }
                    },
                    "range": [
                      701,
                      730
                    ],
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 20
                          },
                          "start": {
                            "column": 38,
                            "line": 20
                          }
                        },
                        "range": [
                          710,
                          730
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              722,
                              730
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    723,
                                    729
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  723,
                                  729
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 20
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 20
                              },
                              "start": {
                                "column": 50,
                                "line": 20
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "range": [
                              713,
                              722
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 20
                              },
                              "start": {
                                "column": 41,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            713,
                            730
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 20
                            },
                            "start": {
                              "column": 41,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        703,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 20
                        },
                        "start": {
                          "column": 31,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    688,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              676,
              732
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                772,
                783
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                783,
                835
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  828,
                  835
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 60,
                    "line": 21
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
                  "name": "viewModelType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 21
                      },
                      "start": {
                        "column": 29,
                        "line": 21
                      }
                    },
                    "range": [
                      797,
                      826
                    ],
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 21
                          },
                          "start": {
                            "column": 38,
                            "line": 21
                          }
                        },
                        "range": [
                          806,
                          826
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              818,
                              826
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TValue",
                                  "optional": false,
                                  "range": [
                                    819,
                                    825
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  819,
                                  825
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 21
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 21
                              },
                              "start": {
                                "column": 50,
                                "line": 21
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ViewModel",
                            "optional": false,
                            "range": [
                              809,
                              818
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 21
                              },
                              "start": {
                                "column": 41,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            809,
                            826
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 21
                            },
                            "start": {
                              "column": 41,
                              "line": 21
                            }
                          }
                        }
                      },
                      "range": [
                        799,
                        826
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 21
                        },
                        "start": {
                          "column": 31,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    784,
                    826
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              }
            },
            "range": [
              772,
              835
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "range": [
                851,
                858
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                858,
                908
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        897,
                        901
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      890,
                      902
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  880,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 44,
                    "line": 23
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 23
                  }
                },
                "range": [
                  860,
                  879
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      871,
                      879
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "range": [
                            872,
                            878
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 23
                            },
                            "start": {
                              "column": 36,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          872,
                          878
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 23
                          },
                          "start": {
                            "column": 36,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ViewModel",
                    "optional": false,
                    "range": [
                      862,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 23
                      },
                      "start": {
                        "column": 26,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    862,
                    879
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 23
                    },
                    "start": {
                      "column": 26,
                      "line": 23
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 22,
                  "line": 23
                }
              }
            },
            "range": [
              840,
              908
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 21,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Widget",
        "optional": false,
        "range": [
          655,
          661
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 19
          }
        },
        "range": [
          661,
          669
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "range": [
                662,
                668
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 13,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              662,
              668
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        649,
        910
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
