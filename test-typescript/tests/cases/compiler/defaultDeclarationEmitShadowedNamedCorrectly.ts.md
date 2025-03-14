__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    444
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./this\"",
        "value": "./this",
        "range": [
          20,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
        30,
        83
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            60,
            83
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  66,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
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
                    "column": 8,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                },
                "range": [
                  67,
                  70
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      69,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 3
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 3
                    },
                    "start": {
                      "column": 7,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                66,
                71
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  76,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                },
                "range": [
                  77,
                  80
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      79,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 4
                      },
                      "start": {
                        "column": 7,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    79,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                76,
                81
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
              "column": 30,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Things",
          "optional": false,
          "range": [
            47,
            53
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          },
          "range": [
            53,
            59
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  54,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 24,
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
                "name": "T",
                "optional": false,
                "range": [
                  57,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          37,
          83
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        84,
        192
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
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    178,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 11,
                      "line": 7
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    186,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 7
                    },
                    "start": {
                      "column": 19,
                      "line": 7
                    }
                  }
                },
                "range": [
                  178,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                171,
                190
              ],
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
            165,
            192
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 81,
              "line": 6
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "make",
          "optional": false,
          "range": [
            100,
            104
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 6
                },
                "start": {
                  "column": 31,
                  "line": 6
                }
              },
              "range": [
                115,
                146
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 6
                        },
                        "start": {
                          "column": 41,
                          "line": 6
                        }
                      },
                      "range": [
                        125,
                        144
                      ],
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CTor",
                              "optional": false,
                              "range": [
                                127,
                                131
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 6
                                },
                                "start": {
                                  "column": 43,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              127,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 6
                              },
                              "start": {
                                "column": 43,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "props",
                                  "optional": false,
                                  "range": [
                                    135,
                                    140
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 6
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
                                      "column": 59,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 6
                                    }
                                  },
                                  "range": [
                                    140,
                                    143
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "range": [
                                        142,
                                        143
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 59,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 58,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      142,
                                      143
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 6
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  135,
                                  143
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              134,
                              144
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 6
                              },
                              "start": {
                                "column": 50,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          127,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 6
                          },
                          "start": {
                            "column": 43,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      119,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 6
                      },
                      "start": {
                        "column": 35,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  117,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 6
                  },
                  "start": {
                    "column": 33,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              114,
              146
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 6
              },
              "start": {
                "column": 30,
                "line": 6
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 80,
              "line": 6
            },
            "start": {
              "column": 63,
              "line": 6
            }
          },
          "range": [
            147,
            164
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                155,
                164
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "range": [
                      156,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 6
                      },
                      "start": {
                        "column": 72,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    156,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 6
                    },
                    "start": {
                      "column": 72,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CTor",
                    "optional": false,
                    "range": [
                      159,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 6
                      },
                      "start": {
                        "column": 75,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    159,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 6
                    },
                    "start": {
                      "column": 75,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 6
                },
                "start": {
                  "column": 71,
                  "line": 6
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Things",
              "optional": false,
              "range": [
                149,
                155
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 6
                },
                "start": {
                  "column": 65,
                  "line": 6
                }
              }
            },
            "range": [
              149,
              164
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 6
              },
              "start": {
                "column": 65,
                "line": 6
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 20,
              "line": 6
            }
          },
          "range": [
            104,
            113
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  105,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                105,
                106
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 21,
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
                "name": "CTor",
                "optional": false,
                "range": [
                  108,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                108,
                112
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          91,
          192
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        194,
        220
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            217,
            220
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 23,
              "line": 10
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "range": [
            211,
            216
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 17,
              "line": 10
            }
          }
        },
        "range": [
          201,
          220
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        222,
        276
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            255,
            276
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
                "name": "props",
                "optional": false,
                "range": [
                  261,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
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
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                },
                "range": [
                  266,
                  273
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "range": [
                      268,
                      273
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    268,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                }
              },
              "value": null,
              "range": [
                261,
                274
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
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
              "line": 15
            },
            "start": {
              "column": 33,
              "line": 13
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "range": [
            243,
            254
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 13
            },
            "start": {
              "column": 21,
              "line": 13
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          237,
          276
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        277,
        444
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "MyComponent",
                    "optional": false,
                    "range": [
                      314,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      328,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 22,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    314,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                310,
                330
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
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
                403,
                442
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
                      "name": "create",
                      "optional": false,
                      "range": [
                        416,
                        422
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 18
                        },
                        "start": {
                          "column": 17,
                          "line": 18
                        }
                      }
                    },
                    "init": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "range": [
                              430,
                              432
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 18
                              },
                              "start": {
                                "column": 31,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "default",
                            "optional": false,
                            "range": [
                              433,
                              440
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 18
                              },
                              "start": {
                                "column": 34,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            430,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 18
                            },
                            "start": {
                              "column": 31,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "make",
                        "optional": false,
                        "range": [
                          425,
                          429
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 18
                          },
                          "start": {
                            "column": 26,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        425,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 18
                        },
                        "start": {
                          "column": 26,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      416,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  410,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "range": [
            304,
            444
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
            },
            "start": {
              "column": 27,
              "line": 16
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            294,
            303
          ],
          "decorators": [],
          "name": "Something",
          "optional": false,
          "loc": {
            "end": {
              "column": 26,
              "line": 16
            },
            "start": {
              "column": 17,
              "line": 16
            }
          }
        },
        "kind": "namespace",
        "range": [
          284,
          444
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
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
          "line": 19
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
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
