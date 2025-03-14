__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1798
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          31,
          79
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": {
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
                    42,
                    50
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      44,
                      50
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
                  38,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
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
                  "column": 43,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                51,
                76
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
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      },
                      "range": [
                        59,
                        66
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            61,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 28,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          61,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      54,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 35,
                      "line": 2
                    }
                  },
                  "range": [
                    68,
                    76
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "range": [
                        71,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      71,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  53,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              37,
              77
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 2
              },
              "start": {
                "column": 4,
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
            "column": 31,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionsObject",
        "optional": false,
        "range": [
          10,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
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
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        },
        "range": [
          23,
          30
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
                24,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              24,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        79
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
          115,
          220
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "range": [
                121,
                126
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              },
              "range": [
                127,
                134
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    129,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "range": [
                  129,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              121,
              135
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 4,
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
              "name": "view",
              "optional": false,
              "range": [
                140,
                144
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              },
              "range": [
                145,
                186
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
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 17,
                          "line": 7
                        }
                      },
                      "range": [
                        153,
                        160
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            155,
                            160
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 19,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          155,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 19,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      148,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actions",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 7
                        }
                      },
                      "range": [
                        169,
                        178
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Actions",
                          "optional": false,
                          "range": [
                            171,
                            178
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 7
                            },
                            "start": {
                              "column": 35,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          171,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 35,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      162,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
                    }
                  },
                  "range": [
                    180,
                    186
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      183,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 7
                      },
                      "start": {
                        "column": 47,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  147,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              140,
              187
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "actions",
              "optional": false,
              "range": [
                192,
                199
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 4,
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
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              },
              "range": [
                199,
                217
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      201,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "range": [
                        210,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 22,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      210,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  201,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              192,
              218
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 34,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options",
        "optional": false,
        "range": [
          91,
          98
        ],
        "loc": {
          "end": {
            "column": 17,
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
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        },
        "range": [
          98,
          114
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
                99,
                104
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              99,
              104
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 18,
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
              "name": "Actions",
              "optional": false,
              "range": [
                106,
                113
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              106,
              113
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        81,
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
        "name": "app",
        "optional": false,
        "range": [
          239,
          242
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
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
                "column": 94,
                "line": 11
              },
              "start": {
                "column": 69,
                "line": 11
              }
            },
            "range": [
              291,
              316
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  300,
                  316
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
                        301,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 11
                        },
                        "start": {
                          "column": 79,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      301,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 11
                      },
                      "start": {
                        "column": 79,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "range": [
                        308,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 11
                        },
                        "start": {
                          "column": 86,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      308,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 11
                      },
                      "start": {
                        "column": 86,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 11
                  },
                  "start": {
                    "column": 78,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "range": [
                  293,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 11
                  },
                  "start": {
                    "column": 71,
                    "line": 11
                  }
                }
              },
              "range": [
                293,
                316
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 11
                },
                "start": {
                  "column": 71,
                  "line": 11
                }
              }
            }
          },
          "range": [
            288,
            316
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 11
            },
            "start": {
              "column": 66,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 101,
            "line": 11
          },
          "start": {
            "column": 95,
            "line": 11
          }
        },
        "range": [
          317,
          323
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            319,
            323
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 11
            },
            "start": {
              "column": 97,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 11
          },
          "start": {
            "column": 20,
            "line": 11
          }
        },
        "range": [
          242,
          287
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
                243,
                248
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              243,
              248
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
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
                  279,
                  286
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
                        280,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 11
                        },
                        "start": {
                          "column": 58,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      280,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 11
                      },
                      "start": {
                        "column": 58,
                        "line": 11
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 11
                  },
                  "start": {
                    "column": 57,
                    "line": 11
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsObject",
                "optional": false,
                "range": [
                  266,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 11
                  },
                  "start": {
                    "column": 44,
                    "line": 11
                  }
                }
              },
              "range": [
                266,
                286
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 11
                },
                "start": {
                  "column": 44,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "range": [
                250,
                257
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 11
                },
                "start": {
                  "column": 28,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              250,
              286
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 11
              },
              "start": {
                "column": 28,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        222,
        324
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "name": "state",
                  "optional": false,
                  "range": [
                    336,
                    341
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    343,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  336,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
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
                  "name": "actions",
                  "optional": false,
                  "range": [
                    352,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          371,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            381,
                            382
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
                              376,
                              377
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 16
                              },
                              "start": {
                                "column": 13,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          376,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        371,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
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
                    361,
                    424
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  352,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "view",
                  "optional": false,
                  "range": [
                    430,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
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
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        446,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        459,
                        462
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 18
                        },
                        "start": {
                          "column": 33,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      446,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
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
                        437,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        440,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 18
                        },
                        "start": {
                          "column": 14,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    436,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "range": [
                  430,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              330,
              465
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "app",
          "optional": false,
          "range": [
            326,
            329
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          326,
          466
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        326,
        467
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          484,
          517
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
                490,
                493
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
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
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              },
              "range": [
                493,
                514
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
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      },
                      "range": [
                        497,
                        505
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          499,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 13,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      496,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 10,
                        "line": 23
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 23
                    },
                    "start": {
                      "column": 21,
                      "line": 23
                    }
                  },
                  "range": [
                    507,
                    514
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      510,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  495,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              490,
              515
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 14,
            "line": 22
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          480,
          483
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 10,
            "line": 22
          }
        }
      },
      "range": [
        470,
        517
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
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
        "name": "foo",
        "optional": false,
        "range": [
          536,
          539
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
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
                "column": 49,
                "line": 26
              },
              "start": {
                "column": 37,
                "line": 26
              }
            },
            "range": [
              556,
              568
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    558,
                    564
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 26
                    },
                    "start": {
                      "column": 39,
                      "line": 26
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
                      567,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 26
                      },
                      "start": {
                        "column": 48,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    567,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 26
                    },
                    "start": {
                      "column": 48,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                558,
                568
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 26
                },
                "start": {
                  "column": 39,
                  "line": 26
                }
              }
            }
          },
          "range": [
            555,
            568
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 26
            },
            "start": {
              "column": 36,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 26
          },
          "start": {
            "column": 50,
            "line": 26
          }
        },
        "range": [
          569,
          572
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              571,
              572
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 26
              },
              "start": {
                "column": 52,
                "line": 26
              }
            }
          },
          "range": [
            571,
            572
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 26
            },
            "start": {
              "column": 52,
              "line": 26
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 26
          },
          "start": {
            "column": 20,
            "line": 26
          }
        },
        "range": [
          539,
          554
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
                "name": "Bar",
                "optional": false,
                "range": [
                  550,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 31,
                    "line": 26
                  }
                }
              },
              "range": [
                550,
                553
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 26
                },
                "start": {
                  "column": 31,
                  "line": 26
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
                540,
                541
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 21,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              540,
              553
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 26
              },
              "start": {
                "column": 21,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        519,
        573
      ],
      "loc": {
        "end": {
          "column": 54,
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
            "name": "y",
            "optional": false,
            "range": [
              581,
              582
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
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
                      "name": "bar",
                      "optional": false,
                      "range": [
                        595,
                        598
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 29
                        },
                        "start": {
                          "column": 4,
                          "line": 29
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
                        598,
                        643
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          602,
                          643
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 30
                          },
                          "start": {
                            "column": 11,
                            "line": 29
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            599,
                            600
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 29
                            },
                            "start": {
                              "column": 8,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 30
                        },
                        "start": {
                          "column": 7,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      595,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 30
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  589,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 28
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                585,
                588
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              585,
              646
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 28
              }
            }
          },
          "range": [
            581,
            646
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        575,
        647
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          684,
          781
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "range": [
                690,
                695
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              },
              "range": [
                696,
                703
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "range": [
                    698,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 34
                    },
                    "start": {
                      "column": 12,
                      "line": 34
                    }
                  }
                },
                "range": [
                  698,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              690,
              704
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "view",
              "optional": false,
              "range": [
                709,
                713
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
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
                  "column": 50,
                  "line": 35
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              },
              "range": [
                714,
                755
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
                          "column": 24,
                          "line": 35
                        },
                        "start": {
                          "column": 17,
                          "line": 35
                        }
                      },
                      "range": [
                        722,
                        729
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            724,
                            729
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 35
                            },
                            "start": {
                              "column": 19,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          724,
                          729
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 35
                          },
                          "start": {
                            "column": 19,
                            "line": 35
                          }
                        }
                      }
                    },
                    "range": [
                      717,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 35
                      },
                      "start": {
                        "column": 12,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actions",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 35
                        },
                        "start": {
                          "column": 33,
                          "line": 35
                        }
                      },
                      "range": [
                        738,
                        747
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Actions",
                          "optional": false,
                          "range": [
                            740,
                            747
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 35
                            },
                            "start": {
                              "column": 35,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          740,
                          747
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 35
                          },
                          "start": {
                            "column": 35,
                            "line": 35
                          }
                        }
                      }
                    },
                    "range": [
                      731,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 35
                      },
                      "start": {
                        "column": 26,
                        "line": 35
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 35
                    },
                    "start": {
                      "column": 44,
                      "line": 35
                    }
                  },
                  "range": [
                    749,
                    755
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      752,
                      755
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 35
                      },
                      "start": {
                        "column": 47,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  716,
                  755
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              709,
              756
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "actions",
              "optional": false,
              "range": [
                761,
                768
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
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
                  "column": 21,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 36
                }
              },
              "range": [
                769,
                778
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Actions",
                  "optional": false,
                  "range": [
                    771,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  771,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 36
                  },
                  "start": {
                    "column": 14,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              761,
              779
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 35,
            "line": 33
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options2",
        "optional": false,
        "range": [
          659,
          667
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 33
          },
          "start": {
            "column": 10,
            "line": 33
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 33
          },
          "start": {
            "column": 18,
            "line": 33
          }
        },
        "range": [
          667,
          683
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
                668,
                673
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 33
                },
                "start": {
                  "column": 19,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              668,
              673
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 33
              },
              "start": {
                "column": 19,
                "line": 33
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
              "name": "Actions",
              "optional": false,
              "range": [
                675,
                682
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 33
                },
                "start": {
                  "column": 26,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              675,
              682
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 33
              },
              "start": {
                "column": 26,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        649,
        781
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 33
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
        "name": "app2",
        "optional": false,
        "range": [
          800,
          804
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 39
          },
          "start": {
            "column": 17,
            "line": 39
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
                "column": 96,
                "line": 39
              },
              "start": {
                "column": 70,
                "line": 39
              }
            },
            "range": [
              853,
              879
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  863,
                  879
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
                        864,
                        869
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 39
                        },
                        "start": {
                          "column": 81,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      864,
                      869
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 39
                      },
                      "start": {
                        "column": 81,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "range": [
                        871,
                        878
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 39
                        },
                        "start": {
                          "column": 88,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      871,
                      878
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 39
                      },
                      "start": {
                        "column": 88,
                        "line": 39
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 39
                  },
                  "start": {
                    "column": 80,
                    "line": 39
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options2",
                "optional": false,
                "range": [
                  855,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 39
                  },
                  "start": {
                    "column": 72,
                    "line": 39
                  }
                }
              },
              "range": [
                855,
                879
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 39
                },
                "start": {
                  "column": 72,
                  "line": 39
                }
              }
            }
          },
          "range": [
            850,
            879
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 39
            },
            "start": {
              "column": 67,
              "line": 39
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 103,
            "line": 39
          },
          "start": {
            "column": 97,
            "line": 39
          }
        },
        "range": [
          880,
          886
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            882,
            886
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 39
            },
            "start": {
              "column": 99,
              "line": 39
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 39
          },
          "start": {
            "column": 21,
            "line": 39
          }
        },
        "range": [
          804,
          849
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
                805,
                810
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 39
                },
                "start": {
                  "column": 22,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              805,
              810
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 39
              },
              "start": {
                "column": 22,
                "line": 39
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
                  841,
                  848
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
                        842,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 39
                        },
                        "start": {
                          "column": 59,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      842,
                      847
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 39
                      },
                      "start": {
                        "column": 59,
                        "line": 39
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 39
                  },
                  "start": {
                    "column": 58,
                    "line": 39
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsObject",
                "optional": false,
                "range": [
                  828,
                  841
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 39
                  },
                  "start": {
                    "column": 45,
                    "line": 39
                  }
                }
              },
              "range": [
                828,
                848
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 39
                },
                "start": {
                  "column": 45,
                  "line": 39
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "range": [
                812,
                819
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 39
                },
                "start": {
                  "column": 29,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              812,
              848
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 39
              },
              "start": {
                "column": 29,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        783,
        887
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
                  "name": "state",
                  "optional": false,
                  "range": [
                    900,
                    905
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    907,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 42
                    },
                    "start": {
                      "column": 11,
                      "line": 42
                    }
                  }
                },
                "range": [
                  900,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "range": [
                    916,
                    923
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          935,
                          938
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 44
                          },
                          "start": {
                            "column": 8,
                            "line": 44
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            945,
                            946
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 44
                            },
                            "start": {
                              "column": 18,
                              "line": 44
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
                              940,
                              941
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 44
                              },
                              "start": {
                                "column": 13,
                                "line": 44
                              }
                            }
                          }
                        ],
                        "range": [
                          940,
                          946
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 44
                          },
                          "start": {
                            "column": 13,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        935,
                        946
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "range": [
                    925,
                    988
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 45
                    },
                    "start": {
                      "column": 13,
                      "line": 43
                    }
                  }
                },
                "range": [
                  916,
                  988
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "view",
                  "optional": false,
                  "range": [
                    994,
                    998
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 46
                    },
                    "start": {
                      "column": 4,
                      "line": 46
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
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        1010,
                        1019
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 46
                        },
                        "start": {
                          "column": 20,
                          "line": 46
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1023,
                        1026
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 46
                        },
                        "start": {
                          "column": 33,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1010,
                      1026
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 46
                      },
                      "start": {
                        "column": 20,
                        "line": 46
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
                        1001,
                        1002
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1004,
                        1005
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 46
                        },
                        "start": {
                          "column": 14,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "range": [
                    1000,
                    1026
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  }
                },
                "range": [
                  994,
                  1026
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              }
            ],
            "range": [
              894,
              1029
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 47
              },
              "start": {
                "column": 5,
                "line": 41
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "app2",
          "optional": false,
          "range": [
            889,
            893
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "optional": false,
        "range": [
          889,
          1030
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        889,
        1031
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionsArray",
        "optional": false,
        "range": [
          1039,
          1051
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 50
          }
        }
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
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
                    "line": 50
                  },
                  "start": {
                    "column": 34,
                    "line": 50
                  }
                },
                "range": [
                  1068,
                  1075
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "State",
                    "optional": false,
                    "range": [
                      1070,
                      1075
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 50
                      },
                      "start": {
                        "column": 36,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1070,
                    1075
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 50
                    },
                    "start": {
                      "column": 36,
                      "line": 50
                    }
                  }
                }
              },
              "range": [
                1063,
                1075
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 50
                },
                "start": {
                  "column": 29,
                  "line": 50
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 50
              },
              "start": {
                "column": 43,
                "line": 50
              }
            },
            "range": [
              1077,
              1085
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "range": [
                  1080,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 50
                  },
                  "start": {
                    "column": 46,
                    "line": 50
                  }
                }
              },
              "range": [
                1080,
                1085
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 50
                },
                "start": {
                  "column": 46,
                  "line": 50
                }
              }
            }
          },
          "range": [
            1062,
            1085
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 50
            },
            "start": {
              "column": 28,
              "line": 50
            }
          }
        },
        "range": [
          1061,
          1088
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 50
          },
          "start": {
            "column": 27,
            "line": 50
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 50
          },
          "start": {
            "column": 17,
            "line": 50
          }
        },
        "range": [
          1051,
          1058
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
                1052,
                1057
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 50
                },
                "start": {
                  "column": 18,
                  "line": 50
                }
              }
            },
            "out": false,
            "range": [
              1052,
              1057
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 50
              },
              "start": {
                "column": 18,
                "line": 50
              }
            }
          }
        ]
      },
      "range": [
        1034,
        1089
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
        "name": "app3",
        "optional": false,
        "range": [
          1108,
          1112
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 52
          },
          "start": {
            "column": 17,
            "line": 52
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
                "column": 94,
                "line": 52
              },
              "start": {
                "column": 69,
                "line": 52
              }
            },
            "range": [
              1160,
              1185
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1169,
                  1185
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
                        1170,
                        1175
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 52
                        },
                        "start": {
                          "column": 79,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1170,
                      1175
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 52
                      },
                      "start": {
                        "column": 79,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Actions",
                      "optional": false,
                      "range": [
                        1177,
                        1184
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 52
                        },
                        "start": {
                          "column": 86,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1177,
                      1184
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 52
                      },
                      "start": {
                        "column": 86,
                        "line": 52
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 52
                  },
                  "start": {
                    "column": 78,
                    "line": 52
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "range": [
                  1162,
                  1169
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 52
                  },
                  "start": {
                    "column": 71,
                    "line": 52
                  }
                }
              },
              "range": [
                1162,
                1185
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 52
                },
                "start": {
                  "column": 71,
                  "line": 52
                }
              }
            }
          },
          "range": [
            1157,
            1185
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 52
            },
            "start": {
              "column": 66,
              "line": 52
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 101,
            "line": 52
          },
          "start": {
            "column": 95,
            "line": 52
          }
        },
        "range": [
          1186,
          1192
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1188,
            1192
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 52
            },
            "start": {
              "column": 97,
              "line": 52
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 52
          },
          "start": {
            "column": 21,
            "line": 52
          }
        },
        "range": [
          1112,
          1156
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
                1113,
                1118
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 52
                },
                "start": {
                  "column": 22,
                  "line": 52
                }
              }
            },
            "out": false,
            "range": [
              1113,
              1118
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 22,
                "line": 52
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
                  1148,
                  1155
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
                        1149,
                        1154
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 52
                        },
                        "start": {
                          "column": 58,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1149,
                      1154
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 52
                      },
                      "start": {
                        "column": 58,
                        "line": 52
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 52
                  },
                  "start": {
                    "column": 57,
                    "line": 52
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsArray",
                "optional": false,
                "range": [
                  1136,
                  1148
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 52
                  },
                  "start": {
                    "column": 45,
                    "line": 52
                  }
                }
              },
              "range": [
                1136,
                1155
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 52
                },
                "start": {
                  "column": 45,
                  "line": 52
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "range": [
                1120,
                1127
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 52
                },
                "start": {
                  "column": 29,
                  "line": 52
                }
              }
            },
            "out": false,
            "range": [
              1120,
              1155
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 52
              },
              "start": {
                "column": 29,
                "line": 52
              }
            }
          }
        ]
      },
      "range": [
        1091,
        1193
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
                  "name": "state",
                  "optional": false,
                  "range": [
                    1206,
                    1211
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "100",
                  "value": 100,
                  "range": [
                    1213,
                    1216
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 55
                    },
                    "start": {
                      "column": 11,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1206,
                  1216
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "range": [
                    1222,
                    1229
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          1246,
                          1247
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 57
                          },
                          "start": {
                            "column": 13,
                            "line": 57
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
                            1241,
                            1242
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 57
                            },
                            "start": {
                              "column": 8,
                              "line": 57
                            }
                          }
                        }
                      ],
                      "range": [
                        1241,
                        1247
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 57
                        },
                        "start": {
                          "column": 8,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "range": [
                    1231,
                    1289
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 58
                    },
                    "start": {
                      "column": 13,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1222,
                  1289
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "view",
                  "optional": false,
                  "range": [
                    1295,
                    1299
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
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
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        1311,
                        1320
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 59
                        },
                        "start": {
                          "column": 20,
                          "line": 59
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1324,
                        1327
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 59
                        },
                        "start": {
                          "column": 33,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1311,
                      1327
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 59
                      },
                      "start": {
                        "column": 20,
                        "line": 59
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
                        1302,
                        1303
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 59
                        },
                        "start": {
                          "column": 11,
                          "line": 59
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1305,
                        1306
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 59
                        },
                        "start": {
                          "column": 14,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "range": [
                    1301,
                    1327
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 59
                    },
                    "start": {
                      "column": 10,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1295,
                  1327
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              1200,
              1330
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 60
              },
              "start": {
                "column": 5,
                "line": 54
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "app3",
          "optional": false,
          "range": [
            1195,
            1199
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          1195,
          1331
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 60
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1195,
        1332
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 54
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
              1354,
              1381
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1379,
                  1381
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 63
                  },
                  "start": {
                    "column": 29,
                    "line": 63
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "range": [
                  1371,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 63
                  },
                  "start": {
                    "column": 21,
                    "line": 63
                  }
                }
              },
              "range": [
                1361,
                1381
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 63
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 31,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1386,
              1423
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1421,
                  1423
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 64
                  },
                  "start": {
                    "column": 39,
                    "line": 64
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "range": [
                  1403,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 64
                  },
                  "start": {
                    "column": 21,
                    "line": 64
                  }
                }
              },
              "range": [
                1393,
                1423
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 64
                },
                "start": {
                  "column": 11,
                  "line": 64
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 41,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1348,
          1425
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 14,
            "line": 62
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1344,
          1347
        ],
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
            "line": 62
          },
          "start": {
            "column": 10,
            "line": 62
          }
        }
      },
      "kind": "namespace",
      "range": [
        1334,
        1425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1460,
          1518
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 68
                    },
                    "start": {
                      "column": 9,
                      "line": 68
                    }
                  },
                  "range": [
                    1471,
                    1479
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1473,
                      1479
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 68
                      },
                      "start": {
                        "column": 11,
                        "line": 68
                      }
                    }
                  }
                },
                "range": [
                  1467,
                  1479
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 68
                  },
                  "start": {
                    "column": 5,
                    "line": 68
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
                  "column": 53,
                  "line": 68
                },
                "start": {
                  "column": 18,
                  "line": 68
                }
              },
              "range": [
                1480,
                1515
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                              "column": 34,
                              "line": 68
                            },
                            "start": {
                              "column": 27,
                              "line": 68
                            }
                          },
                          "range": [
                            1489,
                            1496
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State",
                              "optional": false,
                              "range": [
                                1491,
                                1496
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 68
                                },
                                "start": {
                                  "column": 29,
                                  "line": 68
                                }
                              }
                            },
                            "range": [
                              1491,
                              1496
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 68
                              },
                              "start": {
                                "column": 29,
                                "line": 68
                              }
                            }
                          }
                        },
                        "range": [
                          1484,
                          1496
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 68
                          },
                          "start": {
                            "column": 22,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 68
                        },
                        "start": {
                          "column": 36,
                          "line": 68
                        }
                      },
                      "range": [
                        1498,
                        1506
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            1501,
                            1506
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 68
                            },
                            "start": {
                              "column": 39,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1501,
                          1506
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 68
                          },
                          "start": {
                            "column": 39,
                            "line": 68
                          }
                        }
                      }
                    },
                    "range": [
                      1483,
                      1506
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 68
                      },
                      "start": {
                        "column": 21,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "range": [
                        1510,
                        1515
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 68
                        },
                        "start": {
                          "column": 48,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1510,
                      1515
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 68
                      },
                      "start": {
                        "column": 48,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1482,
                  1515
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 68
                  },
                  "start": {
                    "column": 20,
                    "line": 68
                  }
                }
              }
            },
            "range": [
              1466,
              1516
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 33,
            "line": 67
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionsObjectOr",
        "optional": false,
        "range": [
          1437,
          1452
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 67
          },
          "start": {
            "column": 10,
            "line": 67
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 67
          },
          "start": {
            "column": 25,
            "line": 67
          }
        },
        "range": [
          1452,
          1459
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
                1453,
                1458
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 67
                },
                "start": {
                  "column": 26,
                  "line": 67
                }
              }
            },
            "out": false,
            "range": [
              1453,
              1458
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 67
              },
              "start": {
                "column": 26,
                "line": 67
              }
            }
          }
        ]
      },
      "range": [
        1427,
        1518
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 67
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
        "name": "App4",
        "optional": false,
        "range": [
          1537,
          1541
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 71
          },
          "start": {
            "column": 17,
            "line": 71
          }
        }
      },
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
                "column": 129,
                "line": 71
              },
              "start": {
                "column": 74,
                "line": 71
              }
            },
            "range": [
              1594,
              1649
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"actions\"",
                      "value": "actions",
                      "range": [
                        1620,
                        1629
                      ],
                      "loc": {
                        "end": {
                          "column": 109,
                          "line": 71
                        },
                        "start": {
                          "column": 100,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1620,
                      1629
                    ],
                    "loc": {
                      "end": {
                        "column": 109,
                        "line": 71
                      },
                      "start": {
                        "column": 100,
                        "line": 71
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1603,
                        1619
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
                              1604,
                              1609
                            ],
                            "loc": {
                              "end": {
                                "column": 89,
                                "line": 71
                              },
                              "start": {
                                "column": 84,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1604,
                            1609
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 71
                            },
                            "start": {
                              "column": 84,
                              "line": 71
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Actions",
                            "optional": false,
                            "range": [
                              1611,
                              1618
                            ],
                            "loc": {
                              "end": {
                                "column": 98,
                                "line": 71
                              },
                              "start": {
                                "column": 91,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1611,
                            1618
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 71
                            },
                            "start": {
                              "column": 91,
                              "line": 71
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 99,
                          "line": 71
                        },
                        "start": {
                          "column": 83,
                          "line": 71
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Options",
                      "optional": false,
                      "range": [
                        1596,
                        1603
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 71
                        },
                        "start": {
                          "column": 76,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1596,
                      1619
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 71
                      },
                      "start": {
                        "column": 76,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1596,
                    1630
                  ],
                  "loc": {
                    "end": {
                      "column": 110,
                      "line": 71
                    },
                    "start": {
                      "column": 76,
                      "line": 71
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
                        "name": "state",
                        "optional": false,
                        "range": [
                          1635,
                          1640
                        ],
                        "loc": {
                          "end": {
                            "column": 120,
                            "line": 71
                          },
                          "start": {
                            "column": 115,
                            "line": 71
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
                            "column": 127,
                            "line": 71
                          },
                          "start": {
                            "column": 120,
                            "line": 71
                          }
                        },
                        "range": [
                          1640,
                          1647
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "range": [
                              1642,
                              1647
                            ],
                            "loc": {
                              "end": {
                                "column": 127,
                                "line": 71
                              },
                              "start": {
                                "column": 122,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1642,
                            1647
                          ],
                          "loc": {
                            "end": {
                              "column": 127,
                              "line": 71
                            },
                            "start": {
                              "column": 122,
                              "line": 71
                            }
                          }
                        }
                      },
                      "range": [
                        1635,
                        1647
                      ],
                      "loc": {
                        "end": {
                          "column": 127,
                          "line": 71
                        },
                        "start": {
                          "column": 115,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "range": [
                    1633,
                    1649
                  ],
                  "loc": {
                    "end": {
                      "column": 129,
                      "line": 71
                    },
                    "start": {
                      "column": 113,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                1596,
                1649
              ],
              "loc": {
                "end": {
                  "column": 129,
                  "line": 71
                },
                "start": {
                  "column": 76,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1589,
            1649
          ],
          "loc": {
            "end": {
              "column": 129,
              "line": 71
            },
            "start": {
              "column": 69,
              "line": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 143,
            "line": 71
          },
          "start": {
            "column": 130,
            "line": 71
          }
        },
        "range": [
          1650,
          1663
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                1652,
                1655
              ],
              "loc": {
                "end": {
                  "column": 135,
                  "line": 71
                },
                "start": {
                  "column": 132,
                  "line": 71
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                1656,
                1663
              ],
              "loc": {
                "end": {
                  "column": 143,
                  "line": 71
                },
                "start": {
                  "column": 136,
                  "line": 71
                }
              }
            },
            "range": [
              1652,
              1663
            ],
            "loc": {
              "end": {
                "column": 143,
                "line": 71
              },
              "start": {
                "column": 132,
                "line": 71
              }
            }
          },
          "range": [
            1652,
            1663
          ],
          "loc": {
            "end": {
              "column": 143,
              "line": 71
            },
            "start": {
              "column": 132,
              "line": 71
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 68,
            "line": 71
          },
          "start": {
            "column": 21,
            "line": 71
          }
        },
        "range": [
          1541,
          1588
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
                1542,
                1547
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 71
                },
                "start": {
                  "column": 22,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1542,
              1547
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 71
              },
              "start": {
                "column": 22,
                "line": 71
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
                  1580,
                  1587
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
                        1581,
                        1586
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 71
                        },
                        "start": {
                          "column": 61,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1581,
                      1586
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 71
                      },
                      "start": {
                        "column": 61,
                        "line": 71
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 71
                  },
                  "start": {
                    "column": 60,
                    "line": 71
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ActionsObjectOr",
                "optional": false,
                "range": [
                  1565,
                  1580
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 71
                  },
                  "start": {
                    "column": 45,
                    "line": 71
                  }
                }
              },
              "range": [
                1565,
                1587
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 71
                },
                "start": {
                  "column": 45,
                  "line": 71
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "range": [
                1549,
                1556
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 71
                },
                "start": {
                  "column": 29,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1549,
              1587
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 71
              },
              "start": {
                "column": 29,
                "line": 71
              }
            }
          }
        ]
      },
      "range": [
        1520,
        1664
      ],
      "loc": {
        "end": {
          "column": 144,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
            "range": [
              1672,
              1673
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 73
              },
              "start": {
                "column": 6,
                "line": 73
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                1676,
                1709
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "state",
                    "range": [
                      1682,
                      1687
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 73
                      },
                      "start": {
                        "column": 16,
                        "line": 73
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "100",
                      "value": 100,
                      "range": [
                        1689,
                        1692
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 73
                        },
                        "start": {
                          "column": 23,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1688,
                      1693
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 73
                      },
                      "start": {
                        "column": 22,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    1682,
                    1693
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 73
                    },
                    "start": {
                      "column": 16,
                      "line": 73
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "range": [
                      1694,
                      1697
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 73
                      },
                      "start": {
                        "column": 28,
                        "line": 73
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "range": [
                          1704,
                          1705
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 73
                          },
                          "start": {
                            "column": 38,
                            "line": 73
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
                            1699,
                            1700
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 73
                            },
                            "start": {
                              "column": 33,
                              "line": 73
                            }
                          }
                        }
                      ],
                      "range": [
                        1699,
                        1705
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 73
                        },
                        "start": {
                          "column": 33,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1698,
                      1706
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 73
                      },
                      "start": {
                        "column": 32,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    1694,
                    1706
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 73
                    },
                    "start": {
                      "column": 28,
                      "line": 73
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "App4",
                "range": [
                  1677,
                  1681
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 73
                  },
                  "start": {
                    "column": 11,
                    "line": 73
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 43,
                  "line": 73
                },
                "start": {
                  "column": 10,
                  "line": 73
                }
              }
            },
            "range": [
              1676,
              1709
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 73
              },
              "start": {
                "column": 10,
                "line": 73
              }
            }
          },
          "range": [
            1672,
            1709
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 73
            },
            "start": {
              "column": 6,
              "line": 73
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1666,
        1710
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 74
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
