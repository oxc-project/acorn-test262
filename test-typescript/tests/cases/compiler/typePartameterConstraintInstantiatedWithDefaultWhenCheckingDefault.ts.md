__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    20,
    588
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          45,
          70
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                51,
                54
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
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
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
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
                      "name": "V",
                      "optional": false,
                      "range": [
                        62,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      62,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  55,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              },
              "range": [
                64,
                67
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    66,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "range": [
                  66,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              51,
              68
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 25,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settable",
        "optional": false,
        "range": [
          30,
          38
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        },
        "range": [
          38,
          44
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
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
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
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
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
              "name": "V",
              "optional": false,
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              42,
              43
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        20,
        70
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          139,
          310
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "range": [
                154,
                158
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 8
                }
              },
              "range": [
                158,
                161
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                },
                "range": [
                  160,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              145,
              162
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                167,
                178
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                178,
                223
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            199,
                            203
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "range": [
                            204,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 10
                            },
                            "start": {
                              "column": 13,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          199,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          211,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        199,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      199,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  189,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 26,
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    },
                    "range": [
                      184,
                      187
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          186,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 23,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        186,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 9
                        },
                        "start": {
                          "column": 23,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    179,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "range": [
              167,
              223
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
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "range": [
                235,
                238
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
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
                238,
                308
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            295,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 13
                            },
                            "start": {
                              "column": 31,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Identity",
                        "optional": false,
                        "range": [
                          283,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 13
                          },
                          "start": {
                            "column": 19,
                            "line": 13
                          }
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          291,
                          294
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "range": [
                                292,
                                293
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 28,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              292,
                              293
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        279,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      272,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  262,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 38,
                    "line": 12
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    },
                    "range": [
                      244,
                      247
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          246,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 12
                          },
                          "start": {
                            "column": 22,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        246,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 22,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    239,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 12
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                },
                "range": [
                  248,
                  261
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      258,
                      261
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            259,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 12
                            },
                            "start": {
                              "column": 35,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          259,
                          260
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 12
                          },
                          "start": {
                            "column": 35,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 34,
                        "line": 12
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Identity",
                    "optional": false,
                    "range": [
                      250,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 12
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    250,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 12
                    },
                    "start": {
                      "column": 26,
                      "line": 12
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "range": [
              228,
              308
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
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
        "name": "Identity",
        "optional": false,
        "range": [
          91,
          99
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Settable",
            "optional": false,
            "range": [
              114,
              122
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              122,
              138
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    131,
                    134
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          132,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 7
                          },
                          "start": {
                            "column": 47,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        132,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 7
                        },
                        "start": {
                          "column": 47,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 7
                    },
                    "start": {
                      "column": 46,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Identity",
                  "optional": false,
                  "range": [
                    123,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 7
                    },
                    "start": {
                      "column": 38,
                      "line": 7
                    }
                  }
                },
                "range": [
                  123,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 7
                    },
                    "start": {
                      "column": 51,
                      "line": 7
                    }
                  }
                },
                "range": [
                  136,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 7
                  },
                  "start": {
                    "column": 51,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 7
              },
              "start": {
                "column": 37,
                "line": 7
              }
            }
          },
          "range": [
            114,
            138
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 14,
            "line": 7
          }
        },
        "range": [
          99,
          102
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                100,
                101
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              100,
              101
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        85,
        310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          400,
          403
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 62,
            "line": 18
          },
          "start": {
            "column": 59,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          351,
          356
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 18
          },
          "start": {
            "column": 15,
            "line": 18
          }
        },
        "range": [
          356,
          399
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                357,
                358
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              357,
              358
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  378,
                  384
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
                        379,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 18
                        },
                        "start": {
                          "column": 38,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      379,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 18
                      },
                      "start": {
                        "column": 38,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        382,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 18
                        },
                        "start": {
                          "column": 41,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      382,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 18
                      },
                      "start": {
                        "column": 41,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 37,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Settable",
                "optional": false,
                "range": [
                  370,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 29,
                    "line": 18
                  }
                }
              },
              "range": [
                370,
                384
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  395,
                  398
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        396,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 18
                        },
                        "start": {
                          "column": 55,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      396,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 18
                      },
                      "start": {
                        "column": 55,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 18
                  },
                  "start": {
                    "column": 54,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "range": [
                  387,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 18
                  },
                  "start": {
                    "column": 46,
                    "line": 18
                  }
                }
              },
              "range": [
                387,
                398
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 18
                },
                "start": {
                  "column": 46,
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
                360,
                361
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              360,
              398
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 18
              },
              "start": {
                "column": 19,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        341,
        403
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        403,
        404
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 18
        },
        "start": {
          "column": 62,
          "line": 18
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
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              },
              "range": [
                414,
                429
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    421,
                    429
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        422,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 17,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "range": [
                    416,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 19
                    },
                    "start": {
                      "column": 11,
                      "line": 19
                    }
                  }
                },
                "range": [
                  416,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 19
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              409,
              429
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            409,
            429
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        405,
        430
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          514,
          517
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 52,
            "line": 22
          },
          "start": {
            "column": 49,
            "line": 22
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2Base",
        "optional": false,
        "range": [
          475,
          484
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 22
          },
          "start": {
            "column": 10,
            "line": 22
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 22
          },
          "start": {
            "column": 19,
            "line": 22
          }
        },
        "range": [
          484,
          513
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                485,
                486
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 20,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              485,
              486
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 22
              },
              "start": {
                "column": 20,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  506,
                  512
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
                        507,
                        508
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 22
                        },
                        "start": {
                          "column": 42,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      507,
                      508
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 22
                      },
                      "start": {
                        "column": 42,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        510,
                        511
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 22
                        },
                        "start": {
                          "column": 45,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      510,
                      511
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 22
                      },
                      "start": {
                        "column": 45,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 22
                  },
                  "start": {
                    "column": 41,
                    "line": 22
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Settable",
                "optional": false,
                "range": [
                  498,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
                  }
                }
              },
              "range": [
                498,
                512
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 22
                },
                "start": {
                  "column": 33,
                  "line": 22
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
                488,
                489
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              488,
              512
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 22
              },
              "start": {
                "column": 23,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        465,
        517
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        517,
        518
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 22
        },
        "start": {
          "column": 52,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "range": [
          524,
          529
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            544,
            560
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  545,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 26,
                    "line": 23
                  }
                }
              },
              "range": [
                545,
                546
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 23
                },
                "start": {
                  "column": 26,
                  "line": 23
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  556,
                  559
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        557,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 23
                        },
                        "start": {
                          "column": 38,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      557,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 23
                      },
                      "start": {
                        "column": 38,
                        "line": 23
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 23
                  },
                  "start": {
                    "column": 37,
                    "line": 23
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "range": [
                  548,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 29,
                    "line": 23
                  }
                }
              },
              "range": [
                548,
                559
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 23
                },
                "start": {
                  "column": 29,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 23
            },
            "start": {
              "column": 25,
              "line": 23
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test2Base",
          "optional": false,
          "range": [
            535,
            544
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 23
            },
            "start": {
              "column": 16,
              "line": 23
            }
          }
        },
        "range": [
          535,
          560
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 23
          },
          "start": {
            "column": 16,
            "line": 23
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        },
        "range": [
          529,
          532
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                530,
                531
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "out": false,
            "range": [
              530,
              531
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        519,
        561
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              },
              "range": [
                571,
                586
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    578,
                    586
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        579,
                        585
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 24
                        },
                        "start": {
                          "column": 17,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 24
                    },
                    "start": {
                      "column": 16,
                      "line": 24
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "range": [
                    573,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "range": [
                  573,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              566,
              586
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            566,
            586
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        562,
        587
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
