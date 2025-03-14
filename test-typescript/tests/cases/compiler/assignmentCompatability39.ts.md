__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    445
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
              23,
              96
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  76,
                  96
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "range": [
                        78,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 2
                        },
                        "start": {
                          "column": 59,
                          "line": 2
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
                          "column": 65,
                          "line": 2
                        },
                        "start": {
                          "column": 62,
                          "line": 2
                        }
                      },
                      "range": [
                        81,
                        84
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            83,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 2
                            },
                            "start": {
                              "column": 64,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          83,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 2
                          },
                          "start": {
                            "column": 64,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      78,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 2
                      },
                      "start": {
                        "column": 59,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "range": [
                        86,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 2
                        },
                        "start": {
                          "column": 67,
                          "line": 2
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
                          "column": 74,
                          "line": 2
                        },
                        "start": {
                          "column": 71,
                          "line": 2
                        }
                      },
                      "range": [
                        90,
                        93
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            92,
                            93
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 2
                            },
                            "start": {
                              "column": 73,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          92,
                          93
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 2
                          },
                          "start": {
                            "column": 73,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      86,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 2
                      },
                      "start": {
                        "column": 67,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 2
                  },
                  "start": {
                    "column": 57,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interfaceWithPublicAndOptional",
                "optional": false,
                "range": [
                  40,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 2
                  },
                  "start": {
                    "column": 51,
                    "line": 2
                  }
                },
                "range": [
                  70,
                  75
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
                        71,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 2
                        },
                        "start": {
                          "column": 52,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      71,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 2
                      },
                      "start": {
                        "column": 52,
                        "line": 2
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        73,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 2
                        },
                        "start": {
                          "column": 54,
                          "line": 2
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      73,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 2
                      },
                      "start": {
                        "column": 54,
                        "line": 2
                      }
                    }
                  }
                ]
              },
              "range": [
                30,
                96
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 2
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
                "column": 77,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "EmptyStatement",
            "range": [
              96,
              97
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 2
              },
              "start": {
                "column": 77,
                "line": 2
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
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 135,
                        "line": 2
                      },
                      "start": {
                        "column": 88,
                        "line": 2
                      }
                    },
                    "range": [
                      107,
                      154
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          139,
                          154
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              140,
                              146
                            ],
                            "loc": {
                              "end": {
                                "column": 127,
                                "line": 2
                              },
                              "start": {
                                "column": 121,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              147,
                              153
                            ],
                            "loc": {
                              "end": {
                                "column": 134,
                                "line": 2
                              },
                              "start": {
                                "column": 128,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 135,
                            "line": 2
                          },
                          "start": {
                            "column": 120,
                            "line": 2
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceWithPublicAndOptional",
                        "optional": false,
                        "range": [
                          109,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 120,
                            "line": 2
                          },
                          "start": {
                            "column": 90,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        109,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 135,
                          "line": 2
                        },
                        "start": {
                          "column": 90,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 135,
                      "line": 2
                    },
                    "start": {
                      "column": 84,
                      "line": 2
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
                        "name": "one",
                        "optional": false,
                        "range": [
                          159,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 143,
                            "line": 2
                          },
                          "start": {
                            "column": 140,
                            "line": 2
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          164,
                          165
                        ],
                        "loc": {
                          "end": {
                            "column": 146,
                            "line": 2
                          },
                          "start": {
                            "column": 145,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        159,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 146,
                          "line": 2
                        },
                        "start": {
                          "column": 140,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    157,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 148,
                      "line": 2
                    },
                    "start": {
                      "column": 138,
                      "line": 2
                    }
                  }
                },
                "range": [
                  103,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 148,
                    "line": 2
                  },
                  "start": {
                    "column": 84,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              99,
              168
            ],
            "loc": {
              "end": {
                "column": 149,
                "line": 2
              },
              "start": {
                "column": 80,
                "line": 2
              }
            }
          },
          {
            "type": "EmptyStatement",
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 150,
                "line": 2
              },
              "start": {
                "column": 149,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              174,
              204
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
                    "name": "__val__obj4",
                    "optional": false,
                    "range": [
                      185,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj4",
                    "optional": false,
                    "range": [
                      199,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    185,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                181,
                204
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          17,
          206
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
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          16
        ],
        "decorators": [],
        "name": "__test1__",
        "optional": false,
        "loc": {
          "end": {
            "column": 16,
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
        206
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
              230,
              323
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  275,
                  323
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        277,
                        288
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 6
                        },
                        "start": {
                          "column": 51,
                          "line": 6
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
                        288,
                        321
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          319,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 6
                          },
                          "start": {
                            "column": 93,
                            "line": 6
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
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 6
                                },
                                "start": {
                                  "column": 73,
                                  "line": 6
                                }
                              },
                              "range": [
                                299,
                                302
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    301,
                                    302
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 76,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 75,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  301,
                                  302
                                ],
                                "loc": {
                                  "end": {
                                    "column": 76,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 75,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              296,
                              302
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 6
                              },
                              "start": {
                                "column": 70,
                                "line": 6
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            289,
                            302
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 6
                            },
                            "start": {
                              "column": 63,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 91,
                                  "line": 6
                                },
                                "start": {
                                  "column": 88,
                                  "line": 6
                                }
                              },
                              "range": [
                                314,
                                317
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "range": [
                                    316,
                                    317
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 91,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 90,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  316,
                                  317
                                ],
                                "loc": {
                                  "end": {
                                    "column": 91,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 90,
                                    "line": 6
                                  }
                                }
                              }
                            },
                            "range": [
                              311,
                              317
                            ],
                            "loc": {
                              "end": {
                                "column": 91,
                                "line": 6
                              },
                              "start": {
                                "column": 85,
                                "line": 6
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            304,
                            317
                          ],
                          "loc": {
                            "end": {
                              "column": 91,
                              "line": 6
                            },
                            "start": {
                              "column": 78,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 6
                        },
                        "start": {
                          "column": 62,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      277,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 6
                      },
                      "start": {
                        "column": 51,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 6
                  },
                  "start": {
                    "column": 49,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "classWithTwoPublic",
                "optional": false,
                "range": [
                  251,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 6
                  },
                  "start": {
                    "column": 43,
                    "line": 6
                  }
                },
                "range": [
                  269,
                  274
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
                        270,
                        271
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      270,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 6
                      },
                      "start": {
                        "column": 44,
                        "line": 6
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
                      "name": "U",
                      "optional": false,
                      "range": [
                        272,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 6
                        },
                        "start": {
                          "column": 46,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      272,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 6
                      },
                      "start": {
                        "column": 46,
                        "line": 6
                      }
                    }
                  }
                ]
              },
              "range": [
                245,
                323
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 97,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                  "name": "x2",
                  "optional": false,
                  "range": [
                    331,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 107,
                      "line": 6
                    },
                    "start": {
                      "column": 105,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        359,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 134,
                          "line": 6
                        },
                        "start": {
                          "column": 133,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        362,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 139,
                          "line": 6
                        },
                        "start": {
                          "column": 136,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "classWithTwoPublic",
                    "optional": false,
                    "range": [
                      340,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 132,
                        "line": 6
                      },
                      "start": {
                        "column": 114,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    336,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 140,
                      "line": 6
                    },
                    "start": {
                      "column": 110,
                      "line": 6
                    }
                  }
                },
                "range": [
                  331,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 140,
                    "line": 6
                  },
                  "start": {
                    "column": 105,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              327,
              367
            ],
            "loc": {
              "end": {
                "column": 141,
                "line": 6
              },
              "start": {
                "column": 101,
                "line": 6
              }
            }
          },
          {
            "type": "EmptyStatement",
            "range": [
              367,
              368
            ],
            "loc": {
              "end": {
                "column": 142,
                "line": 6
              },
              "start": {
                "column": 141,
                "line": 6
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              373,
              399
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
                    "name": "__val__x2",
                    "optional": false,
                    "range": [
                      384,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "range": [
                      396,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 27,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    384,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 7
                    },
                    "start": {
                      "column": 15,
                      "line": 7
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                380,
                399
              ],
              "loc": {
                "end": {
                  "column": 30,
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
                "column": 30,
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
          224,
          401
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          214,
          223
        ],
        "decorators": [],
        "name": "__test2__",
        "optional": false,
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "kind": "module",
      "range": [
        207,
        401
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test2__",
            "optional": false,
            "range": [
              402,
              411
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__x2",
            "optional": false,
            "range": [
              412,
              421
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            402,
            421
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "range": [
              424,
              433
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 22,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "range": [
              434,
              445
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 32,
                "line": 9
              }
            }
          },
          "range": [
            424,
            445
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 9
            },
            "start": {
              "column": 22,
              "line": 9
            }
          }
        },
        "range": [
          402,
          445
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        402,
        445
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 43,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
