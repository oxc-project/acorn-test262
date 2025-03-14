__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    62,
    514
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          77,
          93
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                79,
                82
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
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                82,
                90
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  84,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              79,
              91
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          72,
          76
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        62,
        93
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          125,
          141
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                127,
                130
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
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
                  "column": 44,
                  "line": 4
                },
                "start": {
                  "column": 36,
                  "line": 4
                }
              },
              "range": [
                130,
                138
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 4
                  },
                  "start": {
                    "column": 38,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              127,
              139
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 33,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              120,
              124
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          },
          "range": [
            120,
            124
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 26,
              "line": 4
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          104,
          111
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        94,
        141
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          177,
          193
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                179,
                182
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 37,
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
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              },
              "range": [
                182,
                190
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              179,
              191
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "range": [
              169,
              176
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          },
          "range": [
            169,
            176
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          152,
          160
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        142,
        193
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 5
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                200,
                203
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    202,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  202,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              199,
              203
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            199,
            203
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        195,
        204
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                211,
                237
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          },
                          "range": [
                            217,
                            225
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              219,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 8
                              },
                              "start": {
                                "column": 14,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          216,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
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
                        226,
                        234
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          228,
                          234
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
                      215,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  213,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              209,
              237
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            209,
            237
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        205,
        237
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            238,
            239
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "range": [
            242,
            244
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "range": [
          238,
          244
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        238,
        245
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "range": [
            255,
            257
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            260,
            261
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 5,
              "line": 10
            }
          }
        },
        "range": [
          255,
          261
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        255,
        262
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                322,
                353
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 14
                          },
                          "start": {
                            "column": 10,
                            "line": 14
                          }
                        },
                        "range": [
                          334,
                          342
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            336,
                            342
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        333,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    },
                    "range": [
                      343,
                      346
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          345,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        345,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 14
                        },
                        "start": {
                          "column": 21,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    332,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
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
                  "line": 15
                },
                "start": {
                  "column": 31,
                  "line": 13
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                301,
                302
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              },
              "range": [
                302,
                321
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
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        313,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 13
                        },
                        "start": {
                          "column": 22,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      313,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 22,
                        "line": 13
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
                      303,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    303,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                }
              ]
            },
            "range": [
              295,
              353
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
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 18
                            },
                            "start": {
                              "column": 13,
                              "line": 18
                            }
                          },
                          "range": [
                            411,
                            417
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                414,
                                417
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
                                      415,
                                      416
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "range": [
                                    415,
                                    416
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 18
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 18
                                },
                                "start": {
                                  "column": 16,
                                  "line": 18
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                413,
                                414
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 18
                                },
                                "start": {
                                  "column": 15,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              413,
                              417
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 15,
                                "line": 18
                              }
                            }
                          }
                        },
                        "range": [
                          410,
                          417
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        410,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    406,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 19
                            },
                            "start": {
                              "column": 13,
                              "line": 19
                            }
                          },
                          "range": [
                            432,
                            458
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 19
                                        }
                                      },
                                      "range": [
                                        438,
                                        446
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          440,
                                          446
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 19
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      437,
                                      446
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 19
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 19
                                    }
                                  },
                                  "range": [
                                    447,
                                    455
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      449,
                                      455
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 19
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  436,
                                  456
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "range": [
                              434,
                              458
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 19
                              },
                              "start": {
                                "column": 15,
                                "line": 19
                              }
                            }
                          }
                        },
                        "range": [
                          431,
                          458
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        431,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    427,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        467,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        471,
                        472
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 12,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      467,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    467,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        491,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        495,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      491,
                      496
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
                  "range": [
                    491,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                396,
                512
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 38,
                  "line": 17
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                371,
                374
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              },
              "range": [
                374,
                393
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
                      "name": "Derived",
                      "optional": false,
                      "range": [
                        385,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      385,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
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
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    375,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                }
              ]
            },
            "range": [
              362,
              512
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          289,
          514
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 16,
            "line": 12
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          280,
          288
        ],
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "loc": {
          "end": {
            "column": 15,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "kind": "module",
      "range": [
        273,
        514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
