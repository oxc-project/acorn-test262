__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    6159
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          25,
          43
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
              "name": "n",
              "optional": false,
              "range": [
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                32,
                40
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              31,
              41
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "column": 8,
            "line": 2
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
          23,
          24
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        17,
        43
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
          52,
          402
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
              "name": "n",
              "optional": false,
              "range": [
                58,
                59
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                59,
                67
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  61,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              58,
              68
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "range": [
                73,
                85
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                85,
                151
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            134,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 15,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            139,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          134,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "range": [
                          143,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 8
                          },
                          "start": {
                            "column": 24,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        134,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      127,
                      145
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  117,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 48,
                    "line": 7
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 21,
                        "line": 7
                      }
                    },
                    "range": [
                      90,
                      96
                    ],
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "range": [
                        92,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 23,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    86,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    },
                    "range": [
                      99,
                      107
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        101,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 32,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    98,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                },
                "range": [
                  108,
                  116
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    110,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 41,
                      "line": 7
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "range": [
              73,
              151
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitC",
              "optional": false,
              "range": [
                156,
                165
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 4,
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
                165,
                228
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            211,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            216,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          211,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "range": [
                          220,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 24,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        211,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      204,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  194,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 42,
                    "line": 10
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    },
                    "range": [
                      170,
                      173
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          172,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        172,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 10
                        },
                        "start": {
                          "column": 20,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    166,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    },
                    "range": [
                      176,
                      184
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        178,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 10
                        },
                        "start": {
                          "column": 26,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    175,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 10
                  },
                  "start": {
                    "column": 33,
                    "line": 10
                  }
                },
                "range": [
                  185,
                  193
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    187,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 10
                    },
                    "start": {
                      "column": 35,
                      "line": 10
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "range": [
              156,
              228
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitProperty",
              "optional": false,
              "range": [
                233,
                249
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                249,
                322
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            305,
                            309
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "range": [
                            310,
                            311
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          305,
                          311
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "range": [
                          314,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 14
                          },
                          "start": {
                            "column": 24,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        305,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      298,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  288,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 59,
                    "line": 13
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
                        "line": 13
                      }
                    },
                    "range": [
                      254,
                      267
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              257,
                              258
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
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 13
                              },
                              "start": {
                                "column": 29,
                                "line": 13
                              }
                            },
                            "range": [
                              258,
                              266
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                260,
                                266
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 13
                                },
                                "start": {
                                  "column": 31,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            257,
                            266
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 13
                            },
                            "start": {
                              "column": 28,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        256,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 27,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    250,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 13
                      },
                      "start": {
                        "column": 41,
                        "line": 13
                      }
                    },
                    "range": [
                      270,
                      278
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        272,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 13
                        },
                        "start": {
                          "column": 43,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    269,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 13
                    },
                    "start": {
                      "column": 40,
                      "line": 13
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 13
                  },
                  "start": {
                    "column": 50,
                    "line": 13
                  }
                },
                "range": [
                  279,
                  287
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    281,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 13
                    },
                    "start": {
                      "column": 52,
                      "line": 13
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "range": [
              233,
              322
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "range": [
                327,
                339
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                339,
                400
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "range": [
                          388,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 17
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          392,
                          393
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        388,
                        393
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      381,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  371,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 48,
                    "line": 16
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    },
                    "range": [
                      344,
                      350
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        346,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 16
                        },
                        "start": {
                          "column": 23,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    340,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 16
                      },
                      "start": {
                        "column": 30,
                        "line": 16
                      }
                    },
                    "range": [
                      353,
                      361
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        355,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 16
                        },
                        "start": {
                          "column": 32,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    352,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 16
                    },
                    "start": {
                      "column": 29,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 16
                  },
                  "start": {
                    "column": 39,
                    "line": 16
                  }
                },
                "range": [
                  362,
                  370
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    364,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 16
                    },
                    "start": {
                      "column": 41,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 16
                }
              }
            },
            "range": [
              327,
              400
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 8,
            "line": 5
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
          50,
          51
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        44,
        402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          421,
          424
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 20
          },
          "start": {
            "column": 18,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          409,
          410
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          419,
          420
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 16,
            "line": 20
          }
        }
      },
      "range": [
        403,
        424
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          437,
          662
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                443,
                444
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                  "column": 13,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              },
              "range": [
                444,
                452
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  446,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              443,
              453
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid1",
              "optional": false,
              "range": [
                458,
                471
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 28,
                      "line": 23
                    },
                    "start": {
                      "column": 22,
                      "line": 23
                    }
                  },
                  "range": [
                    476,
                    482
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      478,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  472,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 18,
                    "line": 23
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 23
                },
                "start": {
                  "column": 29,
                  "line": 23
                }
              },
              "range": [
                483,
                491
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  485,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 23
                  },
                  "start": {
                    "column": 31,
                    "line": 23
                  }
                }
              }
            },
            "static": false,
            "range": [
              458,
              492
            ],
            "loc": {
              "end": {
                "column": 38,
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
              "name": "explicitVoid2",
              "optional": false,
              "range": [
                497,
                510
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 22,
                      "line": 24
                    }
                  },
                  "range": [
                    515,
                    521
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      517,
                      521
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  511,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 24
                  },
                  "start": {
                    "column": 18,
                    "line": 24
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 24
                },
                "start": {
                  "column": 29,
                  "line": 24
                }
              },
              "range": [
                522,
                530
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  524,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 24
                  },
                  "start": {
                    "column": 31,
                    "line": 24
                  }
                }
              }
            },
            "static": false,
            "range": [
              497,
              531
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitStructural",
              "optional": false,
              "range": [
                536,
                554
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 40,
                      "line": 25
                    },
                    "start": {
                      "column": 27,
                      "line": 25
                    }
                  },
                  "range": [
                    559,
                    572
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            562,
                            563
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 25
                            },
                            "start": {
                              "column": 30,
                              "line": 25
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
                              "column": 39,
                              "line": 25
                            },
                            "start": {
                              "column": 31,
                              "line": 25
                            }
                          },
                          "range": [
                            563,
                            571
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              565,
                              571
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 25
                              },
                              "start": {
                                "column": 33,
                                "line": 25
                              }
                            }
                          }
                        },
                        "range": [
                          562,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 25
                          },
                          "start": {
                            "column": 30,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      561,
                      572
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 25
                      },
                      "start": {
                        "column": 29,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  555,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 25
                  },
                  "start": {
                    "column": 23,
                    "line": 25
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 25
                },
                "start": {
                  "column": 41,
                  "line": 25
                }
              },
              "range": [
                573,
                581
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  575,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 25
                  },
                  "start": {
                    "column": 43,
                    "line": 25
                  }
                }
              }
            },
            "static": false,
            "range": [
              536,
              582
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitInterface",
              "optional": false,
              "range": [
                587,
                604
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 29,
                      "line": 26
                    },
                    "start": {
                      "column": 26,
                      "line": 26
                    }
                  },
                  "range": [
                    609,
                    612
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "range": [
                        611,
                        612
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 28,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      611,
                      612
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 26
                      },
                      "start": {
                        "column": 28,
                        "line": 26
                      }
                    }
                  }
                },
                "range": [
                  605,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 26
                },
                "start": {
                  "column": 30,
                  "line": 26
                }
              },
              "range": [
                613,
                621
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  615,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
                  }
                }
              }
            },
            "static": false,
            "range": [
              587,
              622
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "range": [
                627,
                639
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                      "column": 27,
                      "line": 27
                    },
                    "start": {
                      "column": 21,
                      "line": 27
                    }
                  },
                  "range": [
                    644,
                    650
                  ],
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "range": [
                      646,
                      650
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
                      }
                    }
                  }
                },
                "range": [
                  640,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 27
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 27
                },
                "start": {
                  "column": 28,
                  "line": 27
                }
              },
              "range": [
                651,
                659
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  653,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 27
                  },
                  "start": {
                    "column": 30,
                    "line": 27
                  }
                }
              }
            },
            "static": false,
            "range": [
              627,
              660
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 27
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
            "line": 28
          },
          "start": {
            "column": 12,
            "line": 21
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
          435,
          436
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "range": [
        425,
        662
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 21
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  744,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    748,
                    752
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 30
                    },
                    "start": {
                      "column": 15,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    753,
                    754
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 30
                    },
                    "start": {
                      "column": 20,
                      "line": 30
                    }
                  }
                },
                "range": [
                  748,
                  754
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
              },
              "range": [
                744,
                754
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "range": [
              737,
              755
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          731,
          757
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 68,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitStructural",
        "optional": false,
        "range": [
          672,
          690
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
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
                "column": 47,
                "line": 29
              },
              "start": {
                "column": 32,
                "line": 29
              }
            },
            "range": [
              695,
              710
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      699,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 29
                      },
                      "start": {
                        "column": 36,
                        "line": 29
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
                        "column": 45,
                        "line": 29
                      },
                      "start": {
                        "column": 37,
                        "line": 29
                      }
                    },
                    "range": [
                      700,
                      708
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        702,
                        708
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 29
                        },
                        "start": {
                          "column": 39,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    699,
                    708
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 29
                    },
                    "start": {
                      "column": 36,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                697,
                710
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 29
                },
                "start": {
                  "column": 34,
                  "line": 29
                }
              }
            }
          },
          "range": [
            691,
            710
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 29
            },
            "start": {
              "column": 28,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 29
              },
              "start": {
                "column": 50,
                "line": 29
              }
            },
            "range": [
              713,
              721
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                715,
                721
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 29
                },
                "start": {
                  "column": 52,
                  "line": 29
                }
              }
            }
          },
          "range": [
            712,
            721
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 29
            },
            "start": {
              "column": 49,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 29
          },
          "start": {
            "column": 59,
            "line": 29
          }
        },
        "range": [
          722,
          730
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            724,
            730
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 29
            },
            "start": {
              "column": 61,
              "line": 29
            }
          }
        }
      },
      "range": [
        663,
        757
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  818,
                  822
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  823,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 33
                  },
                  "start": {
                    "column": 16,
                    "line": 33
                  }
                }
              },
              "range": [
                818,
                824
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "range": [
              811,
              825
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          805,
          827
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 47,
            "line": 32
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "justThis",
        "optional": false,
        "range": [
          767,
          775
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
          }
        }
      },
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
                "column": 37,
                "line": 32
              },
              "start": {
                "column": 22,
                "line": 32
              }
            },
            "range": [
              780,
              795
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      784,
                      785
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 32
                      },
                      "start": {
                        "column": 26,
                        "line": 32
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
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 27,
                        "line": 32
                      }
                    },
                    "range": [
                      785,
                      793
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        787,
                        793
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 32
                        },
                        "start": {
                          "column": 29,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    784,
                    793
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 32
                    },
                    "start": {
                      "column": 26,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                782,
                795
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            }
          },
          "range": [
            776,
            795
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 32
            },
            "start": {
              "column": 18,
              "line": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 32
          },
          "start": {
            "column": 38,
            "line": 32
          }
        },
        "range": [
          796,
          804
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            798,
            804
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 32
            },
            "start": {
              "column": 40,
              "line": 32
            }
          }
        }
      },
      "range": [
        758,
        827
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      882,
                      886
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 36
                      },
                      "start": {
                        "column": 11,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      887,
                      888
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 16,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    882,
                    888
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 36
                    },
                    "start": {
                      "column": 11,
                      "line": 36
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    891,
                    892
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 36
                    },
                    "start": {
                      "column": 20,
                      "line": 36
                    }
                  }
                },
                "range": [
                  882,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "12",
                "value": 12,
                "range": [
                  895,
                  897
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 36
                  },
                  "start": {
                    "column": 24,
                    "line": 36
                  }
                }
              },
              "range": [
                882,
                897
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "range": [
              875,
              898
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          869,
          900
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 41,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "implicitThis",
        "optional": false,
        "range": [
          837,
          849
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 35
              },
              "start": {
                "column": 23,
                "line": 35
              }
            },
            "range": [
              851,
              859
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                853,
                859
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 25,
                  "line": 35
                }
              }
            }
          },
          "range": [
            850,
            859
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 35
            },
            "start": {
              "column": 22,
              "line": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 35
          },
          "start": {
            "column": 32,
            "line": 35
          }
        },
        "range": [
          860,
          868
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            862,
            868
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 35
            },
            "start": {
              "column": 34,
              "line": 35
            }
          }
        }
      },
      "range": [
        828,
        900
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              },
              "range": [
                909,
                912
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    911,
                    912
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 38
                    },
                    "start": {
                      "column": 10,
                      "line": 38
                    }
                  }
                },
                "range": [
                  911,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              905,
              912
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    921,
                    922
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    924,
                    926
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 39
                    },
                    "start": {
                      "column": 7,
                      "line": 39
                    }
                  }
                },
                "range": [
                  921,
                  926
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid2",
                  "optional": false,
                  "range": [
                    932,
                    945
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        953,
                        957
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 40
                        },
                        "start": {
                          "column": 25,
                          "line": 40
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        958,
                        959
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 40
                        },
                        "start": {
                          "column": 30,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      953,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 40
                      },
                      "start": {
                        "column": 25,
                        "line": 40
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    947,
                    959
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 40
                    },
                    "start": {
                      "column": 19,
                      "line": 40
                    }
                  }
                },
                "range": [
                  932,
                  959
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid1",
                  "optional": false,
                  "range": [
                    1031,
                    1044
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1044,
                    1061
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "12",
                          "value": 12,
                          "range": [
                            1056,
                            1058
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 41
                            },
                            "start": {
                              "column": 29,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1049,
                          1059
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 41
                          },
                          "start": {
                            "column": 22,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "range": [
                      1047,
                      1061
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 41
                      },
                      "start": {
                        "column": 20,
                        "line": 41
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
                      "column": 34,
                      "line": 41
                    },
                    "start": {
                      "column": 17,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1031,
                  1061
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false,
                  "range": [
                    1067,
                    1085
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1085,
                    1118
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1105,
                              1109
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 43
                              },
                              "start": {
                                "column": 15,
                                "line": 43
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1110,
                              1111
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 43
                              },
                              "start": {
                                "column": 20,
                                "line": 43
                              }
                            }
                          },
                          "range": [
                            1105,
                            1111
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 43
                            },
                            "start": {
                              "column": 15,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1098,
                          1112
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 43
                          },
                          "start": {
                            "column": 8,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "range": [
                      1088,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 44
                      },
                      "start": {
                        "column": 25,
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
                      "column": 5,
                      "line": 44
                    },
                    "start": {
                      "column": 22,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1067,
                  1118
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitInterface",
                  "optional": false,
                  "range": [
                    1124,
                    1141
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1141,
                    1174
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1161,
                              1165
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 46
                              },
                              "start": {
                                "column": 15,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1166,
                              1167
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 46
                              },
                              "start": {
                                "column": 20,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1161,
                            1167
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 46
                            },
                            "start": {
                              "column": 15,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1154,
                          1168
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 46
                          },
                          "start": {
                            "column": 8,
                            "line": 46
                          }
                        }
                      }
                    ],
                    "range": [
                      1144,
                      1174
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 47
                      },
                      "start": {
                        "column": 24,
                        "line": 45
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
                      "column": 5,
                      "line": 47
                    },
                    "start": {
                      "column": 21,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1124,
                  1174
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "range": [
                    1180,
                    1192
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1192,
                    1225
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1212,
                              1216
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 49
                              },
                              "start": {
                                "column": 15,
                                "line": 49
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1217,
                              1218
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 49
                              },
                              "start": {
                                "column": 20,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1212,
                            1218
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 49
                            },
                            "start": {
                              "column": 15,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1205,
                          1219
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 49
                          },
                          "start": {
                            "column": 8,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "range": [
                      1195,
                      1225
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 50
                      },
                      "start": {
                        "column": 19,
                        "line": 48
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
                      "column": 5,
                      "line": 50
                    },
                    "start": {
                      "column": 16,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1180,
                  1225
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              }
            ],
            "range": [
              915,
              1228
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 51
              },
              "start": {
                "column": 14,
                "line": 38
              }
            }
          },
          "range": [
            905,
            1228
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        901,
        1228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1229,
              1233
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 52
              },
              "start": {
                "column": 0,
                "line": 52
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid1",
            "optional": false,
            "range": [
              1234,
              1247
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 52
              },
              "start": {
                "column": 5,
                "line": 52
              }
            }
          },
          "range": [
            1229,
            1247
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    1271,
                    1273
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 52
                    },
                    "start": {
                      "column": 42,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1264,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 52
                  },
                  "start": {
                    "column": 35,
                    "line": 52
                  }
                }
              }
            ],
            "range": [
              1262,
              1276
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 52
              },
              "start": {
                "column": 33,
                "line": 52
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1250,
            1276
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 52
            },
            "start": {
              "column": 21,
              "line": 52
            }
          }
        },
        "range": [
          1229,
          1276
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1229,
        1277
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1278,
              1282
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 53
              },
              "start": {
                "column": 0,
                "line": 53
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid2",
            "optional": false,
            "range": [
              1283,
              1296
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 53
              },
              "start": {
                "column": 5,
                "line": 53
              }
            }
          },
          "range": [
            1278,
            1296
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1305,
              1307
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 53
              },
              "start": {
                "column": 27,
                "line": 53
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1299,
            1307
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 53
            },
            "start": {
              "column": 21,
              "line": 53
            }
          }
        },
        "range": [
          1278,
          1307
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        1278,
        1308
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1309,
              1313
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "range": [
              1314,
              1332
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 54
              },
              "start": {
                "column": 5,
                "line": 54
              }
            }
          },
          "range": [
            1309,
            1332
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      1355,
                      1359
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 54
                      },
                      "start": {
                        "column": 46,
                        "line": 54
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1360,
                      1361
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 54
                      },
                      "start": {
                        "column": 51,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1355,
                    1361
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 54
                    },
                    "start": {
                      "column": 46,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1348,
                  1362
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 54
                  },
                  "start": {
                    "column": 39,
                    "line": 54
                  }
                }
              }
            ],
            "range": [
              1346,
              1364
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 54
              },
              "start": {
                "column": 37,
                "line": 54
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1335,
            1364
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 54
            },
            "start": {
              "column": 26,
              "line": 54
            }
          }
        },
        "range": [
          1309,
          1364
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1309,
        1365
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1366,
              1370
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 55
              },
              "start": {
                "column": 0,
                "line": 55
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitInterface",
            "optional": false,
            "range": [
              1371,
              1388
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 55
              },
              "start": {
                "column": 5,
                "line": 55
              }
            }
          },
          "range": [
            1366,
            1388
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      1411,
                      1415
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 55
                      },
                      "start": {
                        "column": 45,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1416,
                      1417
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 55
                      },
                      "start": {
                        "column": 50,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1411,
                    1417
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 55
                    },
                    "start": {
                      "column": 45,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1404,
                  1418
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 55
                  },
                  "start": {
                    "column": 38,
                    "line": 55
                  }
                }
              }
            ],
            "range": [
              1402,
              1420
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 55
              },
              "start": {
                "column": 36,
                "line": 55
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1391,
            1420
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 55
            },
            "start": {
              "column": 25,
              "line": 55
            }
          }
        },
        "range": [
          1366,
          1420
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1366,
        1421
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1422,
              1426
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 56
              },
              "start": {
                "column": 0,
                "line": 56
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "range": [
              1427,
              1445
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 56
              },
              "start": {
                "column": 5,
                "line": 56
              }
            }
          },
          "range": [
            1422,
            1445
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1454,
              1456
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 56
              },
              "start": {
                "column": 32,
                "line": 56
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1448,
            1456
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 56
            },
            "start": {
              "column": 26,
              "line": 56
            }
          }
        },
        "range": [
          1422,
          1456
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        1422,
        1457
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1458,
              1462
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 57
              },
              "start": {
                "column": 0,
                "line": 57
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitInterface",
            "optional": false,
            "range": [
              1463,
              1480
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 57
              },
              "start": {
                "column": 5,
                "line": 57
              }
            }
          },
          "range": [
            1458,
            1480
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1489,
              1491
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 57
              },
              "start": {
                "column": 31,
                "line": 57
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1483,
            1491
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 57
            },
            "start": {
              "column": 25,
              "line": 57
            }
          }
        },
        "range": [
          1458,
          1491
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 57
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1458,
        1492
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "impl",
            "optional": false,
            "range": [
              1493,
              1497
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 58
              },
              "start": {
                "column": 0,
                "line": 58
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              1498,
              1510
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 58
              },
              "start": {
                "column": 5,
                "line": 58
              }
            }
          },
          "range": [
            1493,
            1510
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 58
            },
            "start": {
              "column": 0,
              "line": 58
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "range": [
                      1534,
                      1538
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 58
                      },
                      "start": {
                        "column": 41,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1539,
                      1540
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 58
                      },
                      "start": {
                        "column": 46,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1534,
                    1540
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 58
                    },
                    "start": {
                      "column": 41,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1527,
                  1541
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 58
                  },
                  "start": {
                    "column": 34,
                    "line": 58
                  }
                }
              }
            ],
            "range": [
              1525,
              1543
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 58
              },
              "start": {
                "column": 32,
                "line": 58
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1513,
            1543
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 58
            },
            "start": {
              "column": 20,
              "line": 58
            }
          }
        },
        "range": [
          1493,
          1543
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 58
          },
          "start": {
            "column": 0,
            "line": 58
          }
        }
      },
      "range": [
        1493,
        1544
      ],
      "loc": {
        "end": {
          "column": 51,
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
            "name": "ok",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 60
                },
                "start": {
                  "column": 6,
                  "line": 60
                }
              },
              "range": [
                1573,
                1633
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1576,
                        1577
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 60
                        },
                        "start": {
                          "column": 9,
                          "line": 60
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
                          "column": 18,
                          "line": 60
                        },
                        "start": {
                          "column": 10,
                          "line": 60
                        }
                      },
                      "range": [
                        1577,
                        1585
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1579,
                          1585
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 60
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      }
                    },
                    "range": [
                      1576,
                      1586
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 60
                      },
                      "start": {
                        "column": 9,
                        "line": 60
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        1587,
                        1588
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 60
                        },
                        "start": {
                          "column": 20,
                          "line": 60
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
                          "column": 65,
                          "line": 60
                        },
                        "start": {
                          "column": 21,
                          "line": 60
                        }
                      },
                      "range": [
                        1588,
                        1632
                      ],
                      "typeAnnotation": {
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
                                  "column": 43,
                                  "line": 60
                                },
                                "start": {
                                  "column": 28,
                                  "line": 60
                                }
                              },
                              "range": [
                                1595,
                                1610
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "range": [
                                        1599,
                                        1600
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 60
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
                                          "column": 41,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 60
                                        }
                                      },
                                      "range": [
                                        1600,
                                        1608
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          1602,
                                          1608
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 60
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 60
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      1599,
                                      1608
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 60
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 60
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1597,
                                  1610
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 60
                                  }
                                }
                              }
                            },
                            "range": [
                              1591,
                              1610
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 60
                              },
                              "start": {
                                "column": 24,
                                "line": 60
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 60
                                },
                                "start": {
                                  "column": 46,
                                  "line": 60
                                }
                              },
                              "range": [
                                1613,
                                1621
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1615,
                                  1621
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 60
                                  }
                                }
                              }
                            },
                            "range": [
                              1612,
                              1621
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 60
                              },
                              "start": {
                                "column": 45,
                                "line": 60
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 60
                            },
                            "start": {
                              "column": 56,
                              "line": 60
                            }
                          },
                          "range": [
                            1623,
                            1632
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1626,
                              1632
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 60
                              },
                              "start": {
                                "column": 59,
                                "line": 60
                              }
                            }
                          }
                        },
                        "range": [
                          1590,
                          1632
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 60
                          },
                          "start": {
                            "column": 23,
                            "line": 60
                          }
                        }
                      }
                    },
                    "range": [
                      1587,
                      1632
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 60
                      },
                      "start": {
                        "column": 20,
                        "line": 60
                      }
                    }
                  }
                ],
                "range": [
                  1575,
                  1633
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1571,
              1633
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    1638,
                    1639
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 60
                    },
                    "start": {
                      "column": 71,
                      "line": 60
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    1641,
                    1643
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 60
                    },
                    "start": {
                      "column": 74,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1638,
                  1643
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 60
                  },
                  "start": {
                    "column": 71,
                    "line": 60
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1645,
                    1646
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 60
                    },
                    "start": {
                      "column": 78,
                      "line": 60
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false,
                  "range": [
                    1648,
                    1666
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 60
                    },
                    "start": {
                      "column": 81,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1645,
                  1666
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 60
                  },
                  "start": {
                    "column": 78,
                    "line": 60
                  }
                }
              }
            ],
            "range": [
              1636,
              1668
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 60
              },
              "start": {
                "column": 69,
                "line": 60
              }
            }
          },
          "range": [
            1571,
            1668
          ],
          "loc": {
            "end": {
              "column": 101,
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
      "kind": "let",
      "range": [
        1567,
        1669
      ],
      "loc": {
        "end": {
          "column": 102,
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
            "name": "implicitAnyOk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 61
                },
                "start": {
                  "column": 17,
                  "line": 61
                }
              },
              "range": [
                1687,
                1737
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notSpecified",
                      "optional": false,
                      "range": [
                        1690,
                        1702
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 61
                        },
                        "start": {
                          "column": 20,
                          "line": 61
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
                          "column": 40,
                          "line": 61
                        },
                        "start": {
                          "column": 32,
                          "line": 61
                        }
                      },
                      "range": [
                        1702,
                        1710
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1704,
                          1710
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 61
                          },
                          "start": {
                            "column": 34,
                            "line": 61
                          }
                        }
                      }
                    },
                    "range": [
                      1690,
                      1711
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 61
                      },
                      "start": {
                        "column": 20,
                        "line": 61
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        1712,
                        1713
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 61
                        },
                        "start": {
                          "column": 42,
                          "line": 61
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
                          "column": 66,
                          "line": 61
                        },
                        "start": {
                          "column": 43,
                          "line": 61
                        }
                      },
                      "range": [
                        1713,
                        1736
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 61
                                },
                                "start": {
                                  "column": 47,
                                  "line": 61
                                }
                              },
                              "range": [
                                1717,
                                1725
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1719,
                                  1725
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 61
                                  }
                                }
                              }
                            },
                            "range": [
                              1716,
                              1725
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 61
                              },
                              "start": {
                                "column": 46,
                                "line": 61
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 61
                            },
                            "start": {
                              "column": 57,
                              "line": 61
                            }
                          },
                          "range": [
                            1727,
                            1736
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1730,
                              1736
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 61
                              },
                              "start": {
                                "column": 60,
                                "line": 61
                              }
                            }
                          }
                        },
                        "range": [
                          1715,
                          1736
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 61
                          },
                          "start": {
                            "column": 45,
                            "line": 61
                          }
                        }
                      }
                    },
                    "range": [
                      1712,
                      1736
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 61
                      },
                      "start": {
                        "column": 42,
                        "line": 61
                      }
                    }
                  }
                ],
                "range": [
                  1689,
                  1737
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 61
                  },
                  "start": {
                    "column": 19,
                    "line": 61
                  }
                }
              }
            },
            "range": [
              1674,
              1737
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "notSpecified",
                  "optional": false,
                  "range": [
                    1742,
                    1754
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 61
                    },
                    "start": {
                      "column": 72,
                      "line": 61
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    1756,
                    1758
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 61
                    },
                    "start": {
                      "column": 86,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1742,
                  1758
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 61
                  },
                  "start": {
                    "column": 72,
                    "line": 61
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1760,
                    1761
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 61
                    },
                    "start": {
                      "column": 90,
                      "line": 61
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "implicitThis",
                  "optional": false,
                  "range": [
                    1763,
                    1775
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 61
                    },
                    "start": {
                      "column": 93,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1760,
                  1775
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 61
                  },
                  "start": {
                    "column": 90,
                    "line": 61
                  }
                }
              }
            ],
            "range": [
              1740,
              1777
            ],
            "loc": {
              "end": {
                "column": 107,
                "line": 61
              },
              "start": {
                "column": 70,
                "line": 61
              }
            }
          },
          "range": [
            1674,
            1777
          ],
          "loc": {
            "end": {
              "column": 107,
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
      "kind": "let",
      "range": [
        1670,
        1778
      ],
      "loc": {
        "end": {
          "column": 108,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "13",
            "value": 13,
            "range": [
              1784,
              1786
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 62
              },
              "start": {
                "column": 5,
                "line": 62
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
            "name": "ok",
            "optional": false,
            "range": [
              1779,
              1781
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 62
              },
              "start": {
                "column": 0,
                "line": 62
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "range": [
              1782,
              1783
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 62
              },
              "start": {
                "column": 3,
                "line": 62
              }
            }
          },
          "range": [
            1779,
            1783
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 62
            },
            "start": {
              "column": 0,
              "line": 62
            }
          }
        },
        "optional": false,
        "range": [
          1779,
          1787
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 62
          },
          "start": {
            "column": 0,
            "line": 62
          }
        }
      },
      "range": [
        1779,
        1788
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1802,
              1804
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 63
              },
              "start": {
                "column": 13,
                "line": 63
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "implicitThis",
          "optional": false,
          "range": [
            1789,
            1801
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "optional": false,
        "range": [
          1789,
          1805
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 63
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        1789,
        1806
      ],
      "loc": {
        "end": {
          "column": 17,
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
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1823,
              1825
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 64
              },
              "start": {
                "column": 16,
                "line": 64
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
            "name": "implicitAnyOk",
            "optional": false,
            "range": [
              1807,
              1820
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "name": "f",
            "optional": false,
            "range": [
              1821,
              1822
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 64
              },
              "start": {
                "column": 14,
                "line": 64
              }
            }
          },
          "range": [
            1807,
            1822
          ],
          "loc": {
            "end": {
              "column": 15,
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
          1807,
          1826
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 64
          },
          "start": {
            "column": 0,
            "line": 64
          }
        }
      },
      "range": [
        1807,
        1827
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
              1833,
              1834
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                1841,
                1842
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 66
                },
                "start": {
                  "column": 12,
                  "line": 66
                }
              }
            },
            "range": [
              1837,
              1844
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 66
              },
              "start": {
                "column": 8,
                "line": 66
              }
            }
          },
          "range": [
            1833,
            1844
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 66
            },
            "start": {
              "column": 4,
              "line": 66
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1829,
        1845
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
            "name": "d",
            "optional": false,
            "range": [
              1850,
              1851
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                1858,
                1859
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 67
                },
                "start": {
                  "column": 12,
                  "line": 67
                }
              }
            },
            "range": [
              1854,
              1861
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 67
              },
              "start": {
                "column": 8,
                "line": 67
              }
            }
          },
          "range": [
            1850,
            1861
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1846,
        1862
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "ripped",
            "optional": false,
            "range": [
              1867,
              1873
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                1876,
                1877
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 68
                },
                "start": {
                  "column": 13,
                  "line": 68
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitC",
              "optional": false,
              "range": [
                1878,
                1887
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 68
                },
                "start": {
                  "column": 15,
                  "line": 68
                }
              }
            },
            "range": [
              1876,
              1887
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 68
              },
              "start": {
                "column": 13,
                "line": 68
              }
            }
          },
          "range": [
            1867,
            1887
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 68
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1863,
        1888
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1901,
              1903
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 69
              },
              "start": {
                "column": 12,
                "line": 69
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
            "name": "c",
            "optional": false,
            "range": [
              1889,
              1890
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 69
              },
              "start": {
                "column": 0,
                "line": 69
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              1891,
              1900
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 69
              },
              "start": {
                "column": 2,
                "line": 69
              }
            }
          },
          "range": [
            1889,
            1900
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "optional": false,
        "range": [
          1889,
          1904
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1889,
        1905
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1925,
              1927
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 70
              },
              "start": {
                "column": 19,
                "line": 70
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
            "name": "c",
            "optional": false,
            "range": [
              1906,
              1907
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 70
              },
              "start": {
                "column": 0,
                "line": 70
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              1908,
              1924
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 70
              },
              "start": {
                "column": 2,
                "line": 70
              }
            }
          },
          "range": [
            1906,
            1924
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
            }
          }
        },
        "optional": false,
        "range": [
          1906,
          1928
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        1906,
        1929
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1945,
              1947
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 71
              },
              "start": {
                "column": 15,
                "line": 71
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
            "name": "c",
            "optional": false,
            "range": [
              1930,
              1931
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 71
              },
              "start": {
                "column": 0,
                "line": 71
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              1932,
              1944
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 71
              },
              "start": {
                "column": 2,
                "line": 71
              }
            }
          },
          "range": [
            1930,
            1944
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 71
            },
            "start": {
              "column": 0,
              "line": 71
            }
          }
        },
        "optional": false,
        "range": [
          1930,
          1948
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 71
          },
          "start": {
            "column": 0,
            "line": 71
          }
        }
      },
      "range": [
        1930,
        1949
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1962,
              1964
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 72
              },
              "start": {
                "column": 12,
                "line": 72
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
            "name": "d",
            "optional": false,
            "range": [
              1950,
              1951
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 72
              },
              "start": {
                "column": 0,
                "line": 72
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              1952,
              1961
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 72
              },
              "start": {
                "column": 2,
                "line": 72
              }
            }
          },
          "range": [
            1950,
            1961
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "optional": false,
        "range": [
          1950,
          1965
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        1950,
        1966
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              1986,
              1988
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 73
              },
              "start": {
                "column": 19,
                "line": 73
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
            "name": "d",
            "optional": false,
            "range": [
              1967,
              1968
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 73
              },
              "start": {
                "column": 0,
                "line": 73
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              1969,
              1985
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 73
              },
              "start": {
                "column": 2,
                "line": 73
              }
            }
          },
          "range": [
            1967,
            1985
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "optional": false,
        "range": [
          1967,
          1989
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        1967,
        1990
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              2006,
              2008
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 74
              },
              "start": {
                "column": 15,
                "line": 74
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
            "name": "d",
            "optional": false,
            "range": [
              1991,
              1992
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 74
              },
              "start": {
                "column": 0,
                "line": 74
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              1993,
              2005
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 74
              },
              "start": {
                "column": 2,
                "line": 74
              }
            }
          },
          "range": [
            1991,
            2005
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 74
            },
            "start": {
              "column": 0,
              "line": 74
            }
          }
        },
        "optional": false,
        "range": [
          1991,
          2009
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        1991,
        2010
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 81
                },
                "start": {
                  "column": 17,
                  "line": 75
                }
              },
              "range": [
                2028,
                2314
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        2037,
                        2038
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 76
                        },
                        "start": {
                          "column": 4,
                          "line": 76
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
                          "column": 13,
                          "line": 76
                        },
                        "start": {
                          "column": 5,
                          "line": 76
                        }
                      },
                      "range": [
                        2038,
                        2046
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2040,
                          2046
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 76
                          },
                          "start": {
                            "column": 7,
                            "line": 76
                          }
                        }
                      }
                    },
                    "range": [
                      2037,
                      2047
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 76
                      },
                      "start": {
                        "column": 4,
                        "line": 76
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitThis",
                      "optional": false,
                      "range": [
                        2052,
                        2064
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 77
                        },
                        "start": {
                          "column": 4,
                          "line": 77
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
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
                              "column": 24,
                              "line": 77
                            },
                            "start": {
                              "column": 21,
                              "line": 77
                            }
                          },
                          "range": [
                            2069,
                            2072
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                2071,
                                2072
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 77
                                },
                                "start": {
                                  "column": 23,
                                  "line": 77
                                }
                              }
                            },
                            "range": [
                              2071,
                              2072
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 77
                              },
                              "start": {
                                "column": 23,
                                "line": 77
                              }
                            }
                          }
                        },
                        "range": [
                          2065,
                          2072
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 77
                          },
                          "start": {
                            "column": 17,
                            "line": 77
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 77
                            },
                            "start": {
                              "column": 27,
                              "line": 77
                            }
                          },
                          "range": [
                            2075,
                            2083
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2077,
                              2083
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 77
                              },
                              "start": {
                                "column": 29,
                                "line": 77
                              }
                            }
                          }
                        },
                        "range": [
                          2074,
                          2083
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 77
                          },
                          "start": {
                            "column": 26,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 77
                        },
                        "start": {
                          "column": 36,
                          "line": 77
                        }
                      },
                      "range": [
                        2084,
                        2092
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2086,
                          2092
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 77
                          },
                          "start": {
                            "column": 38,
                            "line": 77
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      2052,
                      2093
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 77
                      },
                      "start": {
                        "column": 4,
                        "line": 77
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitC",
                      "optional": false,
                      "range": [
                        2160,
                        2169
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 78
                        },
                        "start": {
                          "column": 4,
                          "line": 78
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
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
                              "column": 21,
                              "line": 78
                            },
                            "start": {
                              "column": 18,
                              "line": 78
                            }
                          },
                          "range": [
                            2174,
                            2177
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                2176,
                                2177
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 78
                                },
                                "start": {
                                  "column": 20,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              2176,
                              2177
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 78
                              },
                              "start": {
                                "column": 20,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          2170,
                          2177
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 78
                          },
                          "start": {
                            "column": 14,
                            "line": 78
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 78
                            },
                            "start": {
                              "column": 24,
                              "line": 78
                            }
                          },
                          "range": [
                            2180,
                            2188
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2182,
                              2188
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 78
                              },
                              "start": {
                                "column": 26,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          2179,
                          2188
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 78
                          },
                          "start": {
                            "column": 23,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 78
                        },
                        "start": {
                          "column": 33,
                          "line": 78
                        }
                      },
                      "range": [
                        2189,
                        2197
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2191,
                          2197
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 78
                          },
                          "start": {
                            "column": 35,
                            "line": 78
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      2160,
                      2198
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 78
                      },
                      "start": {
                        "column": 4,
                        "line": 78
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitProperty",
                      "optional": false,
                      "range": [
                        2203,
                        2219
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 79
                        },
                        "start": {
                          "column": 4,
                          "line": 79
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
                          "column": 63,
                          "line": 79
                        },
                        "start": {
                          "column": 20,
                          "line": 79
                        }
                      },
                      "range": [
                        2219,
                        2262
                      ],
                      "typeAnnotation": {
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
                                  "column": 41,
                                  "line": 79
                                },
                                "start": {
                                  "column": 27,
                                  "line": 79
                                }
                              },
                              "range": [
                                2226,
                                2240
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "range": [
                                        2229,
                                        2230
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 79
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 79
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
                                          "column": 40,
                                          "line": 79
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 79
                                        }
                                      },
                                      "range": [
                                        2231,
                                        2239
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          2233,
                                          2239
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 79
                                          },
                                          "start": {
                                            "column": 34,
                                            "line": 79
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      2229,
                                      2239
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 79
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 79
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2228,
                                  2240
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 79
                                  }
                                }
                              }
                            },
                            "range": [
                              2222,
                              2240
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 79
                              },
                              "start": {
                                "column": 23,
                                "line": 79
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 79
                                },
                                "start": {
                                  "column": 44,
                                  "line": 79
                                }
                              },
                              "range": [
                                2243,
                                2251
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2245,
                                  2251
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 79
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 79
                                  }
                                }
                              }
                            },
                            "range": [
                              2242,
                              2251
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 79
                              },
                              "start": {
                                "column": 43,
                                "line": 79
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 79
                            },
                            "start": {
                              "column": 54,
                              "line": 79
                            }
                          },
                          "range": [
                            2253,
                            2262
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2256,
                              2262
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 79
                              },
                              "start": {
                                "column": 57,
                                "line": 79
                              }
                            }
                          }
                        },
                        "range": [
                          2221,
                          2262
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 79
                          },
                          "start": {
                            "column": 22,
                            "line": 79
                          }
                        }
                      }
                    },
                    "range": [
                      2203,
                      2263
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 79
                      },
                      "start": {
                        "column": 4,
                        "line": 79
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitVoid",
                      "optional": false,
                      "range": [
                        2268,
                        2280
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 80
                        },
                        "start": {
                          "column": 4,
                          "line": 80
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
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
                              "column": 27,
                              "line": 80
                            },
                            "start": {
                              "column": 21,
                              "line": 80
                            }
                          },
                          "range": [
                            2285,
                            2291
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              2287,
                              2291
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 80
                              },
                              "start": {
                                "column": 23,
                                "line": 80
                              }
                            }
                          }
                        },
                        "range": [
                          2281,
                          2291
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 80
                          },
                          "start": {
                            "column": 17,
                            "line": 80
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 80
                            },
                            "start": {
                              "column": 30,
                              "line": 80
                            }
                          },
                          "range": [
                            2294,
                            2302
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2296,
                              2302
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 80
                              },
                              "start": {
                                "column": 32,
                                "line": 80
                              }
                            }
                          }
                        },
                        "range": [
                          2293,
                          2302
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 80
                          },
                          "start": {
                            "column": 29,
                            "line": 80
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 80
                        },
                        "start": {
                          "column": 39,
                          "line": 80
                        }
                      },
                      "range": [
                        2303,
                        2311
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2305,
                          2311
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 80
                          },
                          "start": {
                            "column": 41,
                            "line": 80
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      2268,
                      2312
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 80
                      },
                      "start": {
                        "column": 4,
                        "line": 80
                      }
                    }
                  }
                ],
                "range": [
                  2030,
                  2314
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 81
                  },
                  "start": {
                    "column": 19,
                    "line": 75
                  }
                }
              }
            },
            "range": [
              2015,
              2314
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    2324,
                    2325
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    2327,
                    2329
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 82
                    },
                    "start": {
                      "column": 7,
                      "line": 82
                    }
                  }
                },
                "range": [
                  2324,
                  2329
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "range": [
                    2335,
                    2347
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 83
                    },
                    "start": {
                      "column": 4,
                      "line": 83
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      2349,
                      2350
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 83
                      },
                      "start": {
                        "column": 18,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitThis",
                    "optional": false,
                    "range": [
                      2351,
                      2363
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 83
                      },
                      "start": {
                        "column": 20,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    2349,
                    2363
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 83
                    },
                    "start": {
                      "column": 18,
                      "line": 83
                    }
                  }
                },
                "range": [
                  2335,
                  2363
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 83
                  },
                  "start": {
                    "column": 4,
                    "line": 83
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitC",
                  "optional": false,
                  "range": [
                    2369,
                    2378
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 84
                    },
                    "start": {
                      "column": 4,
                      "line": 84
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      2380,
                      2381
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 84
                      },
                      "start": {
                        "column": 15,
                        "line": 84
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitC",
                    "optional": false,
                    "range": [
                      2382,
                      2391
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 84
                      },
                      "start": {
                        "column": 17,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2380,
                    2391
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 84
                    },
                    "start": {
                      "column": 15,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2369,
                  2391
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 84
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitProperty",
                  "optional": false,
                  "range": [
                    2397,
                    2413
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 85
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      2415,
                      2416
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 85
                      },
                      "start": {
                        "column": 22,
                        "line": 85
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitProperty",
                    "optional": false,
                    "range": [
                      2417,
                      2433
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 85
                      },
                      "start": {
                        "column": 24,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    2415,
                    2433
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 85
                    },
                    "start": {
                      "column": 22,
                      "line": 85
                    }
                  }
                },
                "range": [
                  2397,
                  2433
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid",
                  "optional": false,
                  "range": [
                    2439,
                    2451
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      2453,
                      2454
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 86
                      },
                      "start": {
                        "column": 18,
                        "line": 86
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitVoid",
                    "optional": false,
                    "range": [
                      2455,
                      2467
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 86
                      },
                      "start": {
                        "column": 20,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    2453,
                    2467
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 86
                    },
                    "start": {
                      "column": 18,
                      "line": 86
                    }
                  }
                },
                "range": [
                  2439,
                  2467
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 86
                  },
                  "start": {
                    "column": 4,
                    "line": 86
                  }
                }
              }
            ],
            "range": [
              2317,
              2469
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          "range": [
            2015,
            2469
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 75
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2011,
        2470
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              2498,
              2500
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 88
              },
              "start": {
                "column": 27,
                "line": 88
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
            "name": "reconstructed",
            "optional": false,
            "range": [
              2471,
              2484
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 88
              },
              "start": {
                "column": 0,
                "line": 88
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              2485,
              2497
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 88
              },
              "start": {
                "column": 14,
                "line": 88
              }
            }
          },
          "range": [
            2471,
            2497
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 88
            },
            "start": {
              "column": 0,
              "line": 88
            }
          }
        },
        "optional": false,
        "range": [
          2471,
          2501
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 88
          },
          "start": {
            "column": 0,
            "line": 88
          }
        }
      },
      "range": [
        2471,
        2502
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "11",
            "value": 11,
            "range": [
              2534,
              2536
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 89
              },
              "start": {
                "column": 31,
                "line": 89
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
            "name": "reconstructed",
            "optional": false,
            "range": [
              2503,
              2516
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 89
              },
              "start": {
                "column": 0,
                "line": 89
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              2517,
              2533
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 89
              },
              "start": {
                "column": 14,
                "line": 89
              }
            }
          },
          "range": [
            2503,
            2533
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 89
            },
            "start": {
              "column": 0,
              "line": 89
            }
          }
        },
        "optional": false,
        "range": [
          2503,
          2537
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 89
          },
          "start": {
            "column": 0,
            "line": 89
          }
        }
      },
      "range": [
        2503,
        2538
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
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
            "name": "explicitVoid",
            "optional": false,
            "range": [
              2543,
              2555
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "reconstructed",
              "optional": false,
              "range": [
                2558,
                2571
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 90
                },
                "start": {
                  "column": 19,
                  "line": 90
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "range": [
                2572,
                2584
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 90
                },
                "start": {
                  "column": 33,
                  "line": 90
                }
              }
            },
            "range": [
              2558,
              2584
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 90
              },
              "start": {
                "column": 19,
                "line": 90
              }
            }
          },
          "range": [
            2543,
            2584
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 90
            },
            "start": {
              "column": 4,
              "line": 90
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2539,
        2585
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "12",
            "value": 12,
            "range": [
              2599,
              2601
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 91
              },
              "start": {
                "column": 13,
                "line": 91
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitVoid",
          "optional": false,
          "range": [
            2586,
            2598
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 91
            },
            "start": {
              "column": 0,
              "line": 91
            }
          }
        },
        "optional": false,
        "range": [
          2586,
          2602
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 91
          },
          "start": {
            "column": 0,
            "line": 91
          }
        }
      },
      "range": [
        2586,
        2603
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
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
            "name": "unboundToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 93
                },
                "start": {
                  "column": 22,
                  "line": 93
                }
              },
              "range": [
                2649,
                2693
              ],
              "typeAnnotation": {
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
                          "column": 44,
                          "line": 93
                        },
                        "start": {
                          "column": 29,
                          "line": 93
                        }
                      },
                      "range": [
                        2656,
                        2671
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                2660,
                                2661
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 93
                                },
                                "start": {
                                  "column": 33,
                                  "line": 93
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
                                  "column": 42,
                                  "line": 93
                                },
                                "start": {
                                  "column": 34,
                                  "line": 93
                                }
                              },
                              "range": [
                                2661,
                                2669
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2663,
                                  2669
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 93
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 93
                                  }
                                }
                              }
                            },
                            "range": [
                              2660,
                              2669
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 93
                              },
                              "start": {
                                "column": 33,
                                "line": 93
                              }
                            }
                          }
                        ],
                        "range": [
                          2658,
                          2671
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 93
                          },
                          "start": {
                            "column": 31,
                            "line": 93
                          }
                        }
                      }
                    },
                    "range": [
                      2652,
                      2671
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 93
                      },
                      "start": {
                        "column": 25,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 93
                        },
                        "start": {
                          "column": 47,
                          "line": 93
                        }
                      },
                      "range": [
                        2674,
                        2682
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2676,
                          2682
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 93
                          },
                          "start": {
                            "column": 49,
                            "line": 93
                          }
                        }
                      }
                    },
                    "range": [
                      2673,
                      2682
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 93
                      },
                      "start": {
                        "column": 46,
                        "line": 93
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 93
                    },
                    "start": {
                      "column": 57,
                      "line": 93
                    }
                  },
                  "range": [
                    2684,
                    2693
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2687,
                      2693
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 93
                      },
                      "start": {
                        "column": 60,
                        "line": 93
                      }
                    }
                  }
                },
                "range": [
                  2651,
                  2693
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 93
                  },
                  "start": {
                    "column": 24,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              2631,
              2693
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2701,
                  2702
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 93
                  },
                  "start": {
                    "column": 74,
                    "line": 93
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    2705,
                    2709
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 93
                    },
                    "start": {
                      "column": 78,
                      "line": 93
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    2710,
                    2711
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 93
                    },
                    "start": {
                      "column": 83,
                      "line": 93
                    }
                  }
                },
                "range": [
                  2705,
                  2711
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 93
                  },
                  "start": {
                    "column": 78,
                    "line": 93
                  }
                }
              },
              "range": [
                2701,
                2711
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 93
                },
                "start": {
                  "column": 74,
                  "line": 93
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2696,
                  2697
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 93
                  },
                  "start": {
                    "column": 69,
                    "line": 93
                  }
                }
              }
            ],
            "range": [
              2696,
              2711
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 93
              },
              "start": {
                "column": 69,
                "line": 93
              }
            }
          },
          "range": [
            2631,
            2711
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 93
            },
            "start": {
              "column": 4,
              "line": 93
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2627,
        2712
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
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
            "name": "specifiedToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 94
                },
                "start": {
                  "column": 24,
                  "line": 94
                }
              },
              "range": [
                2753,
                2795
              ],
              "typeAnnotation": {
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
                          "column": 44,
                          "line": 94
                        },
                        "start": {
                          "column": 31,
                          "line": 94
                        }
                      },
                      "range": [
                        2760,
                        2773
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                2763,
                                2764
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 94
                                },
                                "start": {
                                  "column": 34,
                                  "line": 94
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
                                  "column": 43,
                                  "line": 94
                                },
                                "start": {
                                  "column": 35,
                                  "line": 94
                                }
                              },
                              "range": [
                                2764,
                                2772
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2766,
                                  2772
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 94
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 94
                                  }
                                }
                              }
                            },
                            "range": [
                              2763,
                              2772
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 94
                              },
                              "start": {
                                "column": 34,
                                "line": 94
                              }
                            }
                          }
                        ],
                        "range": [
                          2762,
                          2773
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 94
                          },
                          "start": {
                            "column": 33,
                            "line": 94
                          }
                        }
                      }
                    },
                    "range": [
                      2756,
                      2773
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 94
                      },
                      "start": {
                        "column": 27,
                        "line": 94
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 94
                        },
                        "start": {
                          "column": 47,
                          "line": 94
                        }
                      },
                      "range": [
                        2776,
                        2784
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2778,
                          2784
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 94
                          },
                          "start": {
                            "column": 49,
                            "line": 94
                          }
                        }
                      }
                    },
                    "range": [
                      2775,
                      2784
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 94
                      },
                      "start": {
                        "column": 46,
                        "line": 94
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 94
                    },
                    "start": {
                      "column": 57,
                      "line": 94
                    }
                  },
                  "range": [
                    2786,
                    2795
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2789,
                      2795
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 94
                      },
                      "start": {
                        "column": 60,
                        "line": 94
                      }
                    }
                  }
                },
                "range": [
                  2755,
                  2795
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 94
                  },
                  "start": {
                    "column": 26,
                    "line": 94
                  }
                }
              }
            },
            "range": [
              2733,
              2795
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "range": [
              2798,
              2816
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 94
              },
              "start": {
                "column": 69,
                "line": 94
              }
            }
          },
          "range": [
            2733,
            2816
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 94
            },
            "start": {
              "column": 4,
              "line": 94
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2729,
        2817
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
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
            "name": "anyToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 95
                },
                "start": {
                  "column": 18,
                  "line": 95
                }
              },
              "range": [
                2836,
                2880
              ],
              "typeAnnotation": {
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
                          "column": 40,
                          "line": 95
                        },
                        "start": {
                          "column": 25,
                          "line": 95
                        }
                      },
                      "range": [
                        2843,
                        2858
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                2847,
                                2848
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 95
                                },
                                "start": {
                                  "column": 29,
                                  "line": 95
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
                                  "line": 95
                                },
                                "start": {
                                  "column": 30,
                                  "line": 95
                                }
                              },
                              "range": [
                                2848,
                                2856
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  2850,
                                  2856
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 95
                                  }
                                }
                              }
                            },
                            "range": [
                              2847,
                              2856
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 95
                              },
                              "start": {
                                "column": 29,
                                "line": 95
                              }
                            }
                          }
                        ],
                        "range": [
                          2845,
                          2858
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 95
                          },
                          "start": {
                            "column": 27,
                            "line": 95
                          }
                        }
                      }
                    },
                    "range": [
                      2839,
                      2858
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 95
                      },
                      "start": {
                        "column": 21,
                        "line": 95
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 95
                        },
                        "start": {
                          "column": 43,
                          "line": 95
                        }
                      },
                      "range": [
                        2861,
                        2869
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2863,
                          2869
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 95
                          },
                          "start": {
                            "column": 45,
                            "line": 95
                          }
                        }
                      }
                    },
                    "range": [
                      2860,
                      2869
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 95
                      },
                      "start": {
                        "column": 42,
                        "line": 95
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 95
                    },
                    "start": {
                      "column": 53,
                      "line": 95
                    }
                  },
                  "range": [
                    2871,
                    2880
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2874,
                      2880
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 95
                      },
                      "start": {
                        "column": 56,
                        "line": 95
                      }
                    }
                  }
                },
                "range": [
                  2838,
                  2880
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 95
                  },
                  "start": {
                    "column": 20,
                    "line": 95
                  }
                }
              }
            },
            "range": [
              2822,
              2880
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2920,
                        2921
                      ],
                      "loc": {
                        "end": {
                          "column": 103,
                          "line": 95
                        },
                        "start": {
                          "column": 102,
                          "line": 95
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        2924,
                        2926
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 95
                        },
                        "start": {
                          "column": 106,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      2920,
                      2926
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 95
                      },
                      "start": {
                        "column": 102,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2913,
                    2927
                  ],
                  "loc": {
                    "end": {
                      "column": 109,
                      "line": 95
                    },
                    "start": {
                      "column": 95,
                      "line": 95
                    }
                  }
                }
              ],
              "range": [
                2911,
                2929
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 95
                },
                "start": {
                  "column": 93,
                  "line": 95
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 95
                    },
                    "start": {
                      "column": 75,
                      "line": 95
                    }
                  },
                  "range": [
                    2893,
                    2901
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2895,
                      2901
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 95
                      },
                      "start": {
                        "column": 77,
                        "line": 95
                      }
                    }
                  }
                },
                "range": [
                  2892,
                  2901
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 95
                  },
                  "start": {
                    "column": 74,
                    "line": 95
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 92,
                  "line": 95
                },
                "start": {
                  "column": 84,
                  "line": 95
                }
              },
              "range": [
                2902,
                2910
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2904,
                  2910
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 95
                  },
                  "start": {
                    "column": 86,
                    "line": 95
                  }
                }
              }
            },
            "range": [
              2883,
              2929
            ],
            "loc": {
              "end": {
                "column": 111,
                "line": 95
              },
              "start": {
                "column": 65,
                "line": 95
              }
            }
          },
          "range": [
            2822,
            2929
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 95
            },
            "start": {
              "column": 4,
              "line": 95
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2818,
        2930
      ],
      "loc": {
        "end": {
          "column": 112,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
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
            "name": "unspecifiedLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 97
                },
                "start": {
                  "column": 21,
                  "line": 97
                }
              },
              "range": [
                2953,
                2976
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 97
                        },
                        "start": {
                          "column": 25,
                          "line": 97
                        }
                      },
                      "range": [
                        2957,
                        2965
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2959,
                          2965
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 97
                          },
                          "start": {
                            "column": 27,
                            "line": 97
                          }
                        }
                      }
                    },
                    "range": [
                      2956,
                      2965
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 97
                      },
                      "start": {
                        "column": 24,
                        "line": 97
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 97
                    },
                    "start": {
                      "column": 35,
                      "line": 97
                    }
                  },
                  "range": [
                    2967,
                    2976
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2970,
                      2976
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 97
                      },
                      "start": {
                        "column": 38,
                        "line": 97
                      }
                    }
                  }
                },
                "range": [
                  2955,
                  2976
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 97
                  },
                  "start": {
                    "column": 23,
                    "line": 97
                  }
                }
              }
            },
            "range": [
              2936,
              2976
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2984,
                  2985
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 97
                  },
                  "start": {
                    "column": 52,
                    "line": 97
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "12",
                "value": 12,
                "range": [
                  2988,
                  2990
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 97
                  },
                  "start": {
                    "column": 56,
                    "line": 97
                  }
                }
              },
              "range": [
                2984,
                2990
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 97
                },
                "start": {
                  "column": 52,
                  "line": 97
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2979,
                  2980
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 97
                  },
                  "start": {
                    "column": 47,
                    "line": 97
                  }
                }
              }
            ],
            "range": [
              2979,
              2990
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 97
              },
              "start": {
                "column": 47,
                "line": 97
              }
            }
          },
          "range": [
            2936,
            2990
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 97
            },
            "start": {
              "column": 4,
              "line": 97
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2932,
        2991
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
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
            "name": "specifiedLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 98
                },
                "start": {
                  "column": 19,
                  "line": 98
                }
              },
              "range": [
                3011,
                3046
              ],
              "typeAnnotation": {
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
                          "column": 32,
                          "line": 98
                        },
                        "start": {
                          "column": 26,
                          "line": 98
                        }
                      },
                      "range": [
                        3018,
                        3024
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          3020,
                          3024
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 98
                          },
                          "start": {
                            "column": 28,
                            "line": 98
                          }
                        }
                      }
                    },
                    "range": [
                      3014,
                      3024
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 98
                      },
                      "start": {
                        "column": 22,
                        "line": 98
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 98
                        },
                        "start": {
                          "column": 35,
                          "line": 98
                        }
                      },
                      "range": [
                        3027,
                        3035
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3029,
                          3035
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 98
                          },
                          "start": {
                            "column": 37,
                            "line": 98
                          }
                        }
                      }
                    },
                    "range": [
                      3026,
                      3035
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 98
                      },
                      "start": {
                        "column": 34,
                        "line": 98
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 98
                    },
                    "start": {
                      "column": 45,
                      "line": 98
                    }
                  },
                  "range": [
                    3037,
                    3046
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      3040,
                      3046
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 98
                      },
                      "start": {
                        "column": 48,
                        "line": 98
                      }
                    }
                  }
                },
                "range": [
                  3013,
                  3046
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 98
                  },
                  "start": {
                    "column": 21,
                    "line": 98
                  }
                }
              }
            },
            "range": [
              2996,
              3046
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3054,
                  3055
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 98
                  },
                  "start": {
                    "column": 62,
                    "line": 98
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "12",
                "value": 12,
                "range": [
                  3058,
                  3060
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 98
                  },
                  "start": {
                    "column": 66,
                    "line": 98
                  }
                }
              },
              "range": [
                3054,
                3060
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 98
                },
                "start": {
                  "column": 62,
                  "line": 98
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  3049,
                  3050
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 98
                  },
                  "start": {
                    "column": 57,
                    "line": 98
                  }
                }
              }
            ],
            "range": [
              3049,
              3060
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 98
              },
              "start": {
                "column": 57,
                "line": 98
              }
            }
          },
          "range": [
            2996,
            3060
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 98
            },
            "start": {
              "column": 4,
              "line": 98
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2992,
        3061
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
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
            "name": "unspecifiedLambdaToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 74,
                  "line": 99
                },
                "start": {
                  "column": 32,
                  "line": 99
                }
              },
              "range": [
                3094,
                3136
              ],
              "typeAnnotation": {
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
                          "column": 52,
                          "line": 99
                        },
                        "start": {
                          "column": 39,
                          "line": 99
                        }
                      },
                      "range": [
                        3101,
                        3114
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                3104,
                                3105
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 99
                                },
                                "start": {
                                  "column": 42,
                                  "line": 99
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
                                  "column": 51,
                                  "line": 99
                                },
                                "start": {
                                  "column": 43,
                                  "line": 99
                                }
                              },
                              "range": [
                                3105,
                                3113
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3107,
                                  3113
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 99
                                  }
                                }
                              }
                            },
                            "range": [
                              3104,
                              3113
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 99
                              },
                              "start": {
                                "column": 42,
                                "line": 99
                              }
                            }
                          }
                        ],
                        "range": [
                          3103,
                          3114
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 99
                          },
                          "start": {
                            "column": 41,
                            "line": 99
                          }
                        }
                      }
                    },
                    "range": [
                      3097,
                      3114
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 99
                      },
                      "start": {
                        "column": 35,
                        "line": 99
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 99
                        },
                        "start": {
                          "column": 55,
                          "line": 99
                        }
                      },
                      "range": [
                        3117,
                        3125
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3119,
                          3125
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 99
                          },
                          "start": {
                            "column": 57,
                            "line": 99
                          }
                        }
                      }
                    },
                    "range": [
                      3116,
                      3125
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 99
                      },
                      "start": {
                        "column": 54,
                        "line": 99
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 99
                    },
                    "start": {
                      "column": 65,
                      "line": 99
                    }
                  },
                  "range": [
                    3127,
                    3136
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      3130,
                      3136
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 99
                      },
                      "start": {
                        "column": 68,
                        "line": 99
                      }
                    }
                  }
                },
                "range": [
                  3096,
                  3136
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 99
                  },
                  "start": {
                    "column": 34,
                    "line": 99
                  }
                }
              }
            },
            "range": [
              3066,
              3136
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "unspecifiedLambda",
            "optional": false,
            "range": [
              3139,
              3156
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 99
              },
              "start": {
                "column": 77,
                "line": 99
              }
            }
          },
          "range": [
            3066,
            3156
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 99
            },
            "start": {
              "column": 4,
              "line": 99
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3062,
        3157
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
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
            "name": "specifiedLambdaToSpecified",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 100
                },
                "start": {
                  "column": 30,
                  "line": 100
                }
              },
              "range": [
                3188,
                3230
              ],
              "typeAnnotation": {
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
                          "column": 50,
                          "line": 100
                        },
                        "start": {
                          "column": 37,
                          "line": 100
                        }
                      },
                      "range": [
                        3195,
                        3208
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                3198,
                                3199
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 100
                                },
                                "start": {
                                  "column": 40,
                                  "line": 100
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
                                  "column": 49,
                                  "line": 100
                                },
                                "start": {
                                  "column": 41,
                                  "line": 100
                                }
                              },
                              "range": [
                                3199,
                                3207
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3201,
                                  3207
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 100
                                  }
                                }
                              }
                            },
                            "range": [
                              3198,
                              3207
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 100
                              },
                              "start": {
                                "column": 40,
                                "line": 100
                              }
                            }
                          }
                        ],
                        "range": [
                          3197,
                          3208
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 100
                          },
                          "start": {
                            "column": 39,
                            "line": 100
                          }
                        }
                      }
                    },
                    "range": [
                      3191,
                      3208
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 100
                      },
                      "start": {
                        "column": 33,
                        "line": 100
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 100
                        },
                        "start": {
                          "column": 53,
                          "line": 100
                        }
                      },
                      "range": [
                        3211,
                        3219
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3213,
                          3219
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 100
                          },
                          "start": {
                            "column": 55,
                            "line": 100
                          }
                        }
                      }
                    },
                    "range": [
                      3210,
                      3219
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 100
                      },
                      "start": {
                        "column": 52,
                        "line": 100
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 100
                    },
                    "start": {
                      "column": 63,
                      "line": 100
                    }
                  },
                  "range": [
                    3221,
                    3230
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      3224,
                      3230
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 100
                      },
                      "start": {
                        "column": 66,
                        "line": 100
                      }
                    }
                  }
                },
                "range": [
                  3190,
                  3230
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 100
                  },
                  "start": {
                    "column": 32,
                    "line": 100
                  }
                }
              }
            },
            "range": [
              3162,
              3230
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "specifiedLambda",
            "optional": false,
            "range": [
              3233,
              3248
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 100
              },
              "start": {
                "column": 75,
                "line": 100
              }
            }
          },
          "range": [
            3162,
            3248
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 100
            },
            "start": {
              "column": 4,
              "line": 100
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3158,
        3249
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
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
            "name": "explicitCFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 103
                },
                "start": {
                  "column": 21,
                  "line": 103
                }
              },
              "range": [
                3273,
                3305
              ],
              "typeAnnotation": {
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
                          "column": 31,
                          "line": 103
                        },
                        "start": {
                          "column": 28,
                          "line": 103
                        }
                      },
                      "range": [
                        3280,
                        3283
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            3282,
                            3283
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 103
                            },
                            "start": {
                              "column": 30,
                              "line": 103
                            }
                          }
                        },
                        "range": [
                          3282,
                          3283
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 103
                          },
                          "start": {
                            "column": 30,
                            "line": 103
                          }
                        }
                      }
                    },
                    "range": [
                      3276,
                      3283
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 103
                      },
                      "start": {
                        "column": 24,
                        "line": 103
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 103
                        },
                        "start": {
                          "column": 34,
                          "line": 103
                        }
                      },
                      "range": [
                        3286,
                        3294
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3288,
                          3294
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 103
                          },
                          "start": {
                            "column": 36,
                            "line": 103
                          }
                        }
                      }
                    },
                    "range": [
                      3285,
                      3294
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 103
                      },
                      "start": {
                        "column": 33,
                        "line": 103
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 103
                    },
                    "start": {
                      "column": 44,
                      "line": 103
                    }
                  },
                  "range": [
                    3296,
                    3305
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      3299,
                      3305
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 103
                      },
                      "start": {
                        "column": 47,
                        "line": 103
                      }
                    }
                  }
                },
                "range": [
                  3275,
                  3305
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 103
                  },
                  "start": {
                    "column": 23,
                    "line": 103
                  }
                }
              }
            },
            "range": [
              3256,
              3305
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          },
          "init": null,
          "range": [
            3256,
            3305
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 103
            },
            "start": {
              "column": 4,
              "line": 103
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3252,
        3306
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 103
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
            "name": "explicitPropertyFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 104
                },
                "start": {
                  "column": 28,
                  "line": 104
                }
              },
              "range": [
                3335,
                3377
              ],
              "typeAnnotation": {
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
                          "column": 48,
                          "line": 104
                        },
                        "start": {
                          "column": 35,
                          "line": 104
                        }
                      },
                      "range": [
                        3342,
                        3355
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "range": [
                                3345,
                                3346
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 104
                                },
                                "start": {
                                  "column": 38,
                                  "line": 104
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
                                  "column": 47,
                                  "line": 104
                                },
                                "start": {
                                  "column": 39,
                                  "line": 104
                                }
                              },
                              "range": [
                                3346,
                                3354
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3348,
                                  3354
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 104
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 104
                                  }
                                }
                              }
                            },
                            "range": [
                              3345,
                              3354
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 104
                              },
                              "start": {
                                "column": 38,
                                "line": 104
                              }
                            }
                          }
                        ],
                        "range": [
                          3344,
                          3355
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 104
                          },
                          "start": {
                            "column": 37,
                            "line": 104
                          }
                        }
                      }
                    },
                    "range": [
                      3338,
                      3355
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 104
                      },
                      "start": {
                        "column": 31,
                        "line": 104
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 104
                        },
                        "start": {
                          "column": 51,
                          "line": 104
                        }
                      },
                      "range": [
                        3358,
                        3366
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3360,
                          3366
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 104
                          },
                          "start": {
                            "column": 53,
                            "line": 104
                          }
                        }
                      }
                    },
                    "range": [
                      3357,
                      3366
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 104
                      },
                      "start": {
                        "column": 50,
                        "line": 104
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 104
                    },
                    "start": {
                      "column": 61,
                      "line": 104
                    }
                  },
                  "range": [
                    3368,
                    3377
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      3371,
                      3377
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 104
                      },
                      "start": {
                        "column": 64,
                        "line": 104
                      }
                    }
                  }
                },
                "range": [
                  3337,
                  3377
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 104
                  },
                  "start": {
                    "column": 30,
                    "line": 104
                  }
                }
              }
            },
            "range": [
              3311,
              3377
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          "init": null,
          "range": [
            3311,
            3377
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 104
            },
            "start": {
              "column": 4,
              "line": 104
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        3307,
        3378
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3379,
              3380
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 105
              },
              "start": {
                "column": 0,
                "line": 105
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              3381,
              3390
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 105
              },
              "start": {
                "column": 2,
                "line": 105
              }
            }
          },
          "range": [
            3379,
            3390
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 105
            },
            "start": {
              "column": 0,
              "line": 105
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false,
          "range": [
            3393,
            3410
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 105
            },
            "start": {
              "column": 14,
              "line": 105
            }
          }
        },
        "range": [
          3379,
          3410
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 105
          },
          "start": {
            "column": 0,
            "line": 105
          }
        }
      },
      "range": [
        3379,
        3411
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3412,
              3413
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 106
              },
              "start": {
                "column": 0,
                "line": 106
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              3414,
              3423
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          },
          "range": [
            3412,
            3423
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 106
            },
            "start": {
              "column": 0,
              "line": 106
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        3464,
                        3468
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 106
                        },
                        "start": {
                          "column": 52,
                          "line": 106
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        3469,
                        3470
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 106
                        },
                        "start": {
                          "column": 57,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      3464,
                      3470
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 106
                      },
                      "start": {
                        "column": 52,
                        "line": 106
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      3473,
                      3474
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 106
                      },
                      "start": {
                        "column": 61,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    3464,
                    3474
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 106
                    },
                    "start": {
                      "column": 52,
                      "line": 106
                    }
                  }
                },
                "range": [
                  3457,
                  3474
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 106
                  },
                  "start": {
                    "column": 45,
                    "line": 106
                  }
                }
              }
            ],
            "range": [
              3455,
              3476
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 106
              },
              "start": {
                "column": 43,
                "line": 106
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 106
                  },
                  "start": {
                    "column": 27,
                    "line": 106
                  }
                },
                "range": [
                  3439,
                  3442
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      3441,
                      3442
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 106
                      },
                      "start": {
                        "column": 29,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    3441,
                    3442
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 106
                    },
                    "start": {
                      "column": 29,
                      "line": 106
                    }
                  }
                }
              },
              "range": [
                3435,
                3442
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 106
                },
                "start": {
                  "column": 23,
                  "line": 106
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 106
                  },
                  "start": {
                    "column": 33,
                    "line": 106
                  }
                },
                "range": [
                  3445,
                  3453
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    3447,
                    3453
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 106
                    },
                    "start": {
                      "column": 35,
                      "line": 106
                    }
                  }
                }
              },
              "range": [
                3444,
                3453
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 106
                },
                "start": {
                  "column": 32,
                  "line": 106
                }
              }
            }
          ],
          "range": [
            3426,
            3476
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 106
            },
            "start": {
              "column": 14,
              "line": 106
            }
          }
        },
        "range": [
          3412,
          3476
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 106
          },
          "start": {
            "column": 0,
            "line": 106
          }
        }
      },
      "range": [
        3412,
        3477
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 106
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3478,
              3479
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 107
              },
              "start": {
                "column": 0,
                "line": 107
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              3480,
              3496
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 107
              },
              "start": {
                "column": 2,
                "line": 107
              }
            }
          },
          "range": [
            3478,
            3496
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 107
            },
            "start": {
              "column": 0,
              "line": 107
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitPropertyFunction",
          "optional": false,
          "range": [
            3499,
            3523
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 107
            },
            "start": {
              "column": 21,
              "line": 107
            }
          }
        },
        "range": [
          3478,
          3523
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 107
          },
          "start": {
            "column": 0,
            "line": 107
          }
        }
      },
      "range": [
        3478,
        3524
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3525,
              3526
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 108
              },
              "start": {
                "column": 0,
                "line": 108
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              3527,
              3543
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 108
              },
              "start": {
                "column": 2,
                "line": 108
              }
            }
          },
          "range": [
            3525,
            3543
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 108
            },
            "start": {
              "column": 0,
              "line": 108
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        3594,
                        3598
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 108
                        },
                        "start": {
                          "column": 69,
                          "line": 108
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        3599,
                        3600
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 108
                        },
                        "start": {
                          "column": 74,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      3594,
                      3600
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 108
                      },
                      "start": {
                        "column": 69,
                        "line": 108
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      3603,
                      3604
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 108
                      },
                      "start": {
                        "column": 78,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    3594,
                    3604
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 108
                    },
                    "start": {
                      "column": 69,
                      "line": 108
                    }
                  }
                },
                "range": [
                  3587,
                  3604
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 108
                  },
                  "start": {
                    "column": 62,
                    "line": 108
                  }
                }
              }
            ],
            "range": [
              3585,
              3606
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 108
              },
              "start": {
                "column": 60,
                "line": 108
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 108
                  },
                  "start": {
                    "column": 34,
                    "line": 108
                  }
                },
                "range": [
                  3559,
                  3572
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          3562,
                          3563
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 108
                          },
                          "start": {
                            "column": 37,
                            "line": 108
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
                            "line": 108
                          },
                          "start": {
                            "column": 38,
                            "line": 108
                          }
                        },
                        "range": [
                          3563,
                          3571
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            3565,
                            3571
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 108
                            },
                            "start": {
                              "column": 40,
                              "line": 108
                            }
                          }
                        }
                      },
                      "range": [
                        3562,
                        3571
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 108
                        },
                        "start": {
                          "column": 37,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "range": [
                    3561,
                    3572
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 108
                    },
                    "start": {
                      "column": 36,
                      "line": 108
                    }
                  }
                }
              },
              "range": [
                3555,
                3572
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 108
                },
                "start": {
                  "column": 30,
                  "line": 108
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 108
                  },
                  "start": {
                    "column": 50,
                    "line": 108
                  }
                },
                "range": [
                  3575,
                  3583
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    3577,
                    3583
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 108
                    },
                    "start": {
                      "column": 52,
                      "line": 108
                    }
                  }
                }
              },
              "range": [
                3574,
                3583
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 108
                },
                "start": {
                  "column": 49,
                  "line": 108
                }
              }
            }
          ],
          "range": [
            3546,
            3606
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 108
            },
            "start": {
              "column": 21,
              "line": 108
            }
          }
        },
        "range": [
          3525,
          3606
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 108
          },
          "start": {
            "column": 0,
            "line": 108
          }
        }
      },
      "range": [
        3525,
        3607
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3608,
              3609
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 109
              },
              "start": {
                "column": 0,
                "line": 109
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              3610,
              3626
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 109
              },
              "start": {
                "column": 2,
                "line": 109
              }
            }
          },
          "range": [
            3608,
            3626
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 109
            },
            "start": {
              "column": 0,
              "line": 109
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "reconstructed",
            "optional": false,
            "range": [
              3629,
              3642
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 109
              },
              "start": {
                "column": 21,
                "line": 109
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              3643,
              3659
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 109
              },
              "start": {
                "column": 35,
                "line": 109
              }
            }
          },
          "range": [
            3629,
            3659
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 109
            },
            "start": {
              "column": 21,
              "line": 109
            }
          }
        },
        "range": [
          3608,
          3659
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 109
          },
          "start": {
            "column": 0,
            "line": 109
          }
        }
      },
      "range": [
        3608,
        3660
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 109
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3700,
              3701
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 112
              },
              "start": {
                "column": 0,
                "line": 112
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              3702,
              3711
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 112
              },
              "start": {
                "column": 2,
                "line": 112
              }
            }
          },
          "range": [
            3700,
            3711
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 112
            },
            "start": {
              "column": 0,
              "line": 112
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              3719,
              3720
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 112
              },
              "start": {
                "column": 19,
                "line": 112
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3714,
                3715
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 112
                },
                "start": {
                  "column": 14,
                  "line": 112
                }
              }
            }
          ],
          "range": [
            3714,
            3720
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 112
            },
            "start": {
              "column": 14,
              "line": 112
            }
          }
        },
        "range": [
          3700,
          3720
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 112
          },
          "start": {
            "column": 0,
            "line": 112
          }
        }
      },
      "range": [
        3700,
        3721
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 112
        },
        "start": {
          "column": 0,
          "line": 112
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3722,
              3723
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 113
              },
              "start": {
                "column": 0,
                "line": 113
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              3724,
              3736
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 113
              },
              "start": {
                "column": 2,
                "line": 113
              }
            }
          },
          "range": [
            3722,
            3736
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 113
            },
            "start": {
              "column": 0,
              "line": 113
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              3744,
              3745
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 113
              },
              "start": {
                "column": 22,
                "line": 113
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3739,
                3740
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 113
                },
                "start": {
                  "column": 17,
                  "line": 113
                }
              }
            }
          ],
          "range": [
            3739,
            3745
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 113
            },
            "start": {
              "column": 17,
              "line": 113
            }
          }
        },
        "range": [
          3722,
          3745
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 113
          },
          "start": {
            "column": 0,
            "line": 113
          }
        }
      },
      "range": [
        3722,
        3746
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3747,
              3748
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 114
              },
              "start": {
                "column": 0,
                "line": 114
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              3749,
              3765
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 114
              },
              "start": {
                "column": 2,
                "line": 114
              }
            }
          },
          "range": [
            3747,
            3765
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 114
            },
            "start": {
              "column": 0,
              "line": 114
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              3773,
              3774
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 114
              },
              "start": {
                "column": 26,
                "line": 114
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3768,
                3769
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 114
                },
                "start": {
                  "column": 21,
                  "line": 114
                }
              }
            }
          ],
          "range": [
            3768,
            3774
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 114
            },
            "start": {
              "column": 21,
              "line": 114
            }
          }
        },
        "range": [
          3747,
          3774
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 114
          },
          "start": {
            "column": 0,
            "line": 114
          }
        }
      },
      "range": [
        3747,
        3775
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 114
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3881,
              3882
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 118
              },
              "start": {
                "column": 0,
                "line": 118
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              3883,
              3892
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 118
              },
              "start": {
                "column": 2,
                "line": 118
              }
            }
          },
          "range": [
            3881,
            3892
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 118
            },
            "start": {
              "column": 0,
              "line": 118
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3900,
                3901
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 118
                },
                "start": {
                  "column": 19,
                  "line": 118
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  3904,
                  3908
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 118
                  },
                  "start": {
                    "column": 23,
                    "line": 118
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  3909,
                  3910
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 118
                  },
                  "start": {
                    "column": 28,
                    "line": 118
                  }
                }
              },
              "range": [
                3904,
                3910
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 118
                },
                "start": {
                  "column": 23,
                  "line": 118
                }
              }
            },
            "range": [
              3900,
              3910
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 118
              },
              "start": {
                "column": 19,
                "line": 118
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3895,
                3896
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 118
                },
                "start": {
                  "column": 14,
                  "line": 118
                }
              }
            }
          ],
          "range": [
            3895,
            3910
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 118
            },
            "start": {
              "column": 14,
              "line": 118
            }
          }
        },
        "range": [
          3881,
          3910
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 118
          },
          "start": {
            "column": 0,
            "line": 118
          }
        }
      },
      "range": [
        3881,
        3911
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3912,
              3913
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 119
              },
              "start": {
                "column": 0,
                "line": 119
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              3914,
              3926
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 119
              },
              "start": {
                "column": 2,
                "line": 119
              }
            }
          },
          "range": [
            3912,
            3926
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 119
            },
            "start": {
              "column": 0,
              "line": 119
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3934,
                3935
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 119
                },
                "start": {
                  "column": 22,
                  "line": 119
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  3938,
                  3942
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 119
                  },
                  "start": {
                    "column": 26,
                    "line": 119
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  3943,
                  3944
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 119
                  },
                  "start": {
                    "column": 31,
                    "line": 119
                  }
                }
              },
              "range": [
                3938,
                3944
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 119
                },
                "start": {
                  "column": 26,
                  "line": 119
                }
              }
            },
            "range": [
              3934,
              3944
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 119
              },
              "start": {
                "column": 22,
                "line": 119
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3929,
                3930
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 119
                },
                "start": {
                  "column": 17,
                  "line": 119
                }
              }
            }
          ],
          "range": [
            3929,
            3944
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 119
            },
            "start": {
              "column": 17,
              "line": 119
            }
          }
        },
        "range": [
          3912,
          3944
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 119
          },
          "start": {
            "column": 0,
            "line": 119
          }
        }
      },
      "range": [
        3912,
        3945
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              3946,
              3947
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 120
              },
              "start": {
                "column": 0,
                "line": 120
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              3948,
              3964
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 120
              },
              "start": {
                "column": 2,
                "line": 120
              }
            }
          },
          "range": [
            3946,
            3964
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 120
            },
            "start": {
              "column": 0,
              "line": 120
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3972,
                3973
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 120
                },
                "start": {
                  "column": 26,
                  "line": 120
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  3976,
                  3980
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 120
                  },
                  "start": {
                    "column": 30,
                    "line": 120
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  3981,
                  3982
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 120
                  },
                  "start": {
                    "column": 35,
                    "line": 120
                  }
                }
              },
              "range": [
                3976,
                3982
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 120
                },
                "start": {
                  "column": 30,
                  "line": 120
                }
              }
            },
            "range": [
              3972,
              3982
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 120
              },
              "start": {
                "column": 26,
                "line": 120
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3967,
                3968
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 120
                },
                "start": {
                  "column": 21,
                  "line": 120
                }
              }
            }
          ],
          "range": [
            3967,
            3982
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 120
            },
            "start": {
              "column": 21,
              "line": 120
            }
          }
        },
        "range": [
          3946,
          3982
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 120
          },
          "start": {
            "column": 0,
            "line": 120
          }
        }
      },
      "range": [
        3946,
        3983
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 120
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4015,
              4016
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 123
              },
              "start": {
                "column": 0,
                "line": 123
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              4017,
              4029
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 123
              },
              "start": {
                "column": 2,
                "line": 123
              }
            }
          },
          "range": [
            4015,
            4029
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 123
            },
            "start": {
              "column": 0,
              "line": 123
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false,
          "range": [
            4032,
            4049
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 123
            },
            "start": {
              "column": 17,
              "line": 123
            }
          }
        },
        "range": [
          4015,
          4049
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 123
          },
          "start": {
            "column": 0,
            "line": 123
          }
        }
      },
      "range": [
        4015,
        4050
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4051,
              4052
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 124
              },
              "start": {
                "column": 0,
                "line": 124
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              4053,
              4065
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 124
              },
              "start": {
                "column": 2,
                "line": 124
              }
            }
          },
          "range": [
            4051,
            4065
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 124
            },
            "start": {
              "column": 0,
              "line": 124
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        4106,
                        4110
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 124
                        },
                        "start": {
                          "column": 55,
                          "line": 124
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        4111,
                        4112
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 124
                        },
                        "start": {
                          "column": 60,
                          "line": 124
                        }
                      }
                    },
                    "range": [
                      4106,
                      4112
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 124
                      },
                      "start": {
                        "column": 55,
                        "line": 124
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      4115,
                      4116
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 124
                      },
                      "start": {
                        "column": 64,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    4106,
                    4116
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 124
                    },
                    "start": {
                      "column": 55,
                      "line": 124
                    }
                  }
                },
                "range": [
                  4099,
                  4116
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 124
                  },
                  "start": {
                    "column": 48,
                    "line": 124
                  }
                }
              }
            ],
            "range": [
              4097,
              4118
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 124
              },
              "start": {
                "column": 46,
                "line": 124
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 124
                  },
                  "start": {
                    "column": 30,
                    "line": 124
                  }
                },
                "range": [
                  4081,
                  4084
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      4083,
                      4084
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 124
                      },
                      "start": {
                        "column": 32,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    4083,
                    4084
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 124
                    },
                    "start": {
                      "column": 32,
                      "line": 124
                    }
                  }
                }
              },
              "range": [
                4077,
                4084
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 124
                },
                "start": {
                  "column": 26,
                  "line": 124
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 124
                  },
                  "start": {
                    "column": 36,
                    "line": 124
                  }
                },
                "range": [
                  4087,
                  4095
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4089,
                    4095
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 124
                    },
                    "start": {
                      "column": 38,
                      "line": 124
                    }
                  }
                }
              },
              "range": [
                4086,
                4095
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 124
                },
                "start": {
                  "column": 35,
                  "line": 124
                }
              }
            }
          ],
          "range": [
            4068,
            4118
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 124
            },
            "start": {
              "column": 17,
              "line": 124
            }
          }
        },
        "range": [
          4051,
          4118
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 124
          },
          "start": {
            "column": 0,
            "line": 124
          }
        }
      },
      "range": [
        4051,
        4119
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4147,
              4148
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 127
              },
              "start": {
                "column": 0,
                "line": 127
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              4149,
              4158
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 127
              },
              "start": {
                "column": 2,
                "line": 127
              }
            }
          },
          "range": [
            4147,
            4158
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 127
            },
            "start": {
              "column": 0,
              "line": 127
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        4182,
                        4186
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 127
                        },
                        "start": {
                          "column": 35,
                          "line": 127
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        4187,
                        4188
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 127
                        },
                        "start": {
                          "column": 40,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      4182,
                      4188
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 127
                      },
                      "start": {
                        "column": 35,
                        "line": 127
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      4191,
                      4192
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 127
                      },
                      "start": {
                        "column": 44,
                        "line": 127
                      }
                    }
                  },
                  "range": [
                    4182,
                    4192
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 127
                    },
                    "start": {
                      "column": 35,
                      "line": 127
                    }
                  }
                },
                "range": [
                  4175,
                  4192
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 127
                  },
                  "start": {
                    "column": 28,
                    "line": 127
                  }
                }
              }
            ],
            "range": [
              4173,
              4194
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 127
              },
              "start": {
                "column": 26,
                "line": 127
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
              "name": "m",
              "optional": false,
              "range": [
                4170,
                4171
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 127
                },
                "start": {
                  "column": 23,
                  "line": 127
                }
              }
            }
          ],
          "range": [
            4161,
            4194
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 127
            },
            "start": {
              "column": 14,
              "line": 127
            }
          }
        },
        "range": [
          4147,
          4194
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 127
          },
          "start": {
            "column": 0,
            "line": 127
          }
        }
      },
      "range": [
        4147,
        4195
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 127
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4196,
              4197
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 128
              },
              "start": {
                "column": 0,
                "line": 128
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "range": [
              4198,
              4214
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 128
              },
              "start": {
                "column": 2,
                "line": 128
              }
            }
          },
          "range": [
            4196,
            4214
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 128
            },
            "start": {
              "column": 0,
              "line": 128
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        4238,
                        4242
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 128
                        },
                        "start": {
                          "column": 42,
                          "line": 128
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        4243,
                        4244
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 128
                        },
                        "start": {
                          "column": 47,
                          "line": 128
                        }
                      }
                    },
                    "range": [
                      4238,
                      4244
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 128
                      },
                      "start": {
                        "column": 42,
                        "line": 128
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      4247,
                      4248
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 128
                      },
                      "start": {
                        "column": 51,
                        "line": 128
                      }
                    }
                  },
                  "range": [
                    4238,
                    4248
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 128
                    },
                    "start": {
                      "column": 42,
                      "line": 128
                    }
                  }
                },
                "range": [
                  4231,
                  4248
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 128
                  },
                  "start": {
                    "column": 35,
                    "line": 128
                  }
                }
              }
            ],
            "range": [
              4229,
              4250
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 128
              },
              "start": {
                "column": 33,
                "line": 128
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
              "name": "m",
              "optional": false,
              "range": [
                4226,
                4227
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 128
                },
                "start": {
                  "column": 30,
                  "line": 128
                }
              }
            }
          ],
          "range": [
            4217,
            4250
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 128
            },
            "start": {
              "column": 21,
              "line": 128
            }
          }
        },
        "range": [
          4196,
          4250
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 128
          },
          "start": {
            "column": 0,
            "line": 128
          }
        }
      },
      "range": [
        4196,
        4251
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4252,
              4253
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 129
              },
              "start": {
                "column": 0,
                "line": 129
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              4254,
              4266
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 129
              },
              "start": {
                "column": 2,
                "line": 129
              }
            }
          },
          "range": [
            4252,
            4266
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 129
            },
            "start": {
              "column": 0,
              "line": 129
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        4290,
                        4294
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 129
                        },
                        "start": {
                          "column": 38,
                          "line": 129
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        4295,
                        4296
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 129
                        },
                        "start": {
                          "column": 43,
                          "line": 129
                        }
                      }
                    },
                    "range": [
                      4290,
                      4296
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 129
                      },
                      "start": {
                        "column": 38,
                        "line": 129
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      4299,
                      4300
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 129
                      },
                      "start": {
                        "column": 47,
                        "line": 129
                      }
                    }
                  },
                  "range": [
                    4290,
                    4300
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 129
                    },
                    "start": {
                      "column": 38,
                      "line": 129
                    }
                  }
                },
                "range": [
                  4283,
                  4300
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 129
                  },
                  "start": {
                    "column": 31,
                    "line": 129
                  }
                }
              }
            ],
            "range": [
              4281,
              4302
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 129
              },
              "start": {
                "column": 29,
                "line": 129
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
              "name": "m",
              "optional": false,
              "range": [
                4278,
                4279
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 129
                },
                "start": {
                  "column": 26,
                  "line": 129
                }
              }
            }
          ],
          "range": [
            4269,
            4302
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 129
            },
            "start": {
              "column": 17,
              "line": 129
            }
          }
        },
        "range": [
          4252,
          4302
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 129
          },
          "start": {
            "column": 0,
            "line": 129
          }
        }
      },
      "range": [
        4252,
        4303
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4332,
              4333
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 132
              },
              "start": {
                "column": 0,
                "line": 132
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "range": [
              4334,
              4346
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 132
              },
              "start": {
                "column": 2,
                "line": 132
              }
            }
          },
          "range": [
            4332,
            4346
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 132
            },
            "start": {
              "column": 0,
              "line": 132
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        4376,
                        4380
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 132
                        },
                        "start": {
                          "column": 44,
                          "line": 132
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        4381,
                        4382
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 132
                        },
                        "start": {
                          "column": 49,
                          "line": 132
                        }
                      }
                    },
                    "range": [
                      4376,
                      4382
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 132
                      },
                      "start": {
                        "column": 44,
                        "line": 132
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      4385,
                      4386
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 132
                      },
                      "start": {
                        "column": 53,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    4376,
                    4386
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 132
                    },
                    "start": {
                      "column": 44,
                      "line": 132
                    }
                  }
                },
                "range": [
                  4369,
                  4386
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 132
                  },
                  "start": {
                    "column": 37,
                    "line": 132
                  }
                }
              }
            ],
            "range": [
              4367,
              4388
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 132
              },
              "start": {
                "column": 35,
                "line": 132
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
              "name": "this",
              "optional": false,
              "range": [
                4358,
                4362
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 132
                },
                "start": {
                  "column": 26,
                  "line": 132
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                4364,
                4365
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 132
                },
                "start": {
                  "column": 32,
                  "line": 132
                }
              }
            }
          ],
          "range": [
            4349,
            4388
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 132
            },
            "start": {
              "column": 17,
              "line": 132
            }
          }
        },
        "range": [
          4332,
          4388
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 132
          },
          "start": {
            "column": 0,
            "line": 132
          }
        }
      },
      "range": [
        4332,
        4389
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 132
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4425,
              4426
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 135
              },
              "start": {
                "column": 0,
                "line": 135
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "range": [
              4427,
              4436
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 135
              },
              "start": {
                "column": 2,
                "line": 135
              }
            }
          },
          "range": [
            4425,
            4436
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 135
            },
            "start": {
              "column": 0,
              "line": 135
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        4477,
                        4481
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 135
                        },
                        "start": {
                          "column": 52,
                          "line": 135
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        4482,
                        4483
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 135
                        },
                        "start": {
                          "column": 57,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      4477,
                      4483
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 135
                      },
                      "start": {
                        "column": 52,
                        "line": 135
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      4486,
                      4487
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 135
                      },
                      "start": {
                        "column": 61,
                        "line": 135
                      }
                    }
                  },
                  "range": [
                    4477,
                    4487
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 135
                    },
                    "start": {
                      "column": 52,
                      "line": 135
                    }
                  }
                },
                "range": [
                  4470,
                  4487
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 135
                  },
                  "start": {
                    "column": 45,
                    "line": 135
                  }
                }
              }
            ],
            "range": [
              4468,
              4489
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 135
              },
              "start": {
                "column": 43,
                "line": 135
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 135
                  },
                  "start": {
                    "column": 27,
                    "line": 135
                  }
                },
                "range": [
                  4452,
                  4455
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      4454,
                      4455
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 135
                      },
                      "start": {
                        "column": 29,
                        "line": 135
                      }
                    }
                  },
                  "range": [
                    4454,
                    4455
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 135
                    },
                    "start": {
                      "column": 29,
                      "line": 135
                    }
                  }
                }
              },
              "range": [
                4448,
                4455
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 135
                },
                "start": {
                  "column": 23,
                  "line": 135
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 135
                  },
                  "start": {
                    "column": 33,
                    "line": 135
                  }
                },
                "range": [
                  4458,
                  4466
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4460,
                    4466
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 135
                    },
                    "start": {
                      "column": 35,
                      "line": 135
                    }
                  }
                }
              },
              "range": [
                4457,
                4466
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 135
                },
                "start": {
                  "column": 32,
                  "line": 135
                }
              }
            }
          ],
          "range": [
            4439,
            4489
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 135
            },
            "start": {
              "column": 14,
              "line": 135
            }
          }
        },
        "range": [
          4425,
          4489
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 135
          },
          "start": {
            "column": 0,
            "line": 135
          }
        }
      },
      "range": [
        4425,
        4490
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 135
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              4519,
              4520
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 138
              },
              "start": {
                "column": 0,
                "line": 138
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "range": [
              4521,
              4533
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 138
              },
              "start": {
                "column": 2,
                "line": 138
              }
            }
          },
          "range": [
            4519,
            4533
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 138
            },
            "start": {
              "column": 0,
              "line": 138
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              4541,
              4542
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 138
              },
              "start": {
                "column": 22,
                "line": 138
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                4536,
                4537
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 138
                },
                "start": {
                  "column": 17,
                  "line": 138
                }
              }
            }
          ],
          "range": [
            4536,
            4542
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 138
            },
            "start": {
              "column": 17,
              "line": 138
            }
          }
        },
        "range": [
          4519,
          4542
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 138
          },
          "start": {
            "column": 0,
            "line": 138
          }
        }
      },
      "range": [
        4519,
        4543
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 138
        },
        "start": {
          "column": 0,
          "line": 138
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4586,
          4814
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
              "name": "x",
              "optional": false,
              "range": [
                4592,
                4593
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 142
                },
                "start": {
                  "column": 4,
                  "line": 142
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 142
                },
                "start": {
                  "column": 5,
                  "line": 142
                }
              },
              "range": [
                4593,
                4601
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  4595,
                  4601
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 142
                  },
                  "start": {
                    "column": 7,
                    "line": 142
                  }
                }
              }
            },
            "value": null,
            "range": [
              4592,
              4602
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 142
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
              "name": "polymorphic",
              "optional": false,
              "range": [
                4614,
                4625
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 143
                },
                "start": {
                  "column": 11,
                  "line": 143
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
                4625,
                4664
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          4655,
                          4659
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 143
                          },
                          "start": {
                            "column": 52,
                            "line": 143
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
                          4660,
                          4661
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 143
                          },
                          "start": {
                            "column": 57,
                            "line": 143
                          }
                        }
                      },
                      "range": [
                        4655,
                        4661
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 143
                        },
                        "start": {
                          "column": 52,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      4648,
                      4662
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 143
                      },
                      "start": {
                        "column": 45,
                        "line": 143
                      }
                    }
                  }
                ],
                "range": [
                  4646,
                  4664
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 143
                  },
                  "start": {
                    "column": 43,
                    "line": 143
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 143
                      },
                      "start": {
                        "column": 27,
                        "line": 143
                      }
                    },
                    "range": [
                      4630,
                      4636
                    ],
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "range": [
                        4632,
                        4636
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 143
                        },
                        "start": {
                          "column": 29,
                          "line": 143
                        }
                      }
                    }
                  },
                  "range": [
                    4626,
                    4636
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 143
                    },
                    "start": {
                      "column": 23,
                      "line": 143
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 143
                  },
                  "start": {
                    "column": 34,
                    "line": 143
                  }
                },
                "range": [
                  4637,
                  4645
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4639,
                    4645
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 143
                    },
                    "start": {
                      "column": 36,
                      "line": 143
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 61,
                  "line": 143
                },
                "start": {
                  "column": 22,
                  "line": 143
                }
              }
            },
            "range": [
              4607,
              4664
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "range": [
                4669,
                4677
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 144
                },
                "start": {
                  "column": 4,
                  "line": 144
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
                4677,
                4717
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          4708,
                          4712
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 144
                          },
                          "start": {
                            "column": 43,
                            "line": 144
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
                          4713,
                          4714
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 144
                          },
                          "start": {
                            "column": 48,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        4708,
                        4714
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 144
                        },
                        "start": {
                          "column": 43,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      4701,
                      4715
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 144
                      },
                      "start": {
                        "column": 36,
                        "line": 144
                      }
                    }
                  }
                ],
                "range": [
                  4699,
                  4717
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 144
                  },
                  "start": {
                    "column": 34,
                    "line": 144
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 144
                      },
                      "start": {
                        "column": 17,
                        "line": 144
                      }
                    },
                    "range": [
                      4682,
                      4689
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "range": [
                          4684,
                          4689
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 144
                          },
                          "start": {
                            "column": 19,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        4684,
                        4689
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 144
                        },
                        "start": {
                          "column": 19,
                          "line": 144
                        }
                      }
                    }
                  },
                  "range": [
                    4678,
                    4689
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 144
                    },
                    "start": {
                      "column": 13,
                      "line": 144
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 144
                  },
                  "start": {
                    "column": 25,
                    "line": 144
                  }
                },
                "range": [
                  4690,
                  4698
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4692,
                    4698
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 144
                    },
                    "start": {
                      "column": 27,
                      "line": 144
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 52,
                  "line": 144
                },
                "start": {
                  "column": 12,
                  "line": 144
                }
              }
            },
            "range": [
              4669,
              4717
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 144
              },
              "start": {
                "column": 4,
                "line": 144
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitStatic",
              "optional": false,
              "range": [
                4729,
                4743
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 145
                },
                "start": {
                  "column": 11,
                  "line": 145
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
                4743,
                4790
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          4781,
                          4785
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 145
                          },
                          "start": {
                            "column": 63,
                            "line": 145
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          4786,
                          4787
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 145
                          },
                          "start": {
                            "column": 68,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        4781,
                        4787
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 145
                        },
                        "start": {
                          "column": 63,
                          "line": 145
                        }
                      }
                    },
                    "range": [
                      4774,
                      4788
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 145
                      },
                      "start": {
                        "column": 56,
                        "line": 145
                      }
                    }
                  }
                ],
                "range": [
                  4772,
                  4790
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 145
                  },
                  "start": {
                    "column": 54,
                    "line": 145
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 145
                      },
                      "start": {
                        "column": 30,
                        "line": 145
                      }
                    },
                    "range": [
                      4748,
                      4762
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "range": [
                          4757,
                          4762
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 145
                          },
                          "start": {
                            "column": 39,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        4750,
                        4762
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 145
                        },
                        "start": {
                          "column": 32,
                          "line": 145
                        }
                      }
                    }
                  },
                  "range": [
                    4744,
                    4762
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 145
                    },
                    "start": {
                      "column": 26,
                      "line": 145
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 145
                  },
                  "start": {
                    "column": 45,
                    "line": 145
                  }
                },
                "range": [
                  4763,
                  4771
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4765,
                    4771
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 145
                    },
                    "start": {
                      "column": 47,
                      "line": 145
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 72,
                  "line": 145
                },
                "start": {
                  "column": 25,
                  "line": 145
                }
              }
            },
            "range": [
              4722,
              4790
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 145
              },
              "start": {
                "column": 4,
                "line": 145
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                4802,
                4803
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 146
                },
                "start": {
                  "column": 11,
                  "line": 146
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 146
                },
                "start": {
                  "column": 12,
                  "line": 146
                }
              },
              "range": [
                4803,
                4811
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  4805,
                  4811
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 146
                  },
                  "start": {
                    "column": 14,
                    "line": 146
                  }
                }
              }
            },
            "value": null,
            "range": [
              4795,
              4812
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 146
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 147
          },
          "start": {
            "column": 12,
            "line": 141
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "range": [
          4580,
          4585
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 141
          },
          "start": {
            "column": 6,
            "line": 141
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        4574,
        4814
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4844,
          4861
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
              "name": "y",
              "optional": false,
              "range": [
                4850,
                4851
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 149
                },
                "start": {
                  "column": 4,
                  "line": 149
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 149
                },
                "start": {
                  "column": 5,
                  "line": 149
                }
              },
              "range": [
                4851,
                4859
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  4853,
                  4859
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 149
                  },
                  "start": {
                    "column": 7,
                    "line": 149
                  }
                }
              }
            },
            "value": null,
            "range": [
              4850,
              4859
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 149
              },
              "start": {
                "column": 4,
                "line": 149
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 150
          },
          "start": {
            "column": 29,
            "line": 148
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "range": [
          4821,
          4829
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 148
          },
          "start": {
            "column": 6,
            "line": 148
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "range": [
          4838,
          4843
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 148
          },
          "start": {
            "column": 23,
            "line": 148
          }
        }
      },
      "range": [
        4815,
        4861
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 150
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          4874,
          4999
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
              "name": "y",
              "optional": false,
              "range": [
                4880,
                4881
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 152
                },
                "start": {
                  "column": 4,
                  "line": 152
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 152
                },
                "start": {
                  "column": 5,
                  "line": 152
                }
              },
              "range": [
                4881,
                4889
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  4883,
                  4889
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 152
                  },
                  "start": {
                    "column": 7,
                    "line": 152
                  }
                }
              }
            },
            "value": null,
            "range": [
              4880,
              4889
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "polymorphic",
              "optional": false,
              "range": [
                4894,
                4905
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 153
                },
                "start": {
                  "column": 4,
                  "line": 153
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
                4905,
                4944
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          4935,
                          4939
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 153
                          },
                          "start": {
                            "column": 45,
                            "line": 153
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          4940,
                          4941
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 153
                          },
                          "start": {
                            "column": 50,
                            "line": 153
                          }
                        }
                      },
                      "range": [
                        4935,
                        4941
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 153
                        },
                        "start": {
                          "column": 45,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      4928,
                      4942
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 153
                      },
                      "start": {
                        "column": 38,
                        "line": 153
                      }
                    }
                  }
                ],
                "range": [
                  4926,
                  4944
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 153
                  },
                  "start": {
                    "column": 36,
                    "line": 153
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 153
                      },
                      "start": {
                        "column": 20,
                        "line": 153
                      }
                    },
                    "range": [
                      4910,
                      4916
                    ],
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "range": [
                        4912,
                        4916
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 153
                        },
                        "start": {
                          "column": 22,
                          "line": 153
                        }
                      }
                    }
                  },
                  "range": [
                    4906,
                    4916
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 153
                    },
                    "start": {
                      "column": 16,
                      "line": 153
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 153
                  },
                  "start": {
                    "column": 27,
                    "line": 153
                  }
                },
                "range": [
                  4917,
                  4925
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4919,
                    4925
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 153
                    },
                    "start": {
                      "column": 29,
                      "line": 153
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 54,
                  "line": 153
                },
                "start": {
                  "column": 15,
                  "line": 153
                }
              }
            },
            "range": [
              4894,
              4944
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "range": [
                4949,
                4957
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 154
                },
                "start": {
                  "column": 4,
                  "line": 154
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
                4957,
                4997
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          4988,
                          4992
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 154
                          },
                          "start": {
                            "column": 43,
                            "line": 154
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
                          4993,
                          4994
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 154
                          },
                          "start": {
                            "column": 48,
                            "line": 154
                          }
                        }
                      },
                      "range": [
                        4988,
                        4994
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 154
                        },
                        "start": {
                          "column": 43,
                          "line": 154
                        }
                      }
                    },
                    "range": [
                      4981,
                      4995
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 154
                      },
                      "start": {
                        "column": 36,
                        "line": 154
                      }
                    }
                  }
                ],
                "range": [
                  4979,
                  4997
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 154
                  },
                  "start": {
                    "column": 34,
                    "line": 154
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 154
                      },
                      "start": {
                        "column": 17,
                        "line": 154
                      }
                    },
                    "range": [
                      4962,
                      4969
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "range": [
                          4964,
                          4969
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 154
                          },
                          "start": {
                            "column": 19,
                            "line": 154
                          }
                        }
                      },
                      "range": [
                        4964,
                        4969
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 154
                        },
                        "start": {
                          "column": 19,
                          "line": 154
                        }
                      }
                    }
                  },
                  "range": [
                    4958,
                    4969
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 154
                    },
                    "start": {
                      "column": 13,
                      "line": 154
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 154
                  },
                  "start": {
                    "column": 25,
                    "line": 154
                  }
                },
                "range": [
                  4970,
                  4978
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    4972,
                    4978
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 154
                    },
                    "start": {
                      "column": 27,
                      "line": 154
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 52,
                  "line": 154
                },
                "start": {
                  "column": 12,
                  "line": 154
                }
              }
            },
            "range": [
              4949,
              4997
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 154
              },
              "start": {
                "column": 4,
                "line": 154
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 155
          },
          "start": {
            "column": 12,
            "line": 151
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          4868,
          4873
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 151
          },
          "start": {
            "column": 6,
            "line": 151
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        4862,
        4999
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 155
        },
        "start": {
          "column": 0,
          "line": 151
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          5029,
          5046
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
              "name": "x",
              "optional": false,
              "range": [
                5035,
                5036
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 157
                },
                "start": {
                  "column": 4,
                  "line": 157
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 157
                },
                "start": {
                  "column": 5,
                  "line": 157
                }
              },
              "range": [
                5036,
                5044
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  5038,
                  5044
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 157
                  },
                  "start": {
                    "column": 7,
                    "line": 157
                  }
                }
              }
            },
            "value": null,
            "range": [
              5035,
              5044
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 29,
            "line": 156
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          5006,
          5014
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 156
          },
          "start": {
            "column": 6,
            "line": 156
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          5023,
          5028
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 156
          },
          "start": {
            "column": 23,
            "line": 156
          }
        }
      },
      "range": [
        5000,
        5046
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 156
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
            "name": "b1",
            "optional": false,
            "range": [
              5051,
              5053
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base1",
              "optional": false,
              "range": [
                5060,
                5065
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 159
                },
                "start": {
                  "column": 13,
                  "line": 159
                }
              }
            },
            "range": [
              5056,
              5067
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 159
              },
              "start": {
                "column": 9,
                "line": 159
              }
            }
          },
          "range": [
            5051,
            5067
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 159
            },
            "start": {
              "column": 4,
              "line": 159
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5047,
        5068
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 159
        },
        "start": {
          "column": 0,
          "line": 159
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
            "name": "b2",
            "optional": false,
            "range": [
              5073,
              5075
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 160
              },
              "start": {
                "column": 4,
                "line": 160
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                5082,
                5087
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 160
                },
                "start": {
                  "column": 13,
                  "line": 160
                }
              }
            },
            "range": [
              5078,
              5089
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 160
              },
              "start": {
                "column": 9,
                "line": 160
              }
            }
          },
          "range": [
            5073,
            5089
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 160
            },
            "start": {
              "column": 4,
              "line": 160
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5069,
        5090
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 160
        },
        "start": {
          "column": 0,
          "line": 160
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
            "name": "d1",
            "optional": false,
            "range": [
              5095,
              5097
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived1",
              "optional": false,
              "range": [
                5104,
                5112
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 161
                },
                "start": {
                  "column": 13,
                  "line": 161
                }
              }
            },
            "range": [
              5100,
              5114
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 161
              },
              "start": {
                "column": 9,
                "line": 161
              }
            }
          },
          "range": [
            5095,
            5114
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 161
            },
            "start": {
              "column": 4,
              "line": 161
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5091,
        5115
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 161
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
            "name": "d2",
            "optional": false,
            "range": [
              5120,
              5122
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "range": [
                5129,
                5137
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 162
                },
                "start": {
                  "column": 13,
                  "line": 162
                }
              }
            },
            "range": [
              5125,
              5139
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 162
              },
              "start": {
                "column": 9,
                "line": 162
              }
            }
          },
          "range": [
            5120,
            5139
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 162
            },
            "start": {
              "column": 4,
              "line": 162
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5116,
        5140
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 162
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "range": [
              5141,
              5143
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 163
              },
              "start": {
                "column": 0,
                "line": 163
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5144,
              5155
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 163
              },
              "start": {
                "column": 3,
                "line": 163
              }
            }
          },
          "range": [
            5141,
            5155
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 163
            },
            "start": {
              "column": 0,
              "line": 163
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "range": [
              5158,
              5160
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 163
              },
              "start": {
                "column": 17,
                "line": 163
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5161,
              5172
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 163
              },
              "start": {
                "column": 20,
                "line": 163
              }
            }
          },
          "range": [
            5158,
            5172
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 163
            },
            "start": {
              "column": 17,
              "line": 163
            }
          }
        },
        "range": [
          5141,
          5172
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 163
          },
          "start": {
            "column": 0,
            "line": 163
          }
        }
      },
      "range": [
        5141,
        5172
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 163
        },
        "start": {
          "column": 0,
          "line": 163
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "range": [
              5204,
              5206
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 164
              },
              "start": {
                "column": 0,
                "line": 164
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5207,
              5218
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 164
              },
              "start": {
                "column": 3,
                "line": 164
              }
            }
          },
          "range": [
            5204,
            5218
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 164
            },
            "start": {
              "column": 0,
              "line": 164
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "range": [
              5221,
              5223
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 164
              },
              "start": {
                "column": 17,
                "line": 164
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5224,
              5235
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 164
              },
              "start": {
                "column": 20,
                "line": 164
              }
            }
          },
          "range": [
            5221,
            5235
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 164
            },
            "start": {
              "column": 17,
              "line": 164
            }
          }
        },
        "range": [
          5204,
          5235
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 164
          },
          "start": {
            "column": 0,
            "line": 164
          }
        }
      },
      "range": [
        5204,
        5235
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 164
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "range": [
              5296,
              5298
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 167
              },
              "start": {
                "column": 0,
                "line": 167
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5299,
              5310
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 167
              },
              "start": {
                "column": 3,
                "line": 167
              }
            }
          },
          "range": [
            5296,
            5310
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 167
            },
            "start": {
              "column": 0,
              "line": 167
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "range": [
              5313,
              5315
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 167
              },
              "start": {
                "column": 17,
                "line": 167
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5316,
              5327
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 167
              },
              "start": {
                "column": 20,
                "line": 167
              }
            }
          },
          "range": [
            5313,
            5327
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 167
            },
            "start": {
              "column": 17,
              "line": 167
            }
          }
        },
        "range": [
          5296,
          5327
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 167
          },
          "start": {
            "column": 0,
            "line": 167
          }
        }
      },
      "range": [
        5296,
        5327
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 167
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "range": [
              5354,
              5356
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 168
              },
              "start": {
                "column": 0,
                "line": 168
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5357,
              5368
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 168
              },
              "start": {
                "column": 3,
                "line": 168
              }
            }
          },
          "range": [
            5354,
            5368
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 168
            },
            "start": {
              "column": 0,
              "line": 168
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "range": [
              5371,
              5373
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 168
              },
              "start": {
                "column": 17,
                "line": 168
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "range": [
              5374,
              5382
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 168
              },
              "start": {
                "column": 20,
                "line": 168
              }
            }
          },
          "range": [
            5371,
            5382
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 168
            },
            "start": {
              "column": 17,
              "line": 168
            }
          }
        },
        "range": [
          5354,
          5382
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 168
          },
          "start": {
            "column": 0,
            "line": 168
          }
        }
      },
      "range": [
        5354,
        5382
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 168
        },
        "start": {
          "column": 0,
          "line": 168
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "range": [
              5406,
              5408
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 169
              },
              "start": {
                "column": 0,
                "line": 169
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5409,
              5420
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 169
              },
              "start": {
                "column": 3,
                "line": 169
              }
            }
          },
          "range": [
            5406,
            5420
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 169
            },
            "start": {
              "column": 0,
              "line": 169
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "range": [
              5423,
              5425
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 169
              },
              "start": {
                "column": 17,
                "line": 169
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5426,
              5437
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 169
              },
              "start": {
                "column": 20,
                "line": 169
              }
            }
          },
          "range": [
            5423,
            5437
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 169
            },
            "start": {
              "column": 17,
              "line": 169
            }
          }
        },
        "range": [
          5406,
          5437
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 169
          },
          "start": {
            "column": 0,
            "line": 169
          }
        }
      },
      "range": [
        5406,
        5437
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 169
        },
        "start": {
          "column": 0,
          "line": 169
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "range": [
              5477,
              5479
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 170
              },
              "start": {
                "column": 0,
                "line": 170
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "range": [
              5480,
              5488
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 170
              },
              "start": {
                "column": 3,
                "line": 170
              }
            }
          },
          "range": [
            5477,
            5488
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 170
            },
            "start": {
              "column": 0,
              "line": 170
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "range": [
              5491,
              5493
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 170
              },
              "start": {
                "column": 14,
                "line": 170
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "range": [
              5494,
              5505
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 170
              },
              "start": {
                "column": 17,
                "line": 170
              }
            }
          },
          "range": [
            5491,
            5505
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 170
            },
            "start": {
              "column": 14,
              "line": 170
            }
          }
        },
        "range": [
          5477,
          5505
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 170
          },
          "start": {
            "column": 0,
            "line": 170
          }
        }
      },
      "range": [
        5477,
        5505
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 170
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
                    5636,
                    5640
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 174
                    },
                    "start": {
                      "column": 4,
                      "line": 174
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    5641,
                    5642
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 174
                    },
                    "start": {
                      "column": 9,
                      "line": 174
                    }
                  }
                },
                "range": [
                  5636,
                  5642
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 174
                  },
                  "start": {
                    "column": 4,
                    "line": 174
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "12",
                "value": 12,
                "range": [
                  5645,
                  5647
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 174
                  },
                  "start": {
                    "column": 13,
                    "line": 174
                  }
                }
              },
              "range": [
                5636,
                5647
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 174
                },
                "start": {
                  "column": 4,
                  "line": 174
                }
              }
            },
            "range": [
              5636,
              5648
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          }
        ],
        "range": [
          5630,
          5650
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 175
          },
          "start": {
            "column": 32,
            "line": 173
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceThis",
        "optional": false,
        "range": [
          5607,
          5620
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 173
          },
          "start": {
            "column": 9,
            "line": 173
          }
        }
      },
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
                "column": 30,
                "line": 173
              },
              "start": {
                "column": 27,
                "line": 173
              }
            },
            "range": [
              5625,
              5628
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "range": [
                  5627,
                  5628
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 173
                  },
                  "start": {
                    "column": 29,
                    "line": 173
                  }
                }
              },
              "range": [
                5627,
                5628
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 173
                },
                "start": {
                  "column": 29,
                  "line": 173
                }
              }
            }
          },
          "range": [
            5621,
            5628
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 173
            },
            "start": {
              "column": 23,
              "line": 173
            }
          }
        }
      ],
      "range": [
        5598,
        5650
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 173
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
                    5701,
                    5705
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 177
                    },
                    "start": {
                      "column": 4,
                      "line": 177
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
                    5706,
                    5707
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 177
                    },
                    "start": {
                      "column": 9,
                      "line": 177
                    }
                  }
                },
                "range": [
                  5701,
                  5707
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 177
                  },
                  "start": {
                    "column": 4,
                    "line": 177
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"ok\"",
                "value": "ok",
                "range": [
                  5710,
                  5714
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 177
                  },
                  "start": {
                    "column": 13,
                    "line": 177
                  }
                }
              },
              "range": [
                5701,
                5714
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 177
                },
                "start": {
                  "column": 4,
                  "line": 177
                }
              }
            },
            "range": [
              5701,
              5715
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 177
              },
              "start": {
                "column": 4,
                "line": 177
              }
            }
          }
        ],
        "range": [
          5695,
          5717
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 178
          },
          "start": {
            "column": 44,
            "line": 176
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralTypeThis",
        "optional": false,
        "range": [
          5660,
          5675
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 176
          },
          "start": {
            "column": 9,
            "line": 176
          }
        }
      },
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
                "column": 42,
                "line": 176
              },
              "start": {
                "column": 29,
                "line": 176
              }
            },
            "range": [
              5680,
              5693
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      5683,
                      5684
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 176
                      },
                      "start": {
                        "column": 32,
                        "line": 176
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
                        "column": 41,
                        "line": 176
                      },
                      "start": {
                        "column": 33,
                        "line": 176
                      }
                    },
                    "range": [
                      5684,
                      5692
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        5686,
                        5692
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 176
                        },
                        "start": {
                          "column": 35,
                          "line": 176
                        }
                      }
                    }
                  },
                  "range": [
                    5683,
                    5692
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 176
                    },
                    "start": {
                      "column": 32,
                      "line": 176
                    }
                  }
                }
              ],
              "range": [
                5682,
                5693
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 176
                },
                "start": {
                  "column": 31,
                  "line": 176
                }
              }
            }
          },
          "range": [
            5676,
            5693
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 176
            },
            "start": {
              "column": 25,
              "line": 176
            }
          }
        }
      ],
      "range": [
        5651,
        5717
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 176
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
                    5752,
                    5756
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 180
                    },
                    "start": {
                      "column": 4,
                      "line": 180
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
                    5757,
                    5758
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 180
                    },
                    "start": {
                      "column": 9,
                      "line": 180
                    }
                  }
                },
                "range": [
                  5752,
                  5758
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 180
                  },
                  "start": {
                    "column": 4,
                    "line": 180
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"ok\"",
                "value": "ok",
                "range": [
                  5761,
                  5765
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 180
                  },
                  "start": {
                    "column": 13,
                    "line": 180
                  }
                }
              },
              "range": [
                5752,
                5765
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 180
                },
                "start": {
                  "column": 4,
                  "line": 180
                }
              }
            },
            "range": [
              5752,
              5766
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 180
              },
              "start": {
                "column": 4,
                "line": 180
              }
            }
          }
        ],
        "range": [
          5746,
          5768
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 181
          },
          "start": {
            "column": 28,
            "line": 179
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyThis",
        "optional": false,
        "range": [
          5727,
          5734
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 179
          },
          "start": {
            "column": 9,
            "line": 179
          }
        }
      },
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
                "column": 26,
                "line": 179
              },
              "start": {
                "column": 21,
                "line": 179
              }
            },
            "range": [
              5739,
              5744
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                5741,
                5744
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 179
                },
                "start": {
                  "column": 23,
                  "line": 179
                }
              }
            }
          },
          "range": [
            5735,
            5744
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 179
            },
            "start": {
              "column": 17,
              "line": 179
            }
          }
        }
      ],
      "range": [
        5718,
        5768
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 181
        },
        "start": {
          "column": 0,
          "line": 179
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
            "name": "interfaceThis",
            "optional": false,
            "range": [
              5773,
              5786
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 182
              },
              "start": {
                "column": 4,
                "line": 182
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "InterfaceThis",
              "optional": false,
              "range": [
                5793,
                5806
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 182
                },
                "start": {
                  "column": 24,
                  "line": 182
                }
              }
            },
            "range": [
              5789,
              5808
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 182
              },
              "start": {
                "column": 20,
                "line": 182
              }
            }
          },
          "range": [
            5773,
            5808
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 182
            },
            "start": {
              "column": 4,
              "line": 182
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5769,
        5809
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 182
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
            "name": "literalTypeThis",
            "optional": false,
            "range": [
              5814,
              5829
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 183
              },
              "start": {
                "column": 4,
                "line": 183
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "LiteralTypeThis",
              "optional": false,
              "range": [
                5836,
                5851
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 183
                },
                "start": {
                  "column": 26,
                  "line": 183
                }
              }
            },
            "range": [
              5832,
              5853
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 183
              },
              "start": {
                "column": 22,
                "line": 183
              }
            }
          },
          "range": [
            5814,
            5853
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 183
            },
            "start": {
              "column": 4,
              "line": 183
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5810,
        5854
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 183
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
            "name": "anyThis",
            "optional": false,
            "range": [
              5859,
              5866
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 184
              },
              "start": {
                "column": 4,
                "line": 184
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyThis",
              "optional": false,
              "range": [
                5873,
                5880
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 184
                },
                "start": {
                  "column": 18,
                  "line": 184
                }
              }
            },
            "range": [
              5869,
              5882
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 184
              },
              "start": {
                "column": 14,
                "line": 184
              }
            }
          },
          "range": [
            5859,
            5882
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 184
            },
            "start": {
              "column": 4,
              "line": 184
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        5855,
        5883
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 184
        },
        "start": {
          "column": 0,
          "line": 184
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 190
                },
                "start": {
                  "column": 13,
                  "line": 187
                }
              },
              "range": [
                5933,
                6046
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                              "column": 15,
                              "line": 188
                            },
                            "start": {
                              "column": 9,
                              "line": 188
                            }
                          },
                          "range": [
                            5947,
                            5953
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              5949,
                              5953
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 188
                              },
                              "start": {
                                "column": 11,
                                "line": 188
                              }
                            }
                          }
                        },
                        "range": [
                          5943,
                          5953
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 188
                          },
                          "start": {
                            "column": 5,
                            "line": 188
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 188
                            },
                            "start": {
                              "column": 18,
                              "line": 188
                            }
                          },
                          "range": [
                            5956,
                            5964
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              5958,
                              5964
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 188
                              },
                              "start": {
                                "column": 20,
                                "line": 188
                              }
                            }
                          }
                        },
                        "range": [
                          5955,
                          5964
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 188
                          },
                          "start": {
                            "column": 17,
                            "line": 188
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 188
                        },
                        "start": {
                          "column": 27,
                          "line": 188
                        }
                      },
                      "range": [
                        5965,
                        5973
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          5967,
                          5973
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 188
                          },
                          "start": {
                            "column": 29,
                            "line": 188
                          }
                        }
                      }
                    },
                    "range": [
                      5942,
                      5974
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 188
                      },
                      "start": {
                        "column": 4,
                        "line": 188
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "range": [
                        5980,
                        5984
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 189
                        },
                        "start": {
                          "column": 4,
                          "line": 189
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
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
                              "column": 43,
                              "line": 189
                            },
                            "start": {
                              "column": 16,
                              "line": 189
                            }
                          },
                          "range": [
                            5992,
                            6019
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [
                              {
                                "type": "RestElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "argArray",
                                  "optional": false,
                                  "range": [
                                    5998,
                                    6006
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 189
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 189
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 189
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 189
                                    }
                                  },
                                  "range": [
                                    6006,
                                    6013
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        6008,
                                        6011
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 189
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 189
                                        }
                                      }
                                    },
                                    "range": [
                                      6008,
                                      6013
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 189
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 189
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  5995,
                                  6013
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 189
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 189
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 189
                                },
                                "start": {
                                  "column": 39,
                                  "line": 189
                                }
                              },
                              "range": [
                                6015,
                                6019
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    6018,
                                    6019
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 189
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 189
                                    }
                                  }
                                },
                                "range": [
                                  6018,
                                  6019
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 189
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 189
                                  }
                                }
                              }
                            },
                            "range": [
                              5994,
                              6019
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 189
                              },
                              "start": {
                                "column": 18,
                                "line": 189
                              }
                            }
                          }
                        },
                        "range": [
                          5988,
                          6019
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 189
                          },
                          "start": {
                            "column": 12,
                            "line": 189
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "range": [
                            6024,
                            6032
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 189
                            },
                            "start": {
                              "column": 48,
                              "line": 189
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 189
                            },
                            "start": {
                              "column": 56,
                              "line": 189
                            }
                          },
                          "range": [
                            6032,
                            6039
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                6034,
                                6037
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 189
                                },
                                "start": {
                                  "column": 58,
                                  "line": 189
                                }
                              }
                            },
                            "range": [
                              6034,
                              6039
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 189
                              },
                              "start": {
                                "column": 58,
                                "line": 189
                              }
                            }
                          }
                        },
                        "range": [
                          6021,
                          6039
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 189
                          },
                          "start": {
                            "column": 45,
                            "line": 189
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 189
                        },
                        "start": {
                          "column": 64,
                          "line": 189
                        }
                      },
                      "range": [
                        6040,
                        6043
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            6042,
                            6043
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 189
                            },
                            "start": {
                              "column": 66,
                              "line": 189
                            }
                          }
                        },
                        "range": [
                          6042,
                          6043
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 189
                          },
                          "start": {
                            "column": 66,
                            "line": 189
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 189
                        },
                        "start": {
                          "column": 8,
                          "line": 189
                        }
                      },
                      "range": [
                        5984,
                        5987
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              5985,
                              5986
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 189
                              },
                              "start": {
                                "column": 9,
                                "line": 189
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            5985,
                            5986
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 189
                            },
                            "start": {
                              "column": 9,
                              "line": 189
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      5980,
                      6044
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 189
                      },
                      "start": {
                        "column": 4,
                        "line": 189
                      }
                    }
                  }
                ],
                "range": [
                  5935,
                  6046
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 190
                  },
                  "start": {
                    "column": 15,
                    "line": 187
                  }
                }
              }
            },
            "range": [
              5932,
              6046
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 190
              },
              "start": {
                "column": 12,
                "line": 187
              }
            }
          },
          "init": null,
          "range": [
            5932,
            6046
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 190
            },
            "start": {
              "column": 12,
              "line": 187
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        5920,
        6047
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 190
        },
        "start": {
          "column": 0,
          "line": 187
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 191
                },
                "start": {
                  "column": 5,
                  "line": 191
                }
              },
              "range": [
                6053,
                6061
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  6055,
                  6061
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 191
                  },
                  "start": {
                    "column": 7,
                    "line": 191
                  }
                }
              }
            },
            "range": [
              6052,
              6061
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 191
              },
              "start": {
                "column": 4,
                "line": 191
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "12",
                "value": 12,
                "range": [
                  6071,
                  6073
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 191
                  },
                  "start": {
                    "column": 23,
                    "line": 191
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
                "name": "f",
                "optional": false,
                "range": [
                  6064,
                  6065
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 191
                  },
                  "start": {
                    "column": 16,
                    "line": 191
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "range": [
                  6066,
                  6070
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 191
                  },
                  "start": {
                    "column": 18,
                    "line": 191
                  }
                }
              },
              "range": [
                6064,
                6070
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 191
                },
                "start": {
                  "column": 16,
                  "line": 191
                }
              }
            },
            "optional": false,
            "range": [
              6064,
              6074
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 191
              },
              "start": {
                "column": 16,
                "line": 191
              }
            }
          },
          "range": [
            6052,
            6074
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 191
            },
            "start": {
              "column": 4,
              "line": 191
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        6048,
        6075
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 191
        },
        "start": {
          "column": 0,
          "line": 191
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    6137,
                    6141
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 193
                    },
                    "start": {
                      "column": 60,
                      "line": 193
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "range": [
                    6142,
                    6150
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 193
                    },
                    "start": {
                      "column": 65,
                      "line": 193
                    }
                  }
                },
                "range": [
                  6137,
                  6150
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 193
                  },
                  "start": {
                    "column": 60,
                    "line": 193
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  6153,
                  6154
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 193
                  },
                  "start": {
                    "column": 76,
                    "line": 193
                  }
                }
              },
              "range": [
                6137,
                6154
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 193
                },
                "start": {
                  "column": 60,
                  "line": 193
                }
              }
            },
            "range": [
              6130,
              6155
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 193
              },
              "start": {
                "column": 53,
                "line": 193
              }
            }
          }
        ],
        "range": [
          6128,
          6157
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 193
          },
          "start": {
            "column": 51,
            "line": 193
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "missingTypeIsImplicitAny",
        "optional": false,
        "range": [
          6086,
          6110
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 193
          },
          "start": {
            "column": 9,
            "line": 193
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "range": [
            6111,
            6115
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 193
            },
            "start": {
              "column": 34,
              "line": 193
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 193
              },
              "start": {
                "column": 41,
                "line": 193
              }
            },
            "range": [
              6118,
              6126
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                6120,
                6126
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 193
                },
                "start": {
                  "column": 43,
                  "line": 193
                }
              }
            }
          },
          "range": [
            6117,
            6126
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 193
            },
            "start": {
              "column": 40,
              "line": 193
            }
          }
        }
      ],
      "range": [
        6077,
        6157
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 193
        },
        "start": {
          "column": 0,
          "line": 193
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 194
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
