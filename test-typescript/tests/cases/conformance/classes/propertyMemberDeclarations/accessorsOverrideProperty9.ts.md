__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    60,
    1179
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        60,
        120
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
            72,
            83
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  102,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 4
                  },
                  "start": {
                    "column": 46,
                    "line": 4
                  }
                },
                "range": [
                  106,
                  113
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      108,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 4
                      },
                      "start": {
                        "column": 48,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    108,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 4
                    },
                    "start": {
                      "column": 48,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                99,
                113
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 4
                },
                "start": {
                  "column": 39,
                  "line": 4
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 4
              },
              "start": {
                "column": 55,
                "line": 4
              }
            },
            "range": [
              115,
              119
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  118,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 4
                  },
                  "start": {
                    "column": 58,
                    "line": 4
                  }
                }
              },
              "range": [
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 4
                },
                "start": {
                  "column": 58,
                  "line": 4
                }
              }
            }
          },
          "range": [
            94,
            119
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 4
            },
            "start": {
              "column": 34,
              "line": 4
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 23,
              "line": 4
            }
          },
          "range": [
            83,
            91
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  88,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
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
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                84,
                90
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          67,
          120
        ],
        "loc": {
          "end": {
            "column": 60,
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
          "column": 60,
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
        121,
        176
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PropertiesOf",
          "optional": false,
          "range": [
            133,
            145
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 44,
                    "line": 5
                  }
                }
              },
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 44,
                  "line": 5
                }
              }
            },
            "range": [
              159,
              166
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 38,
                "line": 5
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              154,
              155
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 33,
                "line": 5
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  171,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              },
              "range": [
                171,
                172
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 50,
                  "line": 5
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  169,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 48,
                    "line": 5
                  }
                }
              },
              "range": [
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 5
                },
                "start": {
                  "column": 48,
                  "line": 5
                }
              }
            },
            "range": [
              169,
              173
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 5
              },
              "start": {
                "column": 48,
                "line": 5
              }
            }
          },
          "range": [
            151,
            175
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 5
            },
            "start": {
              "column": 30,
              "line": 5
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          },
          "range": [
            145,
            148
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
                  146,
                  147
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          128,
          176
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 55,
          "line": 5
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
          267,
          269
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 91,
            "line": 7
          },
          "start": {
            "column": 89,
            "line": 7
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
            "name": "Constructor",
            "optional": false,
            "range": [
              216,
              227
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 7
              },
              "start": {
                "column": 38,
                "line": 7
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              227,
              236
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "range": [
                    228,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 7
                    },
                    "start": {
                      "column": 50,
                      "line": 7
                    }
                  }
                },
                "range": [
                  228,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 7
              },
              "start": {
                "column": 49,
                "line": 7
              }
            }
          },
          "range": [
            216,
            236
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 7
            },
            "start": {
              "column": 38,
              "line": 7
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertiesOf",
            "optional": false,
            "range": [
              238,
              250
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
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              250,
              266
            ],
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItem",
                  "optional": false,
                  "range": [
                    258,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 7
                    },
                    "start": {
                      "column": 80,
                      "line": 7
                    }
                  }
                },
                "range": [
                  251,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 7
                  },
                  "start": {
                    "column": 73,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 7
              },
              "start": {
                "column": 72,
                "line": 7
              }
            }
          },
          "range": [
            238,
            266
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 7
            },
            "start": {
              "column": 60,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IApiItemConstructor",
        "optional": false,
        "range": [
          188,
          207
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        178,
        269
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          299,
          370
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
              "name": "members",
              "optional": false,
              "range": [
                314,
                321
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                321,
                368
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        361,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      354,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  348,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 13
                  },
                  "start": {
                    "column": 47,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                },
                "range": [
                  323,
                  347
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      338,
                      347
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ApiItem",
                          "optional": false,
                          "range": [
                            339,
                            346
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 11
                            },
                            "start": {
                              "column": 38,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          339,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 11
                          },
                          "start": {
                            "column": 38,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 11
                      },
                      "start": {
                        "column": 37,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReadonlyArray",
                    "optional": false,
                    "range": [
                      325,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    325,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            },
            "range": [
              303,
              368
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 11
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
            "column": 14,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "range": [
          291,
          298
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        285,
        370
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          427,
          430
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 36,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiEnumMember",
        "optional": false,
        "range": [
          397,
          410
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItem",
        "optional": false,
        "range": [
          419,
          426
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 17
          },
          "start": {
            "column": 28,
            "line": 17
          }
        }
      },
      "range": [
        391,
        430
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          500,
          547
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "members",
              "optional": false,
              "range": [
                513,
                520
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              },
              "range": [
                520,
                544
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    535,
                    544
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ApiItem",
                        "optional": false,
                        "range": [
                          536,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 22
                          },
                          "start": {
                            "column": 34,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        536,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 22
                        },
                        "start": {
                          "column": 34,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 22
                    },
                    "start": {
                      "column": 33,
                      "line": 22
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "range": [
                    522,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 22
                    },
                    "start": {
                      "column": 20,
                      "line": 22
                    }
                  }
                },
                "range": [
                  522,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              504,
              545
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 22
              },
              "start": {
                "column": 2,
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
            "column": 48,
            "line": 21
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
            "name": "ApiItem",
            "optional": false,
            "range": [
              492,
              499
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 21
              },
              "start": {
                "column": 40,
                "line": 21
              }
            }
          },
          "range": [
            492,
            499
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 21
            },
            "start": {
              "column": 40,
              "line": 21
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "range": [
          462,
          483
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "range": [
        452,
        547
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": true,
            "body": {
              "type": "ClassBody",
              "range": [
                790,
                939
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      803,
                      814
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
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
                      814,
                      860
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    848,
                                    852
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 30
                                    }
                                  }
                                },
                                "range": [
                                  845,
                                  852
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 30
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "range": [
                                839,
                                844
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 30
                                },
                                "start": {
                                  "column": 6,
                                  "line": 30
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              839,
                              853
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 30
                              },
                              "start": {
                                "column": 6,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            839,
                            854
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 30
                            },
                            "start": {
                              "column": 6,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        831,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 31
                        },
                        "start": {
                          "column": 39,
                          "line": 29
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "range": [
                            818,
                            822
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 29
                            },
                            "start": {
                              "column": 26,
                              "line": 29
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 29
                            },
                            "start": {
                              "column": 30,
                              "line": 29
                            }
                          },
                          "range": [
                            822,
                            829
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "range": [
                                824,
                                827
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 29
                                },
                                "start": {
                                  "column": 32,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              824,
                              829
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 29
                              },
                              "start": {
                                "column": 32,
                                "line": 29
                              }
                            }
                          }
                        },
                        "range": [
                          815,
                          829
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 29
                          },
                          "start": {
                            "column": 23,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 31
                      },
                      "start": {
                        "column": 22,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    796,
                    860
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 29
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
                    "name": "members",
                    "optional": false,
                    "range": [
                      877,
                      884
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    }
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      884,
                      935
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "range": [
                              926,
                              928
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 34
                              },
                              "start": {
                                "column": 13,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            919,
                            929
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 34
                            },
                            "start": {
                              "column": 6,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        911,
                        935
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 35
                        },
                        "start": {
                          "column": 49,
                          "line": 33
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 33
                        },
                        "start": {
                          "column": 24,
                          "line": 33
                        }
                      },
                      "range": [
                        886,
                        910
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            901,
                            910
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ApiItem",
                                "optional": false,
                                "range": [
                                  902,
                                  909
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                902,
                                909
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 33
                                },
                                "start": {
                                  "column": 40,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 33
                            },
                            "start": {
                              "column": 39,
                              "line": 33
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReadonlyArray",
                          "optional": false,
                          "range": [
                            888,
                            901
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 33
                            },
                            "start": {
                              "column": 26,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          888,
                          910
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 33
                          },
                          "start": {
                            "column": 26,
                            "line": 33
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 35
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    866,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 36
                },
                "start": {
                  "column": 79,
                  "line": 28
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "range": [
                728,
                738
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ApiItemContainerMixin",
                  "optional": false,
                  "range": [
                    768,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 28
                    },
                    "start": {
                      "column": 57,
                      "line": 28
                    }
                  }
                },
                "range": [
                  768,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 28
                  },
                  "start": {
                    "column": 57,
                    "line": 28
                  }
                }
              }
            ],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "range": [
                747,
                756
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
                }
              }
            },
            "range": [
              713,
              939
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixedClass",
              "optional": false,
              "range": [
                950,
                960
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "range": [
              943,
              961
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          }
        ],
        "range": [
          709,
          963
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 64,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ApiItemContainerMixin",
        "optional": false,
        "range": [
          558,
          579
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            },
            "range": [
              632,
              644
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "range": [
                  634,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "range": [
                634,
                644
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            }
          },
          "range": [
            623,
            644
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 26
            },
            "start": {
              "column": 2,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 63,
            "line": 27
          },
          "start": {
            "column": 1,
            "line": 27
          }
        },
        "range": [
          646,
          708
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "range": [
                  648,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 3,
                    "line": 27
                  }
                }
              },
              "range": [
                648,
                658
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 3,
                  "line": 27
                }
              }
            },
            {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      670,
                      674
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 27
                      },
                      "start": {
                        "column": 25,
                        "line": 27
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 27
                      },
                      "start": {
                        "column": 29,
                        "line": 27
                      }
                    },
                    "range": [
                      674,
                      681
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          676,
                          679
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 27
                          },
                          "start": {
                            "column": 31,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        676,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 27
                        },
                        "start": {
                          "column": 31,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    667,
                    681
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 27
                    },
                    "start": {
                      "column": 22,
                      "line": 27
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 27
                  },
                  "start": {
                    "column": 38,
                    "line": 27
                  }
                },
                "range": [
                  683,
                  707
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ApiItemContainerMixin",
                    "optional": false,
                    "range": [
                      686,
                      707
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 27
                      },
                      "start": {
                        "column": 41,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    686,
                    707
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 27
                    },
                    "start": {
                      "column": 41,
                      "line": 27
                    }
                  }
                }
              },
              "range": [
                662,
                707
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            }
          ],
          "range": [
            648,
            708
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 27
            },
            "start": {
              "column": 3,
              "line": 27
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 70,
            "line": 25
          },
          "start": {
            "column": 30,
            "line": 25
          }
        },
        "range": [
          579,
          619
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
                "name": "IApiItemConstructor",
                "optional": false,
                "range": [
                  599,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 25
                  },
                  "start": {
                    "column": 50,
                    "line": 25
                  }
                }
              },
              "range": [
                599,
                618
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 25
                },
                "start": {
                  "column": 50,
                  "line": 25
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBaseClass",
              "optional": false,
              "range": [
                580,
                590
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 25
                },
                "start": {
                  "column": 31,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              580,
              618
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 25
              },
              "start": {
                "column": 31,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        549,
        963
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
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
        999,
        1178
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            1059,
            1178
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
                "name": "members",
                "optional": false,
                "range": [
                  1116,
                  1123
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 44
                  },
                  "start": {
                    "column": 13,
                    "line": 44
                  }
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  1123,
                  1176
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          1169,
                          1171
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 45
                          },
                          "start": {
                            "column": 11,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1162,
                        1172
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 45
                        },
                        "start": {
                          "column": 4,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    1156,
                    1176
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 46
                    },
                    "start": {
                      "column": 53,
                      "line": 44
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 44
                    },
                    "start": {
                      "column": 22,
                      "line": 44
                    }
                  },
                  "range": [
                    1125,
                    1155
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1140,
                        1155
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ApiEnumMember",
                            "optional": false,
                            "range": [
                              1141,
                              1154
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 44
                              },
                              "start": {
                                "column": 38,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            1141,
                            1154
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 44
                            },
                            "start": {
                              "column": 38,
                              "line": 44
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 44
                        },
                        "start": {
                          "column": 37,
                          "line": 44
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReadonlyArray",
                      "optional": false,
                      "range": [
                        1127,
                        1140
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 44
                        },
                        "start": {
                          "column": 24,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1127,
                      1155
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 46
                  },
                  "start": {
                    "column": 20,
                    "line": 44
                  }
                }
              },
              "range": [
                1105,
                1176
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 46
                },
                "start": {
                  "column": 2,
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
              "column": 60,
              "line": 42
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ApiEnum",
          "optional": false,
          "range": [
            1012,
            1019
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 42
            },
            "start": {
              "column": 13,
              "line": 42
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ApiItem",
              "optional": false,
              "range": [
                1050,
                1057
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 42
                },
                "start": {
                  "column": 51,
                  "line": 42
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "ApiItemContainerMixin",
            "optional": false,
            "range": [
              1028,
              1049
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 42
              },
              "start": {
                "column": 29,
                "line": 42
              }
            }
          },
          "optional": false,
          "range": [
            1028,
            1058
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 42
            },
            "start": {
              "column": 29,
              "line": 42
            }
          }
        },
        "range": [
          1006,
          1178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 7,
            "line": 42
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
          "line": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 48
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
