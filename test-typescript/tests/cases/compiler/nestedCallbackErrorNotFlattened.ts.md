__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    361
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cb",
        "optional": false,
        "range": [
          5,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"noAlias\"",
            "value": "noAlias",
            "range": [
              32,
              41
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          },
          "range": [
            32,
            41
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAlias",
                "optional": false,
                "range": [
                  14,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
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
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                },
                "range": [
                  21,
                  30
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 1
                      },
                      "start": {
                        "column": 26,
                        "line": 1
                      }
                    },
                    "range": [
                      26,
                      30
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          29,
                          30
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 1
                          },
                          "start": {
                            "column": 29,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        29,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 1
                        },
                        "start": {
                          "column": 29,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    23,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                14,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            13,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "range": [
          13,
          42
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                206,
                230
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    210,
                    230
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          213,
                          229
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                216,
                                228
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      219,
                                      227
                                    ],
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          220,
                                          226
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 4
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cb",
                                    "optional": false,
                                    "range": [
                                      217,
                                      219
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    217,
                                    227
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 4
                                },
                                "start": {
                                  "column": 25,
                                  "line": 4
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cb",
                              "optional": false,
                              "range": [
                                214,
                                216
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 4
                                },
                                "start": {
                                  "column": 23,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              214,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 4
                              },
                              "start": {
                                "column": 23,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 4
                          },
                          "start": {
                            "column": 22,
                            "line": 4
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "range": [
                          211,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        211,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 4
                        },
                        "start": {
                          "column": 20,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cb",
                  "optional": false,
                  "range": [
                    208,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "range": [
                  208,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              205,
              230
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            205,
            230
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        191,
        231
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              },
              "range": [
                329,
                353
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    333,
                    353
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          336,
                          352
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                339,
                                351
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      342,
                                      350
                                    ],
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          343,
                                          349
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 5
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cb",
                                    "optional": false,
                                    "range": [
                                      340,
                                      342
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    340,
                                    350
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 5
                                },
                                "start": {
                                  "column": 23,
                                  "line": 5
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cb",
                              "optional": false,
                              "range": [
                                337,
                                339
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 5
                                },
                                "start": {
                                  "column": 21,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              337,
                              351
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "range": [
                          334,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        334,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cb",
                  "optional": false,
                  "range": [
                    331,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "range": [
                  331,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              328,
              353
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            328,
            353
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        316,
        354
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            355,
            356
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            359,
            360
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        "range": [
          355,
          360
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        355,
        361
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 6,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
