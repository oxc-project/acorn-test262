__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    617
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          21,
          43
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  },
                  "range": [
                    27,
                    31
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "To",
                      "optional": false,
                      "range": [
                        29,
                        31
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 2
                        },
                        "start": {
                          "column": 6,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      29,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 2
                      },
                      "start": {
                        "column": 6,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  26,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 2
                  },
                  "start": {
                    "column": 3,
                    "line": 2
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                32,
                40
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              25,
              41
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pretty",
        "optional": false,
        "range": [
          10,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          20
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "To",
              "optional": false,
              "range": [
                17,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
          65,
          99
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pretty",
              "optional": false,
              "range": [
                78,
                84
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "optional": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              },
              "range": [
                85,
                96
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    93,
                    96
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          94,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        94,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pretty",
                  "optional": false,
                  "range": [
                    87,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                },
                "range": [
                  87,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              69,
              97
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "range": [
          55,
          61
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        },
        "range": [
          61,
          64
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
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              62,
              63
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 17,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        45,
        99
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          120,
          136
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                130,
                133
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "range": [
                  132,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 11,
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
              124,
              134
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 19,
            "line": 9
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "range": [
          111,
          116
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        },
        "range": [
          116,
          119
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
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              117,
              118
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        101,
        136
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              },
              "range": [
                157,
                282
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identifier",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      },
                      "range": [
                        179,
                        187
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          181,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      169,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 15
                    }
                  },
                  "range": [
                    191,
                    282
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          },
                          "range": [
                            212,
                            220
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Fields",
                              "optional": false,
                              "range": [
                                214,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 16
                                },
                                "start": {
                                  "column": 10,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              214,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 16
                              },
                              "start": {
                                "column": 10,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          206,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 16
                          },
                          "start": {
                            "column": 2,
                            "line": 16
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "annotations",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          },
                          "range": [
                            236,
                            250
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                244,
                                250
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Self",
                                    "optional": false,
                                    "range": [
                                      245,
                                      249
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    245,
                                    249
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 17
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 17
                                },
                                "start": {
                                  "column": 22,
                                  "line": 17
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Schema",
                              "optional": false,
                              "range": [
                                238,
                                244
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 17
                                },
                                "start": {
                                  "column": 16,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              238,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 17
                              },
                              "start": {
                                "column": 16,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          224,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 17
                          },
                          "start": {
                            "column": 2,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 18
                        },
                        "start": {
                          "column": 2,
                          "line": 18
                        }
                      },
                      "range": [
                        254,
                        282
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            262,
                            282
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  273,
                                  281
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Fields",
                                      "optional": false,
                                      "range": [
                                        274,
                                        280
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 18
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 18
                                        }
                                      }
                                    },
                                    "range": [
                                      274,
                                      280
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 18
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 18
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "OutputFrom",
                                "optional": false,
                                "range": [
                                  263,
                                  273
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                263,
                                281
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 18
                                },
                                "start": {
                                  "column": 11,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 18
                            },
                            "start": {
                              "column": 10,
                              "line": 18
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Class",
                          "optional": false,
                          "range": [
                            257,
                            262
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 18
                            },
                            "start": {
                              "column": 5,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          257,
                          282
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 18
                          },
                          "start": {
                            "column": 5,
                            "line": 18
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 15
                        },
                        "start": {
                          "column": 5,
                          "line": 15
                        }
                      },
                      "range": [
                        194,
                        202
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Fields",
                            "optional": false,
                            "range": [
                              195,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 15
                              },
                              "start": {
                                "column": 6,
                                "line": 15
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            195,
                            201
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 15
                            },
                            "start": {
                              "column": 6,
                              "line": 15
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      194,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 5,
                        "line": 15
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  },
                  "range": [
                    159,
                    165
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Self",
                        "optional": false,
                        "range": [
                          160,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 13
                          },
                          "start": {
                            "column": 22,
                            "line": 13
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        160,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 13
                        },
                        "start": {
                          "column": 22,
                          "line": 13
                        }
                      }
                    }
                  ]
                },
                "range": [
                  159,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 21,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              152,
              282
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "init": null,
          "range": [
            152,
            282
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 13
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        138,
        283
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "range": [
          290,
          294
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
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
              "name": "_TOutput",
              "optional": false,
              "range": [
                310,
                318
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 21
                },
                "start": {
                  "column": 2,
                  "line": 21
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
                  "line": 21
                },
                "start": {
                  "column": 10,
                  "line": 21
                }
              },
              "range": [
                318,
                327
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOutput",
                  "optional": false,
                  "range": [
                    320,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                "range": [
                  320,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              310,
              328
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "range": [
          306,
          330
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 21,
            "line": 20
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        },
        "range": [
          294,
          303
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOutput",
              "optional": false,
              "range": [
                295,
                302
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              295,
              302
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 20
              },
              "start": {
                "column": 10,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        285,
        331
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OutputFrom",
        "optional": false,
        "range": [
          338,
          348
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFields",
              "optional": false,
              "range": [
                376,
                383
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "range": [
              376,
              383
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
              }
            }
          },
          "range": [
            370,
            383
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 25
            },
            "start": {
              "column": 8,
              "line": 25
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            365,
            366
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 25
            },
            "start": {
              "column": 3,
              "line": 25
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"_TOutput\"",
              "value": "_TOutput",
              "range": [
                386,
                396
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "range": [
              386,
              396
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    419,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 25
                    },
                    "start": {
                      "column": 57,
                      "line": 25
                    }
                  }
                },
                "range": [
                  419,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 25
                  },
                  "start": {
                    "column": 57,
                    "line": 25
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFields",
                  "optional": false,
                  "range": [
                    411,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 25
                    },
                    "start": {
                      "column": 49,
                      "line": 25
                    }
                  }
                },
                "range": [
                  411,
                  418
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 25
                  },
                  "start": {
                    "column": 49,
                    "line": 25
                  }
                }
              },
              "range": [
                411,
                421
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 25
                },
                "start": {
                  "column": 49,
                  "line": 25
                }
              }
            },
            "range": [
              405,
              421
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 25
              },
              "start": {
                "column": 43,
                "line": 25
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              457,
              462
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"_TOutput\"",
                "value": "_TOutput",
                "range": [
                  439,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 26
                  },
                  "start": {
                    "column": 17,
                    "line": 26
                  }
                }
              },
              "range": [
                439,
                449
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              }
            },
            "objectType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    436,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 26
                    },
                    "start": {
                      "column": 14,
                      "line": 26
                    }
                  }
                },
                "range": [
                  436,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFields",
                  "optional": false,
                  "range": [
                    428,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  }
                },
                "range": [
                  428,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 6,
                    "line": 26
                  }
                }
              },
              "range": [
                428,
                438
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            },
            "range": [
              428,
              450
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "range": [
            386,
            462
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 27
            },
            "start": {
              "column": 24,
              "line": 25
            }
          }
        },
        "range": [
          360,
          465
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 27,
            "line": 24
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 24
          },
          "start": {
            "column": 15,
            "line": 24
          }
        },
        "range": [
          348,
          357
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFields",
              "optional": false,
              "range": [
                349,
                356
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 16,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              349,
              356
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 24
              },
              "start": {
                "column": 16,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        333,
        466
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
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
        "name": "string",
        "optional": false,
        "range": [
          485,
          491
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 30
          },
          "start": {
            "column": 17,
            "line": 30
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 30
          },
          "start": {
            "column": 25,
            "line": 30
          }
        },
        "range": [
          493,
          507
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              499,
              507
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  500,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 30
                  },
                  "start": {
                    "column": 32,
                    "line": 30
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 30
              },
              "start": {
                "column": 31,
                "line": 30
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "range": [
              495,
              499
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 27,
                "line": 30
              }
            }
          },
          "range": [
            495,
            507
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 30
            },
            "start": {
              "column": 27,
              "line": 30
            }
          }
        }
      },
      "range": [
        468,
        508
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        510,
        616
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            614,
            616
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 4,
              "line": 37
            },
            "start": {
              "column": 2,
              "line": 37
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
            523,
            524
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 32
            },
            "start": {
              "column": 13,
              "line": 32
            }
          }
        },
        "implements": [],
        "superClass": {
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      552,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
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
                    "name": "string",
                    "optional": false,
                    "range": [
                      555,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 7,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    552,
                    561
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
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
                550,
                563
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pretty",
                    "optional": false,
                    "range": [
                      573,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
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
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            603,
                            604
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 35
                            },
                            "start": {
                              "column": 34,
                              "line": 35
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
                          "name": "JSON",
                          "optional": false,
                          "range": [
                            588,
                            592
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 35
                            },
                            "start": {
                              "column": 19,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringify",
                          "optional": false,
                          "range": [
                            593,
                            602
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 35
                            },
                            "start": {
                              "column": 24,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          588,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 35
                          },
                          "start": {
                            "column": 19,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        588,
                        605
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 35
                        },
                        "start": {
                          "column": 19,
                          "line": 35
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          582,
                          583
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 35
                          },
                          "start": {
                            "column": 13,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      581,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 35
                      },
                      "start": {
                        "column": 12,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    573,
                    605
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                567,
                610
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 36
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            }
          ],
          "callee": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"A\"",
                "value": "A",
                "range": [
                  542,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 32
                  },
                  "start": {
                    "column": 32,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "range": [
                533,
                538
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 32
                },
                "start": {
                  "column": 23,
                  "line": 32
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                538,
                541
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      539,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 32
                      },
                      "start": {
                        "column": 29,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    539,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 32
                    },
                    "start": {
                      "column": 29,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 32
                },
                "start": {
                  "column": 28,
                  "line": 32
                }
              }
            },
            "range": [
              533,
              546
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          },
          "optional": false,
          "range": [
            533,
            613
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 23,
              "line": 32
            }
          }
        },
        "range": [
          517,
          616
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 32
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 4,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
