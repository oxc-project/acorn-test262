__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    125,
    528
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        125,
        218
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Client",
          "optional": false,
          "range": [
            137,
            143
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                156,
                180
              ],
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getPrismaClient",
                    "optional": false,
                    "range": [
                      164,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 3
                      },
                      "start": {
                        "column": 39,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    157,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 3
                    },
                    "start": {
                      "column": 32,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "range": [
                146,
                156
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              146,
              180
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          },
          "extendsType": {
            "type": "TSConstructorType",
            "abstract": false,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 3
                },
                "start": {
                  "column": 71,
                  "line": 3
                }
              },
              "range": [
                196,
                206
              ],
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      205,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 3
                      },
                      "start": {
                        "column": 80,
                        "line": 3
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    205,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 3
                    },
                    "start": {
                      "column": 80,
                      "line": 3
                    }
                  }
                },
                "range": [
                  199,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 3
                  },
                  "start": {
                    "column": 74,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              189,
              206
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 3
              },
              "start": {
                "column": 64,
                "line": 3
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              213,
              218
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 3
              },
              "start": {
                "column": 88,
                "line": 3
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 3
                },
                "start": {
                  "column": 84,
                  "line": 3
                }
              }
            },
            "range": [
              209,
              210
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 3
              },
              "start": {
                "column": 84,
                "line": 3
              }
            }
          },
          "range": [
            146,
            218
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        },
        "range": [
          132,
          218
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 93,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        220,
        442
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  290,
                  417
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "range": [
                        296,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      },
                      "range": [
                        300,
                        308
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Client",
                          "optional": false,
                          "range": [
                            302,
                            308
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 7
                            },
                            "start": {
                              "column": 10,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          302,
                          308
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      296,
                      309
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        314,
                        325
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 4,
                          "line": 8
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        325,
                        413
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    357,
                                    361
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "range": [
                                    362,
                                    366
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  357,
                                  366
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 9
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "range": [
                                      400,
                                      404
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 57,
                                        "line": 9
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "applyModelsAndClientExtensions",
                                  "optional": false,
                                  "range": [
                                    369,
                                    399
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  369,
                                  405
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                357,
                                405
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 9
                                },
                                "start": {
                                  "column": 14,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              349,
                              407
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 9
                              },
                              "start": {
                                "column": 6,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          341,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 10
                          },
                          "start": {
                            "column": 31,
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
                          "name": "options",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 8
                              },
                              "start": {
                                "column": 24,
                                "line": 8
                              }
                            },
                            "range": [
                              334,
                              339
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                336,
                                339
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 8
                                },
                                "start": {
                                  "column": 26,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            326,
                            339
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      314,
                      413
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
                    "column": 3,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "range": [
                  277,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                271,
                417
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "range": [
                  428,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "range": [
                421,
                440
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            267,
            442
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 47,
              "line": 5
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getPrismaClient",
          "optional": false,
          "range": [
            236,
            251
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 40,
                  "line": 5
                }
              },
              "range": [
                260,
                265
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  262,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              252,
              265
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          }
        ],
        "range": [
          227,
          442
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 5
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
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        444,
        527
      ],
      "attributes": [],
      "declaration": {
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
                "name": "client",
                "optional": false,
                "range": [
                  518,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "range": [
                511,
                525
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            507,
            527
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 63,
              "line": 16
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "applyModelsAndClientExtensions",
          "optional": false,
          "range": [
            460,
            490
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 16
            },
            "start": {
              "column": 16,
              "line": 16
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "client",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 16
                },
                "start": {
                  "column": 53,
                  "line": 16
                }
              },
              "range": [
                497,
                505
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Client",
                  "optional": false,
                  "range": [
                    499,
                    505
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 16
                    },
                    "start": {
                      "column": 55,
                      "line": 16
                    }
                  }
                },
                "range": [
                  499,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 16
                  },
                  "start": {
                    "column": 55,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              491,
              505
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 16
              },
              "start": {
                "column": 47,
                "line": 16
              }
            }
          }
        ],
        "range": [
          451,
          527
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
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
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
