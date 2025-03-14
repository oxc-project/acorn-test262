__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    221,
    1122
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Record2",
        "optional": false,
        "range": [
          226,
          233
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              272,
              273
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 6
              }
            }
          },
          "range": [
            272,
            273
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 6
            },
            "start": {
              "column": 10,
              "line": 6
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "range": [
            267,
            268
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 6
            },
            "start": {
              "column": 5,
              "line": 6
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              276,
              277
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          },
          "range": [
            276,
            277
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        },
        "range": [
          260,
          280
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 39,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        },
        "range": [
          233,
          257
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  250,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              },
              "range": [
                244,
                253
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                234,
                235
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              234,
              253
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
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
              "name": "T",
              "optional": false,
              "range": [
                255,
                256
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              255,
              256
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        221,
        281
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  363,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  367,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "range": [
                363,
                368
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              363,
              369
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          357,
          404
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 74,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultRecord",
        "optional": false,
        "range": [
          292,
          305
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
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
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 9
              }
            },
            "range": [
              307,
              328
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  315,
                  328
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        316,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 9
                        },
                        "start": {
                          "column": 33,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      316,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 33,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      321,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 38,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 32,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  309,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              },
              "range": [
                309,
                328
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 26,
                  "line": 9
                }
              }
            }
          },
          "range": [
            306,
            328
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 9
            },
            "start": {
              "column": 23,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 9
              },
              "start": {
                "column": 48,
                "line": 9
              }
            },
            "range": [
              331,
              355
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  339,
                  355
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      340,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 9
                      },
                      "start": {
                        "column": 57,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      348,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 9
                      },
                      "start": {
                        "column": 65,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 9
                  },
                  "start": {
                    "column": 56,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  333,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 9
                  },
                  "start": {
                    "column": 50,
                    "line": 9
                  }
                }
              },
              "range": [
                333,
                355
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 9
                },
                "start": {
                  "column": 50,
                  "line": 9
                }
              }
            }
          },
          "range": [
            330,
            355
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 9
            },
            "start": {
              "column": 47,
              "line": 9
            }
          }
        }
      ],
      "range": [
        283,
        404
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  487,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  491,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "range": [
                487,
                492
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              487,
              493
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          481,
          528
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 75,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "customRecord",
        "optional": false,
        "range": [
          415,
          427
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
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
                "column": 45,
                "line": 13
              },
              "start": {
                "column": 23,
                "line": 13
              }
            },
            "range": [
              429,
              451
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  438,
                  451
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        439,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 13
                        },
                        "start": {
                          "column": 33,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      439,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      444,
                      450
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 13
                      },
                      "start": {
                        "column": 38,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  431,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
                    "line": 13
                  }
                }
              },
              "range": [
                431,
                451
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
                }
              }
            }
          },
          "range": [
            428,
            451
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 13
            },
            "start": {
              "column": 22,
              "line": 13
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 13
              },
              "start": {
                "column": 48,
                "line": 13
              }
            },
            "range": [
              454,
              479
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  463,
                  479
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      464,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 13
                      },
                      "start": {
                        "column": 58,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      472,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 13
                      },
                      "start": {
                        "column": 66,
                        "line": 13
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 13
                  },
                  "start": {
                    "column": 57,
                    "line": 13
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  456,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 13
                  },
                  "start": {
                    "column": 50,
                    "line": 13
                  }
                }
              },
              "range": [
                456,
                479
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 13
                },
                "start": {
                  "column": 50,
                  "line": 13
                }
              }
            }
          },
          "range": [
            453,
            479
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 13
            },
            "start": {
              "column": 47,
              "line": 13
            }
          }
        }
      ],
      "range": [
        406,
        528
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  604,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  608,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              "range": [
                604,
                609
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
            "range": [
              604,
              610
            ],
            "loc": {
              "end": {
                "column": 10,
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
          598,
          621
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 68,
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
        "name": "mixed1",
        "optional": false,
        "range": [
          539,
          545
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
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
                "column": 39,
                "line": 17
              },
              "start": {
                "column": 17,
                "line": 17
              }
            },
            "range": [
              547,
              569
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  556,
                  569
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        557,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      557,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 27,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      562,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  549,
                  556
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 17
                  },
                  "start": {
                    "column": 19,
                    "line": 17
                  }
                }
              },
              "range": [
                549,
                569
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 17
                },
                "start": {
                  "column": 19,
                  "line": 17
                }
              }
            }
          },
          "range": [
            546,
            569
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 17
            },
            "start": {
              "column": 16,
              "line": 17
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 17
              },
              "start": {
                "column": 42,
                "line": 17
              }
            },
            "range": [
              572,
              596
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  580,
                  596
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      581,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 17
                      },
                      "start": {
                        "column": 51,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      589,
                      595
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 17
                      },
                      "start": {
                        "column": 59,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 17
                  },
                  "start": {
                    "column": 50,
                    "line": 17
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  574,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 17
                  },
                  "start": {
                    "column": 44,
                    "line": 17
                  }
                }
              },
              "range": [
                574,
                596
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 17
                },
                "start": {
                  "column": 44,
                  "line": 17
                }
              }
            }
          },
          "range": [
            571,
            596
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 17
            },
            "start": {
              "column": 41,
              "line": 17
            }
          }
        }
      ],
      "range": [
        530,
        621
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  697,
                  698
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  701,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "range": [
                697,
                702
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              697,
              703
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          691,
          714
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 68,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed2",
        "optional": false,
        "range": [
          632,
          638
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
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
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            },
            "range": [
              640,
              661
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  648,
                  661
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        649,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 21
                        },
                        "start": {
                          "column": 26,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      649,
                      652
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 26,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      654,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 21
                      },
                      "start": {
                        "column": 31,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 25,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  642,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 21
                  },
                  "start": {
                    "column": 19,
                    "line": 21
                  }
                }
              },
              "range": [
                642,
                661
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 19,
                  "line": 21
                }
              }
            }
          },
          "range": [
            639,
            661
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 21
            },
            "start": {
              "column": 16,
              "line": 21
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 21
              },
              "start": {
                "column": 41,
                "line": 21
              }
            },
            "range": [
              664,
              689
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  673,
                  689
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      674,
                      680
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 21
                      },
                      "start": {
                        "column": 51,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      682,
                      688
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 21
                      },
                      "start": {
                        "column": 59,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 21
                  },
                  "start": {
                    "column": 50,
                    "line": 21
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  666,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 21
                  },
                  "start": {
                    "column": 43,
                    "line": 21
                  }
                }
              },
              "range": [
                666,
                689
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 21
                },
                "start": {
                  "column": 43,
                  "line": 21
                }
              }
            }
          },
          "range": [
            663,
            689
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 21
            },
            "start": {
              "column": 40,
              "line": 21
            }
          }
        }
      ],
      "range": [
        623,
        714
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  790,
                  791
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  794,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "range": [
                790,
                795
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              790,
              796
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          784,
          831
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 68,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defaultRecord2",
        "optional": false,
        "range": [
          725,
          739
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
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
                "column": 44,
                "line": 25
              },
              "start": {
                "column": 28,
                "line": 25
              }
            },
            "range": [
              744,
              760
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  752,
                  760
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        753,
                        756
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 25
                        },
                        "start": {
                          "column": 37,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      753,
                      756
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 25
                      },
                      "start": {
                        "column": 37,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        758,
                        759
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 25
                        },
                        "start": {
                          "column": 42,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      758,
                      759
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 25
                      },
                      "start": {
                        "column": 42,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 25
                  },
                  "start": {
                    "column": 36,
                    "line": 25
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  746,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 25
                  },
                  "start": {
                    "column": 30,
                    "line": 25
                  }
                }
              },
              "range": [
                746,
                760
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 25
                }
              }
            }
          },
          "range": [
            743,
            760
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 25
            },
            "start": {
              "column": 27,
              "line": 25
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 25
              },
              "start": {
                "column": 47,
                "line": 25
              }
            },
            "range": [
              763,
              782
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  771,
                  782
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      772,
                      778
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 25
                      },
                      "start": {
                        "column": 56,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        780,
                        781
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 25
                        },
                        "start": {
                          "column": 64,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      780,
                      781
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 25
                      },
                      "start": {
                        "column": 64,
                        "line": 25
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 25
                  },
                  "start": {
                    "column": 55,
                    "line": 25
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  765,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 25
                  },
                  "start": {
                    "column": 49,
                    "line": 25
                  }
                }
              },
              "range": [
                765,
                782
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 25
                },
                "start": {
                  "column": 49,
                  "line": 25
                }
              }
            }
          },
          "range": [
            762,
            782
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 25
            },
            "start": {
              "column": 46,
              "line": 25
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 25
          },
          "start": {
            "column": 23,
            "line": 25
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
                  "column": 25,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
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
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        716,
        831
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  908,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  912,
                  913
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              "range": [
                908,
                913
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              908,
              914
            ],
            "loc": {
              "end": {
                "column": 10,
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
          902,
          949
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 69,
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
        "name": "customRecord2",
        "optional": false,
        "range": [
          842,
          855
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 29
              },
              "start": {
                "column": 27,
                "line": 29
              }
            },
            "range": [
              860,
              877
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  869,
                  877
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        870,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 29
                        },
                        "start": {
                          "column": 37,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      870,
                      873
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 29
                      },
                      "start": {
                        "column": 37,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        875,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 29
                        },
                        "start": {
                          "column": 42,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      875,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 29
                      },
                      "start": {
                        "column": 42,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 29
                  },
                  "start": {
                    "column": 36,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  862,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 29
                  },
                  "start": {
                    "column": 29,
                    "line": 29
                  }
                }
              },
              "range": [
                862,
                877
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 29
                },
                "start": {
                  "column": 29,
                  "line": 29
                }
              }
            }
          },
          "range": [
            859,
            877
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 29
            },
            "start": {
              "column": 26,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 29
              },
              "start": {
                "column": 47,
                "line": 29
              }
            },
            "range": [
              880,
              900
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  889,
                  900
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      890,
                      896
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 29
                      },
                      "start": {
                        "column": 57,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        898,
                        899
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 29
                        },
                        "start": {
                          "column": 65,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      898,
                      899
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 29
                      },
                      "start": {
                        "column": 65,
                        "line": 29
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 29
                  },
                  "start": {
                    "column": 56,
                    "line": 29
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  882,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 29
                  },
                  "start": {
                    "column": 49,
                    "line": 29
                  }
                }
              },
              "range": [
                882,
                900
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 29
                },
                "start": {
                  "column": 49,
                  "line": 29
                }
              }
            }
          },
          "range": [
            879,
            900
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 29
            },
            "start": {
              "column": 46,
              "line": 29
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 25,
            "line": 29
          },
          "start": {
            "column": 22,
            "line": 29
          }
        },
        "range": [
          855,
          858
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
                856,
                857
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 23,
                  "line": 29
                }
              }
            },
            "out": false,
            "range": [
              856,
              857
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            }
          }
        ]
      },
      "range": [
        833,
        949
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1018,
                  1019
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1022,
                  1023
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              },
              "range": [
                1018,
                1023
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              1018,
              1024
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          1012,
          1035
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 61,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed3",
        "optional": false,
        "range": [
          960,
          966
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
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
                "column": 37,
                "line": 33
              },
              "start": {
                "column": 20,
                "line": 33
              }
            },
            "range": [
              971,
              988
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  980,
                  988
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        981,
                        984
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 33
                        },
                        "start": {
                          "column": 30,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      981,
                      984
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 33
                      },
                      "start": {
                        "column": 30,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        986,
                        987
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 33
                        },
                        "start": {
                          "column": 35,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      986,
                      987
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 33
                      },
                      "start": {
                        "column": 35,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 33
                  },
                  "start": {
                    "column": 29,
                    "line": 33
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  973,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 33
                  },
                  "start": {
                    "column": 22,
                    "line": 33
                  }
                }
              },
              "range": [
                973,
                988
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 33
                },
                "start": {
                  "column": 22,
                  "line": 33
                }
              }
            }
          },
          "range": [
            970,
            988
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 33
            },
            "start": {
              "column": 19,
              "line": 33
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 33
              },
              "start": {
                "column": 40,
                "line": 33
              }
            },
            "range": [
              991,
              1010
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  999,
                  1010
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1000,
                      1006
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 33
                      },
                      "start": {
                        "column": 49,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1008,
                        1009
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 33
                        },
                        "start": {
                          "column": 57,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1008,
                      1009
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 33
                      },
                      "start": {
                        "column": 57,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 33
                  },
                  "start": {
                    "column": 48,
                    "line": 33
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  993,
                  999
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 33
                  },
                  "start": {
                    "column": 42,
                    "line": 33
                  }
                }
              },
              "range": [
                993,
                1010
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 33
                },
                "start": {
                  "column": 42,
                  "line": 33
                }
              }
            }
          },
          "range": [
            990,
            1010
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 33
            },
            "start": {
              "column": 39,
              "line": 33
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 33
          },
          "start": {
            "column": 15,
            "line": 33
          }
        },
        "range": [
          966,
          969
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
                967,
                968
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
            "out": false,
            "range": [
              967,
              968
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
          }
        ]
      },
      "range": [
        951,
        1035
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1104,
                  1105
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1108,
                  1109
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              "range": [
                1104,
                1109
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              1104,
              1110
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          1098,
          1121
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 61,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixed4",
        "optional": false,
        "range": [
          1046,
          1052
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
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
                "column": 36,
                "line": 37
              },
              "start": {
                "column": 20,
                "line": 37
              }
            },
            "range": [
              1057,
              1073
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1065,
                  1073
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        1066,
                        1069
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 37
                        },
                        "start": {
                          "column": 29,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1066,
                      1069
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 37
                      },
                      "start": {
                        "column": 29,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1071,
                        1072
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 37
                        },
                        "start": {
                          "column": 34,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1071,
                      1072
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 37
                      },
                      "start": {
                        "column": 34,
                        "line": 37
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 37
                  },
                  "start": {
                    "column": 28,
                    "line": 37
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  1059,
                  1065
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 37
                  },
                  "start": {
                    "column": 22,
                    "line": 37
                  }
                }
              },
              "range": [
                1059,
                1073
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 37
                },
                "start": {
                  "column": 22,
                  "line": 37
                }
              }
            }
          },
          "range": [
            1056,
            1073
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 37
            },
            "start": {
              "column": 19,
              "line": 37
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 37
              },
              "start": {
                "column": 39,
                "line": 37
              }
            },
            "range": [
              1076,
              1096
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1085,
                  1096
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1086,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 37
                      },
                      "start": {
                        "column": 49,
                        "line": 37
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1094,
                        1095
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 37
                        },
                        "start": {
                          "column": 57,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1094,
                      1095
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 37
                      },
                      "start": {
                        "column": 57,
                        "line": 37
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 37
                  },
                  "start": {
                    "column": 48,
                    "line": 37
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record2",
                "optional": false,
                "range": [
                  1078,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 37
                  },
                  "start": {
                    "column": 41,
                    "line": 37
                  }
                }
              },
              "range": [
                1078,
                1096
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 37
                },
                "start": {
                  "column": 41,
                  "line": 37
                }
              }
            }
          },
          "range": [
            1075,
            1096
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 37
            },
            "start": {
              "column": 38,
              "line": 37
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 37
          },
          "start": {
            "column": 15,
            "line": 37
          }
        },
        "range": [
          1052,
          1055
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
                1053,
                1054
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              1053,
              1054
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 37
              },
              "start": {
                "column": 16,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        1037,
        1121
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
