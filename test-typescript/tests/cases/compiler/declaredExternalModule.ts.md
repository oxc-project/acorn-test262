__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    477
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                56,
                97
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
                        68,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 5
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "range": [
                        73,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
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
                      "name": "next",
                      "optional": false,
                      "range": [
                        78,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 19,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    },
                    "range": [
                      83,
                      89
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        85,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    67,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "connectModule",
              "optional": false,
              "range": [
                42,
                55
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              32,
              97
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                127,
                229
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
                      138,
                      141
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 11
                      },
                      "start": {
                        "column": 11,
                        "line": 11
                      }
                    },
                    "range": [
                      141,
                      180
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
                                "column": 32,
                                "line": 11
                              },
                              "start": {
                                "column": 17,
                                "line": 11
                              }
                            },
                            "range": [
                              147,
                              162
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "range": [
                                  149,
                                  162
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                149,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 11
                                },
                                "start": {
                                  "column": 19,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            144,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 11
                            },
                            "start": {
                              "column": 14,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 11
                          },
                          "start": {
                            "column": 34,
                            "line": 11
                          }
                        },
                        "range": [
                          164,
                          180
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "range": [
                              167,
                              180
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 11
                              },
                              "start": {
                                "column": 37,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            167,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 11
                            },
                            "start": {
                              "column": 37,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        143,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    138,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
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
                      191,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
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
                        "column": 38,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    },
                    "range": [
                      197,
                      221
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
                                "column": 29,
                                "line": 13
                              },
                              "start": {
                                "column": 21,
                                "line": 13
                              }
                            },
                            "range": [
                              204,
                              212
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                206,
                                212
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 23,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            200,
                            212
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 13
                          },
                          "start": {
                            "column": 31,
                            "line": 13
                          }
                        },
                        "range": [
                          214,
                          221
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            217,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 13
                            },
                            "start": {
                              "column": 34,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        199,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    191,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 9
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "connectExport",
              "optional": false,
              "range": [
                113,
                126
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              103,
              229
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 9
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
                        "column": 5,
                        "line": 25
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    },
                    "range": [
                      245,
                      473
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
                                "column": 25,
                                "line": 19
                              },
                              "start": {
                                "column": 10,
                                "line": 19
                              }
                            },
                            "range": [
                              260,
                              275
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectExport",
                                "optional": false,
                                "range": [
                                  262,
                                  275
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                262,
                                275
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 19
                                },
                                "start": {
                                  "column": 12,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            258,
                            276
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 19
                            },
                            "start": {
                              "column": 8,
                              "line": 19
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
                              286,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 21
                              },
                              "start": {
                                "column": 8,
                                "line": 21
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
                                "column": 28,
                                "line": 21
                              },
                              "start": {
                                "column": 13,
                                "line": 21
                              }
                            },
                            "range": [
                              291,
                              306
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "range": [
                                  293,
                                  306
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                293,
                                306
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 21
                                },
                                "start": {
                                  "column": 15,
                                  "line": 21
                                }
                              }
                            }
                          },
                          "range": [
                            286,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 21
                            },
                            "start": {
                              "column": 8,
                              "line": 21
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
                              331,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 23
                              },
                              "start": {
                                "column": 8,
                                "line": 23
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
                                "column": 30,
                                "line": 23
                              },
                              "start": {
                                "column": 15,
                                "line": 23
                              }
                            },
                            "range": [
                              338,
                              353
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "range": [
                                  340,
                                  353
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                340,
                                353
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 23
                                },
                                "start": {
                                  "column": 17,
                                  "line": 23
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            331,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 23
                            },
                            "start": {
                              "column": 8,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "range": [
                        247,
                        473
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 25
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    239,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": null,
                "range": [
                  239,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              235,
              474
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          25,
          476
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "'connect'",
        "value": "connect",
        "range": [
          15,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        476
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
