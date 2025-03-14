__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1882
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          18,
          58
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
            "initializer": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                30,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            },
            "range": [
              20,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
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
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"yes\"",
              "value": "yes",
              "range": [
                40,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            },
            "range": [
              34,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 34,
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
                47,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"no\"",
              "value": "no",
              "range": [
                52,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 52,
                  "line": 1
                }
              }
            },
            "range": [
              47,
              56
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 1
              },
              "start": {
                "column": 47,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 58,
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
        58
      ],
      "loc": {
        "end": {
          "column": 58,
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
        58,
        59
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 1
        },
        "start": {
          "column": 58,
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
          66,
          71
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
                  74,
                  80
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
                  81,
                  84
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
                74,
                84
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
              74,
              84
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
                  87,
                  93
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
                  94,
                  96
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
                87,
                96
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
              87,
              96
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
          74,
          96
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
        61,
        97
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
          103,
          108
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
                  111,
                  117
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
                  118,
                  120
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
                111,
                120
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
              111,
              120
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
                  123,
                  129
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
                  130,
                  133
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
                123,
                133
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
              123,
              133
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
          111,
          133
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
        98,
        134
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
          140,
          152
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
                  155,
                  161
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
                  162,
                  169
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
                155,
                169
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
              155,
              169
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
                  172,
                  178
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
                  179,
                  182
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
                172,
                182
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
              172,
              182
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
                  185,
                  191
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
                  192,
                  194
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
                185,
                194
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
              185,
              194
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
          155,
          194
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
        135,
        195
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
                      222,
                      229
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "YesNo",
                        "optional": false,
                        "range": [
                          224,
                          229
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
                        224,
                        229
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
                    221,
                    229
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
                  221,
                  229
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
              217,
              230
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
                      240,
                      247
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoYes",
                        "optional": false,
                        "range": [
                          242,
                          247
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
                        242,
                        247
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
                    239,
                    247
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
                  239,
                  247
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
              235,
              248
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
                      258,
                      282
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
                                260,
                                266
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
                                267,
                                270
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
                              260,
                              270
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
                            260,
                            270
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
                                273,
                                279
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
                                280,
                                282
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
                              273,
                              282
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
                            273,
                            282
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
                        260,
                        282
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
                    257,
                    282
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
                  257,
                  282
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
              253,
              283
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
                      293,
                      317
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
                                295,
                                301
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
                                302,
                                304
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
                              295,
                              304
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
                            295,
                            304
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
                                307,
                                313
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
                                314,
                                317
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
                              307,
                              317
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
                            307,
                            317
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
                        295,
                        317
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
                    292,
                    317
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
                  292,
                  317
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
              288,
              318
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
          211,
          320
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
          206,
          208
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
        197,
        320
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
                  378,
                  379
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
                  382,
                  383
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
                378,
                383
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
              378,
              384
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
                  389,
                  390
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
                  393,
                  394
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
                389,
                394
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
              389,
              395
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
                  400,
                  401
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
                  404,
                  405
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
                400,
                405
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
              400,
              406
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
          372,
          408
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
          331,
          333
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
              335,
              342
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  337,
                  342
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
                337,
                342
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
            334,
            342
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
              345,
              359
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  347,
                  359
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
                347,
                359
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
            344,
            359
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
              362,
              370
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  364,
                  370
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
                364,
                370
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
            361,
            370
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
        322,
        408
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
                    457,
                    458
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
                      461,
                      462
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
                      465,
                      466
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
                    461,
                    466
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
                  457,
                  466
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
              453,
              467
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    476,
                    477
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
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      480,
                      481
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
                      485,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 22
                      },
                      "start": {
                        "column": 17,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    480,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  476,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              472,
              487
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    496,
                    497
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
                  "operator": "!=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      500,
                      501
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
                      505,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 23
                      },
                      "start": {
                        "column": 17,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    500,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                },
                "range": [
                  496,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              492,
              507
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    516,
                    517
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
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      520,
                      521
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
                      526,
                      527
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    520,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                },
                "range": [
                  516,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              512,
              528
            ],
            "loc": {
              "end": {
                "column": 20,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    537,
                    538
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
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      541,
                      542
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
                      547,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    541,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "range": [
                  537,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 19,
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
              533,
              549
            ],
            "loc": {
              "end": {
                "column": 20,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    558,
                    559
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
                  "operator": ">",
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
                      566,
                      567
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
                    562,
                    567
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
                  558,
                  567
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
              554,
              568
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    577,
                    578
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
                  "operator": "<",
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
                      585,
                      586
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
                    581,
                    586
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
                  577,
                  586
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
              573,
              587
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    596,
                    597
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
                  "operator": ">=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      600,
                      601
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
                      605,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 17,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    600,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                },
                "range": [
                  596,
                  606
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              592,
              607
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    616,
                    617
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
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      620,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 29
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      625,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 17,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    620,
                    626
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 29
                    },
                    "start": {
                      "column": 12,
                      "line": 29
                    }
                  }
                },
                "range": [
                  616,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              612,
              627
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    636,
                    637
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
                      641,
                      642
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
                  "operator": "!",
                  "prefix": true,
                  "range": [
                    640,
                    642
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
                  636,
                  642
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
              632,
              643
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
          }
        ],
        "range": [
          447,
          645
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
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
          419,
          421
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
              423,
              435
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
                    425,
                    431
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
                    432,
                    435
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
                  425,
                  435
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
                425,
                435
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
            422,
            435
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
              438,
              445
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  440,
                  445
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
                440,
                445
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
            437,
            445
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
        410,
        645
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 20
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
          664,
          665
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 33
          },
          "start": {
            "column": 17,
            "line": 33
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
                "line": 33
              },
              "start": {
                "column": 20,
                "line": 33
              }
            },
            "range": [
              667,
              679
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
                    669,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 33
                    },
                    "start": {
                      "column": 22,
                      "line": 33
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yes",
                  "optional": false,
                  "range": [
                    676,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 33
                    },
                    "start": {
                      "column": 29,
                      "line": 33
                    }
                  }
                },
                "range": [
                  669,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 33
                  },
                  "start": {
                    "column": 22,
                    "line": 33
                  }
                }
              },
              "range": [
                669,
                679
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 33
                },
                "start": {
                  "column": 22,
                  "line": 33
                }
              }
            }
          },
          "range": [
            666,
            679
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 33
            },
            "start": {
              "column": 19,
              "line": 33
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 33
          },
          "start": {
            "column": 33,
            "line": 33
          }
        },
        "range": [
          680,
          688
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            682,
            688
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 33
            },
            "start": {
              "column": 35,
              "line": 33
            }
          }
        }
      },
      "range": [
        647,
        689
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 33
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
        "name": "g",
        "optional": false,
        "range": [
          707,
          708
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 34
          },
          "start": {
            "column": 17,
            "line": 34
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
                "line": 34
              },
              "start": {
                "column": 20,
                "line": 34
              }
            },
            "range": [
              710,
              721
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
                    712,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 34
                    },
                    "start": {
                      "column": 22,
                      "line": 34
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "range": [
                    719,
                    721
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 34
                    },
                    "start": {
                      "column": 29,
                      "line": 34
                    }
                  }
                },
                "range": [
                  712,
                  721
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 34
                  },
                  "start": {
                    "column": 22,
                    "line": 34
                  }
                }
              },
              "range": [
                712,
                721
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 34
                },
                "start": {
                  "column": 22,
                  "line": 34
                }
              }
            }
          },
          "range": [
            709,
            721
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 34
            },
            "start": {
              "column": 19,
              "line": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 34
          },
          "start": {
            "column": 32,
            "line": 34
          }
        },
        "range": [
          722,
          731
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            724,
            731
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 34
            },
            "start": {
              "column": 34,
              "line": 34
            }
          }
        }
      },
      "range": [
        690,
        732
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
          750,
          751
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 35
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
                "line": 35
              },
              "start": {
                "column": 20,
                "line": 35
              }
            },
            "range": [
              753,
              761
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  755,
                  761
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 35
                  },
                  "start": {
                    "column": 22,
                    "line": 35
                  }
                }
              },
              "range": [
                755,
                761
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 35
                },
                "start": {
                  "column": 22,
                  "line": 35
                }
              }
            }
          },
          "range": [
            752,
            761
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 35
            },
            "start": {
              "column": 19,
              "line": 35
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 35
          },
          "start": {
            "column": 29,
            "line": 35
          }
        },
        "range": [
          762,
          770
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            764,
            770
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 35
            },
            "start": {
              "column": 31,
              "line": 35
            }
          }
        }
      },
      "range": [
        733,
        771
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
                    833,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
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
                          840,
                          846
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 38
                          },
                          "start": {
                            "column": 15,
                            "line": 38
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
                          847,
                          850
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 38
                          },
                          "start": {
                            "column": 22,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        840,
                        850
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
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
                      838,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    838,
                    851
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 38
                    },
                    "start": {
                      "column": 13,
                      "line": 38
                    }
                  }
                },
                "range": [
                  833,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
              829,
              852
            ],
            "loc": {
              "end": {
                "column": 27,
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
                  "name": "z2",
                  "optional": false,
                  "range": [
                    861,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
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
                          868,
                          874
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 39
                          },
                          "start": {
                            "column": 15,
                            "line": 39
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
                          875,
                          877
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 39
                          },
                          "start": {
                            "column": 22,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        868,
                        877
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
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
                      866,
                      867
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
                  "optional": false,
                  "range": [
                    866,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                },
                "range": [
                  861,
                  878
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
              857,
              879
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
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
                    888,
                    890
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
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
                        895,
                        896
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 40
                        },
                        "start": {
                          "column": 15,
                          "line": 40
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
                      893,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 13,
                        "line": 40
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    893,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 13,
                      "line": 40
                    }
                  }
                },
                "range": [
                  888,
                  897
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              884,
              898
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
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
                    907,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
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
                        914,
                        915
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 41
                        },
                        "start": {
                          "column": 15,
                          "line": 41
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
                      912,
                      913
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 41
                      },
                      "start": {
                        "column": 13,
                        "line": 41
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    912,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 41
                    },
                    "start": {
                      "column": 13,
                      "line": 41
                    }
                  }
                },
                "range": [
                  907,
                  916
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              903,
              917
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                    926,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
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
                        933,
                        934
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 42
                        },
                        "start": {
                          "column": 15,
                          "line": 42
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
                      931,
                      932
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 42
                      },
                      "start": {
                        "column": 13,
                        "line": 42
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    931,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 42
                    },
                    "start": {
                      "column": 13,
                      "line": 42
                    }
                  }
                },
                "range": [
                  926,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              922,
              936
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          823,
          938
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 50,
            "line": 37
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
          782,
          784
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
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
                "line": 37
              },
              "start": {
                "column": 13,
                "line": 37
              }
            },
            "range": [
              786,
              793
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  788,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 37
                  },
                  "start": {
                    "column": 15,
                    "line": 37
                  }
                }
              },
              "range": [
                788,
                793
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 37
                },
                "start": {
                  "column": 15,
                  "line": 37
                }
              }
            }
          },
          "range": [
            785,
            793
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 37
            },
            "start": {
              "column": 12,
              "line": 37
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
                "line": 37
              },
              "start": {
                "column": 23,
                "line": 37
              }
            },
            "range": [
              796,
              810
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  798,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 37
                  },
                  "start": {
                    "column": 25,
                    "line": 37
                  }
                }
              },
              "range": [
                798,
                810
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 37
                },
                "start": {
                  "column": 25,
                  "line": 37
                }
              }
            }
          },
          "range": [
            795,
            810
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 37
            },
            "start": {
              "column": 22,
              "line": 37
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
                "line": 37
              },
              "start": {
                "column": 40,
                "line": 37
              }
            },
            "range": [
              813,
              821
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Choice",
                "optional": false,
                "range": [
                  815,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 37
                  },
                  "start": {
                    "column": 42,
                    "line": 37
                  }
                }
              },
              "range": [
                815,
                821
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 37
                },
                "start": {
                  "column": 42,
                  "line": 37
                }
              }
            }
          },
          "range": [
            812,
            821
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 37
            },
            "start": {
              "column": 39,
              "line": 37
            }
          }
        }
      ],
      "range": [
        773,
        938
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 37
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
                    1000,
                    1018
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 46
                    },
                    "start": {
                      "column": 20,
                      "line": 46
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
                  994,
                  999
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 46
                  },
                  "start": {
                    "column": 14,
                    "line": 46
                  }
                }
              },
              "range": [
                990,
                1019
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 46
                },
                "start": {
                  "column": 10,
                  "line": 46
                }
              }
            },
            "range": [
              984,
              1020
            ],
            "loc": {
              "end": {
                "column": 40,
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
          978,
          1022
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 38,
            "line": 45
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
          949,
          960
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
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
                "line": 45
              },
              "start": {
                "column": 22,
                "line": 45
              }
            },
            "range": [
              962,
              969
            ],
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "range": [
                964,
                969
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 45
                },
                "start": {
                  "column": 24,
                  "line": 45
                }
              }
            }
          },
          "range": [
            961,
            969
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 45
            },
            "start": {
              "column": 21,
              "line": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 45
          },
          "start": {
            "column": 30,
            "line": 45
          }
        },
        "range": [
          970,
          977
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            972,
            977
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 45
            },
            "start": {
              "column": 32,
              "line": 45
            }
          }
        }
      },
      "range": [
        940,
        1022
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 45
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
                        1098,
                        1104
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 51
                        },
                        "start": {
                          "column": 32,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1091,
                      1105
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 51
                      },
                      "start": {
                        "column": 25,
                        "line": 51
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
                      1079,
                      1085
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 51
                      },
                      "start": {
                        "column": 13,
                        "line": 51
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
                      1086,
                      1089
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 51
                      },
                      "start": {
                        "column": 20,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1079,
                    1089
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 51
                    },
                    "start": {
                      "column": 13,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1074,
                  1105
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
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
                        1137,
                        1144
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 52
                        },
                        "start": {
                          "column": 31,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1130,
                      1145
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 52
                      },
                      "start": {
                        "column": 24,
                        "line": 52
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
                      1119,
                      1125
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 52
                      },
                      "start": {
                        "column": 13,
                        "line": 52
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
                      1126,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 52
                      },
                      "start": {
                        "column": 20,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1119,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 52
                    },
                    "start": {
                      "column": 13,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1114,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
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
                1061,
                1062
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              }
            },
            "range": [
              1053,
              1151
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1047,
          1153
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 23,
            "line": 49
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
          1033,
          1036
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 49
          },
          "start": {
            "column": 9,
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
                "column": 21,
                "line": 49
              },
              "start": {
                "column": 14,
                "line": 49
              }
            },
            "range": [
              1038,
              1045
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1040,
                  1045
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 49
                  },
                  "start": {
                    "column": 16,
                    "line": 49
                  }
                }
              },
              "range": [
                1040,
                1045
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 49
                },
                "start": {
                  "column": 16,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1037,
            1045
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 49
            },
            "start": {
              "column": 13,
              "line": 49
            }
          }
        }
      ],
      "range": [
        1024,
        1153
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
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
                        1229,
                        1235
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 58
                        },
                        "start": {
                          "column": 32,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1222,
                      1236
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 58
                      },
                      "start": {
                        "column": 25,
                        "line": 58
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
                      1210,
                      1216
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 13,
                        "line": 58
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
                      1217,
                      1220
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 58
                      },
                      "start": {
                        "column": 20,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1210,
                    1220
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 58
                    },
                    "start": {
                      "column": 13,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1205,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 58
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
                        1268,
                        1275
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 59
                        },
                        "start": {
                          "column": 31,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1261,
                      1276
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 59
                      },
                      "start": {
                        "column": 24,
                        "line": 59
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
                      1250,
                      1256
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 59
                      },
                      "start": {
                        "column": 13,
                        "line": 59
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
                      1257,
                      1259
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 59
                      },
                      "start": {
                        "column": 20,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1250,
                    1259
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 59
                    },
                    "start": {
                      "column": 13,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1245,
                  1276
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
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
                1192,
                1193
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 57
                },
                "start": {
                  "column": 12,
                  "line": 57
                }
              }
            },
            "range": [
              1184,
              1282
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 57
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
                    1306,
                    1307
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 61
                    },
                    "start": {
                      "column": 23,
                      "line": 61
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
                  1294,
                  1305
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 61
                  },
                  "start": {
                    "column": 11,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1294,
                1308
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 11,
                  "line": 61
                }
              }
            },
            "range": [
              1287,
              1309
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1178,
          1311
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 23,
            "line": 56
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
          1164,
          1167
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 56
          },
          "start": {
            "column": 9,
            "line": 56
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
                "line": 56
              },
              "start": {
                "column": 14,
                "line": 56
              }
            },
            "range": [
              1169,
              1176
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "YesNo",
                "optional": false,
                "range": [
                  1171,
                  1176
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 56
                  },
                  "start": {
                    "column": 16,
                    "line": 56
                  }
                }
              },
              "range": [
                1171,
                1176
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 56
                },
                "start": {
                  "column": 16,
                  "line": 56
                }
              }
            }
          },
          "range": [
            1168,
            1176
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 56
            },
            "start": {
              "column": 13,
              "line": 56
            }
          }
        }
      ],
      "range": [
        1155,
        1311
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 56
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
                      1394,
                      1395
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 69
                      },
                      "start": {
                        "column": 8,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1394,
                    1396
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                1384,
                1402
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 9,
                  "line": 68
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
                      1366,
                      1367
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1366,
                    1368
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                1356,
                1374
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1353,
                1354
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 65
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            },
            "range": [
              1349,
              1402
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1343,
          1404
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 30,
            "line": 64
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
          1322,
          1325
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 64
          },
          "start": {
            "column": 9,
            "line": 64
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
                "line": 64
              },
              "start": {
                "column": 14,
                "line": 64
              }
            },
            "range": [
              1327,
              1341
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1329,
                  1341
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 64
                  },
                  "start": {
                    "column": 16,
                    "line": 64
                  }
                }
              },
              "range": [
                1329,
                1341
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 64
                },
                "start": {
                  "column": 16,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1326,
            1341
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 64
            },
            "start": {
              "column": 13,
              "line": 64
            }
          }
        }
      ],
      "range": [
        1313,
        1404
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 64
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
                      1502,
                      1503
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1502,
                    1504
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                1492,
                1510
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 9,
                  "line": 77
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
                      1474,
                      1475
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    1474,
                    1476
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                }
              ],
              "range": [
                1464,
                1482
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 26,
                  "line": 74
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
                  1446,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
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
                    1452,
                    1458
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 74
                    },
                    "start": {
                      "column": 14,
                      "line": 74
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
                    1459,
                    1462
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 74
                    },
                    "start": {
                      "column": 21,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1452,
                  1462
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 74
                  },
                  "start": {
                    "column": 14,
                    "line": 74
                  }
                }
              },
              "range": [
                1446,
                1462
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 74
                },
                "start": {
                  "column": 8,
                  "line": 74
                }
              }
            },
            "range": [
              1442,
              1510
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          1436,
          1512
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 30,
            "line": 73
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
          1415,
          1418
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 73
          },
          "start": {
            "column": 9,
            "line": 73
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
                "line": 73
              },
              "start": {
                "column": 14,
                "line": 73
              }
            },
            "range": [
              1420,
              1434
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownYesNo",
                "optional": false,
                "range": [
                  1422,
                  1434
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 73
                  },
                  "start": {
                    "column": 16,
                    "line": 73
                  }
                }
              },
              "range": [
                1422,
                1434
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 73
                },
                "start": {
                  "column": 16,
                  "line": 73
                }
              }
            }
          },
          "range": [
            1419,
            1434
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 73
            },
            "start": {
              "column": 13,
              "line": 73
            }
          }
        }
      ],
      "range": [
        1406,
        1512
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 73
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
          1519,
          1523
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 82
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
                    1532,
                    1536
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 83
                    },
                    "start": {
                      "column": 6,
                      "line": 83
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
                      "line": 83
                    },
                    "start": {
                      "column": 10,
                      "line": 83
                    }
                  },
                  "range": [
                    1536,
                    1548
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
                          1538,
                          1544
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 83
                          },
                          "start": {
                            "column": 12,
                            "line": 83
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Yes",
                        "optional": false,
                        "range": [
                          1545,
                          1548
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 83
                          },
                          "start": {
                            "column": 19,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1538,
                        1548
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 83
                        },
                        "start": {
                          "column": 12,
                          "line": 83
                        }
                      }
                    },
                    "range": [
                      1538,
                      1548
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 83
                      },
                      "start": {
                        "column": 12,
                        "line": 83
                      }
                    }
                  }
                },
                "range": [
                  1532,
                  1549
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 83
                  },
                  "start": {
                    "column": 6,
                    "line": 83
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
                    1550,
                    1551
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 83
                    },
                    "start": {
                      "column": 24,
                      "line": 83
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
                      "line": 83
                    },
                    "start": {
                      "column": 25,
                      "line": 83
                    }
                  },
                  "range": [
                    1551,
                    1559
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1553,
                      1559
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 83
                      },
                      "start": {
                        "column": 27,
                        "line": 83
                      }
                    }
                  }
                },
                "range": [
                  1550,
                  1559
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 83
                  },
                  "start": {
                    "column": 24,
                    "line": 83
                  }
                }
              }
            ],
            "range": [
              1530,
              1561
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
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
                    1570,
                    1574
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 84
                    },
                    "start": {
                      "column": 6,
                      "line": 84
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
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 84
                    }
                  },
                  "range": [
                    1574,
                    1585
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
                          1576,
                          1582
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 84
                          },
                          "start": {
                            "column": 12,
                            "line": 84
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "range": [
                          1583,
                          1585
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 84
                          },
                          "start": {
                            "column": 19,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        1576,
                        1585
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 84
                        },
                        "start": {
                          "column": 12,
                          "line": 84
                        }
                      }
                    },
                    "range": [
                      1576,
                      1585
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 84
                      },
                      "start": {
                        "column": 12,
                        "line": 84
                      }
                    }
                  }
                },
                "range": [
                  1570,
                  1586
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 84
                  },
                  "start": {
                    "column": 6,
                    "line": 84
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
                    1587,
                    1588
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 84
                    },
                    "start": {
                      "column": 23,
                      "line": 84
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
                      "line": 84
                    },
                    "start": {
                      "column": 24,
                      "line": 84
                    }
                  },
                  "range": [
                    1588,
                    1596
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1590,
                      1596
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 84
                      },
                      "start": {
                        "column": 26,
                        "line": 84
                      }
                    }
                  }
                },
                "range": [
                  1587,
                  1596
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 84
                  },
                  "start": {
                    "column": 23,
                    "line": 84
                  }
                }
              }
            ],
            "range": [
              1568,
              1598
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          }
        ],
        "range": [
          1530,
          1598
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 84
          },
          "start": {
            "column": 4,
            "line": 83
          }
        }
      },
      "range": [
        1514,
        1599
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 82
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
                          1679,
                          1680
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 88
                          },
                          "start": {
                            "column": 32,
                            "line": 88
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
                          1681,
                          1682
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 88
                          },
                          "start": {
                            "column": 34,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        1679,
                        1682
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 88
                        },
                        "start": {
                          "column": 32,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1672,
                      1683
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 88
                      },
                      "start": {
                        "column": 25,
                        "line": 88
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
                      1660,
                      1666
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 88
                      },
                      "start": {
                        "column": 13,
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
                      1667,
                      1670
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 88
                      },
                      "start": {
                        "column": 20,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1660,
                    1670
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 88
                    },
                    "start": {
                      "column": 13,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1655,
                  1683
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 88
                  },
                  "start": {
                    "column": 8,
                    "line": 88
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
                          1715,
                          1716
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 89
                          },
                          "start": {
                            "column": 31,
                            "line": 89
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
                          1717,
                          1718
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 89
                          },
                          "start": {
                            "column": 33,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        1715,
                        1718
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 89
                        },
                        "start": {
                          "column": 31,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      1708,
                      1719
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 89
                      },
                      "start": {
                        "column": 24,
                        "line": 89
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
                      1697,
                      1703
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 89
                      },
                      "start": {
                        "column": 13,
                        "line": 89
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
                      1704,
                      1706
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 89
                      },
                      "start": {
                        "column": 20,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1697,
                    1706
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 89
                    },
                    "start": {
                      "column": 13,
                      "line": 89
                    }
                  }
                },
                "range": [
                  1692,
                  1719
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
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
                  1637,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 87
                  },
                  "start": {
                    "column": 12,
                    "line": 87
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
                  1639,
                  1643
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 87
                  },
                  "start": {
                    "column": 14,
                    "line": 87
                  }
                }
              },
              "range": [
                1637,
                1643
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 87
                },
                "start": {
                  "column": 12,
                  "line": 87
                }
              }
            },
            "range": [
              1629,
              1725
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "range": [
          1623,
          1727
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 22,
            "line": 86
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
          1610,
          1613
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
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
                "line": 86
              },
              "start": {
                "column": 14,
                "line": 86
              }
            },
            "range": [
              1615,
              1621
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1617,
                  1621
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 86
                  },
                  "start": {
                    "column": 16,
                    "line": 86
                  }
                }
              },
              "range": [
                1617,
                1621
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 86
                },
                "start": {
                  "column": 16,
                  "line": 86
                }
              }
            }
          },
          "range": [
            1614,
            1621
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 86
            },
            "start": {
              "column": 13,
              "line": 86
            }
          }
        }
      ],
      "range": [
        1601,
        1727
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 86
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
                          1807,
                          1808
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 95
                          },
                          "start": {
                            "column": 32,
                            "line": 95
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
                          1809,
                          1810
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 95
                          },
                          "start": {
                            "column": 34,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        1807,
                        1810
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 95
                        },
                        "start": {
                          "column": 32,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      1800,
                      1811
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 95
                      },
                      "start": {
                        "column": 25,
                        "line": 95
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
                      1788,
                      1794
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 95
                      },
                      "start": {
                        "column": 13,
                        "line": 95
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
                      1795,
                      1798
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 95
                      },
                      "start": {
                        "column": 20,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    1788,
                    1798
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 95
                    },
                    "start": {
                      "column": 13,
                      "line": 95
                    }
                  }
                },
                "range": [
                  1783,
                  1811
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 95
                  },
                  "start": {
                    "column": 8,
                    "line": 95
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
                          1843,
                          1844
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 96
                          },
                          "start": {
                            "column": 31,
                            "line": 96
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
                          1845,
                          1846
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 96
                          },
                          "start": {
                            "column": 33,
                            "line": 96
                          }
                        }
                      },
                      "range": [
                        1843,
                        1846
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 96
                        },
                        "start": {
                          "column": 31,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      1836,
                      1847
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 96
                      },
                      "start": {
                        "column": 24,
                        "line": 96
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
                      1825,
                      1831
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 96
                      },
                      "start": {
                        "column": 13,
                        "line": 96
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
                      1832,
                      1834
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 96
                      },
                      "start": {
                        "column": 20,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    1825,
                    1834
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 96
                    },
                    "start": {
                      "column": 13,
                      "line": 96
                    }
                  }
                },
                "range": [
                  1820,
                  1847
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 96
                  },
                  "start": {
                    "column": 8,
                    "line": 96
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
                  1765,
                  1766
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 94
                  },
                  "start": {
                    "column": 12,
                    "line": 94
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
                  1767,
                  1771
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 94
                  },
                  "start": {
                    "column": 14,
                    "line": 94
                  }
                }
              },
              "range": [
                1765,
                1771
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 94
                },
                "start": {
                  "column": 12,
                  "line": 94
                }
              }
            },
            "range": [
              1757,
              1853
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 94
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
                    1877,
                    1878
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "range": [
                  1865,
                  1876
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 98
                  },
                  "start": {
                    "column": 11,
                    "line": 98
                  }
                }
              },
              "optional": false,
              "range": [
                1865,
                1879
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 98
                },
                "start": {
                  "column": 11,
                  "line": 98
                }
              }
            },
            "range": [
              1858,
              1880
            ],
            "loc": {
              "end": {
                "column": 26,
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
          1751,
          1882
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 99
          },
          "start": {
            "column": 22,
            "line": 93
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
          1738,
          1741
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 93
          },
          "start": {
            "column": 9,
            "line": 93
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
                "line": 93
              },
              "start": {
                "column": 14,
                "line": 93
              }
            },
            "range": [
              1743,
              1749
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  1745,
                  1749
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 93
                  },
                  "start": {
                    "column": 16,
                    "line": 93
                  }
                }
              },
              "range": [
                1745,
                1749
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 93
                },
                "start": {
                  "column": 16,
                  "line": 93
                }
              }
            }
          },
          "range": [
            1742,
            1749
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 93
            },
            "start": {
              "column": 13,
              "line": 93
            }
          }
        }
      ],
      "range": [
        1729,
        1882
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 93
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 99
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
