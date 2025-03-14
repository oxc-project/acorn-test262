__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    29,
    5527
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          74,
          77
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 45,
            "line": 3
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
            "name": "PromiseLike",
            "optional": false,
            "range": [
              59,
              70
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              70,
              73
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
                    71,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 3
                    },
                    "start": {
                      "column": 42,
                      "line": 3
                    }
                  }
                },
                "range": [
                  71,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 42,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 41,
                "line": 3
              }
            }
          },
          "range": [
            59,
            73
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "range": [
          39,
          47
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          47,
          50
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
                48,
                49
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        29,
        77
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          186,
          5266
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                192,
                196
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
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 25
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  },
                  "range": [
                    776,
                    956
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 22
                            },
                            "start": {
                              "column": 26,
                              "line": 22
                            }
                          },
                          "range": [
                            780,
                            784
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "range": [
                                782,
                                784
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 22
                                },
                                "start": {
                                  "column": 28,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              782,
                              784
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 22
                              },
                              "start": {
                                "column": 28,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          779,
                          784
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 22
                          },
                          "start": {
                            "column": 25,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 22
                            },
                            "start": {
                              "column": 33,
                              "line": 22
                            }
                          },
                          "range": [
                            787,
                            791
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "range": [
                                789,
                                791
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 22
                                },
                                "start": {
                                  "column": 35,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              789,
                              791
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 22
                              },
                              "start": {
                                "column": 35,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          786,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 22
                          },
                          "start": {
                            "column": 32,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 22
                            },
                            "start": {
                              "column": 40,
                              "line": 22
                            }
                          },
                          "range": [
                            794,
                            798
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "range": [
                                796,
                                798
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 22
                                },
                                "start": {
                                  "column": 42,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              796,
                              798
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 22
                              },
                              "start": {
                                "column": 42,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          793,
                          798
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 22
                          },
                          "start": {
                            "column": 39,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            803,
                            804
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 22
                            },
                            "start": {
                              "column": 49,
                              "line": 22
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
                              "line": 22
                            },
                            "start": {
                              "column": 50,
                              "line": 22
                            }
                          },
                          "range": [
                            804,
                            810
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "range": [
                                  806,
                                  808
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                806,
                                808
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 22
                                },
                                "start": {
                                  "column": 52,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              806,
                              810
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 22
                              },
                              "start": {
                                "column": 52,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          800,
                          810
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 22
                          },
                          "start": {
                            "column": 46,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 25
                        },
                        "start": {
                          "column": 58,
                          "line": 22
                        }
                      },
                      "range": [
                        812,
                        956
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                826,
                                934
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "range": [
                                      827,
                                      830
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    827,
                                    830
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 22
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "range": [
                                      832,
                                      835
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    832,
                                    835
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 22
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "range": [
                                      837,
                                      840
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    837,
                                    840
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 22
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "range": [
                                      858,
                                      861
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    858,
                                    861
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 23
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "range": [
                                      863,
                                      866
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    863,
                                    866
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 23
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "range": [
                                      868,
                                      871
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    868,
                                    871
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 23
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "range": [
                                      889,
                                      892
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    889,
                                    892
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 24
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "range": [
                                      894,
                                      897
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    894,
                                    897
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 24
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "range": [
                                      899,
                                      902
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    899,
                                    902
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 24
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "range": [
                                      920,
                                      923
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    920,
                                    923
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 25
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "range": [
                                      925,
                                      928
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    925,
                                    928
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 25
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "range": [
                                      930,
                                      933
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    930,
                                    933
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 25
                                },
                                "start": {
                                  "column": 72,
                                  "line": 22
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                815,
                                826
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 22
                                },
                                "start": {
                                  "column": 61,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              815,
                              934
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 25
                              },
                              "start": {
                                "column": 61,
                                "line": 22
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                945,
                                950
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "range": [
                                      946,
                                      949
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    946,
                                    949
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 25
                                },
                                "start": {
                                  "column": 41,
                                  "line": 25
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                937,
                                945
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 25
                                },
                                "start": {
                                  "column": 33,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              937,
                              950
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 25
                              },
                              "start": {
                                "column": 33,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "range": [
                                953,
                                956
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 25
                                },
                                "start": {
                                  "column": 49,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              953,
                              956
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 25
                              },
                              "start": {
                                "column": 49,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "range": [
                          815,
                          956
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 25
                          },
                          "start": {
                            "column": 61,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      778,
                      956
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  766,
                  956
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 29
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  },
                  "range": [
                    980,
                    1160
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 26
                            },
                            "start": {
                              "column": 26,
                              "line": 26
                            }
                          },
                          "range": [
                            984,
                            988
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "range": [
                                986,
                                988
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 26
                                },
                                "start": {
                                  "column": 28,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              986,
                              988
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 26
                              },
                              "start": {
                                "column": 28,
                                "line": 26
                              }
                            }
                          }
                        },
                        "range": [
                          983,
                          988
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 26
                          },
                          "start": {
                            "column": 25,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 26
                            },
                            "start": {
                              "column": 33,
                              "line": 26
                            }
                          },
                          "range": [
                            991,
                            995
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "range": [
                                993,
                                995
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 26
                                },
                                "start": {
                                  "column": 35,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              993,
                              995
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 26
                              },
                              "start": {
                                "column": 35,
                                "line": 26
                              }
                            }
                          }
                        },
                        "range": [
                          990,
                          995
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 26
                          },
                          "start": {
                            "column": 32,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 26
                            },
                            "start": {
                              "column": 40,
                              "line": 26
                            }
                          },
                          "range": [
                            998,
                            1002
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "range": [
                                1000,
                                1002
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 26
                                },
                                "start": {
                                  "column": 42,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              1000,
                              1002
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 26
                              },
                              "start": {
                                "column": 42,
                                "line": 26
                              }
                            }
                          }
                        },
                        "range": [
                          997,
                          1002
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 26
                          },
                          "start": {
                            "column": 39,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            1007,
                            1008
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 26
                            },
                            "start": {
                              "column": 49,
                              "line": 26
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
                              "line": 26
                            },
                            "start": {
                              "column": 50,
                              "line": 26
                            }
                          },
                          "range": [
                            1008,
                            1014
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "range": [
                                  1010,
                                  1012
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                1010,
                                1012
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 26
                                },
                                "start": {
                                  "column": 52,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              1010,
                              1014
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 26
                              },
                              "start": {
                                "column": 52,
                                "line": 26
                              }
                            }
                          }
                        },
                        "range": [
                          1004,
                          1014
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 26
                          },
                          "start": {
                            "column": 46,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 29
                        },
                        "start": {
                          "column": 58,
                          "line": 26
                        }
                      },
                      "range": [
                        1016,
                        1160
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1030,
                                1138
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      1031,
                                      1034
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    1031,
                                    1034
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 26
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "range": [
                                      1036,
                                      1039
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    1036,
                                    1039
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 26
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "range": [
                                      1041,
                                      1044
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    1041,
                                    1044
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 26
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "range": [
                                      1062,
                                      1065
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "range": [
                                    1062,
                                    1065
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 27
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "range": [
                                      1067,
                                      1070
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "range": [
                                    1067,
                                    1070
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 27
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "range": [
                                      1072,
                                      1075
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "range": [
                                    1072,
                                    1075
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 27
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "range": [
                                      1093,
                                      1096
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    1093,
                                    1096
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 28
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "range": [
                                      1098,
                                      1101
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    1098,
                                    1101
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 28
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "range": [
                                      1103,
                                      1106
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 28
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    1103,
                                    1106
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 28
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "range": [
                                      1124,
                                      1127
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    1124,
                                    1127
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 29
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "range": [
                                      1129,
                                      1132
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    1129,
                                    1132
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 29
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "range": [
                                      1134,
                                      1137
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    1134,
                                    1137
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 29
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 29
                                },
                                "start": {
                                  "column": 72,
                                  "line": 26
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                1019,
                                1030
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 26
                                },
                                "start": {
                                  "column": 61,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              1019,
                              1138
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 29
                              },
                              "start": {
                                "column": 61,
                                "line": 26
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1149,
                                1154
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      1150,
                                      1153
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    1150,
                                    1153
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 29
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 29
                                },
                                "start": {
                                  "column": 41,
                                  "line": 29
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                1141,
                                1149
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 29
                                },
                                "start": {
                                  "column": 33,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              1141,
                              1154
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 29
                              },
                              "start": {
                                "column": 33,
                                "line": 29
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "range": [
                                1157,
                                1160
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 29
                                },
                                "start": {
                                  "column": 49,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              1157,
                              1160
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 29
                              },
                              "start": {
                                "column": 49,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "range": [
                          1019,
                          1160
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 29
                          },
                          "start": {
                            "column": 61,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      982,
                      1160
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 29
                      },
                      "start": {
                        "column": 24,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  970,
                  1160
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 29
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 30
                    }
                  },
                  "range": [
                    1188,
                    1368
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 30
                            },
                            "start": {
                              "column": 30,
                              "line": 30
                            }
                          },
                          "range": [
                            1192,
                            1196
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "range": [
                                1194,
                                1196
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 30
                                },
                                "start": {
                                  "column": 32,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              1194,
                              1196
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 30
                              },
                              "start": {
                                "column": 32,
                                "line": 30
                              }
                            }
                          }
                        },
                        "range": [
                          1191,
                          1196
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 30
                          },
                          "start": {
                            "column": 29,
                            "line": 30
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 30
                            },
                            "start": {
                              "column": 37,
                              "line": 30
                            }
                          },
                          "range": [
                            1199,
                            1203
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "range": [
                                1201,
                                1203
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 30
                                },
                                "start": {
                                  "column": 39,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              1201,
                              1203
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 30
                              },
                              "start": {
                                "column": 39,
                                "line": 30
                              }
                            }
                          }
                        },
                        "range": [
                          1198,
                          1203
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 30
                          },
                          "start": {
                            "column": 36,
                            "line": 30
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 30
                            },
                            "start": {
                              "column": 44,
                              "line": 30
                            }
                          },
                          "range": [
                            1206,
                            1210
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "range": [
                                1208,
                                1210
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 30
                                },
                                "start": {
                                  "column": 46,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              1208,
                              1210
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 30
                              },
                              "start": {
                                "column": 46,
                                "line": 30
                              }
                            }
                          }
                        },
                        "range": [
                          1205,
                          1210
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 30
                          },
                          "start": {
                            "column": 43,
                            "line": 30
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            1215,
                            1216
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 30
                            },
                            "start": {
                              "column": 53,
                              "line": 30
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 30
                            },
                            "start": {
                              "column": 54,
                              "line": 30
                            }
                          },
                          "range": [
                            1216,
                            1222
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "range": [
                                  1218,
                                  1220
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                1218,
                                1220
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 30
                                },
                                "start": {
                                  "column": 56,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              1218,
                              1222
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 30
                              },
                              "start": {
                                "column": 56,
                                "line": 30
                              }
                            }
                          }
                        },
                        "range": [
                          1212,
                          1222
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 30
                          },
                          "start": {
                            "column": 50,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 33
                        },
                        "start": {
                          "column": 62,
                          "line": 30
                        }
                      },
                      "range": [
                        1224,
                        1368
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1238,
                                1346
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "range": [
                                      1239,
                                      1242
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 80,
                                        "line": 30
                                      },
                                      "start": {
                                        "column": 77,
                                        "line": 30
                                      }
                                    }
                                  },
                                  "range": [
                                    1239,
                                    1242
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 80,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 77,
                                      "line": 30
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "range": [
                                      1244,
                                      1247
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 30
                                      },
                                      "start": {
                                        "column": 82,
                                        "line": 30
                                      }
                                    }
                                  },
                                  "range": [
                                    1244,
                                    1247
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 82,
                                      "line": 30
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "range": [
                                      1249,
                                      1252
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 90,
                                        "line": 30
                                      },
                                      "start": {
                                        "column": 87,
                                        "line": 30
                                      }
                                    }
                                  },
                                  "range": [
                                    1249,
                                    1252
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 90,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 87,
                                      "line": 30
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "range": [
                                      1270,
                                      1273
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "range": [
                                    1270,
                                    1273
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 31
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "range": [
                                      1275,
                                      1278
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "range": [
                                    1275,
                                    1278
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 31
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "range": [
                                      1280,
                                      1283
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "range": [
                                    1280,
                                    1283
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 31
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "range": [
                                      1301,
                                      1304
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "range": [
                                    1301,
                                    1304
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 32
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "range": [
                                      1306,
                                      1309
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "range": [
                                    1306,
                                    1309
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 32
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "range": [
                                      1311,
                                      1314
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "range": [
                                    1311,
                                    1314
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 32
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "range": [
                                      1332,
                                      1335
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1332,
                                    1335
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 33
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "range": [
                                      1337,
                                      1340
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1337,
                                    1340
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 33
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "range": [
                                      1342,
                                      1345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1342,
                                    1345
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 33
                                },
                                "start": {
                                  "column": 76,
                                  "line": 30
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                1227,
                                1238
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 30
                                },
                                "start": {
                                  "column": 65,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              1227,
                              1346
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 33
                              },
                              "start": {
                                "column": 65,
                                "line": 30
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1357,
                                1362
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "range": [
                                      1358,
                                      1361
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    1358,
                                    1361
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 33
                                },
                                "start": {
                                  "column": 41,
                                  "line": 33
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                1349,
                                1357
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 33
                                },
                                "start": {
                                  "column": 33,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1349,
                              1362
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 33
                              },
                              "start": {
                                "column": 33,
                                "line": 33
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "range": [
                                1365,
                                1368
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 33
                                },
                                "start": {
                                  "column": 49,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1365,
                              1368
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 33
                              },
                              "start": {
                                "column": 49,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "range": [
                          1227,
                          1368
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 33
                          },
                          "start": {
                            "column": 65,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      1190,
                      1368
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 33
                      },
                      "start": {
                        "column": 28,
                        "line": 30
                      }
                    }
                  }
                },
                "range": [
                  1174,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 33
                  },
                  "start": {
                    "column": 12,
                    "line": 30
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 36
                },
                "start": {
                  "column": 53,
                  "line": 33
                }
              },
              "range": [
                1369,
                1610
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1382,
                    1610
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARD",
                            "optional": false,
                            "range": [
                              1383,
                              1386
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 33
                              },
                              "start": {
                                "column": 67,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1383,
                            1386
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 33
                            },
                            "start": {
                              "column": 67,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "range": [
                              1389,
                              1392
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 33
                              },
                              "start": {
                                "column": 73,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1389,
                            1392
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 33
                            },
                            "start": {
                              "column": 73,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARP",
                            "optional": false,
                            "range": [
                              1395,
                              1398
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 33
                              },
                              "start": {
                                "column": 79,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1395,
                            1398
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 33
                            },
                            "start": {
                              "column": 79,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        1383,
                        1398
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 33
                        },
                        "start": {
                          "column": 67,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJD",
                            "optional": false,
                            "range": [
                              1400,
                              1403
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 33
                              },
                              "start": {
                                "column": 84,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1400,
                            1403
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 33
                            },
                            "start": {
                              "column": 84,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "range": [
                              1406,
                              1409
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 33
                              },
                              "start": {
                                "column": 90,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1406,
                            1409
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 33
                            },
                            "start": {
                              "column": 90,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJP",
                            "optional": false,
                            "range": [
                              1412,
                              1415
                            ],
                            "loc": {
                              "end": {
                                "column": 99,
                                "line": 33
                              },
                              "start": {
                                "column": 96,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1412,
                            1415
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 33
                            },
                            "start": {
                              "column": 96,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        1400,
                        1415
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 33
                        },
                        "start": {
                          "column": 84,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AND",
                            "optional": false,
                            "range": [
                              1417,
                              1420
                            ],
                            "loc": {
                              "end": {
                                "column": 104,
                                "line": 33
                              },
                              "start": {
                                "column": 101,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1417,
                            1420
                          ],
                          "loc": {
                            "end": {
                              "column": 104,
                              "line": 33
                            },
                            "start": {
                              "column": 101,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "range": [
                              1423,
                              1426
                            ],
                            "loc": {
                              "end": {
                                "column": 110,
                                "line": 33
                              },
                              "start": {
                                "column": 107,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1423,
                            1426
                          ],
                          "loc": {
                            "end": {
                              "column": 110,
                              "line": 33
                            },
                            "start": {
                              "column": 107,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANP",
                            "optional": false,
                            "range": [
                              1429,
                              1432
                            ],
                            "loc": {
                              "end": {
                                "column": 116,
                                "line": 33
                              },
                              "start": {
                                "column": 113,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1429,
                            1432
                          ],
                          "loc": {
                            "end": {
                              "column": 116,
                              "line": 33
                            },
                            "start": {
                              "column": 113,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        1417,
                        1432
                      ],
                      "loc": {
                        "end": {
                          "column": 116,
                          "line": 33
                        },
                        "start": {
                          "column": 101,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRD",
                            "optional": false,
                            "range": [
                              1442,
                              1445
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 34
                              },
                              "start": {
                                "column": 8,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1442,
                            1445
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 34
                            },
                            "start": {
                              "column": 8,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "range": [
                              1448,
                              1451
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 34
                              },
                              "start": {
                                "column": 14,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1448,
                            1451
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 34
                            },
                            "start": {
                              "column": 14,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRP",
                            "optional": false,
                            "range": [
                              1454,
                              1457
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 34
                              },
                              "start": {
                                "column": 20,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1454,
                            1457
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 34
                            },
                            "start": {
                              "column": 20,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        1442,
                        1457
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJD",
                            "optional": false,
                            "range": [
                              1459,
                              1462
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 34
                              },
                              "start": {
                                "column": 25,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1459,
                            1462
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 34
                            },
                            "start": {
                              "column": 25,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "range": [
                              1465,
                              1468
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 34
                              },
                              "start": {
                                "column": 31,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1465,
                            1468
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 34
                            },
                            "start": {
                              "column": 31,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJP",
                            "optional": false,
                            "range": [
                              1471,
                              1474
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 34
                              },
                              "start": {
                                "column": 37,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1471,
                            1474
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 34
                            },
                            "start": {
                              "column": 37,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        1459,
                        1474
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 34
                        },
                        "start": {
                          "column": 25,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BND",
                            "optional": false,
                            "range": [
                              1476,
                              1479
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 34
                              },
                              "start": {
                                "column": 42,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1476,
                            1479
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 34
                            },
                            "start": {
                              "column": 42,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "range": [
                              1482,
                              1485
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 34
                              },
                              "start": {
                                "column": 48,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1482,
                            1485
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 34
                            },
                            "start": {
                              "column": 48,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNP",
                            "optional": false,
                            "range": [
                              1488,
                              1491
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 34
                              },
                              "start": {
                                "column": 54,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1488,
                            1491
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 34
                            },
                            "start": {
                              "column": 54,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        1476,
                        1491
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 34
                        },
                        "start": {
                          "column": 42,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRD",
                            "optional": false,
                            "range": [
                              1501,
                              1504
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 35
                              },
                              "start": {
                                "column": 8,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1501,
                            1504
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 35
                            },
                            "start": {
                              "column": 8,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "range": [
                              1507,
                              1510
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 35
                              },
                              "start": {
                                "column": 14,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1507,
                            1510
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 35
                            },
                            "start": {
                              "column": 14,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRP",
                            "optional": false,
                            "range": [
                              1513,
                              1516
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 35
                              },
                              "start": {
                                "column": 20,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1513,
                            1516
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 35
                            },
                            "start": {
                              "column": 20,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1501,
                        1516
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJD",
                            "optional": false,
                            "range": [
                              1518,
                              1521
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 35
                              },
                              "start": {
                                "column": 25,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1518,
                            1521
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
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
                            "name": "CJF",
                            "optional": false,
                            "range": [
                              1524,
                              1527
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 35
                              },
                              "start": {
                                "column": 31,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1524,
                            1527
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 35
                            },
                            "start": {
                              "column": 31,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJP",
                            "optional": false,
                            "range": [
                              1530,
                              1533
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 35
                              },
                              "start": {
                                "column": 37,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1530,
                            1533
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 35
                            },
                            "start": {
                              "column": 37,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1518,
                        1533
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 35
                        },
                        "start": {
                          "column": 25,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CND",
                            "optional": false,
                            "range": [
                              1535,
                              1538
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 35
                              },
                              "start": {
                                "column": 42,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1535,
                            1538
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 35
                            },
                            "start": {
                              "column": 42,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "range": [
                              1541,
                              1544
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 35
                              },
                              "start": {
                                "column": 48,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1541,
                            1544
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 35
                            },
                            "start": {
                              "column": 48,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNP",
                            "optional": false,
                            "range": [
                              1547,
                              1550
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 35
                              },
                              "start": {
                                "column": 54,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            1547,
                            1550
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 35
                            },
                            "start": {
                              "column": 54,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1535,
                        1550
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 35
                        },
                        "start": {
                          "column": 42,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRD",
                            "optional": false,
                            "range": [
                              1560,
                              1563
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 36
                              },
                              "start": {
                                "column": 8,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1560,
                            1563
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 36
                            },
                            "start": {
                              "column": 8,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "range": [
                              1566,
                              1569
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 36
                              },
                              "start": {
                                "column": 14,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1566,
                            1569
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 36
                            },
                            "start": {
                              "column": 14,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRP",
                            "optional": false,
                            "range": [
                              1572,
                              1575
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 36
                              },
                              "start": {
                                "column": 20,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1572,
                            1575
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 36
                            },
                            "start": {
                              "column": 20,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        1560,
                        1575
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJD",
                            "optional": false,
                            "range": [
                              1577,
                              1580
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 36
                              },
                              "start": {
                                "column": 25,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1577,
                            1580
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "range": [
                              1583,
                              1586
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 36
                              },
                              "start": {
                                "column": 31,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1583,
                            1586
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 36
                            },
                            "start": {
                              "column": 31,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJP",
                            "optional": false,
                            "range": [
                              1589,
                              1592
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 36
                              },
                              "start": {
                                "column": 37,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1589,
                            1592
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 36
                            },
                            "start": {
                              "column": 37,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        1577,
                        1592
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 36
                        },
                        "start": {
                          "column": 25,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RND",
                            "optional": false,
                            "range": [
                              1594,
                              1597
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 36
                              },
                              "start": {
                                "column": 42,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1594,
                            1597
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 36
                            },
                            "start": {
                              "column": 42,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "range": [
                              1600,
                              1603
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 36
                              },
                              "start": {
                                "column": 48,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1600,
                            1603
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 36
                            },
                            "start": {
                              "column": 48,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNP",
                            "optional": false,
                            "range": [
                              1606,
                              1609
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 36
                              },
                              "start": {
                                "column": 54,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            1606,
                            1609
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 36
                            },
                            "start": {
                              "column": 54,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        1594,
                        1609
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 36
                        },
                        "start": {
                          "column": 42,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 36
                    },
                    "start": {
                      "column": 66,
                      "line": 33
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "range": [
                    1371,
                    1382
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 33
                    },
                    "start": {
                      "column": 55,
                      "line": 33
                    }
                  }
                },
                "range": [
                  1371,
                  1610
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 36
                  },
                  "start": {
                    "column": 55,
                    "line": 33
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                196,
                752
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      203,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "range": [
                      197,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
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
                    197,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      216,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "range": [
                      210,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    210,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      229,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 10
                      },
                      "start": {
                        "column": 41,
                        "line": 10
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "range": [
                      223,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    223,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      250,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "range": [
                      244,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    244,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      263,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 11
                      },
                      "start": {
                        "column": 27,
                        "line": 11
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "range": [
                      257,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    257,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      276,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 11
                      },
                      "start": {
                        "column": 40,
                        "line": 11
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "range": [
                      270,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    270,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      297,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "range": [
                      291,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    291,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      310,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 12
                      },
                      "start": {
                        "column": 27,
                        "line": 12
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "range": [
                      304,
                      307
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 21,
                        "line": 12
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    304,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 12
                    },
                    "start": {
                      "column": 21,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      323,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "range": [
                      317,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 34,
                        "line": 12
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    317,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 12
                    },
                    "start": {
                      "column": 34,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      344,
                      349
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
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "range": [
                      338,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    338,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      357,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 13
                      },
                      "start": {
                        "column": 27,
                        "line": 13
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "range": [
                      351,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    351,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      370,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 13
                      },
                      "start": {
                        "column": 40,
                        "line": 13
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "range": [
                      364,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 13
                      },
                      "start": {
                        "column": 34,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    364,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 13
                    },
                    "start": {
                      "column": 34,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      391,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "range": [
                      385,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    385,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      404,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "range": [
                      398,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    398,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      417,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 14
                      },
                      "start": {
                        "column": 40,
                        "line": 14
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "range": [
                      411,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    411,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      438,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "range": [
                      432,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    432,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      451,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "range": [
                      445,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 15
                      },
                      "start": {
                        "column": 21,
                        "line": 15
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    445,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 21,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      464,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 40,
                        "line": 15
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "range": [
                      458,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 15
                      },
                      "start": {
                        "column": 34,
                        "line": 15
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    458,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 15
                    },
                    "start": {
                      "column": 34,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      485,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 14,
                        "line": 16
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "range": [
                      479,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    479,
                    490
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      498,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 27,
                        "line": 16
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "range": [
                      492,
                      495
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    492,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 21,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      511,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 16
                      },
                      "start": {
                        "column": 40,
                        "line": 16
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "range": [
                      505,
                      508
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 34,
                        "line": 16
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    505,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 34,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      532,
                      537
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "range": [
                      526,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    526,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      545,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "range": [
                      539,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 17
                      },
                      "start": {
                        "column": 21,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    539,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 17
                    },
                    "start": {
                      "column": 21,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      558,
                      563
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 17
                      },
                      "start": {
                        "column": 40,
                        "line": 17
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "range": [
                      552,
                      555
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 34,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    552,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 34,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      579,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 18
                      },
                      "start": {
                        "column": 14,
                        "line": 18
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "range": [
                      573,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    573,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      592,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 18
                      },
                      "start": {
                        "column": 27,
                        "line": 18
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "range": [
                      586,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 18
                      },
                      "start": {
                        "column": 21,
                        "line": 18
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    586,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 21,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      605,
                      610
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 40,
                        "line": 18
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "range": [
                      599,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 18
                      },
                      "start": {
                        "column": 34,
                        "line": 18
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    599,
                    610
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 18
                    },
                    "start": {
                      "column": 34,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      626,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "range": [
                      620,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    620,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      639,
                      644
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 27,
                        "line": 19
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "range": [
                      633,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                    633,
                    644
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 21,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      652,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 19
                      },
                      "start": {
                        "column": 40,
                        "line": 19
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "range": [
                      646,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 19
                      },
                      "start": {
                        "column": 34,
                        "line": 19
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    646,
                    657
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 19
                    },
                    "start": {
                      "column": 34,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      673,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "range": [
                      667,
                      670
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    667,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      686,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 20
                      },
                      "start": {
                        "column": 27,
                        "line": 20
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "range": [
                      680,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 20
                      },
                      "start": {
                        "column": 21,
                        "line": 20
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    680,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 21,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      699,
                      704
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 20
                      },
                      "start": {
                        "column": 40,
                        "line": 20
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "range": [
                      693,
                      696
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 20
                      },
                      "start": {
                        "column": 34,
                        "line": 20
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    693,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 20
                    },
                    "start": {
                      "column": 34,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      720,
                      725
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 14,
                        "line": 21
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "range": [
                      714,
                      717
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    714,
                    725
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      733,
                      738
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 27,
                        "line": 21
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "range": [
                      727,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    727,
                    738
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 21,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      746,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 21
                      },
                      "start": {
                        "column": 40,
                        "line": 21
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "range": [
                      740,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 21
                      },
                      "start": {
                        "column": 34,
                        "line": 21
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    740,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 21
                    },
                    "start": {
                      "column": 34,
                      "line": 21
                    }
                  }
                }
              ]
            },
            "range": [
              192,
              1611
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                1616,
                1620
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 45
                    },
                    "start": {
                      "column": 22,
                      "line": 45
                    }
                  },
                  "range": [
                    2012,
                    2018
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      2014,
                      2018
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 45
                      },
                      "start": {
                        "column": 24,
                        "line": 45
                      }
                    }
                  }
                },
                "range": [
                  2002,
                  2018
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 45
                  },
                  "start": {
                    "column": 12,
                    "line": 45
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 49
                    },
                    "start": {
                      "column": 22,
                      "line": 46
                    }
                  },
                  "range": [
                    2042,
                    2222
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 46
                            },
                            "start": {
                              "column": 26,
                              "line": 46
                            }
                          },
                          "range": [
                            2046,
                            2050
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "range": [
                                2048,
                                2050
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 46
                                },
                                "start": {
                                  "column": 28,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              2048,
                              2050
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 46
                              },
                              "start": {
                                "column": 28,
                                "line": 46
                              }
                            }
                          }
                        },
                        "range": [
                          2045,
                          2050
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 46
                          },
                          "start": {
                            "column": 25,
                            "line": 46
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 46
                            },
                            "start": {
                              "column": 33,
                              "line": 46
                            }
                          },
                          "range": [
                            2053,
                            2057
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "range": [
                                2055,
                                2057
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 46
                                },
                                "start": {
                                  "column": 35,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              2055,
                              2057
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 46
                              },
                              "start": {
                                "column": 35,
                                "line": 46
                              }
                            }
                          }
                        },
                        "range": [
                          2052,
                          2057
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 46
                          },
                          "start": {
                            "column": 32,
                            "line": 46
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 46
                            },
                            "start": {
                              "column": 40,
                              "line": 46
                            }
                          },
                          "range": [
                            2060,
                            2064
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "range": [
                                2062,
                                2064
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 46
                                },
                                "start": {
                                  "column": 42,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              2062,
                              2064
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 46
                              },
                              "start": {
                                "column": 42,
                                "line": 46
                              }
                            }
                          }
                        },
                        "range": [
                          2059,
                          2064
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 46
                          },
                          "start": {
                            "column": 39,
                            "line": 46
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            2069,
                            2070
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 46
                            },
                            "start": {
                              "column": 49,
                              "line": 46
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
                              "line": 46
                            },
                            "start": {
                              "column": 50,
                              "line": 46
                            }
                          },
                          "range": [
                            2070,
                            2076
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "range": [
                                  2072,
                                  2074
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                2072,
                                2074
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 46
                                },
                                "start": {
                                  "column": 52,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              2072,
                              2076
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 46
                              },
                              "start": {
                                "column": 52,
                                "line": 46
                              }
                            }
                          }
                        },
                        "range": [
                          2066,
                          2076
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 46
                          },
                          "start": {
                            "column": 46,
                            "line": 46
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 49
                        },
                        "start": {
                          "column": 58,
                          "line": 46
                        }
                      },
                      "range": [
                        2078,
                        2222
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2092,
                                2200
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      2093,
                                      2096
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 46
                                      }
                                    }
                                  },
                                  "range": [
                                    2093,
                                    2096
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 46
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "range": [
                                      2098,
                                      2101
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 46
                                      }
                                    }
                                  },
                                  "range": [
                                    2098,
                                    2101
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 46
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "range": [
                                      2103,
                                      2106
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 46
                                      }
                                    }
                                  },
                                  "range": [
                                    2103,
                                    2106
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 46
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "range": [
                                      2124,
                                      2127
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "range": [
                                    2124,
                                    2127
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 47
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "range": [
                                      2129,
                                      2132
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "range": [
                                    2129,
                                    2132
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 47
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "range": [
                                      2134,
                                      2137
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "range": [
                                    2134,
                                    2137
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 47
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "range": [
                                      2155,
                                      2158
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 48
                                      }
                                    }
                                  },
                                  "range": [
                                    2155,
                                    2158
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 48
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "range": [
                                      2160,
                                      2163
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 48
                                      }
                                    }
                                  },
                                  "range": [
                                    2160,
                                    2163
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 48
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "range": [
                                      2165,
                                      2168
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 48
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 48
                                      }
                                    }
                                  },
                                  "range": [
                                    2165,
                                    2168
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 48
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 48
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "range": [
                                      2186,
                                      2189
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2186,
                                    2189
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 49
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "range": [
                                      2191,
                                      2194
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2191,
                                    2194
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 49
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "range": [
                                      2196,
                                      2199
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2196,
                                    2199
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 49
                                },
                                "start": {
                                  "column": 72,
                                  "line": 46
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                2081,
                                2092
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 46
                                },
                                "start": {
                                  "column": 61,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              2081,
                              2200
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 49
                              },
                              "start": {
                                "column": 61,
                                "line": 46
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2211,
                                2216
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      2212,
                                      2215
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    2212,
                                    2215
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 49
                                },
                                "start": {
                                  "column": 41,
                                  "line": 49
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                2203,
                                2211
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 49
                                },
                                "start": {
                                  "column": 33,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              2203,
                              2216
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 49
                              },
                              "start": {
                                "column": 33,
                                "line": 49
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "range": [
                                2219,
                                2222
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 49
                                },
                                "start": {
                                  "column": 49,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              2219,
                              2222
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 49
                              },
                              "start": {
                                "column": 49,
                                "line": 49
                              }
                            }
                          }
                        ],
                        "range": [
                          2081,
                          2222
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 49
                          },
                          "start": {
                            "column": 61,
                            "line": 46
                          }
                        }
                      }
                    },
                    "range": [
                      2044,
                      2222
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 49
                      },
                      "start": {
                        "column": 24,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  2032,
                  2222
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 49
                  },
                  "start": {
                    "column": 12,
                    "line": 46
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 53
                    },
                    "start": {
                      "column": 26,
                      "line": 50
                    }
                  },
                  "range": [
                    2250,
                    2430
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 50
                            },
                            "start": {
                              "column": 30,
                              "line": 50
                            }
                          },
                          "range": [
                            2254,
                            2258
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "range": [
                                2256,
                                2258
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 50
                                },
                                "start": {
                                  "column": 32,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              2256,
                              2258
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 50
                              },
                              "start": {
                                "column": 32,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          2253,
                          2258
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 50
                          },
                          "start": {
                            "column": 29,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 50
                            },
                            "start": {
                              "column": 37,
                              "line": 50
                            }
                          },
                          "range": [
                            2261,
                            2265
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "range": [
                                2263,
                                2265
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 50
                                },
                                "start": {
                                  "column": 39,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              2263,
                              2265
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 50
                              },
                              "start": {
                                "column": 39,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          2260,
                          2265
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 50
                          },
                          "start": {
                            "column": 36,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 50
                            },
                            "start": {
                              "column": 44,
                              "line": 50
                            }
                          },
                          "range": [
                            2268,
                            2272
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "range": [
                                2270,
                                2272
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 50
                                },
                                "start": {
                                  "column": 46,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              2270,
                              2272
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 50
                              },
                              "start": {
                                "column": 46,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          2267,
                          2272
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 50
                          },
                          "start": {
                            "column": 43,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            2277,
                            2278
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 50
                            },
                            "start": {
                              "column": 53,
                              "line": 50
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 50
                            },
                            "start": {
                              "column": 54,
                              "line": 50
                            }
                          },
                          "range": [
                            2278,
                            2284
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "range": [
                                  2280,
                                  2282
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 50
                                  }
                                }
                              },
                              "range": [
                                2280,
                                2282
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 50
                                },
                                "start": {
                                  "column": 56,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              2280,
                              2284
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 50
                              },
                              "start": {
                                "column": 56,
                                "line": 50
                              }
                            }
                          }
                        },
                        "range": [
                          2274,
                          2284
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 50
                          },
                          "start": {
                            "column": 50,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 53
                        },
                        "start": {
                          "column": 62,
                          "line": 50
                        }
                      },
                      "range": [
                        2286,
                        2430
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2300,
                                2408
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "range": [
                                      2301,
                                      2304
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 80,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 77,
                                        "line": 50
                                      }
                                    }
                                  },
                                  "range": [
                                    2301,
                                    2304
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 80,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 77,
                                      "line": 50
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "range": [
                                      2306,
                                      2309
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 85,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 82,
                                        "line": 50
                                      }
                                    }
                                  },
                                  "range": [
                                    2306,
                                    2309
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 85,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 82,
                                      "line": 50
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "range": [
                                      2311,
                                      2314
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 90,
                                        "line": 50
                                      },
                                      "start": {
                                        "column": 87,
                                        "line": 50
                                      }
                                    }
                                  },
                                  "range": [
                                    2311,
                                    2314
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 90,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 87,
                                      "line": 50
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "range": [
                                      2332,
                                      2335
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 51
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 51
                                      }
                                    }
                                  },
                                  "range": [
                                    2332,
                                    2335
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 51
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "range": [
                                      2337,
                                      2340
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 51
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 51
                                      }
                                    }
                                  },
                                  "range": [
                                    2337,
                                    2340
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 51
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "range": [
                                      2342,
                                      2345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 51
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 51
                                      }
                                    }
                                  },
                                  "range": [
                                    2342,
                                    2345
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 51
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 51
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "range": [
                                      2363,
                                      2366
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 52
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 52
                                      }
                                    }
                                  },
                                  "range": [
                                    2363,
                                    2366
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 52
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "range": [
                                      2368,
                                      2371
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 52
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 52
                                      }
                                    }
                                  },
                                  "range": [
                                    2368,
                                    2371
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 52
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "range": [
                                      2373,
                                      2376
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 52
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 52
                                      }
                                    }
                                  },
                                  "range": [
                                    2373,
                                    2376
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 52
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 52
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "range": [
                                      2394,
                                      2397
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 53
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 53
                                      }
                                    }
                                  },
                                  "range": [
                                    2394,
                                    2397
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 53
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "range": [
                                      2399,
                                      2402
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 53
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 53
                                      }
                                    }
                                  },
                                  "range": [
                                    2399,
                                    2402
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 53
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "range": [
                                      2404,
                                      2407
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 53
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 53
                                      }
                                    }
                                  },
                                  "range": [
                                    2404,
                                    2407
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 53
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 53
                                },
                                "start": {
                                  "column": 76,
                                  "line": 50
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                2289,
                                2300
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 50
                                },
                                "start": {
                                  "column": 65,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              2289,
                              2408
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 53
                              },
                              "start": {
                                "column": 65,
                                "line": 50
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2419,
                                2424
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "range": [
                                      2420,
                                      2423
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 53
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 53
                                      }
                                    }
                                  },
                                  "range": [
                                    2420,
                                    2423
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 53
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 53
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 53
                                },
                                "start": {
                                  "column": 41,
                                  "line": 53
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                2411,
                                2419
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 53
                                },
                                "start": {
                                  "column": 33,
                                  "line": 53
                                }
                              }
                            },
                            "range": [
                              2411,
                              2424
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 53
                              },
                              "start": {
                                "column": 33,
                                "line": 53
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "range": [
                                2427,
                                2430
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 53
                                },
                                "start": {
                                  "column": 49,
                                  "line": 53
                                }
                              }
                            },
                            "range": [
                              2427,
                              2430
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 53
                              },
                              "start": {
                                "column": 49,
                                "line": 53
                              }
                            }
                          }
                        ],
                        "range": [
                          2289,
                          2430
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 53
                          },
                          "start": {
                            "column": 65,
                            "line": 50
                          }
                        }
                      }
                    },
                    "range": [
                      2252,
                      2430
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 53
                      },
                      "start": {
                        "column": 28,
                        "line": 50
                      }
                    }
                  }
                },
                "range": [
                  2236,
                  2430
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 53
                  },
                  "start": {
                    "column": 12,
                    "line": 50
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 56
                },
                "start": {
                  "column": 53,
                  "line": 53
                }
              },
              "range": [
                2431,
                2600
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    2444,
                    2600
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "range": [
                              2445,
                              2448
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 53
                              },
                              "start": {
                                "column": 67,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            2445,
                            2448
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 53
                            },
                            "start": {
                              "column": 67,
                              "line": 53
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARP",
                            "optional": false,
                            "range": [
                              2451,
                              2454
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 53
                              },
                              "start": {
                                "column": 73,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            2451,
                            2454
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 53
                            },
                            "start": {
                              "column": 73,
                              "line": 53
                            }
                          }
                        }
                      ],
                      "range": [
                        2445,
                        2454
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 53
                        },
                        "start": {
                          "column": 67,
                          "line": 53
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "range": [
                              2456,
                              2459
                            ],
                            "loc": {
                              "end": {
                                "column": 81,
                                "line": 53
                              },
                              "start": {
                                "column": 78,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            2456,
                            2459
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 53
                            },
                            "start": {
                              "column": 78,
                              "line": 53
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJP",
                            "optional": false,
                            "range": [
                              2462,
                              2465
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 53
                              },
                              "start": {
                                "column": 84,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            2462,
                            2465
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 53
                            },
                            "start": {
                              "column": 84,
                              "line": 53
                            }
                          }
                        }
                      ],
                      "range": [
                        2456,
                        2465
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 53
                        },
                        "start": {
                          "column": 78,
                          "line": 53
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "range": [
                              2467,
                              2470
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 53
                              },
                              "start": {
                                "column": 89,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            2467,
                            2470
                          ],
                          "loc": {
                            "end": {
                              "column": 92,
                              "line": 53
                            },
                            "start": {
                              "column": 89,
                              "line": 53
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANP",
                            "optional": false,
                            "range": [
                              2473,
                              2476
                            ],
                            "loc": {
                              "end": {
                                "column": 98,
                                "line": 53
                              },
                              "start": {
                                "column": 95,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            2473,
                            2476
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 53
                            },
                            "start": {
                              "column": 95,
                              "line": 53
                            }
                          }
                        }
                      ],
                      "range": [
                        2467,
                        2476
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 53
                        },
                        "start": {
                          "column": 89,
                          "line": 53
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "range": [
                              2486,
                              2489
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 54
                              },
                              "start": {
                                "column": 8,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2486,
                            2489
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 54
                            },
                            "start": {
                              "column": 8,
                              "line": 54
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRP",
                            "optional": false,
                            "range": [
                              2492,
                              2495
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 54
                              },
                              "start": {
                                "column": 14,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2492,
                            2495
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 54
                            },
                            "start": {
                              "column": 14,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "range": [
                        2486,
                        2495
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 54
                        },
                        "start": {
                          "column": 8,
                          "line": 54
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "range": [
                              2497,
                              2500
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 54
                              },
                              "start": {
                                "column": 19,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2497,
                            2500
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 54
                            },
                            "start": {
                              "column": 19,
                              "line": 54
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJP",
                            "optional": false,
                            "range": [
                              2503,
                              2506
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 54
                              },
                              "start": {
                                "column": 25,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2503,
                            2506
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 54
                            },
                            "start": {
                              "column": 25,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "range": [
                        2497,
                        2506
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 54
                        },
                        "start": {
                          "column": 19,
                          "line": 54
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "range": [
                              2508,
                              2511
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
                          "range": [
                            2508,
                            2511
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
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNP",
                            "optional": false,
                            "range": [
                              2514,
                              2517
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 54
                              },
                              "start": {
                                "column": 36,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            2514,
                            2517
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 54
                            },
                            "start": {
                              "column": 36,
                              "line": 54
                            }
                          }
                        }
                      ],
                      "range": [
                        2508,
                        2517
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "range": [
                              2527,
                              2530
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 55
                              },
                              "start": {
                                "column": 8,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2527,
                            2530
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 55
                            },
                            "start": {
                              "column": 8,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRP",
                            "optional": false,
                            "range": [
                              2533,
                              2536
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 55
                              },
                              "start": {
                                "column": 14,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2533,
                            2536
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 55
                            },
                            "start": {
                              "column": 14,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        2527,
                        2536
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "range": [
                              2538,
                              2541
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 55
                              },
                              "start": {
                                "column": 19,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2538,
                            2541
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 55
                            },
                            "start": {
                              "column": 19,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJP",
                            "optional": false,
                            "range": [
                              2544,
                              2547
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 55
                              },
                              "start": {
                                "column": 25,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2544,
                            2547
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 55
                            },
                            "start": {
                              "column": 25,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        2538,
                        2547
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 55
                        },
                        "start": {
                          "column": 19,
                          "line": 55
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "range": [
                              2549,
                              2552
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 55
                              },
                              "start": {
                                "column": 30,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2549,
                            2552
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 55
                            },
                            "start": {
                              "column": 30,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNP",
                            "optional": false,
                            "range": [
                              2555,
                              2558
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 55
                              },
                              "start": {
                                "column": 36,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            2555,
                            2558
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 55
                            },
                            "start": {
                              "column": 36,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        2549,
                        2558
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 55
                        },
                        "start": {
                          "column": 30,
                          "line": 55
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "range": [
                              2568,
                              2571
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 56
                              },
                              "start": {
                                "column": 8,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            2568,
                            2571
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 56
                            },
                            "start": {
                              "column": 8,
                              "line": 56
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRP",
                            "optional": false,
                            "range": [
                              2574,
                              2577
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 56
                              },
                              "start": {
                                "column": 14,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            2574,
                            2577
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 56
                            },
                            "start": {
                              "column": 14,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        2568,
                        2577
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 56
                        },
                        "start": {
                          "column": 8,
                          "line": 56
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "range": [
                              2579,
                              2582
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 56
                              },
                              "start": {
                                "column": 19,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            2579,
                            2582
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 56
                            },
                            "start": {
                              "column": 19,
                              "line": 56
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJP",
                            "optional": false,
                            "range": [
                              2585,
                              2588
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 56
                              },
                              "start": {
                                "column": 25,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            2585,
                            2588
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 56
                            },
                            "start": {
                              "column": 25,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        2579,
                        2588
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 56
                        },
                        "start": {
                          "column": 19,
                          "line": 56
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "range": [
                              2590,
                              2593
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 56
                              },
                              "start": {
                                "column": 30,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            2590,
                            2593
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 56
                            },
                            "start": {
                              "column": 30,
                              "line": 56
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNP",
                            "optional": false,
                            "range": [
                              2596,
                              2599
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 56
                              },
                              "start": {
                                "column": 36,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            2596,
                            2599
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 56
                            },
                            "start": {
                              "column": 36,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        2590,
                        2599
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 56
                        },
                        "start": {
                          "column": 30,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 56
                    },
                    "start": {
                      "column": 66,
                      "line": 53
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "range": [
                    2433,
                    2444
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 53
                    },
                    "start": {
                      "column": 55,
                      "line": 53
                    }
                  }
                },
                "range": [
                  2433,
                  2600
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 56
                  },
                  "start": {
                    "column": 55,
                    "line": 53
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              },
              "range": [
                1620,
                1988
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1627,
                      1632
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 37
                      },
                      "start": {
                        "column": 15,
                        "line": 37
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "range": [
                      1621,
                      1624
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 37
                      },
                      "start": {
                        "column": 9,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1621,
                    1632
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 37
                    },
                    "start": {
                      "column": 9,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1640,
                      1645
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 37
                      },
                      "start": {
                        "column": 28,
                        "line": 37
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "range": [
                      1634,
                      1637
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 37
                      },
                      "start": {
                        "column": 22,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1634,
                    1645
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 37
                    },
                    "start": {
                      "column": 22,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1653,
                      1658
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 37
                      },
                      "start": {
                        "column": 41,
                        "line": 37
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "range": [
                      1647,
                      1650
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 37
                      },
                      "start": {
                        "column": 35,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1647,
                    1658
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 37
                    },
                    "start": {
                      "column": 35,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1674,
                      1679
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 38
                      },
                      "start": {
                        "column": 14,
                        "line": 38
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "range": [
                      1668,
                      1671
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1668,
                    1679
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1687,
                      1692
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 38
                      },
                      "start": {
                        "column": 27,
                        "line": 38
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "range": [
                      1681,
                      1684
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 38
                      },
                      "start": {
                        "column": 21,
                        "line": 38
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1681,
                    1692
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 38
                    },
                    "start": {
                      "column": 21,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1700,
                      1705
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 38
                      },
                      "start": {
                        "column": 40,
                        "line": 38
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "range": [
                      1694,
                      1697
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 38
                      },
                      "start": {
                        "column": 34,
                        "line": 38
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1694,
                    1705
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 38
                    },
                    "start": {
                      "column": 34,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1721,
                      1726
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 14,
                        "line": 39
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "range": [
                      1715,
                      1718
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1715,
                    1726
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1734,
                      1739
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 39
                      },
                      "start": {
                        "column": 27,
                        "line": 39
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "range": [
                      1728,
                      1731
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 39
                      },
                      "start": {
                        "column": 21,
                        "line": 39
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1728,
                    1739
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 39
                    },
                    "start": {
                      "column": 21,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1747,
                      1752
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 39
                      },
                      "start": {
                        "column": 40,
                        "line": 39
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "range": [
                      1741,
                      1744
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 39
                      },
                      "start": {
                        "column": 34,
                        "line": 39
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1741,
                    1752
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 39
                    },
                    "start": {
                      "column": 34,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1768,
                      1773
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 40
                      },
                      "start": {
                        "column": 14,
                        "line": 40
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "range": [
                      1762,
                      1765
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1762,
                    1773
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1781,
                      1786
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 40
                      },
                      "start": {
                        "column": 27,
                        "line": 40
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "range": [
                      1775,
                      1778
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 40
                      },
                      "start": {
                        "column": 21,
                        "line": 40
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1775,
                    1786
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 40
                    },
                    "start": {
                      "column": 21,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1794,
                      1799
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 40
                      },
                      "start": {
                        "column": 40,
                        "line": 40
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "range": [
                      1788,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 40
                      },
                      "start": {
                        "column": 34,
                        "line": 40
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1788,
                    1799
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 40
                    },
                    "start": {
                      "column": 34,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1815,
                      1820
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 41
                      },
                      "start": {
                        "column": 14,
                        "line": 41
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "range": [
                      1809,
                      1812
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1809,
                    1820
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1828,
                      1833
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 41
                      },
                      "start": {
                        "column": 27,
                        "line": 41
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "range": [
                      1822,
                      1825
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 41
                      },
                      "start": {
                        "column": 21,
                        "line": 41
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1822,
                    1833
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 41
                    },
                    "start": {
                      "column": 21,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1841,
                      1846
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 41
                      },
                      "start": {
                        "column": 40,
                        "line": 41
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "range": [
                      1835,
                      1838
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 41
                      },
                      "start": {
                        "column": 34,
                        "line": 41
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1835,
                    1846
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 41
                    },
                    "start": {
                      "column": 34,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1862,
                      1867
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 42
                      },
                      "start": {
                        "column": 14,
                        "line": 42
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "range": [
                      1856,
                      1859
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1856,
                    1867
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1875,
                      1880
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 27,
                        "line": 42
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "range": [
                      1869,
                      1872
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 42
                      },
                      "start": {
                        "column": 21,
                        "line": 42
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1869,
                    1880
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 21,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1888,
                      1893
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 42
                      },
                      "start": {
                        "column": 40,
                        "line": 42
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "range": [
                      1882,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 42
                      },
                      "start": {
                        "column": 34,
                        "line": 42
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1882,
                    1893
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 42
                    },
                    "start": {
                      "column": 34,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1909,
                      1914
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 43
                      },
                      "start": {
                        "column": 14,
                        "line": 43
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "range": [
                      1903,
                      1906
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1903,
                    1914
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1922,
                      1927
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 43
                      },
                      "start": {
                        "column": 27,
                        "line": 43
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "range": [
                      1916,
                      1919
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 43
                      },
                      "start": {
                        "column": 21,
                        "line": 43
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1916,
                    1927
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 43
                    },
                    "start": {
                      "column": 21,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1935,
                      1940
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 43
                      },
                      "start": {
                        "column": 40,
                        "line": 43
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "range": [
                      1929,
                      1932
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 43
                      },
                      "start": {
                        "column": 34,
                        "line": 43
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1929,
                    1940
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 43
                    },
                    "start": {
                      "column": 34,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1956,
                      1961
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 44
                      },
                      "start": {
                        "column": 14,
                        "line": 44
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "range": [
                      1950,
                      1953
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1950,
                    1961
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1969,
                      1974
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 44
                      },
                      "start": {
                        "column": 27,
                        "line": 44
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "range": [
                      1963,
                      1966
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 44
                      },
                      "start": {
                        "column": 21,
                        "line": 44
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1963,
                    1974
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 44
                    },
                    "start": {
                      "column": 21,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      1982,
                      1987
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 44
                      },
                      "start": {
                        "column": 40,
                        "line": 44
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "range": [
                      1976,
                      1979
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 44
                      },
                      "start": {
                        "column": 34,
                        "line": 44
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1976,
                    1987
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 44
                    },
                    "start": {
                      "column": 34,
                      "line": 44
                    }
                  }
                }
              ]
            },
            "range": [
              1616,
              2601
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                2606,
                2610
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 61
                    },
                    "start": {
                      "column": 22,
                      "line": 61
                    }
                  },
                  "range": [
                    2814,
                    2820
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      2816,
                      2820
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 61
                      },
                      "start": {
                        "column": 24,
                        "line": 61
                      }
                    }
                  }
                },
                "range": [
                  2804,
                  2820
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 61
                  },
                  "start": {
                    "column": 12,
                    "line": 61
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 62
                    },
                    "start": {
                      "column": 22,
                      "line": 62
                    }
                  },
                  "range": [
                    2844,
                    2850
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      2846,
                      2850
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 62
                      },
                      "start": {
                        "column": 24,
                        "line": 62
                      }
                    }
                  }
                },
                "range": [
                  2834,
                  2850
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 62
                  },
                  "start": {
                    "column": 12,
                    "line": 62
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 66
                    },
                    "start": {
                      "column": 27,
                      "line": 63
                    }
                  },
                  "range": [
                    2879,
                    3059
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 63
                            },
                            "start": {
                              "column": 31,
                              "line": 63
                            }
                          },
                          "range": [
                            2883,
                            2887
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "range": [
                                2885,
                                2887
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 63
                                },
                                "start": {
                                  "column": 33,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              2885,
                              2887
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 63
                              },
                              "start": {
                                "column": 33,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          2882,
                          2887
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 63
                          },
                          "start": {
                            "column": 30,
                            "line": 63
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 63
                            },
                            "start": {
                              "column": 38,
                              "line": 63
                            }
                          },
                          "range": [
                            2890,
                            2894
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "range": [
                                2892,
                                2894
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 63
                                },
                                "start": {
                                  "column": 40,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              2892,
                              2894
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 63
                              },
                              "start": {
                                "column": 40,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          2889,
                          2894
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 63
                          },
                          "start": {
                            "column": 37,
                            "line": 63
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 63
                            },
                            "start": {
                              "column": 45,
                              "line": 63
                            }
                          },
                          "range": [
                            2897,
                            2901
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "range": [
                                2899,
                                2901
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 63
                                },
                                "start": {
                                  "column": 47,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              2899,
                              2901
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 63
                              },
                              "start": {
                                "column": 47,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          2896,
                          2901
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 63
                          },
                          "start": {
                            "column": 44,
                            "line": 63
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            2906,
                            2907
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 63
                            },
                            "start": {
                              "column": 54,
                              "line": 63
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 63
                            },
                            "start": {
                              "column": 55,
                              "line": 63
                            }
                          },
                          "range": [
                            2907,
                            2913
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "range": [
                                  2909,
                                  2911
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 63
                                  }
                                }
                              },
                              "range": [
                                2909,
                                2911
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 63
                                },
                                "start": {
                                  "column": 57,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              2909,
                              2913
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 63
                              },
                              "start": {
                                "column": 57,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          2903,
                          2913
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 63
                          },
                          "start": {
                            "column": 51,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 66
                        },
                        "start": {
                          "column": 63,
                          "line": 63
                        }
                      },
                      "range": [
                        2915,
                        3059
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                2929,
                                3037
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "range": [
                                      2930,
                                      2933
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 63
                                      }
                                    }
                                  },
                                  "range": [
                                    2930,
                                    2933
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 63
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "range": [
                                      2935,
                                      2938
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 63
                                      }
                                    }
                                  },
                                  "range": [
                                    2935,
                                    2938
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 63
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "range": [
                                      2940,
                                      2943
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 91,
                                        "line": 63
                                      },
                                      "start": {
                                        "column": 88,
                                        "line": 63
                                      }
                                    }
                                  },
                                  "range": [
                                    2940,
                                    2943
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 91,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 88,
                                      "line": 63
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "range": [
                                      2961,
                                      2964
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 64
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 64
                                      }
                                    }
                                  },
                                  "range": [
                                    2961,
                                    2964
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 64
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "range": [
                                      2966,
                                      2969
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 64
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 64
                                      }
                                    }
                                  },
                                  "range": [
                                    2966,
                                    2969
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 64
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "range": [
                                      2971,
                                      2974
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 64
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 64
                                      }
                                    }
                                  },
                                  "range": [
                                    2971,
                                    2974
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 64
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "range": [
                                      2992,
                                      2995
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "range": [
                                    2992,
                                    2995
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 65
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "range": [
                                      2997,
                                      3000
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "range": [
                                    2997,
                                    3000
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 65
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "range": [
                                      3002,
                                      3005
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "range": [
                                    3002,
                                    3005
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 65
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "range": [
                                      3023,
                                      3026
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 66
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 66
                                      }
                                    }
                                  },
                                  "range": [
                                    3023,
                                    3026
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 66
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "range": [
                                      3028,
                                      3031
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 66
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 66
                                      }
                                    }
                                  },
                                  "range": [
                                    3028,
                                    3031
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 66
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "range": [
                                      3033,
                                      3036
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 66
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 66
                                      }
                                    }
                                  },
                                  "range": [
                                    3033,
                                    3036
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 66
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 66
                                },
                                "start": {
                                  "column": 77,
                                  "line": 63
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                2918,
                                2929
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 63
                                },
                                "start": {
                                  "column": 66,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              2918,
                              3037
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 66
                              },
                              "start": {
                                "column": 66,
                                "line": 63
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3048,
                                3053
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "range": [
                                      3049,
                                      3052
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 66
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 66
                                      }
                                    }
                                  },
                                  "range": [
                                    3049,
                                    3052
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 66
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 66
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 66
                                },
                                "start": {
                                  "column": 41,
                                  "line": 66
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                3040,
                                3048
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 66
                                },
                                "start": {
                                  "column": 33,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              3040,
                              3053
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 66
                              },
                              "start": {
                                "column": 33,
                                "line": 66
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "range": [
                                3056,
                                3059
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 66
                                },
                                "start": {
                                  "column": 49,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              3056,
                              3059
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 66
                              },
                              "start": {
                                "column": 49,
                                "line": 66
                              }
                            }
                          }
                        ],
                        "range": [
                          2918,
                          3059
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 66
                          },
                          "start": {
                            "column": 66,
                            "line": 63
                          }
                        }
                      }
                    },
                    "range": [
                      2881,
                      3059
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 66
                      },
                      "start": {
                        "column": 29,
                        "line": 63
                      }
                    }
                  }
                },
                "range": [
                  2864,
                  3059
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 66
                  },
                  "start": {
                    "column": 12,
                    "line": 63
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 69
                },
                "start": {
                  "column": 53,
                  "line": 66
                }
              },
              "range": [
                3060,
                3157
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3073,
                    3157
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARP",
                        "optional": false,
                        "range": [
                          3074,
                          3077
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 66
                          },
                          "start": {
                            "column": 67,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        3074,
                        3077
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 66
                        },
                        "start": {
                          "column": 67,
                          "line": 66
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJP",
                        "optional": false,
                        "range": [
                          3079,
                          3082
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 66
                          },
                          "start": {
                            "column": 72,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        3079,
                        3082
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 66
                        },
                        "start": {
                          "column": 72,
                          "line": 66
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ANP",
                        "optional": false,
                        "range": [
                          3084,
                          3087
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 66
                          },
                          "start": {
                            "column": 77,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        3084,
                        3087
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 66
                        },
                        "start": {
                          "column": 77,
                          "line": 66
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRP",
                        "optional": false,
                        "range": [
                          3097,
                          3100
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 67
                          },
                          "start": {
                            "column": 8,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        3097,
                        3100
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJP",
                        "optional": false,
                        "range": [
                          3102,
                          3105
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 67
                          },
                          "start": {
                            "column": 13,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        3102,
                        3105
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 67
                        },
                        "start": {
                          "column": 13,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BNP",
                        "optional": false,
                        "range": [
                          3107,
                          3110
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 67
                          },
                          "start": {
                            "column": 18,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        3107,
                        3110
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 67
                        },
                        "start": {
                          "column": 18,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRP",
                        "optional": false,
                        "range": [
                          3120,
                          3123
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 68
                          },
                          "start": {
                            "column": 8,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        3120,
                        3123
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 68
                        },
                        "start": {
                          "column": 8,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJP",
                        "optional": false,
                        "range": [
                          3125,
                          3128
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 68
                          },
                          "start": {
                            "column": 13,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        3125,
                        3128
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 68
                        },
                        "start": {
                          "column": 13,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CNP",
                        "optional": false,
                        "range": [
                          3130,
                          3133
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 68
                          },
                          "start": {
                            "column": 18,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        3130,
                        3133
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 68
                        },
                        "start": {
                          "column": 18,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRP",
                        "optional": false,
                        "range": [
                          3143,
                          3146
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 69
                          },
                          "start": {
                            "column": 8,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        3143,
                        3146
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 69
                        },
                        "start": {
                          "column": 8,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJP",
                        "optional": false,
                        "range": [
                          3148,
                          3151
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 69
                          },
                          "start": {
                            "column": 13,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        3148,
                        3151
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 69
                        },
                        "start": {
                          "column": 13,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RNP",
                        "optional": false,
                        "range": [
                          3153,
                          3156
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 69
                          },
                          "start": {
                            "column": 18,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        3153,
                        3156
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 69
                        },
                        "start": {
                          "column": 18,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 69
                    },
                    "start": {
                      "column": 66,
                      "line": 66
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "range": [
                    3062,
                    3073
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 66
                    },
                    "start": {
                      "column": 55,
                      "line": 66
                    }
                  }
                },
                "range": [
                  3062,
                  3157
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 69
                  },
                  "start": {
                    "column": 55,
                    "line": 66
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 57
                }
              },
              "range": [
                2610,
                2790
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2617,
                      2622
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 57
                      },
                      "start": {
                        "column": 15,
                        "line": 57
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "range": [
                      2611,
                      2614
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 57
                      },
                      "start": {
                        "column": 9,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2611,
                    2622
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 57
                    },
                    "start": {
                      "column": 9,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2630,
                      2635
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 57
                      },
                      "start": {
                        "column": 28,
                        "line": 57
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "range": [
                      2624,
                      2627
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 57
                      },
                      "start": {
                        "column": 22,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2624,
                    2635
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 57
                    },
                    "start": {
                      "column": 22,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2643,
                      2648
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 57
                      },
                      "start": {
                        "column": 41,
                        "line": 57
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "range": [
                      2637,
                      2640
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 57
                      },
                      "start": {
                        "column": 35,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2637,
                    2648
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 57
                    },
                    "start": {
                      "column": 35,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2664,
                      2669
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 14,
                        "line": 58
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "range": [
                      2658,
                      2661
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2658,
                    2669
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2677,
                      2682
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 58
                      },
                      "start": {
                        "column": 27,
                        "line": 58
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "range": [
                      2671,
                      2674
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
                  "out": false,
                  "range": [
                    2671,
                    2682
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 58
                    },
                    "start": {
                      "column": 21,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2690,
                      2695
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 58
                      },
                      "start": {
                        "column": 40,
                        "line": 58
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "range": [
                      2684,
                      2687
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 58
                      },
                      "start": {
                        "column": 34,
                        "line": 58
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2684,
                    2695
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 58
                    },
                    "start": {
                      "column": 34,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2711,
                      2716
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 59
                      },
                      "start": {
                        "column": 14,
                        "line": 59
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "range": [
                      2705,
                      2708
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2705,
                    2716
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2724,
                      2729
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 59
                      },
                      "start": {
                        "column": 27,
                        "line": 59
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "range": [
                      2718,
                      2721
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
                  "out": false,
                  "range": [
                    2718,
                    2729
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 59
                    },
                    "start": {
                      "column": 21,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2737,
                      2742
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 59
                      },
                      "start": {
                        "column": 40,
                        "line": 59
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "range": [
                      2731,
                      2734
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 59
                      },
                      "start": {
                        "column": 34,
                        "line": 59
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2731,
                    2742
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 59
                    },
                    "start": {
                      "column": 34,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2758,
                      2763
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 60
                      },
                      "start": {
                        "column": 14,
                        "line": 60
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "range": [
                      2752,
                      2755
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2752,
                    2763
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2771,
                      2776
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 60
                      },
                      "start": {
                        "column": 27,
                        "line": 60
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "range": [
                      2765,
                      2768
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 60
                      },
                      "start": {
                        "column": 21,
                        "line": 60
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2765,
                    2776
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 60
                    },
                    "start": {
                      "column": 21,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      2784,
                      2789
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 60
                      },
                      "start": {
                        "column": 40,
                        "line": 60
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "range": [
                      2778,
                      2781
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 60
                      },
                      "start": {
                        "column": 34,
                        "line": 60
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2778,
                    2789
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 60
                    },
                    "start": {
                      "column": 34,
                      "line": 60
                    }
                  }
                }
              ]
            },
            "range": [
              2606,
              3158
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                3163,
                3167
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 81
                    },
                    "start": {
                      "column": 22,
                      "line": 78
                    }
                  },
                  "range": [
                    3559,
                    3739
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 78
                            },
                            "start": {
                              "column": 26,
                              "line": 78
                            }
                          },
                          "range": [
                            3563,
                            3567
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "range": [
                                3565,
                                3567
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 78
                                },
                                "start": {
                                  "column": 28,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              3565,
                              3567
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 78
                              },
                              "start": {
                                "column": 28,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          3562,
                          3567
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 78
                          },
                          "start": {
                            "column": 25,
                            "line": 78
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 78
                            },
                            "start": {
                              "column": 33,
                              "line": 78
                            }
                          },
                          "range": [
                            3570,
                            3574
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "range": [
                                3572,
                                3574
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 78
                                },
                                "start": {
                                  "column": 35,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              3572,
                              3574
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 78
                              },
                              "start": {
                                "column": 35,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          3569,
                          3574
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 78
                          },
                          "start": {
                            "column": 32,
                            "line": 78
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 78
                            },
                            "start": {
                              "column": 40,
                              "line": 78
                            }
                          },
                          "range": [
                            3577,
                            3581
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "range": [
                                3579,
                                3581
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 78
                                },
                                "start": {
                                  "column": 42,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              3579,
                              3581
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 78
                              },
                              "start": {
                                "column": 42,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          3576,
                          3581
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 78
                          },
                          "start": {
                            "column": 39,
                            "line": 78
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            3586,
                            3587
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 78
                            },
                            "start": {
                              "column": 49,
                              "line": 78
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
                              "line": 78
                            },
                            "start": {
                              "column": 50,
                              "line": 78
                            }
                          },
                          "range": [
                            3587,
                            3593
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "range": [
                                  3589,
                                  3591
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 78
                                  }
                                }
                              },
                              "range": [
                                3589,
                                3591
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 78
                                },
                                "start": {
                                  "column": 52,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              3589,
                              3593
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 78
                              },
                              "start": {
                                "column": 52,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          3583,
                          3593
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 78
                          },
                          "start": {
                            "column": 46,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 81
                        },
                        "start": {
                          "column": 58,
                          "line": 78
                        }
                      },
                      "range": [
                        3595,
                        3739
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3609,
                                3717
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "range": [
                                      3610,
                                      3613
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 78
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 78
                                      }
                                    }
                                  },
                                  "range": [
                                    3610,
                                    3613
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 78
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "range": [
                                      3615,
                                      3618
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 78
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 78
                                      }
                                    }
                                  },
                                  "range": [
                                    3615,
                                    3618
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 78
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "range": [
                                      3620,
                                      3623
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 78
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 78
                                      }
                                    }
                                  },
                                  "range": [
                                    3620,
                                    3623
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 78
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "range": [
                                      3641,
                                      3644
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "range": [
                                    3641,
                                    3644
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 79
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "range": [
                                      3646,
                                      3649
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "range": [
                                    3646,
                                    3649
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 79
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "range": [
                                      3651,
                                      3654
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 79
                                      }
                                    }
                                  },
                                  "range": [
                                    3651,
                                    3654
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 79
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 79
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "range": [
                                      3672,
                                      3675
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "range": [
                                    3672,
                                    3675
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 80
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "range": [
                                      3677,
                                      3680
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "range": [
                                    3677,
                                    3680
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 80
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "range": [
                                      3682,
                                      3685
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 80
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 80
                                      }
                                    }
                                  },
                                  "range": [
                                    3682,
                                    3685
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 80
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 80
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "range": [
                                      3703,
                                      3706
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    3703,
                                    3706
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 81
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "range": [
                                      3708,
                                      3711
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    3708,
                                    3711
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 81
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "range": [
                                      3713,
                                      3716
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    3713,
                                    3716
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 81
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 81
                                },
                                "start": {
                                  "column": 72,
                                  "line": 78
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                3598,
                                3609
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 78
                                },
                                "start": {
                                  "column": 61,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              3598,
                              3717
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 81
                              },
                              "start": {
                                "column": 61,
                                "line": 78
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3728,
                                3733
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "range": [
                                      3729,
                                      3732
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    3729,
                                    3732
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 81
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 81
                                },
                                "start": {
                                  "column": 41,
                                  "line": 81
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                3720,
                                3728
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 81
                                },
                                "start": {
                                  "column": 33,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              3720,
                              3733
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 81
                              },
                              "start": {
                                "column": 33,
                                "line": 81
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "range": [
                                3736,
                                3739
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 81
                                },
                                "start": {
                                  "column": 49,
                                  "line": 81
                                }
                              }
                            },
                            "range": [
                              3736,
                              3739
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 81
                              },
                              "start": {
                                "column": 49,
                                "line": 81
                              }
                            }
                          }
                        ],
                        "range": [
                          3598,
                          3739
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 81
                          },
                          "start": {
                            "column": 61,
                            "line": 78
                          }
                        }
                      }
                    },
                    "range": [
                      3561,
                      3739
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 81
                      },
                      "start": {
                        "column": 24,
                        "line": 78
                      }
                    }
                  }
                },
                "range": [
                  3549,
                  3739
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 81
                  },
                  "start": {
                    "column": 12,
                    "line": 78
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 85
                    },
                    "start": {
                      "column": 22,
                      "line": 82
                    }
                  },
                  "range": [
                    3763,
                    3943
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 82
                            },
                            "start": {
                              "column": 26,
                              "line": 82
                            }
                          },
                          "range": [
                            3767,
                            3771
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "range": [
                                3769,
                                3771
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 82
                                },
                                "start": {
                                  "column": 28,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              3769,
                              3771
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 82
                              },
                              "start": {
                                "column": 28,
                                "line": 82
                              }
                            }
                          }
                        },
                        "range": [
                          3766,
                          3771
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 82
                          },
                          "start": {
                            "column": 25,
                            "line": 82
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 82
                            },
                            "start": {
                              "column": 33,
                              "line": 82
                            }
                          },
                          "range": [
                            3774,
                            3778
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "range": [
                                3776,
                                3778
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 82
                                },
                                "start": {
                                  "column": 35,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              3776,
                              3778
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 82
                              },
                              "start": {
                                "column": 35,
                                "line": 82
                              }
                            }
                          }
                        },
                        "range": [
                          3773,
                          3778
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 82
                          },
                          "start": {
                            "column": 32,
                            "line": 82
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 82
                            },
                            "start": {
                              "column": 40,
                              "line": 82
                            }
                          },
                          "range": [
                            3781,
                            3785
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "range": [
                                3783,
                                3785
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 82
                                },
                                "start": {
                                  "column": 42,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              3783,
                              3785
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 82
                              },
                              "start": {
                                "column": 42,
                                "line": 82
                              }
                            }
                          }
                        },
                        "range": [
                          3780,
                          3785
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 82
                          },
                          "start": {
                            "column": 39,
                            "line": 82
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            3790,
                            3791
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 82
                            },
                            "start": {
                              "column": 49,
                              "line": 82
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
                              "line": 82
                            },
                            "start": {
                              "column": 50,
                              "line": 82
                            }
                          },
                          "range": [
                            3791,
                            3797
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "range": [
                                  3793,
                                  3795
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 82
                                  }
                                }
                              },
                              "range": [
                                3793,
                                3795
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 82
                                },
                                "start": {
                                  "column": 52,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              3793,
                              3797
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 82
                              },
                              "start": {
                                "column": 52,
                                "line": 82
                              }
                            }
                          }
                        },
                        "range": [
                          3787,
                          3797
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 82
                          },
                          "start": {
                            "column": 46,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 85
                        },
                        "start": {
                          "column": 58,
                          "line": 82
                        }
                      },
                      "range": [
                        3799,
                        3943
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3813,
                                3921
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      3814,
                                      3817
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "range": [
                                    3814,
                                    3817
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 82
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "range": [
                                      3819,
                                      3822
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "range": [
                                    3819,
                                    3822
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 82
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "range": [
                                      3824,
                                      3827
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "range": [
                                    3824,
                                    3827
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 82
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "range": [
                                      3845,
                                      3848
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 83
                                      }
                                    }
                                  },
                                  "range": [
                                    3845,
                                    3848
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 83
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 83
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "range": [
                                      3850,
                                      3853
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 83
                                      }
                                    }
                                  },
                                  "range": [
                                    3850,
                                    3853
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 83
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 83
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "range": [
                                      3855,
                                      3858
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 83
                                      }
                                    }
                                  },
                                  "range": [
                                    3855,
                                    3858
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 83
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 83
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "range": [
                                      3876,
                                      3879
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 84
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 84
                                      }
                                    }
                                  },
                                  "range": [
                                    3876,
                                    3879
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 84
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "range": [
                                      3881,
                                      3884
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 84
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 84
                                      }
                                    }
                                  },
                                  "range": [
                                    3881,
                                    3884
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 84
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "range": [
                                      3886,
                                      3889
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 84
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 84
                                      }
                                    }
                                  },
                                  "range": [
                                    3886,
                                    3889
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 84
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "range": [
                                      3907,
                                      3910
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 85
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 85
                                      }
                                    }
                                  },
                                  "range": [
                                    3907,
                                    3910
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 85
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 85
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "range": [
                                      3912,
                                      3915
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 85
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 85
                                      }
                                    }
                                  },
                                  "range": [
                                    3912,
                                    3915
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 85
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 85
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "range": [
                                      3917,
                                      3920
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 85
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 85
                                      }
                                    }
                                  },
                                  "range": [
                                    3917,
                                    3920
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 85
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 85
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 85
                                },
                                "start": {
                                  "column": 72,
                                  "line": 82
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                3802,
                                3813
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 82
                                },
                                "start": {
                                  "column": 61,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              3802,
                              3921
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 85
                              },
                              "start": {
                                "column": 61,
                                "line": 82
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                3932,
                                3937
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      3933,
                                      3936
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 85
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 85
                                      }
                                    }
                                  },
                                  "range": [
                                    3933,
                                    3936
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 85
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 85
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 85
                                },
                                "start": {
                                  "column": 41,
                                  "line": 85
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                3924,
                                3932
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 85
                                },
                                "start": {
                                  "column": 33,
                                  "line": 85
                                }
                              }
                            },
                            "range": [
                              3924,
                              3937
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 85
                              },
                              "start": {
                                "column": 33,
                                "line": 85
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "range": [
                                3940,
                                3943
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 85
                                },
                                "start": {
                                  "column": 49,
                                  "line": 85
                                }
                              }
                            },
                            "range": [
                              3940,
                              3943
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 85
                              },
                              "start": {
                                "column": 49,
                                "line": 85
                              }
                            }
                          }
                        ],
                        "range": [
                          3802,
                          3943
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 85
                          },
                          "start": {
                            "column": 61,
                            "line": 82
                          }
                        }
                      }
                    },
                    "range": [
                      3765,
                      3943
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 85
                      },
                      "start": {
                        "column": 24,
                        "line": 82
                      }
                    }
                  }
                },
                "range": [
                  3753,
                  3943
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 85
                  },
                  "start": {
                    "column": 12,
                    "line": 82
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 86
                    },
                    "start": {
                      "column": 27,
                      "line": 86
                    }
                  },
                  "range": [
                    3972,
                    3978
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      3974,
                      3978
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 86
                      },
                      "start": {
                        "column": 29,
                        "line": 86
                      }
                    }
                  }
                },
                "range": [
                  3957,
                  3978
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 86
                  },
                  "start": {
                    "column": 12,
                    "line": 86
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 89
                },
                "start": {
                  "column": 34,
                  "line": 86
                }
              },
              "range": [
                3979,
                4148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3992,
                    4148
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARD",
                            "optional": false,
                            "range": [
                              3993,
                              3996
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 86
                              },
                              "start": {
                                "column": 48,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            3993,
                            3996
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 86
                            },
                            "start": {
                              "column": 48,
                              "line": 86
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "range": [
                              3999,
                              4002
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 86
                              },
                              "start": {
                                "column": 54,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            3999,
                            4002
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 86
                            },
                            "start": {
                              "column": 54,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "range": [
                        3993,
                        4002
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 86
                        },
                        "start": {
                          "column": 48,
                          "line": 86
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJD",
                            "optional": false,
                            "range": [
                              4004,
                              4007
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 86
                              },
                              "start": {
                                "column": 59,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            4004,
                            4007
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 86
                            },
                            "start": {
                              "column": 59,
                              "line": 86
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "range": [
                              4010,
                              4013
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 86
                              },
                              "start": {
                                "column": 65,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            4010,
                            4013
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 86
                            },
                            "start": {
                              "column": 65,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "range": [
                        4004,
                        4013
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 86
                        },
                        "start": {
                          "column": 59,
                          "line": 86
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AND",
                            "optional": false,
                            "range": [
                              4015,
                              4018
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 86
                              },
                              "start": {
                                "column": 70,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            4015,
                            4018
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 86
                            },
                            "start": {
                              "column": 70,
                              "line": 86
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "range": [
                              4021,
                              4024
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 86
                              },
                              "start": {
                                "column": 76,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            4021,
                            4024
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 86
                            },
                            "start": {
                              "column": 76,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "range": [
                        4015,
                        4024
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 86
                        },
                        "start": {
                          "column": 70,
                          "line": 86
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRD",
                            "optional": false,
                            "range": [
                              4034,
                              4037
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 87
                              },
                              "start": {
                                "column": 8,
                                "line": 87
                              }
                            }
                          },
                          "range": [
                            4034,
                            4037
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 87
                            },
                            "start": {
                              "column": 8,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "range": [
                              4040,
                              4043
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 87
                              },
                              "start": {
                                "column": 14,
                                "line": 87
                              }
                            }
                          },
                          "range": [
                            4040,
                            4043
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 87
                            },
                            "start": {
                              "column": 14,
                              "line": 87
                            }
                          }
                        }
                      ],
                      "range": [
                        4034,
                        4043
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 87
                        },
                        "start": {
                          "column": 8,
                          "line": 87
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJD",
                            "optional": false,
                            "range": [
                              4045,
                              4048
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 87
                              },
                              "start": {
                                "column": 19,
                                "line": 87
                              }
                            }
                          },
                          "range": [
                            4045,
                            4048
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 87
                            },
                            "start": {
                              "column": 19,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "range": [
                              4051,
                              4054
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 87
                              },
                              "start": {
                                "column": 25,
                                "line": 87
                              }
                            }
                          },
                          "range": [
                            4051,
                            4054
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 87
                            },
                            "start": {
                              "column": 25,
                              "line": 87
                            }
                          }
                        }
                      ],
                      "range": [
                        4045,
                        4054
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 87
                        },
                        "start": {
                          "column": 19,
                          "line": 87
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BND",
                            "optional": false,
                            "range": [
                              4056,
                              4059
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 87
                              },
                              "start": {
                                "column": 30,
                                "line": 87
                              }
                            }
                          },
                          "range": [
                            4056,
                            4059
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 87
                            },
                            "start": {
                              "column": 30,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "range": [
                              4062,
                              4065
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 87
                              },
                              "start": {
                                "column": 36,
                                "line": 87
                              }
                            }
                          },
                          "range": [
                            4062,
                            4065
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 87
                            },
                            "start": {
                              "column": 36,
                              "line": 87
                            }
                          }
                        }
                      ],
                      "range": [
                        4056,
                        4065
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 87
                        },
                        "start": {
                          "column": 30,
                          "line": 87
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRD",
                            "optional": false,
                            "range": [
                              4075,
                              4078
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 88
                              },
                              "start": {
                                "column": 8,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            4075,
                            4078
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 88
                            },
                            "start": {
                              "column": 8,
                              "line": 88
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "range": [
                              4081,
                              4084
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 88
                              },
                              "start": {
                                "column": 14,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            4081,
                            4084
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 88
                            },
                            "start": {
                              "column": 14,
                              "line": 88
                            }
                          }
                        }
                      ],
                      "range": [
                        4075,
                        4084
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJD",
                            "optional": false,
                            "range": [
                              4086,
                              4089
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 88
                              },
                              "start": {
                                "column": 19,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            4086,
                            4089
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 88
                            },
                            "start": {
                              "column": 19,
                              "line": 88
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "range": [
                              4092,
                              4095
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 88
                              },
                              "start": {
                                "column": 25,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            4092,
                            4095
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 88
                            },
                            "start": {
                              "column": 25,
                              "line": 88
                            }
                          }
                        }
                      ],
                      "range": [
                        4086,
                        4095
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 88
                        },
                        "start": {
                          "column": 19,
                          "line": 88
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CND",
                            "optional": false,
                            "range": [
                              4097,
                              4100
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 88
                              },
                              "start": {
                                "column": 30,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            4097,
                            4100
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 88
                            },
                            "start": {
                              "column": 30,
                              "line": 88
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "range": [
                              4103,
                              4106
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 88
                              },
                              "start": {
                                "column": 36,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            4103,
                            4106
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 88
                            },
                            "start": {
                              "column": 36,
                              "line": 88
                            }
                          }
                        }
                      ],
                      "range": [
                        4097,
                        4106
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 88
                        },
                        "start": {
                          "column": 30,
                          "line": 88
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRD",
                            "optional": false,
                            "range": [
                              4116,
                              4119
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
                          "range": [
                            4116,
                            4119
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
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "range": [
                              4122,
                              4125
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 89
                              },
                              "start": {
                                "column": 14,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4122,
                            4125
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 89
                            },
                            "start": {
                              "column": 14,
                              "line": 89
                            }
                          }
                        }
                      ],
                      "range": [
                        4116,
                        4125
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 89
                        },
                        "start": {
                          "column": 8,
                          "line": 89
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJD",
                            "optional": false,
                            "range": [
                              4127,
                              4130
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 89
                              },
                              "start": {
                                "column": 19,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4127,
                            4130
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 89
                            },
                            "start": {
                              "column": 19,
                              "line": 89
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "range": [
                              4133,
                              4136
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 89
                              },
                              "start": {
                                "column": 25,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4133,
                            4136
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 89
                            },
                            "start": {
                              "column": 25,
                              "line": 89
                            }
                          }
                        }
                      ],
                      "range": [
                        4127,
                        4136
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 89
                        },
                        "start": {
                          "column": 19,
                          "line": 89
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RND",
                            "optional": false,
                            "range": [
                              4138,
                              4141
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 89
                              },
                              "start": {
                                "column": 30,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4138,
                            4141
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 89
                            },
                            "start": {
                              "column": 30,
                              "line": 89
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "range": [
                              4144,
                              4147
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 89
                              },
                              "start": {
                                "column": 36,
                                "line": 89
                              }
                            }
                          },
                          "range": [
                            4144,
                            4147
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 89
                            },
                            "start": {
                              "column": 36,
                              "line": 89
                            }
                          }
                        }
                      ],
                      "range": [
                        4138,
                        4147
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 89
                        },
                        "start": {
                          "column": 30,
                          "line": 89
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 89
                    },
                    "start": {
                      "column": 47,
                      "line": 86
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "range": [
                    3981,
                    3992
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 86
                    },
                    "start": {
                      "column": 36,
                      "line": 86
                    }
                  }
                },
                "range": [
                  3981,
                  4148
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 89
                  },
                  "start": {
                    "column": 36,
                    "line": 86
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 77
                },
                "start": {
                  "column": 8,
                  "line": 70
                }
              },
              "range": [
                3167,
                3535
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3174,
                      3179
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 70
                      },
                      "start": {
                        "column": 15,
                        "line": 70
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "range": [
                      3168,
                      3171
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 70
                      },
                      "start": {
                        "column": 9,
                        "line": 70
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3168,
                    3179
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 70
                    },
                    "start": {
                      "column": 9,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3187,
                      3192
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 70
                      },
                      "start": {
                        "column": 28,
                        "line": 70
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "range": [
                      3181,
                      3184
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 70
                      },
                      "start": {
                        "column": 22,
                        "line": 70
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3181,
                    3192
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 70
                    },
                    "start": {
                      "column": 22,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3200,
                      3205
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 70
                      },
                      "start": {
                        "column": 41,
                        "line": 70
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "range": [
                      3194,
                      3197
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 70
                      },
                      "start": {
                        "column": 35,
                        "line": 70
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3194,
                    3205
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 70
                    },
                    "start": {
                      "column": 35,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3221,
                      3226
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 71
                      },
                      "start": {
                        "column": 14,
                        "line": 71
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "range": [
                      3215,
                      3218
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3215,
                    3226
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3234,
                      3239
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 71
                      },
                      "start": {
                        "column": 27,
                        "line": 71
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "range": [
                      3228,
                      3231
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 71
                      },
                      "start": {
                        "column": 21,
                        "line": 71
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3228,
                    3239
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 71
                    },
                    "start": {
                      "column": 21,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3247,
                      3252
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 71
                      },
                      "start": {
                        "column": 40,
                        "line": 71
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "range": [
                      3241,
                      3244
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
                  "out": false,
                  "range": [
                    3241,
                    3252
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 71
                    },
                    "start": {
                      "column": 34,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3268,
                      3273
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 72
                      },
                      "start": {
                        "column": 14,
                        "line": 72
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "range": [
                      3262,
                      3265
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3262,
                    3273
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3281,
                      3286
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 72
                      },
                      "start": {
                        "column": 27,
                        "line": 72
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "range": [
                      3275,
                      3278
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 72
                      },
                      "start": {
                        "column": 21,
                        "line": 72
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3275,
                    3286
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 72
                    },
                    "start": {
                      "column": 21,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3294,
                      3299
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 72
                      },
                      "start": {
                        "column": 40,
                        "line": 72
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "range": [
                      3288,
                      3291
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 72
                      },
                      "start": {
                        "column": 34,
                        "line": 72
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3288,
                    3299
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 72
                    },
                    "start": {
                      "column": 34,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3315,
                      3320
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 73
                      },
                      "start": {
                        "column": 14,
                        "line": 73
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "range": [
                      3309,
                      3312
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 73
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3309,
                    3320
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3328,
                      3333
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 73
                      },
                      "start": {
                        "column": 27,
                        "line": 73
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "range": [
                      3322,
                      3325
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 73
                      },
                      "start": {
                        "column": 21,
                        "line": 73
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3322,
                    3333
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 73
                    },
                    "start": {
                      "column": 21,
                      "line": 73
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3341,
                      3346
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 73
                      },
                      "start": {
                        "column": 40,
                        "line": 73
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "range": [
                      3335,
                      3338
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 73
                      },
                      "start": {
                        "column": 34,
                        "line": 73
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3335,
                    3346
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 73
                    },
                    "start": {
                      "column": 34,
                      "line": 73
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3362,
                      3367
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 74
                      },
                      "start": {
                        "column": 14,
                        "line": 74
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "range": [
                      3356,
                      3359
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 74
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3356,
                    3367
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3375,
                      3380
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 74
                      },
                      "start": {
                        "column": 27,
                        "line": 74
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "range": [
                      3369,
                      3372
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 74
                      },
                      "start": {
                        "column": 21,
                        "line": 74
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3369,
                    3380
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 74
                    },
                    "start": {
                      "column": 21,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3388,
                      3393
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 74
                      },
                      "start": {
                        "column": 40,
                        "line": 74
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "range": [
                      3382,
                      3385
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 74
                      },
                      "start": {
                        "column": 34,
                        "line": 74
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3382,
                    3393
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 74
                    },
                    "start": {
                      "column": 34,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3409,
                      3414
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 75
                      },
                      "start": {
                        "column": 14,
                        "line": 75
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "range": [
                      3403,
                      3406
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
                  "out": false,
                  "range": [
                    3403,
                    3414
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3422,
                      3427
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 75
                      },
                      "start": {
                        "column": 27,
                        "line": 75
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "range": [
                      3416,
                      3419
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 75
                      },
                      "start": {
                        "column": 21,
                        "line": 75
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3416,
                    3427
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 75
                    },
                    "start": {
                      "column": 21,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3435,
                      3440
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 75
                      },
                      "start": {
                        "column": 40,
                        "line": 75
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "range": [
                      3429,
                      3432
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 75
                      },
                      "start": {
                        "column": 34,
                        "line": 75
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3429,
                    3440
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 75
                    },
                    "start": {
                      "column": 34,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3456,
                      3461
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 76
                      },
                      "start": {
                        "column": 14,
                        "line": 76
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "range": [
                      3450,
                      3453
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 76
                      },
                      "start": {
                        "column": 8,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3450,
                    3461
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 76
                    },
                    "start": {
                      "column": 8,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3469,
                      3474
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 76
                      },
                      "start": {
                        "column": 27,
                        "line": 76
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "range": [
                      3463,
                      3466
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 76
                      },
                      "start": {
                        "column": 21,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3463,
                    3474
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 76
                    },
                    "start": {
                      "column": 21,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3482,
                      3487
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 76
                      },
                      "start": {
                        "column": 40,
                        "line": 76
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "range": [
                      3476,
                      3479
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 76
                      },
                      "start": {
                        "column": 34,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3476,
                    3487
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 76
                    },
                    "start": {
                      "column": 34,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3503,
                      3508
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 77
                      },
                      "start": {
                        "column": 14,
                        "line": 77
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "range": [
                      3497,
                      3500
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3497,
                    3508
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3516,
                      3521
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 77
                      },
                      "start": {
                        "column": 27,
                        "line": 77
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "range": [
                      3510,
                      3513
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 77
                      },
                      "start": {
                        "column": 21,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3510,
                    3521
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 77
                    },
                    "start": {
                      "column": 21,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      3529,
                      3534
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 77
                      },
                      "start": {
                        "column": 40,
                        "line": 77
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "range": [
                      3523,
                      3526
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 77
                      },
                      "start": {
                        "column": 34,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3523,
                    3534
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 77
                    },
                    "start": {
                      "column": 34,
                      "line": 77
                    }
                  }
                }
              ]
            },
            "range": [
              3163,
              4149
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                4154,
                4158
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 94
                    },
                    "start": {
                      "column": 22,
                      "line": 94
                    }
                  },
                  "range": [
                    4362,
                    4368
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      4364,
                      4368
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 94
                      },
                      "start": {
                        "column": 24,
                        "line": 94
                      }
                    }
                  }
                },
                "range": [
                  4352,
                  4368
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 94
                  },
                  "start": {
                    "column": 12,
                    "line": 94
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 98
                    },
                    "start": {
                      "column": 22,
                      "line": 95
                    }
                  },
                  "range": [
                    4392,
                    4572
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 95
                            },
                            "start": {
                              "column": 26,
                              "line": 95
                            }
                          },
                          "range": [
                            4396,
                            4400
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "range": [
                                4398,
                                4400
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 95
                                },
                                "start": {
                                  "column": 28,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              4398,
                              4400
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 95
                              },
                              "start": {
                                "column": 28,
                                "line": 95
                              }
                            }
                          }
                        },
                        "range": [
                          4395,
                          4400
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 95
                          },
                          "start": {
                            "column": 25,
                            "line": 95
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 95
                            },
                            "start": {
                              "column": 33,
                              "line": 95
                            }
                          },
                          "range": [
                            4403,
                            4407
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "range": [
                                4405,
                                4407
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 95
                                },
                                "start": {
                                  "column": 35,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              4405,
                              4407
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 95
                              },
                              "start": {
                                "column": 35,
                                "line": 95
                              }
                            }
                          }
                        },
                        "range": [
                          4402,
                          4407
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 95
                          },
                          "start": {
                            "column": 32,
                            "line": 95
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 95
                            },
                            "start": {
                              "column": 40,
                              "line": 95
                            }
                          },
                          "range": [
                            4410,
                            4414
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "range": [
                                4412,
                                4414
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 95
                                },
                                "start": {
                                  "column": 42,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              4412,
                              4414
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 95
                              },
                              "start": {
                                "column": 42,
                                "line": 95
                              }
                            }
                          }
                        },
                        "range": [
                          4409,
                          4414
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 95
                          },
                          "start": {
                            "column": 39,
                            "line": 95
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            4419,
                            4420
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 95
                            },
                            "start": {
                              "column": 49,
                              "line": 95
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
                              "line": 95
                            },
                            "start": {
                              "column": 50,
                              "line": 95
                            }
                          },
                          "range": [
                            4420,
                            4426
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "range": [
                                  4422,
                                  4424
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 95
                                  }
                                }
                              },
                              "range": [
                                4422,
                                4424
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 95
                                },
                                "start": {
                                  "column": 52,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              4422,
                              4426
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 95
                              },
                              "start": {
                                "column": 52,
                                "line": 95
                              }
                            }
                          }
                        },
                        "range": [
                          4416,
                          4426
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 95
                          },
                          "start": {
                            "column": 46,
                            "line": 95
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 98
                        },
                        "start": {
                          "column": 58,
                          "line": 95
                        }
                      },
                      "range": [
                        4428,
                        4572
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                4442,
                                4550
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      4443,
                                      4446
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "range": [
                                    4443,
                                    4446
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 95
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "range": [
                                      4448,
                                      4451
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "range": [
                                    4448,
                                    4451
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 95
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "range": [
                                      4453,
                                      4456
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "range": [
                                    4453,
                                    4456
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 95
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "range": [
                                      4474,
                                      4477
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 96
                                      }
                                    }
                                  },
                                  "range": [
                                    4474,
                                    4477
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 96
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "range": [
                                      4479,
                                      4482
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 96
                                      }
                                    }
                                  },
                                  "range": [
                                    4479,
                                    4482
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 96
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "range": [
                                      4484,
                                      4487
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 96
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 96
                                      }
                                    }
                                  },
                                  "range": [
                                    4484,
                                    4487
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 96
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "range": [
                                      4505,
                                      4508
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 97
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 97
                                      }
                                    }
                                  },
                                  "range": [
                                    4505,
                                    4508
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "range": [
                                      4510,
                                      4513
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 97
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 97
                                      }
                                    }
                                  },
                                  "range": [
                                    4510,
                                    4513
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "range": [
                                      4515,
                                      4518
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 97
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 97
                                      }
                                    }
                                  },
                                  "range": [
                                    4515,
                                    4518
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 97
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 97
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "range": [
                                      4536,
                                      4539
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 98
                                      }
                                    }
                                  },
                                  "range": [
                                    4536,
                                    4539
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 98
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 98
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "range": [
                                      4541,
                                      4544
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 98
                                      }
                                    }
                                  },
                                  "range": [
                                    4541,
                                    4544
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 98
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 98
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "range": [
                                      4546,
                                      4549
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 98
                                      }
                                    }
                                  },
                                  "range": [
                                    4546,
                                    4549
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 98
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 98
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 98
                                },
                                "start": {
                                  "column": 72,
                                  "line": 95
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                4431,
                                4442
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 95
                                },
                                "start": {
                                  "column": 61,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              4431,
                              4550
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 98
                              },
                              "start": {
                                "column": 61,
                                "line": 95
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                4561,
                                4566
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "range": [
                                      4562,
                                      4565
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 98
                                      }
                                    }
                                  },
                                  "range": [
                                    4562,
                                    4565
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 98
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 98
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 98
                                },
                                "start": {
                                  "column": 41,
                                  "line": 98
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                4553,
                                4561
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 98
                                },
                                "start": {
                                  "column": 33,
                                  "line": 98
                                }
                              }
                            },
                            "range": [
                              4553,
                              4566
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 98
                              },
                              "start": {
                                "column": 33,
                                "line": 98
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "range": [
                                4569,
                                4572
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 98
                                },
                                "start": {
                                  "column": 49,
                                  "line": 98
                                }
                              }
                            },
                            "range": [
                              4569,
                              4572
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 98
                              },
                              "start": {
                                "column": 49,
                                "line": 98
                              }
                            }
                          }
                        ],
                        "range": [
                          4431,
                          4572
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 98
                          },
                          "start": {
                            "column": 61,
                            "line": 95
                          }
                        }
                      }
                    },
                    "range": [
                      4394,
                      4572
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 98
                      },
                      "start": {
                        "column": 24,
                        "line": 95
                      }
                    }
                  }
                },
                "range": [
                  4382,
                  4572
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 98
                  },
                  "start": {
                    "column": 12,
                    "line": 95
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 99
                    },
                    "start": {
                      "column": 27,
                      "line": 99
                    }
                  },
                  "range": [
                    4601,
                    4607
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      4603,
                      4607
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 99
                      },
                      "start": {
                        "column": 29,
                        "line": 99
                      }
                    }
                  }
                },
                "range": [
                  4586,
                  4607
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 99
                  },
                  "start": {
                    "column": 12,
                    "line": 99
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 102
                },
                "start": {
                  "column": 34,
                  "line": 99
                }
              },
              "range": [
                4608,
                4705
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    4621,
                    4705
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARF",
                        "optional": false,
                        "range": [
                          4622,
                          4625
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 99
                          },
                          "start": {
                            "column": 48,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        4622,
                        4625
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 99
                        },
                        "start": {
                          "column": 48,
                          "line": 99
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJF",
                        "optional": false,
                        "range": [
                          4627,
                          4630
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 99
                          },
                          "start": {
                            "column": 53,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        4627,
                        4630
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 99
                        },
                        "start": {
                          "column": 53,
                          "line": 99
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ANF",
                        "optional": false,
                        "range": [
                          4632,
                          4635
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 99
                          },
                          "start": {
                            "column": 58,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        4632,
                        4635
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 99
                        },
                        "start": {
                          "column": 58,
                          "line": 99
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRF",
                        "optional": false,
                        "range": [
                          4645,
                          4648
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 100
                          },
                          "start": {
                            "column": 8,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        4645,
                        4648
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 100
                        },
                        "start": {
                          "column": 8,
                          "line": 100
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJF",
                        "optional": false,
                        "range": [
                          4650,
                          4653
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 100
                          },
                          "start": {
                            "column": 13,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        4650,
                        4653
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 100
                        },
                        "start": {
                          "column": 13,
                          "line": 100
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BNF",
                        "optional": false,
                        "range": [
                          4655,
                          4658
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 100
                          },
                          "start": {
                            "column": 18,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        4655,
                        4658
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 100
                        },
                        "start": {
                          "column": 18,
                          "line": 100
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRF",
                        "optional": false,
                        "range": [
                          4668,
                          4671
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 101
                          },
                          "start": {
                            "column": 8,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        4668,
                        4671
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 101
                        },
                        "start": {
                          "column": 8,
                          "line": 101
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJF",
                        "optional": false,
                        "range": [
                          4673,
                          4676
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 101
                          },
                          "start": {
                            "column": 13,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        4673,
                        4676
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 101
                        },
                        "start": {
                          "column": 13,
                          "line": 101
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CNF",
                        "optional": false,
                        "range": [
                          4678,
                          4681
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 101
                          },
                          "start": {
                            "column": 18,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        4678,
                        4681
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 101
                        },
                        "start": {
                          "column": 18,
                          "line": 101
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRF",
                        "optional": false,
                        "range": [
                          4691,
                          4694
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 102
                          },
                          "start": {
                            "column": 8,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        4691,
                        4694
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 102
                        },
                        "start": {
                          "column": 8,
                          "line": 102
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJF",
                        "optional": false,
                        "range": [
                          4696,
                          4699
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 102
                          },
                          "start": {
                            "column": 13,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        4696,
                        4699
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 102
                        },
                        "start": {
                          "column": 13,
                          "line": 102
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RNF",
                        "optional": false,
                        "range": [
                          4701,
                          4704
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 102
                          },
                          "start": {
                            "column": 18,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        4701,
                        4704
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 102
                        },
                        "start": {
                          "column": 18,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 102
                    },
                    "start": {
                      "column": 47,
                      "line": 99
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "range": [
                    4610,
                    4621
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 99
                    },
                    "start": {
                      "column": 36,
                      "line": 99
                    }
                  }
                },
                "range": [
                  4610,
                  4705
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 102
                  },
                  "start": {
                    "column": 36,
                    "line": 99
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 93
                },
                "start": {
                  "column": 8,
                  "line": 90
                }
              },
              "range": [
                4158,
                4338
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4165,
                      4170
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 90
                      },
                      "start": {
                        "column": 15,
                        "line": 90
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "range": [
                      4159,
                      4162
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 90
                      },
                      "start": {
                        "column": 9,
                        "line": 90
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4159,
                    4170
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 90
                    },
                    "start": {
                      "column": 9,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4178,
                      4183
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 90
                      },
                      "start": {
                        "column": 28,
                        "line": 90
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "range": [
                      4172,
                      4175
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 90
                      },
                      "start": {
                        "column": 22,
                        "line": 90
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4172,
                    4183
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 90
                    },
                    "start": {
                      "column": 22,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4191,
                      4196
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 90
                      },
                      "start": {
                        "column": 41,
                        "line": 90
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "range": [
                      4185,
                      4188
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 90
                      },
                      "start": {
                        "column": 35,
                        "line": 90
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4185,
                    4196
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 90
                    },
                    "start": {
                      "column": 35,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4212,
                      4217
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 91
                      },
                      "start": {
                        "column": 14,
                        "line": 91
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "range": [
                      4206,
                      4209
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
                  "out": false,
                  "range": [
                    4206,
                    4217
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4225,
                      4230
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 91
                      },
                      "start": {
                        "column": 27,
                        "line": 91
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "range": [
                      4219,
                      4222
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 91
                      },
                      "start": {
                        "column": 21,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4219,
                    4230
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 91
                    },
                    "start": {
                      "column": 21,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4238,
                      4243
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 91
                      },
                      "start": {
                        "column": 40,
                        "line": 91
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "range": [
                      4232,
                      4235
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 91
                      },
                      "start": {
                        "column": 34,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4232,
                    4243
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 91
                    },
                    "start": {
                      "column": 34,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4259,
                      4264
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 92
                      },
                      "start": {
                        "column": 14,
                        "line": 92
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "range": [
                      4253,
                      4256
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 92
                      },
                      "start": {
                        "column": 8,
                        "line": 92
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4253,
                    4264
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 92
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4272,
                      4277
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 92
                      },
                      "start": {
                        "column": 27,
                        "line": 92
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "range": [
                      4266,
                      4269
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 92
                      },
                      "start": {
                        "column": 21,
                        "line": 92
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4266,
                    4277
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 92
                    },
                    "start": {
                      "column": 21,
                      "line": 92
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4285,
                      4290
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 92
                      },
                      "start": {
                        "column": 40,
                        "line": 92
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "range": [
                      4279,
                      4282
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 92
                      },
                      "start": {
                        "column": 34,
                        "line": 92
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4279,
                    4290
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 92
                    },
                    "start": {
                      "column": 34,
                      "line": 92
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4306,
                      4311
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 93
                      },
                      "start": {
                        "column": 14,
                        "line": 93
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "range": [
                      4300,
                      4303
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4300,
                    4311
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4319,
                      4324
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 93
                      },
                      "start": {
                        "column": 27,
                        "line": 93
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "range": [
                      4313,
                      4316
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 93
                      },
                      "start": {
                        "column": 21,
                        "line": 93
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4313,
                    4324
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 93
                    },
                    "start": {
                      "column": 21,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4332,
                      4337
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 93
                      },
                      "start": {
                        "column": 40,
                        "line": 93
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "range": [
                      4326,
                      4329
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 93
                      },
                      "start": {
                        "column": 34,
                        "line": 93
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4326,
                    4337
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 93
                    },
                    "start": {
                      "column": 34,
                      "line": 93
                    }
                  }
                }
              ]
            },
            "range": [
              4154,
              4706
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "range": [
                4711,
                4715
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 110
                    },
                    "start": {
                      "column": 22,
                      "line": 107
                    }
                  },
                  "range": [
                    4919,
                    5099
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 107
                            },
                            "start": {
                              "column": 26,
                              "line": 107
                            }
                          },
                          "range": [
                            4923,
                            4927
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "range": [
                                4925,
                                4927
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 107
                                },
                                "start": {
                                  "column": 28,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              4925,
                              4927
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 107
                              },
                              "start": {
                                "column": 28,
                                "line": 107
                              }
                            }
                          }
                        },
                        "range": [
                          4922,
                          4927
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 107
                          },
                          "start": {
                            "column": 25,
                            "line": 107
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 107
                            },
                            "start": {
                              "column": 33,
                              "line": 107
                            }
                          },
                          "range": [
                            4930,
                            4934
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "range": [
                                4932,
                                4934
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 107
                                },
                                "start": {
                                  "column": 35,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              4932,
                              4934
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 107
                              },
                              "start": {
                                "column": 35,
                                "line": 107
                              }
                            }
                          }
                        },
                        "range": [
                          4929,
                          4934
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 107
                          },
                          "start": {
                            "column": 32,
                            "line": 107
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 107
                            },
                            "start": {
                              "column": 40,
                              "line": 107
                            }
                          },
                          "range": [
                            4937,
                            4941
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "range": [
                                4939,
                                4941
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 107
                                },
                                "start": {
                                  "column": 42,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              4939,
                              4941
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 107
                              },
                              "start": {
                                "column": 42,
                                "line": 107
                              }
                            }
                          }
                        },
                        "range": [
                          4936,
                          4941
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 107
                          },
                          "start": {
                            "column": 39,
                            "line": 107
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            4946,
                            4947
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 107
                            },
                            "start": {
                              "column": 49,
                              "line": 107
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
                              "line": 107
                            },
                            "start": {
                              "column": 50,
                              "line": 107
                            }
                          },
                          "range": [
                            4947,
                            4953
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "range": [
                                  4949,
                                  4951
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 107
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 107
                                  }
                                }
                              },
                              "range": [
                                4949,
                                4951
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 107
                                },
                                "start": {
                                  "column": 52,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              4949,
                              4953
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 107
                              },
                              "start": {
                                "column": 52,
                                "line": 107
                              }
                            }
                          }
                        },
                        "range": [
                          4943,
                          4953
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 107
                          },
                          "start": {
                            "column": 46,
                            "line": 107
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 110
                        },
                        "start": {
                          "column": 58,
                          "line": 107
                        }
                      },
                      "range": [
                        4955,
                        5099
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                4969,
                                5077
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "range": [
                                      4970,
                                      4973
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "range": [
                                    4970,
                                    4973
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 107
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "range": [
                                      4975,
                                      4978
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 81,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 78,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "range": [
                                    4975,
                                    4978
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 81,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 107
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "range": [
                                      4980,
                                      4983
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "range": [
                                    4980,
                                    4983
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 86,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 83,
                                      "line": 107
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "range": [
                                      5001,
                                      5004
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 108
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 108
                                      }
                                    }
                                  },
                                  "range": [
                                    5001,
                                    5004
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 108
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 108
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "range": [
                                      5006,
                                      5009
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 108
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 108
                                      }
                                    }
                                  },
                                  "range": [
                                    5006,
                                    5009
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 108
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 108
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "range": [
                                      5011,
                                      5014
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 108
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 108
                                      }
                                    }
                                  },
                                  "range": [
                                    5011,
                                    5014
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 108
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 108
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "range": [
                                      5032,
                                      5035
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 109
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 109
                                      }
                                    }
                                  },
                                  "range": [
                                    5032,
                                    5035
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 109
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 109
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "range": [
                                      5037,
                                      5040
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 109
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 109
                                      }
                                    }
                                  },
                                  "range": [
                                    5037,
                                    5040
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 109
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 109
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "range": [
                                      5042,
                                      5045
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 109
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 109
                                      }
                                    }
                                  },
                                  "range": [
                                    5042,
                                    5045
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 109
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 109
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "range": [
                                      5063,
                                      5066
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 110
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 110
                                      }
                                    }
                                  },
                                  "range": [
                                    5063,
                                    5066
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 110
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 110
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "range": [
                                      5068,
                                      5071
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 110
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 110
                                      }
                                    }
                                  },
                                  "range": [
                                    5068,
                                    5071
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 110
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 110
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "range": [
                                      5073,
                                      5076
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 110
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 110
                                      }
                                    }
                                  },
                                  "range": [
                                    5073,
                                    5076
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 110
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 110
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 110
                                },
                                "start": {
                                  "column": 72,
                                  "line": 107
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PromiseBase",
                              "optional": false,
                              "range": [
                                4958,
                                4969
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 107
                                },
                                "start": {
                                  "column": 61,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              4958,
                              5077
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 110
                              },
                              "start": {
                                "column": 61,
                                "line": 107
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                5088,
                                5093
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "range": [
                                      5089,
                                      5092
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 110
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 110
                                      }
                                    }
                                  },
                                  "range": [
                                    5089,
                                    5092
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 110
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 110
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 110
                                },
                                "start": {
                                  "column": 41,
                                  "line": 110
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "range": [
                                5080,
                                5088
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 110
                                },
                                "start": {
                                  "column": 33,
                                  "line": 110
                                }
                              }
                            },
                            "range": [
                              5080,
                              5093
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 110
                              },
                              "start": {
                                "column": 33,
                                "line": 110
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "range": [
                                5096,
                                5099
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 110
                                },
                                "start": {
                                  "column": 49,
                                  "line": 110
                                }
                              }
                            },
                            "range": [
                              5096,
                              5099
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 110
                              },
                              "start": {
                                "column": 49,
                                "line": 110
                              }
                            }
                          }
                        ],
                        "range": [
                          4958,
                          5099
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 110
                          },
                          "start": {
                            "column": 61,
                            "line": 107
                          }
                        }
                      }
                    },
                    "range": [
                      4921,
                      5099
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 110
                      },
                      "start": {
                        "column": 24,
                        "line": 107
                      }
                    }
                  }
                },
                "range": [
                  4909,
                  5099
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 110
                  },
                  "start": {
                    "column": 12,
                    "line": 107
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 111
                    },
                    "start": {
                      "column": 23,
                      "line": 111
                    }
                  },
                  "range": [
                    5124,
                    5130
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      5126,
                      5130
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 111
                      },
                      "start": {
                        "column": 25,
                        "line": 111
                      }
                    }
                  }
                },
                "range": [
                  5113,
                  5130
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 111
                  },
                  "start": {
                    "column": 12,
                    "line": 111
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 112
                    },
                    "start": {
                      "column": 27,
                      "line": 112
                    }
                  },
                  "range": [
                    5159,
                    5165
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      5161,
                      5165
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 112
                      },
                      "start": {
                        "column": 29,
                        "line": 112
                      }
                    }
                  }
                },
                "range": [
                  5144,
                  5165
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 112
                  },
                  "start": {
                    "column": 12,
                    "line": 112
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 115
                },
                "start": {
                  "column": 34,
                  "line": 112
                }
              },
              "range": [
                5166,
                5263
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    5179,
                    5263
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARD",
                        "optional": false,
                        "range": [
                          5180,
                          5183
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 112
                          },
                          "start": {
                            "column": 48,
                            "line": 112
                          }
                        }
                      },
                      "range": [
                        5180,
                        5183
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 112
                        },
                        "start": {
                          "column": 48,
                          "line": 112
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJD",
                        "optional": false,
                        "range": [
                          5185,
                          5188
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 112
                          },
                          "start": {
                            "column": 53,
                            "line": 112
                          }
                        }
                      },
                      "range": [
                        5185,
                        5188
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 112
                        },
                        "start": {
                          "column": 53,
                          "line": 112
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AND",
                        "optional": false,
                        "range": [
                          5190,
                          5193
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 112
                          },
                          "start": {
                            "column": 58,
                            "line": 112
                          }
                        }
                      },
                      "range": [
                        5190,
                        5193
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 112
                        },
                        "start": {
                          "column": 58,
                          "line": 112
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRD",
                        "optional": false,
                        "range": [
                          5203,
                          5206
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 113
                          },
                          "start": {
                            "column": 8,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        5203,
                        5206
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 113
                        },
                        "start": {
                          "column": 8,
                          "line": 113
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJD",
                        "optional": false,
                        "range": [
                          5208,
                          5211
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 113
                          },
                          "start": {
                            "column": 13,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        5208,
                        5211
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 113
                        },
                        "start": {
                          "column": 13,
                          "line": 113
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BND",
                        "optional": false,
                        "range": [
                          5213,
                          5216
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 113
                          },
                          "start": {
                            "column": 18,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        5213,
                        5216
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 113
                        },
                        "start": {
                          "column": 18,
                          "line": 113
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRD",
                        "optional": false,
                        "range": [
                          5226,
                          5229
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 114
                          },
                          "start": {
                            "column": 8,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        5226,
                        5229
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 114
                        },
                        "start": {
                          "column": 8,
                          "line": 114
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJD",
                        "optional": false,
                        "range": [
                          5231,
                          5234
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 114
                          },
                          "start": {
                            "column": 13,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        5231,
                        5234
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 114
                        },
                        "start": {
                          "column": 13,
                          "line": 114
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CND",
                        "optional": false,
                        "range": [
                          5236,
                          5239
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 114
                          },
                          "start": {
                            "column": 18,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        5236,
                        5239
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 114
                        },
                        "start": {
                          "column": 18,
                          "line": 114
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRD",
                        "optional": false,
                        "range": [
                          5249,
                          5252
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 115
                          },
                          "start": {
                            "column": 8,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        5249,
                        5252
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 115
                        },
                        "start": {
                          "column": 8,
                          "line": 115
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJD",
                        "optional": false,
                        "range": [
                          5254,
                          5257
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 115
                          },
                          "start": {
                            "column": 13,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        5254,
                        5257
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 115
                        },
                        "start": {
                          "column": 13,
                          "line": 115
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RND",
                        "optional": false,
                        "range": [
                          5259,
                          5262
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 115
                          },
                          "start": {
                            "column": 18,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        5259,
                        5262
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 115
                        },
                        "start": {
                          "column": 18,
                          "line": 115
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 115
                    },
                    "start": {
                      "column": 47,
                      "line": 112
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "range": [
                    5168,
                    5179
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 112
                    },
                    "start": {
                      "column": 36,
                      "line": 112
                    }
                  }
                },
                "range": [
                  5168,
                  5263
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 115
                  },
                  "start": {
                    "column": 36,
                    "line": 112
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 106
                },
                "start": {
                  "column": 8,
                  "line": 103
                }
              },
              "range": [
                4715,
                4895
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4722,
                      4727
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 103
                      },
                      "start": {
                        "column": 15,
                        "line": 103
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "range": [
                      4716,
                      4719
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 103
                      },
                      "start": {
                        "column": 9,
                        "line": 103
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4716,
                    4727
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 103
                    },
                    "start": {
                      "column": 9,
                      "line": 103
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4735,
                      4740
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 103
                      },
                      "start": {
                        "column": 28,
                        "line": 103
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "range": [
                      4729,
                      4732
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 103
                      },
                      "start": {
                        "column": 22,
                        "line": 103
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4729,
                    4740
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 103
                    },
                    "start": {
                      "column": 22,
                      "line": 103
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4748,
                      4753
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 103
                      },
                      "start": {
                        "column": 41,
                        "line": 103
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "range": [
                      4742,
                      4745
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 103
                      },
                      "start": {
                        "column": 35,
                        "line": 103
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4742,
                    4753
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 103
                    },
                    "start": {
                      "column": 35,
                      "line": 103
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4769,
                      4774
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 104
                      },
                      "start": {
                        "column": 14,
                        "line": 104
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "range": [
                      4763,
                      4766
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 104
                      },
                      "start": {
                        "column": 8,
                        "line": 104
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4763,
                    4774
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 104
                    },
                    "start": {
                      "column": 8,
                      "line": 104
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4782,
                      4787
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 104
                      },
                      "start": {
                        "column": 27,
                        "line": 104
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "range": [
                      4776,
                      4779
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 104
                      },
                      "start": {
                        "column": 21,
                        "line": 104
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4776,
                    4787
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 104
                    },
                    "start": {
                      "column": 21,
                      "line": 104
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4795,
                      4800
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 104
                      },
                      "start": {
                        "column": 40,
                        "line": 104
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "range": [
                      4789,
                      4792
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 104
                      },
                      "start": {
                        "column": 34,
                        "line": 104
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4789,
                    4800
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 104
                    },
                    "start": {
                      "column": 34,
                      "line": 104
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4816,
                      4821
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 105
                      },
                      "start": {
                        "column": 14,
                        "line": 105
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "range": [
                      4810,
                      4813
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 105
                      },
                      "start": {
                        "column": 8,
                        "line": 105
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4810,
                    4821
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 105
                    },
                    "start": {
                      "column": 8,
                      "line": 105
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4829,
                      4834
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 105
                      },
                      "start": {
                        "column": 27,
                        "line": 105
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "range": [
                      4823,
                      4826
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 105
                      },
                      "start": {
                        "column": 21,
                        "line": 105
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4823,
                    4834
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 105
                    },
                    "start": {
                      "column": 21,
                      "line": 105
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4842,
                      4847
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 105
                      },
                      "start": {
                        "column": 40,
                        "line": 105
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "range": [
                      4836,
                      4839
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 105
                      },
                      "start": {
                        "column": 34,
                        "line": 105
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4836,
                    4847
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 105
                    },
                    "start": {
                      "column": 34,
                      "line": 105
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4863,
                      4868
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 106
                      },
                      "start": {
                        "column": 14,
                        "line": 106
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "range": [
                      4857,
                      4860
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
                  "out": false,
                  "range": [
                    4857,
                    4868
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4876,
                      4881
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 106
                      },
                      "start": {
                        "column": 27,
                        "line": 106
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "range": [
                      4870,
                      4873
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 106
                      },
                      "start": {
                        "column": 21,
                        "line": 106
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4870,
                    4881
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 106
                    },
                    "start": {
                      "column": 21,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "default": {
                    "type": "TSNeverKeyword",
                    "range": [
                      4889,
                      4894
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 106
                      },
                      "start": {
                        "column": 40,
                        "line": 106
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "range": [
                      4883,
                      4886
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 106
                      },
                      "start": {
                        "column": 34,
                        "line": 106
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4883,
                    4894
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 106
                    },
                    "start": {
                      "column": 34,
                      "line": 106
                    }
                  }
                }
              ]
            },
            "range": [
              4711,
              5264
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 115
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 16,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseBase",
        "optional": false,
        "range": [
          114,
          125
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 6
          }
        },
        "range": [
          125,
          185
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TR",
              "optional": false,
              "range": [
                126,
                128
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
            "out": false,
            "range": [
              126,
              128
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
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TJ",
              "optional": false,
              "range": [
                130,
                132
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              130,
              132
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 26,
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
              "name": "TN",
              "optional": false,
              "range": [
                134,
                136
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              134,
              136
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 30,
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
              "name": "UR",
              "optional": false,
              "range": [
                142,
                144
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              142,
              144
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "UJ",
              "optional": false,
              "range": [
                146,
                148
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              146,
              148
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
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
              "name": "UN",
              "optional": false,
              "range": [
                150,
                152
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              150,
              152
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
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
              "name": "VR",
              "optional": false,
              "range": [
                158,
                160
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              158,
              160
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
              "name": "VJ",
              "optional": false,
              "range": [
                162,
                164
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              162,
              164
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
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
              "name": "VN",
              "optional": false,
              "range": [
                166,
                168
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              166,
              168
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
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
              "name": "SR",
              "optional": false,
              "range": [
                174,
                176
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              174,
              176
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
              "name": "SJ",
              "optional": false,
              "range": [
                178,
                180
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              178,
              180
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
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
              "name": "SN",
              "optional": false,
              "range": [
                182,
                184
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              182,
              184
            ],
            "loc": {
              "end": {
                "column": 14,
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
        104,
        5266
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          5420,
          5423
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 28,
            "line": 123
          },
          "start": {
            "column": 25,
            "line": 123
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
            "name": "PromiseBase",
            "optional": false,
            "range": [
              5339,
              5350
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 120
              },
              "start": {
                "column": 24,
                "line": 120
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              5350,
              5419
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TR",
                  "optional": false,
                  "range": [
                    5351,
                    5353
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 120
                    },
                    "start": {
                      "column": 36,
                      "line": 120
                    }
                  }
                },
                "range": [
                  5351,
                  5353
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 120
                  },
                  "start": {
                    "column": 36,
                    "line": 120
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TJ",
                  "optional": false,
                  "range": [
                    5355,
                    5357
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 120
                    },
                    "start": {
                      "column": 40,
                      "line": 120
                    }
                  }
                },
                "range": [
                  5355,
                  5357
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 120
                  },
                  "start": {
                    "column": 40,
                    "line": 120
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TN",
                  "optional": false,
                  "range": [
                    5359,
                    5361
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 120
                    },
                    "start": {
                      "column": 44,
                      "line": 120
                    }
                  }
                },
                "range": [
                  5359,
                  5361
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 120
                  },
                  "start": {
                    "column": 44,
                    "line": 120
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UR",
                  "optional": false,
                  "range": [
                    5367,
                    5369
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 121
                    },
                    "start": {
                      "column": 4,
                      "line": 121
                    }
                  }
                },
                "range": [
                  5367,
                  5369
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 121
                  },
                  "start": {
                    "column": 4,
                    "line": 121
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UJ",
                  "optional": false,
                  "range": [
                    5371,
                    5373
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 121
                    },
                    "start": {
                      "column": 8,
                      "line": 121
                    }
                  }
                },
                "range": [
                  5371,
                  5373
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 121
                  },
                  "start": {
                    "column": 8,
                    "line": 121
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UN",
                  "optional": false,
                  "range": [
                    5375,
                    5377
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 121
                    },
                    "start": {
                      "column": 12,
                      "line": 121
                    }
                  }
                },
                "range": [
                  5375,
                  5377
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 121
                  },
                  "start": {
                    "column": 12,
                    "line": 121
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VR",
                  "optional": false,
                  "range": [
                    5383,
                    5385
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 122
                    },
                    "start": {
                      "column": 4,
                      "line": 122
                    }
                  }
                },
                "range": [
                  5383,
                  5385
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 122
                  },
                  "start": {
                    "column": 4,
                    "line": 122
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VJ",
                  "optional": false,
                  "range": [
                    5387,
                    5389
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 122
                    },
                    "start": {
                      "column": 8,
                      "line": 122
                    }
                  }
                },
                "range": [
                  5387,
                  5389
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 122
                  },
                  "start": {
                    "column": 8,
                    "line": 122
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VN",
                  "optional": false,
                  "range": [
                    5391,
                    5393
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 122
                    },
                    "start": {
                      "column": 12,
                      "line": 122
                    }
                  }
                },
                "range": [
                  5391,
                  5393
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 122
                  },
                  "start": {
                    "column": 12,
                    "line": 122
                  }
                }
              },
              {
                "type": "TSNeverKeyword",
                "range": [
                  5399,
                  5404
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 123
                  },
                  "start": {
                    "column": 4,
                    "line": 123
                  }
                }
              },
              {
                "type": "TSNeverKeyword",
                "range": [
                  5406,
                  5411
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 123
                  },
                  "start": {
                    "column": 11,
                    "line": 123
                  }
                }
              },
              {
                "type": "TSNeverKeyword",
                "range": [
                  5413,
                  5418
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 123
                  },
                  "start": {
                    "column": 18,
                    "line": 123
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 123
              },
              "start": {
                "column": 35,
                "line": 120
              }
            }
          },
          "range": [
            5339,
            5419
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 123
            },
            "start": {
              "column": 24,
              "line": 120
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise3",
        "optional": false,
        "range": [
          5278,
          5286
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 118
          },
          "start": {
            "column": 10,
            "line": 118
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 120
          },
          "start": {
            "column": 18,
            "line": 118
          }
        },
        "range": [
          5286,
          5330
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TR",
              "optional": false,
              "range": [
                5287,
                5289
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 118
                },
                "start": {
                  "column": 19,
                  "line": 118
                }
              }
            },
            "out": false,
            "range": [
              5287,
              5289
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 118
              },
              "start": {
                "column": 19,
                "line": 118
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
              "name": "TJ",
              "optional": false,
              "range": [
                5291,
                5293
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 118
                },
                "start": {
                  "column": 23,
                  "line": 118
                }
              }
            },
            "out": false,
            "range": [
              5291,
              5293
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 118
              },
              "start": {
                "column": 23,
                "line": 118
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
              "name": "TN",
              "optional": false,
              "range": [
                5295,
                5297
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 118
                },
                "start": {
                  "column": 27,
                  "line": 118
                }
              }
            },
            "out": false,
            "range": [
              5295,
              5297
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 118
              },
              "start": {
                "column": 27,
                "line": 118
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
              "name": "UR",
              "optional": false,
              "range": [
                5303,
                5305
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
                }
              }
            },
            "out": false,
            "range": [
              5303,
              5305
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
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
              "name": "UJ",
              "optional": false,
              "range": [
                5307,
                5309
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 119
                },
                "start": {
                  "column": 8,
                  "line": 119
                }
              }
            },
            "out": false,
            "range": [
              5307,
              5309
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 119
              },
              "start": {
                "column": 8,
                "line": 119
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
              "name": "UN",
              "optional": false,
              "range": [
                5311,
                5313
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 119
                },
                "start": {
                  "column": 12,
                  "line": 119
                }
              }
            },
            "out": false,
            "range": [
              5311,
              5313
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 119
              },
              "start": {
                "column": 12,
                "line": 119
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
              "name": "VR",
              "optional": false,
              "range": [
                5319,
                5321
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 120
                },
                "start": {
                  "column": 4,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              5319,
              5321
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
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
              "name": "VJ",
              "optional": false,
              "range": [
                5323,
                5325
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 120
                },
                "start": {
                  "column": 8,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              5323,
              5325
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 120
              },
              "start": {
                "column": 8,
                "line": 120
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
              "name": "VN",
              "optional": false,
              "range": [
                5327,
                5329
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 120
                },
                "start": {
                  "column": 12,
                  "line": 120
                }
              }
            },
            "out": false,
            "range": [
              5327,
              5329
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 120
              },
              "start": {
                "column": 12,
                "line": 120
              }
            }
          }
        ]
      },
      "range": [
        5268,
        5423
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "range": [
          5430,
          5431
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 125
          },
          "start": {
            "column": 5,
            "line": 125
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            5441,
            5516
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  5450,
                  5515
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      5451,
                      5457
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 125
                      },
                      "start": {
                        "column": 26,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        5459,
                        5464
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 125
                        },
                        "start": {
                          "column": 34,
                          "line": 125
                        }
                      }
                    },
                    "range": [
                      5459,
                      5464
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 125
                      },
                      "start": {
                        "column": 34,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      5466,
                      5472
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 125
                      },
                      "start": {
                        "column": 41,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      5474,
                      5476
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 125
                      },
                      "start": {
                        "column": 49,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      5478,
                      5484
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 125
                      },
                      "start": {
                        "column": 53,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      5486,
                      5493
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 125
                      },
                      "start": {
                        "column": 61,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      5495,
                      5498
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 125
                      },
                      "start": {
                        "column": 70,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "range": [
                        5500,
                        5507
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 125
                        },
                        "start": {
                          "column": 75,
                          "line": 125
                        }
                      }
                    },
                    "range": [
                      5500,
                      5507
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 125
                      },
                      "start": {
                        "column": 75,
                        "line": 125
                      }
                    }
                  },
                  {
                    "type": "TSNeverKeyword",
                    "range": [
                      5509,
                      5514
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 125
                      },
                      "start": {
                        "column": 84,
                        "line": 125
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 125
                  },
                  "start": {
                    "column": 25,
                    "line": 125
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise3",
                "optional": false,
                "range": [
                  5442,
                  5450
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 125
                  },
                  "start": {
                    "column": 17,
                    "line": 125
                  }
                }
              },
              "range": [
                5442,
                5515
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 125
                },
                "start": {
                  "column": 17,
                  "line": 125
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 125
            },
            "start": {
              "column": 16,
              "line": 125
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "range": [
            5434,
            5441
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 125
            },
            "start": {
              "column": 9,
              "line": 125
            }
          }
        },
        "range": [
          5434,
          5516
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 125
          },
          "start": {
            "column": 9,
            "line": 125
          }
        }
      },
      "range": [
        5425,
        5517
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 125
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 102,
      "line": 125
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
