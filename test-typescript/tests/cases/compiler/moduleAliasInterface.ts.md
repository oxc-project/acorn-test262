__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    963
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
              17,
              47
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  40,
                  47
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IMode",
                "optional": false,
                "range": [
                  34,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                24,
                47
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 4
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              51,
              76
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  69,
                  76
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mode",
                "optional": false,
                "range": [
                  64,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                58,
                76
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 6
              }
            }
          }
        ],
        "range": [
          14,
          78
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 14,
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
          13
        ],
        "decorators": [],
        "name": "_modes",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
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
        78
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "modes",
              "optional": false,
              "range": [
                182,
                187
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "range": [
                190,
                196
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "range": [
              175,
              197
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 1,
                "line": 14
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 7,
                        "line": 16
                      }
                    },
                    "range": [
                      207,
                      220
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "modes",
                          "optional": false,
                          "range": [
                            209,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 16
                            },
                            "start": {
                              "column": 9,
                              "line": 16
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "range": [
                            215,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          209,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        209,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 16
                        },
                        "start": {
                          "column": 9,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    205,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  205,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 16
                  },
                  "start": {
                    "column": 5,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              201,
              221
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 16
              },
              "start": {
                "column": 1,
                "line": 16
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                311,
                454
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      316,
                      327
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
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
                      327,
                      364
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        361,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 20
                        },
                        "start": {
                          "column": 47,
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 20
                            },
                            "start": {
                              "column": 16,
                              "line": 20
                            }
                          },
                          "range": [
                            330,
                            343
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "range": [
                                  332,
                                  337
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 20
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "range": [
                                  338,
                                  343
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                332,
                                343
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 20
                                },
                                "start": {
                                  "column": 18,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              332,
                              343
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
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
                          328,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 20
                            },
                            "start": {
                              "column": 33,
                              "line": 20
                            }
                          },
                          "range": [
                            347,
                            359
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "range": [
                                  349,
                                  354
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 20
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "range": [
                                  355,
                                  359
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                349,
                                359
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 20
                                },
                                "start": {
                                  "column": 35,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              349,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 20
                              },
                              "start": {
                                "column": 35,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          345,
                          359
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 20
                          },
                          "start": {
                            "column": 31,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    316,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 20
                    },
                    "start": {
                      "column": 2,
                      "line": 20
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      421,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
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
                      424,
                      450
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        441,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 23
                        },
                        "start": {
                          "column": 29,
                          "line": 21
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          },
                          "range": [
                            427,
                            439
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modes",
                                "optional": false,
                                "range": [
                                  428,
                                  433
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 21
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "range": [
                                  434,
                                  439
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                428,
                                439
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 21
                                },
                                "start": {
                                  "column": 16,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              428,
                              439
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 21
                              },
                              "start": {
                                "column": 16,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          425,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 13,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    414,
                    450
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 23
                    },
                    "start": {
                      "column": 2,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "range": [
                307,
                310
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 7,
                  "line": 19
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              301,
              454
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 24
              },
              "start": {
                "column": 1,
                "line": 19
              }
            }
          }
        ],
        "range": [
          172,
          456
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 14,
            "line": 13
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          165,
          171
        ],
        "decorators": [],
        "name": "editor",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "kind": "module",
      "range": [
        158,
        456
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "modesOuter",
        "optional": false,
        "range": [
          465,
          475
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 27
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "_modes",
        "optional": false,
        "range": [
          478,
          484
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 27
          },
          "start": {
            "column": 20,
            "line": 27
          }
        }
      },
      "range": [
        458,
        485
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 30
                      },
                      "start": {
                        "column": 7,
                        "line": 30
                      }
                    },
                    "range": [
                      512,
                      530
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "modesOuter",
                          "optional": false,
                          "range": [
                            514,
                            524
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 30
                            },
                            "start": {
                              "column": 9,
                              "line": 30
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "range": [
                            525,
                            530
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 30
                            },
                            "start": {
                              "column": 20,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          514,
                          530
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 30
                          },
                          "start": {
                            "column": 9,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        514,
                        530
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 30
                        },
                        "start": {
                          "column": 9,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    510,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 30
                    },
                    "start": {
                      "column": 5,
                      "line": 30
                    }
                  }
                },
                "init": null,
                "range": [
                  510,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 30
                  },
                  "start": {
                    "column": 5,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              506,
              531
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 30
              },
              "start": {
                "column": 1,
                "line": 30
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                545,
                673
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      552,
                      563
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 5,
                        "line": 33
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
                      563,
                      610
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        607,
                        610
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 33
                        },
                        "start": {
                          "column": 60,
                          "line": 33
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 33
                            },
                            "start": {
                              "column": 19,
                              "line": 33
                            }
                          },
                          "range": [
                            566,
                            584
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false,
                                "range": [
                                  568,
                                  578
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 33
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "range": [
                                  579,
                                  584
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                568,
                                584
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 33
                                },
                                "start": {
                                  "column": 21,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              568,
                              584
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 33
                              },
                              "start": {
                                "column": 21,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          564,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 33
                            },
                            "start": {
                              "column": 41,
                              "line": 33
                            }
                          },
                          "range": [
                            588,
                            605
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false,
                                "range": [
                                  590,
                                  600
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 33
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "range": [
                                  601,
                                  605
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                590,
                                605
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 33
                                },
                                "start": {
                                  "column": 43,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              590,
                              605
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 33
                              },
                              "start": {
                                "column": 43,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          586,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 33
                          },
                          "start": {
                            "column": 39,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 33
                      },
                      "start": {
                        "column": 16,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    552,
                    610
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 33
                    },
                    "start": {
                      "column": 5,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "range": [
                541,
                544
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 7,
                  "line": 32
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              535,
              673
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 35
              },
              "start": {
                "column": 1,
                "line": 32
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
                    691,
                    709
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        707,
                        709
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 37
                        },
                        "start": {
                          "column": 31,
                          "line": 37
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "range": [
                        704,
                        707
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 37
                        },
                        "start": {
                          "column": 28,
                          "line": 37
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      698,
                      709
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 37
                      },
                      "start": {
                        "column": 22,
                        "line": 37
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 37
                    },
                    "start": {
                      "column": 15,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                689,
                711
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                685,
                688
              ],
              "decorators": [],
              "name": "Foo",
              "optional": false,
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
            "kind": "module",
            "range": [
              678,
              711
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                727,
                788
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      735,
                      746
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 40
                      },
                      "start": {
                        "column": 6,
                        "line": 40
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
                      746,
                      784
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        781,
                        784
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 40
                        },
                        "start": {
                          "column": 52,
                          "line": 40
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
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 40
                            },
                            "start": {
                              "column": 20,
                              "line": 40
                            }
                          },
                          "range": [
                            749,
                            758
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "range": [
                                  751,
                                  754
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 40
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "range": [
                                  755,
                                  758
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 40
                                  }
                                }
                              },
                              "range": [
                                751,
                                758
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 40
                                },
                                "start": {
                                  "column": 22,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              751,
                              758
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 40
                              },
                              "start": {
                                "column": 22,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          747,
                          758
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 40
                          },
                          "start": {
                            "column": 18,
                            "line": 40
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 40
                            },
                            "start": {
                              "column": 33,
                              "line": 40
                            }
                          },
                          "range": [
                            762,
                            779
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "modesOuter",
                                "optional": false,
                                "range": [
                                  764,
                                  774
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 40
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "range": [
                                  775,
                                  779
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 40
                                  }
                                }
                              },
                              "range": [
                                764,
                                779
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 40
                                },
                                "start": {
                                  "column": 35,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              764,
                              779
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 40
                              },
                              "start": {
                                "column": 35,
                                "line": 40
                              }
                            }
                          }
                        },
                        "range": [
                          760,
                          779
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 40
                          },
                          "start": {
                            "column": 31,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 40
                      },
                      "start": {
                        "column": 17,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    735,
                    784
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 40
                    },
                    "start": {
                      "column": 6,
                      "line": 40
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 41
                },
                "start": {
                  "column": 13,
                  "line": 39
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug2",
              "optional": false,
              "range": [
                722,
                726
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              716,
              788
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 39
              }
            }
          }
        ],
        "range": [
          501,
          790
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 15,
            "line": 28
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          493,
          500
        ],
        "decorators": [],
        "name": "editor2",
        "optional": false,
        "loc": {
          "end": {
            "column": 14,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "kind": "module",
      "range": [
        486,
        790
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 28
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
              808,
              832
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  830,
                  832
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 45
                  },
                  "start": {
                    "column": 26,
                    "line": 45
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1I1",
                "optional": false,
                "range": [
                  825,
                  829
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                }
              },
              "range": [
                815,
                832
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 28,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              837,
              857
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  855,
                  857
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1C1",
                "optional": false,
                "range": [
                  850,
                  854
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                844,
                857
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 46
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
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
          802,
          859
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 10,
            "line": 44
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          799,
          801
        ],
        "decorators": [],
        "name": "A1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "kind": "module",
      "range": [
        792,
        859
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1Alias1",
              "optional": false,
              "range": [
                884,
                892
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 50
                },
                "start": {
                  "column": 11,
                  "line": 50
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "range": [
                895,
                897
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 50
                },
                "start": {
                  "column": 22,
                  "line": 50
                }
              }
            },
            "range": [
              877,
              898
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 52
                      },
                      "start": {
                        "column": 10,
                        "line": 52
                      }
                    },
                    "range": [
                      914,
                      929
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1Alias1",
                          "optional": false,
                          "range": [
                            916,
                            924
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 52
                            },
                            "start": {
                              "column": 12,
                              "line": 52
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1I1",
                          "optional": false,
                          "range": [
                            925,
                            929
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 52
                            },
                            "start": {
                              "column": 21,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          916,
                          929
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 52
                          },
                          "start": {
                            "column": 12,
                            "line": 52
                          }
                        }
                      },
                      "range": [
                        916,
                        929
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 52
                        },
                        "start": {
                          "column": 12,
                          "line": 52
                        }
                      }
                    }
                  },
                  "range": [
                    912,
                    929
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                "init": null,
                "range": [
                  912,
                  929
                ],
                "loc": {
                  "end": {
                    "column": 25,
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
              908,
              930
            ],
            "loc": {
              "end": {
                "column": 26,
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 53
                      },
                      "start": {
                        "column": 10,
                        "line": 53
                      }
                    },
                    "range": [
                      944,
                      959
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1Alias1",
                          "optional": false,
                          "range": [
                            946,
                            954
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 53
                            },
                            "start": {
                              "column": 12,
                              "line": 53
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1C1",
                          "optional": false,
                          "range": [
                            955,
                            959
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 53
                            },
                            "start": {
                              "column": 21,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          946,
                          959
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 53
                          },
                          "start": {
                            "column": 12,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        946,
                        959
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 53
                        },
                        "start": {
                          "column": 12,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    942,
                    959
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
                },
                "init": null,
                "range": [
                  942,
                  959
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
              938,
              960
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
          }
        ],
        "range": [
          871,
          962
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 10,
            "line": 49
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          868,
          870
        ],
        "decorators": [],
        "name": "B1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 49
          },
          "start": {
            "column": 7,
            "line": 49
          }
        }
      },
      "kind": "module",
      "range": [
        861,
        962
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
