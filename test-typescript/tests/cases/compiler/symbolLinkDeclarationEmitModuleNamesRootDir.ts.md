__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    51
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        51
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  33,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 1
                  },
                  "start": {
                    "column": 33,
                    "line": 1
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                },
                "range": [
                  37,
                  44
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      39,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 39,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    39,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 39,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                30,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 46,
                "line": 1
              }
            },
            "range": [
              46,
              50
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  49,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 1
                  },
                  "start": {
                    "column": 49,
                    "line": 1
                  }
                }
              },
              "range": [
                49,
                50
              ],
              "loc": {
                "end": {
                  "column": 50,
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
            29,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            26
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
                  24,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          51
        ],
        "loc": {
          "end": {
            "column": 51,
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
          "column": 51,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 51,
      "line": 1
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
    176
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./value-promise\"",
        "value": "./value-promise",
        "range": [
          28,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 28,
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
            "name": "Constructor",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "name": "Constructor",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
        45
      ],
      "loc": {
        "end": {
          "column": 45,
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
        46,
        175
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            81,
            175
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
                "name": "__type",
                "optional": false,
                "range": [
                  94,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                },
                "range": [
                  100,
                  103
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      102,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    102,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                }
              },
              "value": null,
              "range": [
                85,
                104
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "range": [
                  114,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  120,
                  173
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
                    "name": "ctor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 4
                        },
                        "start": {
                          "column": 48,
                          "line": 4
                        }
                      },
                      "range": [
                        153,
                        156
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            155,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 4
                            },
                            "start": {
                              "column": 50,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          155,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 4
                          },
                          "start": {
                            "column": 50,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      149,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 4
                      },
                      "start": {
                        "column": 44,
                        "line": 4
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 4
                    },
                    "start": {
                      "column": 52,
                      "line": 4
                    }
                  },
                  "range": [
                    157,
                    172
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        169,
                        172
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
                              170,
                              171
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 4
                              },
                              "start": {
                                "column": 65,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            170,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 4
                            },
                            "start": {
                              "column": 65,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 4
                        },
                        "start": {
                          "column": 64,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BindingKey",
                      "optional": false,
                      "range": [
                        159,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 4
                        },
                        "start": {
                          "column": 54,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      159,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 4
                      },
                      "start": {
                        "column": 54,
                        "line": 4
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  },
                  "range": [
                    120,
                    148
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            142,
                            147
                          ],
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "range": [
                                143,
                                146
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 4
                                },
                                "start": {
                                  "column": 38,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 4
                            },
                            "start": {
                              "column": 37,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "range": [
                            131,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          131,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
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
                          121,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        121,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                107,
                173
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 35,
              "line": 2
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BindingKey",
          "optional": false,
          "range": [
            67,
            77
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 31,
              "line": 2
            }
          },
          "range": [
            77,
            80
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
                  78,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          53,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
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
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
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
    71
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./src/value-promise\"",
        "value": "./src/value-promise",
        "range": [
          14,
          35
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./src/bindingkey\"",
        "value": "./src/bindingkey",
        "range": [
          51,
          69
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "range": [
        37,
        70
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
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
    97
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"@loopback/context\"",
        "value": "@loopback/context",
        "range": [
          28,
          47
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 1
          },
          "start": {
            "column": 28,
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
            "name": "Constructor",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "name": "Constructor",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
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
            20
          ],
          "loc": {
            "end": {
              "column": 20,
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
        48
      ],
      "loc": {
        "end": {
          "column": 48,
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
        49,
        96
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ControllerClass",
          "optional": false,
          "range": [
            61,
            76
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              90,
              95
            ],
            "params": [
              {
                "type": "TSAnyKeyword",
                "range": [
                  91,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 42,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 2
              },
              "start": {
                "column": 41,
                "line": 2
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "range": [
              79,
              90
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            }
          },
          "range": [
            79,
            95
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 2
            },
            "start": {
              "column": 30,
              "line": 2
            }
          }
        },
        "range": [
          56,
          96
        ],
        "loc": {
          "end": {
            "column": 47,
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
          "column": 47,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
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
    199
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./application'",
        "value": "./application",
        "range": [
          32,
          47
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 1
          },
          "start": {
            "column": 32,
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
            "name": "ControllerClass",
            "optional": false,
            "range": [
              9,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "name": "ControllerClass",
            "optional": false,
            "range": [
              9,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
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
            24
          ],
          "loc": {
            "end": {
              "column": 24,
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
        48
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'@loopback/context'",
        "value": "@loopback/context",
        "range": [
          76,
          95
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 2
          },
          "start": {
            "column": 27,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "BindingKey",
            "optional": false,
            "range": [
              58,
              68
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "BindingKey",
            "optional": false,
            "range": [
              58,
              68
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            58,
            68
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        49,
        96
      ],
      "loc": {
        "end": {
          "column": 47,
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
        98,
        178
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
              "name": "CONTROLLER_CLASS",
              "optional": false,
              "range": [
                111,
                127
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      165,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 4
                      },
                      "start": {
                        "column": 67,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      173,
                      176
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
                  },
                  "range": [
                    165,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 4
                    },
                    "start": {
                      "column": 67,
                      "line": 4
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
                  "name": "BindingKey",
                  "optional": false,
                  "range": [
                    130,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "create",
                  "optional": false,
                  "range": [
                    141,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 4
                    },
                    "start": {
                      "column": 43,
                      "line": 4
                    }
                  }
                },
                "range": [
                  130,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  147,
                  164
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ControllerClass",
                      "optional": false,
                      "range": [
                        148,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 4
                        },
                        "start": {
                          "column": 50,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      148,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 4
                      },
                      "start": {
                        "column": 50,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 4
                  },
                  "start": {
                    "column": 49,
                    "line": 4
                  }
                }
              },
              "range": [
                130,
                177
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 4
                }
              }
            },
            "range": [
              111,
              177
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          105,
          178
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 4
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
          "column": 80,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
