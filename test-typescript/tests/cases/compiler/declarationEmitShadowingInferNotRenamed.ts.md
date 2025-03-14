__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    566
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Client",
        "optional": false,
        "range": [
          26,
          32
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "range": [
          35,
          41
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "range": [
        21,
        41
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UpdatedClient",
        "optional": false,
        "range": [
          69,
          82
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
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
              "name": "C",
              "optional": false,
              "range": [
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            },
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 24,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    93,
                    96
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
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 5
                    },
                    "start": {
                      "column": 32,
                      "line": 5
                    }
                  },
                  "range": [
                    96,
                    104
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      98,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 5
                      },
                      "start": {
                        "column": 34,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  93,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              92,
              105
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            }
          }
        ],
        "range": [
          88,
          105
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 5
          },
          "start": {
            "column": 24,
            "line": 5
          }
        }
      },
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
          82,
          85
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                83,
                84
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
              83,
              84
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
        64,
        105
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        107,
        566
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
              "name": "createClient",
              "optional": false,
              "range": [
                120,
                132
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          553,
                          557
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 20
                          },
                          "start": {
                            "column": 9,
                            "line": 20
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          561,
                          564
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 20
                          },
                          "start": {
                            "column": 17,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        553,
                        564
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 20
                        },
                        "start": {
                          "column": 9,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      546,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  542,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 19
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
                  "name": "clientDef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    },
                    "range": [
                      292,
                      295
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          294,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        294,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    283,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 2,
                      "line": 12
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 1,
                    "line": 13
                  }
                },
                "range": [
                  297,
                  538
                ],
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        299,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 13
                        },
                        "start": {
                          "column": 3,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      299,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 13
                      },
                      "start": {
                        "column": 3,
                        "line": 13
                      }
                    }
                  },
                  "extendsType": {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            317,
                            321
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 13
                            },
                            "start": {
                              "column": 21,
                              "line": 13
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 13
                            },
                            "start": {
                              "column": 25,
                              "line": 13
                            }
                          },
                          "range": [
                            321,
                            328
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                323,
                                326
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
                              323,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
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
                          314,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 13
                          },
                          "start": {
                            "column": 18,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 13
                        },
                        "start": {
                          "column": 34,
                          "line": 13
                        }
                      },
                      "range": [
                        330,
                        340
                      ],
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "range": [
                              339,
                              340
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 13
                              },
                              "start": {
                                "column": 43,
                                "line": 13
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            339,
                            340
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 13
                            },
                            "start": {
                              "column": 43,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          333,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 13
                          },
                          "start": {
                            "column": 37,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      309,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 13
                      },
                      "start": {
                        "column": 13,
                        "line": 13
                      }
                    }
                  },
                  "falseType": {
                    "type": "TSMappedType",
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            405,
                            406
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
                          405,
                          406
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
                        399,
                        406
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 16
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        394,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 16
                        },
                        "start": {
                          "column": 7,
                          "line": 16
                        }
                      }
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "range": [
                              411,
                              412
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            411,
                            412
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
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
                                "column": 23,
                                "line": 16
                              },
                              "start": {
                                "column": 22,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            409,
                            410
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 16
                            },
                            "start": {
                              "column": 22,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          409,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 16
                          },
                          "start": {
                            "column": 22,
                            "line": 16
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "range": [
                                430,
                                434
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 16
                                },
                                "start": {
                                  "column": 43,
                                  "line": 16
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 16
                                },
                                "start": {
                                  "column": 47,
                                  "line": 16
                                }
                              },
                              "range": [
                                434,
                                441
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    436,
                                    439
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  436,
                                  441
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 16
                                  }
                                }
                              }
                            },
                            "range": [
                              427,
                              441
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 16
                              },
                              "start": {
                                "column": 40,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 16
                            },
                            "start": {
                              "column": 56,
                              "line": 16
                            }
                          },
                          "range": [
                            443,
                            453
                          ],
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "const": false,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "range": [
                                  452,
                                  453
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 16
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                452,
                                453
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 16
                                },
                                "start": {
                                  "column": 65,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              446,
                              453
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 16
                              },
                              "start": {
                                "column": 59,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          422,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 16
                          },
                          "start": {
                            "column": 35,
                            "line": 16
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "range": [
                          527,
                          532
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
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            513,
                            516
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "range": [
                                  514,
                                  515
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                514,
                                515
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 17
                                },
                                "start": {
                                  "column": 24,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 17
                            },
                            "start": {
                              "column": 23,
                              "line": 17
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UpdatedClient",
                          "optional": false,
                          "range": [
                            500,
                            513
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 17
                            },
                            "start": {
                              "column": 10,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          500,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 10,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        409,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 18
                        },
                        "start": {
                          "column": 22,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      385,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        358,
                        361
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "range": [
                              359,
                              360
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 14
                              },
                              "start": {
                                "column": 18,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            359,
                            360
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UpdatedClient",
                      "optional": false,
                      "range": [
                        345,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 4,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      345,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    299,
                    538
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 3,
                      "line": 13
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                },
                "range": [
                  135,
                  279
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSConstructorType",
                          "abstract": false,
                          "params": [
                            {
                              "type": "RestElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "args",
                                "optional": false,
                                "range": [
                                  164,
                                  168
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 9
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 9
                                  }
                                },
                                "range": [
                                  168,
                                  175
                                ],
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      170,
                                      173
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    170,
                                    175
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 9
                                    }
                                  }
                                }
                              },
                              "range": [
                                161,
                                175
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 9
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 9
                              },
                              "start": {
                                "column": 28,
                                "line": 9
                              }
                            },
                            "range": [
                              177,
                              186
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Client",
                                "optional": false,
                                "range": [
                                  180,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                180,
                                186
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 9
                                },
                                "start": {
                                  "column": 31,
                                  "line": 9
                                }
                              }
                            }
                          },
                          "range": [
                            156,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 9
                            },
                            "start": {
                              "column": 7,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              216,
                              256
                            ],
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  217,
                                  223
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 10
                                  }
                                }
                              },
                              {
                                "type": "TSConstructorType",
                                "abstract": false,
                                "params": [
                                  {
                                    "type": "RestElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "range": [
                                        233,
                                        237
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 10
                                        }
                                      },
                                      "range": [
                                        237,
                                        244
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSArrayType",
                                        "elementType": {
                                          "type": "TSAnyKeyword",
                                          "range": [
                                            239,
                                            242
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 10
                                            },
                                            "start": {
                                              "column": 35,
                                              "line": 10
                                            }
                                          }
                                        },
                                        "range": [
                                          239,
                                          244
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 10
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      230,
                                      244
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 10
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 10
                                    }
                                  },
                                  "range": [
                                    246,
                                    255
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Client",
                                      "optional": false,
                                      "range": [
                                        249,
                                        255
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 45,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      249,
                                      255
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 10
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  225,
                                  255
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Record",
                            "optional": false,
                            "range": [
                              210,
                              216
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 10
                              },
                              "start": {
                                "column": 6,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            210,
                            256
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 10
                            },
                            "start": {
                              "column": 6,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        153,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 10
                        },
                        "start": {
                          "column": 4,
                          "line": 9
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        139,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 8
                        },
                        "start": {
                          "column": 2,
                          "line": 8
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      139,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 10
                      },
                      "start": {
                        "column": 2,
                        "line": 8
                      }
                    }
                  }
                ]
              },
              "range": [
                135,
                566
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 21
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "range": [
              120,
              566
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          114,
          566
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
