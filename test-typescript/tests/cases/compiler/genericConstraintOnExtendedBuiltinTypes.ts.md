__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    484
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
              29,
              86
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  57,
                  86
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Clone",
                      "optional": false,
                      "range": [
                        67,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
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
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      },
                      "range": [
                        74,
                        79
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          76,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 17,
                            "line": 3
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      67,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
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
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ICloneable",
                "optional": false,
                "range": [
                  46,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "range": [
                36,
                86
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
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
          }
        ],
        "range": [
          23,
          88
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          15,
          22
        ],
        "decorators": [],
        "name": "EndGate",
        "optional": false,
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        88
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
          134,
          137
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 47,
            "line": 7
          },
          "start": {
            "column": 44,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "EndGate",
              "optional": false,
              "range": [
                115,
                122
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICloneable",
              "optional": false,
              "range": [
                123,
                133
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              }
            },
            "range": [
              115,
              133
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 7
              }
            }
          },
          "range": [
            115,
            133
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "range": [
          100,
          106
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        90,
        137
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
              169,
              324
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  209,
                  324
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_from",
                      "optional": false,
                      "range": [
                        227,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
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
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 21,
                          "line": 11
                        }
                      },
                      "range": [
                        232,
                        235
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            234,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 11
                            },
                            "start": {
                              "column": 23,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          234,
                          235
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 23,
                            "line": 11
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      219,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
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
                        247,
                        258
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
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
                        258,
                        318
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
                                    282,
                                    286
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "range": [
                                    287,
                                    292
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  282,
                                  292
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 15
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false,
                                    "range": [
                                      295,
                                      299
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "range": [
                                      300,
                                      305
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "range": [
                                    295,
                                    305
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  295,
                                  307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                282,
                                307
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              282,
                              308
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          268,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 29,
                            "line": 14
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
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 14
                              },
                              "start": {
                                "column": 24,
                                "line": 14
                              }
                            },
                            "range": [
                              263,
                              266
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  265,
                                  266
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                265,
                                266
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 14
                                },
                                "start": {
                                  "column": 26,
                                  "line": 14
                                }
                              }
                            }
                          },
                          "range": [
                            259,
                            266
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 19,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      247,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 44,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "range": [
                  182,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                },
                "range": [
                  187,
                  209
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
                        "name": "ICloneable",
                        "optional": false,
                        "range": [
                          198,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 10
                          },
                          "start": {
                            "column": 33,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        198,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 33,
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
                        188,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 10
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      188,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  }
                ]
              },
              "range": [
                176,
                324
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          163,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 24,
            "line": 9
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          146,
          162
        ],
        "left": {
          "type": "Identifier",
          "range": [
            146,
            153
          ],
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            154,
            162
          ],
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "kind": "module",
      "range": [
        139,
        326
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
              358,
              482
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  404,
                  482
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        414,
                        425
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
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
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        425,
                        476
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "from",
                                  "optional": false,
                                  "range": [
                                    460,
                                    464
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 23
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "range": [
                                  454,
                                  459
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
                              },
                              "optional": false,
                              "range": [
                                454,
                                465
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 23
                                },
                                "start": {
                                  "column": 12,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              454,
                              466
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 23
                              },
                              "start": {
                                "column": 12,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "range": [
                          440,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 24
                          },
                          "start": {
                            "column": 34,
                            "line": 22
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
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 22
                              },
                              "start": {
                                "column": 24,
                                "line": 22
                              }
                            },
                            "range": [
                              430,
                              438
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                432,
                                438
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 22
                                },
                                "start": {
                                  "column": 26,
                                  "line": 22
                                }
                              }
                            }
                          },
                          "range": [
                            426,
                            438
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 24
                        },
                        "start": {
                          "column": 19,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      414,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 50,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberTween",
                "optional": false,
                "range": [
                  371,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "range": [
                  391,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 21
                  },
                  "start": {
                    "column": 37,
                    "line": 21
                  }
                }
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  396,
                  404
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      397,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 21
                      },
                      "start": {
                        "column": 43,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 21
                  },
                  "start": {
                    "column": 42,
                    "line": 21
                  }
                }
              },
              "range": [
                365,
                482
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          352,
          484
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 24,
            "line": 20
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          335,
          351
        ],
        "left": {
          "type": "Identifier",
          "range": [
            335,
            342
          ],
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 20
            },
            "start": {
              "column": 7,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            343,
            351
          ],
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "loc": {
            "end": {
              "column": 23,
              "line": 20
            },
            "start": {
              "column": 15,
              "line": 20
            }
          }
        },
        "loc": {
          "end": {
            "column": 23,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "kind": "module",
      "range": [
        328,
        484
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
