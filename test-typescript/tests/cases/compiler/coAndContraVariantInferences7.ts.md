__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    481
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Request",
        "optional": false,
        "range": [
          5,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "range": [
                43,
                48
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                48,
                66
              ],
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"query\"",
                    "value": "query",
                    "range": [
                      58,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    58,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSchema",
                    "optional": false,
                    "range": [
                      50,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    50,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  }
                },
                "range": [
                  50,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              43,
              67
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          39,
          69
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 39,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          36
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
                "name": "Schema",
                "optional": false,
                "range": [
                  29,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 29,
                    "line": 1
                  }
                }
              },
              "range": [
                29,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "range": [
                13,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        70
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "range": [
          77,
          83
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "query",
              "optional": false,
              "range": [
                88,
                93
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              },
              "range": [
                94,
                103
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  96,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              88,
              104
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "body",
              "optional": false,
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 33,
                  "line": 5
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              },
              "range": [
                110,
                119
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  112,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 40,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              105,
              119
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 33,
                "line": 5
              }
            }
          }
        ],
        "range": [
          86,
          121
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        }
      },
      "range": [
        72,
        122
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "route",
        "optional": false,
        "range": [
          141,
          146
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 50,
                "line": 7
              }
            },
            "range": [
              174,
              270
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
                    "name": "pre",
                    "optional": false,
                    "range": [
                      180,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 2,
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
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 5,
                        "line": 8
                      }
                    },
                    "range": [
                      183,
                      205
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 8
                              },
                              "start": {
                                "column": 9,
                                "line": 8
                              }
                            },
                            "range": [
                              187,
                              196
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TSchema",
                                "optional": false,
                                "range": [
                                  189,
                                  196
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                189,
                                196
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 8
                                },
                                "start": {
                                  "column": 11,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            186,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 20,
                            "line": 8
                          }
                        },
                        "range": [
                          198,
                          205
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            201,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
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
                        185,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 7,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    180,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 2,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "schema",
                    "optional": false,
                    "range": [
                      209,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 9
                      },
                      "start": {
                        "column": 2,
                        "line": 9
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
                        "column": 17,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    },
                    "range": [
                      215,
                      224
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TSchema",
                        "optional": false,
                        "range": [
                          217,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 10,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        217,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    209,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "handle",
                    "optional": false,
                    "range": [
                      228,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 10
                      },
                      "start": {
                        "column": 2,
                        "line": 10
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
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    },
                    "range": [
                      234,
                      267
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "req",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 10
                              },
                              "start": {
                                "column": 14,
                                "line": 10
                              }
                            },
                            "range": [
                              240,
                              258
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  249,
                                  258
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TSchema",
                                      "optional": false,
                                      "range": [
                                        250,
                                        257
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      250,
                                      257
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 10
                                      }
                                    }
                                  }
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
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Request",
                                "optional": false,
                                "range": [
                                  242,
                                  249
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                242,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 10
                                },
                                "start": {
                                  "column": 16,
                                  "line": 10
                                }
                              }
                            }
                          },
                          "range": [
                            237,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 10
                            },
                            "start": {
                              "column": 11,
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
                            "column": 34,
                            "line": 10
                          }
                        },
                        "range": [
                          260,
                          267
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            263,
                            267
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 10
                            },
                            "start": {
                              "column": 37,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        236,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    228,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 10
                    },
                    "start": {
                      "column": 2,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                176,
                270
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 52,
                  "line": 7
                }
              }
            }
          },
          "range": [
            171,
            270
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 47,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 2,
            "line": 11
          }
        },
        "range": [
          271,
          277
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            273,
            277
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        },
        "range": [
          146,
          170
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
                "name": "Schema",
                "optional": false,
                "range": [
                  163,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                }
              },
              "range": [
                163,
                169
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 39,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TSchema",
              "optional": false,
              "range": [
                147,
                154
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              147,
              169
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        124,
        278
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 11
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
            "name": "validate",
            "optional": false,
            "range": [
              286,
              294
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                341,
                343
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 13
                },
                "start": {
                  "column": 61,
                  "line": 13
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 13
                    },
                    "start": {
                      "column": 19,
                      "line": 13
                    }
                  },
                  "range": [
                    299,
                    336
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
                          "name": "query",
                          "optional": false,
                          "range": [
                            303,
                            308
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 13
                            },
                            "start": {
                              "column": 23,
                              "line": 13
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 13
                            },
                            "start": {
                              "column": 29,
                              "line": 13
                            }
                          },
                          "range": [
                            309,
                            318
                          ],
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              311,
                              318
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
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
                          303,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "body",
                          "optional": false,
                          "range": [
                            320,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 13
                            },
                            "start": {
                              "column": 40,
                              "line": 13
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 13
                            },
                            "start": {
                              "column": 45,
                              "line": 13
                            }
                          },
                          "range": [
                            325,
                            334
                          ],
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              327,
                              334
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 13
                              },
                              "start": {
                                "column": 47,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          320,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 13
                          },
                          "start": {
                            "column": 40,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      301,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  }
                },
                "range": [
                  298,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              297,
              343
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 13
              },
              "start": {
                "column": 17,
                "line": 13
              }
            }
          },
          "range": [
            286,
            343
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        280,
        344
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pre",
                  "optional": false,
                  "range": [
                    356,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 2,
                      "line": 16
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
                  "name": "validate",
                  "optional": false,
                  "range": [
                    361,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  356,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "range": [
                    373,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 17
                    },
                    "start": {
                      "column": 2,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "range": [
                          387,
                          392
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 18
                          },
                          "start": {
                            "column": 4,
                            "line": 18
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"\"",
                        "value": "",
                        "range": [
                          394,
                          396
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 18
                          },
                          "start": {
                            "column": 11,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        387,
                        396
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 18
                        },
                        "start": {
                          "column": 4,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    381,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "range": [
                  373,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 19
                  },
                  "start": {
                    "column": 2,
                    "line": 17
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handle",
                  "optional": false,
                  "range": [
                    405,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 20
                    },
                    "start": {
                      "column": 2,
                      "line": 20
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
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 21
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
                                      "column": 22,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 21
                                    }
                                  }
                                }
                              },
                              "range": [
                                434,
                                446
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 21
                                },
                                "start": {
                                  "column": 10,
                                  "line": 21
                                }
                              }
                            },
                            "init": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "req",
                                "optional": false,
                                "range": [
                                  449,
                                  452
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 21
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "range": [
                                  453,
                                  458
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                449,
                                458
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 21
                                },
                                "start": {
                                  "column": 25,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              434,
                              458
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 21
                              },
                              "start": {
                                "column": 10,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          428,
                          459
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 21
                          },
                          "start": {
                            "column": 4,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      422,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 22
                      },
                      "start": {
                        "column": 19,
                        "line": 20
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "req",
                      "optional": false,
                      "range": [
                        414,
                        417
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    413,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 20
                    }
                  }
                },
                "range": [
                  405,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 22
                  },
                  "start": {
                    "column": 2,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              352,
              466
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "route",
          "optional": false,
          "range": [
            346,
            351
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          346,
          467
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        346,
        468
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        470,
        480
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
