__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    793
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentType",
        "optional": false,
        "range": [
          5,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              },
              "range": [
                26,
                29
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    28,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                },
                "range": [
                  28,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              25,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          },
          "range": [
            31,
            37
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              34,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          }
        },
        "range": [
          24,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        },
        "range": [
          18,
          21
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              19,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
        "name": "ComponentProps",
        "optional": false,
        "range": [
          44,
          58
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            }
          },
          "range": [
            64,
            65
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 25,
              "line": 2
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              87,
              96
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      94,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 2
                      },
                      "start": {
                        "column": 55,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    94,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 2
                    },
                    "start": {
                      "column": 55,
                      "line": 2
                    }
                  }
                },
                "range": [
                  88,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 2
              },
              "start": {
                "column": 48,
                "line": 2
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "range": [
              74,
              87
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 2
              },
              "start": {
                "column": 35,
                "line": 2
              }
            }
          },
          "range": [
            74,
            96
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 2
            },
            "start": {
              "column": 35,
              "line": 2
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            103,
            108
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 2
            },
            "start": {
              "column": 64,
              "line": 2
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "range": [
              99,
              100
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 2
              },
              "start": {
                "column": 60,
                "line": 2
              }
            }
          },
          "range": [
            99,
            100
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 2
            },
            "start": {
              "column": 60,
              "line": 2
            }
          }
        },
        "range": [
          64,
          108
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 2
          },
          "start": {
            "column": 25,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        },
        "range": [
          58,
          61
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
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        39,
        109
      ],
      "loc": {
        "end": {
          "column": 70,
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
        "name": "Attrs",
        "optional": false,
        "range": [
          116,
          121
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            149,
            150
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 38,
              "line": 4
            }
          }
        },
        "range": [
          149,
          150
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 38,
            "line": 4
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        },
        "range": [
          121,
          146
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              122,
              123
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
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
                  142,
                  145
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        143,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 32,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      143,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 32,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  135,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "range": [
                135,
                145
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                125,
                126
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              125,
              145
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        111,
        151
      ],
      "loc": {
        "end": {
          "column": 40,
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
          269,
          483
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attrs",
              "optional": false,
              "range": [
                273,
                278
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "attrs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
                    }
                  },
                  "range": [
                    394,
                    430
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        401,
                        430
                      ],
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  416,
                                  419
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
                                        417,
                                        418
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      417,
                                      418
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
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
                                    "column": 34,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 17
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentProps",
                                "optional": false,
                                "range": [
                                  402,
                                  416
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                402,
                                419
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
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  422,
                                  423
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                422,
                                423
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 17
                                },
                                "start": {
                                  "column": 37,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "range": [
                            402,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 17
                            },
                            "start": {
                              "column": 17,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NewA",
                            "optional": false,
                            "range": [
                              425,
                              429
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 17
                              },
                              "start": {
                                "column": 40,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            425,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 17
                            },
                            "start": {
                              "column": 40,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 17
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attrs",
                      "optional": false,
                      "range": [
                        396,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      396,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 17
                      },
                      "start": {
                        "column": 11,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  389,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 18
                },
                "start": {
                  "column": 3,
                  "line": 18
                }
              },
              "range": [
                435,
                480
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    451,
                    480
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
                          452,
                          453
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 18
                          },
                          "start": {
                            "column": 20,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        452,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              455,
                              456
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 18
                              },
                              "start": {
                                "column": 23,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            455,
                            456
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 18
                            },
                            "start": {
                              "column": 23,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NewA",
                            "optional": false,
                            "range": [
                              459,
                              463
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 18
                              },
                              "start": {
                                "column": 27,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            459,
                            463
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 18
                            },
                            "start": {
                              "column": 27,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        455,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 23,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              465,
                              466
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 18
                              },
                              "start": {
                                "column": 33,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            465,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 18
                            },
                            "start": {
                              "column": 33,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NewA",
                              "optional": false,
                              "range": [
                                475,
                                479
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 18
                                },
                                "start": {
                                  "column": 43,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              475,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 18
                              },
                              "start": {
                                "column": 43,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            469,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 18
                            },
                            "start": {
                              "column": 37,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        465,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 18
                        },
                        "start": {
                          "column": 33,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 18
                    },
                    "start": {
                      "column": 19,
                      "line": 18
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledFunction",
                  "optional": false,
                  "range": [
                    437,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 18
                    },
                    "start": {
                      "column": 5,
                      "line": 18
                    }
                  }
                },
                "range": [
                  437,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 18
                  },
                  "start": {
                    "column": 5,
                    "line": 18
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 3,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              },
              "range": [
                278,
                383
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
                      284,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    284,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            311,
                            334
                          ],
                          "params": [
                            {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "range": [
                                      326,
                                      329
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
                                            327,
                                            328
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 41,
                                              "line": 13
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 13
                                            }
                                          }
                                        },
                                        "range": [
                                          327,
                                          328
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 40,
                                            "line": 13
                                          }
                                        }
                                      }
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentProps",
                                    "optional": false,
                                    "range": [
                                      312,
                                      326
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    312,
                                    329
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 13
                                    }
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      332,
                                      333
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    332,
                                    333
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                312,
                                333
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 13
                                },
                                "start": {
                                  "column": 25,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 13
                            },
                            "start": {
                              "column": 24,
                              "line": 13
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "range": [
                            304,
                            311
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          304,
                          334
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 13
                          },
                          "start": {
                            "column": 17,
                            "line": 13
                          }
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "others",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 14
                                    }
                                  },
                                  "range": [
                                    352,
                                    360
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      354,
                                      360
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
                                  }
                                },
                                "range": [
                                  346,
                                  360
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 7,
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
                                  "column": 27,
                                  "line": 14
                                },
                                "start": {
                                  "column": 22,
                                  "line": 14
                                }
                              },
                              "range": [
                                361,
                                366
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  363,
                                  366
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 14
                                  }
                                }
                              }
                            },
                            "range": [
                              345,
                              367
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 14
                              },
                              "start": {
                                "column": 6,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          337,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 15
                          },
                          "start": {
                            "column": 50,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      304,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 15
                      },
                      "start": {
                        "column": 17,
                        "line": 13
                      }
                    }
                  },
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      376,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NewA",
                    "optional": false,
                    "range": [
                      291,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 13
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    291,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ]
            },
            "range": [
              273,
              481
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 11
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
            "column": 2,
            "line": 10
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyledFunction",
        "optional": false,
        "range": [
          163,
          177
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 6
          }
        },
        "range": [
          177,
          268
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  204,
                  209
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      205,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "range": [
                  191,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              },
              "range": [
                191,
                209
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              181,
              209
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                223,
                229
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                232,
                234
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                213,
                214
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
              213,
              234
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  254,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "range": [
                248,
                257
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "default": {
              "type": "TSNeverKeyword",
              "range": [
                260,
                265
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                238,
                239
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              238,
              265
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        153,
        483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          511,
          581
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 22
                    },
                    "start": {
                      "column": 42,
                      "line": 22
                    }
                  },
                  "range": [
                    555,
                    558
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        557,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 22
                        },
                        "start": {
                          "column": 44,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      557,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 22
                      },
                      "start": {
                        "column": 44,
                        "line": 22
                      }
                    }
                  }
                },
                "range": [
                  546,
                  558
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 22
                },
                "start": {
                  "column": 46,
                  "line": 22
                }
              },
              "range": [
                559,
                578
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    575,
                    578
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
                          576,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 22
                          },
                          "start": {
                            "column": 63,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        576,
                        577
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 22
                        },
                        "start": {
                          "column": 63,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 22
                    },
                    "start": {
                      "column": 62,
                      "line": 22
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledFunction",
                  "optional": false,
                  "range": [
                    561,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 22
                    },
                    "start": {
                      "column": 48,
                      "line": 22
                    }
                  }
                },
                "range": [
                  561,
                  578
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 22
                  },
                  "start": {
                    "column": 48,
                    "line": 22
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
                }
              },
              "range": [
                515,
                545
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        539,
                        544
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            540,
                            543
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 22
                            },
                            "start": {
                              "column": 27,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 22
                        },
                        "start": {
                          "column": 26,
                          "line": 22
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentType",
                      "optional": false,
                      "range": [
                        526,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 22
                        },
                        "start": {
                          "column": 13,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      526,
                      544
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "range": [
                      516,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 22
                      },
                      "start": {
                        "column": 3,
                        "line": 22
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    516,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 22
                    },
                    "start": {
                      "column": 3,
                      "line": 22
                    }
                  }
                }
              ]
            },
            "range": [
              515,
              579
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 26,
            "line": 21
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StyledInterface",
        "optional": false,
        "range": [
          495,
          510
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "range": [
        485,
        581
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "styled",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 25
                },
                "start": {
                  "column": 20,
                  "line": 25
                }
              },
              "range": [
                603,
                620
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StyledInterface",
                  "optional": false,
                  "range": [
                    605,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 25
                    },
                    "start": {
                      "column": 22,
                      "line": 25
                    }
                  }
                },
                "range": [
                  605,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 25
                  },
                  "start": {
                    "column": 22,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              597,
              620
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
              }
            }
          },
          "init": null,
          "range": [
            597,
            620
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 25
            },
            "start": {
              "column": 14,
              "line": 25
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        583,
        621
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          643,
          673
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "as",
              "optional": false,
              "range": [
                647,
                649
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 28
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
                  "column": 25,
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              },
              "range": [
                650,
                670
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"select\"",
                      "value": "select",
                      "range": [
                        652,
                        660
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 7,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      652,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 28
                      },
                      "start": {
                        "column": 7,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"input\"",
                      "value": "input",
                      "range": [
                        663,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 28
                        },
                        "start": {
                          "column": 18,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      663,
                      670
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  652,
                  670
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 28
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              647,
              671
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 20,
            "line": 27
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "range": [
          633,
          642
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "range": [
        623,
        673
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
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
            "name": "Flex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 31
                },
                "start": {
                  "column": 18,
                  "line": 31
                }
              },
              "range": [
                693,
                721
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 31
                        },
                        "start": {
                          "column": 26,
                          "line": 31
                        }
                      },
                      "range": [
                        701,
                        712
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "BaseProps",
                          "optional": false,
                          "range": [
                            703,
                            712
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 31
                            },
                            "start": {
                              "column": 28,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          703,
                          712
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 31
                          },
                          "start": {
                            "column": 28,
                            "line": 31
                          }
                        }
                      }
                    },
                    "range": [
                      696,
                      712
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 31
                      },
                      "start": {
                        "column": 21,
                        "line": 31
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 31
                    },
                    "start": {
                      "column": 39,
                      "line": 31
                    }
                  },
                  "range": [
                    714,
                    721
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      717,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 31
                      },
                      "start": {
                        "column": 42,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  695,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 31
                  },
                  "start": {
                    "column": 20,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              689,
              721
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 31
              },
              "start": {
                "column": 14,
                "line": 31
              }
            }
          },
          "init": null,
          "range": [
            689,
            721
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 31
            },
            "start": {
              "column": 14,
              "line": 31
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        675,
        722
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        724,
        792
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
              "name": "StyledSelect",
              "optional": false,
              "range": [
                737,
                749
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 13,
                  "line": 33
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
                        "name": "as",
                        "optional": false,
                        "range": [
                          775,
                          777
                        ],
                        "loc": {
                          "end": {
                            "column": 4,
                            "line": 34
                          },
                          "start": {
                            "column": 2,
                            "line": 34
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"select\"",
                        "value": "select",
                        "range": [
                          779,
                          787
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 34
                          },
                          "start": {
                            "column": 6,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        775,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 34
                        },
                        "start": {
                          "column": 2,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "range": [
                    771,
                    790
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 35
                    },
                    "start": {
                      "column": 47,
                      "line": 33
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Flex",
                      "optional": false,
                      "range": [
                        759,
                        763
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 33
                        },
                        "start": {
                          "column": 35,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "styled",
                    "optional": false,
                    "range": [
                      752,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 33
                      },
                      "start": {
                        "column": 28,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    752,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 33
                    },
                    "start": {
                      "column": 28,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attrs",
                  "optional": false,
                  "range": [
                    765,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 33
                    },
                    "start": {
                      "column": 41,
                      "line": 33
                    }
                  }
                },
                "range": [
                  752,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 33
                  },
                  "start": {
                    "column": 28,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                752,
                791
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 35
                },
                "start": {
                  "column": 28,
                  "line": 33
                }
              }
            },
            "range": [
              737,
              791
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 35
              },
              "start": {
                "column": 13,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          731,
          792
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 33
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
