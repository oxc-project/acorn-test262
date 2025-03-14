__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    290
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          19,
          49
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                25,
                28
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 12,
                      "line": 2
                    },
                    "start": {
                      "column": 9,
                      "line": 2
                    }
                  },
                  "range": [
                    30,
                    33
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        32,
                        33
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
                    "range": [
                      32,
                      33
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
                  }
                },
                "range": [
                  29,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                34,
                46
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    41,
                    46
                  ],
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            42,
                            43
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 2
                            },
                            "start": {
                              "column": 21,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          42,
                          43
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 2
                          },
                          "start": {
                            "column": 21,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        42,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 21,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "range": [
                    36,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "range": [
                  36,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              25,
              47
            ],
            "loc": {
              "end": {
                "column": 26,
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
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
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
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          18
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
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        49
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
          75,
          138
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  },
                  "range": [
                    88,
                    125
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 18,
                              "line": 6
                            }
                          },
                          "range": [
                            95,
                            98
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                97,
                                98
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 6
                                },
                                "start": {
                                  "column": 20,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              97,
                              98
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
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
                          91,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 6
                            },
                            "start": {
                              "column": 28,
                              "line": 6
                            }
                          },
                          "range": [
                            105,
                            113
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              107,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 6
                              },
                              "start": {
                                "column": 30,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          100,
                          113
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 6
                        },
                        "start": {
                          "column": 38,
                          "line": 6
                        }
                      },
                      "range": [
                        115,
                        125
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          118,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 6
                          },
                          "start": {
                            "column": 41,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      90,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  82,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 6
                },
                "start": {
                  "column": 49,
                  "line": 6
                }
              },
              "range": [
                126,
                135
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  128,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 6
                  },
                  "start": {
                    "column": 51,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              81,
              136
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 6
              },
              "start": {
                "column": 4,
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
            "column": 24,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enumerator",
        "optional": false,
        "range": [
          61,
          71
        ],
        "loc": {
          "end": {
            "column": 20,
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
            "column": 23,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 5
          }
        },
        "range": [
          71,
          74
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
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              72,
              73
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        51,
        138
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "range": [
          149,
          153
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            },
            "range": [
              162,
              167
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    164,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 24,
                      "line": 9
                    }
                  }
                },
                "range": [
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                164,
                167
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              }
            }
          },
          "range": [
            157,
            167
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 9
            },
            "start": {
              "column": 17,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 9
          },
          "start": {
            "column": 28,
            "line": 9
          }
        },
        "range": [
          168,
          178
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              175,
              178
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
                    176,
                    177
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
                  176,
                  177
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
            "loc": {
              "end": {
                "column": 38,
                "line": 9
              },
              "start": {
                "column": 35,
                "line": 9
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "range": [
              170,
              175
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 30,
                "line": 9
              }
            }
          },
          "range": [
            170,
            178
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 9
            },
            "start": {
              "column": 30,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 9
          }
        },
        "range": [
          153,
          156
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
                154,
                155
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              154,
              155
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        140,
        179
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "range": [
          189,
          193
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "enumerator",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 27,
                "line": 10
              }
            },
            "range": [
              207,
              222
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  219,
                  222
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
                        220,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 10
                        },
                        "start": {
                          "column": 40,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      220,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 10
                      },
                      "start": {
                        "column": 40,
                        "line": 10
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 39,
                    "line": 10
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enumerator",
                "optional": false,
                "range": [
                  209,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 29,
                    "line": 10
                  }
                }
              },
              "range": [
                209,
                222
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 29,
                  "line": 10
                }
              }
            }
          },
          "range": [
            197,
            222
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 10
          },
          "start": {
            "column": 43,
            "line": 10
          }
        },
        "range": [
          223,
          233
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              230,
              233
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
                    231,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 51,
                      "line": 10
                    }
                  }
                },
                "range": [
                  231,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 10
                  },
                  "start": {
                    "column": 51,
                    "line": 10
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 10
              },
              "start": {
                "column": 50,
                "line": 10
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Query",
            "optional": false,
            "range": [
              225,
              230
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 10
              },
              "start": {
                "column": 45,
                "line": 10
              }
            }
          },
          "range": [
            225,
            233
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 10
            },
            "start": {
              "column": 45,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 13,
            "line": 10
          }
        },
        "range": [
          193,
          196
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
                194,
                195
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              194,
              195
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        180,
        234
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                277,
                286
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              270,
              287
            ],
            "loc": {
              "end": {
                "column": 21,
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
          264,
          289
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 29,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "range": [
          244,
          248
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 17,
                "line": 11
              }
            },
            "range": [
              252,
              257
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                254,
                257
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            }
          },
          "range": [
            249,
            257
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 11
          }
        },
        "range": [
          258,
          263
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            260,
            263
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 11
            },
            "start": {
              "column": 25,
              "line": 11
            }
          }
        }
      },
      "range": [
        235,
        289
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
