__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    639
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          22
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "range": [
          6,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        24,
        52
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            49,
            52
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "range": [
            37,
            48
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          31,
          52
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        54,
        638
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            108,
            638
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod1",
                "optional": false,
                "range": [
                  129,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
                    "line": 8
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  151,
                  215
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    178,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 68,
                      "line": 8
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 8
                    },
                    "start": {
                      "column": 41,
                      "line": 8
                    }
                  },
                  "range": [
                    151,
                    175
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
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            162,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 8
                            },
                            "start": {
                              "column": 52,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          162,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 8
                          },
                          "start": {
                            "column": 52,
                            "line": 8
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
                          152,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 8
                          },
                          "start": {
                            "column": 42,
                            "line": 8
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        152,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 8
                        },
                        "start": {
                          "column": 42,
                          "line": 8
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 41,
                    "line": 8
                  }
                }
              },
              "range": [
                114,
                215
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod1",
                "optional": false,
                "range": [
                  228,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
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
                  244,
                  308
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    271,
                    308
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 11
                    },
                    "start": {
                      "column": 55,
                      "line": 10
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 28,
                      "line": 10
                    }
                  },
                  "range": [
                    244,
                    268
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
                          "name": "privateClass",
                          "optional": false,
                          "range": [
                            255,
                            267
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 10
                            },
                            "start": {
                              "column": 39,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          255,
                          267
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
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
                        "name": "T",
                        "optional": false,
                        "range": [
                          245,
                          246
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
                        245,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 10
                  }
                }
              },
              "range": [
                220,
                308
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod2",
                "optional": false,
                "range": [
                  328,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 12
                  },
                  "start": {
                    "column": 19,
                    "line": 12
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  350,
                  413
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    376,
                    413
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 67,
                      "line": 12
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  },
                  "range": [
                    350,
                    373
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            361,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 12
                            },
                            "start": {
                              "column": 52,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          361,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 12
                          },
                          "start": {
                            "column": 52,
                            "line": 12
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
                          351,
                          352
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        351,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 12
                        },
                        "start": {
                          "column": 42,
                          "line": 12
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 41,
                    "line": 12
                  }
                }
              },
              "range": [
                313,
                413
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod2",
                "optional": false,
                "range": [
                  426,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
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
                  442,
                  505
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    468,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 54,
                      "line": 14
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 14
                    },
                    "start": {
                      "column": 28,
                      "line": 14
                    }
                  },
                  "range": [
                    442,
                    465
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            453,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 14
                            },
                            "start": {
                              "column": 39,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          453,
                          464
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 14
                          },
                          "start": {
                            "column": 39,
                            "line": 14
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
                          443,
                          444
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 14
                          },
                          "start": {
                            "column": 29,
                            "line": 14
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        443,
                        464
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 14
                        },
                        "start": {
                          "column": 29,
                          "line": 14
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              },
              "range": [
                418,
                505
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "range": [
                  524,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  544,
                  577
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    570,
                    577
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 64,
                      "line": 16
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 16
                    },
                    "start": {
                      "column": 38,
                      "line": 16
                    }
                  },
                  "range": [
                    544,
                    567
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            555,
                            566
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 16
                            },
                            "start": {
                              "column": 49,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          555,
                          566
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 16
                          },
                          "start": {
                            "column": 49,
                            "line": 16
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
                          545,
                          546
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 16
                          },
                          "start": {
                            "column": 39,
                            "line": 16
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        545,
                        566
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 16
                        },
                        "start": {
                          "column": 39,
                          "line": 16
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 38,
                    "line": 16
                  }
                }
              },
              "range": [
                510,
                577
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                "name": "myPublicMethod",
                "optional": false,
                "range": [
                  589,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
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
                  603,
                  636
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    629,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 51,
                      "line": 18
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 18
                    },
                    "start": {
                      "column": 25,
                      "line": 18
                    }
                  },
                  "range": [
                    603,
                    626
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
                          "name": "publicClass",
                          "optional": false,
                          "range": [
                            614,
                            625
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 18
                            },
                            "start": {
                              "column": 36,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          614,
                          625
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 18
                          },
                          "start": {
                            "column": 36,
                            "line": 18
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
                          604,
                          605
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
                      "out": false,
                      "range": [
                        604,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 18
                        },
                        "start": {
                          "column": 26,
                          "line": 18
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 18
                  }
                }
              },
              "range": [
                582,
                636
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 54,
              "line": 7
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "range": [
            67,
            107
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          61,
          638
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
