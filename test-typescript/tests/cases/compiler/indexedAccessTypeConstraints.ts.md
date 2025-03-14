__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    613
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          41,
          60
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "range": [
                47,
                54
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              },
              "range": [
                54,
                57
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    56,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "range": [
                  56,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              47,
              58
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "range": [
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          37,
          40
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
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              38,
              39
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        60
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "range": [
          67,
          71
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "range": [
                83,
                86
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                86,
                124
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 33,
                          "line": 8
                        }
                      },
                      "range": [
                        112,
                        115
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            114,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 35,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          114,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 8
                          },
                          "start": {
                            "column": 35,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      108,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 8
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 8
                    },
                    "start": {
                      "column": 38,
                      "line": 8
                    }
                  },
                  "range": [
                    117,
                    124
                  ],
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
                          122,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 8
                          },
                          "start": {
                            "column": 43,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        122,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 8
                        },
                        "start": {
                          "column": 43,
                          "line": 8
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
                          120,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 8
                          },
                          "start": {
                            "column": 41,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        120,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 8
                        },
                        "start": {
                          "column": 41,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      120,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 8
                      },
                      "start": {
                        "column": 41,
                        "line": 8
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  },
                  "range": [
                    88,
                    107
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
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
                              105,
                              106
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 8
                              },
                              "start": {
                                "column": 26,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            105,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 8
                            },
                            "start": {
                              "column": 26,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          99,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 8
                          },
                          "start": {
                            "column": 20,
                            "line": 8
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          89,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        89,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 8
                        }
                      }
                    }
                  ]
                },
                "range": [
                  88,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              83,
              125
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          77,
          127
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        },
        "range": [
          71,
          74
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
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              72,
              73
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        62,
        128
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
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
          146,
          248
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                152,
                163
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                163,
                189
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  187,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 12
                  },
                  "start": {
                    "column": 39,
                    "line": 12
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
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 12
                        },
                        "start": {
                          "column": 28,
                          "line": 12
                        }
                      },
                      "range": [
                        176,
                        185
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            182,
                            185
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  183,
                                  184
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                183,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 12
                                },
                                "start": {
                                  "column": 35,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 12
                            },
                            "start": {
                              "column": 34,
                              "line": 12
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "range": [
                            178,
                            182
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 12
                            },
                            "start": {
                              "column": 30,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          178,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 12
                          },
                          "start": {
                            "column": 30,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      172,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    164,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              152,
              189
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "getData",
              "optional": false,
              "range": [
                194,
                201
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                201,
                246
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          230,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "range": [
                          235,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 14
                          },
                          "start": {
                            "column": 20,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        230,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      223,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  213,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 23,
                    "line": 13
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
                    "column": 22,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                },
                "range": [
                  203,
                  212
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      209,
                      212
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "range": [
                            210,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          210,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 20,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "range": [
                      205,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    205,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              194,
              246
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "range": [
          136,
          142
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        },
        "range": [
          142,
          145
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                143,
                144
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              143,
              144
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        130,
        248
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        250,
        372
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            295,
            372
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getContent",
                "optional": false,
                "range": [
                  301,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
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
                  311,
                  370
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "'content'",
                            "value": "content",
                            "range": [
                              353,
                              362
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 20
                              },
                              "start": {
                                "column": 34,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  334,
                                  338
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 20
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getData",
                                "optional": false,
                                "range": [
                                  339,
                                  346
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                334,
                                346
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 20
                                },
                                "start": {
                                  "column": 15,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              334,
                              348
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 20
                              },
                              "start": {
                                "column": 15,
                                "line": 20
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "range": [
                              349,
                              352
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 20
                              },
                              "start": {
                                "column": 30,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            334,
                            352
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 20
                            },
                            "start": {
                              "column": 15,
                              "line": 20
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          334,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        327,
                        364
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "range": [
                    317,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 19
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
                      "column": 19,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  },
                  "range": [
                    313,
                    316
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        315,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 18,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      315,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 19
                  }
                }
              },
              "range": [
                301,
                370
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 45,
              "line": 18
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            263,
            266
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 18
            },
            "start": {
              "column": 13,
              "line": 18
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parent",
          "optional": false,
          "range": [
            278,
            284
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 18
            },
            "start": {
              "column": 28,
              "line": 18
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            284,
            294
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  290,
                  293
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        291,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 18
                        },
                        "start": {
                          "column": 41,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      291,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 18
                      },
                      "start": {
                        "column": 41,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 40,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IData",
                "optional": false,
                "range": [
                  285,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 18
                  },
                  "start": {
                    "column": 35,
                    "line": 18
                  }
                }
              },
              "range": [
                285,
                293
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 18
                },
                "start": {
                  "column": 35,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 18
            },
            "start": {
              "column": 34,
              "line": 18
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 19,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 18
            }
          },
          "range": [
            266,
            269
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  267,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              },
              "out": false,
              "range": [
                267,
                268
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            }
          ]
        },
        "range": [
          257,
          372
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        374,
        509
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            432,
            509
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getContent",
                "optional": false,
                "range": [
                  438,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
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
                  448,
                  507
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "'content'",
                            "value": "content",
                            "range": [
                              490,
                              499
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 26
                              },
                              "start": {
                                "column": 34,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  471,
                                  475
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 26
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getData",
                                "optional": false,
                                "range": [
                                  476,
                                  483
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                471,
                                483
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 26
                                },
                                "start": {
                                  "column": 15,
                                  "line": 26
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              471,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 26
                              },
                              "start": {
                                "column": 15,
                                "line": 26
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "range": [
                              486,
                              489
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 26
                              },
                              "start": {
                                "column": 30,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            471,
                            489
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 26
                            },
                            "start": {
                              "column": 15,
                              "line": 26
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          471,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 26
                          },
                          "start": {
                            "column": 15,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        464,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    454,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 20,
                      "line": 25
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
                      "column": 19,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  },
                  "range": [
                    450,
                    453
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        452,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      452,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 18,
                        "line": 25
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              },
              "range": [
                438,
                507
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 58,
              "line": 24
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
            387,
            390
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 24
            },
            "start": {
              "column": 13,
              "line": 24
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parent",
          "optional": false,
          "range": [
            422,
            428
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 24
            },
            "start": {
              "column": 48,
              "line": 24
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            428,
            431
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
                  429,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 24
                  },
                  "start": {
                    "column": 55,
                    "line": 24
                  }
                }
              },
              "range": [
                429,
                430
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 24
                },
                "start": {
                  "column": 55,
                  "line": 24
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 24
            },
            "start": {
              "column": 54,
              "line": 24
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 39,
              "line": 24
            },
            "start": {
              "column": 16,
              "line": 24
            }
          },
          "range": [
            390,
            413
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  391,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 17,
                    "line": 24
                  }
                }
              },
              "out": false,
              "range": [
                391,
                392
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    409,
                    412
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          410,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 24
                          },
                          "start": {
                            "column": 36,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        410,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 24
                        },
                        "start": {
                          "column": 36,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 24
                    },
                    "start": {
                      "column": 35,
                      "line": 24
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IData",
                  "optional": false,
                  "range": [
                    404,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 24
                    },
                    "start": {
                      "column": 30,
                      "line": 24
                    }
                  }
                },
                "range": [
                  404,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 24
                  },
                  "start": {
                    "column": 30,
                    "line": 24
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
                  394,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "out": false,
              "range": [
                394,
                412
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 24
                },
                "start": {
                  "column": 20,
                  "line": 24
                }
              }
            }
          ]
        },
        "range": [
          381,
          509
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 24
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  604,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  608,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              "range": [
                604,
                609
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              604,
              610
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          598,
          612
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 65,
            "line": 32
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
          542,
          545
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
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
                "column": 46,
                "line": 32
              },
              "start": {
                "column": 43,
                "line": 32
              }
            },
            "range": [
              576,
              579
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  578,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 32
                  },
                  "start": {
                    "column": 45,
                    "line": 32
                  }
                }
              },
              "range": [
                578,
                579
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 32
                },
                "start": {
                  "column": 45,
                  "line": 32
                }
              }
            }
          },
          "range": [
            575,
            579
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 32
            },
            "start": {
              "column": 42,
              "line": 32
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 32
              },
              "start": {
                "column": 49,
                "line": 32
              }
            },
            "range": [
              582,
              596
            ],
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'content'",
                  "value": "content",
                  "range": [
                    586,
                    595
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 32
                    },
                    "start": {
                      "column": 53,
                      "line": 32
                    }
                  }
                },
                "range": [
                  586,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 32
                  },
                  "start": {
                    "column": 53,
                    "line": 32
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
                    584,
                    585
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 32
                    },
                    "start": {
                      "column": 51,
                      "line": 32
                    }
                  }
                },
                "range": [
                  584,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 32
                  },
                  "start": {
                    "column": 51,
                    "line": 32
                  }
                }
              },
              "range": [
                584,
                596
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 32
                },
                "start": {
                  "column": 51,
                  "line": 32
                }
              }
            }
          },
          "range": [
            581,
            596
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 32
            },
            "start": {
              "column": 48,
              "line": 32
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 32
          },
          "start": {
            "column": 12,
            "line": 32
          }
        },
        "range": [
          545,
          574
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                546,
                547
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              546,
              547
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 13,
                "line": 32
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "content",
                    "optional": false,
                    "range": [
                      561,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 28,
                        "line": 32
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
                        "line": 32
                      },
                      "start": {
                        "column": 35,
                        "line": 32
                      }
                    },
                    "range": [
                      568,
                      571
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          570,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 32
                          },
                          "start": {
                            "column": 37,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        570,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 32
                        },
                        "start": {
                          "column": 37,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    561,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 32
                    },
                    "start": {
                      "column": 28,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                559,
                573
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 32
                },
                "start": {
                  "column": 26,
                  "line": 32
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
                549,
                550
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              549,
              573
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 32
              },
              "start": {
                "column": 16,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        533,
        612
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
