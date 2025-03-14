__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2195
  ],
  "body": [
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    },
                    "range": [
                      63,
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
                                  "column": 21,
                                  "line": 2
                                },
                                "start": {
                                  "column": 20,
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
                                "column": 21,
                                "line": 2
                              },
                              "start": {
                                "column": 20,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 2
                          },
                          "start": {
                            "column": 19,
                            "line": 2
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "range": [
                          65,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 2
                          },
                          "start": {
                            "column": 12,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        65,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
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
                    61,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": null,
                "range": [
                  61,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              57,
              76
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    },
                    "range": [
                      87,
                      114
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
                            "name": "T",
                            "optional": false,
                            "range": [
                              103,
                              104
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 3
                              },
                              "start": {
                                "column": 26,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            103,
                            104
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 3
                            },
                            "start": {
                              "column": 26,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          97,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 20,
                            "line": 3
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          92,
                          93
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
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
                            "name": "P",
                            "optional": false,
                            "range": [
                              110,
                              111
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 3
                              },
                              "start": {
                                "column": 33,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            110,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 3
                            },
                            "start": {
                              "column": 33,
                              "line": 3
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
                              108,
                              109
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 3
                              },
                              "start": {
                                "column": 31,
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
                              "column": 32,
                              "line": 3
                            },
                            "start": {
                              "column": 31,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          108,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        89,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
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
                    85,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": null,
                "range": [
                  85,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              81,
              115
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    },
                    "range": [
                      126,
                      139
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          136,
                          139
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
                                137,
                                138
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 4
                                },
                                "start": {
                                  "column": 21,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              137,
                              138
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 4
                              },
                              "start": {
                                "column": 21,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "range": [
                          128,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        128,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    124,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": null,
                "range": [
                  124,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              120,
              140
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 4,
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    },
                    "range": [
                      151,
                      186
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
                            "name": "T",
                            "optional": false,
                            "range": [
                              176,
                              177
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
                            176,
                            177
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
                          170,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 29,
                            "line": 5
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          165,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 24,
                            "line": 5
                          }
                        }
                      },
                      "nameType": null,
                      "readonly": true,
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
                              182,
                              183
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
                            182,
                            183
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
                        "objectType": {
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
                                "column": 40,
                                "line": 5
                              },
                              "start": {
                                "column": 39,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            180,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 5
                            },
                            "start": {
                              "column": 39,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          180,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 5
                          },
                          "start": {
                            "column": 39,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        153,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    149,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": null,
                "range": [
                  149,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              145,
              187
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    },
                    "range": [
                      198,
                      210
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          204,
                          210
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
                                205,
                                206
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
                            "range": [
                              205,
                              206
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "range": [
                                208,
                                209
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
                            "range": [
                              208,
                              209
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
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "range": [
                          200,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        200,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    196,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": null,
                "range": [
                  196,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              192,
              211
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 4,
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    },
                    "range": [
                      222,
                      242
                    ],
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            232,
                            233
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          232,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          227,
                          228
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
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
                              238,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 26,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            238,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 26,
                              "line": 7
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
                              236,
                              237
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 7
                              },
                              "start": {
                                "column": 24,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            236,
                            237
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 7
                            },
                            "start": {
                              "column": 24,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          236,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 7
                          },
                          "start": {
                            "column": 24,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        224,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    220,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": null,
                "range": [
                  220,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              216,
              243
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    },
                    "range": [
                      254,
                      268
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          262,
                          268
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "range": [
                                263,
                                264
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 8
                                },
                                "start": {
                                  "column": 19,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              263,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
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
                                266,
                                267
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
                            "range": [
                              266,
                              267
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
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 8
                          },
                          "start": {
                            "column": 18,
                            "line": 8
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "range": [
                          256,
                          262
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        256,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    252,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  252,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              248,
              269
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 4,
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 9
                      }
                    },
                    "range": [
                      280,
                      297
                    ],
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            290,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          290,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 20,
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
                          285,
                          286
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            294,
                            295
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 9
                            },
                            "start": {
                              "column": 24,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          294,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 9
                          },
                          "start": {
                            "column": 24,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        282,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    278,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  278,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              274,
              298
            ],
            "loc": {
              "end": {
                "column": 28,
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
          51,
          300
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 51,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "verifyLibTypes",
        "optional": false,
        "range": [
          9,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          48
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
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
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
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          },
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    43,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 43,
                      "line": 1
                    }
                  }
                },
                "range": [
                  43,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              },
              "range": [
                37,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
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
              44
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 1
              },
              "start": {
                "column": 27,
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
              "name": "U",
              "optional": false,
              "range": [
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 46,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        300
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
        "name": "Proxy",
        "optional": false,
        "range": [
          307,
          312
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                324,
                327
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              },
              "range": [
                329,
                332
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    331,
                    332
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
                  331,
                  332
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
            "static": false,
            "range": [
              324,
              333
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
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                338,
                341
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  },
                  "range": [
                    347,
                    350
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        349,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      349,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  342,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              },
              "range": [
                351,
                357
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  353,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              338,
              358
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          318,
          360
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        },
        "range": [
          312,
          315
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
                313,
                314
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              313,
              314
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        302,
        360
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxify",
        "optional": false,
        "range": [
          367,
          374
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
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
              "name": "T",
              "optional": false,
              "range": [
                398,
                399
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            "range": [
              398,
              399
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          },
          "range": [
            392,
            399
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 18
            },
            "start": {
              "column": 10,
              "line": 18
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            387,
            388
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 18
            },
            "start": {
              "column": 5,
              "line": 18
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              407,
              413
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      410,
                      411
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    410,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 28,
                      "line": 18
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
                      408,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 18
                      },
                      "start": {
                        "column": 26,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    408,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 18
                    },
                    "start": {
                      "column": 26,
                      "line": 18
                    }
                  }
                },
                "range": [
                  408,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 26,
                    "line": 18
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Proxy",
            "optional": false,
            "range": [
              402,
              407
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 18
              }
            }
          },
          "range": [
            402,
            413
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 18
            },
            "start": {
              "column": 20,
              "line": 18
            }
          }
        },
        "range": [
          380,
          416
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 18,
            "line": 17
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 17
          }
        },
        "range": [
          374,
          377
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
                375,
                376
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              375,
              376
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 13,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        362,
        416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
        "name": "DeepReadonly",
        "optional": false,
        "range": [
          423,
          435
        ],
        "loc": {
          "end": {
            "column": 17,
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
                468,
                469
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 25,
                  "line": 22
                }
              }
            },
            "range": [
              468,
              469
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 25,
                "line": 22
              }
            }
          },
          "range": [
            462,
            469
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 22
            },
            "start": {
              "column": 19,
              "line": 22
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            457,
            458
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              484,
              490
            ],
            "params": [
              {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      487,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 22
                      },
                      "start": {
                        "column": 44,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    487,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 22
                    },
                    "start": {
                      "column": 44,
                      "line": 22
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
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 22
                      },
                      "start": {
                        "column": 42,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 22
                    },
                    "start": {
                      "column": 42,
                      "line": 22
                    }
                  }
                },
                "range": [
                  485,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 22
                  },
                  "start": {
                    "column": 42,
                    "line": 22
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 22
              },
              "start": {
                "column": 41,
                "line": 22
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepReadonly",
            "optional": false,
            "range": [
              472,
              484
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 22
              },
              "start": {
                "column": 29,
                "line": 22
              }
            }
          },
          "range": [
            472,
            490
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 22
            },
            "start": {
              "column": 29,
              "line": 22
            }
          }
        },
        "range": [
          441,
          493
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 23,
            "line": 21
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 17,
            "line": 21
          }
        },
        "range": [
          435,
          438
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
                436,
                437
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              436,
              437
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 21
              },
              "start": {
                "column": 18,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        418,
        494
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 23
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
        "name": "assign",
        "optional": false,
        "range": [
          513,
          519
        ],
        "loc": {
          "end": {
            "column": 23,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 25
              },
              "start": {
                "column": 30,
                "line": 25
              }
            },
            "range": [
              526,
              529
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  528,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 25
                  },
                  "start": {
                    "column": 32,
                    "line": 25
                  }
                }
              },
              "range": [
                528,
                529
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 25
                }
              }
            }
          },
          "range": [
            523,
            529
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 25
            },
            "start": {
              "column": 27,
              "line": 25
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 25
              },
              "start": {
                "column": 40,
                "line": 25
              }
            },
            "range": [
              536,
              548
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  545,
                  548
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
                        546,
                        547
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 25
                        },
                        "start": {
                          "column": 50,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      546,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 25
                      },
                      "start": {
                        "column": 50,
                        "line": 25
                      }
                    }
                  }
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
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  538,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 25
                  },
                  "start": {
                    "column": 42,
                    "line": 25
                  }
                }
              },
              "range": [
                538,
                548
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 25
                },
                "start": {
                  "column": 42,
                  "line": 25
                }
              }
            }
          },
          "range": [
            531,
            548
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 25
            },
            "start": {
              "column": 35,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 25
          },
          "start": {
            "column": 53,
            "line": 25
          }
        },
        "range": [
          549,
          555
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            551,
            555
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 25
            },
            "start": {
              "column": 55,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 25
          },
          "start": {
            "column": 23,
            "line": 25
          }
        },
        "range": [
          519,
          522
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
                520,
                521
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              520,
              521
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        496,
        556
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
        "name": "freeze",
        "optional": false,
        "range": [
          574,
          580
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 26
              },
              "start": {
                "column": 30,
                "line": 26
              }
            },
            "range": [
              587,
              590
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  589,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                }
              },
              "range": [
                589,
                590
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 26
                },
                "start": {
                  "column": 32,
                  "line": 26
                }
              }
            }
          },
          "range": [
            584,
            590
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 26
            },
            "start": {
              "column": 27,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 26
          },
          "start": {
            "column": 34,
            "line": 26
          }
        },
        "range": [
          591,
          604
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              601,
              604
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
                    602,
                    603
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 26
                    },
                    "start": {
                      "column": 45,
                      "line": 26
                    }
                  }
                },
                "range": [
                  602,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 26
                  },
                  "start": {
                    "column": 45,
                    "line": 26
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 26
              },
              "start": {
                "column": 44,
                "line": 26
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "range": [
              593,
              601
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 26
              },
              "start": {
                "column": 36,
                "line": 26
              }
            }
          },
          "range": [
            593,
            604
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 26
            },
            "start": {
              "column": 36,
              "line": 26
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 26
          },
          "start": {
            "column": 23,
            "line": 26
          }
        },
        "range": [
          580,
          583
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
                581,
                582
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
            "out": false,
            "range": [
              581,
              582
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
        ]
      },
      "range": [
        557,
        605
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
        "name": "pick",
        "optional": false,
        "range": [
          623,
          627
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 27
              },
              "start": {
                "column": 47,
                "line": 27
              }
            },
            "range": [
              653,
              656
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  655,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 27
                  },
                  "start": {
                    "column": 49,
                    "line": 27
                  }
                }
              },
              "range": [
                655,
                656
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 27
                },
                "start": {
                  "column": 49,
                  "line": 27
                }
              }
            }
          },
          "range": [
            650,
            656
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 27
            },
            "start": {
              "column": 44,
              "line": 27
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "range": [
              661,
              665
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 27
              },
              "start": {
                "column": 55,
                "line": 27
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 27
              },
              "start": {
                "column": 59,
                "line": 27
              }
            },
            "range": [
              665,
              670
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    667,
                    668
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 27
                    },
                    "start": {
                      "column": 61,
                      "line": 27
                    }
                  }
                },
                "range": [
                  667,
                  668
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 27
                  },
                  "start": {
                    "column": 61,
                    "line": 27
                  }
                }
              },
              "range": [
                667,
                670
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 27
                },
                "start": {
                  "column": 61,
                  "line": 27
                }
              }
            }
          },
          "range": [
            658,
            670
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 27
            },
            "start": {
              "column": 52,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 77,
            "line": 27
          },
          "start": {
            "column": 65,
            "line": 27
          }
        },
        "range": [
          671,
          683
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              677,
              683
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
                    678,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 27
                    },
                    "start": {
                      "column": 72,
                      "line": 27
                    }
                  }
                },
                "range": [
                  678,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 27
                  },
                  "start": {
                    "column": 72,
                    "line": 27
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    681,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 27
                    },
                    "start": {
                      "column": 75,
                      "line": 27
                    }
                  }
                },
                "range": [
                  681,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 27
                  },
                  "start": {
                    "column": 75,
                    "line": 27
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 27
              },
              "start": {
                "column": 71,
                "line": 27
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "range": [
              673,
              677
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 27
              },
              "start": {
                "column": 67,
                "line": 27
              }
            }
          },
          "range": [
            673,
            683
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 27
            },
            "start": {
              "column": 67,
              "line": 27
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 27
          },
          "start": {
            "column": 21,
            "line": 27
          }
        },
        "range": [
          627,
          649
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
                628,
                629
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              628,
              629
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    647,
                    648
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 27
                    },
                    "start": {
                      "column": 41,
                      "line": 27
                    }
                  }
                },
                "range": [
                  647,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 27
                  },
                  "start": {
                    "column": 41,
                    "line": 27
                  }
                }
              },
              "range": [
                641,
                648
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 27
                },
                "start": {
                  "column": 35,
                  "line": 27
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                631,
                632
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 27
                },
                "start": {
                  "column": 25,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              631,
              648
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 27
              },
              "start": {
                "column": 25,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        606,
        684
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
        "name": "mapObject",
        "optional": false,
        "range": [
          702,
          711
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 68,
                "line": 28
              },
              "start": {
                "column": 54,
                "line": 28
              }
            },
            "range": [
              739,
              753
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  747,
                  753
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        748,
                        749
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 28
                        },
                        "start": {
                          "column": 63,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      748,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 28
                      },
                      "start": {
                        "column": 63,
                        "line": 28
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
                        751,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 28
                        },
                        "start": {
                          "column": 66,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      751,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 28
                      },
                      "start": {
                        "column": 66,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 28
                  },
                  "start": {
                    "column": 62,
                    "line": 28
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  741,
                  747
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 28
                  },
                  "start": {
                    "column": 56,
                    "line": 28
                  }
                }
              },
              "range": [
                741,
                753
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 28
                },
                "start": {
                  "column": 56,
                  "line": 28
                }
              }
            }
          },
          "range": [
            736,
            753
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 28
            },
            "start": {
              "column": 51,
              "line": 28
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 28
              },
              "start": {
                "column": 71,
                "line": 28
              }
            },
            "range": [
              756,
              769
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
                        "column": 78,
                        "line": 28
                      },
                      "start": {
                        "column": 75,
                        "line": 28
                      }
                    },
                    "range": [
                      760,
                      763
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          762,
                          763
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 28
                          },
                          "start": {
                            "column": 77,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        762,
                        763
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 28
                        },
                        "start": {
                          "column": 77,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    759,
                    763
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 28
                    },
                    "start": {
                      "column": 74,
                      "line": 28
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 28
                  },
                  "start": {
                    "column": 80,
                    "line": 28
                  }
                },
                "range": [
                  765,
                  769
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      768,
                      769
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
                    768,
                    769
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
              },
              "range": [
                758,
                769
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 28
                },
                "start": {
                  "column": 73,
                  "line": 28
                }
              }
            }
          },
          "range": [
            755,
            769
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 28
            },
            "start": {
              "column": 70,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 99,
            "line": 28
          },
          "start": {
            "column": 85,
            "line": 28
          }
        },
        "range": [
          770,
          784
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              778,
              784
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    779,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 28
                    },
                    "start": {
                      "column": 94,
                      "line": 28
                    }
                  }
                },
                "range": [
                  779,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 28
                  },
                  "start": {
                    "column": 94,
                    "line": 28
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
                    782,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 28
                    },
                    "start": {
                      "column": 97,
                      "line": 28
                    }
                  }
                },
                "range": [
                  782,
                  783
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 28
                  },
                  "start": {
                    "column": 97,
                    "line": 28
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 28
              },
              "start": {
                "column": 93,
                "line": 28
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              772,
              778
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 28
              },
              "start": {
                "column": 87,
                "line": 28
              }
            }
          },
          "range": [
            772,
            784
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 28
            },
            "start": {
              "column": 87,
              "line": 28
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 28
          },
          "start": {
            "column": 26,
            "line": 28
          }
        },
        "range": [
          711,
          735
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                722,
                728
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 28
                },
                "start": {
                  "column": 37,
                  "line": 28
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                712,
                713
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 28
                },
                "start": {
                  "column": 27,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              712,
              728
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 28
              },
              "start": {
                "column": 27,
                "line": 28
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
              "name": "T",
              "optional": false,
              "range": [
                730,
                731
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 28
                },
                "start": {
                  "column": 45,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              730,
              731
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 45,
                "line": 28
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
                733,
                734
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 28
                },
                "start": {
                  "column": 48,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              733,
              734
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 28
              },
              "start": {
                "column": 48,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        685,
        785
      ],
      "loc": {
        "end": {
          "column": 100,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
        "name": "proxify",
        "optional": false,
        "range": [
          803,
          810
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 29
              },
              "start": {
                "column": 31,
                "line": 29
              }
            },
            "range": [
              817,
              820
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  819,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 29
                  },
                  "start": {
                    "column": 33,
                    "line": 29
                  }
                }
              },
              "range": [
                819,
                820
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 29
                },
                "start": {
                  "column": 33,
                  "line": 29
                }
              }
            }
          },
          "range": [
            814,
            820
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 29
            },
            "start": {
              "column": 28,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 29
          },
          "start": {
            "column": 35,
            "line": 29
          }
        },
        "range": [
          821,
          833
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              830,
              833
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
                    831,
                    832
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 29
                    },
                    "start": {
                      "column": 45,
                      "line": 29
                    }
                  }
                },
                "range": [
                  831,
                  832
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 29
                  },
                  "start": {
                    "column": 45,
                    "line": 29
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 29
              },
              "start": {
                "column": 44,
                "line": 29
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Proxify",
            "optional": false,
            "range": [
              823,
              830
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 29
              },
              "start": {
                "column": 37,
                "line": 29
              }
            }
          },
          "range": [
            823,
            833
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 29
            },
            "start": {
              "column": 37,
              "line": 29
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 29
          },
          "start": {
            "column": 24,
            "line": 29
          }
        },
        "range": [
          810,
          813
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
                811,
                812
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 29
                },
                "start": {
                  "column": 25,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              811,
              812
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 29
              },
              "start": {
                "column": 25,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        786,
        834
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          852,
          885
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                858,
                859
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
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
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              },
              "range": [
                859,
                867
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  861,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 32
                  },
                  "start": {
                    "column": 7,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              858,
              868
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                873,
                874
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                  "column": 13,
                  "line": 33
                },
                "start": {
                  "column": 5,
                  "line": 33
                }
              },
              "range": [
                874,
                882
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  876,
                  882
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 33
                  },
                  "start": {
                    "column": 7,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              873,
              883
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 16,
            "line": 31
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "range": [
          846,
          851
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        }
      },
      "range": [
        836,
        885
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
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
          903,
          984
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                909,
                913
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              },
              "range": [
                913,
                921
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  915,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 37
                  },
                  "start": {
                    "column": 10,
                    "line": 37
                  }
                }
              }
            },
            "range": [
              909,
              922
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "range": [
                927,
                932
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 4,
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
                  "column": 17,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              },
              "range": [
                932,
                940
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  934,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              927,
              941
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "range": [
                946,
                952
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
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
                  "column": 18,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 39
                }
              },
              "range": [
                952,
                960
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  954,
                  960
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 39
                  },
                  "start": {
                    "column": 12,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              946,
              961
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "range": [
                966,
                974
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                  "column": 19,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              },
              "range": [
                974,
                981
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "range": [
                    976,
                    981
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
                "range": [
                  976,
                  981
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
              }
            },
            "range": [
              966,
              982
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "column": 16,
            "line": 36
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "range": [
          897,
          902
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 36
          },
          "start": {
            "column": 10,
            "line": 36
          }
        }
      },
      "range": [
        887,
        984
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1009,
          1094
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                1015,
                1019
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
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
                  "line": 44
                },
                "start": {
                  "column": 9,
                  "line": 44
                }
              },
              "range": [
                1020,
                1028
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1022,
                  1028
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 44
                  },
                  "start": {
                    "column": 11,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              1015,
              1029
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "range": [
                1034,
                1039
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
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
                  "column": 18,
                  "line": 45
                },
                "start": {
                  "column": 10,
                  "line": 45
                }
              },
              "range": [
                1040,
                1048
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1042,
                  1048
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 45
                  },
                  "start": {
                    "column": 12,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              1034,
              1049
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "range": [
                1054,
                1060
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
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
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 46
                }
              },
              "range": [
                1061,
                1069
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1063,
                  1069
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 46
                  },
                  "start": {
                    "column": 13,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1054,
              1070
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "range": [
                1075,
                1083
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 47
                },
                "start": {
                  "column": 13,
                  "line": 47
                }
              },
              "range": [
                1084,
                1091
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "range": [
                    1086,
                    1091
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 47
                    },
                    "start": {
                      "column": 15,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1086,
                  1091
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 47
                  },
                  "start": {
                    "column": 15,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1075,
              1092
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 23,
            "line": 43
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialShape",
        "optional": false,
        "range": [
          996,
          1008
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 43
          },
          "start": {
            "column": 10,
            "line": 43
          }
        }
      },
      "range": [
        986,
        1094
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1120,
          1237
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                1135,
                1139
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 51
                },
                "start": {
                  "column": 13,
                  "line": 51
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 51
                },
                "start": {
                  "column": 17,
                  "line": 51
                }
              },
              "range": [
                1139,
                1147
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1141,
                  1147
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 51
                  },
                  "start": {
                    "column": 19,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              1126,
              1148
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "width",
              "optional": false,
              "range": [
                1162,
                1167
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 52
                },
                "start": {
                  "column": 13,
                  "line": 52
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 52
                },
                "start": {
                  "column": 18,
                  "line": 52
                }
              },
              "range": [
                1167,
                1175
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1169,
                  1175
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 52
                  },
                  "start": {
                    "column": 20,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              1153,
              1176
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "height",
              "optional": false,
              "range": [
                1190,
                1196
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 53
                },
                "start": {
                  "column": 13,
                  "line": 53
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 53
                },
                "start": {
                  "column": 19,
                  "line": 53
                }
              },
              "range": [
                1196,
                1204
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1198,
                  1204
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 53
                  },
                  "start": {
                    "column": 21,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              1181,
              1205
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "range": [
                1219,
                1227
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 54
                },
                "start": {
                  "column": 13,
                  "line": 54
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 54
                },
                "start": {
                  "column": 21,
                  "line": 54
                }
              },
              "range": [
                1227,
                1234
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "range": [
                    1229,
                    1234
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 54
                    },
                    "start": {
                      "column": 23,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1229,
                  1234
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 54
                  },
                  "start": {
                    "column": 23,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1210,
              1235
            ],
            "loc": {
              "end": {
                "column": 29,
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
            "column": 24,
            "line": 50
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadonlyShape",
        "optional": false,
        "range": [
          1106,
          1119
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 50
          },
          "start": {
            "column": 10,
            "line": 50
          }
        }
      },
      "range": [
        1096,
        1237
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 50
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
                  "name": "s1",
                  "optional": false,
                  "range": [
                    1286,
                    1288
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 58
                    },
                    "start": {
                      "column": 11,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          1292,
                          1296
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 58
                          },
                          "start": {
                            "column": 17,
                            "line": 58
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"circle\"",
                        "value": "circle",
                        "range": [
                          1298,
                          1306
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 58
                          },
                          "start": {
                            "column": 23,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1292,
                        1306
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 58
                        },
                        "start": {
                          "column": 17,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "range": [
                    1290,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 58
                    },
                    "start": {
                      "column": 15,
                      "line": 58
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "range": [
                  1279,
                  1285
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "range": [
                1279,
                1309
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              1279,
              1310
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
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
                  "name": "s2",
                  "optional": false,
                  "range": [
                    1322,
                    1324
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 59
                    },
                    "start": {
                      "column": 11,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "range": [
                          1328,
                          1333
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 59
                          },
                          "start": {
                            "column": 17,
                            "line": 59
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1335,
                          1337
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 59
                          },
                          "start": {
                            "column": 24,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1328,
                        1337
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 59
                        },
                        "start": {
                          "column": 17,
                          "line": 59
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "height",
                        "optional": false,
                        "range": [
                          1339,
                          1345
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 59
                          },
                          "start": {
                            "column": 28,
                            "line": 59
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "20",
                        "value": 20,
                        "range": [
                          1347,
                          1349
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 59
                          },
                          "start": {
                            "column": 36,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1339,
                        1349
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 59
                        },
                        "start": {
                          "column": 28,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "range": [
                    1326,
                    1351
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 59
                    },
                    "start": {
                      "column": 15,
                      "line": 59
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assign",
                "optional": false,
                "range": [
                  1315,
                  1321
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "range": [
                1315,
                1352
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1315,
              1353
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          1273,
          1355
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 34,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "range": [
          1248,
          1250
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 57
              },
              "start": {
                "column": 14,
                "line": 57
              }
            },
            "range": [
              1253,
              1260
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1255,
                  1260
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 57
                  },
                  "start": {
                    "column": 16,
                    "line": 57
                  }
                }
              },
              "range": [
                1255,
                1260
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 57
                },
                "start": {
                  "column": 16,
                  "line": 57
                }
              }
            }
          },
          "range": [
            1251,
            1260
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 57
            },
            "start": {
              "column": 12,
              "line": 57
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 57
              },
              "start": {
                "column": 25,
                "line": 57
              }
            },
            "range": [
              1264,
              1271
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1266,
                  1271
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 57
                  },
                  "start": {
                    "column": 27,
                    "line": 57
                  }
                }
              },
              "range": [
                1266,
                1271
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 57
                },
                "start": {
                  "column": 27,
                  "line": 57
                }
              }
            }
          },
          "range": [
            1262,
            1271
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 57
            },
            "start": {
              "column": 23,
              "line": 57
            }
          }
        }
      ],
      "range": [
        1239,
        1355
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 57
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
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 63
                      },
                      "start": {
                        "column": 14,
                        "line": 63
                      }
                    },
                    "range": [
                      1399,
                      1414
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReadonlyShape",
                        "optional": false,
                        "range": [
                          1401,
                          1414
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 63
                          },
                          "start": {
                            "column": 16,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1401,
                        1414
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 63
                        },
                        "start": {
                          "column": 16,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    1393,
                    1414
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
                "init": null,
                "range": [
                  1393,
                  1414
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1389,
              1415
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
                  "name": "frozen",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 64
                      },
                      "start": {
                        "column": 14,
                        "line": 64
                      }
                    },
                    "range": [
                      1430,
                      1447
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1440,
                          1447
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "range": [
                                1441,
                                1446
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 64
                                },
                                "start": {
                                  "column": 25,
                                  "line": 64
                                }
                              }
                            },
                            "range": [
                              1441,
                              1446
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 64
                              },
                              "start": {
                                "column": 25,
                                "line": 64
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 64
                          },
                          "start": {
                            "column": 24,
                            "line": 64
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "range": [
                          1432,
                          1440
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 64
                          },
                          "start": {
                            "column": 16,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1432,
                        1447
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 64
                        },
                        "start": {
                          "column": 16,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    1424,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "init": null,
                "range": [
                  1424,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1420,
              1448
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
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
                  "name": "frozen",
                  "optional": false,
                  "range": [
                    1457,
                    1463
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "range": [
                        1473,
                        1478
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 65
                        },
                        "start": {
                          "column": 24,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "freeze",
                    "optional": false,
                    "range": [
                      1466,
                      1472
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 65
                      },
                      "start": {
                        "column": 17,
                        "line": 65
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1466,
                    1479
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 65
                    },
                    "start": {
                      "column": 17,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1457,
                  1479
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1453,
              1480
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1383,
          1482
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 26,
            "line": 62
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          1366,
          1368
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 62
              },
              "start": {
                "column": 17,
                "line": 62
              }
            },
            "range": [
              1374,
              1381
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1376,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 62
                  },
                  "start": {
                    "column": 19,
                    "line": 62
                  }
                }
              },
              "range": [
                1376,
                1381
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 62
                },
                "start": {
                  "column": 19,
                  "line": 62
                }
              }
            }
          },
          "range": [
            1369,
            1381
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 62
            },
            "start": {
              "column": 12,
              "line": 62
            }
          }
        }
      ],
      "range": [
        1357,
        1482
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 62
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
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 69
                      },
                      "start": {
                        "column": 15,
                        "line": 69
                      }
                    },
                    "range": [
                      1527,
                      1541
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PartialShape",
                        "optional": false,
                        "range": [
                          1529,
                          1541
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 69
                          },
                          "start": {
                            "column": 17,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1529,
                        1541
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 69
                        },
                        "start": {
                          "column": 17,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    1520,
                    1541
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                "init": null,
                "range": [
                  1520,
                  1541
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1516,
              1542
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 69
              },
              "start": {
                "column": 4,
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
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 70
                      },
                      "start": {
                        "column": 15,
                        "line": 70
                      }
                    },
                    "range": [
                      1558,
                      1574
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1567,
                          1574
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "range": [
                                1568,
                                1573
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 70
                                },
                                "start": {
                                  "column": 25,
                                  "line": 70
                                }
                              }
                            },
                            "range": [
                              1568,
                              1573
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 70
                              },
                              "start": {
                                "column": 25,
                                "line": 70
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 70
                          },
                          "start": {
                            "column": 24,
                            "line": 70
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "range": [
                          1560,
                          1567
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 70
                          },
                          "start": {
                            "column": 17,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1560,
                        1574
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 70
                        },
                        "start": {
                          "column": 17,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1551,
                    1574
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 70
                    }
                  }
                },
                "init": null,
                "range": [
                  1551,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 70
                  },
                  "start": {
                    "column": 8,
                    "line": 70
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1547,
              1575
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 70
              },
              "start": {
                "column": 4,
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
                  "name": "partial",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 71
                      },
                      "start": {
                        "column": 15,
                        "line": 71
                      }
                    },
                    "range": [
                      1591,
                      1607
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1600,
                          1607
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Shape",
                              "optional": false,
                              "range": [
                                1601,
                                1606
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 71
                                },
                                "start": {
                                  "column": 25,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              1601,
                              1606
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 71
                              },
                              "start": {
                                "column": 25,
                                "line": 71
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 71
                          },
                          "start": {
                            "column": 24,
                            "line": 71
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "range": [
                          1593,
                          1600
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 71
                          },
                          "start": {
                            "column": 17,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1593,
                        1607
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 71
                        },
                        "start": {
                          "column": 17,
                          "line": 71
                        }
                      }
                    }
                  },
                  "range": [
                    1584,
                    1607
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    1610,
                    1612
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 71
                    },
                    "start": {
                      "column": 34,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1584,
                  1612
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1580,
              1613
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          }
        ],
        "range": [
          1510,
          1615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 26,
            "line": 68
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1493,
          1495
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 68
          },
          "start": {
            "column": 9,
            "line": 68
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 68
              },
              "start": {
                "column": 17,
                "line": 68
              }
            },
            "range": [
              1501,
              1508
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1503,
                  1508
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 68
                  },
                  "start": {
                    "column": 19,
                    "line": 68
                  }
                }
              },
              "range": [
                1503,
                1508
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 68
                },
                "start": {
                  "column": 19,
                  "line": 68
                }
              }
            }
          },
          "range": [
            1496,
            1508
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 68
            },
            "start": {
              "column": 12,
              "line": 68
            }
          }
        }
      ],
      "range": [
        1484,
        1615
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 68
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    1655,
                    1656
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 75
                    },
                    "start": {
                      "column": 10,
                      "line": 75
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "range": [
                        1664,
                        1669
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 75
                        },
                        "start": {
                          "column": 19,
                          "line": 75
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"name\"",
                      "value": "name",
                      "range": [
                        1671,
                        1677
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 75
                        },
                        "start": {
                          "column": 26,
                          "line": 75
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"location\"",
                      "value": "location",
                      "range": [
                        1679,
                        1689
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 75
                        },
                        "start": {
                          "column": 34,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pick",
                    "optional": false,
                    "range": [
                      1659,
                      1663
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 75
                      },
                      "start": {
                        "column": 14,
                        "line": 75
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1659,
                    1690
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 75
                    },
                    "start": {
                      "column": 14,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1655,
                  1690
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 75
                  },
                  "start": {
                    "column": 10,
                    "line": 75
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1649,
              1691
            ],
            "loc": {
              "end": {
                "column": 46,
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
          1643,
          1731
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 26,
            "line": 74
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          1626,
          1628
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 74
          },
          "start": {
            "column": 9,
            "line": 74
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 74
              },
              "start": {
                "column": 17,
                "line": 74
              }
            },
            "range": [
              1634,
              1641
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1636,
                  1641
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 74
                  },
                  "start": {
                    "column": 19,
                    "line": 74
                  }
                }
              },
              "range": [
                1636,
                1641
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 74
                },
                "start": {
                  "column": 19,
                  "line": 74
                }
              }
            }
          },
          "range": [
            1629,
            1641
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 74
            },
            "start": {
              "column": 12,
              "line": 74
            }
          }
        }
      ],
      "range": [
        1617,
        1731
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 74
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
                  "name": "rec",
                  "optional": false,
                  "range": [
                    1759,
                    1762
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 79
                    },
                    "start": {
                      "column": 10,
                      "line": 79
                    }
                  }
                },
                "init": {
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
                          1767,
                          1770
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 79
                          },
                          "start": {
                            "column": 18,
                            "line": 79
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          1772,
                          1779
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 79
                          },
                          "start": {
                            "column": 23,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1767,
                        1779
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 79
                        },
                        "start": {
                          "column": 18,
                          "line": 79
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
                          1781,
                          1784
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 79
                          },
                          "start": {
                            "column": 32,
                            "line": 79
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"world\"",
                        "value": "world",
                        "range": [
                          1786,
                          1793
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 79
                          },
                          "start": {
                            "column": 37,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1781,
                        1793
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 79
                        },
                        "start": {
                          "column": 32,
                          "line": 79
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
                          1795,
                          1798
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 79
                          },
                          "start": {
                            "column": 46,
                            "line": 79
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"bye\"",
                        "value": "bye",
                        "range": [
                          1800,
                          1805
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 79
                          },
                          "start": {
                            "column": 51,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1795,
                        1805
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 79
                        },
                        "start": {
                          "column": 46,
                          "line": 79
                        }
                      }
                    }
                  ],
                  "range": [
                    1765,
                    1807
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1759,
                  1807
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 79
                  },
                  "start": {
                    "column": 10,
                    "line": 79
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1753,
              1808
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 79
              },
              "start": {
                "column": 4,
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
                  "name": "lengths",
                  "optional": false,
                  "range": [
                    1819,
                    1826
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 80
                    },
                    "start": {
                      "column": 10,
                      "line": 80
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rec",
                      "optional": false,
                      "range": [
                        1839,
                        1842
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 80
                        },
                        "start": {
                          "column": 30,
                          "line": 80
                        }
                      }
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            1849,
                            1850
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 80
                            },
                            "start": {
                              "column": 40,
                              "line": 80
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            1851,
                            1857
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 80
                            },
                            "start": {
                              "column": 42,
                              "line": 80
                            }
                          }
                        },
                        "range": [
                          1849,
                          1857
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 80
                          },
                          "start": {
                            "column": 40,
                            "line": 80
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
                          "name": "s",
                          "optional": false,
                          "range": [
                            1844,
                            1845
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 80
                            },
                            "start": {
                              "column": 35,
                              "line": 80
                            }
                          }
                        }
                      ],
                      "range": [
                        1844,
                        1857
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 80
                        },
                        "start": {
                          "column": 35,
                          "line": 80
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapObject",
                    "optional": false,
                    "range": [
                      1829,
                      1838
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 80
                      },
                      "start": {
                        "column": 20,
                        "line": 80
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1829,
                    1858
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 80
                    },
                    "start": {
                      "column": 20,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1819,
                  1858
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 80
                  },
                  "start": {
                    "column": 10,
                    "line": 80
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1813,
              1859
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "range": [
          1747,
          1907
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 14,
            "line": 78
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          1742,
          1744
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
          }
        }
      },
      "params": [],
      "range": [
        1733,
        1907
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 78
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
                  "name": "p",
                  "optional": false,
                  "range": [
                    1947,
                    1948
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 84
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shape",
                      "optional": false,
                      "range": [
                        1959,
                        1964
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 84
                        },
                        "start": {
                          "column": 22,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "proxify",
                    "optional": false,
                    "range": [
                      1951,
                      1958
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 84
                      },
                      "start": {
                        "column": 14,
                        "line": 84
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1951,
                    1965
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 84
                    },
                    "start": {
                      "column": 14,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1947,
                  1965
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 84
                  },
                  "start": {
                    "column": 10,
                    "line": 84
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1941,
              1966
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    1975,
                    1979
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 85
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          1982,
                          1983
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 85
                          },
                          "start": {
                            "column": 15,
                            "line": 85
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          1984,
                          1988
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 85
                          },
                          "start": {
                            "column": 17,
                            "line": 85
                          }
                        }
                      },
                      "range": [
                        1982,
                        1988
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 85
                        },
                        "start": {
                          "column": 15,
                          "line": 85
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "range": [
                        1989,
                        1992
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 85
                        },
                        "start": {
                          "column": 22,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1982,
                      1992
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 85
                      },
                      "start": {
                        "column": 15,
                        "line": 85
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1982,
                    1994
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 85
                    },
                    "start": {
                      "column": 15,
                      "line": 85
                    }
                  }
                },
                "range": [
                  1975,
                  1994
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 85
                  },
                  "start": {
                    "column": 8,
                    "line": 85
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1971,
              1995
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    2012,
                    2014
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 86
                    },
                    "start": {
                      "column": 16,
                      "line": 86
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "range": [
                      2000,
                      2001
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 86
                      },
                      "start": {
                        "column": 4,
                        "line": 86
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "range": [
                      2002,
                      2007
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 86
                      },
                      "start": {
                        "column": 6,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    2000,
                    2007
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "range": [
                    2008,
                    2011
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 86
                    },
                    "start": {
                      "column": 12,
                      "line": 86
                    }
                  }
                },
                "range": [
                  2000,
                  2011
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 86
                  },
                  "start": {
                    "column": 4,
                    "line": 86
                  }
                }
              },
              "optional": false,
              "range": [
                2000,
                2015
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "range": [
              2000,
              2016
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1935,
          2018
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 26,
            "line": 83
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          1918,
          1920
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 83
          },
          "start": {
            "column": 9,
            "line": 83
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 83
              },
              "start": {
                "column": 17,
                "line": 83
              }
            },
            "range": [
              1926,
              1933
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "range": [
                  1928,
                  1933
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 83
                  },
                  "start": {
                    "column": 19,
                    "line": 83
                  }
                }
              },
              "range": [
                1928,
                1933
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 83
                },
                "start": {
                  "column": 19,
                  "line": 83
                }
              }
            }
          },
          "range": [
            1921,
            1933
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 83
            },
            "start": {
              "column": 12,
              "line": 83
            }
          }
        }
      ],
      "range": [
        1909,
        2018
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 83
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    2070,
                    2074
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "range": [
                      2077,
                      2082
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      2083,
                      2087
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 90
                      },
                      "start": {
                        "column": 21,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    2077,
                    2087
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 90
                    },
                    "start": {
                      "column": 15,
                      "line": 90
                    }
                  }
                },
                "range": [
                  2070,
                  2087
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2066,
              2088
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
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
                  "name": "location",
                  "optional": false,
                  "range": [
                    2108,
                    2116
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "shape",
                    "optional": false,
                    "range": [
                      2119,
                      2124
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 91
                      },
                      "start": {
                        "column": 19,
                        "line": 91
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "location",
                    "optional": false,
                    "range": [
                      2125,
                      2133
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 91
                      },
                      "start": {
                        "column": 25,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    2119,
                    2133
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 91
                    },
                    "start": {
                      "column": 19,
                      "line": 91
                    }
                  }
                },
                "range": [
                  2108,
                  2133
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2104,
              2134
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
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
                    2167,
                    2168
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
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "location",
                    "optional": false,
                    "range": [
                      2171,
                      2179
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 92
                      },
                      "start": {
                        "column": 12,
                        "line": 92
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2180,
                      2181
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 92
                      },
                      "start": {
                        "column": 21,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    2171,
                    2181
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 92
                    },
                    "start": {
                      "column": 12,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2167,
                  2181
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 92
                  },
                  "start": {
                    "column": 8,
                    "line": 92
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2163,
              2182
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "range": [
          2060,
          2195
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 40,
            "line": 89
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          2029,
          2031
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 89
          },
          "start": {
            "column": 9,
            "line": 89
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 89
              },
              "start": {
                "column": 17,
                "line": 89
              }
            },
            "range": [
              2037,
              2058
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2051,
                  2058
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "range": [
                        2052,
                        2057
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 89
                        },
                        "start": {
                          "column": 32,
                          "line": 89
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
                        "line": 89
                      },
                      "start": {
                        "column": 32,
                        "line": 89
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 89
                  },
                  "start": {
                    "column": 31,
                    "line": 89
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepReadonly",
                "optional": false,
                "range": [
                  2039,
                  2051
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 89
                  },
                  "start": {
                    "column": 19,
                    "line": 89
                  }
                }
              },
              "range": [
                2039,
                2058
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 89
                },
                "start": {
                  "column": 19,
                  "line": 89
                }
              }
            }
          },
          "range": [
            2032,
            2058
          ],
          "loc": {
            "end": {
              "column": 38,
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
        2020,
        2195
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 93
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
