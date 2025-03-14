__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1897
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          17,
          91
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                54,
                65
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                65,
                89
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  86,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      },
                      "range": [
                        76,
                        84
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          78,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      73,
                      84
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    66,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              54,
              89
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassErr",
        "optional": false,
        "range": [
          6,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
        91
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
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
              136,
              155
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      149,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      153,
                      154
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
                  "range": [
                    149,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                143,
                155
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          130,
          157
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 37,
            "line": 6
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          103,
          129
        ],
        "decorators": [],
        "name": "IllegalBecauseInstantiated",
        "optional": false,
        "loc": {
          "end": {
            "column": 36,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "kind": "namespace",
      "range": [
        93,
        157
      ],
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
                225,
                233
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 11
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PrivateClass",
              "optional": false,
              "range": [
                212,
                224
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              206,
              233
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          200,
          235
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 41,
            "line": 10
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          169,
          199
        ],
        "decorators": [],
        "name": "AlsoIllegalBecauseInstantiated",
        "optional": false,
        "loc": {
          "end": {
            "column": 40,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "kind": "namespace",
      "range": [
        159,
        235
      ],
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    313,
                    332
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "range": [
                            326,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 18
                            },
                            "start": {
                              "column": 21,
                              "line": 18
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            330,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 18
                            },
                            "start": {
                              "column": 25,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          326,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 21,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      320,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 18
                      },
                      "start": {
                        "column": 15,
                        "line": 18
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                303,
                338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 17
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                296,
                302
              ],
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 17
                },
                "start": {
                  "column": 14,
                  "line": 17
                }
              }
            },
            "kind": "namespace",
            "range": [
              286,
              338
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          280,
          340
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 43,
            "line": 16
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          247,
          279
        ],
        "decorators": [],
        "name": "IllegalBecauseNestedInstantiated",
        "optional": false,
        "loc": {
          "end": {
            "column": 42,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "kind": "namespace",
      "range": [
        237,
        340
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          360,
          373
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                366,
                367
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                370,
                371
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
            "range": [
              366,
              371
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 23
              },
              "start": {
                "column": 4,
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
            "column": 18,
            "line": 22
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalEnum",
        "optional": false,
        "range": [
          347,
          359
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "range": [
        342,
        373
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoGoodAlias",
        "optional": false,
        "range": [
          382,
          393
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NotLegalEnum",
          "optional": false,
          "range": [
            396,
            408
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 26
            },
            "start": {
              "column": 21,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            409,
            410
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 26
            },
            "start": {
              "column": 34,
              "line": 26
            }
          }
        },
        "range": [
          396,
          410
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 26
          },
          "start": {
            "column": 21,
            "line": 26
          }
        }
      },
      "range": [
        375,
        411
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          442,
          455
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                448,
                449
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                452,
                453
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
            "range": [
              448,
              453
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 29,
            "line": 28
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalConstEnum",
        "optional": false,
        "range": [
          424,
          441
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 28
          },
          "start": {
            "column": 11,
            "line": 28
          }
        }
      },
      "range": [
        413,
        455
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          503,
          575
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                545,
                556
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
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
                556,
                573
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  570,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 29,
                    "line": 35
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 35
                      },
                      "start": {
                        "column": 19,
                        "line": 35
                      }
                    },
                    "range": [
                      560,
                      568
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        562,
                        568
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 35
                        },
                        "start": {
                          "column": 21,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    557,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 35
                    },
                    "start": {
                      "column": 16,
                      "line": 35
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 35
                },
                "start": {
                  "column": 15,
                  "line": 35
                }
              }
            },
            "range": [
              545,
              573
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 16,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassOk",
        "optional": false,
        "range": [
          493,
          502
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        487,
        575
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 33
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
              713,
              743
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  740,
                  743
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 41
                  },
                  "start": {
                    "column": 31,
                    "line": 41
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JustAType",
                "optional": false,
                "range": [
                  730,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 41
                  },
                  "start": {
                    "column": 21,
                    "line": 41
                  }
                }
              },
              "range": [
                720,
                743
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 41
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 34,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              748,
              783
            ],
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATypeInANamespace",
                "optional": false,
                "range": [
                  760,
                  777
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 42
                  },
                  "start": {
                    "column": 16,
                    "line": 42
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  780,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 42
                  },
                  "start": {
                    "column": 36,
                    "line": 42
                  }
                }
              },
              "range": [
                755,
                783
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 39,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
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
                    815,
                    850
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ATypeInANamespace",
                      "optional": false,
                      "range": [
                        827,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 44
                        },
                        "start": {
                          "column": 20,
                          "line": 44
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        847,
                        849
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 44
                        },
                        "start": {
                          "column": 40,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      822,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 44
                      },
                      "start": {
                        "column": 15,
                        "line": 44
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                805,
                856
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 21,
                  "line": 43
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                798,
                804
              ],
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 43
                },
                "start": {
                  "column": 14,
                  "line": 43
                }
              }
            },
            "kind": "namespace",
            "range": [
              788,
              856
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          707,
          858
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 26,
            "line": 40
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          691,
          706
        ],
        "decorators": [],
        "name": "NotInstantiated",
        "optional": false,
        "loc": {
          "end": {
            "column": 25,
            "line": 40
          },
          "start": {
            "column": 10,
            "line": 40
          }
        }
      },
      "kind": "namespace",
      "range": [
        681,
        858
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 40
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
              908,
              934
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stillOk",
                    "optional": false,
                    "range": [
                      921,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 48
                      },
                      "start": {
                        "column": 17,
                        "line": 48
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "12",
                    "value": 12,
                    "range": [
                      931,
                      933
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 48
                      },
                      "start": {
                        "column": 27,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    921,
                    933
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 48
                    },
                    "start": {
                      "column": 17,
                      "line": 48
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                915,
                934
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 48
                },
                "start": {
                  "column": 11,
                  "line": 48
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 30,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "range": [
          902,
          936
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 43,
            "line": 47
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          877,
          901
        ],
        "decorators": [],
        "name": "AmbientIsNotInstantiated",
        "optional": false,
        "loc": {
          "end": {
            "column": 42,
            "line": 47
          },
          "start": {
            "column": 18,
            "line": 47
          }
        }
      },
      "kind": "namespace",
      "range": [
        859,
        936
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          961,
          974
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                967,
                968
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                971,
                972
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
            "range": [
              967,
              972
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 52
              },
              "start": {
                "column": 4,
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
            "column": 23,
            "line": 51
          }
        }
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LegalEnum",
        "optional": false,
        "range": [
          951,
          960
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 51
          },
          "start": {
            "column": 13,
            "line": 51
          }
        }
      },
      "range": [
        938,
        974
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    1040,
                    1066
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stillOk",
                          "optional": false,
                          "range": [
                            1053,
                            1060
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 57
                            },
                            "start": {
                              "column": 21,
                              "line": 57
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "12",
                          "value": 12,
                          "range": [
                            1063,
                            1065
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 57
                            },
                            "start": {
                              "column": 31,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          1053,
                          1065
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 57
                          },
                          "start": {
                            "column": 21,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1047,
                      1066
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 57
                      },
                      "start": {
                        "column": 15,
                        "line": 57
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                1030,
                1072
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 21,
                  "line": 56
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                1023,
                1029
              ],
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 56
                },
                "start": {
                  "column": 14,
                  "line": 56
                }
              }
            },
            "kind": "namespace",
            "range": [
              1013,
              1072
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "TSEnumDeclaration",
            "body": {
              "type": "TSEnumBody",
              "range": [
                1103,
                1124
              ],
              "members": [
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      1113,
                      1114
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  "initializer": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1117,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 60
                      },
                      "start": {
                        "column": 12,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1113,
                    1118
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 30,
                  "line": 59
                }
              }
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInAmbientContext",
              "optional": false,
              "range": [
                1082,
                1102
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 59
                }
              }
            },
            "range": [
              1077,
              1124
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FineAlias",
              "optional": false,
              "range": [
                1137,
                1146
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 63
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumInAmbientContext",
                "optional": false,
                "range": [
                  1149,
                  1169
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 63
                  },
                  "start": {
                    "column": 23,
                    "line": 63
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1170,
                  1171
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 63
                  },
                  "start": {
                    "column": 44,
                    "line": 63
                  }
                }
              },
              "range": [
                1149,
                1171
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 63
                },
                "start": {
                  "column": 23,
                  "line": 63
                }
              }
            },
            "range": [
              1130,
              1172
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1007,
          1174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 31,
            "line": 55
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          994,
          1006
        ],
        "decorators": [],
        "name": "AmbientStuff",
        "optional": false,
        "loc": {
          "end": {
            "column": 30,
            "line": 55
          },
          "start": {
            "column": 18,
            "line": 55
          }
        }
      },
      "kind": "namespace",
      "range": [
        976,
        1174
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1202,
                1204
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 67
                },
                "start": {
                  "column": 10,
                  "line": 67
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1198,
                1201
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 67
                },
                "start": {
                  "column": 6,
                  "line": 67
                }
              }
            },
            "range": [
              1197,
              1204
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 67
              },
              "start": {
                "column": 5,
                "line": 67
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1193,
            1204
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 67
            },
            "start": {
              "column": 1,
              "line": 67
            }
          }
        },
        "optional": false,
        "range": [
          1192,
          1207
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 67
          },
          "start": {
            "column": 0,
            "line": 67
          }
        }
      },
      "range": [
        1192,
        1208
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1221,
                1223
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 68
                },
                "start": {
                  "column": 12,
                  "line": 68
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1216,
                1219
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 68
                },
                "start": {
                  "column": 7,
                  "line": 68
                }
              }
            },
            "range": [
              1214,
              1223
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 68
              },
              "start": {
                "column": 5,
                "line": 68
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1210,
            1223
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 68
            },
            "start": {
              "column": 1,
              "line": 68
            }
          }
        },
        "optional": false,
        "range": [
          1209,
          1226
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        1209,
        1227
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1242,
                1244
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 69
                },
                "start": {
                  "column": 14,
                  "line": 69
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1236,
                1239
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 69
                },
                "start": {
                  "column": 8,
                  "line": 69
                }
              }
            },
            "range": [
              1234,
              1244
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1229,
            1244
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 69
            },
            "start": {
              "column": 1,
              "line": 69
            }
          }
        },
        "optional": false,
        "range": [
          1228,
          1247
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1228,
        1248
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1273,
                1275
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 72
                },
                "start": {
                  "column": 11,
                  "line": 72
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1268,
                1271
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 72
                },
                "start": {
                  "column": 6,
                  "line": 72
                }
              }
            },
            "range": [
              1267,
              1276
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 72
              },
              "start": {
                "column": 5,
                "line": 72
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1263,
            1276
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 72
            },
            "start": {
              "column": 1,
              "line": 72
            }
          }
        },
        "optional": false,
        "range": [
          1262,
          1279
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        1262,
        1280
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                1292,
                1294
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 73
                },
                "start": {
                  "column": 11,
                  "line": 73
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1288,
                1291
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 73
                },
                "start": {
                  "column": 7,
                  "line": 73
                }
              }
            },
            "range": [
              1287,
              1294
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 73
              },
              "start": {
                "column": 6,
                "line": 73
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1282,
            1295
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 73
            },
            "start": {
              "column": 1,
              "line": 73
            }
          }
        },
        "optional": false,
        "range": [
          1281,
          1298
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        1281,
        1299
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            1305,
            1307
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 74
            },
            "start": {
              "column": 5,
              "line": 74
            }
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            1301,
            1304
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 74
            },
            "start": {
              "column": 1,
              "line": 74
            }
          }
        },
        "range": [
          1300,
          1307
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        1300,
        1308
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
              "type": "YieldExpression",
              "argument": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1377,
                    1378
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
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1364,
                    1367
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 79
                    },
                    "start": {
                      "column": 11,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1363,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 80
                  },
                  "start": {
                    "column": 10,
                    "line": 79
                  }
                }
              },
              "delegate": false,
              "range": [
                1357,
                1378
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              1357,
              1379
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1405,
                  1406
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 82
                  },
                  "start": {
                    "column": 8,
                    "line": 82
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1392,
                  1395
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 81
                  },
                  "start": {
                    "column": 12,
                    "line": 81
                  }
                }
              },
              "range": [
                1391,
                1406
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 82
                },
                "start": {
                  "column": 11,
                  "line": 81
                }
              }
            },
            "range": [
              1384,
              1407
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          }
        ],
        "range": [
          1351,
          1409
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 16,
            "line": 78
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "range": [
          1345,
          1348
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 78
          },
          "start": {
            "column": 10,
            "line": 78
          }
        }
      },
      "params": [],
      "range": [
        1335,
        1409
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1544,
                      1547
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 86
                      },
                      "start": {
                        "column": 10,
                        "line": 86
                      }
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      1547,
                      1552
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1550,
                        1552
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 86
                        },
                        "start": {
                          "column": 16,
                          "line": 86
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
                        "column": 18,
                        "line": 86
                      },
                      "start": {
                        "column": 13,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1544,
                    1552
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 86
                    },
                    "start": {
                      "column": 10,
                      "line": 86
                    }
                  }
                }
              ],
              "range": [
                1543,
                1553
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 86
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1554,
                1557
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 86
                },
                "start": {
                  "column": 20,
                  "line": 86
                }
              }
            },
            "range": [
              1543,
              1557
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 86
              },
              "start": {
                "column": 9,
                "line": 86
              }
            }
          },
          "optional": false,
          "range": [
            1543,
            1559
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 86
            },
            "start": {
              "column": 9,
              "line": 86
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "range": [
            1535,
            1542
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 86
            },
            "start": {
              "column": 1,
              "line": 86
            }
          }
        },
        "range": [
          1534,
          1559
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 86
          },
          "start": {
            "column": 0,
            "line": 86
          }
        }
      },
      "range": [
        1534,
        1560
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                1656,
                1658
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
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1645,
              1658
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 89
              },
              "start": {
                "column": 9,
                "line": 89
              }
            }
          },
          "optional": false,
          "range": [
            1645,
            1660
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 89
            },
            "start": {
              "column": 9,
              "line": 89
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "range": [
            1637,
            1644
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 89
            },
            "start": {
              "column": 1,
              "line": 89
            }
          }
        },
        "range": [
          1636,
          1660
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 89
          },
          "start": {
            "column": 0,
            "line": 89
          }
        }
      },
      "range": [
        1636,
        1661
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "range": [
              1682,
              1684
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 90
              },
              "start": {
                "column": 20,
                "line": 90
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1671,
            1684
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 90
            },
            "start": {
              "column": 9,
              "line": 90
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "range": [
            1663,
            1670
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 90
            },
            "start": {
              "column": 1,
              "line": 90
            }
          }
        },
        "range": [
          1662,
          1684
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 90
          },
          "start": {
            "column": 0,
            "line": 90
          }
        }
      },
      "range": [
        1662,
        1685
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "expression": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1894,
              1896
            ],
            "body": [],
            "loc": {
              "end": {
                "column": 17,
                "line": 94
              },
              "start": {
                "column": 15,
                "line": 94
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "range": [
            1888,
            1896
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 94
            },
            "start": {
              "column": 9,
              "line": 94
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "range": [
            1880,
            1887
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 94
            },
            "start": {
              "column": 1,
              "line": 94
            }
          }
        },
        "range": [
          1879,
          1896
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 94
          },
          "start": {
            "column": 0,
            "line": 94
          }
        }
      },
      "range": [
        1879,
        1896
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 95
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
