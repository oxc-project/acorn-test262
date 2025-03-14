__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    282
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          24,
          55
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "range": [
                  31,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "range": [
                  36,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "range": [
                  41,
                  45
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              },
              "range": [
                46,
                52
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  48,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              30,
              53
            ],
            "loc": {
              "end": {
                "column": 27,
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
            "column": 24,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connectmodule",
        "optional": false,
        "range": [
          10,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
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
        55
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
          80,
          167
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "range": [
                86,
                89
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "column": 46,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                89,
                128
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      },
                      "range": [
                        95,
                        110
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false,
                          "range": [
                            97,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 15,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          97,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
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
                      92,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 10,
                        "line": 5
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 5
                    },
                    "start": {
                      "column": 30,
                      "line": 5
                    }
                  },
                  "range": [
                    112,
                    128
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "connectexport",
                      "optional": false,
                      "range": [
                        115,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 33,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      115,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 5
                      },
                      "start": {
                        "column": 33,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  91,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              86,
              129
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "listen",
              "optional": false,
              "range": [
                134,
                140
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              },
              "range": [
                140,
                164
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "port",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      },
                      "range": [
                        147,
                        155
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          149,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 19,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      143,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 27,
                      "line": 6
                    }
                  },
                  "range": [
                    157,
                    164
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      160,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  142,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 34,
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
              134,
              165
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connectexport",
        "optional": false,
        "range": [
          66,
          79
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        56,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              },
              "range": [
                179,
                261
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 6,
                          "line": 10
                        }
                      },
                      "range": [
                        189,
                        204
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectexport",
                          "optional": false,
                          "range": [
                            191,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          191,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      187,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "range": [
                        210,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
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
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
                        }
                      },
                      "range": [
                        215,
                        230
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false,
                          "range": [
                            217,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 11
                            },
                            "start": {
                              "column": 11,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          217,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 11,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      210,
                      231
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "range": [
                        236,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
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
                          "column": 26,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      },
                      "range": [
                        243,
                        258
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false,
                          "range": [
                            245,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 12
                            },
                            "start": {
                              "column": 13,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          245,
                          258
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      236,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  181,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              173,
              261
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            173,
            261
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        169,
        262
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "range": [
          273,
          279
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "range": [
        264,
        280
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
