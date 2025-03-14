__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    759
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        73
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjMapReadOnly",
          "optional": false,
          "range": [
            12,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              40,
              72
            ],
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 1
                            },
                            "start": {
                              "column": 47,
                              "line": 1
                            }
                          },
                          "range": [
                            47,
                            55
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              49,
                              55
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 1
                              },
                              "start": {
                                "column": 49,
                                "line": 1
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
                            "column": 55,
                            "line": 1
                          },
                          "start": {
                            "column": 44,
                            "line": 1
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
                          "column": 69,
                          "line": 1
                        },
                        "start": {
                          "column": 56,
                          "line": 1
                        }
                      },
                      "range": [
                        56,
                        69
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            66,
                            69
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
                                  67,
                                  68
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 67,
                                    "line": 1
                                  }
                                }
                              },
                              "range": [
                                67,
                                68
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 1
                                },
                                "start": {
                                  "column": 67,
                                  "line": 1
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 1
                            },
                            "start": {
                              "column": 66,
                              "line": 1
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "range": [
                            58,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 1
                            },
                            "start": {
                              "column": 58,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          58,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 1
                          },
                          "start": {
                            "column": 58,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      43,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 1
                      },
                      "start": {
                        "column": 43,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  41,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 1
              },
              "start": {
                "column": 40,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "range": [
              32,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            }
          },
          "range": [
            32,
            72
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 1
            },
            "start": {
              "column": 32,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          },
          "range": [
            26,
            29
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
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          73
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 73,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        74,
        111
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thunk",
          "optional": false,
          "range": [
            86,
            91
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                },
                "range": [
                  101,
                  105
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      104,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 30,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    104,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 30,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                98,
                105
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
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
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 2
                  },
                  "start": {
                    "column": 35,
                    "line": 2
                  }
                }
              },
              "range": [
                109,
                110
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            97,
            110
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          },
          "range": [
            91,
            94
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
                  92,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                92,
                93
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          81,
          111
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        113,
        213
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComposeOutputTypeDefinition",
          "optional": false,
          "range": [
            125,
            152
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              163,
              212
            ],
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        182,
                        192
                      ],
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            183,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 4
                            },
                            "start": {
                              "column": 70,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            188,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 4
                            },
                            "start": {
                              "column": 75,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 4
                        },
                        "start": {
                          "column": 69,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjectTypeComposer",
                      "optional": false,
                      "range": [
                        164,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 4
                        },
                        "start": {
                          "column": 51,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      164,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 4
                      },
                      "start": {
                        "column": 51,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EnumTypeComposer",
                      "optional": false,
                      "range": [
                        195,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 4
                        },
                        "start": {
                          "column": 82,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      195,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 4
                      },
                      "start": {
                        "column": 82,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  164,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 4
                  },
                  "start": {
                    "column": 51,
                    "line": 4
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 4
              },
              "start": {
                "column": 50,
                "line": 4
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "range": [
              155,
              163
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 4
              },
              "start": {
                "column": 42,
                "line": 4
              }
            }
          },
          "range": [
            155,
            212
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 4
            },
            "start": {
              "column": 42,
              "line": 4
            }
          }
        },
        "range": [
          120,
          213
        ],
        "loc": {
          "end": {
            "column": 100,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 100,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        215,
        326
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            245,
            326
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "setFields",
                "optional": false,
                "range": [
                  256,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  265,
                  324
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 7
                        },
                        "start": {
                          "column": 25,
                          "line": 7
                        }
                      },
                      "range": [
                        272,
                        316
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 7
                                    }
                                  },
                                  "range": [
                                    281,
                                    289
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      283,
                                      289
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 7
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  277,
                                  289
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
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
                                  "column": 67,
                                  "line": 7
                                },
                                "start": {
                                  "column": 43,
                                  "line": 7
                                }
                              },
                              "range": [
                                290,
                                314
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSIndexSignature",
                                    "parameters": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "loc": {
                                            "end": {
                                              "column": 59,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 51,
                                              "line": 7
                                            }
                                          },
                                          "range": [
                                            298,
                                            306
                                          ],
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "range": [
                                              300,
                                              306
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 59,
                                                "line": 7
                                              },
                                              "start": {
                                                "column": 53,
                                                "line": 7
                                              }
                                            }
                                          }
                                        },
                                        "range": [
                                          295,
                                          306
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 59,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 48,
                                            "line": 7
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
                                          "column": 65,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 60,
                                          "line": 7
                                        }
                                      },
                                      "range": [
                                        307,
                                        312
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "range": [
                                          309,
                                          312
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 65,
                                            "line": 7
                                          },
                                          "start": {
                                            "column": 62,
                                            "line": 7
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      294,
                                      312
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 65,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 7
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  292,
                                  314
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              276,
                              314
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 7
                              },
                              "start": {
                                "column": 29,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          274,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 7
                          },
                          "start": {
                            "column": 27,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      266,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 7
                    },
                    "start": {
                      "column": 70,
                      "line": 7
                    }
                  },
                  "range": [
                    317,
                    323
                  ],
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "range": [
                      319,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 7
                      },
                      "start": {
                        "column": 72,
                        "line": 7
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              },
              "range": [
                249,
                324
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnumTypeComposer",
          "optional": false,
          "range": [
            228,
            244
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          222,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        328,
        541
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            379,
            541
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "setFields",
                "optional": false,
                "range": [
                  390,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  399,
                  440
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
                          "line": 11
                        }
                      },
                      "range": [
                        406,
                        432
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            422,
                            432
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Resolver",
                                "optional": false,
                                "range": [
                                  423,
                                  431
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                423,
                                431
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 11
                                },
                                "start": {
                                  "column": 42,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 11
                            },
                            "start": {
                              "column": 41,
                              "line": 11
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ObjMapReadOnly",
                          "optional": false,
                          "range": [
                            408,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 11
                            },
                            "start": {
                              "column": 27,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          408,
                          432
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 11
                          },
                          "start": {
                            "column": 27,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      400,
                      432
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 11
                    },
                    "start": {
                      "column": 52,
                      "line": 11
                    }
                  },
                  "range": [
                    433,
                    439
                  ],
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "range": [
                      435,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 11
                      },
                      "start": {
                        "column": 54,
                        "line": 11
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              },
              "range": [
                383,
                440
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addResolver",
                "optional": false,
                "range": [
                  451,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  462,
                  539
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "opts",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 13
                        },
                        "start": {
                          "column": 42,
                          "line": 13
                        }
                      },
                      "range": [
                        484,
                        531
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
                              "name": "type",
                              "optional": false,
                              "range": [
                                488,
                                492
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 13
                                },
                                "start": {
                                  "column": 46,
                                  "line": 13
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
                                  "column": 87,
                                  "line": 13
                                },
                                "start": {
                                  "column": 51,
                                  "line": 13
                                }
                              },
                              "range": [
                                493,
                                529
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    500,
                                    529
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ComposeOutputTypeDefinition",
                                        "optional": false,
                                        "range": [
                                          501,
                                          528
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 86,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 59,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        501,
                                        528
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 86,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 59,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 87,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 58,
                                      "line": 13
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Thunk",
                                  "optional": false,
                                  "range": [
                                    495,
                                    500
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 53,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  495,
                                  529
                                ],
                                "loc": {
                                  "end": {
                                    "column": 87,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 13
                                  }
                                }
                              }
                            },
                            "range": [
                              488,
                              529
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 13
                              },
                              "start": {
                                "column": 46,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          486,
                          531
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 13
                          },
                          "start": {
                            "column": 44,
                            "line": 13
                          }
                        }
                      }
                    },
                    "range": [
                      480,
                      531
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 13
                      },
                      "start": {
                        "column": 38,
                        "line": 13
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 13
                    },
                    "start": {
                      "column": 90,
                      "line": 13
                    }
                  },
                  "range": [
                    532,
                    538
                  ],
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "range": [
                      534,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 13
                      },
                      "start": {
                        "column": 92,
                        "line": 13
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 13
                    },
                    "start": {
                      "column": 20,
                      "line": 13
                    }
                  },
                  "range": [
                    462,
                    479
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResolverSource",
                        "optional": false,
                        "range": [
                          463,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 13
                          },
                          "start": {
                            "column": 21,
                            "line": 13
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        463,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 13
                        },
                        "start": {
                          "column": 21,
                          "line": 13
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              "range": [
                444,
                539
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
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
              "column": 51,
              "line": 10
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectTypeComposer",
          "optional": false,
          "range": [
            341,
            359
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 50,
              "line": 10
            },
            "start": {
              "column": 31,
              "line": 10
            }
          },
          "range": [
            359,
            378
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TSource",
                "optional": false,
                "range": [
                  360,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 10
                  }
                }
              },
              "out": false,
              "range": [
                360,
                367
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 32,
                  "line": 10
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
                "name": "TContext",
                "optional": false,
                "range": [
                  369,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 10
                  },
                  "start": {
                    "column": 41,
                    "line": 10
                  }
                }
              },
              "out": false,
              "range": [
                369,
                377
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 10
                },
                "start": {
                  "column": 41,
                  "line": 10
                }
              }
            }
          ]
        },
        "range": [
          335,
          541
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        543,
        757
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            565,
            757
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapArgs",
                "optional": false,
                "range": [
                  576,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  584,
                  690
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                          "column": 5,
                          "line": 20
                        },
                        "start": {
                          "column": 6,
                          "line": 18
                        }
                      },
                      "range": [
                        604,
                        679
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 20
                            },
                            "start": {
                              "column": 11,
                              "line": 18
                            }
                          },
                          "range": [
                            609,
                            679
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "argName",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 19
                                        }
                                      },
                                      "range": [
                                        628,
                                        636
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "range": [
                                          630,
                                          636
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
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
                                      621,
                                      636
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 19
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
                                      "column": 58,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 19
                                    }
                                  },
                                  "range": [
                                    637,
                                    672
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "range": [
                                        644,
                                        672
                                      ],
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "range": [
                                              653,
                                              671
                                            ],
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "EnumTypeComposer",
                                                  "optional": false,
                                                  "range": [
                                                    654,
                                                    670
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 56,
                                                      "line": 19
                                                    },
                                                    "start": {
                                                      "column": 40,
                                                      "line": 19
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  654,
                                                  670
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 56,
                                                    "line": 19
                                                  },
                                                  "start": {
                                                    "column": 40,
                                                    "line": 19
                                                  }
                                                }
                                              }
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 57,
                                                "line": 19
                                              },
                                              "start": {
                                                "column": 39,
                                                "line": 19
                                              }
                                            }
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Readonly",
                                            "optional": false,
                                            "range": [
                                              645,
                                              653
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 19
                                              },
                                              "start": {
                                                "column": 31,
                                                "line": 19
                                              }
                                            }
                                          },
                                          "range": [
                                            645,
                                            671
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 57,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 19
                                            }
                                          }
                                        }
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Thunk",
                                      "optional": false,
                                      "range": [
                                        639,
                                        644
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "range": [
                                      639,
                                      672
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 19
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  620,
                                  673
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "range": [
                              612,
                              679
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 20
                              },
                              "start": {
                                "column": 14,
                                "line": 18
                              }
                            }
                          }
                        },
                        "range": [
                          606,
                          679
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      602,
                      679
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 20
                      },
                      "start": {
                        "column": 4,
                        "line": 18
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 21
                    },
                    "start": {
                      "column": 3,
                      "line": 21
                    }
                  },
                  "range": [
                    683,
                    689
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      685,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 5,
                        "line": 21
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  },
                  "range": [
                    584,
                    596
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NewContext",
                        "optional": false,
                        "range": [
                          585,
                          595
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 17
                          },
                          "start": {
                            "column": 18,
                            "line": 17
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        585,
                        595
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 17
                  }
                }
              },
              "range": [
                569,
                690
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 21
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapType",
                "optional": false,
                "range": [
                  701,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  709,
                  755
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                          "line": 23
                        },
                        "start": {
                          "column": 20,
                          "line": 23
                        }
                      },
                      "range": [
                        712,
                        747
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 23
                            },
                            "start": {
                              "column": 25,
                              "line": 23
                            }
                          },
                          "range": [
                            717,
                            747
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComposeOutputTypeDefinition",
                              "optional": false,
                              "range": [
                                720,
                                747
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 23
                                },
                                "start": {
                                  "column": 28,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              720,
                              747
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 23
                              },
                              "start": {
                                "column": 28,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          714,
                          747
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 23
                          },
                          "start": {
                            "column": 22,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      710,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 23
                      },
                      "start": {
                        "column": 18,
                        "line": 23
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 23
                    },
                    "start": {
                      "column": 56,
                      "line": 23
                    }
                  },
                  "range": [
                    748,
                    754
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      750,
                      754
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 23
                      },
                      "start": {
                        "column": 58,
                        "line": 23
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              },
              "range": [
                694,
                755
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 23
                },
                "start": {
                  "column": 2,
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
              "column": 22,
              "line": 16
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Resolver",
          "optional": false,
          "range": [
            556,
            564
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          550,
          757
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    178
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./graphql-compose'",
        "value": "./graphql-compose",
        "range": [
          35,
          54
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 1
          },
          "start": {
            "column": 35,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectTypeComposer",
            "optional": false,
            "range": [
              9,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectTypeComposer",
            "optional": false,
            "range": [
              9,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        55
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "User",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              },
              "range": [
                75,
                105
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    95,
                    105
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        96,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 39,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        101,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 44,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 3
                    },
                    "start": {
                      "column": 38,
                      "line": 3
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjectTypeComposer",
                  "optional": false,
                  "range": [
                    77,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                "range": [
                  77,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              71,
              105
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            71,
            105
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        57,
        106
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    129,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "User",
                  "optional": false,
                  "range": [
                    135,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "range": [
                  129,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              125,
              175
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "User",
            "optional": false,
            "range": [
              108,
              112
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addResolver",
            "optional": false,
            "range": [
              113,
              124
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 5,
                "line": 5
              }
            }
          },
          "range": [
            108,
            124
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          108,
          176
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        108,
        177
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
