__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1263
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              19,
              73
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          69,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 2
                          },
                          "start": {
                            "column": 51,
                            "line": 2
                          }
                        }
                      },
                      "operator": "-",
                      "prefix": true,
                      "range": [
                        68,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 2
                        },
                        "start": {
                          "column": 50,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      61,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 2
                      },
                      "start": {
                        "column": 43,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  59,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "someExportedOuterFunc",
                "optional": false,
                "range": [
                  35,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "params": [],
              "range": [
                26,
                73
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 55,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              76,
              173
            ],
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      108,
                      170
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "\"foo\"",
                              "value": "foo",
                              "range": [
                                162,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 5
                                },
                                "start": {
                                  "column": 56,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              155,
                              168
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 5
                              },
                              "start": {
                                "column": 49,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          153,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 5
                          },
                          "start": {
                            "column": 47,
                            "line": 5
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someExportedOuterInnerFunc",
                        "optional": false,
                        "range": [
                          124,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 5
                          },
                          "start": {
                            "column": 18,
                            "line": 5
                          }
                        }
                      },
                      "params": [],
                      "range": [
                        115,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 5
                        },
                        "start": {
                          "column": 9,
                          "line": 5
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 5
                      },
                      "start": {
                        "column": 2,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  104,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 6
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  90,
                  103
                ],
                "decorators": [],
                "name": "OuterInnerMod",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "kind": "module",
              "range": [
                83,
                173
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 6
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          }
        ],
        "range": [
          16,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          15
        ],
        "decorators": [],
        "name": "OuterMod",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OuterInnerAlias",
        "optional": false,
        "range": [
          184,
          199
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "OuterMod",
          "optional": false,
          "range": [
            202,
            210
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 9
            },
            "start": {
              "column": 25,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "OuterInnerMod",
          "optional": false,
          "range": [
            211,
            224
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 9
            },
            "start": {
              "column": 34,
              "line": 9
            }
          }
        },
        "range": [
          202,
          224
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 9
          }
        }
      },
      "range": [
        177,
        225
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              240,
              324
            ],
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      267,
                      321
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  317,
                                  318
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 14
                                  }
                                }
                              },
                              "operator": "-",
                              "prefix": true,
                              "range": [
                                316,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 14
                                },
                                "start": {
                                  "column": 51,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              309,
                              319
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 14
                              },
                              "start": {
                                "column": 44,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          307,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 14
                          },
                          "start": {
                            "column": 42,
                            "line": 14
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someExportedInnerFunc",
                        "optional": false,
                        "range": [
                          283,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        }
                      },
                      "params": [],
                      "range": [
                        274,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  263,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 15
                  },
                  "start": {
                    "column": 24,
                    "line": 13
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  254,
                  262
                ],
                "decorators": [],
                "name": "InnerMod",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "kind": "module",
              "range": [
                247,
                324
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              327,
              360
            ],
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "body": {
                "type": "TSEnumBody",
                "range": [
                  341,
                  360
                ],
                "members": [
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        345,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 18
                        },
                        "start": {
                          "column": 2,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      345,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        350,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 19
                        },
                        "start": {
                          "column": 2,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      350,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        355,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 20
                        },
                        "start": {
                          "column": 2,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      355,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  339,
                  340
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
              "range": [
                334,
                360
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 21
              },
              "start": {
                "column": 1,
                "line": 17
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              363,
              380
            ],
            "attributes": [],
            "declaration": {
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
                      374,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      378,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 16,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    374,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                370,
                380
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 1,
                "line": 23
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              382,
              414
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exported_var",
                    "optional": false,
                    "range": [
                      401,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    401,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 20,
                      "line": 24
                    }
                  }
                }
              ],
              "declare": true,
              "kind": "var",
              "range": [
                389,
                414
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 1,
                "line": 24
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
                  "range": [
                    421,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 26
                    },
                    "start": {
                      "column": 5,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      425,
                      426
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      429,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    425,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "range": [
                  421,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 5,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              417,
              431
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 26
              },
              "start": {
                "column": 1,
                "line": 26
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              435,
              481
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  454,
                  481
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "range": [
                        458,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 30
                        },
                        "start": {
                          "column": 2,
                          "line": 30
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
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 14,
                          "line": 30
                        }
                      },
                      "range": [
                        470,
                        477
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          471,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 30
                          },
                          "start": {
                            "column": 15,
                            "line": 30
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      458,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 30
                      },
                      "start": {
                        "column": 2,
                        "line": 30
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 31
                  },
                  "start": {
                    "column": 20,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  452,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 29
                  }
                }
              },
              "range": [
                442,
                481
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 31
              },
              "start": {
                "column": 1,
                "line": 29
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                493,
                508
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      501,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      505,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    494,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 33
                    },
                    "start": {
                      "column": 11,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 10,
                  "line": 33
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                491,
                492
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              485,
              508
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              512,
              983
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  540,
                  983
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterMethod",
                      "optional": false,
                      "range": [
                        551,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 36
                        },
                        "start": {
                          "column": 9,
                          "line": 36
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        583,
                        640
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OuterInnerAlias",
                                  "optional": false,
                                  "range": [
                                    594,
                                    609
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 67,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 36
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterInnerFunc",
                                  "optional": false,
                                  "range": [
                                    610,
                                    636
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 94,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 36
                                    }
                                  }
                                },
                                "range": [
                                  594,
                                  636
                                ],
                                "loc": {
                                  "end": {
                                    "column": 94,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 36
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                594,
                                638
                              ],
                              "loc": {
                                "end": {
                                  "column": 96,
                                  "line": 36
                                },
                                "start": {
                                  "column": 52,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              587,
                              639
                            ],
                            "loc": {
                              "end": {
                                "column": 97,
                                "line": 36
                              },
                              "start": {
                                "column": 45,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "range": [
                          586,
                          640
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 36
                          },
                          "start": {
                            "column": 44,
                            "line": 36
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 36
                        },
                        "start": {
                          "column": 41,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      544,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 36
                      },
                      "start": {
                        "column": 2,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnInnerMethod",
                      "optional": false,
                      "range": [
                        650,
                        682
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 37
                        },
                        "start": {
                          "column": 9,
                          "line": 37
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        682,
                        727
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "InnerMod",
                                  "optional": false,
                                  "range": [
                                    693,
                                    701
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 37
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedInnerFunc",
                                  "optional": false,
                                  "range": [
                                    702,
                                    723
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 82,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 37
                                    }
                                  }
                                },
                                "range": [
                                  693,
                                  723
                                ],
                                "loc": {
                                  "end": {
                                    "column": 82,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 37
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                693,
                                725
                              ],
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 37
                                },
                                "start": {
                                  "column": 52,
                                  "line": 37
                                }
                              }
                            },
                            "range": [
                              686,
                              726
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 37
                              },
                              "start": {
                                "column": 45,
                                "line": 37
                              }
                            }
                          }
                        ],
                        "range": [
                          685,
                          727
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 37
                          },
                          "start": {
                            "column": 44,
                            "line": 37
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 37
                        },
                        "start": {
                          "column": 41,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      643,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 37
                      },
                      "start": {
                        "column": 2,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethodThatCallsAnOuterInnerMethod",
                      "optional": false,
                      "range": [
                        737,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 38
                        },
                        "start": {
                          "column": 9,
                          "line": 38
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        774,
                        819
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "OuterMod",
                                  "optional": false,
                                  "range": [
                                    785,
                                    793
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 65,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 57,
                                      "line": 38
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "someExportedOuterFunc",
                                  "optional": false,
                                  "range": [
                                    794,
                                    815
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 87,
                                      "line": 38
                                    },
                                    "start": {
                                      "column": 66,
                                      "line": 38
                                    }
                                  }
                                },
                                "range": [
                                  785,
                                  815
                                ],
                                "loc": {
                                  "end": {
                                    "column": 87,
                                    "line": 38
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 38
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                785,
                                817
                              ],
                              "loc": {
                                "end": {
                                  "column": 89,
                                  "line": 38
                                },
                                "start": {
                                  "column": 57,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              778,
                              818
                            ],
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 38
                              },
                              "start": {
                                "column": 50,
                                "line": 38
                              }
                            }
                          }
                        ],
                        "range": [
                          777,
                          819
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 38
                          },
                          "start": {
                            "column": 49,
                            "line": 38
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 38
                        },
                        "start": {
                          "column": 46,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      730,
                      819
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 38
                      },
                      "start": {
                        "column": 2,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someMethod",
                      "optional": false,
                      "range": [
                        829,
                        839
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        839,
                        855
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                851,
                                852
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 39
                                },
                                "start": {
                                  "column": 31,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              844,
                              853
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 39
                              },
                              "start": {
                                "column": 24,
                                "line": 39
                              }
                            }
                          }
                        ],
                        "range": [
                          842,
                          855
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 39
                          },
                          "start": {
                            "column": 22,
                            "line": 39
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 39
                        },
                        "start": {
                          "column": 19,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      822,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 2,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "public",
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
                        865,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 40
                        },
                        "start": {
                          "column": 9,
                          "line": 40
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        876,
                        877
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 40
                        },
                        "start": {
                          "column": 20,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      858,
                      878
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 40
                      },
                      "start": {
                        "column": 2,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        882,
                        893
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 42
                        },
                        "start": {
                          "column": 2,
                          "line": 42
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        893,
                        980
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
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
                                    "type": "Literal",
                                    "raw": "2",
                                    "value": 2,
                                    "range": [
                                      938,
                                      939
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "range": [
                                    931,
                                    940
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 43
                                    }
                                  }
                                }
                              ],
                              "range": [
                                929,
                                942
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 43
                                },
                                "start": {
                                  "column": 31,
                                  "line": 43
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "someInnerFunc",
                              "optional": false,
                              "range": [
                                913,
                                926
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 43
                                },
                                "start": {
                                  "column": 15,
                                  "line": 43
                                }
                              }
                            },
                            "params": [],
                            "range": [
                              904,
                              942
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 43
                              },
                              "start": {
                                "column": 6,
                                "line": 43
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
                                  "name": "someInnerVar",
                                  "optional": false,
                                  "range": [
                                    959,
                                    971
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 44
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    974,
                                    975
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 44
                                    }
                                  }
                                },
                                "range": [
                                  959,
                                  975
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 44
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              955,
                              976
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 44
                              },
                              "start": {
                                "column": 12,
                                "line": 44
                              }
                            }
                          }
                        ],
                        "range": [
                          896,
                          980
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 45
                          },
                          "start": {
                            "column": 16,
                            "line": 42
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 45
                        },
                        "start": {
                          "column": 13,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      882,
                      980
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 45
                      },
                      "start": {
                        "column": 2,
                        "line": 42
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 46
                  },
                  "start": {
                    "column": 30,
                    "line": 35
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  525,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      538,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 35
                      },
                      "start": {
                        "column": 28,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    538,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 35
                    },
                    "start": {
                      "column": 28,
                      "line": 35
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                519,
                983
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 35
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
                  "name": "someModuleVar",
                  "optional": false,
                  "range": [
                    990,
                    1003
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 48
                    },
                    "start": {
                      "column": 5,
                      "line": 48
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    1006,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 48
                    },
                    "start": {
                      "column": 21,
                      "line": 48
                    }
                  }
                },
                "range": [
                  990,
                  1007
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 48
                  },
                  "start": {
                    "column": 5,
                    "line": 48
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              986,
              1008
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 48
              },
              "start": {
                "column": 1,
                "line": 48
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      1050,
                      1051
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 50
                      },
                      "start": {
                        "column": 40,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1043,
                    1052
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 50
                    },
                    "start": {
                      "column": 33,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                1041,
                1053
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 50
                },
                "start": {
                  "column": 31,
                  "line": 50
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "someModuleFunction",
              "optional": false,
              "range": [
                1020,
                1038
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 50
                },
                "start": {
                  "column": 10,
                  "line": 50
                }
              }
            },
            "params": [],
            "range": [
              1011,
              1053
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 50
              },
              "start": {
                "column": 1,
                "line": 50
              }
            }
          }
        ],
        "range": [
          236,
          1055
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          234,
          235
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        227,
        1055
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1069,
              1086
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      1080,
                      1081
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 54
                      },
                      "start": {
                        "column": 12,
                        "line": 54
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1084,
                      1085
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 54
                      },
                      "start": {
                        "column": 16,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1080,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 54
                    },
                    "start": {
                      "column": 12,
                      "line": 54
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1076,
                1086
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 18,
                "line": 54
              },
              "start": {
                "column": 1,
                "line": 54
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1088,
              1111
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meb",
                    "optional": false,
                    "range": [
                      1099,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 55
                      },
                      "start": {
                        "column": 12,
                        "line": 55
                      }
                    }
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          1105,
                          1106
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 55
                          },
                          "start": {
                            "column": 18,
                            "line": 55
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "range": [
                          1107,
                          1108
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 55
                          },
                          "start": {
                            "column": 20,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1105,
                        1108
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 55
                        },
                        "start": {
                          "column": 18,
                          "line": 55
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        1109,
                        1110
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 55
                        },
                        "start": {
                          "column": 22,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1105,
                      1110
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 55
                      },
                      "start": {
                        "column": 18,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1099,
                    1110
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                1095,
                1111
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 55
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
                "line": 55
              },
              "start": {
                "column": 1,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1066,
          1113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 9,
            "line": 53
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1064,
          1065
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 53
          },
          "start": {
            "column": 7,
            "line": 53
          }
        }
      },
      "kind": "module",
      "range": [
        1057,
        1113
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 53
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
            "name": "cprime",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 58
                },
                "start": {
                  "column": 11,
                  "line": 58
                }
              },
              "range": [
                1126,
                1131
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      1128,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 58
                      },
                      "start": {
                        "column": 13,
                        "line": 58
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      1130,
                      1131
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 58
                      },
                      "start": {
                        "column": 15,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1128,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 58
                    },
                    "start": {
                      "column": 13,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1128,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 58
                  },
                  "start": {
                    "column": 13,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              1119,
              1131
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1139,
                1143
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 58
                },
                "start": {
                  "column": 24,
                  "line": 58
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "range": [
                    1135,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 58
                    },
                    "start": {
                      "column": 20,
                      "line": 58
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    1137,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 58
                    },
                    "start": {
                      "column": 22,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1135,
                  1138
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 58
                  },
                  "start": {
                    "column": 20,
                    "line": 58
                  }
                }
              },
              "range": [
                1135,
                1138
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 58
                },
                "start": {
                  "column": 20,
                  "line": 58
                }
              }
            },
            "range": [
              1134,
              1143
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 58
              },
              "start": {
                "column": 19,
                "line": 58
              }
            }
          },
          "range": [
            1119,
            1143
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 58
            },
            "start": {
              "column": 4,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1115,
        1144
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "c",
            "optional": false,
            "range": [
              1150,
              1151
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  1158,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 60
                  },
                  "start": {
                    "column": 12,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  1160,
                  1161
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 60
                  },
                  "start": {
                    "column": 14,
                    "line": 60
                  }
                }
              },
              "range": [
                1158,
                1161
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 60
                },
                "start": {
                  "column": 12,
                  "line": 60
                }
              }
            },
            "range": [
              1154,
              1163
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 60
              },
              "start": {
                "column": 8,
                "line": 60
              }
            }
          },
          "range": [
            1150,
            1163
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 60
            },
            "start": {
              "column": 4,
              "line": 60
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1146,
        1164
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "z",
            "optional": false,
            "range": [
              1169,
              1170
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                1173,
                1174
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 61
                },
                "start": {
                  "column": 8,
                  "line": 61
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
                1175,
                1176
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 61
                },
                "start": {
                  "column": 10,
                  "line": 61
                }
              }
            },
            "range": [
              1173,
              1176
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 61
              },
              "start": {
                "column": 8,
                "line": 61
              }
            }
          },
          "range": [
            1169,
            1176
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1165,
        1177
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "alpha",
            "optional": false,
            "range": [
              1182,
              1187
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  1190,
                  1191
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 62
                  },
                  "start": {
                    "column": 12,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  1192,
                  1193
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 62
                  },
                  "start": {
                    "column": 14,
                    "line": 62
                  }
                }
              },
              "range": [
                1190,
                1193
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 62
                },
                "start": {
                  "column": 12,
                  "line": 62
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1194,
                1195
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 62
                },
                "start": {
                  "column": 16,
                  "line": 62
                }
              }
            },
            "range": [
              1190,
              1195
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 62
              },
              "start": {
                "column": 12,
                "line": 62
              }
            }
          },
          "range": [
            1182,
            1195
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1178,
        1196
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "omega",
            "optional": false,
            "range": [
              1201,
              1206
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                1209,
                1210
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 63
                },
                "start": {
                  "column": 12,
                  "line": 63
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exported_var",
              "optional": false,
              "range": [
                1211,
                1223
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 63
                },
                "start": {
                  "column": 14,
                  "line": 63
                }
              }
            },
            "range": [
              1209,
              1223
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 63
              },
              "start": {
                "column": 12,
                "line": 63
              }
            }
          },
          "range": [
            1201,
            1223
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1197,
        1224
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              1225,
              1226
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 64
              },
              "start": {
                "column": 0,
                "line": 64
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someMethodThatCallsAnOuterMethod",
            "optional": false,
            "range": [
              1227,
              1259
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 64
              },
              "start": {
                "column": 2,
                "line": 64
              }
            }
          },
          "range": [
            1225,
            1259
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 64
            },
            "start": {
              "column": 0,
              "line": 64
            }
          }
        },
        "optional": false,
        "range": [
          1225,
          1261
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 64
          },
          "start": {
            "column": 0,
            "line": 64
          }
        }
      },
      "range": [
        1225,
        1262
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 65
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
