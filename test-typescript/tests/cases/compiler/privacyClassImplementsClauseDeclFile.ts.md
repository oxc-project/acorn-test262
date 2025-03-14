__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2568
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        1041
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                33,
                87
              ],
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "body": {
                  "type": "TSInterfaceBody",
                  "range": [
                    80,
                    87
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "range": [
                    50,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "range": [
                  40,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  134,
                  141
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceInPublicModule",
                "optional": false,
                "range": [
                  103,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "range": [
                93,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  242,
                  249
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 99,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingPublicInterfaceInModule",
                "optional": false,
                "range": [
                  153,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "range": [
                      212,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 8
                      },
                      "start": {
                        "column": 69,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    212,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 8
                    },
                    "start": {
                      "column": 69,
                      "line": 8
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                147,
                249
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
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  351,
                  358
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 101,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "range": [
                  260,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "range": [
                      320,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 10
                      },
                      "start": {
                        "column": 70,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    320,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 10
                    },
                    "start": {
                      "column": 70,
                      "line": 10
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                254,
                358
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                363,
                471
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    464,
                    471
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 105,
                      "line": 12
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPublicInterfaceInModule",
                  "optional": false,
                  "range": [
                    376,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  }
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "range": [
                        434,
                        463
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 12
                        },
                        "start": {
                          "column": 75,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      434,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 12
                      },
                      "start": {
                        "column": 75,
                        "line": 12
                      }
                    }
                  }
                ],
                "superClass": null,
                "range": [
                  370,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                476,
                602
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    579,
                    602
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 107,
                      "line": 14
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPrivateInterfaceInModule",
                  "optional": false,
                  "range": [
                    489,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "range": [
                        548,
                        578
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 14
                        },
                        "start": {
                          "column": 76,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      548,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 14
                      },
                      "start": {
                        "column": 76,
                        "line": 14
                      }
                    }
                  }
                ],
                "superClass": null,
                "range": [
                  483,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  721,
                  728
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 117,
                    "line": 17
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "range": [
                  614,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        676,
                        689
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 17
                        },
                        "start": {
                          "column": 72,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "range": [
                        690,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 116,
                          "line": 17
                        },
                        "start": {
                          "column": 86,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      676,
                      720
                    ],
                    "loc": {
                      "end": {
                        "column": 116,
                        "line": 17
                      },
                      "start": {
                        "column": 72,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    676,
                    720
                  ],
                  "loc": {
                    "end": {
                      "column": 116,
                      "line": 17
                    },
                    "start": {
                      "column": 72,
                      "line": 17
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                608,
                728
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                733,
                875
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    852,
                    875
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 20
                    },
                    "start": {
                      "column": 123,
                      "line": 19
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingFromPrivateModuleInterface",
                  "optional": false,
                  "range": [
                    746,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 19
                    },
                    "start": {
                      "column": 17,
                      "line": 19
                    }
                  }
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateModule",
                        "optional": false,
                        "range": [
                          807,
                          820
                        ],
                        "loc": {
                          "end": {
                            "column": 91,
                            "line": 19
                          },
                          "start": {
                            "column": 78,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicInterfaceInPrivateModule",
                        "optional": false,
                        "range": [
                          821,
                          851
                        ],
                        "loc": {
                          "end": {
                            "column": 122,
                            "line": 19
                          },
                          "start": {
                            "column": 92,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        807,
                        851
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 19
                        },
                        "start": {
                          "column": 78,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      807,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 19
                      },
                      "start": {
                        "column": 78,
                        "line": 19
                      }
                    }
                  }
                ],
                "superClass": null,
                "range": [
                  740,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                881,
                1039
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    1016,
                    1039
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 23
                    },
                    "start": {
                      "column": 139,
                      "line": 22
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassImplementingPrivateAndPublicInterface",
                  "optional": false,
                  "range": [
                    894,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 22
                    },
                    "start": {
                      "column": 17,
                      "line": 22
                    }
                  }
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateInterfaceInPublicModule",
                      "optional": false,
                      "range": [
                        954,
                        984
                      ],
                      "loc": {
                        "end": {
                          "column": 107,
                          "line": 22
                        },
                        "start": {
                          "column": 77,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      954,
                      984
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 22
                      },
                      "start": {
                        "column": 77,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSClassImplements",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPublicModule",
                      "optional": false,
                      "range": [
                        986,
                        1015
                      ],
                      "loc": {
                        "end": {
                          "column": 138,
                          "line": 22
                        },
                        "start": {
                          "column": 109,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      986,
                      1015
                    ],
                    "loc": {
                      "end": {
                        "column": 138,
                        "line": 22
                      },
                      "start": {
                        "column": 109,
                        "line": 22
                      }
                    }
                  }
                ],
                "superClass": null,
                "range": [
                  888,
                  1039
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            }
          ],
          "range": [
            27,
            1041
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            26
          ],
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          1041
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 1
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
              1070,
              1126
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1118,
                  1126
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 52,
                    "line": 27
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "range": [
                  1087,
                  1117
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 27
                  },
                  "start": {
                    "column": 21,
                    "line": 27
                  }
                }
              },
              "range": [
                1077,
                1126
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1174,
                1181
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 46,
                  "line": 31
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPrivateModule",
              "optional": false,
              "range": [
                1142,
                1173
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 31
                },
                "start": {
                  "column": 14,
                  "line": 31
                }
              }
            },
            "range": [
              1132,
              1181
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
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
                1283,
                1290
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 100,
                  "line": 34
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "range": [
                1193,
                1240
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPrivateModule",
                  "optional": false,
                  "range": [
                    1252,
                    1282
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 34
                    },
                    "start": {
                      "column": 69,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1252,
                  1282
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 34
                  },
                  "start": {
                    "column": 69,
                    "line": 34
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              1187,
              1290
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1393,
                1400
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 102,
                  "line": 36
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "range": [
                1301,
                1349
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 36
                },
                "start": {
                  "column": 10,
                  "line": 36
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPrivateModule",
                  "optional": false,
                  "range": [
                    1361,
                    1392
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 36
                    },
                    "start": {
                      "column": 70,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1361,
                  1392
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 36
                  },
                  "start": {
                    "column": 70,
                    "line": 36
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              1295,
              1400
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1405,
              1514
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1507,
                  1514
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 106,
                    "line": 38
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "range": [
                  1418,
                  1464
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 38
                  },
                  "start": {
                    "column": 17,
                    "line": 38
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "range": [
                      1476,
                      1506
                    ],
                    "loc": {
                      "end": {
                        "column": 105,
                        "line": 38
                      },
                      "start": {
                        "column": 75,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1476,
                    1506
                  ],
                  "loc": {
                    "end": {
                      "column": 105,
                      "line": 38
                    },
                    "start": {
                      "column": 75,
                      "line": 38
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                1412,
                1514
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1519,
              1631
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1623,
                  1631
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 108,
                    "line": 40
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "range": [
                  1532,
                  1579
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 40
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPrivateModule",
                    "optional": false,
                    "range": [
                      1591,
                      1622
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 40
                      },
                      "start": {
                        "column": 76,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1591,
                    1622
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 40
                    },
                    "start": {
                      "column": 76,
                      "line": 40
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                1526,
                1631
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1750,
                1757
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 117,
                  "line": 43
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingFromPrivateModuleInterface",
              "optional": false,
              "range": [
                1643,
                1693
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 43
                },
                "start": {
                  "column": 10,
                  "line": 43
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "range": [
                      1705,
                      1718
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 43
                      },
                      "start": {
                        "column": 72,
                        "line": 43
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPrivateModule",
                    "optional": false,
                    "range": [
                      1719,
                      1749
                    ],
                    "loc": {
                      "end": {
                        "column": 116,
                        "line": 43
                      },
                      "start": {
                        "column": 86,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1705,
                    1749
                  ],
                  "loc": {
                    "end": {
                      "column": 116,
                      "line": 43
                    },
                    "start": {
                      "column": 72,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1705,
                  1749
                ],
                "loc": {
                  "end": {
                    "column": 116,
                    "line": 43
                  },
                  "start": {
                    "column": 72,
                    "line": 43
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              1637,
              1757
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1762,
              1888
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1881,
                  1888
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 123,
                    "line": 45
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingFromPrivateModuleInterface",
                "optional": false,
                "range": [
                  1775,
                  1824
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 45
                  },
                  "start": {
                    "column": 17,
                    "line": 45
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "range": [
                        1836,
                        1849
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 45
                        },
                        "start": {
                          "column": 78,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicInterfaceInPrivateModule",
                      "optional": false,
                      "range": [
                        1850,
                        1880
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 45
                        },
                        "start": {
                          "column": 92,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1836,
                      1880
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 45
                      },
                      "start": {
                        "column": 78,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1836,
                    1880
                  ],
                  "loc": {
                    "end": {
                      "column": 122,
                      "line": 45
                    },
                    "start": {
                      "column": 78,
                      "line": 45
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                1769,
                1888
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1064,
          1890
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 21,
            "line": 26
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1050,
          1063
        ],
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "kind": "module",
      "range": [
        1043,
        1890
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1892,
        1929
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            1925,
            1929
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 51
            },
            "start": {
              "column": 33,
              "line": 49
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterface",
          "optional": false,
          "range": [
            1909,
            1924
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 49
            },
            "start": {
              "column": 17,
              "line": 49
            }
          }
        },
        "range": [
          1899,
          1929
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
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
          1958,
          1961
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 27,
            "line": 53
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterface",
        "optional": false,
        "range": [
          1941,
          1957
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 53
          },
          "start": {
            "column": 10,
            "line": 53
          }
        }
      },
      "range": [
        1931,
        1961
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2036,
          2039
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 73,
            "line": 56
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingPublicInterface",
        "optional": false,
        "range": [
          1969,
          2008
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 56
          },
          "start": {
            "column": 6,
            "line": 56
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterface",
            "optional": false,
            "range": [
              2020,
              2035
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 56
              },
              "start": {
                "column": 57,
                "line": 56
              }
            }
          },
          "range": [
            2020,
            2035
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 56
            },
            "start": {
              "column": 57,
              "line": 56
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        1963,
        2039
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2123,
          2126
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 83,
            "line": 58
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingPrivateInterfaceInModule",
        "optional": false,
        "range": [
          2046,
          2094
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 58
          },
          "start": {
            "column": 6,
            "line": 58
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "privateInterface",
            "optional": false,
            "range": [
              2106,
              2122
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 58
              },
              "start": {
                "column": 66,
                "line": 58
              }
            }
          },
          "range": [
            2106,
            2122
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 58
            },
            "start": {
              "column": 66,
              "line": 58
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        2040,
        2126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2127,
        2209
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            2206,
            2209
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 61
            },
            "start": {
              "column": 79,
              "line": 60
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingPublicInterface",
          "optional": false,
          "range": [
            2140,
            2178
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 60
            },
            "start": {
              "column": 13,
              "line": 60
            }
          }
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterface",
              "optional": false,
              "range": [
                2190,
                2205
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 60
                },
                "start": {
                  "column": 63,
                  "line": 60
                }
              }
            },
            "range": [
              2190,
              2205
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 60
              },
              "start": {
                "column": 63,
                "line": 60
              }
            }
          }
        ],
        "superClass": null,
        "range": [
          2134,
          2209
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 7,
            "line": 60
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2210,
        2310
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            2291,
            2310
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 63
            },
            "start": {
              "column": 81,
              "line": 62
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingPrivateInterface",
          "optional": false,
          "range": [
            2223,
            2262
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 62
            },
            "start": {
              "column": 13,
              "line": 62
            }
          }
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterface",
              "optional": false,
              "range": [
                2274,
                2290
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 62
                },
                "start": {
                  "column": 64,
                  "line": 62
                }
              }
            },
            "range": [
              2274,
              2290
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 62
              },
              "start": {
                "column": 64,
                "line": 62
              }
            }
          }
        ],
        "superClass": null,
        "range": [
          2217,
          2310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 7,
            "line": 62
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 62
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2425,
          2428
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 113,
            "line": 65
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassImplementingFromPrivateModuleInterface",
        "optional": false,
        "range": [
          2318,
          2368
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 65
          },
          "start": {
            "column": 6,
            "line": 65
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateModule",
              "optional": false,
              "range": [
                2380,
                2393
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 65
                },
                "start": {
                  "column": 68,
                  "line": 65
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicInterfaceInPrivateModule",
              "optional": false,
              "range": [
                2394,
                2424
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 65
                },
                "start": {
                  "column": 82,
                  "line": 65
                }
              }
            },
            "range": [
              2380,
              2424
            ],
            "loc": {
              "end": {
                "column": 112,
                "line": 65
              },
              "start": {
                "column": 68,
                "line": 65
              }
            }
          },
          "range": [
            2380,
            2424
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 65
            },
            "start": {
              "column": 68,
              "line": 65
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        2312,
        2428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2429,
        2567
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            2548,
            2567
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 68
            },
            "start": {
              "column": 119,
              "line": 67
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassImplementingFromPrivateModuleInterface",
          "optional": false,
          "range": [
            2442,
            2491
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 67
            },
            "start": {
              "column": 13,
              "line": 67
            }
          }
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateModule",
                "optional": false,
                "range": [
                  2503,
                  2516
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 67
                  },
                  "start": {
                    "column": 74,
                    "line": 67
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPrivateModule",
                "optional": false,
                "range": [
                  2517,
                  2547
                ],
                "loc": {
                  "end": {
                    "column": 118,
                    "line": 67
                  },
                  "start": {
                    "column": 88,
                    "line": 67
                  }
                }
              },
              "range": [
                2503,
                2547
              ],
              "loc": {
                "end": {
                  "column": 118,
                  "line": 67
                },
                "start": {
                  "column": 74,
                  "line": 67
                }
              }
            },
            "range": [
              2503,
              2547
            ],
            "loc": {
              "end": {
                "column": 118,
                "line": 67
              },
              "start": {
                "column": 74,
                "line": 67
              }
            }
          }
        ],
        "superClass": null,
        "range": [
          2436,
          2567
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 7,
            "line": 67
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 69
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
    736
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
              34,
              88
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  81,
                  88
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 51,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceInPublicModule",
                "optional": false,
                "range": [
                  51,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "range": [
                41,
                88
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                135,
                142
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 45,
                  "line": 5
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceInPublicModule",
              "optional": false,
              "range": [
                104,
                134
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              94,
              142
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                243,
                250
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 99,
                  "line": 8
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPublicInterfaceInModule",
              "optional": false,
              "range": [
                154,
                201
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceInPublicModule",
                  "optional": false,
                  "range": [
                    213,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 8
                    },
                    "start": {
                      "column": 69,
                      "line": 8
                    }
                  }
                },
                "range": [
                  213,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 8
                  },
                  "start": {
                    "column": 69,
                    "line": 8
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              148,
              250
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                352,
                359
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 101,
                  "line": 10
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassImplementingPrivateInterfaceInModule",
              "optional": false,
              "range": [
                261,
                309
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateInterfaceInPublicModule",
                  "optional": false,
                  "range": [
                    321,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 10
                    },
                    "start": {
                      "column": 70,
                      "line": 10
                    }
                  }
                },
                "range": [
                  321,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 10
                  },
                  "start": {
                    "column": 70,
                    "line": 10
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              255,
              359
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              364,
              472
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  465,
                  472
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 105,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPublicInterfaceInModule",
                "optional": false,
                "range": [
                  377,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicInterfaceInPublicModule",
                    "optional": false,
                    "range": [
                      435,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 12
                      },
                      "start": {
                        "column": 75,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    435,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 12
                    },
                    "start": {
                      "column": 75,
                      "line": 12
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                371,
                472
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              477,
              603
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  580,
                  603
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 107,
                    "line": 14
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassImplementingPrivateInterfaceInModule",
                "optional": false,
                "range": [
                  490,
                  537
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateInterfaceInPublicModule",
                    "optional": false,
                    "range": [
                      549,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 14
                      },
                      "start": {
                        "column": 76,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    549,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 106,
                      "line": 14
                    },
                    "start": {
                      "column": 76,
                      "line": 14
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                484,
                603
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          28,
          605
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 28,
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
          27
        ],
        "decorators": [],
        "name": "publicModuleInGlobal",
        "optional": false,
        "loc": {
          "end": {
            "column": 27,
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
        605
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          640,
          643
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 34,
            "line": 17
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicInterfaceInGlobal",
        "optional": false,
        "range": [
          616,
          639
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 17
          },
          "start": {
            "column": 10,
            "line": 17
          }
        }
      },
      "range": [
        606,
        643
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          732,
          735
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 88,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "publicClassImplementingPublicInterfaceInGlobal",
        "optional": false,
        "range": [
          650,
          696
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "publicInterfaceInGlobal",
            "optional": false,
            "range": [
              708,
              731
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 19
              },
              "start": {
                "column": 64,
                "line": 19
              }
            }
          },
          "range": [
            708,
            731
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 19
            },
            "start": {
              "column": 64,
              "line": 19
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        644,
        735
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
