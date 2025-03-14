__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    362
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
                55,
                94
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
                        66,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 3
                        },
                        "start": {
                          "column": 9,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "range": [
                        71,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "range": [
                        76,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 3
                        },
                        "start": {
                          "column": 19,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    },
                    "range": [
                      81,
                      87
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        83,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    65,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 2
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
                41,
                54
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              31,
              94
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                124,
                223
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
                      134,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    },
                    "range": [
                      137,
                      176
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
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            },
                            "range": [
                              143,
                              158
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "range": [
                                  145,
                                  158
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                145,
                                158
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            140,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 7
                            },
                            "start": {
                              "column": 14,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 7
                          },
                          "start": {
                            "column": 34,
                            "line": 7
                          }
                        },
                        "range": [
                          160,
                          176
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "range": [
                              163,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 7
                              },
                              "start": {
                                "column": 37,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            163,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 7
                            },
                            "start": {
                              "column": 37,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        139,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    134,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
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
                      186,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    },
                    "range": [
                      192,
                      216
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
                                "line": 8
                              },
                              "start": {
                                "column": 21,
                                "line": 8
                              }
                            },
                            "range": [
                              199,
                              207
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                201,
                                207
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 23,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            195,
                            207
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 8
                          },
                          "start": {
                            "column": 31,
                            "line": 8
                          }
                        },
                        "range": [
                          209,
                          216
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            212,
                            216
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 34,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        194,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    186,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 28,
                  "line": 6
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
                110,
                123
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "range": [
              100,
              223
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
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
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    },
                    "range": [
                      239,
                      337
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
                                "line": 12
                              },
                              "start": {
                                "column": 10,
                                "line": 12
                              }
                            },
                            "range": [
                              253,
                              268
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectExport",
                                "optional": false,
                                "range": [
                                  255,
                                  268
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                255,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 12
                                },
                                "start": {
                                  "column": 12,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            251,
                            269
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
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
                            "name": "test1",
                            "optional": false,
                            "range": [
                              278,
                              283
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
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
                                "column": 28,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            },
                            "range": [
                              283,
                              298
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "range": [
                                  285,
                                  298
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                285,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 13
                                },
                                "start": {
                                  "column": 15,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            278,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
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
                            "name": "test2",
                            "optional": false,
                            "range": [
                              308,
                              313
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 14
                              },
                              "start": {
                                "column": 8,
                                "line": 14
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
                                "line": 14
                              },
                              "start": {
                                "column": 15,
                                "line": 14
                              }
                            },
                            "range": [
                              315,
                              330
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "connectModule",
                                "optional": false,
                                "range": [
                                  317,
                                  330
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                317,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 14
                                },
                                "start": {
                                  "column": 17,
                                  "line": 14
                                }
                              }
                            }
                          },
                          "static": false,
                          "range": [
                            308,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        241,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    233,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": null,
                "range": [
                  233,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              229,
              338
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 11
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
                352,
                358
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "range": [
              343,
              359
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          25,
          361
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
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
        361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
