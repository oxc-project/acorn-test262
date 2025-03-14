__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    899
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "range": [
          73,
          78
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "box",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            },
            "range": [
              85,
              111
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      89,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 33,
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
                        "column": 53,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    },
                    "range": [
                      94,
                      109
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              96,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 2
                              },
                              "start": {
                                "column": 40,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            96,
                            97
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 2
                            },
                            "start": {
                              "column": 40,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            100,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 2
                            },
                            "start": {
                              "column": 44,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "range": [
                        96,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 2
                        },
                        "start": {
                          "column": 40,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    89,
                    109
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                87,
                111
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              }
            }
          },
          "range": [
            82,
            111
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 2
          },
          "start": {
            "column": 56,
            "line": 2
          }
        },
        "range": [
          112,
          115
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              114,
              115
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 2
              },
              "start": {
                "column": 58,
                "line": 2
              }
            }
          },
          "range": [
            114,
            115
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 2
            },
            "start": {
              "column": 58,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        },
        "range": [
          78,
          81
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
                79,
                80
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              79,
              80
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 23,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        56,
        116
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "su",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              },
              "range": [
                133,
                153
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      135,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      144,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  135,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              131,
              153
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            131,
            153
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        117,
        154
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "fnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              },
              "range": [
                172,
                200
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      },
                      "range": [
                        178,
                        187
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          181,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      175,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 20,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      191,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  174,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              169,
              200
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            169,
            200
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        155,
        201
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "osu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              },
              "range": [
                219,
                249
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            223,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 5
                            },
                            "start": {
                              "column": 21,
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
                              "column": 33,
                              "line": 5
                            },
                            "start": {
                              "column": 25,
                              "line": 5
                            }
                          },
                          "range": [
                            227,
                            235
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              229,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 5
                              },
                              "start": {
                                "column": 27,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          223,
                          235
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      221,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      240,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 5
                      },
                      "start": {
                        "column": 38,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  221,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              216,
              249
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            216,
            249
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 5
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
        202,
        250
      ],
      "loc": {
        "end": {
          "column": 48,
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
            "name": "ofnu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              },
              "range": [
                269,
                305
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "range": [
                            273,
                            277
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
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
                              "line": 6
                            },
                            "start": {
                              "column": 26,
                              "line": 6
                            }
                          },
                          "range": [
                            277,
                            291
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 6
                                },
                                "start": {
                                  "column": 31,
                                  "line": 6
                                }
                              },
                              "range": [
                                282,
                                291
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  285,
                                  291
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              279,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 6
                              },
                              "start": {
                                "column": 28,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          273,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      271,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      296,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 6
                      },
                      "start": {
                        "column": 45,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  271,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              265,
              305
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            265,
            305
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        251,
        306
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
              314,
              316
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    321,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "range": [
                        328,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 8
                        },
                        "start": {
                          "column": 20,
                          "line": 8
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        332,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 24,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      328,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    328,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                },
                "range": [
                  321,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              319,
              340
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          },
          "range": [
            314,
            340
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        308,
        341
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              },
              "range": [
                350,
                358
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  352,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              348,
              358
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b1",
                "optional": false,
                "range": [
                  367,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 9
                  },
                  "start": {
                    "column": 25,
                    "line": 9
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                361,
                366
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              361,
              370
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          },
          "range": [
            348,
            370
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        342,
        371
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              379,
              381
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    386,
                    391
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ChainExpression",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "su",
                        "optional": false,
                        "range": [
                          393,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
                          }
                        }
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          397,
                          403
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 11
                          },
                          "start": {
                            "column": 24,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        393,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 11
                        },
                        "start": {
                          "column": 20,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      393,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          407,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 11
                          },
                          "start": {
                            "column": 34,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          416,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 11
                          },
                          "start": {
                            "column": 43,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      407,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    393,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                },
                "range": [
                  386,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              384,
              427
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          },
          "range": [
            379,
            427
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        373,
        428
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                437,
                445
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  439,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              435,
              445
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "range": [
                  454,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 12
                  },
                  "start": {
                    "column": 25,
                    "line": 12
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                448,
                453
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              448,
              457
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          },
          "range": [
            435,
            457
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        429,
        458
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 12
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                468,
                499
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        472,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
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
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      },
                      "range": [
                        477,
                        497
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              479,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 14
                              },
                              "start": {
                                "column": 19,
                                "line": 14
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              488,
                              497
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 14
                              },
                              "start": {
                                "column": 28,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          479,
                          497
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 14
                          },
                          "start": {
                            "column": 19,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      472,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  470,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              466,
              499
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    504,
                    509
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 14
                    },
                    "start": {
                      "column": 44,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "range": [
                        511,
                        513
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
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        515,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 14
                        },
                        "start": {
                          "column": 55,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      511,
                      521
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 14
                      },
                      "start": {
                        "column": 51,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    511,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 14
                    },
                    "start": {
                      "column": 51,
                      "line": 14
                    }
                  }
                },
                "range": [
                  504,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 61,
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
              502,
              523
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 14
              },
              "start": {
                "column": 42,
                "line": 14
              }
            }
          },
          "range": [
            466,
            523
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        460,
        524
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              },
              "range": [
                533,
                541
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  535,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              531,
              541
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b3",
                "optional": false,
                "range": [
                  550,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                544,
                549
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 15
                },
                "start": {
                  "column": 19,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              544,
              553
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 19,
                "line": 15
              }
            }
          },
          "range": [
            531,
            553
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        525,
        554
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "b4",
            "optional": false,
            "range": [
              562,
              564
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    569,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fnu",
                      "optional": false,
                      "range": [
                        576,
                        579
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    },
                    "optional": true,
                    "range": [
                      576,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    576,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
                    }
                  }
                },
                "range": [
                  569,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              567,
              585
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 11,
                "line": 17
              }
            }
          },
          "range": [
            562,
            585
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        556,
        586
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              },
              "range": [
                595,
                603
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  597,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              593,
              603
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b4",
                "optional": false,
                "range": [
                  612,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 25,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                606,
                611
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              606,
              615
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 19,
                "line": 18
              }
            }
          },
          "range": [
            593,
            615
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        587,
        616
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "b5",
            "optional": false,
            "range": [
              624,
              626
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    631,
                    636
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 13,
                      "line": 20
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "su",
                      "optional": false,
                      "range": [
                        638,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    },
                    "optional": true,
                    "property": {
                      "type": "Literal",
                      "raw": "\"length\"",
                      "value": "length",
                      "range": [
                        643,
                        651
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 20
                        },
                        "start": {
                          "column": 25,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      638,
                      652
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 20
                      },
                      "start": {
                        "column": 20,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    638,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  }
                },
                "range": [
                  631,
                  652
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              629,
              654
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          },
          "range": [
            624,
            654
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        618,
        655
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "v5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              },
              "range": [
                664,
                672
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  666,
                  672
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              662,
              672
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b5",
                "optional": false,
                "range": [
                  681,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 21
                  },
                  "start": {
                    "column": 25,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                675,
                680
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 19,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              675,
              684
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 21
              },
              "start": {
                "column": 19,
                "line": 21
              }
            }
          },
          "range": [
            662,
            684
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        656,
        685
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "b6",
            "optional": false,
            "range": [
              693,
              695
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    700,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "osu",
                        "optional": false,
                        "range": [
                          707,
                          710
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 23
                          },
                          "start": {
                            "column": 20,
                            "line": 23
                          }
                        }
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          712,
                          716
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 23
                          },
                          "start": {
                            "column": 25,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        707,
                        716
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 23
                        },
                        "start": {
                          "column": 20,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        717,
                        723
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 23
                        },
                        "start": {
                          "column": 30,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      707,
                      723
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 20,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    707,
                    723
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 20,
                      "line": 23
                    }
                  }
                },
                "range": [
                  700,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              698,
              725
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 23
              },
              "start": {
                "column": 11,
                "line": 23
              }
            }
          },
          "range": [
            693,
            725
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        687,
        726
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "v6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              },
              "range": [
                735,
                743
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  737,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              733,
              743
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b6",
                "optional": false,
                "range": [
                  752,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 24
                  },
                  "start": {
                    "column": 25,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                746,
                751
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 24
                },
                "start": {
                  "column": 19,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              746,
              755
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
          },
          "range": [
            733,
            755
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        727,
        756
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 24
        },
        "start": {
          "column": 0,
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
            "name": "b7",
            "optional": false,
            "range": [
              764,
              766
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    771,
                    776
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "osu",
                        "optional": false,
                        "range": [
                          778,
                          781
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 26
                          },
                          "start": {
                            "column": 20,
                            "line": 26
                          }
                        }
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          783,
                          787
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 26
                          },
                          "start": {
                            "column": 25,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        778,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 20,
                          "line": 26
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"length\"",
                      "value": "length",
                      "range": [
                        788,
                        796
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 26
                        },
                        "start": {
                          "column": 30,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      778,
                      797
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 26
                      },
                      "start": {
                        "column": 20,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    778,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 26
                    },
                    "start": {
                      "column": 20,
                      "line": 26
                    }
                  }
                },
                "range": [
                  771,
                  797
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              }
            ],
            "range": [
              769,
              799
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          },
          "range": [
            764,
            799
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        758,
        800
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "v7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              },
              "range": [
                809,
                817
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  811,
                  817
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              807,
              817
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b7",
                "optional": false,
                "range": [
                  826,
                  828
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 27
                  },
                  "start": {
                    "column": 25,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                820,
                825
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 19,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              820,
              829
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 27
              },
              "start": {
                "column": 19,
                "line": 27
              }
            }
          },
          "range": [
            807,
            829
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        801,
        830
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "b8",
            "optional": false,
            "range": [
              838,
              840
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
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
                  "name": "value",
                  "optional": false,
                  "range": [
                    845,
                    850
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 29
                    },
                    "start": {
                      "column": 13,
                      "line": 29
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ofnu",
                        "optional": false,
                        "range": [
                          852,
                          856
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "optional": true,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          858,
                          862
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 29
                          },
                          "start": {
                            "column": 26,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        852,
                        862
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 29
                        },
                        "start": {
                          "column": 20,
                          "line": 29
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      852,
                      864
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 29
                      },
                      "start": {
                        "column": 20,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    852,
                    864
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
                    }
                  }
                },
                "range": [
                  845,
                  864
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              843,
              866
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 29
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          },
          "range": [
            838,
            866
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        832,
        867
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "v8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              },
              "range": [
                876,
                884
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  878,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              874,
              884
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b8",
                "optional": false,
                "range": [
                  893,
                  895
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 30
                  },
                  "start": {
                    "column": 25,
                    "line": 30
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unbox",
              "optional": false,
              "range": [
                887,
                892
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 30
                },
                "start": {
                  "column": 19,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              887,
              896
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 30
              },
              "start": {
                "column": 19,
                "line": 30
              }
            }
          },
          "range": [
            874,
            896
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        868,
        897
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
