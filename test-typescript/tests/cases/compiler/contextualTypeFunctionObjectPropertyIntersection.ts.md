__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    2832
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "range": [
          27,
          33
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ev",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 3
                },
                "start": {
                  "column": 50,
                  "line": 3
                }
              },
              "range": [
                72,
                80
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "range": [
                    74,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 3
                    },
                    "start": {
                      "column": 52,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 3
                  },
                  "start": {
                    "column": 52,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              70,
              80
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 3
              },
              "start": {
                "column": 48,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 67,
              "line": 3
            },
            "start": {
              "column": 60,
              "line": 3
            }
          },
          "range": [
            82,
            89
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              85,
              89
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 3
              },
              "start": {
                "column": 63,
                "line": 3
              }
            }
          }
        },
        "range": [
          69,
          89
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 3
          },
          "start": {
            "column": 47,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          33,
          66
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      51,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
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
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    },
                    "range": [
                      55,
                      63
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        57,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 3
                        },
                        "start": {
                          "column": 35,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    51,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                49,
                65
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "range": [
                34,
                40
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              34,
              65
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        90
      ],
      "loc": {
        "end": {
          "column": 68,
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
          149,
          318
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "schema",
              "optional": false,
              "range": [
                153,
                159
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 6
                },
                "start": {
                  "column": 2,
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
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                159,
                186
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
                      "name": "events",
                      "optional": false,
                      "range": [
                        167,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
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
                          "line": 7
                        },
                        "start": {
                          "column": 10,
                          "line": 7
                        }
                      },
                      "range": [
                        173,
                        181
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "range": [
                            175,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          175,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      167,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  161,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              153,
              187
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "range": [
                190,
                192
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
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
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              },
              "range": [
                193,
                315
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"type\"",
                          "value": "type",
                          "range": [
                            214,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          214,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 10
                          },
                          "start": {
                            "column": 17,
                            "line": 10
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "range": [
                            207,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 10
                            },
                            "start": {
                              "column": 10,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          207,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 10
                          },
                          "start": {
                            "column": 10,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        207,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        202,
                        203
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
                    "nameType": null,
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          231,
                          276
                        ],
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "range": [
                                  232,
                                  238
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                232,
                                238
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 10
                                },
                                "start": {
                                  "column": 35,
                                  "line": 10
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      249,
                                      253
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 52,
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
                                        "column": 59,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 10
                                      }
                                    },
                                    "range": [
                                      253,
                                      256
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "range": [
                                          255,
                                          256
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 59,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 58,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        255,
                                        256
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 59,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 58,
                                          "line": 10
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    249,
                                    256
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 10
                                    }
                                  }
                                }
                              ],
                              "range": [
                                247,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 10
                                },
                                "start": {
                                  "column": 50,
                                  "line": 10
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                270,
                                275
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 10
                                },
                                "start": {
                                  "column": 73,
                                  "line": 10
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "range": [
                                  261,
                                  267
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                261,
                                267
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 10
                                },
                                "start": {
                                  "column": 64,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              232,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 10
                              },
                              "start": {
                                "column": 35,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 10
                          },
                          "start": {
                            "column": 34,
                            "line": 10
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "range": [
                          225,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 10
                          },
                          "start": {
                            "column": 28,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        225,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 10
                        },
                        "start": {
                          "column": 28,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      195,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 11
                      },
                      "start": {
                        "column": 7,
                        "line": 9
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
                          "type": "Literal",
                          "raw": "\"*\"",
                          "value": "*",
                          "range": [
                            290,
                            293
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 12
                            },
                            "start": {
                              "column": 4,
                              "line": 12
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
                              "column": 24,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          },
                          "range": [
                            294,
                            310
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                302,
                                310
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TEvent",
                                    "optional": false,
                                    "range": [
                                      303,
                                      309
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    303,
                                    309
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 12
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 12
                                },
                                "start": {
                                  "column": 16,
                                  "line": 12
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Action",
                              "optional": false,
                              "range": [
                                296,
                                302
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
                            },
                            "range": [
                              296,
                              310
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
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
                          290,
                          311
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 4,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      284,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 13
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  195,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              190,
              316
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 57,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "range": [
          102,
          115
        ],
        "loc": {
          "end": {
            "column": 23,
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
            "column": 56,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 5
          }
        },
        "range": [
          115,
          148
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      133,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 41,
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
                        "column": 53,
                        "line": 5
                      },
                      "start": {
                        "column": 45,
                        "line": 5
                      }
                    },
                    "range": [
                      137,
                      145
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        139,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 5
                        },
                        "start": {
                          "column": 47,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    133,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 41,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                131,
                147
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 5
                },
                "start": {
                  "column": 39,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "range": [
                116,
                122
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              116,
              147
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 5
              },
              "start": {
                "column": 24,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        92,
        318
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
        "name": "createMachine",
        "optional": false,
        "range": [
          337,
          350
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            },
            "range": [
              393,
              416
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  408,
                  416
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TEvent",
                      "optional": false,
                      "range": [
                        409,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      409,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
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
                    "column": 31,
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
                "name": "MachineConfig",
                "optional": false,
                "range": [
                  395,
                  408
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
                395,
                416
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              }
            }
          },
          "range": [
            387,
            416
          ],
          "loc": {
            "end": {
              "column": 31,
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
            "column": 7,
            "line": 18
          },
          "start": {
            "column": 1,
            "line": 18
          }
        },
        "range": [
          418,
          424
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            420,
            424
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 18
            },
            "start": {
              "column": 3,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 63,
            "line": 16
          },
          "start": {
            "column": 30,
            "line": 16
          }
        },
        "range": [
          350,
          383
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      368,
                      372
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 16
                      },
                      "start": {
                        "column": 48,
                        "line": 16
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
                        "column": 60,
                        "line": 16
                      },
                      "start": {
                        "column": 52,
                        "line": 16
                      }
                    },
                    "range": [
                      372,
                      380
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        374,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 16
                        },
                        "start": {
                          "column": 54,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    368,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 16
                    },
                    "start": {
                      "column": 48,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                366,
                382
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 16
                },
                "start": {
                  "column": 46,
                  "line": 16
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "range": [
                351,
                357
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 16
                },
                "start": {
                  "column": 31,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              351,
              382
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 16
              },
              "start": {
                "column": 31,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        320,
        425
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 18
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
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "range": [
                    445,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 21
                    },
                    "start": {
                      "column": 2,
                      "line": 21
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
                        "name": "events",
                        "optional": false,
                        "range": [
                          459,
                          465
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
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            467,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        },
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      475,
                                      479
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 22
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
                                        "column": 31,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 22
                                      }
                                    },
                                    "range": [
                                      479,
                                      486
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"FOO\"",
                                        "value": "FOO",
                                        "range": [
                                          481,
                                          486
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
                                      "range": [
                                        481,
                                        486
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
                                    }
                                  },
                                  "range": [
                                    475,
                                    486
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "range": [
                                473,
                                488
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 22
                                },
                                "start": {
                                  "column": 18,
                                  "line": 22
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      493,
                                      497
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 22
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
                                        "column": 49,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 22
                                      }
                                    },
                                    "range": [
                                      497,
                                      504
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"BAR\"",
                                        "value": "BAR",
                                        "range": [
                                          499,
                                          504
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 22
                                          }
                                        }
                                      },
                                      "range": [
                                        499,
                                        504
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
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
                                    493,
                                    504
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "range": [
                                491,
                                506
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 22
                                },
                                "start": {
                                  "column": 36,
                                  "line": 22
                                }
                              }
                            }
                          ],
                          "range": [
                            473,
                            506
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 22
                            },
                            "start": {
                              "column": 18,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          467,
                          506
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        459,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
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
                    453,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 23
                    },
                    "start": {
                      "column": 10,
                      "line": 21
                    }
                  }
                },
                "range": [
                  445,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 23
                  },
                  "start": {
                    "column": 2,
                    "line": 21
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "range": [
                    515,
                    517
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 24
                    },
                    "start": {
                      "column": 2,
                      "line": 24
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
                        "name": "FOO",
                        "optional": false,
                        "range": [
                          525,
                          528
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 25
                          },
                          "start": {
                            "column": 4,
                            "line": 25
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "range": [
                                    546,
                                    548
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
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    549,
                                    553
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  546,
                                  553
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
                                546,
                                554
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 26
                                },
                                "start": {
                                  "column": 6,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            538,
                            579
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 27
                            },
                            "start": {
                              "column": 17,
                              "line": 25
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
                            "name": "ev",
                            "optional": false,
                            "range": [
                              531,
                              533
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 25
                              },
                              "start": {
                                "column": 10,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "range": [
                          530,
                          579
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 27
                          },
                          "start": {
                            "column": 9,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        525,
                        579
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 4,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "range": [
                    519,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 28
                    },
                    "start": {
                      "column": 6,
                      "line": 24
                    }
                  }
                },
                "range": [
                  515,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 28
                  },
                  "start": {
                    "column": 2,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              441,
              587
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 29
              },
              "start": {
                "column": 14,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "range": [
            427,
            440
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          427,
          588
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        427,
        589
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 20
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
                  "name": "schema",
                  "optional": false,
                  "range": [
                    609,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 32
                    },
                    "start": {
                      "column": 2,
                      "line": 32
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
                        "name": "events",
                        "optional": false,
                        "range": [
                          623,
                          629
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
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
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            631,
                            633
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        },
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      639,
                                      643
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 33
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
                                        "column": 31,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 33
                                      }
                                    },
                                    "range": [
                                      643,
                                      650
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"FOO\"",
                                        "value": "FOO",
                                        "range": [
                                          645,
                                          650
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 33
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 33
                                          }
                                        }
                                      },
                                      "range": [
                                        645,
                                        650
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 33
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 33
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    639,
                                    650
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "range": [
                                637,
                                652
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 33
                                },
                                "start": {
                                  "column": 18,
                                  "line": 33
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      657,
                                      661
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 33
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
                                        "column": 49,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 33
                                      }
                                    },
                                    "range": [
                                      661,
                                      668
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"BAR\"",
                                        "value": "BAR",
                                        "range": [
                                          663,
                                          668
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 33
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 33
                                          }
                                        }
                                      },
                                      "range": [
                                        663,
                                        668
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 33
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 33
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    657,
                                    668
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "range": [
                                655,
                                670
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 33
                                },
                                "start": {
                                  "column": 36,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "range": [
                            637,
                            670
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 33
                            },
                            "start": {
                              "column": 18,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          631,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        623,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
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
                    617,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 32
                    }
                  }
                },
                "range": [
                  609,
                  675
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 32
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "range": [
                    679,
                    681
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 35
                    },
                    "start": {
                      "column": 2,
                      "line": 35
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
                        "type": "Literal",
                        "raw": "\"*\"",
                        "value": "*",
                        "range": [
                          689,
                          692
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 36
                          },
                          "start": {
                            "column": 4,
                            "line": 36
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "range": [
                                    710,
                                    712
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 37
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    713,
                                    717
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 37
                                    }
                                  }
                                },
                                "range": [
                                  710,
                                  717
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                710,
                                718
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 37
                                },
                                "start": {
                                  "column": 6,
                                  "line": 37
                                }
                              }
                            }
                          ],
                          "range": [
                            702,
                            751
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 38
                            },
                            "start": {
                              "column": 17,
                              "line": 36
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
                            "name": "ev",
                            "optional": false,
                            "range": [
                              695,
                              697
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 36
                              },
                              "start": {
                                "column": 10,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "range": [
                          694,
                          751
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 38
                          },
                          "start": {
                            "column": 9,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        689,
                        751
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 38
                        },
                        "start": {
                          "column": 4,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    683,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 39
                    },
                    "start": {
                      "column": 6,
                      "line": 35
                    }
                  }
                },
                "range": [
                  679,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 39
                  },
                  "start": {
                    "column": 2,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              605,
              759
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 40
              },
              "start": {
                "column": 14,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "range": [
            591,
            604
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          591,
          760
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        591,
        761
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          821,
          1033
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "schema",
              "optional": false,
              "range": [
                825,
                831
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 43
                },
                "start": {
                  "column": 2,
                  "line": 43
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
                  "column": 3,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 43
                }
              },
              "range": [
                831,
                858
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
                      "name": "events",
                      "optional": false,
                      "range": [
                        839,
                        845
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 44
                        },
                        "start": {
                          "column": 4,
                          "line": 44
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
                          "line": 44
                        },
                        "start": {
                          "column": 10,
                          "line": 44
                        }
                      },
                      "range": [
                        845,
                        853
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "range": [
                            847,
                            853
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 44
                            },
                            "start": {
                              "column": 12,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          847,
                          853
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      839,
                      854
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 44
                      },
                      "start": {
                        "column": 4,
                        "line": 44
                      }
                    }
                  }
                ],
                "range": [
                  833,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 45
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              825,
              859
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "range": [
                862,
                864
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 46
                },
                "start": {
                  "column": 2,
                  "line": 46
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
                  "column": 3,
                  "line": 50
                },
                "start": {
                  "column": 5,
                  "line": 46
                }
              },
              "range": [
                865,
                1030
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"type\"",
                          "value": "type",
                          "range": [
                            886,
                            892
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 47
                            },
                            "start": {
                              "column": 17,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          886,
                          892
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 47
                          },
                          "start": {
                            "column": 17,
                            "line": 47
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "range": [
                            879,
                            885
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 47
                            },
                            "start": {
                              "column": 10,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          879,
                          885
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 47
                          },
                          "start": {
                            "column": 10,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        879,
                        893
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 47
                        },
                        "start": {
                          "column": 10,
                          "line": 47
                        }
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        874,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 47
                        },
                        "start": {
                          "column": 5,
                          "line": 47
                        }
                      }
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            897,
                            898
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 47
                            },
                            "start": {
                              "column": 28,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          897,
                          898
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 47
                          },
                          "start": {
                            "column": 28,
                            "line": 47
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            916,
                            924
                          ],
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                917,
                                923
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 47
                                },
                                "start": {
                                  "column": 48,
                                  "line": 47
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 47
                            },
                            "start": {
                              "column": 47,
                              "line": 47
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Uppercase",
                          "optional": false,
                          "range": [
                            907,
                            916
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 47
                            },
                            "start": {
                              "column": 38,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          907,
                          924
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 47
                          },
                          "start": {
                            "column": 38,
                            "line": 47
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "range": [
                          931,
                          936
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 47
                          },
                          "start": {
                            "column": 62,
                            "line": 47
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            927,
                            928
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 47
                            },
                            "start": {
                              "column": 58,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          927,
                          928
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 47
                          },
                          "start": {
                            "column": 58,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        897,
                        936
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 47
                        },
                        "start": {
                          "column": 28,
                          "line": 47
                        }
                      }
                    },
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          946,
                          991
                        ],
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "range": [
                                  947,
                                  953
                                ],
                                "loc": {
                                  "end": {
                                    "column": 84,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 47
                                  }
                                }
                              },
                              "range": [
                                947,
                                953
                              ],
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 47
                                },
                                "start": {
                                  "column": 78,
                                  "line": 47
                                }
                              }
                            },
                            "extendsType": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      964,
                                      968
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 99,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 95,
                                        "line": 47
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
                                        "column": 102,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 99,
                                        "line": 47
                                      }
                                    },
                                    "range": [
                                      968,
                                      971
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "range": [
                                          970,
                                          971
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 102,
                                            "line": 47
                                          },
                                          "start": {
                                            "column": 101,
                                            "line": 47
                                          }
                                        }
                                      },
                                      "range": [
                                        970,
                                        971
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 102,
                                          "line": 47
                                        },
                                        "start": {
                                          "column": 101,
                                          "line": 47
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    964,
                                    971
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 102,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 95,
                                      "line": 47
                                    }
                                  }
                                }
                              ],
                              "range": [
                                962,
                                973
                              ],
                              "loc": {
                                "end": {
                                  "column": 104,
                                  "line": 47
                                },
                                "start": {
                                  "column": 93,
                                  "line": 47
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                985,
                                990
                              ],
                              "loc": {
                                "end": {
                                  "column": 121,
                                  "line": 47
                                },
                                "start": {
                                  "column": 116,
                                  "line": 47
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "range": [
                                  976,
                                  982
                                ],
                                "loc": {
                                  "end": {
                                    "column": 113,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 107,
                                    "line": 47
                                  }
                                }
                              },
                              "range": [
                                976,
                                982
                              ],
                              "loc": {
                                "end": {
                                  "column": 113,
                                  "line": 47
                                },
                                "start": {
                                  "column": 107,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              947,
                              990
                            ],
                            "loc": {
                              "end": {
                                "column": 121,
                                "line": 47
                              },
                              "start": {
                                "column": 78,
                                "line": 47
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 122,
                            "line": 47
                          },
                          "start": {
                            "column": 77,
                            "line": 47
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "range": [
                          940,
                          946
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 47
                          },
                          "start": {
                            "column": 71,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        940,
                        991
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 47
                        },
                        "start": {
                          "column": 71,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      867,
                      996
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 48
                      },
                      "start": {
                        "column": 7,
                        "line": 46
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
                          "type": "Literal",
                          "raw": "\"*\"",
                          "value": "*",
                          "range": [
                            1005,
                            1008
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 49
                            },
                            "start": {
                              "column": 4,
                              "line": 49
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
                              "column": 24,
                              "line": 49
                            },
                            "start": {
                              "column": 8,
                              "line": 49
                            }
                          },
                          "range": [
                            1009,
                            1025
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                1017,
                                1025
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TEvent",
                                    "optional": false,
                                    "range": [
                                      1018,
                                      1024
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    1018,
                                    1024
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 49
                                },
                                "start": {
                                  "column": 16,
                                  "line": 49
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Action",
                              "optional": false,
                              "range": [
                                1011,
                                1017
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 49
                                },
                                "start": {
                                  "column": 10,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              1011,
                              1025
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 49
                              },
                              "start": {
                                "column": 10,
                                "line": 49
                              }
                            }
                          }
                        },
                        "range": [
                          1005,
                          1026
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 49
                          },
                          "start": {
                            "column": 4,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "range": [
                      999,
                      1030
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 50
                      },
                      "start": {
                        "column": 6,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  867,
                  1030
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 50
                  },
                  "start": {
                    "column": 7,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              862,
              1031
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 50
              },
              "start": {
                "column": 2,
                "line": 46
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 58,
            "line": 42
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig2",
        "optional": false,
        "range": [
          773,
          787
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 42
          },
          "start": {
            "column": 10,
            "line": 42
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 42
          },
          "start": {
            "column": 24,
            "line": 42
          }
        },
        "range": [
          787,
          820
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      805,
                      809
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 42
                      },
                      "start": {
                        "column": 42,
                        "line": 42
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
                        "column": 54,
                        "line": 42
                      },
                      "start": {
                        "column": 46,
                        "line": 42
                      }
                    },
                    "range": [
                      809,
                      817
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        811,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 42
                        },
                        "start": {
                          "column": 48,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    805,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 42
                    },
                    "start": {
                      "column": 42,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                803,
                819
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 42
                },
                "start": {
                  "column": 40,
                  "line": 42
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "range": [
                788,
                794
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 42
                },
                "start": {
                  "column": 25,
                  "line": 42
                }
              }
            },
            "out": false,
            "range": [
              788,
              819
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 42
              },
              "start": {
                "column": 25,
                "line": 42
              }
            }
          }
        ]
      },
      "range": [
        763,
        1033
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 42
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
        "name": "createMachine2",
        "optional": false,
        "range": [
          1052,
          1066
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 53
          },
          "start": {
            "column": 17,
            "line": 53
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 54
              },
              "start": {
                "column": 8,
                "line": 54
              }
            },
            "range": [
              1109,
              1133
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1125,
                  1133
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TEvent",
                      "optional": false,
                      "range": [
                        1126,
                        1132
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 54
                        },
                        "start": {
                          "column": 25,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1126,
                      1132
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 54
                      },
                      "start": {
                        "column": 25,
                        "line": 54
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 54
                  },
                  "start": {
                    "column": 24,
                    "line": 54
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig2",
                "optional": false,
                "range": [
                  1111,
                  1125
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
                  }
                }
              },
              "range": [
                1111,
                1133
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 54
                },
                "start": {
                  "column": 10,
                  "line": 54
                }
              }
            }
          },
          "range": [
            1103,
            1133
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 54
            },
            "start": {
              "column": 2,
              "line": 54
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 55
          },
          "start": {
            "column": 1,
            "line": 55
          }
        },
        "range": [
          1135,
          1141
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1137,
            1141
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 55
            },
            "start": {
              "column": 3,
              "line": 55
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 53
          },
          "start": {
            "column": 31,
            "line": 53
          }
        },
        "range": [
          1066,
          1099
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      1084,
                      1088
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 53
                      },
                      "start": {
                        "column": 49,
                        "line": 53
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
                        "column": 61,
                        "line": 53
                      },
                      "start": {
                        "column": 53,
                        "line": 53
                      }
                    },
                    "range": [
                      1088,
                      1096
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1090,
                        1096
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 53
                        },
                        "start": {
                          "column": 55,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1084,
                    1096
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 53
                    },
                    "start": {
                      "column": 49,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                1082,
                1098
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 53
                },
                "start": {
                  "column": 47,
                  "line": 53
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "range": [
                1067,
                1073
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 53
                },
                "start": {
                  "column": 32,
                  "line": 53
                }
              }
            },
            "out": false,
            "range": [
              1067,
              1098
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 53
              },
              "start": {
                "column": 32,
                "line": 53
              }
            }
          }
        ]
      },
      "range": [
        1035,
        1142
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 53
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
                  "name": "schema",
                  "optional": false,
                  "range": [
                    1163,
                    1169
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 58
                    },
                    "start": {
                      "column": 2,
                      "line": 58
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
                        "name": "events",
                        "optional": false,
                        "range": [
                          1177,
                          1183
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 59
                          },
                          "start": {
                            "column": 4,
                            "line": 59
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
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            1185,
                            1187
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 59
                            },
                            "start": {
                              "column": 12,
                              "line": 59
                            }
                          }
                        },
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      1193,
                                      1197
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 59
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 59
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
                                        "column": 31,
                                        "line": 59
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 59
                                      }
                                    },
                                    "range": [
                                      1197,
                                      1204
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"FOO\"",
                                        "value": "FOO",
                                        "range": [
                                          1199,
                                          1204
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 59
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 59
                                          }
                                        }
                                      },
                                      "range": [
                                        1199,
                                        1204
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 59
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 59
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1193,
                                    1204
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 59
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 59
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1191,
                                1206
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 59
                                },
                                "start": {
                                  "column": 18,
                                  "line": 59
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      1211,
                                      1215
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 59
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 59
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
                                        "column": 49,
                                        "line": 59
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 59
                                      }
                                    },
                                    "range": [
                                      1215,
                                      1222
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"bar\"",
                                        "value": "bar",
                                        "range": [
                                          1217,
                                          1222
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 59
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 59
                                          }
                                        }
                                      },
                                      "range": [
                                        1217,
                                        1222
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 59
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 59
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1211,
                                    1222
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 59
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 59
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1209,
                                1224
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 59
                                },
                                "start": {
                                  "column": 36,
                                  "line": 59
                                }
                              }
                            }
                          ],
                          "range": [
                            1191,
                            1224
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 59
                            },
                            "start": {
                              "column": 18,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1185,
                          1224
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1177,
                        1224
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 59
                        },
                        "start": {
                          "column": 4,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "range": [
                    1171,
                    1229
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 60
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1163,
                  1229
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 60
                  },
                  "start": {
                    "column": 2,
                    "line": 58
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "range": [
                    1233,
                    1235
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 61
                    },
                    "start": {
                      "column": 2,
                      "line": 61
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
                        "name": "FOO",
                        "optional": false,
                        "range": [
                          1243,
                          1246
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 62
                          },
                          "start": {
                            "column": 4,
                            "line": 62
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "range": [
                                    1264,
                                    1266
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 63
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    1267,
                                    1271
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 63
                                    }
                                  }
                                },
                                "range": [
                                  1264,
                                  1271
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 63
                                  }
                                }
                              },
                              "range": [
                                1264,
                                1272
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 63
                                },
                                "start": {
                                  "column": 6,
                                  "line": 63
                                }
                              }
                            }
                          ],
                          "range": [
                            1256,
                            1297
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 64
                            },
                            "start": {
                              "column": 17,
                              "line": 62
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
                            "name": "ev",
                            "optional": false,
                            "range": [
                              1249,
                              1251
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 62
                              },
                              "start": {
                                "column": 10,
                                "line": 62
                              }
                            }
                          }
                        ],
                        "range": [
                          1248,
                          1297
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 64
                          },
                          "start": {
                            "column": 9,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1243,
                        1297
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 64
                        },
                        "start": {
                          "column": 4,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "range": [
                    1237,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 65
                    },
                    "start": {
                      "column": 6,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1233,
                  1302
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 65
                  },
                  "start": {
                    "column": 2,
                    "line": 61
                  }
                }
              }
            ],
            "range": [
              1159,
              1305
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 66
              },
              "start": {
                "column": 15,
                "line": 57
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "range": [
            1144,
            1158
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          1144,
          1306
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 66
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1144,
        1307
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 57
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
                  "name": "schema",
                  "optional": false,
                  "range": [
                    1328,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 69
                    },
                    "start": {
                      "column": 2,
                      "line": 69
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
                        "name": "events",
                        "optional": false,
                        "range": [
                          1342,
                          1348
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 70
                          },
                          "start": {
                            "column": 4,
                            "line": 70
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
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            1350,
                            1352
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 70
                            },
                            "start": {
                              "column": 12,
                              "line": 70
                            }
                          }
                        },
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      1358,
                                      1362
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 70
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 70
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
                                        "column": 31,
                                        "line": 70
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 70
                                      }
                                    },
                                    "range": [
                                      1362,
                                      1369
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"FOO\"",
                                        "value": "FOO",
                                        "range": [
                                          1364,
                                          1369
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 70
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 70
                                          }
                                        }
                                      },
                                      "range": [
                                        1364,
                                        1369
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 70
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 70
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1358,
                                    1369
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 70
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 70
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1356,
                                1371
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 70
                                },
                                "start": {
                                  "column": 18,
                                  "line": 70
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      1376,
                                      1380
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 70
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 70
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
                                        "column": 49,
                                        "line": 70
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 70
                                      }
                                    },
                                    "range": [
                                      1380,
                                      1387
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"bar\"",
                                        "value": "bar",
                                        "range": [
                                          1382,
                                          1387
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 70
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 70
                                          }
                                        }
                                      },
                                      "range": [
                                        1382,
                                        1387
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 70
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 70
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1376,
                                    1387
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 70
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 70
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1374,
                                1389
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 70
                                },
                                "start": {
                                  "column": 36,
                                  "line": 70
                                }
                              }
                            }
                          ],
                          "range": [
                            1356,
                            1389
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 70
                            },
                            "start": {
                              "column": 18,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1350,
                          1389
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1342,
                        1389
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 70
                        },
                        "start": {
                          "column": 4,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1336,
                    1394
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1328,
                  1394
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 71
                  },
                  "start": {
                    "column": 2,
                    "line": 69
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "range": [
                    1398,
                    1400
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 72
                    },
                    "start": {
                      "column": 2,
                      "line": 72
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
                        "type": "Literal",
                        "raw": "\"*\"",
                        "value": "*",
                        "range": [
                          1408,
                          1411
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 73
                          },
                          "start": {
                            "column": 4,
                            "line": 73
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "range": [
                                    1429,
                                    1431
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 74
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "range": [
                                    1432,
                                    1436
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 74
                                    }
                                  }
                                },
                                "range": [
                                  1429,
                                  1436
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 74
                                  }
                                }
                              },
                              "range": [
                                1429,
                                1437
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 74
                                },
                                "start": {
                                  "column": 6,
                                  "line": 74
                                }
                              }
                            }
                          ],
                          "range": [
                            1421,
                            1470
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 75
                            },
                            "start": {
                              "column": 17,
                              "line": 73
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
                            "name": "ev",
                            "optional": false,
                            "range": [
                              1414,
                              1416
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 73
                              },
                              "start": {
                                "column": 10,
                                "line": 73
                              }
                            }
                          }
                        ],
                        "range": [
                          1413,
                          1470
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 75
                          },
                          "start": {
                            "column": 9,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        1408,
                        1470
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 75
                        },
                        "start": {
                          "column": 4,
                          "line": 73
                        }
                      }
                    }
                  ],
                  "range": [
                    1402,
                    1475
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 76
                    },
                    "start": {
                      "column": 6,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1398,
                  1475
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 76
                  },
                  "start": {
                    "column": 2,
                    "line": 72
                  }
                }
              }
            ],
            "range": [
              1324,
              1478
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 77
              },
              "start": {
                "column": 15,
                "line": 68
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "range": [
            1309,
            1323
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
            }
          }
        },
        "optional": false,
        "range": [
          1309,
          1479
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 77
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        1309,
        1480
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 68
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
                  "name": "schema",
                  "optional": false,
                  "range": [
                    1501,
                    1507
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 80
                    },
                    "start": {
                      "column": 2,
                      "line": 80
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
                        "name": "events",
                        "optional": false,
                        "range": [
                          1515,
                          1521
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 81
                          },
                          "start": {
                            "column": 4,
                            "line": 81
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
                          "type": "ObjectExpression",
                          "properties": [],
                          "range": [
                            1523,
                            1525
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 81
                            },
                            "start": {
                              "column": 12,
                              "line": 81
                            }
                          }
                        },
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      1531,
                                      1535
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 81
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
                                        "column": 31,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 81
                                      }
                                    },
                                    "range": [
                                      1535,
                                      1542
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"FOO\"",
                                        "value": "FOO",
                                        "range": [
                                          1537,
                                          1542
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 81
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 81
                                          }
                                        }
                                      },
                                      "range": [
                                        1537,
                                        1542
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 81
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1531,
                                    1542
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 81
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1529,
                                1544
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 81
                                },
                                "start": {
                                  "column": 18,
                                  "line": 81
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
                                    "name": "type",
                                    "optional": false,
                                    "range": [
                                      1549,
                                      1553
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 81
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
                                        "column": 49,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 81
                                      }
                                    },
                                    "range": [
                                      1553,
                                      1560
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "raw": "\"bar\"",
                                        "value": "bar",
                                        "range": [
                                          1555,
                                          1560
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 81
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 81
                                          }
                                        }
                                      },
                                      "range": [
                                        1555,
                                        1560
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 81
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    1549,
                                    1560
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 81
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1547,
                                1562
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 81
                                },
                                "start": {
                                  "column": 36,
                                  "line": 81
                                }
                              }
                            }
                          ],
                          "range": [
                            1529,
                            1562
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 81
                            },
                            "start": {
                              "column": 18,
                              "line": 81
                            }
                          }
                        },
                        "range": [
                          1523,
                          1562
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 81
                          },
                          "start": {
                            "column": 12,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        1515,
                        1562
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 81
                        },
                        "start": {
                          "column": 4,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "range": [
                    1509,
                    1567
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 82
                    },
                    "start": {
                      "column": 10,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1501,
                  1567
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 82
                  },
                  "start": {
                    "column": 2,
                    "line": 80
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "range": [
                    1571,
                    1573
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 83
                    },
                    "start": {
                      "column": 2,
                      "line": 83
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
                        "name": "bar",
                        "optional": false,
                        "range": [
                          1581,
                          1584
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 84
                          },
                          "start": {
                            "column": 4,
                            "line": 84
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ev",
                                "optional": false,
                                "range": [
                                  1602,
                                  1604
                                ],
                                "loc": {
                                  "end": {
                                    "column": 8,
                                    "line": 85
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 85
                                  }
                                }
                              },
                              "range": [
                                1602,
                                1604
                              ],
                              "loc": {
                                "end": {
                                  "column": 8,
                                  "line": 85
                                },
                                "start": {
                                  "column": 6,
                                  "line": 85
                                }
                              }
                            }
                          ],
                          "range": [
                            1594,
                            1617
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 86
                            },
                            "start": {
                              "column": 17,
                              "line": 84
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
                            "name": "ev",
                            "optional": false,
                            "range": [
                              1587,
                              1589
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 84
                              },
                              "start": {
                                "column": 10,
                                "line": 84
                              }
                            }
                          }
                        ],
                        "range": [
                          1586,
                          1617
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 86
                          },
                          "start": {
                            "column": 9,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        1581,
                        1617
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 86
                        },
                        "start": {
                          "column": 4,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "range": [
                    1575,
                    1622
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 87
                    },
                    "start": {
                      "column": 6,
                      "line": 83
                    }
                  }
                },
                "range": [
                  1571,
                  1622
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 87
                  },
                  "start": {
                    "column": 2,
                    "line": 83
                  }
                }
              }
            ],
            "range": [
              1497,
              1625
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 88
              },
              "start": {
                "column": 15,
                "line": 79
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "range": [
            1482,
            1496
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 79
            },
            "start": {
              "column": 0,
              "line": 79
            }
          }
        },
        "optional": false,
        "range": [
          1482,
          1626
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 88
          },
          "start": {
            "column": 0,
            "line": 79
          }
        }
      },
      "range": [
        1482,
        1627
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 79
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
        "name": "createSlice",
        "optional": false,
        "range": [
          1692,
          1703
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 92
          },
          "start": {
            "column": 17,
            "line": 92
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "reducers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 3,
                "line": 95
              },
              "start": {
                "column": 10,
                "line": 93
              }
            },
            "range": [
              1718,
              1796
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 93
                              },
                              "start": {
                                "column": 16,
                                "line": 93
                              }
                            },
                            "range": [
                              1724,
                              1732
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                1726,
                                1732
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 93
                                },
                                "start": {
                                  "column": 18,
                                  "line": 93
                                }
                              }
                            }
                          },
                          "range": [
                            1723,
                            1732
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 93
                            },
                            "start": {
                              "column": 15,
                              "line": 93
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
                            "column": 50,
                            "line": 93
                          },
                          "start": {
                            "column": 25,
                            "line": 93
                          }
                        },
                        "range": [
                          1733,
                          1758
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 93
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 93
                                  }
                                },
                                "range": [
                                  1741,
                                  1749
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    1743,
                                    1749
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 93
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 93
                                    }
                                  }
                                }
                              },
                              "range": [
                                1736,
                                1749
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 93
                                },
                                "start": {
                                  "column": 28,
                                  "line": 93
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 93
                              },
                              "start": {
                                "column": 43,
                                "line": 93
                              }
                            },
                            "range": [
                              1751,
                              1758
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                1754,
                                1758
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 93
                                },
                                "start": {
                                  "column": 46,
                                  "line": 93
                                }
                              }
                            }
                          },
                          "range": [
                            1735,
                            1758
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 93
                            },
                            "start": {
                              "column": 27,
                              "line": 93
                            }
                          }
                        }
                      },
                      "range": [
                        1722,
                        1758
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 93
                        },
                        "start": {
                          "column": 14,
                          "line": 93
                        }
                      }
                    }
                  ],
                  "range": [
                    1720,
                    1760
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 93
                    },
                    "start": {
                      "column": 12,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "TSMappedType",
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1781,
                          1782
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 94
                          },
                          "start": {
                            "column": 16,
                            "line": 94
                          }
                        }
                      },
                      "range": [
                        1781,
                        1782
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 94
                        },
                        "start": {
                          "column": 16,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      1775,
                      1782
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 94
                      },
                      "start": {
                        "column": 10,
                        "line": 94
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      1770,
                      1771
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 94
                      },
                      "start": {
                        "column": 5,
                        "line": 94
                      }
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "range": [
                      1785,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 94
                      },
                      "start": {
                        "column": 20,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    1763,
                    1796
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 95
                    },
                    "start": {
                      "column": 55,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                1720,
                1796
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 95
                },
                "start": {
                  "column": 12,
                  "line": 93
                }
              }
            }
          },
          "range": [
            1710,
            1796
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 95
            },
            "start": {
              "column": 2,
              "line": 93
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 7,
            "line": 96
          },
          "start": {
            "column": 1,
            "line": 96
          }
        },
        "range": [
          1798,
          1804
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1800,
            1804
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 96
            },
            "start": {
              "column": 3,
              "line": 96
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 92
          },
          "start": {
            "column": 28,
            "line": 92
          }
        },
        "range": [
          1703,
          1706
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
                1704,
                1705
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 92
                },
                "start": {
                  "column": 29,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              1704,
              1705
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 92
              },
              "start": {
                "column": 29,
                "line": 92
              }
            }
          }
        ]
      },
      "range": [
        1675,
        1805
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 92
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    1823,
                    1824
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 99
                    },
                    "start": {
                      "column": 2,
                      "line": 99
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1824,
                    1830
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1828,
                      1830
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 99
                      },
                      "start": {
                        "column": 7,
                        "line": 99
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1825,
                        1826
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 99
                        },
                        "start": {
                          "column": 4,
                          "line": 99
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 99
                    },
                    "start": {
                      "column": 3,
                      "line": 99
                    }
                  }
                },
                "range": [
                  1823,
                  1830
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 99
                  },
                  "start": {
                    "column": 2,
                    "line": 99
                  }
                }
              }
            ],
            "range": [
              1819,
              1833
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 100
              },
              "start": {
                "column": 12,
                "line": 98
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSlice",
          "optional": false,
          "range": [
            1807,
            1818
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 98
            },
            "start": {
              "column": 0,
              "line": 98
            }
          }
        },
        "optional": false,
        "range": [
          1807,
          1834
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 100
          },
          "start": {
            "column": 0,
            "line": 98
          }
        }
      },
      "range": [
        1807,
        1835
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validate",
        "optional": false,
        "range": [
          1888,
          1896
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 104
          },
          "start": {
            "column": 5,
            "line": 104
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
              "name": "T",
              "optional": false,
              "range": [
                1902,
                1903
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 104
                },
                "start": {
                  "column": 19,
                  "line": 104
                }
              }
            },
            "range": [
              1902,
              1903
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 104
              },
              "start": {
                "column": 19,
                "line": 104
              }
            }
          },
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1920,
                    1921
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 104
                    },
                    "start": {
                      "column": 37,
                      "line": 104
                    }
                  }
                },
                "range": [
                  1920,
                  1921
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 104
                  },
                  "start": {
                    "column": 37,
                    "line": 104
                  }
                }
              },
              "range": [
                1914,
                1921
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 104
                },
                "start": {
                  "column": 31,
                  "line": 104
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1909,
                1910
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 104
                },
                "start": {
                  "column": 26,
                  "line": 104
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                1924,
                1930
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 104
                },
                "start": {
                  "column": 41,
                  "line": 104
                }
              }
            },
            "range": [
              1906,
              1932
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 104
              },
              "start": {
                "column": 23,
                "line": 104
              }
            }
          }
        ],
        "range": [
          1902,
          1932
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 104
          },
          "start": {
            "column": 19,
            "line": 104
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 104
          },
          "start": {
            "column": 13,
            "line": 104
          }
        },
        "range": [
          1896,
          1899
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
                1897,
                1898
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 104
                },
                "start": {
                  "column": 14,
                  "line": 104
                }
              }
            },
            "out": false,
            "range": [
              1897,
              1898
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 104
              },
              "start": {
                "column": 14,
                "line": 104
              }
            }
          }
        ]
      },
      "range": [
        1883,
        1932
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 104
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
          1950,
          1951
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 105
          },
          "start": {
            "column": 17,
            "line": 105
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 105
              },
              "start": {
                "column": 68,
                "line": 105
              }
            },
            "range": [
              2001,
              2004
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "range": [
                  2003,
                  2004
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 105
                  },
                  "start": {
                    "column": 70,
                    "line": 105
                  }
                }
              },
              "range": [
                2003,
                2004
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 105
                },
                "start": {
                  "column": 70,
                  "line": 105
                }
              }
            }
          },
          "range": [
            2000,
            2004
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 105
            },
            "start": {
              "column": 67,
              "line": 105
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 87,
                "line": 105
              },
              "start": {
                "column": 74,
                "line": 105
              }
            },
            "range": [
              2007,
              2020
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2017,
                  2020
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
                        2018,
                        2019
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 105
                        },
                        "start": {
                          "column": 85,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2018,
                      2019
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 105
                      },
                      "start": {
                        "column": 85,
                        "line": 105
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 105
                  },
                  "start": {
                    "column": 84,
                    "line": 105
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validate",
                "optional": false,
                "range": [
                  2009,
                  2017
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 105
                  },
                  "start": {
                    "column": 76,
                    "line": 105
                  }
                }
              },
              "range": [
                2009,
                2020
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 105
                },
                "start": {
                  "column": 76,
                  "line": 105
                }
              }
            }
          },
          "range": [
            2006,
            2020
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 105
            },
            "start": {
              "column": 73,
              "line": 105
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 94,
            "line": 105
          },
          "start": {
            "column": 88,
            "line": 105
          }
        },
        "range": [
          2021,
          2027
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            2023,
            2027
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 105
            },
            "start": {
              "column": 90,
              "line": 105
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 105
          },
          "start": {
            "column": 18,
            "line": 105
          }
        },
        "range": [
          1951,
          1999
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                1952,
                1953
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 105
                },
                "start": {
                  "column": 19,
                  "line": 105
                }
              }
            },
            "out": false,
            "range": [
              1952,
              1953
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 105
              },
              "start": {
                "column": 19,
                "line": 105
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
                  1971,
                  1998
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1972,
                      1978
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 105
                      },
                      "start": {
                        "column": 39,
                        "line": 105
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 105
                            },
                            "start": {
                              "column": 53,
                              "line": 105
                            }
                          },
                          "range": [
                            1986,
                            1989
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                1988,
                                1989
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 105
                                },
                                "start": {
                                  "column": 55,
                                  "line": 105
                                }
                              }
                            },
                            "range": [
                              1988,
                              1989
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 105
                              },
                              "start": {
                                "column": 55,
                                "line": 105
                              }
                            }
                          }
                        },
                        "range": [
                          1981,
                          1989
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 105
                          },
                          "start": {
                            "column": 48,
                            "line": 105
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 105
                        },
                        "start": {
                          "column": 58,
                          "line": 105
                        }
                      },
                      "range": [
                        1991,
                        1997
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1994,
                          1997
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 105
                          },
                          "start": {
                            "column": 61,
                            "line": 105
                          }
                        }
                      }
                    },
                    "range": [
                      1980,
                      1997
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 105
                      },
                      "start": {
                        "column": 47,
                        "line": 105
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 105
                  },
                  "start": {
                    "column": 38,
                    "line": 105
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  1965,
                  1971
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 105
                  },
                  "start": {
                    "column": 32,
                    "line": 105
                  }
                }
              },
              "range": [
                1965,
                1998
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 105
                },
                "start": {
                  "column": 32,
                  "line": 105
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
                1955,
                1956
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 105
                },
                "start": {
                  "column": 22,
                  "line": 105
                }
              }
            },
            "out": false,
            "range": [
              1955,
              1998
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 105
              },
              "start": {
                "column": 22,
                "line": 105
              }
            }
          }
        ]
      },
      "range": [
        1933,
        2028
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              2032,
              2033
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 107
              },
              "start": {
                "column": 2,
                "line": 107
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    2039,
                    2042
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 108
                    },
                    "start": {
                      "column": 2,
                      "line": 108
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        2049,
                        2050
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 108
                        },
                        "start": {
                          "column": 12,
                          "line": 108
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2053,
                        2054
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 108
                        },
                        "start": {
                          "column": 16,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      2049,
                      2054
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 108
                      },
                      "start": {
                        "column": 12,
                        "line": 108
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
                      "name": "s",
                      "optional": false,
                      "range": [
                        2044,
                        2045
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 108
                        },
                        "start": {
                          "column": 7,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "range": [
                    2044,
                    2054
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 108
                    },
                    "start": {
                      "column": 7,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2039,
                  2054
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 108
                  },
                  "start": {
                    "column": 2,
                    "line": 108
                  }
                }
              }
            ],
            "range": [
              2035,
              2057
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 109
              },
              "start": {
                "column": 5,
                "line": 107
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
            2030,
            2031
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 107
            },
            "start": {
              "column": 0,
              "line": 107
            }
          }
        },
        "optional": false,
        "range": [
          2030,
          2058
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 109
          },
          "start": {
            "column": 0,
            "line": 107
          }
        }
      },
      "range": [
        2030,
        2058
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SliceCaseReducers",
        "optional": false,
        "range": [
          2110,
          2127
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 113
          },
          "start": {
            "column": 5,
            "line": 113
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            2143,
            2183
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                2144,
                2150
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 113
                },
                "start": {
                  "column": 39,
                  "line": 113
                }
              }
            },
            {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 113
                      },
                      "start": {
                        "column": 53,
                        "line": 113
                      }
                    },
                    "range": [
                      2158,
                      2165
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "range": [
                          2160,
                          2165
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 113
                          },
                          "start": {
                            "column": 55,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        2160,
                        2165
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 113
                        },
                        "start": {
                          "column": 55,
                          "line": 113
                        }
                      }
                    }
                  },
                  "range": [
                    2153,
                    2165
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 113
                    },
                    "start": {
                      "column": 48,
                      "line": 113
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 113
                  },
                  "start": {
                    "column": 62,
                    "line": 113
                  }
                },
                "range": [
                  2167,
                  2182
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "range": [
                          2170,
                          2175
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 113
                          },
                          "start": {
                            "column": 65,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        2170,
                        2175
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 113
                        },
                        "start": {
                          "column": 65,
                          "line": 113
                        }
                      }
                    },
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        2178,
                        2182
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 113
                        },
                        "start": {
                          "column": 73,
                          "line": 113
                        }
                      }
                    }
                  ],
                  "range": [
                    2170,
                    2182
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 113
                    },
                    "start": {
                      "column": 65,
                      "line": 113
                    }
                  }
                }
              },
              "range": [
                2152,
                2182
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 113
                },
                "start": {
                  "column": 47,
                  "line": 113
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 113
            },
            "start": {
              "column": 38,
              "line": 113
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            2137,
            2143
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 113
            },
            "start": {
              "column": 32,
              "line": 113
            }
          }
        },
        "range": [
          2137,
          2183
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 113
          },
          "start": {
            "column": 32,
            "line": 113
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 113
          },
          "start": {
            "column": 22,
            "line": 113
          }
        },
        "range": [
          2127,
          2134
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "range": [
                2128,
                2133
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 113
                },
                "start": {
                  "column": 23,
                  "line": 113
                }
              }
            },
            "out": false,
            "range": [
              2128,
              2133
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 113
              },
              "start": {
                "column": 23,
                "line": 113
              }
            }
          }
        ]
      },
      "range": [
        2105,
        2184
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidateSliceCaseReducers",
        "optional": false,
        "range": [
          2191,
          2216
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 115
          },
          "start": {
            "column": 5,
            "line": 115
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
              "name": "ACR",
              "optional": false,
              "range": [
                2256,
                2259
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 115
                },
                "start": {
                  "column": 70,
                  "line": 115
                }
              }
            },
            "range": [
              2256,
              2259
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 115
              },
              "start": {
                "column": 70,
                "line": 115
              }
            }
          },
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ACR",
                  "optional": false,
                  "range": [
                    2278,
                    2281
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 116
                    },
                    "start": {
                      "column": 14,
                      "line": 116
                    }
                  }
                },
                "range": [
                  2278,
                  2281
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 116
                  },
                  "start": {
                    "column": 14,
                    "line": 116
                  }
                }
              },
              "range": [
                2272,
                2281
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 116
                },
                "start": {
                  "column": 8,
                  "line": 116
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                2267,
                2268
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 116
                },
                "start": {
                  "column": 3,
                  "line": 116
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
                    "name": "T",
                    "optional": false,
                    "range": [
                      2288,
                      2289
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 116
                      },
                      "start": {
                        "column": 24,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    2288,
                    2289
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 116
                    },
                    "start": {
                      "column": 24,
                      "line": 116
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ACR",
                    "optional": false,
                    "range": [
                      2284,
                      2287
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 116
                      },
                      "start": {
                        "column": 20,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    2284,
                    2287
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 116
                    },
                    "start": {
                      "column": 20,
                      "line": 116
                    }
                  }
                },
                "range": [
                  2284,
                  2290
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 116
                  },
                  "start": {
                    "column": 20,
                    "line": 116
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reducer",
                      "optional": false,
                      "range": [
                        2305,
                        2312
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 117
                        },
                        "start": {
                          "column": 4,
                          "line": 117
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 117
                            },
                            "start": {
                              "column": 13,
                              "line": 117
                            }
                          },
                          "range": [
                            2314,
                            2317
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                2316,
                                2317
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 117
                                },
                                "start": {
                                  "column": 15,
                                  "line": 117
                                }
                              }
                            },
                            "range": [
                              2316,
                              2317
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 117
                              },
                              "start": {
                                "column": 15,
                                "line": 117
                              }
                            }
                          }
                        },
                        "range": [
                          2313,
                          2317
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 117
                          },
                          "start": {
                            "column": 12,
                            "line": 117
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 117
                            },
                            "start": {
                              "column": 25,
                              "line": 117
                            }
                          },
                          "range": [
                            2326,
                            2335
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
                                "name": "A",
                                "optional": false,
                                "range": [
                                  2334,
                                  2335
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 117
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                2334,
                                2335
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 117
                                },
                                "start": {
                                  "column": 33,
                                  "line": 117
                                }
                              }
                            },
                            "range": [
                              2328,
                              2335
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 117
                              },
                              "start": {
                                "column": 27,
                                "line": 117
                              }
                            }
                          }
                        },
                        "range": [
                          2319,
                          2335
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 117
                          },
                          "start": {
                            "column": 18,
                            "line": 117
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 117
                        },
                        "start": {
                          "column": 35,
                          "line": 117
                        }
                      },
                      "range": [
                        2336,
                        2341
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          2338,
                          2341
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 117
                          },
                          "start": {
                            "column": 37,
                            "line": 117
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      2305,
                      2342
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 117
                      },
                      "start": {
                        "column": 4,
                        "line": 117
                      }
                    }
                  }
                ],
                "range": [
                  2299,
                  2346
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 118
                  },
                  "start": {
                    "column": 35,
                    "line": 116
                  }
                }
              },
              "falseType": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  2418,
                  2420
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 122
                  },
                  "start": {
                    "column": 6,
                    "line": 122
                  }
                }
              },
              "trueType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prepare",
                      "optional": false,
                      "range": [
                        2363,
                        2370
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 120
                        },
                        "start": {
                          "column": 8,
                          "line": 120
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2374,
                            2375
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 120
                            },
                            "start": {
                              "column": 19,
                              "line": 120
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 120
                            },
                            "start": {
                              "column": 20,
                              "line": 120
                            }
                          },
                          "range": [
                            2375,
                            2384
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNeverKeyword",
                              "range": [
                                2377,
                                2382
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 120
                                },
                                "start": {
                                  "column": 22,
                                  "line": 120
                                }
                              }
                            },
                            "range": [
                              2377,
                              2384
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 120
                              },
                              "start": {
                                "column": 22,
                                "line": 120
                              }
                            }
                          }
                        },
                        "range": [
                          2371,
                          2384
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 120
                          },
                          "start": {
                            "column": 16,
                            "line": 120
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 120
                        },
                        "start": {
                          "column": 30,
                          "line": 120
                        }
                      },
                      "range": [
                        2385,
                        2402
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            2391,
                            2402
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
                                  2392,
                                  2393
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 120
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 120
                                  }
                                }
                              },
                              "range": [
                                2392,
                                2393
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 120
                                },
                                "start": {
                                  "column": 37,
                                  "line": 120
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"type\"",
                                "value": "type",
                                "range": [
                                  2395,
                                  2401
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 120
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 120
                                  }
                                }
                              },
                              "range": [
                                2395,
                                2401
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 120
                                },
                                "start": {
                                  "column": 40,
                                  "line": 120
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 120
                            },
                            "start": {
                              "column": 36,
                              "line": 120
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Omit",
                          "optional": false,
                          "range": [
                            2387,
                            2391
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 120
                            },
                            "start": {
                              "column": 32,
                              "line": 120
                            }
                          }
                        },
                        "range": [
                          2387,
                          2402
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 120
                          },
                          "start": {
                            "column": 32,
                            "line": 120
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      2363,
                      2403
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 120
                      },
                      "start": {
                        "column": 8,
                        "line": 120
                      }
                    }
                  }
                ],
                "range": [
                  2353,
                  2411
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 121
                  },
                  "start": {
                    "column": 6,
                    "line": 119
                  }
                }
              },
              "range": [
                2284,
                2420
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 122
                },
                "start": {
                  "column": 20,
                  "line": 116
                }
              }
            },
            "range": [
              2262,
              2423
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 123
              },
              "start": {
                "column": 76,
                "line": 115
              }
            }
          }
        ],
        "range": [
          2256,
          2423
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 123
          },
          "start": {
            "column": 70,
            "line": 115
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 115
          },
          "start": {
            "column": 30,
            "line": 115
          }
        },
        "range": [
          2216,
          2253
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                2217,
                2218
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 115
                },
                "start": {
                  "column": 31,
                  "line": 115
                }
              }
            },
            "out": false,
            "range": [
              2217,
              2218
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 115
              },
              "start": {
                "column": 31,
                "line": 115
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
                  2249,
                  2252
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        2250,
                        2251
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 115
                        },
                        "start": {
                          "column": 64,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      2250,
                      2251
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 115
                      },
                      "start": {
                        "column": 64,
                        "line": 115
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 115
                  },
                  "start": {
                    "column": 63,
                    "line": 115
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SliceCaseReducers",
                "optional": false,
                "range": [
                  2232,
                  2249
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 115
                  },
                  "start": {
                    "column": 46,
                    "line": 115
                  }
                }
              },
              "range": [
                2232,
                2252
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 115
                },
                "start": {
                  "column": 46,
                  "line": 115
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ACR",
              "optional": false,
              "range": [
                2220,
                2223
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 115
                },
                "start": {
                  "column": 34,
                  "line": 115
                }
              }
            },
            "out": false,
            "range": [
              2220,
              2252
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 115
              },
              "start": {
                "column": 34,
                "line": 115
              }
            }
          }
        ]
      },
      "range": [
        2186,
        2424
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 123
        },
        "start": {
          "column": 0,
          "line": 115
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
        "name": "createSlice",
        "optional": false,
        "range": [
          2443,
          2454
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 125
          },
          "start": {
            "column": 17,
            "line": 125
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 131
              },
              "start": {
                "column": 9,
                "line": 128
              }
            },
            "range": [
              2522,
              2626
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
                    "name": "initialState",
                    "optional": false,
                    "range": [
                      2528,
                      2540
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 129
                      },
                      "start": {
                        "column": 2,
                        "line": 129
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
                        "line": 129
                      },
                      "start": {
                        "column": 14,
                        "line": 129
                      }
                    },
                    "range": [
                      2540,
                      2563
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "range": [
                              2542,
                              2547
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 129
                              },
                              "start": {
                                "column": 16,
                                "line": 129
                              }
                            }
                          },
                          "range": [
                            2542,
                            2547
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 129
                            },
                            "start": {
                              "column": 16,
                              "line": 129
                            }
                          }
                        },
                        {
                          "type": "TSFunctionType",
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 129
                              },
                              "start": {
                                "column": 28,
                                "line": 129
                              }
                            },
                            "range": [
                              2554,
                              2562
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "range": [
                                  2557,
                                  2562
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 129
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 129
                                  }
                                }
                              },
                              "range": [
                                2557,
                                2562
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 129
                                },
                                "start": {
                                  "column": 31,
                                  "line": 129
                                }
                              }
                            }
                          },
                          "range": [
                            2551,
                            2562
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 129
                            },
                            "start": {
                              "column": 25,
                              "line": 129
                            }
                          }
                        }
                      ],
                      "range": [
                        2542,
                        2563
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 129
                        },
                        "start": {
                          "column": 16,
                          "line": 129
                        }
                      }
                    }
                  },
                  "range": [
                    2528,
                    2564
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 129
                    },
                    "start": {
                      "column": 2,
                      "line": 129
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducers",
                    "optional": false,
                    "range": [
                      2567,
                      2575
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 130
                      },
                      "start": {
                        "column": 2,
                        "line": 130
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
                        "column": 58,
                        "line": 130
                      },
                      "start": {
                        "column": 10,
                        "line": 130
                      }
                    },
                    "range": [
                      2575,
                      2623
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2602,
                          2623
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State",
                              "optional": false,
                              "range": [
                                2603,
                                2608
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 130
                                },
                                "start": {
                                  "column": 38,
                                  "line": 130
                                }
                              }
                            },
                            "range": [
                              2603,
                              2608
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 130
                              },
                              "start": {
                                "column": 38,
                                "line": 130
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CaseReducers",
                              "optional": false,
                              "range": [
                                2610,
                                2622
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 130
                                },
                                "start": {
                                  "column": 45,
                                  "line": 130
                                }
                              }
                            },
                            "range": [
                              2610,
                              2622
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 130
                              },
                              "start": {
                                "column": 45,
                                "line": 130
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 130
                          },
                          "start": {
                            "column": 37,
                            "line": 130
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValidateSliceCaseReducers",
                        "optional": false,
                        "range": [
                          2577,
                          2602
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 130
                          },
                          "start": {
                            "column": 12,
                            "line": 130
                          }
                        }
                      },
                      "range": [
                        2577,
                        2623
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 130
                        },
                        "start": {
                          "column": 12,
                          "line": 130
                        }
                      }
                    }
                  },
                  "range": [
                    2567,
                    2624
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 130
                    },
                    "start": {
                      "column": 2,
                      "line": 130
                    }
                  }
                }
              ],
              "range": [
                2524,
                2626
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 131
                },
                "start": {
                  "column": 11,
                  "line": 128
                }
              }
            }
          },
          "range": [
            2515,
            2626
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 131
            },
            "start": {
              "column": 2,
              "line": 128
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 131
          },
          "start": {
            "column": 2,
            "line": 131
          }
        },
        "range": [
          2627,
          2633
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            2629,
            2633
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 131
            },
            "start": {
              "column": 4,
              "line": 131
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 28,
            "line": 125
          }
        },
        "range": [
          2454,
          2514
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "range": [
                2458,
                2463
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 126
                },
                "start": {
                  "column": 2,
                  "line": 126
                }
              }
            },
            "out": false,
            "range": [
              2458,
              2463
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 126
              },
              "start": {
                "column": 2,
                "line": 126
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
                  2505,
                  2512
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "range": [
                        2506,
                        2511
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 127
                        },
                        "start": {
                          "column": 41,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      2506,
                      2511
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 127
                      },
                      "start": {
                        "column": 41,
                        "line": 127
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 127
                  },
                  "start": {
                    "column": 40,
                    "line": 127
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SliceCaseReducers",
                "optional": false,
                "range": [
                  2488,
                  2505
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 127
                  },
                  "start": {
                    "column": 23,
                    "line": 127
                  }
                }
              },
              "range": [
                2488,
                2512
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 127
                },
                "start": {
                  "column": 23,
                  "line": 127
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "CaseReducers",
              "optional": false,
              "range": [
                2467,
                2479
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 127
                },
                "start": {
                  "column": 2,
                  "line": 127
                }
              }
            },
            "out": false,
            "range": [
              2467,
              2512
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 127
              },
              "start": {
                "column": 2,
                "line": 127
              }
            }
          }
        ]
      },
      "range": [
        2426,
        2634
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 131
        },
        "start": {
          "column": 0,
          "line": 125
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2636,
        2830
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
              "name": "clientSlice",
              "optional": false,
              "range": [
                2649,
                2660
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 133
                },
                "start": {
                  "column": 13,
                  "line": 133
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
                        "name": "initialState",
                        "optional": false,
                        "range": [
                          2679,
                          2691
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 134
                          },
                          "start": {
                            "column": 2,
                            "line": 134
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
                              "name": "username",
                              "optional": false,
                              "range": [
                                2699,
                                2707
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 135
                                },
                                "start": {
                                  "column": 4,
                                  "line": 135
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
                                2709,
                                2711
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 135
                                },
                                "start": {
                                  "column": 14,
                                  "line": 135
                                }
                              }
                            },
                            "range": [
                              2699,
                              2711
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 135
                              },
                              "start": {
                                "column": 4,
                                "line": 135
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isLoggedIn",
                              "optional": false,
                              "range": [
                                2717,
                                2727
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 136
                                },
                                "start": {
                                  "column": 4,
                                  "line": 136
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "false",
                              "value": false,
                              "range": [
                                2729,
                                2734
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 136
                                },
                                "start": {
                                  "column": 16,
                                  "line": 136
                                }
                              }
                            },
                            "range": [
                              2717,
                              2734
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 136
                              },
                              "start": {
                                "column": 4,
                                "line": 136
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "userId",
                              "optional": false,
                              "range": [
                                2740,
                                2746
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 137
                                },
                                "start": {
                                  "column": 4,
                                  "line": 137
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
                                2748,
                                2750
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 137
                                },
                                "start": {
                                  "column": 12,
                                  "line": 137
                                }
                              }
                            },
                            "range": [
                              2740,
                              2750
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 137
                              },
                              "start": {
                                "column": 4,
                                "line": 137
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "avatar",
                              "optional": false,
                              "range": [
                                2756,
                                2762
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 138
                                },
                                "start": {
                                  "column": 4,
                                  "line": 138
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
                                2764,
                                2766
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 138
                                },
                                "start": {
                                  "column": 12,
                                  "line": 138
                                }
                              }
                            },
                            "range": [
                              2756,
                              2766
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 138
                              },
                              "start": {
                                "column": 4,
                                "line": 138
                              }
                            }
                          }
                        ],
                        "range": [
                          2693,
                          2771
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 139
                          },
                          "start": {
                            "column": 16,
                            "line": 134
                          }
                        }
                      },
                      "range": [
                        2679,
                        2771
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 139
                        },
                        "start": {
                          "column": 2,
                          "line": 134
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reducers",
                        "optional": false,
                        "range": [
                          2775,
                          2783
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 140
                          },
                          "start": {
                            "column": 2,
                            "line": 140
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
                              "name": "onClientUserChanged",
                              "optional": false,
                              "range": [
                                2791,
                                2810
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 141
                                },
                                "start": {
                                  "column": 4,
                                  "line": 141
                                }
                              }
                            },
                            "kind": "init",
                            "method": true,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                2810,
                                2820
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                  2818,
                                  2820
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 141
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
                                  "name": "state",
                                  "optional": false,
                                  "range": [
                                    2811,
                                    2816
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 141
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 141
                                },
                                "start": {
                                  "column": 23,
                                  "line": 141
                                }
                              }
                            },
                            "range": [
                              2791,
                              2820
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 141
                              },
                              "start": {
                                "column": 4,
                                "line": 141
                              }
                            }
                          }
                        ],
                        "range": [
                          2785,
                          2825
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 142
                          },
                          "start": {
                            "column": 12,
                            "line": 140
                          }
                        }
                      },
                      "range": [
                        2775,
                        2825
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 142
                        },
                        "start": {
                          "column": 2,
                          "line": 140
                        }
                      }
                    }
                  ],
                  "range": [
                    2675,
                    2828
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 143
                    },
                    "start": {
                      "column": 39,
                      "line": 133
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createSlice",
                "optional": false,
                "range": [
                  2663,
                  2674
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 133
                  },
                  "start": {
                    "column": 27,
                    "line": 133
                  }
                }
              },
              "optional": false,
              "range": [
                2663,
                2829
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 143
                },
                "start": {
                  "column": 27,
                  "line": 133
                }
              }
            },
            "range": [
              2649,
              2829
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 143
              },
              "start": {
                "column": 13,
                "line": 133
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          2643,
          2830
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 143
          },
          "start": {
            "column": 7,
            "line": 133
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 133
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 145
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
