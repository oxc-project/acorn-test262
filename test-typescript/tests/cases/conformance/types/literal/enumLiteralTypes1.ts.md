__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2087
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
                    437,
                    438
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
                      441,
                      442
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
                      445,
                      446
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
                    441,
                    446
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
                  437,
                  446
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
              433,
              447
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
                    456,
                    457
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
                      460,
                      461
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
                      464,
                      465
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
                    460,
                    465
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
                  456,
                  465
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
              452,
              466
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
                    475,
                    476
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
                      479,
                      480
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
                      483,
                      484
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
                    479,
                    484
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
                  475,
                  484
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
              471,
              485
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
                    494,
                    495
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
                      498,
                      499
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
                      502,
                      503
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
                    498,
                    503
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
                  494,
                  503
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
              490,
              504
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
                    513,
                    514
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
                      517,
                      518
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
                      521,
                      522
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
                    517,
                    522
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
                  513,
                  522
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
              509,
              523
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
                    532,
                    533
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
                      536,
                      537
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
                      540,
                      541
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
                    536,
                    541
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
                  532,
                  541
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
              528,
              542
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
                    551,
                    552
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
                      555,
                      556
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
                      559,
                      560
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
                    555,
                    560
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
                  551,
                  560
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
              547,
              561
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
                    570,
                    571
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
                      574,
                      575
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
                      578,
                      579
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
                    574,
                    579
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
                  570,
                  579
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
              566,
              580
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
                    589,
                    590
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
                      594,
                      595
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
                    593,
                    595
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
                  589,
                  595
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
              585,
              596
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
                    605,
                    606
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
                      610,
                      611
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
                    609,
                    611
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
                  605,
                  611
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
              601,
              612
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
                    621,
                    622
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
                      625,
                      626
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
                      630,
                      631
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
                    625,
                    631
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
                  621,
                  631
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
              617,
              632
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
                    641,
                    642
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
                      645,
                      646
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
                      650,
                      651
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
                    645,
                    651
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
                  641,
                  651
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
              637,
              652
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
                    661,
                    662
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
                      665,
                      666
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
                      671,
                      672
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
                    665,
                    672
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
                  661,
                  672
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
              657,
              673
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
                    682,
                    683
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
                      686,
                      687
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
                      692,
                      693
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
                    686,
                    693
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
                  682,
                  693
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
              678,
              694
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
                    703,
                    704
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
                      707,
                      708
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
                      711,
                      712
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
                    707,
                    712
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
                  703,
                  712
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
              699,
              713
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
                    722,
                    723
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
                      726,
                      727
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
                      730,
                      731
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
                    726,
                    731
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
                  722,
                  731
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
              718,
              732
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
                    741,
                    742
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
                      745,
                      746
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
                      750,
                      751
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
                    745,
                    751
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
                  741,
                  751
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
              737,
              752
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
                    761,
                    762
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
                      765,
                      766
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
                      770,
                      771
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
                    765,
                    771
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
                  761,
                  771
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
              757,
              772
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
                    781,
                    782
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
                      786,
                      787
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
                    785,
                    787
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
                  781,
                  787
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
              777,
              788
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
          427,
          790
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 37,
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
                "column": 35,
                "line": 20
              },
              "start": {
                "column": 28,
                "line": 20
              }
            },
            "range": [
              418,
              425
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  420,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 35,
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
                425
              ],
              "loc": {
                "end": {
                  "column": 35,
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
            425
          ],
          "loc": {
            "end": {
              "column": 35,
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
        790
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
                  835,
                  836
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
                835,
                838
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
              835,
              839
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
                  844,
                  845
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
                844,
                847
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
              844,
              848
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
          829,
          850
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 37,
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
          801,
          803
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
              805,
              817
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
                    807,
                    813
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
                    814,
                    817
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
                  807,
                  817
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
                807,
                817
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
            804,
            817
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
                "column": 35,
                "line": 42
              },
              "start": {
                "column": 28,
                "line": 42
              }
            },
            "range": [
              820,
              827
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  822,
                  827
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 42
                  },
                  "start": {
                    "column": 30,
                    "line": 42
                  }
                }
              },
              "range": [
                822,
                827
              ],
              "loc": {
                "end": {
                  "column": 35,
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
            819,
            827
          ],
          "loc": {
            "end": {
              "column": 35,
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
        792,
        850
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
          869,
          870
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
              872,
              884
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
                    874,
                    880
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
                    881,
                    884
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
                  874,
                  884
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
                874,
                884
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
            871,
            884
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
          885,
          893
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            887,
            893
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
        852,
        894
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
          912,
          913
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
              915,
              926
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
                    917,
                    923
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
                    924,
                    926
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
                  917,
                  926
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
                917,
                926
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
            914,
            926
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
          927,
          936
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            929,
            936
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
        895,
        937
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
          955,
          956
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
              958,
              966
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  960,
                  966
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
                960,
                966
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
            957,
            966
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
          967,
          975
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            969,
            975
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
        938,
        976
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
                    1038,
                    1040
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
                          1045,
                          1051
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
                          1052,
                          1055
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
                        1045,
                        1055
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
                      1043,
                      1044
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
                    1043,
                    1056
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
                  1038,
                  1056
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
              1034,
              1057
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
                    1066,
                    1068
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
                          1073,
                          1079
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
                          1080,
                          1082
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
                        1073,
                        1082
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
                      1071,
                      1072
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
                    1071,
                    1083
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
                  1066,
                  1083
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
              1062,
              1084
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
                    1093,
                    1095
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
                        1100,
                        1101
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
                      1098,
                      1099
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
                    1098,
                    1102
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
                  1093,
                  1102
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
              1089,
              1103
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
                    1112,
                    1114
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
                        1119,
                        1120
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
                      1117,
                      1118
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
                    1117,
                    1121
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
                  1112,
                  1121
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
              1108,
              1122
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
                    1131,
                    1133
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
                        1138,
                        1139
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
                      1136,
                      1137
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
                    1136,
                    1140
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
                  1131,
                  1140
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
              1127,
              1141
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
          1028,
          1143
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
          987,
          989
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
              991,
              998
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  993,
                  998
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
                993,
                998
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
            990,
            998
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
              1001,
              1015
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1003,
                  1015
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
                1003,
                1015
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
            1000,
            1015
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
              1018,
              1026
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  1020,
                  1026
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
                1020,
                1026
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
            1017,
            1026
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
        978,
        1143
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
                    1205,
                    1223
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
                  1199,
                  1204
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
                1195,
                1224
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
              1189,
              1225
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
          1183,
          1227
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
          1154,
          1165
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
              1167,
              1174
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                1169,
                1174
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
            1166,
            1174
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
          1175,
          1182
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            1177,
            1182
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
        1145,
        1227
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
                        1303,
                        1309
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
                      1296,
                      1310
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
                      1284,
                      1290
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
                      1291,
                      1294
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
                    1284,
                    1294
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
                  1279,
                  1310
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
                        1342,
                        1349
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
                      1335,
                      1350
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
                      1324,
                      1330
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
                      1331,
                      1333
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
                    1324,
                    1333
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
                  1319,
                  1350
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
                1266,
                1267
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
              1258,
              1356
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
          1252,
          1358
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
          1238,
          1241
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
              1243,
              1250
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1245,
                  1250
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
                1245,
                1250
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
            1242,
            1250
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
        1229,
        1358
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
                        1434,
                        1440
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
                      1427,
                      1441
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
                      1415,
                      1421
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
                      1422,
                      1425
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
                    1415,
                    1425
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
                  1410,
                  1441
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
                        1473,
                        1480
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
                      1466,
                      1481
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
                      1455,
                      1461
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
                      1462,
                      1464
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
                    1455,
                    1464
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
                  1450,
                  1481
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
                1397,
                1398
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
              1389,
              1487
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
                    1511,
                    1512
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
                  1499,
                  1510
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
                1499,
                1513
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
              1492,
              1514
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
          1383,
          1516
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
          1369,
          1372
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
              1374,
              1381
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1376,
                  1381
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
                1376,
                1381
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
            1373,
            1381
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
        1360,
        1516
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
                      1599,
                      1600
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
                    1599,
                    1601
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
                1589,
                1607
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
                      1571,
                      1572
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
                    1571,
                    1573
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
                1561,
                1579
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
                1558,
                1559
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
              1554,
              1607
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
          1548,
          1609
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
          1527,
          1530
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
              1532,
              1546
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1534,
                  1546
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
                1534,
                1546
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
            1531,
            1546
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
        1518,
        1609
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
                      1707,
                      1708
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
                    1707,
                    1709
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
                1697,
                1715
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
                      1679,
                      1680
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
                    1679,
                    1681
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
                1669,
                1687
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
                  1651,
                  1652
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
                    1657,
                    1663
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
                    1664,
                    1667
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
                  1657,
                  1667
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
                1651,
                1667
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
              1647,
              1715
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
          1641,
          1717
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
          1620,
          1623
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
              1625,
              1639
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1627,
                  1639
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
                1627,
                1639
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
            1624,
            1639
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
        1611,
        1717
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
          1724,
          1728
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
                    1737,
                    1741
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
                    1741,
                    1753
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
                          1743,
                          1749
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
                          1750,
                          1753
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
                        1743,
                        1753
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
                      1743,
                      1753
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
                  1737,
                  1754
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
                    1755,
                    1756
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
                    1756,
                    1764
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1758,
                      1764
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
                  1755,
                  1764
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
              1735,
              1766
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
                    1775,
                    1779
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
                    1779,
                    1790
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
                          1781,
                          1787
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
                          1788,
                          1790
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
                        1781,
                        1790
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
                      1781,
                      1790
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
                  1775,
                  1791
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
                    1792,
                    1793
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
                    1793,
                    1801
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1795,
                      1801
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
                  1792,
                  1801
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
              1773,
              1803
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
          1735,
          1803
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
        1719,
        1804
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
                          1884,
                          1885
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
                          1886,
                          1887
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
                        1884,
                        1887
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
                      1877,
                      1888
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
                      1865,
                      1871
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
                      1872,
                      1875
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
                    1865,
                    1875
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
                  1860,
                  1888
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
                          1920,
                          1921
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
                          1922,
                          1923
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
                        1920,
                        1923
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
                      1913,
                      1924
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
                      1902,
                      1908
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
                      1909,
                      1911
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
                    1902,
                    1911
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
                  1897,
                  1924
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
                  1842,
                  1843
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
                  1844,
                  1848
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
                1842,
                1848
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
              1834,
              1930
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
          1828,
          1932
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
          1815,
          1818
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
              1820,
              1826
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1822,
                  1826
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
                1822,
                1826
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
            1819,
            1826
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
        1806,
        1932
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
                          2012,
                          2013
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
                          2014,
                          2015
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
                        2012,
                        2015
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
                      2005,
                      2016
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
                      1993,
                      1999
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
                      2000,
                      2003
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
                    1993,
                    2003
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
                  1988,
                  2016
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
                          2048,
                          2049
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
                          2050,
                          2051
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
                        2048,
                        2051
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
                      2041,
                      2052
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
                      2030,
                      2036
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
                      2037,
                      2039
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
                    2030,
                    2039
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
                  2025,
                  2052
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
                  1970,
                  1971
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
                  1972,
                  1976
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
                1970,
                1976
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
              1962,
              2058
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
                    2082,
                    2083
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
                  2070,
                  2081
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
                2070,
                2084
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
              2063,
              2085
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
          1956,
          2087
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
          1943,
          1946
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
              1948,
              1954
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1950,
                  1954
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
                1950,
                1954
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
            1947,
            1954
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
        1934,
        2087
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
