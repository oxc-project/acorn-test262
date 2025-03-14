__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    336
  ],
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
            "name": "v",
            "optional": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
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
                  "name": "test",
                  "optional": false,
                  "range": [
                    34,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "smth",
                        "optional": false,
                        "range": [
                          42,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 3
                          },
                          "start": {
                            "column": 20,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          48,
                          49
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
                        42,
                        49
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
                    }
                  ],
                  "range": [
                    40,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                "range": [
                  34,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              32,
              53
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            28,
            53
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        22,
        54
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Field",
        "optional": false,
        "range": [
          61,
          66
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              98,
              99
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 5
              },
              "start": {
                "column": 42,
                "line": 5
              }
            }
          },
          "range": [
            98,
            99
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 5
            },
            "start": {
              "column": 42,
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
            93,
            94
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 5
            },
            "start": {
              "column": 37,
              "line": 5
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              102,
              103
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 46,
                "line": 5
              }
            }
          },
          "range": [
            102,
            103
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 5
            },
            "start": {
              "column": 46,
              "line": 5
            }
          }
        },
        "range": [
          90,
          105
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 34,
            "line": 5
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
          66,
          87
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                77,
                83
              ],
              "loc": {
                "end": {
                  "column": 27,
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
              "name": "A",
              "optional": false,
              "range": [
                67,
                68
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
              67,
              83
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
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
                85,
                86
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        56,
        105
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 5
        },
        "start": {
          "column": 0,
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
            "name": "f",
            "optional": false,
            "range": [
              113,
              114
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  194,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 7
                  },
                  "start": {
                    "column": 87,
                    "line": 7
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  200,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 7
                  },
                  "start": {
                    "column": 93,
                    "line": 7
                  }
                }
              },
              "range": [
                194,
                203
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 7
                },
                "start": {
                  "column": 87,
                  "line": 7
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 7
                    },
                    "start": {
                      "column": 51,
                      "line": 7
                    }
                  },
                  "range": [
                    158,
                    185
                  ],
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          168,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 7
                          },
                          "start": {
                            "column": 61,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        168,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 7
                        },
                        "start": {
                          "column": 61,
                          "line": 7
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        163,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 7
                        },
                        "start": {
                          "column": 56,
                          "line": 7
                        }
                      }
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          177,
                          183
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                178,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 7
                                },
                                "start": {
                                  "column": 71,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              178,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 7
                              },
                              "start": {
                                "column": 71,
                                "line": 7
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
                                181,
                                182
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 7
                                },
                                "start": {
                                  "column": 74,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              181,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 7
                              },
                              "start": {
                                "column": 74,
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
                            "column": 70,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Field",
                        "optional": false,
                        "range": [
                          172,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 7
                          },
                          "start": {
                            "column": 65,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        172,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 7
                        },
                        "start": {
                          "column": 65,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      160,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 7
                      },
                      "start": {
                        "column": 53,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  157,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 82,
                  "line": 7
                },
                "start": {
                  "column": 79,
                  "line": 7
                }
              },
              "range": [
                186,
                189
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    188,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 7
                    },
                    "start": {
                      "column": 81,
                      "line": 7
                    }
                  }
                },
                "range": [
                  188,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 7
                  },
                  "start": {
                    "column": 81,
                    "line": 7
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              },
              "range": [
                117,
                156
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      128,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 21,
                        "line": 7
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      118,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    118,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      146,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 7
                      },
                      "start": {
                        "column": 39,
                        "line": 7
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      136,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    136,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
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
                    "name": "R",
                    "optional": false,
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 7
                      },
                      "start": {
                        "column": 47,
                        "line": 7
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    154,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 7
                    },
                    "start": {
                      "column": 47,
                      "line": 7
                    }
                  }
                }
              ]
            },
            "range": [
              117,
              204
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            113,
            204
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        107,
        205
      ],
      "loc": {
        "end": {
          "column": 98,
          "line": 7
        },
        "start": {
          "column": 0,
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
            "name": "r1",
            "optional": false,
            "range": [
              212,
              214
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  219,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                217,
                218
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              217,
              221
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          },
          "range": [
            212,
            221
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 8
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
        206,
        222
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "name": "g",
            "optional": false,
            "range": [
              230,
              231
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  307,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 10
                  },
                  "start": {
                    "column": 83,
                    "line": 10
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  313,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 10
                  },
                  "start": {
                    "column": 89,
                    "line": 10
                  }
                }
              },
              "range": [
                307,
                316
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 10
                },
                "start": {
                  "column": 83,
                  "line": 10
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 10
                    },
                    "start": {
                      "column": 51,
                      "line": 10
                    }
                  },
                  "range": [
                    275,
                    298
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        282,
                        298
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              283,
                              284
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 10
                              },
                              "start": {
                                "column": 59,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            283,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 10
                            },
                            "start": {
                              "column": 59,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              291,
                              297
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    292,
                                    293
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  292,
                                  293
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 10
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
                                    295,
                                    296
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 72,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 71,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  295,
                                  296
                                ],
                                "loc": {
                                  "end": {
                                    "column": 72,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 71,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 10
                              },
                              "start": {
                                "column": 67,
                                "line": 10
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Field",
                            "optional": false,
                            "range": [
                              286,
                              291
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
                            286,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 10
                            },
                            "start": {
                              "column": 62,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 10
                        },
                        "start": {
                          "column": 58,
                          "line": 10
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Field",
                      "optional": false,
                      "range": [
                        277,
                        282
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 10
                        },
                        "start": {
                          "column": 53,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      277,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 10
                      },
                      "start": {
                        "column": 53,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  274,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 10
                  },
                  "start": {
                    "column": 50,
                    "line": 10
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 78,
                  "line": 10
                },
                "start": {
                  "column": 75,
                  "line": 10
                }
              },
              "range": [
                299,
                302
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    301,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 10
                    },
                    "start": {
                      "column": 77,
                      "line": 10
                    }
                  }
                },
                "range": [
                  301,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 10
                  },
                  "start": {
                    "column": 77,
                    "line": 10
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              },
              "range": [
                234,
                273
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      245,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 21,
                        "line": 10
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      235,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    235,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "range": [
                      263,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 10
                      },
                      "start": {
                        "column": 39,
                        "line": 10
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      253,
                      254
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
                  "out": false,
                  "range": [
                    253,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
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
                      271,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 10
                      },
                      "start": {
                        "column": 47,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    271,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 10
                    },
                    "start": {
                      "column": 47,
                      "line": 10
                    }
                  }
                }
              ]
            },
            "range": [
              234,
              317
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            230,
            317
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        224,
        318
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "r2",
            "optional": false,
            "range": [
              325,
              327
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "range": [
                  332,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                330,
                331
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              330,
              334
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "range": [
            325,
            334
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        319,
        335
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
