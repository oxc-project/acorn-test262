__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    241
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          33,
          124
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
              "name": "someProp",
              "optional": false,
              "range": [
                39,
                47
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              },
              "range": [
                47,
                50
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    49,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                },
                "range": [
                  49,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              39,
              51
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
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                56,
                62
              ],
              "loc": {
                "end": {
                  "column": 10,
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
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                62,
                122
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 33,
                        "line": 5
                      }
                    },
                    "range": [
                      85,
                      111
                    ],
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
                            "name": "U",
                            "optional": false,
                            "range": [
                              101,
                              102
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 5
                              },
                              "start": {
                                "column": 49,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            101,
                            102
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 5
                            },
                            "start": {
                              "column": 49,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          95,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 5
                          },
                          "start": {
                            "column": 43,
                            "line": 5
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          90,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 5
                          },
                          "start": {
                            "column": 38,
                            "line": 5
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
                              107,
                              108
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 5
                              },
                              "start": {
                                "column": 55,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            107,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 5
                            },
                            "start": {
                              "column": 55,
                              "line": 5
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              105,
                              106
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
                            105,
                            106
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
                          105,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 5
                          },
                          "start": {
                            "column": 53,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        87,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
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
                    84,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 5
                  },
                  "start": {
                    "column": 60,
                    "line": 5
                  }
                },
                "range": [
                  112,
                  121
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      118,
                      121
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
                            119,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 5
                            },
                            "start": {
                              "column": 67,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          119,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 5
                          },
                          "start": {
                            "column": 67,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 5
                      },
                      "start": {
                        "column": 66,
                        "line": 5
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "range": [
                      114,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 5
                      },
                      "start": {
                        "column": 62,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    114,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 5
                    },
                    "start": {
                      "column": 62,
                      "line": 5
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                },
                "range": [
                  62,
                  83
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          73,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        73,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
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
                        63,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      63,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 70,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "range": [
              56,
              122
            ],
            "loc": {
              "end": {
                "column": 70,
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
            "column": 22,
            "line": 3
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          25,
          29
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 14,
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
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          29,
          32
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
                30,
                31
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
              30,
              31
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
        11,
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          167,
          241
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                173,
                179
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                179,
                239
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 9
                      },
                      "start": {
                        "column": 33,
                        "line": 9
                      }
                    },
                    "range": [
                      202,
                      228
                    ],
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
                            "name": "V",
                            "optional": false,
                            "range": [
                              218,
                              219
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 9
                              },
                              "start": {
                                "column": 49,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            218,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 9
                            },
                            "start": {
                              "column": 49,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          212,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 9
                          },
                          "start": {
                            "column": 43,
                            "line": 9
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          207,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 9
                          },
                          "start": {
                            "column": 38,
                            "line": 9
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
                              224,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 9
                              },
                              "start": {
                                "column": 55,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            224,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 9
                            },
                            "start": {
                              "column": 55,
                              "line": 9
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              222,
                              223
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 9
                              },
                              "start": {
                                "column": 53,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            222,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 9
                            },
                            "start": {
                              "column": 53,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          222,
                          226
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 9
                          },
                          "start": {
                            "column": 53,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        204,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 9
                        },
                        "start": {
                          "column": 35,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    201,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 9
                    },
                    "start": {
                      "column": 32,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 9
                  },
                  "start": {
                    "column": 60,
                    "line": 9
                  }
                },
                "range": [
                  229,
                  238
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      235,
                      238
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
                            236,
                            237
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 9
                            },
                            "start": {
                              "column": 67,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          236,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 9
                          },
                          "start": {
                            "column": 67,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 9
                      },
                      "start": {
                        "column": 66,
                        "line": 9
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "range": [
                      231,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 9
                      },
                      "start": {
                        "column": 62,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    231,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 9
                    },
                    "start": {
                      "column": 62,
                      "line": 9
                    }
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
                    "column": 10,
                    "line": 9
                  }
                },
                "range": [
                  179,
                  200
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "range": [
                          190,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 21,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        190,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        180,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      180,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 70,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "range": [
              173,
              239
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 41,
            "line": 8
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          140,
          147
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          159,
          163
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 8
          },
          "start": {
            "column": 33,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          163,
          166
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
                164,
                165
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 38,
                  "line": 8
                }
              }
            },
            "range": [
              164,
              165
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 8
              },
              "start": {
                "column": 38,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 8
          },
          "start": {
            "column": 37,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 8
          },
          "start": {
            "column": 21,
            "line": 8
          }
        },
        "range": [
          147,
          150
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
                148,
                149
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              148,
              149
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 22,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        126,
        241
      ],
      "loc": {
        "end": {
          "column": 1,
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
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
