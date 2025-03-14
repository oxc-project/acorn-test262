__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    609
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Results",
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
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              34,
              35
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "range": [
            28,
            35
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 2
            },
            "start": {
              "column": 8,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            23,
            24
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 2
            },
            "start": {
              "column": 3,
              "line": 2
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "range": [
                  44,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
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
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                },
                "range": [
                  48,
                  54
                ],
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
                        52,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      52,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        50,
                        51
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
                    "range": [
                      50,
                      51
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
                  "range": [
                    50,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                44,
                55
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onSuccess",
                "optional": false,
                "range": [
                  60,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                },
                "range": [
                  69,
                  91
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        },
                        "range": [
                          76,
                          82
                        ],
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
                                80,
                                81
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 4
                                },
                                "start": {
                                  "column": 24,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              80,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 4
                              },
                              "start": {
                                "column": 24,
                                "line": 4
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                78,
                                79
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              78,
                              79
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 4
                              },
                              "start": {
                                "column": 22,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            78,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 22,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        72,
                        82
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    },
                    "range": [
                      84,
                      91
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        87,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    71,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                60,
                92
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            38,
            96
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 18,
              "line": 2
            }
          }
        },
        "range": [
          18,
          99
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          15
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              14
            ],
            "loc": {
              "end": {
                "column": 14,
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
        100
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
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
        "name": "Errors",
        "optional": false,
        "range": [
          107,
          113
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
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
              "name": "E",
              "optional": false,
              "range": [
                135,
                136
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
            "range": [
              135,
              136
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
          "range": [
            129,
            136
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
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            124,
            125
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 9
            },
            "start": {
              "column": 3,
              "line": 9
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "range": [
                  145,
                  150
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
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                },
                "range": [
                  150,
                  156
                ],
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
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      154,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        152,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      152,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    152,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                145,
                157
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onError",
                "optional": false,
                "range": [
                  162,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
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
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  169,
                  191
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        },
                        "range": [
                          176,
                          182
                        ],
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
                                180,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 11
                                },
                                "start": {
                                  "column": 22,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              180,
                              181
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 11
                              },
                              "start": {
                                "column": 22,
                                "line": 11
                              }
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "range": [
                                178,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 11
                                },
                                "start": {
                                  "column": 20,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              178,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 11
                              },
                              "start": {
                                "column": 20,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            178,
                            182
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        172,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
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
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    },
                    "range": [
                      184,
                      191
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        187,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 29,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    171,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                162,
                192
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            }
          ],
          "range": [
            139,
            196
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 12
            },
            "start": {
              "column": 18,
              "line": 9
            }
          }
        },
        "range": [
          119,
          199
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        },
        "range": [
          113,
          116
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              114,
              115
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        102,
        200
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
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
        "name": "withKeyedObj",
        "optional": false,
        "range": [
          219,
          231
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 15
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
                "column": 29,
                "line": 16
              },
              "start": {
                "column": 5,
                "line": 16
              }
            },
            "range": [
              244,
              268
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      253,
                      256
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
                            254,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          254,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 16
                      },
                      "start": {
                        "column": 14,
                        "line": 16
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Results",
                    "optional": false,
                    "range": [
                      246,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 16
                      },
                      "start": {
                        "column": 7,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    246,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      265,
                      268
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            266,
                            267
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 16
                            },
                            "start": {
                              "column": 27,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          266,
                          267
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 16
                          },
                          "start": {
                            "column": 27,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 26,
                        "line": 16
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errors",
                    "optional": false,
                    "range": [
                      259,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    259,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                246,
                268
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              }
            }
          },
          "range": [
            241,
            268
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 16
            },
            "start": {
              "column": 2,
              "line": 16
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 1,
            "line": 17
          }
        },
        "range": [
          270,
          278
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  273,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "range": [
                273,
                274
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "range": [
                  276,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              },
              "range": [
                276,
                277
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            272,
            278
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 17
            },
            "start": {
              "column": 3,
              "line": 17
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 15
          },
          "start": {
            "column": 29,
            "line": 15
          }
        },
        "range": [
          231,
          237
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
                232,
                233
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 30,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              232,
              233
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 15
              },
              "start": {
                "column": 30,
                "line": 15
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
              "name": "E",
              "optional": false,
              "range": [
                235,
                236
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              235,
              236
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 33,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        202,
        279
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 17
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
            "name": "res",
            "optional": false,
            "range": [
              287,
              290
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        310,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "range": [
                              319,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 21
                              },
                              "start": {
                                "column": 4,
                                "line": 21
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"foo\"",
                            "value": "foo",
                            "range": [
                              325,
                              330
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 21
                              },
                              "start": {
                                "column": 10,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            319,
                            330
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 21
                            },
                            "start": {
                              "column": 4,
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
                            "name": "onSuccess",
                            "optional": false,
                            "range": [
                              336,
                              345
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
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
                                    "name": "dataArg",
                                    "optional": false,
                                    "range": [
                                      368,
                                      375
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    368,
                                    376
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 23
                                    }
                                  }
                                }
                              ],
                              "range": [
                                360,
                                382
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 24
                                },
                                "start": {
                                  "column": 28,
                                  "line": 22
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
                                "name": "dataArg",
                                "optional": false,
                                "range": [
                                  348,
                                  355
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "range": [
                              347,
                              382
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 24
                              },
                              "start": {
                                "column": 15,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            336,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 24
                            },
                            "start": {
                              "column": 4,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "range": [
                              388,
                              393
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
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
                            "type": "Literal",
                            "raw": "404",
                            "value": 404,
                            "range": [
                              395,
                              398
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 25
                              },
                              "start": {
                                "column": 11,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            388,
                            398
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 25
                            },
                            "start": {
                              "column": 4,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onError",
                            "optional": false,
                            "range": [
                              404,
                              411
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 26
                              },
                              "start": {
                                "column": 4,
                                "line": 26
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
                                    "name": "errorArg",
                                    "optional": false,
                                    "range": [
                                      435,
                                      443
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "range": [
                                    435,
                                    444
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 27
                                    }
                                  }
                                }
                              ],
                              "range": [
                                427,
                                450
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 28
                                },
                                "start": {
                                  "column": 27,
                                  "line": 26
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
                                "name": "errorArg",
                                "optional": false,
                                "range": [
                                  414,
                                  422
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 26
                                  }
                                }
                              }
                            ],
                            "range": [
                              413,
                              450
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 28
                              },
                              "start": {
                                "column": 13,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            404,
                            450
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 28
                            },
                            "start": {
                              "column": 4,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        313,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 29
                        },
                        "start": {
                          "column": 5,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      310,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 29
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        459,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 30
                        },
                        "start": {
                          "column": 2,
                          "line": 30
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
                            "name": "data",
                            "optional": false,
                            "range": [
                              468,
                              472
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 31
                              },
                              "start": {
                                "column": 4,
                                "line": 31
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              474,
                              478
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 31
                              },
                              "start": {
                                "column": 10,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            468,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 31
                            },
                            "start": {
                              "column": 4,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onSuccess",
                            "optional": false,
                            "range": [
                              484,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 32
                              },
                              "start": {
                                "column": 4,
                                "line": 32
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
                                    "name": "dataArg",
                                    "optional": false,
                                    "range": [
                                      516,
                                      523
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    516,
                                    524
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 14,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 33
                                    }
                                  }
                                }
                              ],
                              "range": [
                                508,
                                530
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 34
                                },
                                "start": {
                                  "column": 28,
                                  "line": 32
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
                                "name": "dataArg",
                                "optional": false,
                                "range": [
                                  496,
                                  503
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 32
                                  }
                                }
                              }
                            ],
                            "range": [
                              495,
                              530
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 34
                              },
                              "start": {
                                "column": 15,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            484,
                            530
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 34
                            },
                            "start": {
                              "column": 4,
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
                            "name": "error",
                            "optional": false,
                            "range": [
                              536,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
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
                            "type": "Literal",
                            "raw": "500",
                            "value": 500,
                            "range": [
                              543,
                              546
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 35
                              },
                              "start": {
                                "column": 11,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            536,
                            546
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 35
                            },
                            "start": {
                              "column": 4,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "onError",
                            "optional": false,
                            "range": [
                              552,
                              559
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
                                    "name": "errorArg",
                                    "optional": false,
                                    "range": [
                                      583,
                                      591
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
                                  },
                                  "range": [
                                    583,
                                    592
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
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
                                575,
                                598
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 38
                                },
                                "start": {
                                  "column": 27,
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
                                "name": "errorArg",
                                "optional": false,
                                "range": [
                                  562,
                                  570
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 36
                                  }
                                }
                              }
                            ],
                            "range": [
                              561,
                              598
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 38
                              },
                              "start": {
                                "column": 13,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            552,
                            598
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
                        462,
                        603
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 39
                        },
                        "start": {
                          "column": 5,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      459,
                      603
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 39
                      },
                      "start": {
                        "column": 2,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  306,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 40
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withKeyedObj",
              "optional": false,
              "range": [
                293,
                305
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              293,
              607
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 40
              },
              "start": {
                "column": 12,
                "line": 19
              }
            }
          },
          "range": [
            287,
            607
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        281,
        608
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
