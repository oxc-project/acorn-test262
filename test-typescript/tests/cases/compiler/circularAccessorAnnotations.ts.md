__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    347
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                51
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        28,
                        31
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 2
                        },
                        "start": {
                          "column": 8,
                          "line": 2
                        }
                      }
                    },
                    "kind": "get",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 2
                        },
                        "start": {
                          "column": 13,
                          "line": 2
                        }
                      },
                      "range": [
                        33,
                        48
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "range": [
                              42,
                              44
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 2
                              },
                              "start": {
                                "column": 22,
                                "line": 2
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              45,
                              48
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 2
                              },
                              "start": {
                                "column": 25,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            42,
                            48
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 2
                            },
                            "start": {
                              "column": 22,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          35,
                          48
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 2
                          },
                          "start": {
                            "column": 15,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      24,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
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
                  18,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              51
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            51
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        51
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              },
              "range": [
                69,
                109
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        81,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "kind": "set",
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
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          },
                          "range": [
                            90,
                            105
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c2",
                                "optional": false,
                                "range": [
                                  99,
                                  101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 6
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  102,
                                  105
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                99,
                                105
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 26,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              92,
                              105
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
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
                          85,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      77,
                      107
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  71,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              67,
              109
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            67,
            109
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        53,
        109
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              },
              "range": [
                127,
                190
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        139,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "kind": "get",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      },
                      "range": [
                        144,
                        152
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          146,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      135,
                      153
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
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        162,
                        165
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
                    "kind": "set",
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
                              "column": 32,
                              "line": 11
                            },
                            "start": {
                              "column": 17,
                              "line": 11
                            }
                          },
                          "range": [
                            171,
                            186
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c3",
                                "optional": false,
                                "range": [
                                  180,
                                  182
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 11
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  183,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                180,
                                186
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 11
                                },
                                "start": {
                                  "column": 26,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              173,
                              186
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
                          166,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      158,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  129,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              125,
              190
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            125,
            190
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        111,
        190
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          197,
          199
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
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
              "name": "foo",
              "optional": false,
              "range": [
                212,
                215
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              },
              "range": [
                217,
                228
              ],
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      222,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    222,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 18,
                      "line": 15
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "range": [
                      219,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    219,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                },
                "range": [
                  219,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              }
            },
            "static": false,
            "range": [
              208,
              229
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          202,
          231
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        192,
        231
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          238,
          240
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
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
              "name": "foo",
              "optional": false,
              "range": [
                253,
                256
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "kind": "set",
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
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  },
                  "range": [
                    262,
                    273
                  ],
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          267,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 19
                          },
                          "start": {
                            "column": 22,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        267,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "range": [
                          264,
                          266
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 19
                          },
                          "start": {
                            "column": 19,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        264,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      264,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 19,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  257,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 19
                  },
                  "start": {
                    "column": 12,
                    "line": 19
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              249,
              275
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          243,
          277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        233,
        277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          284,
          286
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
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
              "name": "foo",
              "optional": false,
              "range": [
                299,
                302
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 23
                }
              },
              "range": [
                304,
                312
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  306,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 23
                  },
                  "start": {
                    "column": 15,
                    "line": 23
                  }
                }
              }
            },
            "static": false,
            "range": [
              295,
              313
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                322,
                325
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "kind": "set",
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
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 17,
                      "line": 24
                    }
                  },
                  "range": [
                    331,
                    342
                  ],
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"foo\"",
                        "value": "foo",
                        "range": [
                          336,
                          341
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 24
                          },
                          "start": {
                            "column": 22,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        336,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 22,
                          "line": 24
                        }
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T3",
                        "optional": false,
                        "range": [
                          333,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 24
                          },
                          "start": {
                            "column": 19,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        333,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 19,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      333,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  326,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 24
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              318,
              344
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          289,
          346
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 10,
            "line": 22
          }
        }
      },
      "range": [
        279,
        346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
