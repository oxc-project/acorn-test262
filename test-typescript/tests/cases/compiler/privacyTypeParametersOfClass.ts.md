__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    940
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
        124,
        262
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            198,
            262
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  204,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
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
                  212,
                  260
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          250,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        243,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    224,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 9
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      },
                      "range": [
                        216,
                        219
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            218,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 18,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          218,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      213,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  },
                  "range": [
                    220,
                    223
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        222,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 22,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      222,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 22,
                        "line": 9
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              },
              "range": [
                204,
                260
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 74,
              "line": 8
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateTypeParameters",
          "optional": false,
          "range": [
            137,
            173
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 73,
              "line": 8
            },
            "start": {
              "column": 49,
              "line": 8
            }
          },
          "range": [
            173,
            197
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
                    184,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 8
                    },
                    "start": {
                      "column": 60,
                      "line": 8
                    }
                  }
                },
                "range": [
                  184,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 8
                  },
                  "start": {
                    "column": 60,
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
                  174,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 50,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                174,
                196
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 8
                },
                "start": {
                  "column": 50,
                  "line": 8
                }
              }
            }
          ]
        },
        "range": [
          131,
          262
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        264,
        403
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            336,
            403
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  342,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
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
                  350,
                  401
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          391,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        384,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    362,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 15
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      },
                      "range": [
                        354,
                        357
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            356,
                            357
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 18,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          356,
                          357
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      351,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  },
                  "range": [
                    358,
                    361
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        360,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 22,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      360,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              "range": [
                342,
                401
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 72,
              "line": 14
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParameters",
          "optional": false,
          "range": [
            277,
            312
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 14
            },
            "start": {
              "column": 13,
              "line": 14
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 71,
              "line": 14
            },
            "start": {
              "column": 48,
              "line": 14
            }
          },
          "range": [
            312,
            335
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
                    323,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 14
                    },
                    "start": {
                      "column": 59,
                      "line": 14
                    }
                  }
                },
                "range": [
                  323,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 14
                  },
                  "start": {
                    "column": 59,
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
                  313,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 14
                  },
                  "start": {
                    "column": 49,
                    "line": 14
                  }
                }
              },
              "out": false,
              "range": [
                313,
                334
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 14
                },
                "start": {
                  "column": 49,
                  "line": 14
                }
              }
            }
          ]
        },
        "range": [
          271,
          403
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          473,
          540
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                479,
                487
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                487,
                538
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        528,
                        531
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 15,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      521,
                      532
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  499,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    },
                    "range": [
                      491,
                      494
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          493,
                          494
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 21
                          },
                          "start": {
                            "column": 18,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        493,
                        494
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 21
                        },
                        "start": {
                          "column": 18,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    488,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 20,
                    "line": 21
                  }
                },
                "range": [
                  495,
                  498
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      497,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 21
                      },
                      "start": {
                        "column": 22,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    497,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 22,
                      "line": 21
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "range": [
              479,
              538
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 68,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateTypeParameters",
        "optional": false,
        "range": [
          411,
          448
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 20
          },
          "start": {
            "column": 43,
            "line": 20
          }
        },
        "range": [
          448,
          472
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
                  459,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 20
                  },
                  "start": {
                    "column": 54,
                    "line": 20
                  }
                }
              },
              "range": [
                459,
                471
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 20
                },
                "start": {
                  "column": 54,
                  "line": 20
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
                449,
                450
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 20
                },
                "start": {
                  "column": 44,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              449,
              471
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 20
              },
              "start": {
                "column": 44,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        405,
        540
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          608,
          675
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                614,
                622
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                622,
                673
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        663,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 28
                        },
                        "start": {
                          "column": 15,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      656,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  634,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 24,
                    "line": 27
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 27
                      },
                      "start": {
                        "column": 16,
                        "line": 27
                      }
                    },
                    "range": [
                      626,
                      629
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          628,
                          629
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 27
                          },
                          "start": {
                            "column": 18,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        628,
                        629
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 27
                        },
                        "start": {
                          "column": 18,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    623,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 27
                    },
                    "start": {
                      "column": 13,
                      "line": 27
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 27
                  },
                  "start": {
                    "column": 20,
                    "line": 27
                  }
                },
                "range": [
                  630,
                  633
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      632,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 27
                      },
                      "start": {
                        "column": 22,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    632,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 27
                    },
                    "start": {
                      "column": 22,
                      "line": 27
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "range": [
              614,
              673
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 66,
            "line": 26
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParameters",
        "optional": false,
        "range": [
          548,
          584
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 26
          },
          "start": {
            "column": 42,
            "line": 26
          }
        },
        "range": [
          584,
          607
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
                  595,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 26
                  },
                  "start": {
                    "column": 53,
                    "line": 26
                  }
                }
              },
              "range": [
                595,
                606
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 26
                },
                "start": {
                  "column": 53,
                  "line": 26
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
                585,
                586
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 26
                },
                "start": {
                  "column": 43,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              585,
              606
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 26
              },
              "start": {
                "column": 43,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        542,
        675
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        677,
        810
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            743,
            810
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  749,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
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
                  757,
                  808
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          798,
                          801
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        791,
                        802
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "range": [
                    769,
                    808
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 35
                    },
                    "start": {
                      "column": 24,
                      "line": 33
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      },
                      "range": [
                        761,
                        764
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            763,
                            764
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
                        "range": [
                          763,
                          764
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
                      }
                    },
                    "range": [
                      758,
                      764
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 20,
                      "line": 33
                    }
                  },
                  "range": [
                    765,
                    768
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        767,
                        768
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
                      767,
                      768
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
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 12,
                    "line": 33
                  }
                }
              },
              "range": [
                749,
                808
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 66,
              "line": 32
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "range": [
            690,
            739
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 32
            },
            "start": {
              "column": 13,
              "line": 32
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 65,
              "line": 32
            },
            "start": {
              "column": 62,
              "line": 32
            }
          },
          "range": [
            739,
            742
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
                  740,
                  741
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 32
                  },
                  "start": {
                    "column": 63,
                    "line": 32
                  }
                }
              },
              "out": false,
              "range": [
                740,
                741
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 32
                },
                "start": {
                  "column": 63,
                  "line": 32
                }
              }
            }
          ]
        },
        "range": [
          684,
          810
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          872,
          939
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                878,
                886
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 39
                },
                "start": {
                  "column": 4,
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
                886,
                937
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        927,
                        930
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 40
                        },
                        "start": {
                          "column": 15,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      920,
                      931
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  898,
                  937
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 24,
                    "line": 39
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 16,
                        "line": 39
                      }
                    },
                    "range": [
                      890,
                      893
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          892,
                          893
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 39
                          },
                          "start": {
                            "column": 18,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        892,
                        893
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 39
                        },
                        "start": {
                          "column": 18,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    887,
                    893
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 39
                  },
                  "start": {
                    "column": 20,
                    "line": 39
                  }
                },
                "range": [
                  894,
                  897
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      896,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 39
                      },
                      "start": {
                        "column": 22,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    896,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 39
                    },
                    "start": {
                      "column": 22,
                      "line": 39
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 12,
                  "line": 39
                }
              }
            },
            "range": [
              878,
              937
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 60,
            "line": 38
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "range": [
          818,
          868
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 38
          },
          "start": {
            "column": 6,
            "line": 38
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 38
          },
          "start": {
            "column": 56,
            "line": 38
          }
        },
        "range": [
          868,
          871
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
                869,
                870
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 38
                },
                "start": {
                  "column": 57,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              869,
              870
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 38
              },
              "start": {
                "column": 57,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        812,
        939
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
