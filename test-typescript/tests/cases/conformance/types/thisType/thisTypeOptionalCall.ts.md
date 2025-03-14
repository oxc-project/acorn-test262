__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    158
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      151,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
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
                    "name": "fn",
                    "optional": false,
                    "range": [
                      142,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bind",
                    "optional": false,
                    "range": [
                      146,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    142,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "range": [
                  142,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "range": [
                142,
                155
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              135,
              156
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          129,
          158
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 129,
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
        "name": "maybeBind",
        "optional": false,
        "range": [
          9,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
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
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            },
            "range": [
              45,
              48
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  47,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
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
                48
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            }
          },
          "range": [
            42,
            48
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 94,
                "line": 1
              },
              "start": {
                "column": 52,
                "line": 1
              }
            },
            "range": [
              52,
              94
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 1
                          },
                          "start": {
                            "column": 60,
                            "line": 1
                          }
                        },
                        "range": [
                          60,
                          63
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              62,
                              63
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 1
                              },
                              "start": {
                                "column": 62,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            62,
                            63
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 1
                            },
                            "start": {
                              "column": 62,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        56,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 1
                        },
                        "start": {
                          "column": 56,
                          "line": 1
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
                          68,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 1
                          },
                          "start": {
                            "column": 68,
                            "line": 1
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 1
                          },
                          "start": {
                            "column": 72,
                            "line": 1
                          }
                        },
                        "range": [
                          72,
                          75
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              74,
                              75
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
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
                            75
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 1
                            },
                            "start": {
                              "column": 74,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        65,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 1
                        },
                        "start": {
                          "column": 65,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 1
                      },
                      "start": {
                        "column": 77,
                        "line": 1
                      }
                    },
                    "range": [
                      77,
                      81
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 1
                          },
                          "start": {
                            "column": 80,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        80,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 1
                        },
                        "start": {
                          "column": 80,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    55,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 1
                    },
                    "start": {
                      "column": 55,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    85,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 94,
                      "line": 1
                    },
                    "start": {
                      "column": 85,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                54,
                94
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 1
                },
                "start": {
                  "column": 54,
                  "line": 1
                }
              }
            }
          },
          "range": [
            50,
            94
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 1
            },
            "start": {
              "column": 50,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 128,
            "line": 1
          },
          "start": {
            "column": 95,
            "line": 1
          }
        },
        "range": [
          95,
          128
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
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
                      102,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 1
                      },
                      "start": {
                        "column": 102,
                        "line": 1
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 1
                      },
                      "start": {
                        "column": 106,
                        "line": 1
                      }
                    },
                    "range": [
                      106,
                      109
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
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
                            "column": 109,
                            "line": 1
                          },
                          "start": {
                            "column": 108,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        108,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 1
                        },
                        "start": {
                          "column": 108,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    99,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 109,
                      "line": 1
                    },
                    "start": {
                      "column": 99,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 115,
                    "line": 1
                  },
                  "start": {
                    "column": 111,
                    "line": 1
                  }
                },
                "range": [
                  111,
                  115
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "range": [
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 115,
                        "line": 1
                      },
                      "start": {
                        "column": 114,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    114,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 1
                    },
                    "start": {
                      "column": 114,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                98,
                115
              ],
              "loc": {
                "end": {
                  "column": 115,
                  "line": 1
                },
                "start": {
                  "column": 98,
                  "line": 1
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                119,
                128
              ],
              "loc": {
                "end": {
                  "column": 128,
                  "line": 1
                },
                "start": {
                  "column": 119,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            97,
            128
          ],
          "loc": {
            "end": {
              "column": 128,
              "line": 1
            },
            "start": {
              "column": 97,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          41
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
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  32,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
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
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
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
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              22,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 22,
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
              "name": "R",
              "optional": false,
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              39,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        158
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
