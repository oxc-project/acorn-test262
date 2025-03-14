__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2101
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          18,
          38
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unknown",
              "optional": false,
              "range": [
                20,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "range": [
              20,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "range": [
                29,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "range": [
              29,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "No",
              "optional": false,
              "range": [
                34,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            },
            "range": [
              34,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Choice",
        "optional": false,
        "range": [
          11,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
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
      "type": "EmptyStatement",
      "range": [
        38,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 38,
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
        "name": "YesNo",
        "optional": false,
        "range": [
          46,
          51
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  54,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  61,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "range": [
                54,
                64
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "range": [
              54,
              64
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  67,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "range": [
                  74,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              },
              "range": [
                67,
                76
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "range": [
              67,
              76
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          }
        ],
        "range": [
          54,
          76
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        }
      },
      "range": [
        41,
        77
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoYes",
        "optional": false,
        "range": [
          83,
          88
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
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  91,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "range": [
                  98,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              },
              "range": [
                91,
                100
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              91,
              100
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  103,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  110,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              },
              "range": [
                103,
                113
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              113
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 25,
                "line": 4
              }
            }
          }
        ],
        "range": [
          91,
          113
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        78,
        114
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownYesNo",
        "optional": false,
        "range": [
          120,
          132
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  135,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unknown",
                "optional": false,
                "range": [
                  142,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 5
                  }
                }
              },
              "range": [
                135,
                149
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              135,
              149
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  152,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yes",
                "optional": false,
                "range": [
                  159,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                }
              },
              "range": [
                152,
                162
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            },
            "range": [
              152,
              162
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  165,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "No",
                "optional": false,
                "range": [
                  172,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 5
                  },
                  "start": {
                    "column": 57,
                    "line": 5
                  }
                }
              },
              "range": [
                165,
                174
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 5
                },
                "start": {
                  "column": 50,
                  "line": 5
                }
              }
            },
            "range": [
              165,
              174
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 5
              },
              "start": {
                "column": 50,
                "line": 5
              }
            }
          }
        ],
        "range": [
          135,
          174
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 5
          }
        }
      },
      "range": [
        115,
        175
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 5
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
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      202,
                      209
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "YesNo",
                        "optional": false,
                        "range": [
                          204,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        204,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    201,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  201,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              197,
              210
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                        "column": 16,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    },
                    "range": [
                      220,
                      227
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoYes",
                        "optional": false,
                        "range": [
                          222,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 11,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        222,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    219,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  219,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              215,
              228
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    },
                    "range": [
                      238,
                      262
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "range": [
                                240,
                                246
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 10
                                },
                                "start": {
                                  "column": 11,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "range": [
                                247,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 10
                                },
                                "start": {
                                  "column": 18,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              240,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 10
                              },
                              "start": {
                                "column": 11,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            240,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 10
                            },
                            "start": {
                              "column": 11,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "range": [
                                253,
                                259
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 10
                                },
                                "start": {
                                  "column": 24,
                                  "line": 10
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "range": [
                                260,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 10
                                },
                                "start": {
                                  "column": 31,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              253,
                              262
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 10
                              },
                              "start": {
                                "column": 24,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            253,
                            262
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 10
                            },
                            "start": {
                              "column": 24,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        240,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
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
                    237,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": null,
                "range": [
                  237,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              233,
              263
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    },
                    "range": [
                      273,
                      297
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "range": [
                                275,
                                281
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 11
                                },
                                "start": {
                                  "column": 11,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "range": [
                                282,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 11
                                },
                                "start": {
                                  "column": 18,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              275,
                              284
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 11
                              },
                              "start": {
                                "column": 11,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            275,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 11
                            },
                            "start": {
                              "column": 11,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Choice",
                              "optional": false,
                              "range": [
                                287,
                                293
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 11
                                },
                                "start": {
                                  "column": 23,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Yes",
                              "optional": false,
                              "range": [
                                294,
                                297
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 11
                                },
                                "start": {
                                  "column": 30,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              287,
                              297
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 11
                              },
                              "start": {
                                "column": 23,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            287,
                            297
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 11
                            },
                            "start": {
                              "column": 23,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        275,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 11,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    272,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": null,
                "range": [
                  272,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              268,
              298
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
          191,
          300
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 14,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          186,
          188
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        177,
        300
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
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
                "name": "b",
                "optional": false,
                "range": [
                  358,
                  359
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  362,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "range": [
                358,
                363
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              358,
              364
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  369,
                  370
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  373,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              "range": [
                369,
                374
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              369,
              375
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  380,
                  381
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  384,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              "range": [
                380,
                385
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              380,
              386
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          352,
          388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 50,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          311,
          313
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
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
                "column": 20,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            },
            "range": [
              315,
              322
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  317,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 14
                  },
                  "start": {
                    "column": 15,
                    "line": 14
                  }
                }
              },
              "range": [
                317,
                322
              ],
              "loc": {
                "end": {
                  "column": 20,
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
            314,
            322
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 14
              },
              "start": {
                "column": 23,
                "line": 14
              }
            },
            "range": [
              325,
              339
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  327,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "range": [
                327,
                339
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              }
            }
          },
          "range": [
            324,
            339
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 14
            },
            "start": {
              "column": 22,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 14
              },
              "start": {
                "column": 40,
                "line": 14
              }
            },
            "range": [
              342,
              350
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  344,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 14
                  },
                  "start": {
                    "column": 42,
                    "line": 14
                  }
                }
              },
              "range": [
                344,
                350
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 14
                },
                "start": {
                  "column": 42,
                  "line": 14
                }
              }
            }
          },
          "range": [
            341,
            350
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 14
            },
            "start": {
              "column": 39,
              "line": 14
            }
          }
        }
      ],
      "range": [
        302,
        388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 14
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    444,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      448,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      452,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    448,
                    453
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
                "range": [
                  444,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              440,
              454
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    463,
                    464
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
                "init": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      467,
                      468
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      471,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 16,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    467,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  463,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              459,
              473
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    482,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      486,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      490,
                      491
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 16,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    486,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                },
                "range": [
                  482,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              478,
              492
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    501,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      505,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      509,
                      510
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 24
                      },
                      "start": {
                        "column": 16,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    505,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                "range": [
                  501,
                  510
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              497,
              511
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    520,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "%",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      524,
                      525
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
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      528,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 25
                      },
                      "start": {
                        "column": 16,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    524,
                    529
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "range": [
                  520,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              516,
              530
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    539,
                    540
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
                "init": {
                  "type": "BinaryExpression",
                  "operator": "|",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      543,
                      544
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      547,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    543,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "range": [
                  539,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              535,
              549
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    558,
                    559
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      562,
                      563
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 27
                      },
                      "start": {
                        "column": 12,
                        "line": 27
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      566,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 27
                      },
                      "start": {
                        "column": 16,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    562,
                    567
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
                "range": [
                  558,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              554,
              568
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 27
              },
              "start": {
                "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    577,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      581,
                      582
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
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      585,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 16,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    581,
                    586
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                },
                "range": [
                  577,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              573,
              587
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    596,
                    597
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
                },
                "init": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      601,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 29
                      },
                      "start": {
                        "column": 13,
                        "line": 29
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    600,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 29
                    },
                    "start": {
                      "column": 12,
                      "line": 29
                    }
                  }
                },
                "range": [
                  596,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              592,
              603
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    612,
                    613
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
                "init": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      617,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 30
                      },
                      "start": {
                        "column": 13,
                        "line": 30
                      }
                    }
                  },
                  "operator": "~",
                  "prefix": true,
                  "range": [
                    616,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 30
                    },
                    "start": {
                      "column": 12,
                      "line": 30
                    }
                  }
                },
                "range": [
                  612,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              608,
              619
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                    628,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      632,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      637,
                      638
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    632,
                    638
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "range": [
                  628,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              624,
              639
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                    648,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "!=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      652,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 32
                      },
                      "start": {
                        "column": 12,
                        "line": 32
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      657,
                      658
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 17,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    652,
                    658
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 12,
                      "line": 32
                    }
                  }
                },
                "range": [
                  648,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              644,
              659
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                    668,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      672,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 12,
                        "line": 33
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      678,
                      679
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    672,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                "range": [
                  668,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              664,
              680
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                    689,
                    690
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
                "init": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      693,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 34
                      },
                      "start": {
                        "column": 12,
                        "line": 34
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      699,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 18,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    693,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 12,
                      "line": 34
                    }
                  }
                },
                "range": [
                  689,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              685,
              701
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
                    710,
                    711
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      714,
                      715
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 35
                      },
                      "start": {
                        "column": 12,
                        "line": 35
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      718,
                      719
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 35
                      },
                      "start": {
                        "column": 16,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    714,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 35
                    },
                    "start": {
                      "column": 12,
                      "line": 35
                    }
                  }
                },
                "range": [
                  710,
                  719
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              706,
              720
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                    729,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      733,
                      734
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 36
                      },
                      "start": {
                        "column": 12,
                        "line": 36
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      737,
                      738
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 16,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    733,
                    738
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 36
                    },
                    "start": {
                      "column": 12,
                      "line": 36
                    }
                  }
                },
                "range": [
                  729,
                  738
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              725,
              739
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                    748,
                    749
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": ">=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      752,
                      753
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      757,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 37
                      },
                      "start": {
                        "column": 17,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    752,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 37
                    },
                    "start": {
                      "column": 12,
                      "line": 37
                    }
                  }
                },
                "range": [
                  748,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              744,
              759
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
                    768,
                    769
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
                "init": {
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      772,
                      773
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 38
                      },
                      "start": {
                        "column": 12,
                        "line": 38
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      777,
                      778
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    772,
                    778
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 38
                    },
                    "start": {
                      "column": 12,
                      "line": 38
                    }
                  }
                },
                "range": [
                  768,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              764,
              779
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
                    788,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "init": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      793,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    792,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 39
                    },
                    "start": {
                      "column": 12,
                      "line": 39
                    }
                  }
                },
                "range": [
                  788,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              784,
              795
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          434,
          797
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 44,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          399,
          401
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
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
                "column": 25,
                "line": 20
              },
              "start": {
                "column": 13,
                "line": 20
              }
            },
            "range": [
              403,
              415
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    405,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    412,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 20
                    },
                    "start": {
                      "column": 22,
                      "line": 20
                    }
                  }
                },
                "range": [
                  405,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 20
                  },
                  "start": {
                    "column": 15,
                    "line": 20
                  }
                }
              },
              "range": [
                405,
                415
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            }
          },
          "range": [
            402,
            415
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            },
            "range": [
              418,
              432
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  420,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 20
                  },
                  "start": {
                    "column": 30,
                    "line": 20
                  }
                }
              },
              "range": [
                420,
                432
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              }
            }
          },
          "range": [
            417,
            432
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 20
            },
            "start": {
              "column": 27,
              "line": 20
            }
          }
        }
      ],
      "range": [
        390,
        797
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 20
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
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  849,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                849,
                852
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              849,
              853
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  858,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                858,
                861
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              858,
              862
            ],
            "loc": {
              "end": {
                "column": 8,
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
          843,
          864
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 44,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          808,
          810
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
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
                "column": 25,
                "line": 42
              },
              "start": {
                "column": 13,
                "line": 42
              }
            },
            "range": [
              812,
              824
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    814,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 42
                    },
                    "start": {
                      "column": 15,
                      "line": 42
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    821,
                    824
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 42
                    },
                    "start": {
                      "column": 22,
                      "line": 42
                    }
                  }
                },
                "range": [
                  814,
                  824
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 42
                  },
                  "start": {
                    "column": 15,
                    "line": 42
                  }
                }
              },
              "range": [
                814,
                824
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 42
                },
                "start": {
                  "column": 15,
                  "line": 42
                }
              }
            }
          },
          "range": [
            811,
            824
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 42
            },
            "start": {
              "column": 12,
              "line": 42
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 42
              },
              "start": {
                "column": 28,
                "line": 42
              }
            },
            "range": [
              827,
              841
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  829,
                  841
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 42
                  },
                  "start": {
                    "column": 30,
                    "line": 42
                  }
                }
              },
              "range": [
                829,
                841
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 42
                },
                "start": {
                  "column": 30,
                  "line": 42
                }
              }
            }
          },
          "range": [
            826,
            841
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 42
            },
            "start": {
              "column": 27,
              "line": 42
            }
          }
        }
      ],
      "range": [
        799,
        864
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
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
        "name": "g",
        "optional": false,
        "range": [
          883,
          884
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 47
          },
          "start": {
            "column": 17,
            "line": 47
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
                "column": 32,
                "line": 47
              },
              "start": {
                "column": 20,
                "line": 47
              }
            },
            "range": [
              886,
              898
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    888,
                    894
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 47
                    },
                    "start": {
                      "column": 22,
                      "line": 47
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    895,
                    898
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 47
                    },
                    "start": {
                      "column": 29,
                      "line": 47
                    }
                  }
                },
                "range": [
                  888,
                  898
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 47
                  },
                  "start": {
                    "column": 22,
                    "line": 47
                  }
                }
              },
              "range": [
                888,
                898
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 47
                },
                "start": {
                  "column": 22,
                  "line": 47
                }
              }
            }
          },
          "range": [
            885,
            898
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 47
            },
            "start": {
              "column": 19,
              "line": 47
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 47
          },
          "start": {
            "column": 33,
            "line": 47
          }
        },
        "range": [
          899,
          907
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            901,
            907
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 47
            },
            "start": {
              "column": 35,
              "line": 47
            }
          }
        }
      },
      "range": [
        866,
        908
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
          926,
          927
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 48
          },
          "start": {
            "column": 17,
            "line": 48
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
                "line": 48
              },
              "start": {
                "column": 20,
                "line": 48
              }
            },
            "range": [
              929,
              940
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    931,
                    937
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 48
                    },
                    "start": {
                      "column": 22,
                      "line": 48
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    938,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 48
                    },
                    "start": {
                      "column": 29,
                      "line": 48
                    }
                  }
                },
                "range": [
                  931,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 48
                  },
                  "start": {
                    "column": 22,
                    "line": 48
                  }
                }
              },
              "range": [
                931,
                940
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 48
                },
                "start": {
                  "column": 22,
                  "line": 48
                }
              }
            }
          },
          "range": [
            928,
            940
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 48
            },
            "start": {
              "column": 19,
              "line": 48
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 48
          },
          "start": {
            "column": 32,
            "line": 48
          }
        },
        "range": [
          941,
          950
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            943,
            950
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 48
            },
            "start": {
              "column": 34,
              "line": 48
            }
          }
        }
      },
      "range": [
        909,
        951
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
          969,
          970
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 49
          },
          "start": {
            "column": 17,
            "line": 49
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
                "column": 28,
                "line": 49
              },
              "start": {
                "column": 20,
                "line": 49
              }
            },
            "range": [
              972,
              980
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  974,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 49
                  },
                  "start": {
                    "column": 22,
                    "line": 49
                  }
                }
              },
              "range": [
                974,
                980
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 49
                },
                "start": {
                  "column": 22,
                  "line": 49
                }
              }
            }
          },
          "range": [
            971,
            980
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 49
            },
            "start": {
              "column": 19,
              "line": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 49
          },
          "start": {
            "column": 29,
            "line": 49
          }
        },
        "range": [
          981,
          989
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            983,
            989
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 49
            },
            "start": {
              "column": 31,
              "line": 49
            }
          }
        }
      },
      "range": [
        952,
        990
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "range": [
                    1052,
                    1054
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "range": [
                          1059,
                          1065
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 52
                          },
                          "start": {
                            "column": 15,
                            "line": 52
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "range": [
                          1066,
                          1069
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 52
                          },
                          "start": {
                            "column": 22,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        1059,
                        1069
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 52
                        },
                        "start": {
                          "column": 15,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      1057,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 52
                      },
                      "start": {
                        "column": 13,
                        "line": 52
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1057,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 52
                    },
                    "start": {
                      "column": 13,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1052,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1048,
              1071
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
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
                  "name": "z2",
                  "optional": false,
                  "range": [
                    1080,
                    1082
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "range": [
                          1087,
                          1093
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 53
                          },
                          "start": {
                            "column": 15,
                            "line": 53
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "range": [
                          1094,
                          1096
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 53
                          },
                          "start": {
                            "column": 22,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1087,
                        1096
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 53
                        },
                        "start": {
                          "column": 15,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      1085,
                      1086
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 53
                      },
                      "start": {
                        "column": 13,
                        "line": 53
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1085,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 53
                    },
                    "start": {
                      "column": 13,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1080,
                  1097
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 53
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1076,
              1098
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
                  "name": "z3",
                  "optional": false,
                  "range": [
                    1107,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1114,
                        1115
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 54
                        },
                        "start": {
                          "column": 15,
                          "line": 54
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      1112,
                      1113
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 54
                      },
                      "start": {
                        "column": 13,
                        "line": 54
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1112,
                    1116
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 54
                    },
                    "start": {
                      "column": 13,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1107,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1103,
              1117
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
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
                  "name": "z4",
                  "optional": false,
                  "range": [
                    1126,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
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
                        1133,
                        1134
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 55
                        },
                        "start": {
                          "column": 15,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      1131,
                      1132
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 55
                      },
                      "start": {
                        "column": 13,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1131,
                    1135
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 55
                    },
                    "start": {
                      "column": 13,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1126,
                  1135
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1122,
              1136
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
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
                  "name": "z5",
                  "optional": false,
                  "range": [
                    1145,
                    1147
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        1152,
                        1153
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 56
                        },
                        "start": {
                          "column": 15,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "range": [
                      1150,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 56
                      },
                      "start": {
                        "column": 13,
                        "line": 56
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1150,
                    1154
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 56
                    },
                    "start": {
                      "column": 13,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1145,
                  1154
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1141,
              1155
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1042,
          1157
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 50,
            "line": 51
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          1001,
          1003
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 51
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
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
                "column": 20,
                "line": 51
              },
              "start": {
                "column": 13,
                "line": 51
              }
            },
            "range": [
              1005,
              1012
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1007,
                  1012
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 51
                  },
                  "start": {
                    "column": 15,
                    "line": 51
                  }
                }
              },
              "range": [
                1007,
                1012
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 51
                },
                "start": {
                  "column": 15,
                  "line": 51
                }
              }
            }
          },
          "range": [
            1004,
            1012
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 51
            },
            "start": {
              "column": 12,
              "line": 51
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 51
              },
              "start": {
                "column": 23,
                "line": 51
              }
            },
            "range": [
              1015,
              1029
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1017,
                  1029
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 51
                  },
                  "start": {
                    "column": 25,
                    "line": 51
                  }
                }
              },
              "range": [
                1017,
                1029
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 51
                },
                "start": {
                  "column": 25,
                  "line": 51
                }
              }
            }
          },
          "range": [
            1014,
            1029
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 51
            },
            "start": {
              "column": 22,
              "line": 51
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 51
              },
              "start": {
                "column": 40,
                "line": 51
              }
            },
            "range": [
              1032,
              1040
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  1034,
                  1040
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 51
                  },
                  "start": {
                    "column": 42,
                    "line": 51
                  }
                }
              },
              "range": [
                1034,
                1040
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 51
                },
                "start": {
                  "column": 42,
                  "line": 51
                }
              }
            }
          },
          "range": [
            1031,
            1040
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 51
            },
            "start": {
              "column": 39,
              "line": 51
            }
          }
        }
      ],
      "range": [
        992,
        1157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 51
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
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Unexpected value\"",
                  "value": "Unexpected value",
                  "range": [
                    1219,
                    1237
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 60
                    },
                    "start": {
                      "column": 20,
                      "line": 60
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  1213,
                  1218
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 60
                  },
                  "start": {
                    "column": 14,
                    "line": 60
                  }
                }
              },
              "range": [
                1209,
                1238
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 60
                },
                "start": {
                  "column": 10,
                  "line": 60
                }
              }
            },
            "range": [
              1203,
              1239
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1197,
          1241
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 38,
            "line": 59
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "range": [
          1168,
          1179
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
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
                "line": 59
              },
              "start": {
                "column": 22,
                "line": 59
              }
            },
            "range": [
              1181,
              1188
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                1183,
                1188
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 59
                },
                "start": {
                  "column": 24,
                  "line": 59
                }
              }
            }
          },
          "range": [
            1180,
            1188
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 59
            },
            "start": {
              "column": 21,
              "line": 59
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 59
          },
          "start": {
            "column": 30,
            "line": 59
          }
        },
        "range": [
          1189,
          1196
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            1191,
            1196
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 59
            },
            "start": {
              "column": 32,
              "line": 59
            }
          }
        }
      },
      "range": [
        1159,
        1241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 59
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"true\"",
                      "value": "true",
                      "range": [
                        1317,
                        1323
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 65
                        },
                        "start": {
                          "column": 32,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1310,
                      1324
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 65
                      },
                      "start": {
                        "column": 25,
                        "line": 65
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1298,
                      1304
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 65
                      },
                      "start": {
                        "column": 13,
                        "line": 65
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      1305,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 65
                      },
                      "start": {
                        "column": 20,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1298,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 65
                    },
                    "start": {
                      "column": 13,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1293,
                  1324
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"false\"",
                      "value": "false",
                      "range": [
                        1356,
                        1363
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 66
                        },
                        "start": {
                          "column": 31,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1349,
                      1364
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 66
                      },
                      "start": {
                        "column": 24,
                        "line": 66
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1338,
                      1344
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 66
                      },
                      "start": {
                        "column": 13,
                        "line": 66
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      1345,
                      1347
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 66
                      },
                      "start": {
                        "column": 20,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1338,
                    1347
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 66
                    },
                    "start": {
                      "column": 13,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1333,
                  1364
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1280,
                1281
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 64
                },
                "start": {
                  "column": 12,
                  "line": 64
                }
              }
            },
            "range": [
              1272,
              1370
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1266,
          1372
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 23,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "range": [
          1252,
          1255
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
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
                "column": 21,
                "line": 63
              },
              "start": {
                "column": 14,
                "line": 63
              }
            },
            "range": [
              1257,
              1264
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1259,
                  1264
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 63
                  },
                  "start": {
                    "column": 16,
                    "line": 63
                  }
                }
              },
              "range": [
                1259,
                1264
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 63
                },
                "start": {
                  "column": 16,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1256,
            1264
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 63
            },
            "start": {
              "column": 13,
              "line": 63
            }
          }
        }
      ],
      "range": [
        1243,
        1372
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 63
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"true\"",
                      "value": "true",
                      "range": [
                        1448,
                        1454
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 72
                        },
                        "start": {
                          "column": 32,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1441,
                      1455
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 72
                      },
                      "start": {
                        "column": 25,
                        "line": 72
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1429,
                      1435
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 72
                      },
                      "start": {
                        "column": 13,
                        "line": 72
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      1436,
                      1439
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 72
                      },
                      "start": {
                        "column": 20,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1429,
                    1439
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 72
                    },
                    "start": {
                      "column": 13,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1424,
                  1455
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"false\"",
                      "value": "false",
                      "range": [
                        1487,
                        1494
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 73
                        },
                        "start": {
                          "column": 31,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1480,
                      1495
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 73
                      },
                      "start": {
                        "column": 24,
                        "line": 73
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1469,
                      1475
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 73
                      },
                      "start": {
                        "column": 13,
                        "line": 73
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      1476,
                      1478
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 73
                      },
                      "start": {
                        "column": 20,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    1469,
                    1478
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 73
                    },
                    "start": {
                      "column": 13,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1464,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1411,
                1412
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 71
                },
                "start": {
                  "column": 12,
                  "line": 71
                }
              }
            },
            "range": [
              1403,
              1501
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1525,
                    1526
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 75
                    },
                    "start": {
                      "column": 23,
                      "line": 75
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "range": [
                  1513,
                  1524
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 75
                  },
                  "start": {
                    "column": 11,
                    "line": 75
                  }
                }
              },
              "optional": false,
              "range": [
                1513,
                1527
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 75
                },
                "start": {
                  "column": 11,
                  "line": 75
                }
              }
            },
            "range": [
              1506,
              1528
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          1397,
          1530
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 23,
            "line": 70
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          1383,
          1386
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 70
          },
          "start": {
            "column": 9,
            "line": 70
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
                "column": 21,
                "line": 70
              },
              "start": {
                "column": 14,
                "line": 70
              }
            },
            "range": [
              1388,
              1395
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1390,
                  1395
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 70
                  },
                  "start": {
                    "column": 16,
                    "line": 70
                  }
                }
              },
              "range": [
                1390,
                1395
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 70
                },
                "start": {
                  "column": 16,
                  "line": 70
                }
              }
            }
          },
          "range": [
            1387,
            1395
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 70
            },
            "start": {
              "column": 13,
              "line": 70
            }
          }
        }
      ],
      "range": [
        1374,
        1530
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 70
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1613,
                      1614
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    1613,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                }
              ],
              "range": [
                1603,
                1621
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 82
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1585,
                      1586
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 80
                      },
                      "start": {
                        "column": 8,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    1585,
                    1587
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 80
                    },
                    "start": {
                      "column": 8,
                      "line": 80
                    }
                  }
                }
              ],
              "range": [
                1575,
                1593
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 81
                },
                "start": {
                  "column": 11,
                  "line": 79
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1572,
                1573
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              }
            },
            "range": [
              1568,
              1621
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1562,
          1623
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 85
          },
          "start": {
            "column": 30,
            "line": 78
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          1541,
          1544
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
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
                "column": 28,
                "line": 78
              },
              "start": {
                "column": 14,
                "line": 78
              }
            },
            "range": [
              1546,
              1560
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1548,
                  1560
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 78
                  },
                  "start": {
                    "column": 16,
                    "line": 78
                  }
                }
              },
              "range": [
                1548,
                1560
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 78
                },
                "start": {
                  "column": 16,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1545,
            1560
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 78
            },
            "start": {
              "column": 13,
              "line": 78
            }
          }
        }
      ],
      "range": [
        1532,
        1623
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 78
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1721,
                      1722
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 92
                      },
                      "start": {
                        "column": 8,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    1721,
                    1723
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 92
                    }
                  }
                }
              ],
              "range": [
                1711,
                1729
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 93
                },
                "start": {
                  "column": 9,
                  "line": 91
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1693,
                      1694
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1693,
                    1695
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                1683,
                1701
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 26,
                  "line": 88
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1665,
                  1666
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Choice",
                  "optional": false,
                  "range": [
                    1671,
                    1677
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 88
                    },
                    "start": {
                      "column": 14,
                      "line": 88
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    1678,
                    1681
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 88
                    },
                    "start": {
                      "column": 21,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1671,
                  1681
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 88
                  },
                  "start": {
                    "column": 14,
                    "line": 88
                  }
                }
              },
              "range": [
                1665,
                1681
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 88
                },
                "start": {
                  "column": 8,
                  "line": 88
                }
              }
            },
            "range": [
              1661,
              1729
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "range": [
          1655,
          1731
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 30,
            "line": 87
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "range": [
          1634,
          1637
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 87
          },
          "start": {
            "column": 9,
            "line": 87
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
                "column": 28,
                "line": 87
              },
              "start": {
                "column": 14,
                "line": 87
              }
            },
            "range": [
              1639,
              1653
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1641,
                  1653
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 87
                  },
                  "start": {
                    "column": 16,
                    "line": 87
                  }
                }
              },
              "range": [
                1641,
                1653
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 87
                },
                "start": {
                  "column": 16,
                  "line": 87
                }
              }
            }
          },
          "range": [
            1638,
            1653
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 87
            },
            "start": {
              "column": 13,
              "line": 87
            }
          }
        }
      ],
      "range": [
        1625,
        1731
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          1738,
          1742
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
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
                  "name": "kind",
                  "optional": false,
                  "range": [
                    1751,
                    1755
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 97
                    },
                    "start": {
                      "column": 6,
                      "line": 97
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
                      "column": 22,
                      "line": 97
                    },
                    "start": {
                      "column": 10,
                      "line": 97
                    }
                  },
                  "range": [
                    1755,
                    1767
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "range": [
                          1757,
                          1763
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 97
                          },
                          "start": {
                            "column": 12,
                            "line": 97
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "range": [
                          1764,
                          1767
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 97
                          },
                          "start": {
                            "column": 19,
                            "line": 97
                          }
                        }
                      },
                      "range": [
                        1757,
                        1767
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 97
                        },
                        "start": {
                          "column": 12,
                          "line": 97
                        }
                      }
                    },
                    "range": [
                      1757,
                      1767
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 97
                      },
                      "start": {
                        "column": 12,
                        "line": 97
                      }
                    }
                  }
                },
                "range": [
                  1751,
                  1768
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 97
                  },
                  "start": {
                    "column": 6,
                    "line": 97
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1769,
                    1770
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 97
                    },
                    "start": {
                      "column": 24,
                      "line": 97
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
                      "line": 97
                    },
                    "start": {
                      "column": 25,
                      "line": 97
                    }
                  },
                  "range": [
                    1770,
                    1778
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1772,
                      1778
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 97
                      },
                      "start": {
                        "column": 27,
                        "line": 97
                      }
                    }
                  }
                },
                "range": [
                  1769,
                  1778
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 97
                  },
                  "start": {
                    "column": 24,
                    "line": 97
                  }
                }
              }
            ],
            "range": [
              1749,
              1780
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
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
                  "name": "kind",
                  "optional": false,
                  "range": [
                    1789,
                    1793
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 98
                    },
                    "start": {
                      "column": 6,
                      "line": 98
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
                      "column": 21,
                      "line": 98
                    },
                    "start": {
                      "column": 10,
                      "line": 98
                    }
                  },
                  "range": [
                    1793,
                    1804
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Choice",
                        "optional": false,
                        "range": [
                          1795,
                          1801
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 98
                          },
                          "start": {
                            "column": 12,
                            "line": 98
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "range": [
                          1802,
                          1804
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 98
                          },
                          "start": {
                            "column": 19,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        1795,
                        1804
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 98
                        },
                        "start": {
                          "column": 12,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      1795,
                      1804
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 98
                      },
                      "start": {
                        "column": 12,
                        "line": 98
                      }
                    }
                  }
                },
                "range": [
                  1789,
                  1805
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 98
                  },
                  "start": {
                    "column": 6,
                    "line": 98
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1806,
                    1807
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 98
                    },
                    "start": {
                      "column": 23,
                      "line": 98
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
                      "column": 32,
                      "line": 98
                    },
                    "start": {
                      "column": 24,
                      "line": 98
                    }
                  },
                  "range": [
                    1807,
                    1815
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1809,
                      1815
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 98
                      },
                      "start": {
                        "column": 26,
                        "line": 98
                      }
                    }
                  }
                },
                "range": [
                  1806,
                  1815
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 98
                  },
                  "start": {
                    "column": 23,
                    "line": 98
                  }
                }
              }
            ],
            "range": [
              1787,
              1817
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 98
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          }
        ],
        "range": [
          1749,
          1817
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 98
          },
          "start": {
            "column": 4,
            "line": 97
          }
        }
      },
      "range": [
        1733,
        1818
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 96
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1898,
                          1899
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 102
                          },
                          "start": {
                            "column": 32,
                            "line": 102
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1900,
                          1901
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 102
                          },
                          "start": {
                            "column": 34,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        1898,
                        1901
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 102
                        },
                        "start": {
                          "column": 32,
                          "line": 102
                        }
                      }
                    },
                    "range": [
                      1891,
                      1902
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 102
                      },
                      "start": {
                        "column": 25,
                        "line": 102
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1879,
                      1885
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 102
                      },
                      "start": {
                        "column": 13,
                        "line": 102
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      1886,
                      1889
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 102
                      },
                      "start": {
                        "column": 20,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    1879,
                    1889
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 102
                    },
                    "start": {
                      "column": 13,
                      "line": 102
                    }
                  }
                },
                "range": [
                  1874,
                  1902
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 102
                  },
                  "start": {
                    "column": 8,
                    "line": 102
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1934,
                          1935
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 103
                          },
                          "start": {
                            "column": 31,
                            "line": 103
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1936,
                          1937
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 103
                          },
                          "start": {
                            "column": 33,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        1934,
                        1937
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 103
                        },
                        "start": {
                          "column": 31,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      1927,
                      1938
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 103
                      },
                      "start": {
                        "column": 24,
                        "line": 103
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      1916,
                      1922
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 103
                      },
                      "start": {
                        "column": 13,
                        "line": 103
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      1923,
                      1925
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 103
                      },
                      "start": {
                        "column": 20,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1916,
                    1925
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 103
                    },
                    "start": {
                      "column": 13,
                      "line": 103
                    }
                  }
                },
                "range": [
                  1911,
                  1938
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 103
                  },
                  "start": {
                    "column": 8,
                    "line": 103
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1856,
                  1857
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 101
                  },
                  "start": {
                    "column": 12,
                    "line": 101
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  1858,
                  1862
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 101
                  },
                  "start": {
                    "column": 14,
                    "line": 101
                  }
                }
              },
              "range": [
                1856,
                1862
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 101
                },
                "start": {
                  "column": 12,
                  "line": 101
                }
              }
            },
            "range": [
              1848,
              1944
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          }
        ],
        "range": [
          1842,
          1946
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 22,
            "line": 100
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "range": [
          1829,
          1832
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 100
          },
          "start": {
            "column": 9,
            "line": 100
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
                "column": 20,
                "line": 100
              },
              "start": {
                "column": 14,
                "line": 100
              }
            },
            "range": [
              1834,
              1840
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1836,
                  1840
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 100
                  },
                  "start": {
                    "column": 16,
                    "line": 100
                  }
                }
              },
              "range": [
                1836,
                1840
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 100
                },
                "start": {
                  "column": 16,
                  "line": 100
                }
              }
            }
          },
          "range": [
            1833,
            1840
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 100
            },
            "start": {
              "column": 13,
              "line": 100
            }
          }
        }
      ],
      "range": [
        1820,
        1946
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 100
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2026,
                          2027
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 109
                          },
                          "start": {
                            "column": 32,
                            "line": 109
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          2028,
                          2029
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 109
                          },
                          "start": {
                            "column": 34,
                            "line": 109
                          }
                        }
                      },
                      "range": [
                        2026,
                        2029
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 109
                        },
                        "start": {
                          "column": 32,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      2019,
                      2030
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 109
                      },
                      "start": {
                        "column": 25,
                        "line": 109
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2007,
                      2013
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 109
                      },
                      "start": {
                        "column": 13,
                        "line": 109
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Yes",
                    "optional": false,
                    "range": [
                      2014,
                      2017
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 109
                      },
                      "start": {
                        "column": 20,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    2007,
                    2017
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 109
                    },
                    "start": {
                      "column": 13,
                      "line": 109
                    }
                  }
                },
                "range": [
                  2002,
                  2030
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 109
                  },
                  "start": {
                    "column": 8,
                    "line": 109
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2062,
                          2063
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 110
                          },
                          "start": {
                            "column": 31,
                            "line": 110
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          2064,
                          2065
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 110
                          },
                          "start": {
                            "column": 33,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        2062,
                        2065
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 110
                        },
                        "start": {
                          "column": 31,
                          "line": 110
                        }
                      }
                    },
                    "range": [
                      2055,
                      2066
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 110
                      },
                      "start": {
                        "column": 24,
                        "line": 110
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Choice",
                    "optional": false,
                    "range": [
                      2044,
                      2050
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 110
                      },
                      "start": {
                        "column": 13,
                        "line": 110
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "No",
                    "optional": false,
                    "range": [
                      2051,
                      2053
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 110
                      },
                      "start": {
                        "column": 20,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    2044,
                    2053
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 110
                    },
                    "start": {
                      "column": 13,
                      "line": 110
                    }
                  }
                },
                "range": [
                  2039,
                  2066
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 110
                  },
                  "start": {
                    "column": 8,
                    "line": 110
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1984,
                  1985
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  1986,
                  1990
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 108
                  },
                  "start": {
                    "column": 14,
                    "line": 108
                  }
                }
              },
              "range": [
                1984,
                1990
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 108
                },
                "start": {
                  "column": 12,
                  "line": 108
                }
              }
            },
            "range": [
              1976,
              2072
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2096,
                    2097
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 112
                    },
                    "start": {
                      "column": 23,
                      "line": 112
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "range": [
                  2084,
                  2095
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 112
                  },
                  "start": {
                    "column": 11,
                    "line": 112
                  }
                }
              },
              "optional": false,
              "range": [
                2084,
                2098
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 112
                },
                "start": {
                  "column": 11,
                  "line": 112
                }
              }
            },
            "range": [
              2077,
              2099
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          }
        ],
        "range": [
          1970,
          2101
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 22,
            "line": 107
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "range": [
          1957,
          1960
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 107
          },
          "start": {
            "column": 9,
            "line": 107
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
                "column": 20,
                "line": 107
              },
              "start": {
                "column": 14,
                "line": 107
              }
            },
            "range": [
              1962,
              1968
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1964,
                  1968
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 107
                  },
                  "start": {
                    "column": 16,
                    "line": 107
                  }
                }
              },
              "range": [
                1964,
                1968
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 107
                },
                "start": {
                  "column": 16,
                  "line": 107
                }
              }
            }
          },
          "range": [
            1961,
            1968
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 107
            },
            "start": {
              "column": 13,
              "line": 107
            }
          }
        }
      ],
      "range": [
        1948,
        2101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 113
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
