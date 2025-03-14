__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    495,
    1461
  ],
  "body": [
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
          512,
          515
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            },
            "range": [
              521,
              550
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    },
                    "range": [
                      525,
                      533
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        527,
                        533
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 7
                        },
                        "start": {
                          "column": 32,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    524,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 29,
                      "line": 7
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
                        "column": 49,
                        "line": 7
                      },
                      "start": {
                        "column": 41,
                        "line": 7
                      }
                    },
                    "range": [
                      536,
                      544
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        538,
                        544
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 7
                        },
                        "start": {
                          "column": 43,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    535,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 7
                    },
                    "start": {
                      "column": 40,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 7
                  },
                  "start": {
                    "column": 51,
                    "line": 7
                  }
                },
                "range": [
                  546,
                  550
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      549,
                      550
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 7
                      },
                      "start": {
                        "column": 54,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    549,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 7
                    },
                    "start": {
                      "column": 54,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                523,
                550
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            }
          },
          "range": [
            519,
            550
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 7
          },
          "start": {
            "column": 56,
            "line": 7
          }
        },
        "range": [
          551,
          554
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              553,
              554
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 7
              },
              "start": {
                "column": 58,
                "line": 7
              }
            }
          },
          "range": [
            553,
            554
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 7
            },
            "start": {
              "column": 58,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          515,
          518
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
                516,
                517
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              516,
              517
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        495,
        555
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
        "name": "bar",
        "optional": false,
        "range": [
          573,
          576
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 8
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
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 31,
                "line": 8
              }
            },
            "range": [
              587,
              590
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  589,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 33,
                    "line": 8
                  }
                }
              },
              "range": [
                589,
                590
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 33,
                  "line": 8
                }
              }
            }
          },
          "range": [
            586,
            590
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 30,
              "line": 8
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
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 37,
                "line": 8
              }
            },
            "range": [
              593,
              596
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  595,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                }
              },
              "range": [
                595,
                596
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 8
                },
                "start": {
                  "column": 39,
                  "line": 8
                }
              }
            }
          },
          "range": [
            592,
            596
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 8
            },
            "start": {
              "column": 36,
              "line": 8
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 8
              },
              "start": {
                "column": 44,
                "line": 8
              }
            },
            "range": [
              600,
              619
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 51,
                        "line": 8
                      },
                      "start": {
                        "column": 48,
                        "line": 8
                      }
                    },
                    "range": [
                      604,
                      607
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          606,
                          607
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 8
                          },
                          "start": {
                            "column": 50,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        606,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 8
                        },
                        "start": {
                          "column": 50,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    603,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 8
                    },
                    "start": {
                      "column": 47,
                      "line": 8
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
                        "column": 57,
                        "line": 8
                      },
                      "start": {
                        "column": 54,
                        "line": 8
                      }
                    },
                    "range": [
                      610,
                      613
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          612,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 8
                          },
                          "start": {
                            "column": 56,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        612,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 8
                        },
                        "start": {
                          "column": 56,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    609,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 8
                    },
                    "start": {
                      "column": 53,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 8
                  },
                  "start": {
                    "column": 59,
                    "line": 8
                  }
                },
                "range": [
                  615,
                  619
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      618,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 8
                      },
                      "start": {
                        "column": 62,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    618,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 8
                    },
                    "start": {
                      "column": 62,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                602,
                619
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 8
                },
                "start": {
                  "column": 46,
                  "line": 8
                }
              }
            }
          },
          "range": [
            598,
            619
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 8
            },
            "start": {
              "column": 42,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 8
          },
          "start": {
            "column": 64,
            "line": 8
          }
        },
        "range": [
          620,
          623
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "range": [
              622,
              623
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 8
              },
              "start": {
                "column": 66,
                "line": 8
              }
            }
          },
          "range": [
            622,
            623
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 8
            },
            "start": {
              "column": 66,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 8
          }
        },
        "range": [
          576,
          585
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
                577,
                578
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              577,
              578
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
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
              "name": "U",
              "optional": false,
              "range": [
                580,
                581
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              580,
              581
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
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
              "name": "V",
              "optional": false,
              "range": [
                583,
                584
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 27,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              583,
              584
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        556,
        624
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 8
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
        "name": "baz",
        "optional": false,
        "range": [
          642,
          645
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 9
          },
          "start": {
            "column": 17,
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
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            },
            "range": [
              653,
              656
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  655,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "range": [
                655,
                656
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            }
          },
          "range": [
            652,
            656
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 9
            },
            "start": {
              "column": 27,
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
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 34,
                "line": 9
              }
            },
            "range": [
              659,
              662
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  661,
                  662
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
                661,
                662
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
          },
          "range": [
            658,
            662
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 9
            },
            "start": {
              "column": 33,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 9
              },
              "start": {
                "column": 41,
                "line": 9
              }
            },
            "range": [
              666,
              685
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 48,
                        "line": 9
                      },
                      "start": {
                        "column": 45,
                        "line": 9
                      }
                    },
                    "range": [
                      670,
                      673
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          672,
                          673
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 9
                          },
                          "start": {
                            "column": 47,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        672,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 9
                        },
                        "start": {
                          "column": 47,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    669,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 9
                    },
                    "start": {
                      "column": 44,
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
                        "column": 54,
                        "line": 9
                      },
                      "start": {
                        "column": 51,
                        "line": 9
                      }
                    },
                    "range": [
                      676,
                      679
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          678,
                          679
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 9
                          },
                          "start": {
                            "column": 53,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        678,
                        679
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 9
                        },
                        "start": {
                          "column": 53,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    675,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 9
                    },
                    "start": {
                      "column": 50,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 9
                  },
                  "start": {
                    "column": 56,
                    "line": 9
                  }
                },
                "range": [
                  681,
                  685
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      684,
                      685
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 9
                      },
                      "start": {
                        "column": 59,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    684,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 9
                    },
                    "start": {
                      "column": 59,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                668,
                685
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 9
                },
                "start": {
                  "column": 43,
                  "line": 9
                }
              }
            }
          },
          "range": [
            664,
            685
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 9
            },
            "start": {
              "column": 39,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 9
          },
          "start": {
            "column": 61,
            "line": 9
          }
        },
        "range": [
          686,
          689
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              688,
              689
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 9
              },
              "start": {
                "column": 63,
                "line": 9
              }
            }
          },
          "range": [
            688,
            689
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 9
            },
            "start": {
              "column": 63,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 20,
            "line": 9
          }
        },
        "range": [
          645,
          651
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
                646,
                647
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 21,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              646,
              647
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
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
              "name": "U",
              "optional": false,
              "range": [
                649,
                650
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
            "out": false,
            "range": [
              649,
              650
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
          }
        ]
      },
      "range": [
        625,
        690
      ],
      "loc": {
        "end": {
          "column": 65,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          709,
          710
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            },
            "range": [
              715,
              718
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  717,
                  718
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              },
              "range": [
                717,
                718
              ],
              "loc": {
                "end": {
                  "column": 26,
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
            714,
            718
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 11
            },
            "start": {
              "column": 22,
              "line": 11
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
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 29,
                "line": 11
              }
            },
            "range": [
              721,
              724
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  723,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              },
              "range": [
                723,
                724
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 31,
                  "line": 11
                }
              }
            }
          },
          "range": [
            720,
            724
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 11
            },
            "start": {
              "column": 28,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 11
          },
          "start": {
            "column": 33,
            "line": 11
          }
        },
        "range": [
          725,
          728
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              727,
              728
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            }
          },
          "range": [
            727,
            728
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 11
            },
            "start": {
              "column": 35,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 11
          }
        },
        "range": [
          710,
          713
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
                711,
                712
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              711,
              712
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        692,
        729
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "h",
        "optional": false,
        "range": [
          747,
          748
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
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
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            },
            "range": [
              756,
              759
            ],
            "typeAnnotation": {
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
                    "column": 29,
                    "line": 12
                  },
                  "start": {
                    "column": 28,
                    "line": 12
                  }
                }
              },
              "range": [
                758,
                759
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            }
          },
          "range": [
            755,
            759
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 12
            },
            "start": {
              "column": 25,
              "line": 12
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
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 32,
                "line": 12
              }
            },
            "range": [
              762,
              765
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  764,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 34,
                    "line": 12
                  }
                }
              },
              "range": [
                764,
                765
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 34,
                  "line": 12
                }
              }
            }
          },
          "range": [
            761,
            765
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 12
            },
            "start": {
              "column": 31,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 12
          },
          "start": {
            "column": 36,
            "line": 12
          }
        },
        "range": [
          766,
          777
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
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
                    768,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 12
                    },
                    "start": {
                      "column": 38,
                      "line": 12
                    }
                  }
                },
                "range": [
                  768,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                }
              },
              "range": [
                768,
                771
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 38,
                  "line": 12
                }
              }
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    774,
                    775
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 12
                    },
                    "start": {
                      "column": 44,
                      "line": 12
                    }
                  }
                },
                "range": [
                  774,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 44,
                    "line": 12
                  }
                }
              },
              "range": [
                774,
                777
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 12
                },
                "start": {
                  "column": 44,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            768,
            777
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 12
            },
            "start": {
              "column": 38,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 18,
            "line": 12
          }
        },
        "range": [
          748,
          754
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
                749,
                750
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              749,
              750
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
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
              "name": "U",
              "optional": false,
              "range": [
                752,
                753
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              752,
              753
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        730,
        778
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                785,
                793
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  787,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              784,
              793
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            784,
            793
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        780,
        794
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
              799,
              800
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  807,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  810,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  813,
                  814
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                803,
                806
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              803,
              815
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            799,
            815
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        795,
        816
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 15
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
            "name": "a",
            "optional": false,
            "range": [
              846,
              847
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  854,
                  855
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 16
                  },
                  "start": {
                    "column": 12,
                    "line": 16
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  857,
                  858
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
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  860,
                  861
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
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                850,
                853
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
            "optional": false,
            "range": [
              850,
              862
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 16
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          },
          "range": [
            846,
            862
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        842,
        863
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                895,
                912
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      897,
                      903
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 18
                      },
                      "start": {
                        "column": 7,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      906,
                      912
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 18
                      },
                      "start": {
                        "column": 16,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  897,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              894,
              912
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            894,
            912
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        890,
        913
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "b",
            "optional": false,
            "range": [
              918,
              919
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  926,
                  927
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 19
                  },
                  "start": {
                    "column": 12,
                    "line": 19
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
                922,
                925
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              922,
              928
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            918,
            928
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        914,
        929
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "b",
            "optional": false,
            "range": [
              992,
              993
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1000,
                  1001
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"one\"",
                "value": "one",
                "range": [
                  1003,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 15,
                    "line": 20
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  1010,
                  1011
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 22,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                996,
                999
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              996,
              1012
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            992,
            1012
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        988,
        1013
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "b",
            "optional": false,
            "range": [
              1066,
              1067
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"one\"",
                "value": "one",
                "range": [
                  1074,
                  1079
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1081,
                  1082
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 21
                  },
                  "start": {
                    "column": 19,
                    "line": 21
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  1084,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 22,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1070,
                1073
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              1070,
              1086
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            1066,
            1086
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1062,
        1087
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 21
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
            "name": "b",
            "optional": false,
            "range": [
              1140,
              1141
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1148,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 12,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1151,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  1154,
                  1155
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                1144,
                1147
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              1144,
              1156
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "range": [
            1140,
            1156
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1136,
        1157
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              },
              "range": [
                1198,
                1219
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1200,
                        1206
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 7,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      1200,
                      1208
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 24
                      },
                      "start": {
                        "column": 7,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        1211,
                        1217
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      1211,
                      1219
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  1200,
                  1219
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              1197,
              1219
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            1197,
            1219
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1193,
        1220
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "d",
            "optional": false,
            "range": [
              1225,
              1226
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "range": [
                  1233,
                  1234
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 25
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
                1229,
                1232
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              1229,
              1235
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 25
              }
            }
          },
          "range": [
            1225,
            1235
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1221,
        1236
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "d",
            "optional": false,
            "range": [
              1285,
              1286
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1293,
                  1294
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"one\"",
                "value": "one",
                "range": [
                  1296,
                  1301
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "range": [
                  1303,
                  1304
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1289,
                1292
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              1289,
              1305
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            1285,
            1305
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1281,
        1306
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "d",
            "optional": false,
            "range": [
              1345,
              1346
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"one\"",
                "value": "one",
                "range": [
                  1353,
                  1358
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 12,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1360,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 27
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "range": [
                  1363,
                  1364
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 27
                  },
                  "start": {
                    "column": 22,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1349,
                1352
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              1349,
              1365
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            1345,
            1365
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1341,
        1366
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 27
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
            "name": "d",
            "optional": false,
            "range": [
              1405,
              1406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1413,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "range": [
                  1416,
                  1417
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 15,
                    "line": 28
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "range": [
                  1419,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                1409,
                1412
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              1409,
              1421
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            1405,
            1421
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1401,
        1422
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 7
    }
  },
  "hashbang": null
}
```
