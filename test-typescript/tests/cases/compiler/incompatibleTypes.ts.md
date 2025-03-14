__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1247
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          16,
          37
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                22,
                24
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                26,
                34
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  28,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              22,
              35
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo1",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
          65,
          147
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
              "name": "p1",
              "optional": false,
              "range": [
                113,
                115
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
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
                115,
                145
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"s\"",
                      "value": "s",
                      "range": [
                        135,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      128,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  118,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 6
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
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              106,
              145
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 26,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          45,
          47
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo1",
            "optional": false,
            "range": [
              59,
              64
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            59,
            64
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        39,
        147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          165,
          194
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                171,
                173
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  },
                  "range": [
                    175,
                    182
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      176,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  174,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 12
                }
              },
              "range": [
                183,
                191
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  185,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 12
                  }
                }
              }
            },
            "static": false,
            "range": [
              171,
              192
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo2",
        "optional": false,
        "range": [
          159,
          164
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        149,
        194
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          222,
          309
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
              "name": "p1",
              "optional": false,
              "range": [
                269,
                271
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
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
                271,
                307
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        299,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      292,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  282,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 16
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    },
                    "range": [
                      273,
                      280
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        274,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 16,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    272,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "range": [
              262,
              307
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 26,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          202,
          204
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo2",
            "optional": false,
            "range": [
              216,
              221
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          },
          "range": [
            216,
            221
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 15
            },
            "start": {
              "column": 20,
              "line": 15
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        196,
        309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          327,
          346
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                333,
                335
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              },
              "range": [
                335,
                343
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  337,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              333,
              344
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
            "column": 16,
            "line": 21
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo3",
        "optional": false,
        "range": [
          321,
          326
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
        311,
        346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          374,
          437
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                424,
                426
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
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
                  "column": 21,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              },
              "range": [
                426,
                434
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  428,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              }
            },
            "value": null,
            "range": [
              417,
              435
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
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
            "line": 27
          },
          "start": {
            "column": 26,
            "line": 25
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          354,
          356
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 25
          },
          "start": {
            "column": 6,
            "line": 25
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo3",
            "optional": false,
            "range": [
              368,
              373
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 20,
                "line": 25
              }
            }
          },
          "range": [
            368,
            373
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 25
            },
            "start": {
              "column": 20,
              "line": 25
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        348,
        437
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          455,
          501
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                461,
                463
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
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
                  "column": 41,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
                }
              },
              "range": [
                463,
                498
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        467,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 30
                        },
                        "start": {
                          "column": 10,
                          "line": 30
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
                          "column": 27,
                          "line": 30
                        },
                        "start": {
                          "column": 11,
                          "line": 30
                        }
                      },
                      "range": [
                        468,
                        484
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                472,
                                473
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 30
                                },
                                "start": {
                                  "column": 15,
                                  "line": 30
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
                                  "column": 24,
                                  "line": 30
                                },
                                "start": {
                                  "column": 16,
                                  "line": 30
                                }
                              },
                              "range": [
                                473,
                                481
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  475,
                                  481
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 30
                                  }
                                }
                              }
                            },
                            "range": [
                              472,
                              482
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 30
                              },
                              "start": {
                                "column": 15,
                                "line": 30
                              }
                            }
                          }
                        ],
                        "range": [
                          470,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 30
                          },
                          "start": {
                            "column": 13,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      467,
                      485
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 30
                      },
                      "start": {
                        "column": 10,
                        "line": 30
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
                        486,
                        487
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 30
                        },
                        "start": {
                          "column": 29,
                          "line": 30
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
                          "column": 38,
                          "line": 30
                        },
                        "start": {
                          "column": 30,
                          "line": 30
                        }
                      },
                      "range": [
                        487,
                        495
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          489,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 30
                          },
                          "start": {
                            "column": 32,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      486,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 30
                      },
                      "start": {
                        "column": 29,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  465,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              461,
              499
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 16,
            "line": 29
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo4",
        "optional": false,
        "range": [
          449,
          454
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 29
          },
          "start": {
            "column": 10,
            "line": 29
          }
        }
      },
      "range": [
        439,
        501
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          529,
          619
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                579,
                581
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
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
                  "column": 48,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              },
              "range": [
                581,
                616
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
                      "name": "c",
                      "optional": false,
                      "range": [
                        585,
                        586
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
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 34
                        },
                        "start": {
                          "column": 18,
                          "line": 34
                        }
                      },
                      "range": [
                        586,
                        602
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
                              "name": "b",
                              "optional": false,
                              "range": [
                                590,
                                591
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 34
                                },
                                "start": {
                                  "column": 22,
                                  "line": 34
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
                                  "column": 31,
                                  "line": 34
                                },
                                "start": {
                                  "column": 23,
                                  "line": 34
                                }
                              },
                              "range": [
                                591,
                                599
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  593,
                                  599
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 34
                                  }
                                }
                              }
                            },
                            "range": [
                              590,
                              600
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 34
                              },
                              "start": {
                                "column": 22,
                                "line": 34
                              }
                            }
                          }
                        ],
                        "range": [
                          588,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 34
                          },
                          "start": {
                            "column": 20,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      585,
                      603
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 17,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        604,
                        605
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 34
                        },
                        "start": {
                          "column": 36,
                          "line": 34
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
                          "column": 45,
                          "line": 34
                        },
                        "start": {
                          "column": 37,
                          "line": 34
                        }
                      },
                      "range": [
                        605,
                        613
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          607,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 34
                          },
                          "start": {
                            "column": 39,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      604,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 34
                      },
                      "start": {
                        "column": 36,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  583,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              }
            },
            "value": null,
            "range": [
              572,
              617
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
            "column": 26,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "range": [
          509,
          511
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo4",
            "optional": false,
            "range": [
              523,
              528
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 20,
                "line": 33
              }
            }
          },
          "range": [
            523,
            528
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 33
            },
            "start": {
              "column": 20,
              "line": 33
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        503,
        619
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "range": [
          630,
          633
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 37
              },
              "start": {
                "column": 14,
                "line": 37
              }
            },
            "range": [
              635,
              642
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo1",
                "optional": false,
                "range": [
                  637,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 37
                  },
                  "start": {
                    "column": 16,
                    "line": 37
                  }
                }
              },
              "range": [
                637,
                642
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 37
                },
                "start": {
                  "column": 16,
                  "line": 37
                }
              }
            }
          },
          "range": [
            634,
            642
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 37
            },
            "start": {
              "column": 13,
              "line": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 37
          },
          "start": {
            "column": 22,
            "line": 37
          }
        },
        "range": [
          643,
          649
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            645,
            649
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 37
            },
            "start": {
              "column": 24,
              "line": 37
            }
          }
        }
      },
      "range": [
        621,
        650
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "range": [
          660,
          663
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 38
          },
          "start": {
            "column": 9,
            "line": 38
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 38
              },
              "start": {
                "column": 14,
                "line": 38
              }
            },
            "range": [
              665,
              672
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo2",
                "optional": false,
                "range": [
                  667,
                  672
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 38
                  },
                  "start": {
                    "column": 16,
                    "line": 38
                  }
                }
              },
              "range": [
                667,
                672
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 38
                }
              }
            }
          },
          "range": [
            664,
            672
          ],
          "loc": {
            "end": {
              "column": 21,
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
            "column": 28,
            "line": 38
          },
          "start": {
            "column": 22,
            "line": 38
          }
        },
        "range": [
          673,
          679
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            675,
            679
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 38
            },
            "start": {
              "column": 24,
              "line": 38
            }
          }
        }
      },
      "range": [
        651,
        680
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          702,
          705
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 39
          },
          "start": {
            "column": 21,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "range": [
          690,
          693
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
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
                "column": 19,
                "line": 39
              },
              "start": {
                "column": 14,
                "line": 39
              }
            },
            "range": [
              695,
              700
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                697,
                700
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            }
          },
          "range": [
            694,
            700
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 39
            },
            "start": {
              "column": 13,
              "line": 39
            }
          }
        }
      ],
      "range": [
        681,
        705
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 39
        },
        "start": {
          "column": 0,
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 40
                }
              },
              "range": [
                712,
                716
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "range": [
                    714,
                    716
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
                "range": [
                  714,
                  716
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
              }
            },
            "range": [
              710,
              716
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": null,
          "range": [
            710,
            716
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        706,
        717
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 40
        },
        "start": {
          "column": 0,
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 41
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              },
              "range": [
                724,
                728
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "range": [
                    726,
                    728
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
                "range": [
                  726,
                  728
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
              }
            },
            "range": [
              722,
              728
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": null,
          "range": [
            722,
            728
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        718,
        729
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "range": [
              734,
              736
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "if1",
          "optional": false,
          "range": [
            730,
            733
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "optional": false,
        "range": [
          730,
          737
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        730,
        738
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 42
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "range": [
          750,
          753
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 45
              },
              "start": {
                "column": 14,
                "line": 45
              }
            },
            "range": [
              755,
              790
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      759,
                      760
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 45
                      },
                      "start": {
                        "column": 18,
                        "line": 45
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
                        "line": 45
                      },
                      "start": {
                        "column": 19,
                        "line": 45
                      }
                    },
                    "range": [
                      760,
                      776
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              764,
                              765
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 45
                              },
                              "start": {
                                "column": 23,
                                "line": 45
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
                                "line": 45
                              },
                              "start": {
                                "column": 24,
                                "line": 45
                              }
                            },
                            "range": [
                              765,
                              773
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                767,
                                773
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 45
                                },
                                "start": {
                                  "column": 26,
                                  "line": 45
                                }
                              }
                            }
                          },
                          "range": [
                            764,
                            774
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 45
                            },
                            "start": {
                              "column": 23,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "range": [
                        762,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 45
                        },
                        "start": {
                          "column": 21,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    759,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 45
                    },
                    "start": {
                      "column": 18,
                      "line": 45
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
                      778,
                      779
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 45
                      },
                      "start": {
                        "column": 37,
                        "line": 45
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
                        "column": 46,
                        "line": 45
                      },
                      "start": {
                        "column": 38,
                        "line": 45
                      }
                    },
                    "range": [
                      779,
                      787
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        781,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 45
                        },
                        "start": {
                          "column": 40,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    778,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 45
                    },
                    "start": {
                      "column": 37,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                757,
                790
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 45
                },
                "start": {
                  "column": 16,
                  "line": 45
                }
              }
            }
          },
          "range": [
            754,
            790
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 45
            },
            "start": {
              "column": 13,
              "line": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 45
          },
          "start": {
            "column": 50,
            "line": 45
          }
        },
        "range": [
          791,
          799
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            793,
            799
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 45
            },
            "start": {
              "column": 52,
              "line": 45
            }
          }
        }
      },
      "range": [
        741,
        800
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "range": [
          810,
          813
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            },
            "range": [
              815,
              850
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      819,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 46
                      },
                      "start": {
                        "column": 18,
                        "line": 46
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
                        "line": 46
                      },
                      "start": {
                        "column": 19,
                        "line": 46
                      }
                    },
                    "range": [
                      820,
                      836
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
                            "name": "b",
                            "optional": false,
                            "range": [
                              824,
                              825
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 46
                              },
                              "start": {
                                "column": 23,
                                "line": 46
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
                                "line": 46
                              },
                              "start": {
                                "column": 24,
                                "line": 46
                              }
                            },
                            "range": [
                              825,
                              833
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                827,
                                833
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 46
                                },
                                "start": {
                                  "column": 26,
                                  "line": 46
                                }
                              }
                            }
                          },
                          "range": [
                            824,
                            834
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 46
                            },
                            "start": {
                              "column": 23,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "range": [
                        822,
                        836
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 46
                        },
                        "start": {
                          "column": 21,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    819,
                    837
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 46
                    },
                    "start": {
                      "column": 18,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "range": [
                      838,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 46
                      },
                      "start": {
                        "column": 37,
                        "line": 46
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
                        "column": 46,
                        "line": 46
                      },
                      "start": {
                        "column": 38,
                        "line": 46
                      }
                    },
                    "range": [
                      839,
                      847
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        841,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 46
                        },
                        "start": {
                          "column": 40,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    838,
                    848
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 46
                    },
                    "start": {
                      "column": 37,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                817,
                850
              ],
              "loc": {
                "end": {
                  "column": 49,
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
            814,
            850
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 46
            },
            "start": {
              "column": 13,
              "line": 46
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 58,
            "line": 46
          },
          "start": {
            "column": 50,
            "line": 46
          }
        },
        "range": [
          851,
          859
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            853,
            859
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 46
            },
            "start": {
              "column": 52,
              "line": 46
            }
          }
        }
      },
      "range": [
        801,
        860
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                891,
                895
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 47
                },
                "start": {
                  "column": 30,
                  "line": 47
                }
              }
            },
            "range": [
              884,
              896
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 47
              },
              "start": {
                "column": 23,
                "line": 47
              }
            }
          }
        ],
        "range": [
          882,
          898
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 47
          },
          "start": {
            "column": 21,
            "line": 47
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "range": [
          870,
          873
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 47
          },
          "start": {
            "column": 9,
            "line": 47
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
                "column": 19,
                "line": 47
              },
              "start": {
                "column": 14,
                "line": 47
              }
            },
            "range": [
              875,
              880
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                877,
                880
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 47
                },
                "start": {
                  "column": 16,
                  "line": 47
                }
              }
            }
          },
          "range": [
            874,
            880
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 47
            },
            "start": {
              "column": 13,
              "line": 47
            }
          }
        }
      ],
      "range": [
        861,
        898
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
                  "name": "e",
                  "optional": false,
                  "range": [
                    906,
                    907
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 49
                    },
                    "start": {
                      "column": 6,
                      "line": 49
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    909,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 49
                    },
                    "start": {
                      "column": 9,
                      "line": 49
                    }
                  }
                },
                "range": [
                  906,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 49
                  },
                  "start": {
                    "column": 6,
                    "line": 49
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    912,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 49
                    },
                    "start": {
                      "column": 12,
                      "line": 49
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    915,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 49
                    },
                    "start": {
                      "column": 15,
                      "line": 49
                    }
                  }
                },
                "range": [
                  912,
                  916
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 49
                  },
                  "start": {
                    "column": 12,
                    "line": 49
                  }
                }
              }
            ],
            "range": [
              904,
              918
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "of1",
          "optional": false,
          "range": [
            900,
            903
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "optional": false,
        "range": [
          900,
          919
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        900,
        920
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          937,
          962
        ],
        "body": [
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
                      "column": 12,
                      "line": 52
                    },
                    "start": {
                      "column": 5,
                      "line": 52
                    }
                  },
                  "range": [
                    944,
                    951
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      945,
                      951
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 52
                      },
                      "start": {
                        "column": 6,
                        "line": 52
                      }
                    }
                  }
                },
                "range": [
                  941,
                  951
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 52
                  },
                  "start": {
                    "column": 2,
                    "line": 52
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
                  "column": 20,
                  "line": 52
                },
                "start": {
                  "column": 13,
                  "line": 52
                }
              },
              "range": [
                952,
                959
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  953,
                  959
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 52
                  },
                  "start": {
                    "column": 14,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              940,
              960
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 52
              },
              "start": {
                "column": 1,
                "line": 52
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
            "column": 15,
            "line": 51
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "range": [
          932,
          936
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 51
          },
          "start": {
            "column": 10,
            "line": 51
          }
        }
      },
      "range": [
        922,
        962
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
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
        "body": [],
        "range": [
          992,
          997
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 28,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          973,
          976
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 55
              }
            },
            "range": [
              979,
              990
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 55
                  },
                  "start": {
                    "column": 19,
                    "line": 55
                  }
                },
                "range": [
                  983,
                  990
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    986,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 55
                    },
                    "start": {
                      "column": 22,
                      "line": 55
                    }
                  }
                }
              },
              "range": [
                980,
                990
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 55
                },
                "start": {
                  "column": 16,
                  "line": 55
                }
              }
            }
          },
          "range": [
            977,
            990
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 55
            },
            "start": {
              "column": 13,
              "line": 55
            }
          }
        }
      ],
      "range": [
        964,
        997
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
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
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    },
                    "range": [
                      1024,
                      1029
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IMap",
                        "optional": false,
                        "range": [
                          1025,
                          1029
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 60
                          },
                          "start": {
                            "column": 9,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1025,
                        1029
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 60
                        },
                        "start": {
                          "column": 9,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    1021,
                    1029
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 60
                    },
                    "start": {
                      "column": 5,
                      "line": 60
                    }
                  }
                },
                "init": null,
                "range": [
                  1021,
                  1029
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 60
                  },
                  "start": {
                    "column": 5,
                    "line": 60
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1017,
              1030
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 60
              },
              "start": {
                "column": 1,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
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
                            "name": "map",
                            "optional": false,
                            "range": [
                              1046,
                              1049
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 62
                              },
                              "start": {
                                "column": 2,
                                "line": 62
                              }
                            }
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "range": [
                              1052,
                              1054
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 62
                              },
                              "start": {
                                "column": 8,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1046,
                            1054
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 62
                            },
                            "start": {
                              "column": 2,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1046,
                          1055
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 62
                          },
                          "start": {
                            "column": 2,
                            "line": 62
                          }
                        }
                      }
                    ],
                    "range": [
                      1042,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 63
                      },
                      "start": {
                        "column": 11,
                        "line": 61
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1036,
                    1058
                  ],
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 63
                    },
                    "start": {
                      "column": 5,
                      "line": 61
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
                  1032,
                  1035
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 61
                  },
                  "start": {
                    "column": 1,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1032,
                1059
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 63
                },
                "start": {
                  "column": 1,
                  "line": 61
                }
              }
            },
            "range": [
              1032,
              1060
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 63
              },
              "start": {
                "column": 1,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1014,
          1062
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 15,
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
        "name": "bar",
        "optional": false,
        "range": [
          1008,
          1011
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
          }
        }
      },
      "params": [],
      "range": [
        999,
        1062
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 59
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 66
                },
                "start": {
                  "column": 6,
                  "line": 66
                }
              },
              "range": [
                1070,
                1105
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1074,
                        1075
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 66
                        },
                        "start": {
                          "column": 10,
                          "line": 66
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
                          "column": 27,
                          "line": 66
                        },
                        "start": {
                          "column": 11,
                          "line": 66
                        }
                      },
                      "range": [
                        1075,
                        1091
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
                              "name": "a",
                              "optional": false,
                              "range": [
                                1079,
                                1080
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 66
                                },
                                "start": {
                                  "column": 15,
                                  "line": 66
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
                                  "column": 24,
                                  "line": 66
                                },
                                "start": {
                                  "column": 16,
                                  "line": 66
                                }
                              },
                              "range": [
                                1080,
                                1088
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  1082,
                                  1088
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 66
                                  }
                                }
                              }
                            },
                            "range": [
                              1079,
                              1089
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 66
                              },
                              "start": {
                                "column": 15,
                                "line": 66
                              }
                            }
                          }
                        ],
                        "range": [
                          1077,
                          1091
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 66
                          },
                          "start": {
                            "column": 13,
                            "line": 66
                          }
                        }
                      }
                    },
                    "range": [
                      1074,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 66
                      },
                      "start": {
                        "column": 10,
                        "line": 66
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
                        1093,
                        1094
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 66
                        },
                        "start": {
                          "column": 29,
                          "line": 66
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
                          "column": 38,
                          "line": 66
                        },
                        "start": {
                          "column": 30,
                          "line": 66
                        }
                      },
                      "range": [
                        1094,
                        1102
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1096,
                          1102
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 66
                          },
                          "start": {
                            "column": 32,
                            "line": 66
                          }
                        }
                      }
                    },
                    "range": [
                      1093,
                      1103
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 66
                      },
                      "start": {
                        "column": 29,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  1072,
                  1105
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 66
                  },
                  "start": {
                    "column": 8,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              1068,
              1105
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "range": [
                    1110,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 66
                    },
                    "start": {
                      "column": 46,
                      "line": 66
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1113,
                    1114
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 66
                    },
                    "start": {
                      "column": 49,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1110,
                  1114
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 66
                  },
                  "start": {
                    "column": 46,
                    "line": 66
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1116,
                    1117
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 66
                    },
                    "start": {
                      "column": 52,
                      "line": 66
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1119,
                    1120
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 66
                    },
                    "start": {
                      "column": 55,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1116,
                  1120
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 66
                  },
                  "start": {
                    "column": 52,
                    "line": 66
                  }
                }
              }
            ],
            "range": [
              1108,
              1122
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 66
              },
              "start": {
                "column": 44,
                "line": 66
              }
            }
          },
          "range": [
            1068,
            1122
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 66
            },
            "start": {
              "column": 4,
              "line": 66
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1064,
        1123
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
            "name": "a1",
            "optional": false,
            "range": [
              1129,
              1131
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          "init": {
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
                      "name": "e",
                      "optional": false,
                      "range": [
                        1137,
                        1138
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 68
                        },
                        "start": {
                          "column": 12,
                          "line": 68
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1140,
                        1141
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 68
                        },
                        "start": {
                          "column": 15,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1137,
                      1141
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 68
                      },
                      "start": {
                        "column": 12,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        1143,
                        1144
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 68
                        },
                        "start": {
                          "column": 18,
                          "line": 68
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1146,
                        1147
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 68
                        },
                        "start": {
                          "column": 21,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1143,
                      1147
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 68
                      },
                      "start": {
                        "column": 18,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1135,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 68
                  },
                  "start": {
                    "column": 10,
                    "line": 68
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
                      "name": "e",
                      "optional": false,
                      "range": [
                        1153,
                        1154
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 68
                        },
                        "start": {
                          "column": 28,
                          "line": 68
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1156,
                        1157
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 68
                        },
                        "start": {
                          "column": 31,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1153,
                      1157
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 68
                      },
                      "start": {
                        "column": 28,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        1159,
                        1160
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 68
                        },
                        "start": {
                          "column": 34,
                          "line": 68
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1162,
                        1163
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 68
                        },
                        "start": {
                          "column": 37,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1159,
                      1163
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 68
                      },
                      "start": {
                        "column": 34,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1151,
                  1165
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 68
                  },
                  "start": {
                    "column": 26,
                    "line": 68
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
                      "name": "e",
                      "optional": false,
                      "range": [
                        1169,
                        1170
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 68
                        },
                        "start": {
                          "column": 44,
                          "line": 68
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1172,
                        1173
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 68
                        },
                        "start": {
                          "column": 47,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1169,
                      1173
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 68
                      },
                      "start": {
                        "column": 44,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "range": [
                        1175,
                        1176
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 68
                        },
                        "start": {
                          "column": 50,
                          "line": 68
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1178,
                        1179
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
                    "range": [
                      1175,
                      1179
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 68
                      },
                      "start": {
                        "column": 50,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1167,
                  1181
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 68
                  },
                  "start": {
                    "column": 42,
                    "line": 68
                  }
                }
              }
            ],
            "range": [
              1134,
              1182
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 68
              },
              "start": {
                "column": 9,
                "line": 68
              }
            }
          },
          "range": [
            1129,
            1182
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 68
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1125,
        1183
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "i1c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 72
                },
                "start": {
                  "column": 8,
                  "line": 72
                }
              },
              "range": [
                1195,
                1212
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 72
                        },
                        "start": {
                          "column": 14,
                          "line": 72
                        }
                      },
                      "range": [
                        1201,
                        1209
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1203,
                          1209
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 72
                          },
                          "start": {
                            "column": 16,
                            "line": 72
                          }
                        }
                      }
                    },
                    "range": [
                      1199,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 72
                      },
                      "start": {
                        "column": 12,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1197,
                  1212
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 72
                  },
                  "start": {
                    "column": 10,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1191,
              1212
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "5",
            "value": 5,
            "range": [
              1215,
              1216
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 72
              },
              "start": {
                "column": 28,
                "line": 72
              }
            }
          },
          "range": [
            1191,
            1216
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 72
            },
            "start": {
              "column": 4,
              "line": 72
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1187,
        1217
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
            "name": "fp1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 74
                },
                "start": {
                  "column": 7,
                  "line": 74
                }
              },
              "range": [
                1226,
                1236
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 74
                    },
                    "start": {
                      "column": 12,
                      "line": 74
                    }
                  },
                  "range": [
                    1231,
                    1236
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1233,
                      1236
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 74
                      },
                      "start": {
                        "column": 14,
                        "line": 74
                      }
                    }
                  }
                },
                "range": [
                  1228,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 74
                  },
                  "start": {
                    "column": 9,
                    "line": 74
                  }
                }
              }
            },
            "range": [
              1223,
              1236
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1244,
                1245
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 74
                },
                "start": {
                  "column": 25,
                  "line": 74
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1239,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 74
                  },
                  "start": {
                    "column": 20,
                    "line": 74
                  }
                }
              }
            ],
            "range": [
              1239,
              1245
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 74
              },
              "start": {
                "column": 20,
                "line": 74
              }
            }
          },
          "range": [
            1223,
            1245
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 74
            },
            "start": {
              "column": 4,
              "line": 74
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1219,
        1246
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 75
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
