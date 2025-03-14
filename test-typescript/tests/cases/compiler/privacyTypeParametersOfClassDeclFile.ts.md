__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3650
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          22
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "range": [
          6,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
        24,
        52
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            49,
            52
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "range": [
            37,
            48
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          31,
          52
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        54,
        192
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            128,
            192
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  143,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                  151,
                  190
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          180,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        173,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    163,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 24,
                      "line": 8
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      },
                      "range": [
                        155,
                        158
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            157,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 18,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          157,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 8
                          },
                          "start": {
                            "column": 18,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      152,
                      158
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  },
                  "range": [
                    159,
                    162
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        161,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 22,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      161,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              },
              "range": [
                143,
                190
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
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
              "line": 11
            },
            "start": {
              "column": 74,
              "line": 7
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateTypeParameters",
          "optional": false,
          "range": [
            67,
            103
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 73,
              "line": 7
            },
            "start": {
              "column": 49,
              "line": 7
            }
          },
          "range": [
            103,
            127
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
                  "name": "privateClass",
                  "optional": false,
                  "range": [
                    114,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 7
                    },
                    "start": {
                      "column": 60,
                      "line": 7
                    }
                  }
                },
                "range": [
                  114,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 7
                  },
                  "start": {
                    "column": 60,
                    "line": 7
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
                  104,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                104,
                126
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 7
                },
                "start": {
                  "column": 50,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          61,
          192
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        194,
        321
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            266,
            321
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  272,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
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
                  280,
                  319
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          309,
                          312
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 15,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        302,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    292,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 24,
                      "line": 14
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      },
                      "range": [
                        284,
                        287
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            286,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          286,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      281,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 20,
                      "line": 14
                    }
                  },
                  "range": [
                    288,
                    291
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        290,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 14
                        },
                        "start": {
                          "column": 22,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      290,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 14
                      },
                      "start": {
                        "column": 22,
                        "line": 14
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              },
              "range": [
                272,
                319
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 72,
              "line": 13
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParameters",
          "optional": false,
          "range": [
            207,
            242
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 71,
              "line": 13
            },
            "start": {
              "column": 48,
              "line": 13
            }
          },
          "range": [
            242,
            265
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
                  "name": "publicClass",
                  "optional": false,
                  "range": [
                    253,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 13
                    },
                    "start": {
                      "column": 59,
                      "line": 13
                    }
                  }
                },
                "range": [
                  253,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 13
                  },
                  "start": {
                    "column": 59,
                    "line": 13
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
                  243,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 13
                  },
                  "start": {
                    "column": 49,
                    "line": 13
                  }
                }
              },
              "out": false,
              "range": [
                243,
                264
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 13
                },
                "start": {
                  "column": 49,
                  "line": 13
                }
              }
            }
          ]
        },
        "range": [
          201,
          321
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          391,
          446
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                397,
                405
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                405,
                444
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        434,
                        437
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      427,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  417,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 20
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 20
                      },
                      "start": {
                        "column": 16,
                        "line": 20
                      }
                    },
                    "range": [
                      409,
                      412
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          411,
                          412
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 20
                          },
                          "start": {
                            "column": 18,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        411,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 18,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    406,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                    "column": 23,
                    "line": 20
                  },
                  "start": {
                    "column": 20,
                    "line": 20
                  }
                },
                "range": [
                  413,
                  416
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      415,
                      416
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
                  },
                  "range": [
                    415,
                    416
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
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "range": [
              397,
              444
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 68,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateTypeParameters",
        "optional": false,
        "range": [
          329,
          366
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 19
          },
          "start": {
            "column": 43,
            "line": 19
          }
        },
        "range": [
          366,
          390
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
                "name": "privateClass",
                "optional": false,
                "range": [
                  377,
                  389
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 19
                  },
                  "start": {
                    "column": 54,
                    "line": 19
                  }
                }
              },
              "range": [
                377,
                389
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 19
                },
                "start": {
                  "column": 54,
                  "line": 19
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
                367,
                368
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 19
                },
                "start": {
                  "column": 44,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              367,
              389
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 19
              },
              "start": {
                "column": 44,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        323,
        446
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          514,
          570
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                520,
                528
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
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
                528,
                568
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        558,
                        561
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 27
                        },
                        "start": {
                          "column": 15,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      551,
                      562
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  540,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 26
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    },
                    "range": [
                      532,
                      535
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          534,
                          535
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 26
                          },
                          "start": {
                            "column": 18,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        534,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 26
                        },
                        "start": {
                          "column": 18,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    529,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                },
                "range": [
                  536,
                  539
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      538,
                      539
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
                  },
                  "range": [
                    538,
                    539
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
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "range": [
              520,
              568
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
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 66,
            "line": 25
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParameters",
        "optional": false,
        "range": [
          454,
          490
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 25
          },
          "start": {
            "column": 6,
            "line": 25
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 25
          },
          "start": {
            "column": 42,
            "line": 25
          }
        },
        "range": [
          490,
          513
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
                "name": "publicClass",
                "optional": false,
                "range": [
                  501,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 25
                  },
                  "start": {
                    "column": 53,
                    "line": 25
                  }
                }
              },
              "range": [
                501,
                512
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 25
                },
                "start": {
                  "column": 53,
                  "line": 25
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
                491,
                492
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 25
                },
                "start": {
                  "column": 43,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              491,
              512
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 25
              },
              "start": {
                "column": 43,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        448,
        570
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        572,
        694
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            638,
            694
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  644,
                  652
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
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
                  652,
                  692
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          682,
                          685
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 15,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        675,
                        686
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
                  "range": [
                    664,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 34
                    },
                    "start": {
                      "column": 24,
                      "line": 32
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 32
                        },
                        "start": {
                          "column": 16,
                          "line": 32
                        }
                      },
                      "range": [
                        656,
                        659
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            658,
                            659
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 32
                            },
                            "start": {
                              "column": 18,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          658,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 32
                          },
                          "start": {
                            "column": 18,
                            "line": 32
                          }
                        }
                      }
                    },
                    "range": [
                      653,
                      659
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 32
                      },
                      "start": {
                        "column": 13,
                        "line": 32
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 32
                    },
                    "start": {
                      "column": 20,
                      "line": 32
                    }
                  },
                  "range": [
                    660,
                    663
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        662,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 32
                        },
                        "start": {
                          "column": 22,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      662,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 32
                      },
                      "start": {
                        "column": 22,
                        "line": 32
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 32
                  }
                }
              },
              "range": [
                644,
                692
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
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 66,
              "line": 31
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "range": [
            585,
            634
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 65,
              "line": 31
            },
            "start": {
              "column": 62,
              "line": 31
            }
          },
          "range": [
            634,
            637
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
                  635,
                  636
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 31
                  },
                  "start": {
                    "column": 63,
                    "line": 31
                  }
                }
              },
              "out": false,
              "range": [
                635,
                636
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 31
                },
                "start": {
                  "column": 63,
                  "line": 31
                }
              }
            }
          ]
        },
        "range": [
          579,
          694
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          756,
          812
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                762,
                770
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
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
                770,
                810
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        800,
                        803
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 39
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      793,
                      804
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  782,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 24,
                    "line": 38
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 38
                      },
                      "start": {
                        "column": 16,
                        "line": 38
                      }
                    },
                    "range": [
                      774,
                      777
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          776,
                          777
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 38
                          },
                          "start": {
                            "column": 18,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        776,
                        777
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 38
                        },
                        "start": {
                          "column": 18,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    771,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 38
                    },
                    "start": {
                      "column": 13,
                      "line": 38
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 38
                  },
                  "start": {
                    "column": 20,
                    "line": 38
                  }
                },
                "range": [
                  778,
                  781
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      780,
                      781
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 38
                      },
                      "start": {
                        "column": 22,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    780,
                    781
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 38
                    },
                    "start": {
                      "column": 22,
                      "line": 38
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 12,
                  "line": 38
                }
              }
            },
            "range": [
              762,
              810
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 60,
            "line": 37
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "range": [
          702,
          752
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 37
          },
          "start": {
            "column": 6,
            "line": 37
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 37
          },
          "start": {
            "column": 56,
            "line": 37
          }
        },
        "range": [
          752,
          755
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
                753,
                754
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 37
                },
                "start": {
                  "column": 57,
                  "line": 37
                }
              }
            },
            "out": false,
            "range": [
              753,
              754
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 37
              },
              "start": {
                "column": 57,
                "line": 37
              }
            }
          }
        ]
      },
      "range": [
        696,
        812
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        814,
        990
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            926,
            990
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  941,
                  949
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
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
                  949,
                  988
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          978,
                          981
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        971,
                        982
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    961,
                    988
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 46
                    },
                    "start": {
                      "column": 24,
                      "line": 44
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 44
                        },
                        "start": {
                          "column": 16,
                          "line": 44
                        }
                      },
                      "range": [
                        953,
                        956
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            955,
                            956
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
                        "range": [
                          955,
                          956
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
                      }
                    },
                    "range": [
                      950,
                      956
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 44
                    },
                    "start": {
                      "column": 20,
                      "line": 44
                    }
                  },
                  "range": [
                    957,
                    960
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        959,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 44
                        },
                        "start": {
                          "column": 22,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      959,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 44
                      },
                      "start": {
                        "column": 22,
                        "line": 44
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 12,
                    "line": 44
                  }
                }
              },
              "range": [
                941,
                988
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 112,
              "line": 43
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithTypeParametersFromPrivateModule",
          "optional": false,
          "range": [
            827,
            873
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 43
            },
            "start": {
              "column": 13,
              "line": 43
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 111,
              "line": 43
            },
            "start": {
              "column": 59,
              "line": 43
            }
          },
          "range": [
            873,
            925
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      884,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 43
                      },
                      "start": {
                        "column": 70,
                        "line": 43
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "range": [
                      898,
                      924
                    ],
                    "loc": {
                      "end": {
                        "column": 110,
                        "line": 43
                      },
                      "start": {
                        "column": 84,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    884,
                    924
                  ],
                  "loc": {
                    "end": {
                      "column": 110,
                      "line": 43
                    },
                    "start": {
                      "column": 70,
                      "line": 43
                    }
                  }
                },
                "range": [
                  884,
                  924
                ],
                "loc": {
                  "end": {
                    "column": 110,
                    "line": 43
                  },
                  "start": {
                    "column": 70,
                    "line": 43
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
                  874,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 43
                  },
                  "start": {
                    "column": 60,
                    "line": 43
                  }
                }
              },
              "out": false,
              "range": [
                874,
                924
              ],
              "loc": {
                "end": {
                  "column": 110,
                  "line": 43
                },
                "start": {
                  "column": 60,
                  "line": 43
                }
              }
            }
          ]
        },
        "range": [
          821,
          990
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1098,
          1153
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "range": [
                1104,
                1112
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
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
                1112,
                1151
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        1141,
                        1144
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 51
                        },
                        "start": {
                          "column": 15,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1134,
                      1145
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  }
                ],
                "range": [
                  1124,
                  1151
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 24,
                    "line": 50
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 50
                      },
                      "start": {
                        "column": 16,
                        "line": 50
                      }
                    },
                    "range": [
                      1116,
                      1119
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1118,
                          1119
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 50
                          },
                          "start": {
                            "column": 18,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1118,
                        1119
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 50
                        },
                        "start": {
                          "column": 18,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1113,
                    1119
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 50
                    },
                    "start": {
                      "column": 13,
                      "line": 50
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 50
                  },
                  "start": {
                    "column": 20,
                    "line": 50
                  }
                },
                "range": [
                  1120,
                  1123
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1122,
                      1123
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 50
                      },
                      "start": {
                        "column": 22,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1122,
                    1123
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 50
                    },
                    "start": {
                      "column": 22,
                      "line": 50
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              }
            },
            "range": [
              1104,
              1151
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 106,
            "line": 49
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithTypeParametersFromPrivateModule",
        "optional": false,
        "range": [
          998,
          1045
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 49
          },
          "start": {
            "column": 6,
            "line": 49
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 105,
            "line": 49
          },
          "start": {
            "column": 53,
            "line": 49
          }
        },
        "range": [
          1045,
          1097
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "range": [
                    1056,
                    1069
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 49
                    },
                    "start": {
                      "column": 64,
                      "line": 49
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "range": [
                    1070,
                    1096
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 49
                    },
                    "start": {
                      "column": 78,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1056,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 49
                  },
                  "start": {
                    "column": 64,
                    "line": 49
                  }
                }
              },
              "range": [
                1056,
                1096
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 49
                },
                "start": {
                  "column": 64,
                  "line": 49
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
                1046,
                1047
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 49
                },
                "start": {
                  "column": 54,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1046,
              1096
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 49
              },
              "start": {
                "column": 54,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        992,
        1153
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1155,
        2596
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1221,
                  1228
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 37,
                    "line": 56
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "range": [
                  1194,
                  1220
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 56
                  },
                  "start": {
                    "column": 10,
                    "line": 56
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                1188,
                1228
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1234,
                1280
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    1273,
                    1280
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 60
                    },
                    "start": {
                      "column": 43,
                      "line": 59
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "range": [
                    1247,
                    1272
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 59
                    },
                    "start": {
                      "column": 17,
                      "line": 59
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  1241,
                  1280
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1286,
                1454
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    1374,
                    1454
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "range": [
                          1393,
                          1401
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 63
                          },
                          "start": {
                            "column": 8,
                            "line": 63
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
                          1401,
                          1448
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "range": [
                                  1434,
                                  1437
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 64
                                  }
                                }
                              },
                              "range": [
                                1427,
                                1438
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 64
                                },
                                "start": {
                                  "column": 12,
                                  "line": 64
                                }
                              }
                            }
                          ],
                          "range": [
                            1413,
                            1448
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 65
                            },
                            "start": {
                              "column": 28,
                              "line": 63
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
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 63
                                },
                                "start": {
                                  "column": 20,
                                  "line": 63
                                }
                              },
                              "range": [
                                1405,
                                1408
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    1407,
                                    1408
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 63
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 63
                                    }
                                  }
                                },
                                "range": [
                                  1407,
                                  1408
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 63
                                  }
                                }
                              }
                            },
                            "range": [
                              1402,
                              1408
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 63
                              },
                              "start": {
                                "column": 17,
                                "line": 63
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 63
                            },
                            "start": {
                              "column": 24,
                              "line": 63
                            }
                          },
                          "range": [
                            1409,
                            1412
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1411,
                                1412
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 63
                                },
                                "start": {
                                  "column": 26,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1411,
                              1412
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 63
                              },
                              "start": {
                                "column": 26,
                                "line": 63
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 65
                          },
                          "start": {
                            "column": 16,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1393,
                        1448
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 63
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 66
                    },
                    "start": {
                      "column": 92,
                      "line": 62
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateTypeParameters",
                  "optional": false,
                  "range": [
                    1299,
                    1335
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 62
                    },
                    "start": {
                      "column": 17,
                      "line": 62
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 62
                    },
                    "start": {
                      "column": 53,
                      "line": 62
                    }
                  },
                  "range": [
                    1335,
                    1373
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
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "range": [
                            1346,
                            1372
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 62
                            },
                            "start": {
                              "column": 64,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1346,
                          1372
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 62
                          },
                          "start": {
                            "column": 64,
                            "line": 62
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
                          1336,
                          1337
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 62
                          },
                          "start": {
                            "column": 54,
                            "line": 62
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1336,
                        1372
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 62
                        },
                        "start": {
                          "column": 54,
                          "line": 62
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1293,
                  1454
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 66
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1460,
                1617
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    1546,
                    1617
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "range": [
                          1556,
                          1564
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 69
                          },
                          "start": {
                            "column": 8,
                            "line": 69
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
                          1564,
                          1611
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "range": [
                                  1597,
                                  1600
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 70
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 70
                                  }
                                }
                              },
                              "range": [
                                1590,
                                1601
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 70
                                },
                                "start": {
                                  "column": 12,
                                  "line": 70
                                }
                              }
                            }
                          ],
                          "range": [
                            1576,
                            1611
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 71
                            },
                            "start": {
                              "column": 28,
                              "line": 69
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
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 69
                                },
                                "start": {
                                  "column": 20,
                                  "line": 69
                                }
                              },
                              "range": [
                                1568,
                                1571
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    1570,
                                    1571
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 69
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 69
                                    }
                                  }
                                },
                                "range": [
                                  1570,
                                  1571
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 69
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 69
                                  }
                                }
                              }
                            },
                            "range": [
                              1565,
                              1571
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 69
                              },
                              "start": {
                                "column": 17,
                                "line": 69
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 69
                            },
                            "start": {
                              "column": 24,
                              "line": 69
                            }
                          },
                          "range": [
                            1572,
                            1575
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                1574,
                                1575
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 69
                                },
                                "start": {
                                  "column": 26,
                                  "line": 69
                                }
                              }
                            },
                            "range": [
                              1574,
                              1575
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 69
                              },
                              "start": {
                                "column": 26,
                                "line": 69
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 71
                          },
                          "start": {
                            "column": 16,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1556,
                        1611
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 71
                        },
                        "start": {
                          "column": 8,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 72
                    },
                    "start": {
                      "column": 90,
                      "line": 68
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPublicTypeParameters",
                  "optional": false,
                  "range": [
                    1473,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 68
                    },
                    "start": {
                      "column": 17,
                      "line": 68
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 68
                    },
                    "start": {
                      "column": 52,
                      "line": 68
                    }
                  },
                  "range": [
                    1508,
                    1545
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
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "range": [
                            1519,
                            1544
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 68
                            },
                            "start": {
                              "column": 63,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1519,
                          1544
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 68
                          },
                          "start": {
                            "column": 63,
                            "line": 68
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
                          1509,
                          1510
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 68
                          },
                          "start": {
                            "column": 53,
                            "line": 68
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1509,
                        1544
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 68
                        },
                        "start": {
                          "column": 53,
                          "line": 68
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1467,
                  1617
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 72
                  },
                  "start": {
                    "column": 11,
                    "line": 68
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1705,
                  1776
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        1715,
                        1723
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 75
                        },
                        "start": {
                          "column": 8,
                          "line": 75
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
                        1723,
                        1770
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                1756,
                                1759
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 76
                                },
                                "start": {
                                  "column": 19,
                                  "line": 76
                                }
                              }
                            },
                            "range": [
                              1749,
                              1760
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 76
                              },
                              "start": {
                                "column": 12,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "range": [
                          1735,
                          1770
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 77
                          },
                          "start": {
                            "column": 28,
                            "line": 75
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 75
                              },
                              "start": {
                                "column": 20,
                                "line": 75
                              }
                            },
                            "range": [
                              1727,
                              1730
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1729,
                                  1730
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 75
                                  }
                                }
                              },
                              "range": [
                                1729,
                                1730
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 75
                                },
                                "start": {
                                  "column": 22,
                                  "line": 75
                                }
                              }
                            }
                          },
                          "range": [
                            1724,
                            1730
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 75
                            },
                            "start": {
                              "column": 17,
                              "line": 75
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 75
                          },
                          "start": {
                            "column": 24,
                            "line": 75
                          }
                        },
                        "range": [
                          1731,
                          1734
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1733,
                              1734
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 75
                              },
                              "start": {
                                "column": 26,
                                "line": 75
                              }
                            }
                          },
                          "range": [
                            1733,
                            1734
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 75
                            },
                            "start": {
                              "column": 26,
                              "line": 75
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 77
                        },
                        "start": {
                          "column": 16,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1715,
                      1770
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 78
                  },
                  "start": {
                    "column": 86,
                    "line": 74
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateTypeParameters",
                "optional": false,
                "range": [
                  1629,
                  1666
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 74
                  },
                  "start": {
                    "column": 10,
                    "line": 74
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 74
                  },
                  "start": {
                    "column": 47,
                    "line": 74
                  }
                },
                "range": [
                  1666,
                  1704
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
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "range": [
                          1677,
                          1703
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 74
                          },
                          "start": {
                            "column": 58,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        1677,
                        1703
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 74
                        },
                        "start": {
                          "column": 58,
                          "line": 74
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
                        1667,
                        1668
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 74
                        },
                        "start": {
                          "column": 48,
                          "line": 74
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1667,
                      1703
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 74
                      },
                      "start": {
                        "column": 48,
                        "line": 74
                      }
                    }
                  }
                ]
              },
              "range": [
                1623,
                1776
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1862,
                  1933
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        1872,
                        1880
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 81
                        },
                        "start": {
                          "column": 8,
                          "line": 81
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
                        1880,
                        1927
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                1913,
                                1916
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 82
                                },
                                "start": {
                                  "column": 19,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              1906,
                              1917
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 82
                              },
                              "start": {
                                "column": 12,
                                "line": 82
                              }
                            }
                          }
                        ],
                        "range": [
                          1892,
                          1927
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 83
                          },
                          "start": {
                            "column": 28,
                            "line": 81
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 81
                              },
                              "start": {
                                "column": 20,
                                "line": 81
                              }
                            },
                            "range": [
                              1884,
                              1887
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  1886,
                                  1887
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 81
                                  }
                                }
                              },
                              "range": [
                                1886,
                                1887
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 81
                                },
                                "start": {
                                  "column": 22,
                                  "line": 81
                                }
                              }
                            }
                          },
                          "range": [
                            1881,
                            1887
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 81
                            },
                            "start": {
                              "column": 17,
                              "line": 81
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 81
                          },
                          "start": {
                            "column": 24,
                            "line": 81
                          }
                        },
                        "range": [
                          1888,
                          1891
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1890,
                              1891
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 81
                              },
                              "start": {
                                "column": 26,
                                "line": 81
                              }
                            }
                          },
                          "range": [
                            1890,
                            1891
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 81
                            },
                            "start": {
                              "column": 26,
                              "line": 81
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 83
                        },
                        "start": {
                          "column": 16,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1872,
                      1927
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 81
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 84
                  },
                  "start": {
                    "column": 84,
                    "line": 80
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPublicTypeParameters",
                "optional": false,
                "range": [
                  1788,
                  1824
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 80
                  },
                  "start": {
                    "column": 10,
                    "line": 80
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 80
                  },
                  "start": {
                    "column": 46,
                    "line": 80
                  }
                },
                "range": [
                  1824,
                  1861
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
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "range": [
                          1835,
                          1860
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 80
                          },
                          "start": {
                            "column": 57,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        1835,
                        1860
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 80
                        },
                        "start": {
                          "column": 57,
                          "line": 80
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
                        1825,
                        1826
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 80
                        },
                        "start": {
                          "column": 47,
                          "line": 80
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1825,
                      1860
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 80
                      },
                      "start": {
                        "column": 47,
                        "line": 80
                      }
                    }
                  }
                ]
              },
              "range": [
                1782,
                1933
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                1939,
                2076
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    2005,
                    2076
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "range": [
                          2015,
                          2023
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 87
                          },
                          "start": {
                            "column": 8,
                            "line": 87
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
                          2023,
                          2070
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "range": [
                                  2056,
                                  2059
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 88
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 88
                                  }
                                }
                              },
                              "range": [
                                2049,
                                2060
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 88
                                },
                                "start": {
                                  "column": 12,
                                  "line": 88
                                }
                              }
                            }
                          ],
                          "range": [
                            2035,
                            2070
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 89
                            },
                            "start": {
                              "column": 28,
                              "line": 87
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
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 87
                                },
                                "start": {
                                  "column": 20,
                                  "line": 87
                                }
                              },
                              "range": [
                                2027,
                                2030
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    2029,
                                    2030
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 87
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 87
                                    }
                                  }
                                },
                                "range": [
                                  2029,
                                  2030
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 87
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 87
                                  }
                                }
                              }
                            },
                            "range": [
                              2024,
                              2030
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 87
                              },
                              "start": {
                                "column": 17,
                                "line": 87
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 87
                            },
                            "start": {
                              "column": 24,
                              "line": 87
                            }
                          },
                          "range": [
                            2031,
                            2034
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                2033,
                                2034
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 87
                                },
                                "start": {
                                  "column": 26,
                                  "line": 87
                                }
                              }
                            },
                            "range": [
                              2033,
                              2034
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 87
                              },
                              "start": {
                                "column": 26,
                                "line": 87
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 89
                          },
                          "start": {
                            "column": 16,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        2015,
                        2070
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 89
                        },
                        "start": {
                          "column": 8,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 90
                    },
                    "start": {
                      "column": 70,
                      "line": 86
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "range": [
                    1952,
                    2001
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 86
                    },
                    "start": {
                      "column": 17,
                      "line": 86
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 86
                    },
                    "start": {
                      "column": 66,
                      "line": 86
                    }
                  },
                  "range": [
                    2001,
                    2004
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
                          2002,
                          2003
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 86
                          },
                          "start": {
                            "column": 67,
                            "line": 86
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2002,
                        2003
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 86
                        },
                        "start": {
                          "column": 67,
                          "line": 86
                        }
                      }
                    }
                  ]
                },
                "range": [
                  1946,
                  2076
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 90
                  },
                  "start": {
                    "column": 11,
                    "line": 86
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  2142,
                  2213
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        2152,
                        2160
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 93
                        },
                        "start": {
                          "column": 8,
                          "line": 93
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
                        2160,
                        2207
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                2193,
                                2196
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 94
                                },
                                "start": {
                                  "column": 19,
                                  "line": 94
                                }
                              }
                            },
                            "range": [
                              2186,
                              2197
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 94
                              },
                              "start": {
                                "column": 12,
                                "line": 94
                              }
                            }
                          }
                        ],
                        "range": [
                          2172,
                          2207
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 95
                          },
                          "start": {
                            "column": 28,
                            "line": 93
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 93
                              },
                              "start": {
                                "column": 20,
                                "line": 93
                              }
                            },
                            "range": [
                              2164,
                              2167
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  2166,
                                  2167
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 93
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 93
                                  }
                                }
                              },
                              "range": [
                                2166,
                                2167
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 93
                                },
                                "start": {
                                  "column": 22,
                                  "line": 93
                                }
                              }
                            }
                          },
                          "range": [
                            2161,
                            2167
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 93
                            },
                            "start": {
                              "column": 17,
                              "line": 93
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 93
                          },
                          "start": {
                            "column": 24,
                            "line": 93
                          }
                        },
                        "range": [
                          2168,
                          2171
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2170,
                              2171
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 93
                              },
                              "start": {
                                "column": 26,
                                "line": 93
                              }
                            }
                          },
                          "range": [
                            2170,
                            2171
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 93
                            },
                            "start": {
                              "column": 26,
                              "line": 93
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 95
                        },
                        "start": {
                          "column": 16,
                          "line": 93
                        }
                      }
                    },
                    "range": [
                      2152,
                      2207
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 95
                      },
                      "start": {
                        "column": 8,
                        "line": 93
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
                    "column": 64,
                    "line": 92
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "range": [
                  2088,
                  2138
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 92
                  },
                  "start": {
                    "column": 10,
                    "line": 92
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 92
                  },
                  "start": {
                    "column": 60,
                    "line": 92
                  }
                },
                "range": [
                  2138,
                  2141
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
                        2139,
                        2140
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 92
                        },
                        "start": {
                          "column": 61,
                          "line": 92
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2139,
                      2140
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 92
                      },
                      "start": {
                        "column": 61,
                        "line": 92
                      }
                    }
                  }
                ]
              },
              "range": [
                2082,
                2213
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                2219,
                2411
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    2331,
                    2411
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "range": [
                          2350,
                          2358
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 99
                          },
                          "start": {
                            "column": 8,
                            "line": 99
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
                          2358,
                          2405
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "range": [
                                  2391,
                                  2394
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 100
                                  }
                                }
                              },
                              "range": [
                                2384,
                                2395
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 100
                                },
                                "start": {
                                  "column": 12,
                                  "line": 100
                                }
                              }
                            }
                          ],
                          "range": [
                            2370,
                            2405
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 101
                            },
                            "start": {
                              "column": 28,
                              "line": 99
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
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 99
                                },
                                "start": {
                                  "column": 20,
                                  "line": 99
                                }
                              },
                              "range": [
                                2362,
                                2365
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    2364,
                                    2365
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 99
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 99
                                    }
                                  }
                                },
                                "range": [
                                  2364,
                                  2365
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 99
                                  }
                                }
                              }
                            },
                            "range": [
                              2359,
                              2365
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 99
                              },
                              "start": {
                                "column": 17,
                                "line": 99
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 99
                            },
                            "start": {
                              "column": 24,
                              "line": 99
                            }
                          },
                          "range": [
                            2366,
                            2369
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                2368,
                                2369
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 99
                                },
                                "start": {
                                  "column": 26,
                                  "line": 99
                                }
                              }
                            },
                            "range": [
                              2368,
                              2369
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 99
                              },
                              "start": {
                                "column": 26,
                                "line": 99
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 101
                          },
                          "start": {
                            "column": 16,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        2350,
                        2405
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 101
                        },
                        "start": {
                          "column": 8,
                          "line": 99
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 102
                    },
                    "start": {
                      "column": 116,
                      "line": 98
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithTypeParametersFromPrivateModule",
                  "optional": false,
                  "range": [
                    2232,
                    2278
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 98
                    },
                    "start": {
                      "column": 17,
                      "line": 98
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 115,
                      "line": 98
                    },
                    "start": {
                      "column": 63,
                      "line": 98
                    }
                  },
                  "range": [
                    2278,
                    2330
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "range": [
                              2289,
                              2302
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 98
                              },
                              "start": {
                                "column": 74,
                                "line": 98
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "range": [
                              2303,
                              2329
                            ],
                            "loc": {
                              "end": {
                                "column": 114,
                                "line": 98
                              },
                              "start": {
                                "column": 88,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            2289,
                            2329
                          ],
                          "loc": {
                            "end": {
                              "column": 114,
                              "line": 98
                            },
                            "start": {
                              "column": 74,
                              "line": 98
                            }
                          }
                        },
                        "range": [
                          2289,
                          2329
                        ],
                        "loc": {
                          "end": {
                            "column": 114,
                            "line": 98
                          },
                          "start": {
                            "column": 74,
                            "line": 98
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
                          2279,
                          2280
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 98
                          },
                          "start": {
                            "column": 64,
                            "line": 98
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        2279,
                        2329
                      ],
                      "loc": {
                        "end": {
                          "column": 114,
                          "line": 98
                        },
                        "start": {
                          "column": 64,
                          "line": 98
                        }
                      }
                    }
                  ]
                },
                "range": [
                  2226,
                  2411
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 102
                  },
                  "start": {
                    "column": 11,
                    "line": 98
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 98
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  2523,
                  2594
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        2533,
                        2541
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 105
                        },
                        "start": {
                          "column": 8,
                          "line": 105
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
                        2541,
                        2588
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                2574,
                                2577
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 106
                                },
                                "start": {
                                  "column": 19,
                                  "line": 106
                                }
                              }
                            },
                            "range": [
                              2567,
                              2578
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 106
                              },
                              "start": {
                                "column": 12,
                                "line": 106
                              }
                            }
                          }
                        ],
                        "range": [
                          2553,
                          2588
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 107
                          },
                          "start": {
                            "column": 28,
                            "line": 105
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 105
                              },
                              "start": {
                                "column": 20,
                                "line": 105
                              }
                            },
                            "range": [
                              2545,
                              2548
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  2547,
                                  2548
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 105
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 105
                                  }
                                }
                              },
                              "range": [
                                2547,
                                2548
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 105
                                },
                                "start": {
                                  "column": 22,
                                  "line": 105
                                }
                              }
                            }
                          },
                          "range": [
                            2542,
                            2548
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 105
                            },
                            "start": {
                              "column": 17,
                              "line": 105
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 105
                          },
                          "start": {
                            "column": 24,
                            "line": 105
                          }
                        },
                        "range": [
                          2549,
                          2552
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2551,
                              2552
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 105
                              },
                              "start": {
                                "column": 26,
                                "line": 105
                              }
                            }
                          },
                          "range": [
                            2551,
                            2552
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 105
                            },
                            "start": {
                              "column": 26,
                              "line": 105
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 107
                        },
                        "start": {
                          "column": 16,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2533,
                      2588
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 107
                      },
                      "start": {
                        "column": 8,
                        "line": 105
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 108
                  },
                  "start": {
                    "column": 110,
                    "line": 104
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithTypeParametersFromPrivateModule",
                "optional": false,
                "range": [
                  2423,
                  2470
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 104
                  },
                  "start": {
                    "column": 10,
                    "line": 104
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 104
                  },
                  "start": {
                    "column": 57,
                    "line": 104
                  }
                },
                "range": [
                  2470,
                  2522
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "range": [
                            2481,
                            2494
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 104
                            },
                            "start": {
                              "column": 68,
                              "line": 104
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "range": [
                            2495,
                            2521
                          ],
                          "loc": {
                            "end": {
                              "column": 108,
                              "line": 104
                            },
                            "start": {
                              "column": 82,
                              "line": 104
                            }
                          }
                        },
                        "range": [
                          2481,
                          2521
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 104
                          },
                          "start": {
                            "column": 68,
                            "line": 104
                          }
                        }
                      },
                      "range": [
                        2481,
                        2521
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 104
                        },
                        "start": {
                          "column": 68,
                          "line": 104
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
                        2471,
                        2472
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 104
                        },
                        "start": {
                          "column": 58,
                          "line": 104
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2471,
                      2521
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 104
                      },
                      "start": {
                        "column": 58,
                        "line": 104
                      }
                    }
                  }
                ]
              },
              "range": [
                2417,
                2594
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            }
          ],
          "range": [
            1182,
            2596
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 109
            },
            "start": {
              "column": 27,
              "line": 55
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            1169,
            1181
          ],
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "loc": {
            "end": {
              "column": 26,
              "line": 55
            },
            "start": {
              "column": 14,
              "line": 55
            }
          }
        },
        "kind": "module",
        "range": [
          1162,
          2596
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 7,
            "line": 55
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2659,
                2666
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 38,
                  "line": 112
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "range": [
                2631,
                2658
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 112
                },
                "start": {
                  "column": 10,
                  "line": 112
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              2625,
              2666
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              2672,
              2719
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  2712,
                  2719
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 116
                  },
                  "start": {
                    "column": 44,
                    "line": 115
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "range": [
                  2685,
                  2711
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 115
                  },
                  "start": {
                    "column": 17,
                    "line": 115
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                2679,
                2719
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 116
                },
                "start": {
                  "column": 11,
                  "line": 115
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              2725,
              2885
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  2814,
                  2885
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        2824,
                        2832
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 119
                        },
                        "start": {
                          "column": 8,
                          "line": 119
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
                        2832,
                        2879
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                2865,
                                2868
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 120
                                },
                                "start": {
                                  "column": 19,
                                  "line": 120
                                }
                              }
                            },
                            "range": [
                              2858,
                              2869
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 120
                              },
                              "start": {
                                "column": 12,
                                "line": 120
                              }
                            }
                          }
                        ],
                        "range": [
                          2844,
                          2879
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 121
                          },
                          "start": {
                            "column": 28,
                            "line": 119
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 119
                              },
                              "start": {
                                "column": 20,
                                "line": 119
                              }
                            },
                            "range": [
                              2836,
                              2839
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  2838,
                                  2839
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 119
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 119
                                  }
                                }
                              },
                              "range": [
                                2838,
                                2839
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 119
                                },
                                "start": {
                                  "column": 22,
                                  "line": 119
                                }
                              }
                            }
                          },
                          "range": [
                            2833,
                            2839
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 119
                            },
                            "start": {
                              "column": 17,
                              "line": 119
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 119
                          },
                          "start": {
                            "column": 24,
                            "line": 119
                          }
                        },
                        "range": [
                          2840,
                          2843
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2842,
                              2843
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 119
                              },
                              "start": {
                                "column": 26,
                                "line": 119
                              }
                            }
                          },
                          "range": [
                            2842,
                            2843
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 119
                            },
                            "start": {
                              "column": 26,
                              "line": 119
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 121
                        },
                        "start": {
                          "column": 16,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      2824,
                      2879
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 121
                      },
                      "start": {
                        "column": 8,
                        "line": 119
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 122
                  },
                  "start": {
                    "column": 93,
                    "line": 118
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateTypeParameters",
                "optional": false,
                "range": [
                  2738,
                  2774
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 118
                  },
                  "start": {
                    "column": 17,
                    "line": 118
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 118
                  },
                  "start": {
                    "column": 53,
                    "line": 118
                  }
                },
                "range": [
                  2774,
                  2813
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
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "range": [
                          2785,
                          2812
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 118
                          },
                          "start": {
                            "column": 64,
                            "line": 118
                          }
                        }
                      },
                      "range": [
                        2785,
                        2812
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 118
                        },
                        "start": {
                          "column": 64,
                          "line": 118
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
                        2775,
                        2776
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 118
                        },
                        "start": {
                          "column": 54,
                          "line": 118
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2775,
                      2812
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 118
                      },
                      "start": {
                        "column": 54,
                        "line": 118
                      }
                    }
                  }
                ]
              },
              "range": [
                2732,
                2885
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 122
                },
                "start": {
                  "column": 11,
                  "line": 118
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              2891,
              3049
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  2978,
                  3049
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        2988,
                        2996
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 125
                        },
                        "start": {
                          "column": 8,
                          "line": 125
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
                        2996,
                        3043
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                3029,
                                3032
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 126
                                },
                                "start": {
                                  "column": 19,
                                  "line": 126
                                }
                              }
                            },
                            "range": [
                              3022,
                              3033
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 126
                              },
                              "start": {
                                "column": 12,
                                "line": 126
                              }
                            }
                          }
                        ],
                        "range": [
                          3008,
                          3043
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 127
                          },
                          "start": {
                            "column": 28,
                            "line": 125
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 125
                              },
                              "start": {
                                "column": 20,
                                "line": 125
                              }
                            },
                            "range": [
                              3000,
                              3003
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  3002,
                                  3003
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 125
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 125
                                  }
                                }
                              },
                              "range": [
                                3002,
                                3003
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 125
                                },
                                "start": {
                                  "column": 22,
                                  "line": 125
                                }
                              }
                            }
                          },
                          "range": [
                            2997,
                            3003
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 125
                            },
                            "start": {
                              "column": 17,
                              "line": 125
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 125
                          },
                          "start": {
                            "column": 24,
                            "line": 125
                          }
                        },
                        "range": [
                          3004,
                          3007
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3006,
                              3007
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 125
                              },
                              "start": {
                                "column": 26,
                                "line": 125
                              }
                            }
                          },
                          "range": [
                            3006,
                            3007
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 125
                            },
                            "start": {
                              "column": 26,
                              "line": 125
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 127
                        },
                        "start": {
                          "column": 16,
                          "line": 125
                        }
                      }
                    },
                    "range": [
                      2988,
                      3043
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 125
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 128
                  },
                  "start": {
                    "column": 91,
                    "line": 124
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPublicTypeParameters",
                "optional": false,
                "range": [
                  2904,
                  2939
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 124
                  },
                  "start": {
                    "column": 17,
                    "line": 124
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 124
                  },
                  "start": {
                    "column": 52,
                    "line": 124
                  }
                },
                "range": [
                  2939,
                  2977
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
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "range": [
                          2950,
                          2976
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 124
                          },
                          "start": {
                            "column": 63,
                            "line": 124
                          }
                        }
                      },
                      "range": [
                        2950,
                        2976
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 124
                        },
                        "start": {
                          "column": 63,
                          "line": 124
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
                        2940,
                        2941
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 124
                        },
                        "start": {
                          "column": 53,
                          "line": 124
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      2940,
                      2976
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 124
                      },
                      "start": {
                        "column": 53,
                        "line": 124
                      }
                    }
                  }
                ]
              },
              "range": [
                2898,
                3049
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 128
                },
                "start": {
                  "column": 11,
                  "line": 124
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3138,
                3209
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "range": [
                      3148,
                      3156
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 131
                      },
                      "start": {
                        "column": 8,
                        "line": 131
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
                      3156,
                      3203
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "range": [
                              3189,
                              3192
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 132
                              },
                              "start": {
                                "column": 19,
                                "line": 132
                              }
                            }
                          },
                          "range": [
                            3182,
                            3193
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 132
                            },
                            "start": {
                              "column": 12,
                              "line": 132
                            }
                          }
                        }
                      ],
                      "range": [
                        3168,
                        3203
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 133
                        },
                        "start": {
                          "column": 28,
                          "line": 131
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
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 131
                            },
                            "start": {
                              "column": 20,
                              "line": 131
                            }
                          },
                          "range": [
                            3160,
                            3163
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                3162,
                                3163
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 131
                                },
                                "start": {
                                  "column": 22,
                                  "line": 131
                                }
                              }
                            },
                            "range": [
                              3162,
                              3163
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 131
                              },
                              "start": {
                                "column": 22,
                                "line": 131
                              }
                            }
                          }
                        },
                        "range": [
                          3157,
                          3163
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 131
                          },
                          "start": {
                            "column": 17,
                            "line": 131
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 131
                        },
                        "start": {
                          "column": 24,
                          "line": 131
                        }
                      },
                      "range": [
                        3164,
                        3167
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3166,
                            3167
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 131
                            },
                            "start": {
                              "column": 26,
                              "line": 131
                            }
                          }
                        },
                        "range": [
                          3166,
                          3167
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 131
                          },
                          "start": {
                            "column": 26,
                            "line": 131
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 133
                      },
                      "start": {
                        "column": 16,
                        "line": 131
                      }
                    }
                  },
                  "range": [
                    3148,
                    3203
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 133
                    },
                    "start": {
                      "column": 8,
                      "line": 131
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 134
                },
                "start": {
                  "column": 87,
                  "line": 130
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateTypeParameters",
              "optional": false,
              "range": [
                3061,
                3098
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 130
                },
                "start": {
                  "column": 10,
                  "line": 130
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 86,
                  "line": 130
                },
                "start": {
                  "column": 47,
                  "line": 130
                }
              },
              "range": [
                3098,
                3137
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
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "range": [
                        3109,
                        3136
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 130
                        },
                        "start": {
                          "column": 58,
                          "line": 130
                        }
                      }
                    },
                    "range": [
                      3109,
                      3136
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 130
                      },
                      "start": {
                        "column": 58,
                        "line": 130
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
                      3099,
                      3100
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 130
                      },
                      "start": {
                        "column": 48,
                        "line": 130
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3099,
                    3136
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 130
                    },
                    "start": {
                      "column": 48,
                      "line": 130
                    }
                  }
                }
              ]
            },
            "range": [
              3055,
              3209
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 134
              },
              "start": {
                "column": 4,
                "line": 130
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3296,
                3367
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "range": [
                      3306,
                      3314
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 137
                      },
                      "start": {
                        "column": 8,
                        "line": 137
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
                      3314,
                      3361
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "range": [
                              3347,
                              3350
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 138
                              },
                              "start": {
                                "column": 19,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            3340,
                            3351
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 138
                            },
                            "start": {
                              "column": 12,
                              "line": 138
                            }
                          }
                        }
                      ],
                      "range": [
                        3326,
                        3361
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 139
                        },
                        "start": {
                          "column": 28,
                          "line": 137
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
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 137
                            },
                            "start": {
                              "column": 20,
                              "line": 137
                            }
                          },
                          "range": [
                            3318,
                            3321
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                3320,
                                3321
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 137
                                },
                                "start": {
                                  "column": 22,
                                  "line": 137
                                }
                              }
                            },
                            "range": [
                              3320,
                              3321
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 137
                              },
                              "start": {
                                "column": 22,
                                "line": 137
                              }
                            }
                          }
                        },
                        "range": [
                          3315,
                          3321
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 137
                          },
                          "start": {
                            "column": 17,
                            "line": 137
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 137
                        },
                        "start": {
                          "column": 24,
                          "line": 137
                        }
                      },
                      "range": [
                        3322,
                        3325
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3324,
                            3325
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 137
                            },
                            "start": {
                              "column": 26,
                              "line": 137
                            }
                          }
                        },
                        "range": [
                          3324,
                          3325
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 137
                          },
                          "start": {
                            "column": 26,
                            "line": 137
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 139
                      },
                      "start": {
                        "column": 16,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3306,
                    3361
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 140
                },
                "start": {
                  "column": 85,
                  "line": 136
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPublicTypeParameters",
              "optional": false,
              "range": [
                3221,
                3257
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 136
                },
                "start": {
                  "column": 10,
                  "line": 136
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 84,
                  "line": 136
                },
                "start": {
                  "column": 46,
                  "line": 136
                }
              },
              "range": [
                3257,
                3295
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
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "range": [
                        3268,
                        3294
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 136
                        },
                        "start": {
                          "column": 57,
                          "line": 136
                        }
                      }
                    },
                    "range": [
                      3268,
                      3294
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 136
                      },
                      "start": {
                        "column": 57,
                        "line": 136
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
                      3258,
                      3259
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 136
                      },
                      "start": {
                        "column": 47,
                        "line": 136
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3258,
                    3294
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 136
                    },
                    "start": {
                      "column": 47,
                      "line": 136
                    }
                  }
                }
              ]
            },
            "range": [
              3215,
              3367
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 140
              },
              "start": {
                "column": 4,
                "line": 136
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              3373,
              3510
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  3439,
                  3510
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "range": [
                        3449,
                        3457
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 143
                        },
                        "start": {
                          "column": 8,
                          "line": 143
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
                        3457,
                        3504
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "range": [
                                3490,
                                3493
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 144
                                },
                                "start": {
                                  "column": 19,
                                  "line": 144
                                }
                              }
                            },
                            "range": [
                              3483,
                              3494
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 144
                              },
                              "start": {
                                "column": 12,
                                "line": 144
                              }
                            }
                          }
                        ],
                        "range": [
                          3469,
                          3504
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 145
                          },
                          "start": {
                            "column": 28,
                            "line": 143
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 143
                              },
                              "start": {
                                "column": 20,
                                "line": 143
                              }
                            },
                            "range": [
                              3461,
                              3464
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  3463,
                                  3464
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 143
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 143
                                  }
                                }
                              },
                              "range": [
                                3463,
                                3464
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 143
                                },
                                "start": {
                                  "column": 22,
                                  "line": 143
                                }
                              }
                            }
                          },
                          "range": [
                            3458,
                            3464
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 143
                            },
                            "start": {
                              "column": 17,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 143
                          },
                          "start": {
                            "column": 24,
                            "line": 143
                          }
                        },
                        "range": [
                          3465,
                          3468
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3467,
                              3468
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 143
                              },
                              "start": {
                                "column": 26,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            3467,
                            3468
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 143
                            },
                            "start": {
                              "column": 26,
                              "line": 143
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 145
                        },
                        "start": {
                          "column": 16,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      3449,
                      3504
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 145
                      },
                      "start": {
                        "column": 8,
                        "line": 143
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 146
                  },
                  "start": {
                    "column": 70,
                    "line": 142
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "range": [
                  3386,
                  3435
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 142
                  },
                  "start": {
                    "column": 17,
                    "line": 142
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 142
                  },
                  "start": {
                    "column": 66,
                    "line": 142
                  }
                },
                "range": [
                  3435,
                  3438
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
                        3436,
                        3437
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 142
                        },
                        "start": {
                          "column": 67,
                          "line": 142
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3436,
                      3437
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 142
                      },
                      "start": {
                        "column": 67,
                        "line": 142
                      }
                    }
                  }
                ]
              },
              "range": [
                3380,
                3510
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 146
                },
                "start": {
                  "column": 11,
                  "line": 142
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 142
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3576,
                3647
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "range": [
                      3586,
                      3594
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 149
                      },
                      "start": {
                        "column": 8,
                        "line": 149
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
                      3594,
                      3641
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "range": [
                              3627,
                              3630
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 150
                              },
                              "start": {
                                "column": 19,
                                "line": 150
                              }
                            }
                          },
                          "range": [
                            3620,
                            3631
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 150
                            },
                            "start": {
                              "column": 12,
                              "line": 150
                            }
                          }
                        }
                      ],
                      "range": [
                        3606,
                        3641
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 151
                        },
                        "start": {
                          "column": 28,
                          "line": 149
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
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 149
                            },
                            "start": {
                              "column": 20,
                              "line": 149
                            }
                          },
                          "range": [
                            3598,
                            3601
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                3600,
                                3601
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 149
                                },
                                "start": {
                                  "column": 22,
                                  "line": 149
                                }
                              }
                            },
                            "range": [
                              3600,
                              3601
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 149
                              },
                              "start": {
                                "column": 22,
                                "line": 149
                              }
                            }
                          }
                        },
                        "range": [
                          3595,
                          3601
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 149
                          },
                          "start": {
                            "column": 17,
                            "line": 149
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 149
                        },
                        "start": {
                          "column": 24,
                          "line": 149
                        }
                      },
                      "range": [
                        3602,
                        3605
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3604,
                            3605
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 149
                            },
                            "start": {
                              "column": 26,
                              "line": 149
                            }
                          }
                        },
                        "range": [
                          3604,
                          3605
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 149
                          },
                          "start": {
                            "column": 26,
                            "line": 149
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 151
                      },
                      "start": {
                        "column": 16,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    3586,
                    3641
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 151
                    },
                    "start": {
                      "column": 8,
                      "line": 149
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 152
                },
                "start": {
                  "column": 64,
                  "line": 148
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "range": [
                3522,
                3572
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 148
                },
                "start": {
                  "column": 10,
                  "line": 148
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 148
                },
                "start": {
                  "column": 60,
                  "line": 148
                }
              },
              "range": [
                3572,
                3575
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
                      3573,
                      3574
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 148
                      },
                      "start": {
                        "column": 61,
                        "line": 148
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3573,
                    3574
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 148
                    },
                    "start": {
                      "column": 61,
                      "line": 148
                    }
                  }
                }
              ]
            },
            "range": [
              3516,
              3647
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 148
              }
            }
          }
        ],
        "range": [
          2619,
          3649
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 153
          },
          "start": {
            "column": 21,
            "line": 111
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2605,
          2618
        ],
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 111
          },
          "start": {
            "column": 7,
            "line": 111
          }
        }
      },
      "kind": "module",
      "range": [
        2598,
        3649
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 154
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
