__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    500
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
              "name": "b",
              "optional": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
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
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                33,
                41
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  35,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              32,
              41
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          }
        ],
        "range": [
          31,
          42
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        22,
        42
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "flowtypes",
            "optional": false,
            "range": [
              50,
              59
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Combined",
                    "optional": false,
                    "range": [
                      84,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 7,
                        "line": 6
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            95,
                            96
                          ],
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
                        "range": [
                          95,
                          96
                        ],
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
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            99,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 22,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          99,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
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
                      95,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 18,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    79,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
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
                        "name": "combined",
                        "optional": false,
                        "range": [
                          110,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            159,
                            163
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 8
                            },
                            "start": {
                              "column": 57,
                              "line": 8
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
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 8
                                },
                                "start": {
                                  "column": 22,
                                  "line": 8
                                }
                              },
                              "range": [
                                124,
                                154
                              ],
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "combined",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 8
                                        }
                                      },
                                      "range": [
                                        135,
                                        145
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Combined",
                                          "optional": false,
                                          "range": [
                                            137,
                                            145
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 43,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          137,
                                          145
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 8
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      127,
                                      145
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 8
                                    }
                                  },
                                  "range": [
                                    147,
                                    154
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "range": [
                                      150,
                                      154
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 48,
                                        "line": 8
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  126,
                                  154
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              122,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 8
                              },
                              "start": {
                                "column": 20,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          121,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 8
                          },
                          "start": {
                            "column": 19,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        110,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    104,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 8
                    },
                    "start": {
                      "column": 2,
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
                        "name": "literal",
                        "optional": false,
                        "range": [
                          172,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            215,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 9
                            },
                            "start": {
                              "column": 51,
                              "line": 9
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
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 9
                                },
                                "start": {
                                  "column": 21,
                                  "line": 9
                                }
                              },
                              "range": [
                                185,
                                210
                              ],
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aPlusB",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 9
                                        }
                                      },
                                      "range": [
                                        194,
                                        201
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSIntersectionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "range": [
                                                196,
                                                197
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 33,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            "range": [
                                              196,
                                              197
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 33,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 32,
                                                "line": 9
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "B",
                                              "optional": false,
                                              "range": [
                                                200,
                                                201
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 36,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            "range": [
                                              200,
                                              201
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 37,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 36,
                                                "line": 9
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          196,
                                          201
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 9
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      188,
                                      201
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 9
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 9
                                    }
                                  },
                                  "range": [
                                    203,
                                    210
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "range": [
                                      206,
                                      210
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 9
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  187,
                                  210
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
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
                              183,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          182,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        172,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    166,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 9
                    },
                    "start": {
                      "column": 2,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "range": [
                            231,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 10,
                              "line": 11
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "range": [
                            231,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 10,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          231,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "range": [
                            241,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "range": [
                            241,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          241,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "range": [
                      230,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    223,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 11
                    },
                    "start": {
                      "column": 2,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                75,
                251
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 31,
                  "line": 5
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 23,
                      "line": 5
                    }
                  },
                  "range": [
                    67,
                    70
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        69,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 25,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      69,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  66,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              },
              "range": [
                62,
                65
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      63,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    63,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              62,
              251
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 5
              }
            }
          },
          "range": [
            50,
            251
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        44,
        251
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "range": [
                    260,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "range": [
                    260,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  260,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "range": [
                    270,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "range": [
                    270,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                "range": [
                  270,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              259,
              278
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        305,
                        306
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'b-value'",
                      "value": "b-value",
                      "range": [
                        308,
                        317
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 14
                        },
                        "start": {
                          "column": 55,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      305,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 14
                      },
                      "start": {
                        "column": 52,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  304,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 14
                  },
                  "start": {
                    "column": 51,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flowtypes",
              "optional": false,
              "range": [
                281,
                290
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
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                290,
                303
              ],
              "params": [
                {
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
                          292,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 14
                          },
                          "start": {
                            "column": 39,
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
                            "column": 48,
                            "line": 14
                          },
                          "start": {
                            "column": 40,
                            "line": 14
                          }
                        },
                        "range": [
                          293,
                          301
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            295,
                            301
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 14
                            },
                            "start": {
                              "column": 42,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        292,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 14
                        },
                        "start": {
                          "column": 39,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    291,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 14
                    },
                    "start": {
                      "column": 38,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 14
                },
                "start": {
                  "column": 37,
                  "line": 14
                }
              }
            },
            "range": [
              281,
              319
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 14
              },
              "start": {
                "column": 28,
                "line": 14
              }
            }
          },
          "range": [
            259,
            319
          ],
          "loc": {
            "end": {
              "column": 66,
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
        253,
        319
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "range": [
                        343,
                        349
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
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        350,
                        351
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
                    "range": [
                      343,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 17
                      },
                      "start": {
                        "column": 2,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    343,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 2,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "range": [
                        354,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 18
                        },
                        "start": {
                          "column": 2,
                          "line": 18
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
                        361,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 18
                        },
                        "start": {
                          "column": 9,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      354,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    354,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                339,
                364
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 16
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
                "name": "aPlusB",
                "optional": false,
                "range": [
                  329,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
              329,
              364
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "literal",
          "optional": false,
          "range": [
            321,
            328
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          321,
          365
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        321,
        365
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "range": [
                        388,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 22
                        },
                        "start": {
                          "column": 2,
                          "line": 22
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        393,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 22
                        },
                        "start": {
                          "column": 7,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      388,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 22
                      },
                      "start": {
                        "column": 2,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    388,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 22
                    },
                    "start": {
                      "column": 2,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "range": [
                        397,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 23
                        },
                        "start": {
                          "column": 2,
                          "line": 23
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
                        402,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 23
                        },
                        "start": {
                          "column": 7,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      397,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 23
                      },
                      "start": {
                        "column": 2,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    397,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 23
                    },
                    "start": {
                      "column": 2,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                384,
                405
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 21
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
                "name": "comb",
                "optional": false,
                "range": [
                  376,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              376,
              405
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "combined",
          "optional": false,
          "range": [
            367,
            375
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          367,
          406
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        367,
        406
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
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
        "name": "f",
        "optional": false,
        "range": [
          447,
          448
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
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
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 23,
                "line": 28
              }
            },
            "range": [
              453,
              456
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  455,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 28
                  },
                  "start": {
                    "column": 25,
                    "line": 28
                  }
                }
              },
              "range": [
                455,
                456
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 25,
                  "line": 28
                }
              }
            }
          },
          "range": [
            452,
            456
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 28
            },
            "start": {
              "column": 22,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 28
          },
          "start": {
            "column": 27,
            "line": 28
          }
        },
        "range": [
          457,
          474
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
                  461,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 28
                  },
                  "start": {
                    "column": 31,
                    "line": 28
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
                    "line": 28
                  },
                  "start": {
                    "column": 32,
                    "line": 28
                  }
                },
                "range": [
                  462,
                  472
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      471,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 28
                      },
                      "start": {
                        "column": 41,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    464,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 28
                    },
                    "start": {
                      "column": 34,
                      "line": 28
                    }
                  }
                }
              },
              "range": [
                461,
                472
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 28
                },
                "start": {
                  "column": 31,
                  "line": 28
                }
              }
            }
          ],
          "range": [
            459,
            474
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 28
            },
            "start": {
              "column": 29,
              "line": 28
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 28
          },
          "start": {
            "column": 18,
            "line": 28
          }
        },
        "range": [
          448,
          451
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
                449,
                450
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 28
                },
                "start": {
                  "column": 19,
                  "line": 28
                }
              }
            },
            "out": false,
            "range": [
              449,
              450
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 19,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        430,
        475
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
                  "line": 29
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              },
              "range": [
                481,
                489
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  483,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 29
                  },
                  "start": {
                    "column": 7,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              480,
              489
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    494,
                    495
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  492,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 29
                  },
                  "start": {
                    "column": 16,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                492,
                496
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
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
                497,
                498
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 21,
                  "line": 29
                }
              }
            },
            "range": [
              492,
              498
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 29
              },
              "start": {
                "column": 16,
                "line": 29
              }
            }
          },
          "range": [
            480,
            498
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        476,
        499
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
