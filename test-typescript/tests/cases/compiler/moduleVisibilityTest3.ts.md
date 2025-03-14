__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    442
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                62,
                69
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 8
                },
                "start": {
                  "column": 12,
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
                57,
                61
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 6
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              51,
              69
            ],
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
          71
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
        71
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
                174,
                179
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
                182,
                188
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
              167,
              189
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
                      199,
                      212
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
                            201,
                            206
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
                            207,
                            212
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
                          201,
                          212
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
                        201,
                        212
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
                    197,
                    212
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
                  197,
                  212
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
              193,
              213
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
                303,
                439
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      310,
                      321
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 5,
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
                      321,
                      431
                    ],
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 21
                                    }
                                  },
                                  "range": [
                                    412,
                                    423
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
                                          413,
                                          418
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 15,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Mode",
                                        "optional": false,
                                        "range": [
                                          419,
                                          423
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        413,
                                        423
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 15,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "range": [
                                      413,
                                      423
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 21
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  411,
                                  423
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 21
                                  }
                                }
                              },
                              "init": null,
                              "range": [
                                411,
                                423
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 21
                                },
                                "start": {
                                  "column": 13,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            407,
                            424
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 21
                            },
                            "start": {
                              "column": 9,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        349,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 22
                        },
                        "start": {
                          "column": 44,
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
                              "column": 26,
                              "line": 20
                            },
                            "start": {
                              "column": 19,
                              "line": 20
                            }
                          },
                          "range": [
                            324,
                            331
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "modes",
                              "optional": false,
                              "range": [
                                326,
                                331
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 20
                                },
                                "start": {
                                  "column": 21,
                                  "line": 20
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
                                "line": 20
                              },
                              "start": {
                                "column": 21,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          322,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 20
                          },
                          "start": {
                            "column": 17,
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
                              "column": 42,
                              "line": 20
                            },
                            "start": {
                              "column": 30,
                              "line": 20
                            }
                          },
                          "range": [
                            335,
                            347
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
                                  337,
                                  342
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 32,
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
                                  343,
                                  347
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                337,
                                347
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 20
                                },
                                "start": {
                                  "column": 32,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              337,
                              347
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 20
                              },
                              "start": {
                                "column": 32,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          333,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 20
                          },
                          "start": {
                            "column": 28,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 22
                      },
                      "start": {
                        "column": 16,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    310,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 22
                    },
                    "start": {
                      "column": 5,
                      "line": 20
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
                299,
                302
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
              293,
              439
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
          164,
          441
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
          157,
          163
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
        150,
        441
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
    }
  ],
  "sourceType": "script",
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
