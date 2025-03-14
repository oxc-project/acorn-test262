__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    651
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
        "name": "withTupleLike",
        "optional": false,
        "range": [
          219,
          232
        ],
        "loc": {
          "end": {
            "column": 30,
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
              291,
              315
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      300,
                      303
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
                            301,
                            302
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
                          301,
                          302
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
                      293,
                      300
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
                    293,
                    303
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
                      312,
                      315
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
                            313,
                            314
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
                          313,
                          314
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
                      306,
                      312
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
                    306,
                    315
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
                293,
                315
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
            288,
            315
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
          317,
          325
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
                  320,
                  321
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
                320,
                321
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
                  323,
                  324
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
                323,
                324
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
            319,
            325
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
            "column": 82,
            "line": 15
          },
          "start": {
            "column": 30,
            "line": 15
          }
        },
        "range": [
          232,
          284
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
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      245,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 15
                      },
                      "start": {
                        "column": 43,
                        "line": 15
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
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
                      }
                    },
                    "range": [
                      246,
                      255
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        248,
                        255
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 15
                        },
                        "start": {
                          "column": 46,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    245,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 15
                    },
                    "start": {
                      "column": 43,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                243,
                257
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 15
                },
                "start": {
                  "column": 41,
                  "line": 15
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
                233,
                234
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 15
                },
                "start": {
                  "column": 31,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              233,
              257
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 15
              },
              "start": {
                "column": 31,
                "line": 15
              }
            }
          },
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
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      271,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 15
                      },
                      "start": {
                        "column": 69,
                        "line": 15
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
                        "column": 79,
                        "line": 15
                      },
                      "start": {
                        "column": 70,
                        "line": 15
                      }
                    },
                    "range": [
                      272,
                      281
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        274,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 15
                        },
                        "start": {
                          "column": 72,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    271,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 15
                    },
                    "start": {
                      "column": 69,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                269,
                283
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 15
                },
                "start": {
                  "column": 67,
                  "line": 15
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 15
                },
                "start": {
                  "column": 57,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              259,
              283
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 15
              },
              "start": {
                "column": 57,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        202,
        326
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
              334,
              337
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
                "type": "ArrayExpression",
                "elements": [
                  {
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
                            364,
                            368
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
                            370,
                            375
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
                          364,
                          375
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
                            381,
                            390
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
                                    413,
                                    420
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
                                  413,
                                  421
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
                              405,
                              427
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
                                393,
                                400
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
                            392,
                            427
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
                          381,
                          427
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
                            433,
                            438
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
                            440,
                            443
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
                          433,
                          443
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
                            449,
                            456
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
                                    480,
                                    488
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
                                  480,
                                  489
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
                              472,
                              495
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
                                459,
                                467
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
                            458,
                            495
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
                          449,
                          495
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
                      358,
                      500
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
                            510,
                            514
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
                            516,
                            520
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
                          510,
                          520
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
                            526,
                            535
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
                                    558,
                                    565
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
                                  558,
                                  566
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
                              550,
                              572
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
                                538,
                                545
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
                            537,
                            572
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
                          526,
                          572
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
                            578,
                            583
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
                            585,
                            588
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
                          578,
                          588
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
                            594,
                            601
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
                                    625,
                                    633
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
                                  625,
                                  634
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
                              617,
                              640
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
                                604,
                                612
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
                            603,
                            640
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
                          594,
                          640
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
                      504,
                      645
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
                  354,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 40
                  },
                  "start": {
                    "column": 26,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withTupleLike",
              "optional": false,
              "range": [
                340,
                353
              ],
              "loc": {
                "end": {
                  "column": 25,
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
              340,
              649
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
            334,
            649
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
        328,
        650
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
