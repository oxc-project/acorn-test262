__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    92,
    253
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fn",
        "optional": false,
        "range": [
          97,
          99
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "subj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 2
                },
                "start": {
                  "column": 46,
                  "line": 2
                }
              },
              "range": [
                138,
                141
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    140,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 2
                    },
                    "start": {
                      "column": 48,
                      "line": 2
                    }
                  }
                },
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 2
                  },
                  "start": {
                    "column": 48,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              134,
              141
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 2
              },
              "start": {
                "column": 42,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 55,
              "line": 2
            },
            "start": {
              "column": 51,
              "line": 2
            }
          },
          "range": [
            143,
            147
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 54,
                  "line": 2
                }
              }
            },
            "range": [
              146,
              147
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 2
              },
              "start": {
                "column": 54,
                "line": 2
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 41,
              "line": 2
            },
            "start": {
              "column": 28,
              "line": 2
            }
          },
          "range": [
            120,
            133
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
                  "name": "T",
                  "optional": false,
                  "range": [
                    131,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 39,
                      "line": 2
                    }
                  }
                },
                "range": [
                  131,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 2
                  },
                  "start": {
                    "column": 39,
                    "line": 2
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
                  121,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                121,
                132
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 2
                },
                "start": {
                  "column": 29,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          120,
          147
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        },
        "range": [
          99,
          117
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                110,
                116
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
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
                100,
                101
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
            "out": false,
            "range": [
              100,
              116
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        92,
        147
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    247,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    238,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "range": [
                    240,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "range": [
                  238,
                  246
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
              "range": [
                238,
                249
              ],
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
            "range": [
              238,
              250
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
          }
        ],
        "range": [
          232,
          252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 84,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuff",
        "optional": false,
        "range": [
          157,
          164
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 3
              },
              "start": {
                "column": 50,
                "line": 3
              }
            },
            "range": [
              198,
              212
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  205,
                  212
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        208,
                        211
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
                              209,
                              210
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
                            209,
                            210
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
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 3
                        },
                        "start": {
                          "column": 60,
                          "line": 3
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fn",
                      "optional": false,
                      "range": [
                        206,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
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
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 3
                      },
                      "start": {
                        "column": 58,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 3
                  },
                  "start": {
                    "column": 57,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  200,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              },
              "range": [
                200,
                212
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 3
                }
              }
            }
          },
          "range": [
            197,
            212
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 3
            },
            "start": {
              "column": 49,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 82,
                "line": 3
              },
              "start": {
                "column": 67,
                "line": 3
              }
            },
            "range": [
              215,
              230
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  222,
                  230
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        225,
                        229
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "range": [
                              226,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 3
                              },
                              "start": {
                                "column": 78,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            226,
                            228
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 3
                            },
                            "start": {
                              "column": 78,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 3
                        },
                        "start": {
                          "column": 77,
                          "line": 3
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fn",
                      "optional": false,
                      "range": [
                        223,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 3
                        },
                        "start": {
                          "column": 75,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      223,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 3
                      },
                      "start": {
                        "column": 75,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 3
                  },
                  "start": {
                    "column": 74,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  217,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 3
                  },
                  "start": {
                    "column": 69,
                    "line": 3
                  }
                }
              },
              "range": [
                217,
                230
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 3
                },
                "start": {
                  "column": 69,
                  "line": 3
                }
              }
            }
          },
          "range": [
            214,
            230
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 3
            },
            "start": {
              "column": 66,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        },
        "range": [
          164,
          196
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                175,
                181
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
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              165,
              181
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
                  194,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 3
                  },
                  "start": {
                    "column": 46,
                    "line": 3
                  }
                }
              },
              "range": [
                194,
                195
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 46,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "range": [
                183,
                185
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              183,
              195
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        148,
        252
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
