__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    873
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TPromise",
        "optional": false,
        "range": [
          5,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                51,
                91
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      59,
                      72
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "range": [
                            60,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 1
                            },
                            "start": {
                              "column": 60,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          60,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 1
                          },
                          "start": {
                            "column": 60,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 1
                      },
                      "start": {
                        "column": 59,
                        "line": 1
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "range": [
                      52,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 1
                      },
                      "start": {
                        "column": 52,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    52,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 1
                    },
                    "start": {
                      "column": 52,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"then\"",
                        "value": "then",
                        "range": [
                          74,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 1
                          },
                          "start": {
                            "column": 74,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        74,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 1
                        },
                        "start": {
                          "column": 74,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"catch\"",
                        "value": "catch",
                        "range": [
                          83,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 1
                          },
                          "start": {
                            "column": 83,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        83,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 1
                        },
                        "start": {
                          "column": 83,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    74,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 1
                    },
                    "start": {
                      "column": 74,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 1
                },
                "start": {
                  "column": 51,
                  "line": 1
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "range": [
                47,
                51
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            },
            "range": [
              47,
              91
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "range": [
                    100,
                    104
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
                    "name": "onfulfilled",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 3
                        },
                        "start": {
                          "column": 20,
                          "line": 3
                        }
                      },
                      "range": [
                        168,
                        247
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSFunctionType",
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
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 3
                                    }
                                  },
                                  "range": [
                                    177,
                                    190
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ResolveType",
                                      "optional": false,
                                      "range": [
                                        179,
                                        190
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      179,
                                      190
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 3
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  172,
                                  190
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 3
                                },
                                "start": {
                                  "column": 44,
                                  "line": 3
                                }
                              },
                              "range": [
                                192,
                                227
                              ],
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult1",
                                      "optional": false,
                                      "range": [
                                        195,
                                        203
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      195,
                                      203
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 3
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        217,
                                        227
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TResult1",
                                            "optional": false,
                                            "range": [
                                              218,
                                              226
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 78,
                                                "line": 3
                                              },
                                              "start": {
                                                "column": 70,
                                                "line": 3
                                              }
                                            }
                                          },
                                          "range": [
                                            218,
                                            226
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 78,
                                              "line": 3
                                            },
                                            "start": {
                                              "column": 70,
                                              "line": 3
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 79,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 69,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "range": [
                                        206,
                                        217
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 69,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 58,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      206,
                                      227
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 79,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 3
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  195,
                                  227
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
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
                              171,
                              227
                            ],
                            "loc": {
                              "end": {
                                "column": 79,
                                "line": 3
                              },
                              "start": {
                                "column": 23,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              231,
                              240
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 3
                              },
                              "start": {
                                "column": 83,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSNullKeyword",
                            "range": [
                              243,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 99,
                                "line": 3
                              },
                              "start": {
                                "column": 95,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          170,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      156,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onrejected",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      },
                      "range": [
                        268,
                        347
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reason",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 4
                                    }
                                  },
                                  "range": [
                                    278,
                                    290
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RejectType",
                                      "optional": false,
                                      "range": [
                                        280,
                                        290
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      280,
                                      290
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 4
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  272,
                                  290
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 4
                                },
                                "start": {
                                  "column": 43,
                                  "line": 4
                                }
                              },
                              "range": [
                                292,
                                327
                              ],
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult2",
                                      "optional": false,
                                      "range": [
                                        295,
                                        303
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      295,
                                      303
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 4
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        317,
                                        327
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TResult2",
                                            "optional": false,
                                            "range": [
                                              318,
                                              326
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 77,
                                                "line": 4
                                              },
                                              "start": {
                                                "column": 69,
                                                "line": 4
                                              }
                                            }
                                          },
                                          "range": [
                                            318,
                                            326
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 77,
                                              "line": 4
                                            },
                                            "start": {
                                              "column": 69,
                                              "line": 4
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 78,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 68,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "range": [
                                        306,
                                        317
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 68,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 57,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      306,
                                      327
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 78,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 4
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  295,
                                  327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 78,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 4
                                  }
                                }
                              }
                            },
                            "range": [
                              271,
                              327
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 4
                              },
                              "start": {
                                "column": 22,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              331,
                              340
                            ],
                            "loc": {
                              "end": {
                                "column": 91,
                                "line": 4
                              },
                              "start": {
                                "column": 82,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "TSNullKeyword",
                            "range": [
                              343,
                              347
                            ],
                            "loc": {
                              "end": {
                                "column": 98,
                                "line": 4
                              },
                              "start": {
                                "column": 94,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "range": [
                          270,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      257,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
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
                      "column": 48,
                      "line": 5
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  },
                  "range": [
                    354,
                    397
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        364,
                        397
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
                                "name": "TResult1",
                                "optional": false,
                                "range": [
                                  365,
                                  373
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                365,
                                373
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 5
                                },
                                "start": {
                                  "column": 16,
                                  "line": 5
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult2",
                                "optional": false,
                                "range": [
                                  376,
                                  384
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                376,
                                384
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 5
                                },
                                "start": {
                                  "column": 27,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            365,
                            384
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RejectType",
                            "optional": false,
                            "range": [
                              386,
                              396
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 5
                              },
                              "start": {
                                "column": 37,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            386,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 5
                            },
                            "start": {
                              "column": 37,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "range": [
                        356,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 7,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      356,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 5
                      },
                      "start": {
                        "column": 7,
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
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  },
                  "range": [
                    104,
                    146
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "default": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ResolveType",
                          "optional": false,
                          "range": [
                            116,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 2
                            },
                            "start": {
                              "column": 20,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          116,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 2
                          },
                          "start": {
                            "column": 20,
                            "line": 2
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult1",
                        "optional": false,
                        "range": [
                          105,
                          113
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 2
                          },
                          "start": {
                            "column": 9,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        105,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "default": {
                        "type": "TSNeverKeyword",
                        "range": [
                          140,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 2
                          },
                          "start": {
                            "column": 44,
                            "line": 2
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult2",
                        "optional": false,
                        "range": [
                          129,
                          137
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 2
                          },
                          "start": {
                            "column": 33,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        129,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 2
                        },
                        "start": {
                          "column": 33,
                          "line": 2
                        }
                      }
                    }
                  ]
                },
                "range": [
                  100,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              {
                "type": "TSMethodSignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "catch",
                  "optional": false,
                  "range": [
                    403,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
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
                    "name": "onrejected",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      },
                      "range": [
                        446,
                        523
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reason",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 7
                                    }
                                  },
                                  "range": [
                                    456,
                                    468
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "RejectType",
                                      "optional": false,
                                      "range": [
                                        458,
                                        468
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      458,
                                      468
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 7
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  450,
                                  468
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 7
                                },
                                "start": {
                                  "column": 43,
                                  "line": 7
                                }
                              },
                              "range": [
                                470,
                                503
                              ],
                              "typeAnnotation": {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TResult",
                                      "optional": false,
                                      "range": [
                                        473,
                                        480
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      473,
                                      480
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 7
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        494,
                                        503
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "TResult",
                                            "optional": false,
                                            "range": [
                                              495,
                                              502
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 75,
                                                "line": 7
                                              },
                                              "start": {
                                                "column": 68,
                                                "line": 7
                                              }
                                            }
                                          },
                                          "range": [
                                            495,
                                            502
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 75,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 68,
                                              "line": 7
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 76,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 67,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "PromiseLike",
                                      "optional": false,
                                      "range": [
                                        483,
                                        494
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 67,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 56,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      483,
                                      503
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 76,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 7
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  473,
                                  503
                                ],
                                "loc": {
                                  "end": {
                                    "column": 76,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              449,
                              503
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              507,
                              516
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 7
                              },
                              "start": {
                                "column": 80,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSNullKeyword",
                            "range": [
                              519,
                              523
                            ],
                            "loc": {
                              "end": {
                                "column": 96,
                                "line": 7
                              },
                              "start": {
                                "column": 92,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          448,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 7
                          },
                          "start": {
                            "column": 21,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      435,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
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
                      "column": 50,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
                    }
                  },
                  "range": [
                    530,
                    575
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        540,
                        575
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
                                "name": "ResolveType",
                                "optional": false,
                                "range": [
                                  541,
                                  552
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                541,
                                552
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "range": [
                                  555,
                                  562
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                555,
                                562
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 8
                                },
                                "start": {
                                  "column": 30,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "range": [
                            541,
                            562
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RejectType",
                            "optional": false,
                            "range": [
                              564,
                              574
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 8
                              },
                              "start": {
                                "column": 39,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            564,
                            574
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 8
                            },
                            "start": {
                              "column": 39,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "range": [
                        532,
                        540
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 7,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      532,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 8
                      },
                      "start": {
                        "column": 7,
                        "line": 8
                      }
                    }
                  }
                },
                "static": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 9,
                      "line": 6
                    }
                  },
                  "range": [
                    408,
                    425
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "default": {
                        "type": "TSNeverKeyword",
                        "range": [
                          419,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "range": [
                          409,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        409,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 10,
                          "line": 6
                        }
                      }
                    }
                  ]
                },
                "range": [
                  403,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              94,
              578
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 94,
                "line": 1
              }
            }
          }
        ],
        "range": [
          47,
          578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 47,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          44
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResolveType",
              "optional": false,
              "range": [
                14,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                40,
                43
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "RejectType",
              "optional": false,
              "range": [
                27,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              27,
              43
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        579
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
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
        581,
        706
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            676,
            706
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  682,
                  686
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
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                },
                "range": [
                  686,
                  689
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "range": [
                      688,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 10,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    688,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                682,
                690
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  695,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
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
                    "column": 12,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                },
                "range": [
                  700,
                  703
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      702,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    702,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                695,
                704
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 4,
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
              "column": 95,
              "line": 11
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
              "name": "Response",
              "optional": false,
              "range": [
                667,
                675
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 11
                },
                "start": {
                  "column": 86,
                  "line": 11
                }
              }
            },
            "range": [
              667,
              675
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 11
              },
              "start": {
                "column": 86,
                "line": 11
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HttpResponse",
          "optional": false,
          "range": [
            598,
            610
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 77,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 11
            }
          },
          "range": [
            610,
            658
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSUnknownKeyword",
                "range": [
                  621,
                  628
                ],
                "loc": {
                  "end": {
                    "column": 47,
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
                "name": "D",
                "optional": false,
                "range": [
                  611,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                611,
                628
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 11
                },
                "start": {
                  "column": 30,
                  "line": 11
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSUnknownKeyword",
                "range": [
                  640,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 11
                  },
                  "start": {
                    "column": 59,
                    "line": 11
                  }
                }
              },
              "default": {
                "type": "TSUnknownKeyword",
                "range": [
                  650,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 11
                  },
                  "start": {
                    "column": 69,
                    "line": 11
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  630,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 11
                  },
                  "start": {
                    "column": 49,
                    "line": 11
                  }
                }
              },
              "out": false,
              "range": [
                630,
                657
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 11
                },
                "start": {
                  "column": 49,
                  "line": 11
                }
              }
            }
          ]
        },
        "range": [
          588,
          706
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        708,
        873
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            760,
            873
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
                "name": "request",
                "optional": false,
                "range": [
                  773,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              "value": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "''",
                          "value": "",
                          "range": [
                            854,
                            856
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 15,
                              "line": 18
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            860,
                            863
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
                        "range": [
                          854,
                          863
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 18
                          },
                          "start": {
                            "column": 15,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        847,
                        864
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    837,
                    870
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 75,
                      "line": 17
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 17
                    },
                    "start": {
                      "column": 41,
                      "line": 17
                    }
                  },
                  "range": [
                    803,
                    833
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        813,
                        833
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              826,
                              832
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
                                    827,
                                    828
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 65,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  827,
                                  828
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 17
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "range": [
                                    830,
                                    831
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  830,
                                  831
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 17
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 17
                              },
                              "start": {
                                "column": 64,
                                "line": 17
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HttpResponse",
                            "optional": false,
                            "range": [
                              814,
                              826
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 17
                              },
                              "start": {
                                "column": 52,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            814,
                            832
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 17
                            },
                            "start": {
                              "column": 52,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 17
                        },
                        "start": {
                          "column": 51,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "range": [
                        805,
                        813
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 17
                        },
                        "start": {
                          "column": 43,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      805,
                      833
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 17
                      },
                      "start": {
                        "column": 43,
                        "line": 17
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 21,
                      "line": 17
                    }
                  },
                  "range": [
                    783,
                    801
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "default": {
                        "type": "TSAnyKeyword",
                        "range": [
                          788,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 17
                          },
                          "start": {
                            "column": 26,
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
                          784,
                          785
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
                        784,
                        791
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 17
                        },
                        "start": {
                          "column": 22,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "default": {
                        "type": "TSAnyKeyword",
                        "range": [
                          797,
                          800
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 17
                          },
                          "start": {
                            "column": 35,
                            "line": 17
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "range": [
                          793,
                          794
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
                      "out": false,
                      "range": [
                        793,
                        800
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 17
                        },
                        "start": {
                          "column": 31,
                          "line": 17
                        }
                      }
                    }
                  ]
                },
                "range": [
                  783,
                  870
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 21,
                    "line": 17
                  }
                }
              },
              "range": [
                766,
                871
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 19
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
              "line": 20
            },
            "start": {
              "column": 52,
              "line": 16
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HttpClient",
          "optional": false,
          "range": [
            721,
            731
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 16
            },
            "start": {
              "column": 13,
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
              "column": 51,
              "line": 16
            },
            "start": {
              "column": 23,
              "line": 16
            }
          },
          "range": [
            731,
            759
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSUnknownKeyword",
                "range": [
                  751,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 16
                  },
                  "start": {
                    "column": 43,
                    "line": 16
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "SecurityDataType",
                "optional": false,
                "range": [
                  732,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 16
                  },
                  "start": {
                    "column": 24,
                    "line": 16
                  }
                }
              },
              "out": false,
              "range": [
                732,
                758
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 16
                },
                "start": {
                  "column": 24,
                  "line": 16
                }
              }
            }
          ]
        },
        "range": [
          715,
          873
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    272
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./http-client\"",
        "value": "./http-client",
        "range": [
          27,
          42
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 27,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "HttpClient",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
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
      "type": "ExportNamedDeclaration",
      "range": [
        45,
        272
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            90,
            272
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  96,
                  107
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                  107,
                  155
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    152,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 4
                    },
                    "start": {
                      "column": 60,
                      "line": 4
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "http",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 4
                          },
                          "start": {
                            "column": 28,
                            "line": 4
                          }
                        },
                        "range": [
                          120,
                          150
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              132,
                              150
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "SecurityDataType",
                                  "optional": false,
                                  "range": [
                                    133,
                                    149
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 57,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  133,
                                  149
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 4
                              },
                              "start": {
                                "column": 40,
                                "line": 4
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HttpClient",
                            "optional": false,
                            "range": [
                              122,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 4
                              },
                              "start": {
                                "column": 30,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            122,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 4
                            },
                            "start": {
                              "column": 30,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        116,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      108,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                96,
                155
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                "name": "abc1",
                "optional": false,
                "range": [
                  161,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          174,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "range": [
                          179,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        174,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "range": [
                        184,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      174,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    174,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  168,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                161,
                194
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                "name": "abc2",
                "optional": false,
                "range": [
                  199,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          212,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 17,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "range": [
                          217,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 7
                          },
                          "start": {
                            "column": 22,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        212,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 7
                        },
                        "start": {
                          "column": 17,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "range": [
                        222,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 7
                        },
                        "start": {
                          "column": 27,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      212,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    212,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  206,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                199,
                232
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                "name": "abc3",
                "optional": false,
                "range": [
                  237,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          250,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "http",
                        "optional": false,
                        "range": [
                          255,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 8
                          },
                          "start": {
                            "column": 22,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        250,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "request",
                      "optional": false,
                      "range": [
                        260,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      250,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    250,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 17,
                      "line": 8
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  244,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                237,
                270
              ],
              "loc": {
                "end": {
                  "column": 37,
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
              "column": 45,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Api",
          "optional": false,
          "range": [
            58,
            61
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          },
          "range": [
            61,
            89
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSUnknownKeyword",
                "range": [
                  81,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "SecurityDataType",
                "optional": false,
                "range": [
                  62,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "out": false,
              "range": [
                62,
                88
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            }
          ]
        },
        "range": [
          52,
          272
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
