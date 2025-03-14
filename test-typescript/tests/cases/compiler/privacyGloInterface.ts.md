__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2082
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              16,
              79
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  39,
                  79
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "range": [
                        57,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        59,
                        73
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          62,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
                            "line": 3
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      49,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "range": [
                  29,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                23,
                79
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                103,
                110
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "range": [
                92,
                102
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              86,
              110
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              116,
              651
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  143,
                  651
                ],
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 12
                            },
                            "start": {
                              "column": 11,
                              "line": 12
                            }
                          },
                          "range": [
                            156,
                            167
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                158,
                                167
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 12
                                },
                                "start": {
                                  "column": 13,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              158,
                              167
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          154,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      153,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 13
                            },
                            "start": {
                              "column": 11,
                              "line": 13
                            }
                          },
                          "range": [
                            181,
                            193
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                183,
                                193
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 13
                                },
                                "start": {
                                  "column": 13,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              183,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 13
                              },
                              "start": {
                                "column": 13,
                                "line": 13
                              }
                            }
                          }
                        },
                        "range": [
                          179,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 13
                          },
                          "start": {
                            "column": 9,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      178,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 14
                        },
                        "start": {
                          "column": 10,
                          "line": 14
                        }
                      },
                      "range": [
                        206,
                        217
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "range": [
                            208,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          208,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      204,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 11,
                              "line": 15
                            }
                          },
                          "range": [
                            230,
                            238
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              232,
                              238
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 13,
                                "line": 15
                              }
                            }
                          }
                        },
                        "range": [
                          228,
                          238
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 9,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 15
                        },
                        "start": {
                          "column": 20,
                          "line": 15
                        }
                      },
                      "range": [
                        239,
                        251
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            241,
                            251
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 15
                            },
                            "start": {
                              "column": 22,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          241,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 15
                          },
                          "start": {
                            "column": 22,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      227,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
                            }
                          },
                          "range": [
                            269,
                            280
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                271,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 17
                                },
                                "start": {
                                  "column": 17,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              271,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 17
                              },
                              "start": {
                                "column": 17,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          267,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 13,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      262,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 18
                            },
                            "start": {
                              "column": 15,
                              "line": 18
                            }
                          },
                          "range": [
                            298,
                            310
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                300,
                                310
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 18
                                },
                                "start": {
                                  "column": 17,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              300,
                              310
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 18
                              },
                              "start": {
                                "column": 17,
                                "line": 18
                              }
                            }
                          }
                        },
                        "range": [
                          296,
                          310
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 18
                          },
                          "start": {
                            "column": 13,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      291,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 14,
                          "line": 19
                        }
                      },
                      "range": [
                        327,
                        338
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "range": [
                            329,
                            338
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 19
                            },
                            "start": {
                              "column": 16,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          329,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 16,
                            "line": 19
                          }
                        }
                      }
                    },
                    "range": [
                      321,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 20
                            },
                            "start": {
                              "column": 15,
                              "line": 20
                            }
                          },
                          "range": [
                            355,
                            363
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              357,
                              363
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 20
                              },
                              "start": {
                                "column": 17,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          353,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 20
                          },
                          "start": {
                            "column": 13,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      },
                      "range": [
                        364,
                        376
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            366,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 20
                            },
                            "start": {
                              "column": 26,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          366,
                          376
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 20
                          },
                          "start": {
                            "column": 26,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      348,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 22
                            },
                            "start": {
                              "column": 10,
                              "line": 22
                            }
                          },
                          "range": [
                            389,
                            397
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              391,
                              397
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
                          }
                        },
                        "range": [
                          388,
                          397
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 22
                          },
                          "start": {
                            "column": 9,
                            "line": 22
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
                          "column": 30,
                          "line": 22
                        },
                        "start": {
                          "column": 19,
                          "line": 22
                        }
                      },
                      "range": [
                        398,
                        409
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "range": [
                            400,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 22
                            },
                            "start": {
                              "column": 21,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          400,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 22
                          },
                          "start": {
                            "column": 21,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      387,
                      410
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 23
                            },
                            "start": {
                              "column": 10,
                              "line": 23
                            }
                          },
                          "range": [
                            421,
                            429
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              423,
                              429
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
                          }
                        },
                        "range": [
                          420,
                          429
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 9,
                            "line": 23
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
                          "column": 31,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 23
                        }
                      },
                      "range": [
                        430,
                        442
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            432,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 23
                            },
                            "start": {
                              "column": 21,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          432,
                          442
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 23
                          },
                          "start": {
                            "column": 21,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      419,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        453,
                        454
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
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 25
                        },
                        "start": {
                          "column": 9,
                          "line": 25
                        }
                      },
                      "range": [
                        454,
                        465
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "range": [
                            456,
                            465
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 25
                            },
                            "start": {
                              "column": 11,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          456,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 25
                          },
                          "start": {
                            "column": 11,
                            "line": 25
                          }
                        }
                      }
                    },
                    "range": [
                      453,
                      466
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
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        475,
                        476
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
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 26
                        },
                        "start": {
                          "column": 9,
                          "line": 26
                        }
                      },
                      "range": [
                        476,
                        488
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            478,
                            488
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 26
                            },
                            "start": {
                              "column": 11,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          478,
                          488
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 26
                          },
                          "start": {
                            "column": 11,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      475,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
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
                        499,
                        500
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
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 28
                        },
                        "start": {
                          "column": 10,
                          "line": 28
                        }
                      },
                      "range": [
                        501,
                        512
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "range": [
                            503,
                            512
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 28
                            },
                            "start": {
                              "column": 12,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          503,
                          512
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      }
                    },
                    "range": [
                      499,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                        522,
                        523
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
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 29
                        },
                        "start": {
                          "column": 10,
                          "line": 29
                        }
                      },
                      "range": [
                        524,
                        536
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            526,
                            536
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          526,
                          536
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      522,
                      537
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "range": [
                        547,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 31
                            },
                            "start": {
                              "column": 13,
                              "line": 31
                            }
                          },
                          "range": [
                            552,
                            563
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                554,
                                563
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 31
                                },
                                "start": {
                                  "column": 15,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              554,
                              563
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 31
                              },
                              "start": {
                                "column": 15,
                                "line": 31
                              }
                            }
                          }
                        },
                        "range": [
                          550,
                          563
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 31
                          },
                          "start": {
                            "column": 11,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      547,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "range": [
                        574,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 32
                            },
                            "start": {
                              "column": 13,
                              "line": 32
                            }
                          },
                          "range": [
                            579,
                            591
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                581,
                                591
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 32
                                },
                                "start": {
                                  "column": 15,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              581,
                              591
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 32
                              },
                              "start": {
                                "column": 15,
                                "line": 32
                              }
                            }
                          }
                        },
                        "range": [
                          577,
                          591
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 32
                          },
                          "start": {
                            "column": 11,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      574,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "range": [
                        602,
                        604
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 33
                        },
                        "start": {
                          "column": 12,
                          "line": 33
                        }
                      },
                      "range": [
                        606,
                        617
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "range": [
                            608,
                            617
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 33
                            },
                            "start": {
                              "column": 14,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          608,
                          617
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 33
                          },
                          "start": {
                            "column": 14,
                            "line": 33
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      602,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "range": [
                        627,
                        629
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      },
                      "range": [
                        631,
                        643
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            633,
                            643
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 34
                            },
                            "start": {
                              "column": 14,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          633,
                          643
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 34
                          },
                          "start": {
                            "column": 14,
                            "line": 34
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      627,
                      644
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 31,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "range": [
                  133,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
                  }
                }
              },
              "range": [
                123,
                651
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                678,
                1186
              ],
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        },
                        "range": [
                          691,
                          702
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "range": [
                              693,
                              702
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 39
                              },
                              "start": {
                                "column": 13,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            693,
                            702
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 39
                            },
                            "start": {
                              "column": 13,
                              "line": 39
                            }
                          }
                        }
                      },
                      "range": [
                        689,
                        702
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "range": [
                    688,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 40
                          },
                          "start": {
                            "column": 11,
                            "line": 40
                          }
                        },
                        "range": [
                          716,
                          728
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "range": [
                              718,
                              728
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 40
                              },
                              "start": {
                                "column": 13,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            718,
                            728
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 40
                            },
                            "start": {
                              "column": 13,
                              "line": 40
                            }
                          }
                        }
                      },
                      "range": [
                        714,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 40
                        },
                        "start": {
                          "column": 9,
                          "line": 40
                        }
                      }
                    }
                  ],
                  "range": [
                    713,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 41
                      },
                      "start": {
                        "column": 10,
                        "line": 41
                      }
                    },
                    "range": [
                      741,
                      752
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "range": [
                          743,
                          752
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 41
                          },
                          "start": {
                            "column": 12,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        743,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 41
                        },
                        "start": {
                          "column": 12,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    739,
                    753
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 42
                          },
                          "start": {
                            "column": 11,
                            "line": 42
                          }
                        },
                        "range": [
                          765,
                          773
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            767,
                            773
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 42
                            },
                            "start": {
                              "column": 13,
                              "line": 42
                            }
                          }
                        }
                      },
                      "range": [
                        763,
                        773
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 42
                        },
                        "start": {
                          "column": 9,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 20,
                        "line": 42
                      }
                    },
                    "range": [
                      774,
                      786
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "range": [
                          776,
                          786
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 42
                          },
                          "start": {
                            "column": 22,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        776,
                        786
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 42
                        },
                        "start": {
                          "column": 22,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    762,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 44
                          },
                          "start": {
                            "column": 15,
                            "line": 44
                          }
                        },
                        "range": [
                          804,
                          815
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "range": [
                              806,
                              815
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 44
                              },
                              "start": {
                                "column": 17,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            806,
                            815
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 44
                            },
                            "start": {
                              "column": 17,
                              "line": 44
                            }
                          }
                        }
                      },
                      "range": [
                        802,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
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
                    797,
                    817
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
                          }
                        },
                        "range": [
                          833,
                          845
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "range": [
                              835,
                              845
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 45
                              },
                              "start": {
                                "column": 17,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            835,
                            845
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 45
                            },
                            "start": {
                              "column": 17,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        831,
                        845
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 45
                        },
                        "start": {
                          "column": 13,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    826,
                    847
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 46
                      },
                      "start": {
                        "column": 14,
                        "line": 46
                      }
                    },
                    "range": [
                      862,
                      873
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "range": [
                          864,
                          873
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 46
                          },
                          "start": {
                            "column": 16,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        864,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 46
                        },
                        "start": {
                          "column": 16,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    856,
                    874
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 47
                          },
                          "start": {
                            "column": 15,
                            "line": 47
                          }
                        },
                        "range": [
                          890,
                          898
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            892,
                            898
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
                        }
                      },
                      "range": [
                        888,
                        898
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 13,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 47
                      },
                      "start": {
                        "column": 24,
                        "line": 47
                      }
                    },
                    "range": [
                      899,
                      911
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "range": [
                          901,
                          911
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 47
                          },
                          "start": {
                            "column": 26,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        901,
                        911
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 47
                        },
                        "start": {
                          "column": 26,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    883,
                    912
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 49
                          },
                          "start": {
                            "column": 10,
                            "line": 49
                          }
                        },
                        "range": [
                          924,
                          932
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            926,
                            932
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        }
                      },
                      "range": [
                        923,
                        932
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 49
                        },
                        "start": {
                          "column": 9,
                          "line": 49
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
                        "column": 30,
                        "line": 49
                      },
                      "start": {
                        "column": 19,
                        "line": 49
                      }
                    },
                    "range": [
                      933,
                      944
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "range": [
                          935,
                          944
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 49
                          },
                          "start": {
                            "column": 21,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        935,
                        944
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 49
                        },
                        "start": {
                          "column": 21,
                          "line": 49
                        }
                      }
                    }
                  },
                  "range": [
                    922,
                    945
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 50
                          },
                          "start": {
                            "column": 10,
                            "line": 50
                          }
                        },
                        "range": [
                          956,
                          964
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            958,
                            964
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 50
                            },
                            "start": {
                              "column": 12,
                              "line": 50
                            }
                          }
                        }
                      },
                      "range": [
                        955,
                        964
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 50
                        },
                        "start": {
                          "column": 9,
                          "line": 50
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
                        "column": 31,
                        "line": 50
                      },
                      "start": {
                        "column": 19,
                        "line": 50
                      }
                    },
                    "range": [
                      965,
                      977
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "range": [
                          967,
                          977
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 50
                          },
                          "start": {
                            "column": 21,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        967,
                        977
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 50
                        },
                        "start": {
                          "column": 21,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    954,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      988,
                      989
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
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
                        "column": 20,
                        "line": 52
                      },
                      "start": {
                        "column": 9,
                        "line": 52
                      }
                    },
                    "range": [
                      989,
                      1000
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "range": [
                          991,
                          1000
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 52
                          },
                          "start": {
                            "column": 11,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        991,
                        1000
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 52
                        },
                        "start": {
                          "column": 11,
                          "line": 52
                        }
                      }
                    }
                  },
                  "range": [
                    988,
                    1001
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1010,
                      1011
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
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
                        "column": 21,
                        "line": 53
                      },
                      "start": {
                        "column": 9,
                        "line": 53
                      }
                    },
                    "range": [
                      1011,
                      1023
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "range": [
                          1013,
                          1023
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 53
                          },
                          "start": {
                            "column": 11,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1013,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 53
                        },
                        "start": {
                          "column": 11,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1010,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
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
                      1034,
                      1035
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
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
                        "line": 55
                      },
                      "start": {
                        "column": 10,
                        "line": 55
                      }
                    },
                    "range": [
                      1036,
                      1047
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "range": [
                          1038,
                          1047
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 55
                          },
                          "start": {
                            "column": 12,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1038,
                        1047
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    1034,
                    1048
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
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
                      1057,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
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
                        "column": 22,
                        "line": 56
                      },
                      "start": {
                        "column": 10,
                        "line": 56
                      }
                    },
                    "range": [
                      1059,
                      1071
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "range": [
                          1061,
                          1071
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1061,
                        1071
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 56
                        },
                        "start": {
                          "column": 12,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    1057,
                    1072
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "range": [
                      1082,
                      1084
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 58
                          },
                          "start": {
                            "column": 13,
                            "line": 58
                          }
                        },
                        "range": [
                          1087,
                          1098
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "range": [
                              1089,
                              1098
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 58
                              },
                              "start": {
                                "column": 15,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            1089,
                            1098
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 58
                            },
                            "start": {
                              "column": 15,
                              "line": 58
                            }
                          }
                        }
                      },
                      "range": [
                        1085,
                        1098
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 58
                        },
                        "start": {
                          "column": 11,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "range": [
                    1082,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "range": [
                      1109,
                      1111
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 59
                          },
                          "start": {
                            "column": 13,
                            "line": 59
                          }
                        },
                        "range": [
                          1114,
                          1126
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "range": [
                              1116,
                              1126
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 59
                              },
                              "start": {
                                "column": 15,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            1116,
                            1126
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 59
                            },
                            "start": {
                              "column": 15,
                              "line": 59
                            }
                          }
                        }
                      },
                      "range": [
                        1112,
                        1126
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 59
                        },
                        "start": {
                          "column": 11,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "range": [
                    1109,
                    1128
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "range": [
                      1137,
                      1139
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 60
                      },
                      "start": {
                        "column": 12,
                        "line": 60
                      }
                    },
                    "range": [
                      1141,
                      1152
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "range": [
                          1143,
                          1152
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 60
                          },
                          "start": {
                            "column": 14,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1143,
                        1152
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 60
                        },
                        "start": {
                          "column": 14,
                          "line": 60
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1137,
                    1153
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "range": [
                      1162,
                      1164
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 61
                      },
                      "start": {
                        "column": 12,
                        "line": 61
                      }
                    },
                    "range": [
                      1166,
                      1178
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "range": [
                          1168,
                          1178
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 61
                          },
                          "start": {
                            "column": 14,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1168,
                        1178
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 61
                        },
                        "start": {
                          "column": 14,
                          "line": 61
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1162,
                    1179
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 25,
                  "line": 38
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "range": [
                667,
                677
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 38
                },
                "start": {
                  "column": 14,
                  "line": 38
                }
              }
            },
            "range": [
              657,
              1186
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          10,
          1188
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          9
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        1188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1206,
          1234
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                1220,
                1222
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 67
                },
                "start": {
                  "column": 12,
                  "line": 67
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1222,
                1232
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1225,
                  1232
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 17,
                    "line": 67
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 14,
                  "line": 67
                }
              }
            },
            "range": [
              1212,
              1232
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 67
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
            "column": 16,
            "line": 66
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5_public",
        "optional": false,
        "range": [
          1196,
          1205
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 66
          },
          "start": {
            "column": 6,
            "line": 66
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1190,
        1234
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1257,
          1462
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 73
                    },
                    "start": {
                      "column": 7,
                      "line": 73
                    }
                  },
                  "range": [
                    1266,
                    1277
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "range": [
                        1268,
                        1277
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 73
                        },
                        "start": {
                          "column": 9,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1268,
                      1277
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 73
                      },
                      "start": {
                        "column": 9,
                        "line": 73
                      }
                    }
                  }
                },
                "range": [
                  1264,
                  1277
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 73
                  },
                  "start": {
                    "column": 5,
                    "line": 73
                  }
                }
              }
            ],
            "range": [
              1263,
              1279
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 74
                },
                "start": {
                  "column": 6,
                  "line": 74
                }
              },
              "range": [
                1286,
                1297
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "range": [
                    1288,
                    1297
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1288,
                  1297
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              }
            },
            "range": [
              1284,
              1298
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 76
                    },
                    "start": {
                      "column": 11,
                      "line": 76
                    }
                  },
                  "range": [
                    1311,
                    1322
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "range": [
                        1313,
                        1322
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 76
                        },
                        "start": {
                          "column": 13,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1313,
                      1322
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 76
                      },
                      "start": {
                        "column": 13,
                        "line": 76
                      }
                    }
                  }
                },
                "range": [
                  1309,
                  1322
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 76
                  },
                  "start": {
                    "column": 9,
                    "line": 76
                  }
                }
              }
            ],
            "range": [
              1304,
              1324
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 77
                },
                "start": {
                  "column": 10,
                  "line": 77
                }
              },
              "range": [
                1335,
                1346
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "range": [
                    1337,
                    1346
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 77
                    },
                    "start": {
                      "column": 12,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1337,
                  1346
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 77
                  },
                  "start": {
                    "column": 12,
                    "line": 77
                  }
                }
              }
            },
            "range": [
              1329,
              1347
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 79
                    },
                    "start": {
                      "column": 6,
                      "line": 79
                    }
                  },
                  "range": [
                    1355,
                    1363
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1357,
                      1363
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 79
                      }
                    }
                  }
                },
                "range": [
                  1354,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 79
                  },
                  "start": {
                    "column": 5,
                    "line": 79
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
                  "column": 26,
                  "line": 79
                },
                "start": {
                  "column": 15,
                  "line": 79
                }
              },
              "range": [
                1364,
                1375
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "range": [
                    1366,
                    1375
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 79
                    },
                    "start": {
                      "column": 17,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1366,
                  1375
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 79
                  },
                  "start": {
                    "column": 17,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              1353,
              1376
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1382,
                1383
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 81
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 81
                },
                "start": {
                  "column": 5,
                  "line": 81
                }
              },
              "range": [
                1383,
                1394
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "range": [
                    1385,
                    1394
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 81
                    },
                    "start": {
                      "column": 7,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1385,
                  1394
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 81
                  },
                  "start": {
                    "column": 7,
                    "line": 81
                  }
                }
              }
            },
            "range": [
              1382,
              1395
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
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
                1401,
                1402
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
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
                  "line": 83
                },
                "start": {
                  "column": 6,
                  "line": 83
                }
              },
              "range": [
                1403,
                1414
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "range": [
                    1405,
                    1414
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                "range": [
                  1405,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              }
            },
            "range": [
              1401,
              1415
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                1421,
                1423
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 85
                    },
                    "start": {
                      "column": 9,
                      "line": 85
                    }
                  },
                  "range": [
                    1426,
                    1437
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "range": [
                        1428,
                        1437
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 85
                        },
                        "start": {
                          "column": 11,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1428,
                      1437
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 85
                      },
                      "start": {
                        "column": 11,
                        "line": 85
                      }
                    }
                  }
                },
                "range": [
                  1424,
                  1437
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 85
                  },
                  "start": {
                    "column": 7,
                    "line": 85
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              1421,
              1439
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "range": [
                1444,
                1446
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 86
                },
                "start": {
                  "column": 8,
                  "line": 86
                }
              },
              "range": [
                1448,
                1459
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "range": [
                    1450,
                    1459
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 86
                    },
                    "start": {
                      "column": 10,
                      "line": 86
                    }
                  }
                },
                "range": [
                  1450,
                  1459
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 86
                  },
                  "start": {
                    "column": 10,
                    "line": 86
                  }
                }
              }
            },
            "static": false,
            "range": [
              1444,
              1460
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 20,
            "line": 72
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "range": [
          1247,
          1256
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 72
          },
          "start": {
            "column": 10,
            "line": 72
          }
        }
      },
      "range": [
        1237,
        1462
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 72
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
              1480,
              1538
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1509,
                  1538
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "range": [
                        1519,
                        1521
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 91
                        },
                        "start": {
                          "column": 8,
                          "line": 91
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 91
                        },
                        "start": {
                          "column": 12,
                          "line": 91
                        }
                      },
                      "range": [
                        1523,
                        1531
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1525,
                          1531
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 91
                          },
                          "start": {
                            "column": 14,
                            "line": 91
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      1519,
                      1532
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 92
                  },
                  "start": {
                    "column": 33,
                    "line": 90
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_i_public",
                "optional": false,
                "range": [
                  1497,
                  1508
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 90
                  },
                  "start": {
                    "column": 21,
                    "line": 90
                  }
                }
              },
              "range": [
                1487,
                1538
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 90
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1567,
                1596
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "range": [
                      1577,
                      1579
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 95
                      },
                      "start": {
                        "column": 8,
                        "line": 95
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 95
                      },
                      "start": {
                        "column": 12,
                        "line": 95
                      }
                    },
                    "range": [
                      1581,
                      1589
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1583,
                        1589
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 95
                        },
                        "start": {
                          "column": 14,
                          "line": 95
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1577,
                    1590
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 95
                    },
                    "start": {
                      "column": 8,
                      "line": 95
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 96
                },
                "start": {
                  "column": 27,
                  "line": 94
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_i_private",
              "optional": false,
              "range": [
                1554,
                1566
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 94
                },
                "start": {
                  "column": 14,
                  "line": 94
                }
              }
            },
            "range": [
              1544,
              1596
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1646,
                1653
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 99
                },
                "start": {
                  "column": 48,
                  "line": 98
                }
              }
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "range": [
                    1634,
                    1645
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 98
                    },
                    "start": {
                      "column": 36,
                      "line": 98
                    }
                  }
                },
                "range": [
                  1634,
                  1645
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 98
                  },
                  "start": {
                    "column": 36,
                    "line": 98
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C1_private",
              "optional": false,
              "range": [
                1612,
                1625
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 98
                },
                "start": {
                  "column": 14,
                  "line": 98
                }
              }
            },
            "range": [
              1602,
              1653
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 98
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1703,
                1710
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 101
                },
                "start": {
                  "column": 49,
                  "line": 100
                }
              }
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "range": [
                    1690,
                    1702
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 100
                    },
                    "start": {
                      "column": 36,
                      "line": 100
                    }
                  }
                },
                "range": [
                  1690,
                  1702
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 100
                  },
                  "start": {
                    "column": 36,
                    "line": 100
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C2_private",
              "optional": false,
              "range": [
                1668,
                1681
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 100
                },
                "start": {
                  "column": 14,
                  "line": 100
                }
              }
            },
            "range": [
              1658,
              1710
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1715,
              1772
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1765,
                  1772
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 103
                  },
                  "start": {
                    "column": 54,
                    "line": 102
                  }
                }
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "range": [
                      1753,
                      1764
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 102
                      },
                      "start": {
                        "column": 42,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    1753,
                    1764
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 102
                    },
                    "start": {
                      "column": 42,
                      "line": 102
                    }
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C3_public",
                "optional": false,
                "range": [
                  1732,
                  1744
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 102
                  },
                  "start": {
                    "column": 21,
                    "line": 102
                  }
                }
              },
              "range": [
                1722,
                1772
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 103
                },
                "start": {
                  "column": 11,
                  "line": 102
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1777,
              1835
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1828,
                  1835
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 105
                  },
                  "start": {
                    "column": 55,
                    "line": 104
                  }
                }
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "range": [
                      1815,
                      1827
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 104
                      },
                      "start": {
                        "column": 42,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    1815,
                    1827
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 104
                    },
                    "start": {
                      "column": 42,
                      "line": 104
                    }
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C4_public",
                "optional": false,
                "range": [
                  1794,
                  1806
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 104
                  },
                  "start": {
                    "column": 21,
                    "line": 104
                  }
                }
              },
              "range": [
                1784,
                1835
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 105
                },
                "start": {
                  "column": 11,
                  "line": 104
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1899,
                1906
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 62,
                  "line": 107
                }
              }
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "range": [
                    1873,
                    1885
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 107
                    },
                    "start": {
                      "column": 36,
                      "line": 107
                    }
                  }
                },
                "range": [
                  1873,
                  1885
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 107
                  },
                  "start": {
                    "column": 36,
                    "line": 107
                  }
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "range": [
                    1887,
                    1898
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 107
                    },
                    "start": {
                      "column": 50,
                      "line": 107
                    }
                  }
                },
                "range": [
                  1887,
                  1898
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 107
                  },
                  "start": {
                    "column": 50,
                    "line": 107
                  }
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C5_private",
              "optional": false,
              "range": [
                1851,
                1864
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 107
                },
                "start": {
                  "column": 14,
                  "line": 107
                }
              }
            },
            "range": [
              1841,
              1906
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1911,
              1983
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1976,
                  1983
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 110
                  },
                  "start": {
                    "column": 69,
                    "line": 109
                  }
                }
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "range": [
                      1950,
                      1962
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 109
                      },
                      "start": {
                        "column": 43,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    1950,
                    1962
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 109
                    },
                    "start": {
                      "column": 43,
                      "line": 109
                    }
                  }
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "range": [
                      1964,
                      1975
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 109
                      },
                      "start": {
                        "column": 57,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    1964,
                    1975
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 109
                    },
                    "start": {
                      "column": 57,
                      "line": 109
                    }
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C6_public",
                "optional": false,
                "range": [
                  1928,
                  1940
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 109
                  },
                  "start": {
                    "column": 21,
                    "line": 109
                  }
                }
              },
              "range": [
                1918,
                1983
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 110
                },
                "start": {
                  "column": 11,
                  "line": 109
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          }
        ],
        "range": [
          1474,
          1985
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 10,
            "line": 89
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1471,
          1473
        ],
        "decorators": [],
        "name": "m3",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 89
          },
          "start": {
            "column": 7,
            "line": 89
          }
        }
      },
      "kind": "module",
      "range": [
        1464,
        1985
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2010,
          2031
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                2016,
                2018
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 114
                },
                "start": {
                  "column": 8,
                  "line": 114
                }
              },
              "range": [
                2020,
                2028
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2022,
                  2028
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 114
                  },
                  "start": {
                    "column": 10,
                    "line": 114
                  }
                }
              }
            },
            "static": false,
            "range": [
              2016,
              2029
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 115
          },
          "start": {
            "column": 23,
            "line": 113
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "range": [
          1997,
          2009
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 113
          },
          "start": {
            "column": 10,
            "line": 113
          }
        }
      },
      "range": [
        1987,
        2031
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 115
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2078,
          2081
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 118
          },
          "start": {
            "column": 45,
            "line": 117
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "range": [
              2065,
              2077
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 117
              },
              "start": {
                "column": 32,
                "line": 117
              }
            }
          },
          "range": [
            2065,
            2077
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 117
            },
            "start": {
              "column": 32,
              "line": 117
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "range": [
          2043,
          2056
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 117
          },
          "start": {
            "column": 10,
            "line": 117
          }
        }
      },
      "range": [
        2033,
        2081
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 117
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 119
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
