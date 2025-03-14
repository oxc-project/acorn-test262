__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    382
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
              11,
              39
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
                      22,
                      23
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "'hello world'",
                    "value": "hello world",
                    "range": [
                      26,
                      39
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
                  },
                  "range": [
                    22,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                18,
                39
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              40,
              126
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  59,
                  126
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        69,
                        80
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
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
                        80,
                        120
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          117,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 4
                          },
                          "start": {
                            "column": 56,
                            "line": 4
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 4
                                },
                                "start": {
                                  "column": 28,
                                  "line": 4
                                }
                              },
                              "range": [
                                89,
                                97
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  91,
                                  97
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 4
                                  }
                                }
                              }
                            },
                            "range": [
                              88,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 4
                              },
                              "start": {
                                "column": 27,
                                "line": 4
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            81,
                            97
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 4
                                },
                                "start": {
                                  "column": 46,
                                  "line": 4
                                }
                              },
                              "range": [
                                107,
                                115
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  109,
                                  115
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 4
                                  }
                                }
                              }
                            },
                            "range": [
                              106,
                              115
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 4
                              },
                              "start": {
                                "column": 45,
                                "line": 4
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            99,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 4
                            },
                            "start": {
                              "column": 38,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      69,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  53,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                47,
                126
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              131,
              220
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
                      157,
                      214
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          177,
                          214
                        ],
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                191,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 8
                                },
                                "start": {
                                  "column": 12,
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
                                  "column": 24,
                                  "line": 8
                                },
                                "start": {
                                  "column": 16,
                                  "line": 8
                                }
                              },
                              "range": [
                                195,
                                203
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  197,
                                  203
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              191,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 9
                          },
                          "start": {
                            "column": 28,
                            "line": 7
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "range": [
                          174,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 25,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        164,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  147,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  145,
                  146
                ],
                "decorators": [],
                "name": "B",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "kind": "module",
              "range": [
                138,
                220
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          9,
          222
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 9,
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
          8
        ],
        "decorators": [],
        "name": "A",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
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
        222
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 1
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
              238,
              258
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  252,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  256,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 13
                  }
                }
              },
              "range": [
                245,
                258
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          232,
          260
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          230,
          231
        ],
        "decorators": [],
        "name": "C",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
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
        223,
        260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
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
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              },
              "range": [
                267,
                275
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  269,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              266,
              275
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                "name": "C",
                "optional": false,
                "range": [
                  278,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
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
                  280,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              },
              "range": [
                278,
                281
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 16
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
                282,
                283
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "range": [
              278,
              283
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 16
              },
              "start": {
                "column": 16,
                "line": 16
              }
            }
          },
          "range": [
            266,
            283
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        262,
        284
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                290,
                317
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
                        294,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 17
                        },
                        "start": {
                          "column": 9,
                          "line": 17
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
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      },
                      "range": [
                        295,
                        303
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          297,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      294,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        305,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
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
                          "column": 29,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      },
                      "range": [
                        306,
                        314
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          308,
                          314
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 17
                          },
                          "start": {
                            "column": 23,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      305,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  292,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              289,
              317
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  334,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 17
                  },
                  "start": {
                    "column": 49,
                    "line": 17
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  337,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 17
                  },
                  "start": {
                    "column": 52,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    324,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 17
                    },
                    "start": {
                      "column": 39,
                      "line": 17
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
                    326,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 17
                    },
                    "start": {
                      "column": 41,
                      "line": 17
                    }
                  }
                },
                "range": [
                  324,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 17
                  },
                  "start": {
                    "column": 39,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  328,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 17
                  },
                  "start": {
                    "column": 43,
                    "line": 17
                  }
                }
              },
              "range": [
                324,
                333
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 17
                },
                "start": {
                  "column": 39,
                  "line": 17
                }
              }
            },
            "range": [
              320,
              339
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 17
              },
              "start": {
                "column": 35,
                "line": 17
              }
            }
          },
          "range": [
            289,
            339
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        285,
        340
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                346,
                364
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        350,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 18
                        },
                        "start": {
                          "column": 9,
                          "line": 18
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
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      },
                      "range": [
                        354,
                        362
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          356,
                          362
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      350,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  348,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              345,
              364
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            345,
            364
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        341,
        365
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              },
              "range": [
                371,
                381
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          373,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 19
                          },
                          "start": {
                            "column": 7,
                            "line": 19
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          375,
                          376
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 19
                          },
                          "start": {
                            "column": 9,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        373,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 19
                        },
                        "start": {
                          "column": 7,
                          "line": 19
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        377,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 19
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      373,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 19
                      },
                      "start": {
                        "column": 7,
                        "line": 19
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "range": [
                      379,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 19
                      },
                      "start": {
                        "column": 13,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    373,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 7,
                      "line": 19
                    }
                  }
                },
                "range": [
                  373,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 7,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              370,
              381
            ],
            "loc": {
              "end": {
                "column": 15,
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
            370,
            381
          ],
          "loc": {
            "end": {
              "column": 15,
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
      "kind": "var",
      "range": [
        366,
        382
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 16,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
