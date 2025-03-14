__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1230
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Defaultize",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "range": [
              63,
              68
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          "range": [
            63,
            68
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 3
            },
            "start": {
              "column": 1,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "range": [
            77,
            80
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            307,
            312
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  144,
                  195
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        149,
                        194
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "range": [
                              150,
                              155
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 4
                              },
                              "start": {
                                "column": 17,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            150,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              164,
                              193
                            ],
                            "params": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Props",
                                    "optional": false,
                                    "range": [
                                      171,
                                      176
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    171,
                                    176
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 38,
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
                                    "column": 43,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 4
                                  }
                                }
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Defaults",
                                    "optional": false,
                                    "range": [
                                      184,
                                      192
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    184,
                                    192
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 59,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  178,
                                  192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 4
                              },
                              "start": {
                                "column": 31,
                                "line": 4
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "range": [
                              157,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 4
                              },
                              "start": {
                                "column": 24,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            157,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 4
                            },
                            "start": {
                              "column": 24,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "range": [
                        145,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      145,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  137,
                  144
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
              "range": [
                137,
                195
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  257,
                  302
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "range": [
                        258,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      258,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        272,
                        301
                      ],
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Props",
                              "optional": false,
                              "range": [
                                279,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 6
                                },
                                "start": {
                                  "column": 30,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              279,
                              284
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 6
                              },
                              "start": {
                                "column": 30,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            273,
                            284
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "range": [
                                292,
                                300
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 6
                                },
                                "start": {
                                  "column": 43,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              292,
                              300
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 6
                              },
                              "start": {
                                "column": 43,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            286,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 6
                            },
                            "start": {
                              "column": 37,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "range": [
                        265,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      265,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "range": [
                  253,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "range": [
                253,
                302
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            137,
            302
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          63,
          312
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 1,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        },
        "range": [
          15,
          32
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "range": [
                16,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              16,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
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
              "name": "Defaults",
              "optional": false,
              "range": [
                23,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        313
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 7
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
        314,
        978
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  382,
                  385
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 37,
                    "line": 9
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLAttributes",
                "optional": false,
                "range": [
                  359,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 9
                  }
                },
                "range": [
                  373,
                  381
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "default": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        378,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 9
                        },
                        "start": {
                          "column": 33,
                          "line": 9
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
                        374,
                        375
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      374,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 9
                      },
                      "start": {
                        "column": 29,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "range": [
                349,
                385
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  422,
                  425
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 36,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SVGAttributes",
                "optional": false,
                "range": [
                  400,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 14,
                    "line": 10
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                },
                "range": [
                  413,
                  421
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "default": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        418,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 10
                        },
                        "start": {
                          "column": 32,
                          "line": 10
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
                        414,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 28,
                          "line": 10
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      414,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  }
                ]
              },
              "range": [
                390,
                425
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "TSTypeAliasDeclaration",
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LibraryManagedAttributes",
                "optional": false,
                "range": [
                  435,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Component",
                    "optional": false,
                    "range": [
                      480,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 11
                      },
                      "start": {
                        "column": 54,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    480,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 11
                    },
                    "start": {
                      "column": 54,
                      "line": 11
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultProps",
                        "optional": false,
                        "range": [
                          508,
                          520
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
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
                            "column": 36,
                            "line": 12
                          },
                          "start": {
                            "column": 20,
                            "line": 12
                          }
                        },
                        "range": [
                          520,
                          536
                        ],
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Defaults",
                              "optional": false,
                              "range": [
                                528,
                                536
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 12
                                },
                                "start": {
                                  "column": 28,
                                  "line": 12
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              528,
                              536
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 28,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            522,
                            536
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        508,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    498,
                    543
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 72,
                      "line": 11
                    }
                  }
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "range": [
                      592,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 15
                      },
                      "start": {
                        "column": 10,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    592,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      564,
                      581
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "range": [
                            565,
                            570
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 21,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          565,
                          570
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Defaults",
                          "optional": false,
                          "range": [
                            572,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 14
                            },
                            "start": {
                              "column": 28,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          572,
                          580
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 14
                          },
                          "start": {
                            "column": 28,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 14
                      },
                      "start": {
                        "column": 20,
                        "line": 14
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "range": [
                      554,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 10,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    554,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "range": [
                  480,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 54,
                    "line": 11
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 11
                  },
                  "start": {
                    "column": 33,
                    "line": 11
                  }
                },
                "range": [
                  459,
                  477
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "range": [
                        460,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 11
                        },
                        "start": {
                          "column": 34,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      460,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
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
                      "name": "Props",
                      "optional": false,
                      "range": [
                        471,
                        476
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 11
                        },
                        "start": {
                          "column": 45,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      471,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 11
                      },
                      "start": {
                        "column": 45,
                        "line": 11
                      }
                    }
                  }
                ]
              },
              "range": [
                430,
                598
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  634,
                  660
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        644,
                        647
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
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
                          "column": 17,
                          "line": 18
                        },
                        "start": {
                          "column": 12,
                          "line": 18
                        }
                      },
                      "range": [
                        648,
                        653
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          650,
                          653
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 14,
                            "line": 18
                          }
                        }
                      }
                    },
                    "range": [
                      644,
                      654
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
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
                "name": "IntrinsicAttributes",
                "optional": false,
                "range": [
                  614,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              },
              "range": [
                604,
                660
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
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  703,
                  706
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 21
                  },
                  "start": {
                    "column": 41,
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
                    "name": "VNode",
                    "optional": false,
                    "range": [
                      692,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 21
                      },
                      "start": {
                        "column": 30,
                        "line": 21
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      697,
                      702
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          698,
                          701
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 21
                          },
                          "start": {
                            "column": 36,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 21
                      },
                      "start": {
                        "column": 35,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    692,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 21
                    },
                    "start": {
                      "column": 30,
                      "line": 21
                    }
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "range": [
                  676,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              },
              "range": [
                666,
                706
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  763,
                  766
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 23
                  },
                  "start": {
                    "column": 55,
                    "line": 23
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
                    "name": "Component",
                    "optional": false,
                    "range": [
                      743,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      752,
                      762
                    ],
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          753,
                          756
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 23
                          },
                          "start": {
                            "column": 45,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "range": [
                          758,
                          761
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 23
                          },
                          "start": {
                            "column": 50,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 23
                      },
                      "start": {
                        "column": 44,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    743,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 23
                    },
                    "start": {
                      "column": 35,
                      "line": 23
                    }
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementClass",
                "optional": false,
                "range": [
                  722,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
                  }
                }
              },
              "range": [
                712,
                766
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  808,
                  835
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "range": [
                        818,
                        823
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
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
                          "column": 18,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      },
                      "range": [
                        823,
                        828
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          825,
                          828
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 26
                          },
                          "start": {
                            "column": 15,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      818,
                      829
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 40,
                    "line": 25
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "range": [
                  782,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              },
              "range": [
                772,
                835
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
            },
            {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  876,
                  906
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "range": [
                        886,
                        894
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
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
                          "column": 21,
                          "line": 30
                        },
                        "start": {
                          "column": 16,
                          "line": 30
                        }
                      },
                      "range": [
                        894,
                        899
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          896,
                          899
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      886,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                    "column": 39,
                    "line": 29
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "range": [
                  851,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 14,
                    "line": 29
                  }
                }
              },
              "range": [
                841,
                906
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
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  940,
                  976
                ],
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "div",
                      "optional": false,
                      "range": [
                        950,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
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
                          "column": 27,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 34
                        }
                      },
                      "range": [
                        953,
                        969
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HTMLAttributes",
                          "optional": false,
                          "range": [
                            955,
                            969
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 34
                            },
                            "start": {
                              "column": 13,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          955,
                          969
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 34
                          },
                          "start": {
                            "column": 13,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      950,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 32,
                    "line": 33
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "range": [
                  922,
                  939
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 33
                  },
                  "start": {
                    "column": 14,
                    "line": 33
                  }
                }
              },
              "range": [
                912,
                976
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
          "range": [
            343,
            978
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 36
            },
            "start": {
              "column": 29,
              "line": 8
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            331,
            342
          ],
          "decorators": [],
          "name": "JSXInternal",
          "optional": false,
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 17,
              "line": 8
            }
          }
        },
        "kind": "namespace",
        "range": [
          321,
          978
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        979,
        1016
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
              "name": "Fragment",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 37
                  },
                  "start": {
                    "column": 21,
                    "line": 37
                  }
                },
                "range": [
                  1000,
                  1015
                ],
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      1009,
                      1015
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 37
                      },
                      "start": {
                        "column": 30,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1002,
                    1015
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 37
                    },
                    "start": {
                      "column": 23,
                      "line": 37
                    }
                  }
                }
              },
              "range": [
                992,
                1015
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 37
                },
                "start": {
                  "column": 13,
                  "line": 37
                }
              }
            },
            "init": null,
            "range": [
              992,
              1015
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 37
              },
              "start": {
                "column": 13,
                "line": 37
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          986,
          1016
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1017,
        1056
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "range": [
            1029,
            1042
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 38
            },
            "start": {
              "column": 12,
              "line": 38
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1053,
            1055
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 38
            },
            "start": {
              "column": 36,
              "line": 38
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 33,
              "line": 38
            },
            "start": {
              "column": 25,
              "line": 38
            }
          },
          "range": [
            1042,
            1050
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1047,
                  1049
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 30,
                    "line": 38
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
                  1043,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 38
                  },
                  "start": {
                    "column": 26,
                    "line": 38
                  }
                }
              },
              "out": false,
              "range": [
                1043,
                1049
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 38
                },
                "start": {
                  "column": 26,
                  "line": 38
                }
              }
            }
          ]
        },
        "range": [
          1024,
          1056
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 38
          },
          "start": {
            "column": 7,
            "line": 38
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 39,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1057,
        1089
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentChild",
          "optional": false,
          "range": [
            1069,
            1083
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 39
            },
            "start": {
              "column": 12,
              "line": 39
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1086,
            1088
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 39
            },
            "start": {
              "column": 29,
              "line": 39
            }
          }
        },
        "range": [
          1064,
          1089
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 39
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 32,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1090,
        1125
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentChildren",
          "optional": false,
          "range": [
            1102,
            1119
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1122,
            1124
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 40
            },
            "start": {
              "column": 32,
              "line": 40
            }
          }
        },
        "range": [
          1097,
          1125
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 40
          },
          "start": {
            "column": 7,
            "line": 40
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1126,
        1157
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VNode",
          "optional": false,
          "range": [
            1138,
            1143
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 41
            },
            "start": {
              "column": 12,
              "line": 41
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1154,
            1156
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 41
            },
            "start": {
              "column": 28,
              "line": 41
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 41
            },
            "start": {
              "column": 17,
              "line": 41
            }
          },
          "range": [
            1143,
            1151
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1148,
                  1150
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 41
                  },
                  "start": {
                    "column": 22,
                    "line": 41
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
                  1144,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 41
                  },
                  "start": {
                    "column": 18,
                    "line": 41
                  }
                }
              },
              "out": false,
              "range": [
                1144,
                1150
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 41
                },
                "start": {
                  "column": 18,
                  "line": 41
                }
              }
            }
          ]
        },
        "range": [
          1133,
          1157
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 41
          },
          "start": {
            "column": 7,
            "line": 41
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 31,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1158,
        1186
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attributes",
          "optional": false,
          "range": [
            1170,
            1180
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 42
            },
            "start": {
              "column": 12,
              "line": 42
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1183,
            1185
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 42
            },
            "start": {
              "column": 25,
              "line": 42
            }
          }
        },
        "range": [
          1165,
          1186
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 42
          },
          "start": {
            "column": 7,
            "line": 42
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1187,
        1230
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            1199,
            1208
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 43
            },
            "start": {
              "column": 12,
              "line": 43
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            1227,
            1229
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 43
            },
            "start": {
              "column": 40,
              "line": 43
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 37,
              "line": 43
            },
            "start": {
              "column": 21,
              "line": 43
            }
          },
          "range": [
            1208,
            1224
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1213,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 43
                  },
                  "start": {
                    "column": 26,
                    "line": 43
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
                  1209,
                  1210
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 43
                  },
                  "start": {
                    "column": 22,
                    "line": 43
                  }
                }
              },
              "out": false,
              "range": [
                1209,
                1215
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 43
                },
                "start": {
                  "column": 22,
                  "line": 43
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  1221,
                  1223
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 43
                  },
                  "start": {
                    "column": 34,
                    "line": 43
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  1217,
                  1218
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 43
                  },
                  "start": {
                    "column": 30,
                    "line": 43
                  }
                }
              },
              "out": false,
              "range": [
                1217,
                1223
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 43
                },
                "start": {
                  "column": 30,
                  "line": 43
                }
              }
            }
          ]
        },
        "range": [
          1194,
          1230
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 43,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 43,
      "line": 43
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
    1483
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'..'",
        "value": "..",
        "range": [
          25,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "range": [
              9,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "range": [
              9,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
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
            17
          ],
          "loc": {
            "end": {
              "column": 17,
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
        30
      ],
      "loc": {
        "end": {
          "column": 30,
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
        "raw": "'..'",
        "value": "..",
        "range": [
          135,
          139
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "range": [
              44,
              57
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "range": [
              44,
              57
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "range": [
            44,
            57
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "range": [
              63,
              77
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChild",
            "optional": false,
            "range": [
              63,
              77
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "range": [
            63,
            77
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "range": [
              83,
              100
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentChildren",
            "optional": false,
            "range": [
              83,
              100
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "range": [
            83,
            100
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "range": [
              106,
              111
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "VNode",
            "optional": false,
            "range": [
              106,
              111
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "range": [
            106,
            111
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "range": [
              117,
              127
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Attributes",
            "optional": false,
            "range": [
              117,
              127
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "range": [
            117,
            127
          ],
          "loc": {
            "end": {
              "column": 14,
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
        31,
        140
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'..'",
        "value": "..",
        "range": [
          169,
          173
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 9
          },
          "start": {
            "column": 28,
            "line": 9
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "range": [
              150,
              161
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSXInternal",
            "optional": false,
            "range": [
              150,
              161
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          },
          "range": [
            150,
            161
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 9
            },
            "start": {
              "column": 9,
              "line": 9
            }
          }
        }
      ],
      "range": [
        141,
        174
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        176,
        383
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "range": [
            192,
            195
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 11
            },
            "start": {
              "column": 16,
              "line": 11
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                205,
                213
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  207,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              201,
              213
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              },
              "range": [
                224,
                350
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "range": [
                          226,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 13
                          },
                          "start": {
                            "column": 11,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "range": [
                          238,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        226,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 13
                        },
                        "start": {
                          "column": 11,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      226,
                      252
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "range": [
                          263,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "range": [
                          275,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 14
                          },
                          "start": {
                            "column": 20,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        263,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      263,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        305,
                        318
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            306,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 15
                            },
                            "start": {
                              "column": 15,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            314,
                            317
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 15
                            },
                            "start": {
                              "column": 23,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        299,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      299,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
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
                          "name": "children",
                          "optional": false,
                          "range": [
                            323,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 15
                            },
                            "start": {
                              "column": 32,
                              "line": 15
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
                              "column": 57,
                              "line": 15
                            },
                            "start": {
                              "column": 41,
                              "line": 15
                            }
                          },
                          "range": [
                            332,
                            348
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "range": [
                                334,
                                348
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 15
                                },
                                "start": {
                                  "column": 43,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              334,
                              348
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 15
                              },
                              "start": {
                                "column": 43,
                                "line": 15
                              }
                            }
                          }
                        },
                        "range": [
                          323,
                          348
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 15
                          },
                          "start": {
                            "column": 32,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      321,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  226,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              219,
              350
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              },
              "range": [
                360,
                368
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  362,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              356,
              368
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 13,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 17
            }
          },
          "range": [
            370,
            382
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                377,
                382
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    378,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "range": [
                372,
                377
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 17
                },
                "start": {
                  "column": 3,
                  "line": 17
                }
              }
            },
            "range": [
              372,
              382
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 3,
                "line": 17
              }
            }
          }
        },
        "range": [
          183,
          383
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 14,
          "line": 17
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
        384,
        526
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "range": [
            400,
            403
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 18
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              },
              "range": [
                416,
                434
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    431,
                    434
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
                          432,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 24,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        432,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 24,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 23,
                      "line": 19
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "range": [
                    418,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 19
                    },
                    "start": {
                      "column": 10,
                      "line": 19
                    }
                  }
                },
                "range": [
                  418,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              412,
              434
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              },
              "range": [
                445,
                493
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "range": [
                        447,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      447,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 20
                      },
                      "start": {
                        "column": 11,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        460,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      460,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
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
                          "name": "children",
                          "optional": false,
                          "range": [
                            466,
                            474
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 20
                            },
                            "start": {
                              "column": 30,
                              "line": 20
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
                              "column": 55,
                              "line": 20
                            },
                            "start": {
                              "column": 39,
                              "line": 20
                            }
                          },
                          "range": [
                            475,
                            491
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChild",
                              "optional": false,
                              "range": [
                                477,
                                491
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 20
                                },
                                "start": {
                                  "column": 41,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              477,
                              491
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 20
                              },
                              "start": {
                                "column": 41,
                                "line": 20
                              }
                            }
                          }
                        },
                        "range": [
                          466,
                          491
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 20
                          },
                          "start": {
                            "column": 30,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      464,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 20
                      },
                      "start": {
                        "column": 28,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  447,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              440,
              493
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              },
              "range": [
                503,
                511
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  505,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              499,
              511
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 13,
              "line": 22
            },
            "start": {
              "column": 1,
              "line": 22
            }
          },
          "range": [
            513,
            525
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                520,
                525
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    521,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "range": [
                515,
                520
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 22
                },
                "start": {
                  "column": 3,
                  "line": 22
                }
              }
            },
            "range": [
              515,
              525
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 22,
              "line": 18
            },
            "start": {
              "column": 19,
              "line": 18
            }
          },
          "range": [
            403,
            406
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
                  404,
                  405
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                }
              },
              "out": false,
              "range": [
                404,
                405
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            }
          ]
        },
        "range": [
          391,
          526
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "column": 14,
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
        528,
        738
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "range": [
            544,
            548
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 24
            },
            "start": {
              "column": 16,
              "line": 24
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              },
              "range": [
                558,
                566
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  560,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              554,
              566
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 61,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              },
              "range": [
                577,
                705
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "range": [
                          579,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 26
                          },
                          "start": {
                            "column": 11,
                            "line": 26
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "range": [
                          591,
                          605
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 26
                          },
                          "start": {
                            "column": 23,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        579,
                        605
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 26
                        },
                        "start": {
                          "column": 11,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      579,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 26
                      },
                      "start": {
                        "column": 11,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "range": [
                          616,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "range": [
                          628,
                          641
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 27
                          },
                          "start": {
                            "column": 20,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        616,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      616,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        658,
                        671
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            659,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 28
                            },
                            "start": {
                              "column": 15,
                              "line": 28
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            667,
                            670
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 28
                            },
                            "start": {
                              "column": 23,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 28
                        },
                        "start": {
                          "column": 14,
                          "line": 28
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        652,
                        658
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      652,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                          "name": "children",
                          "optional": false,
                          "range": [
                            676,
                            684
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 28
                            },
                            "start": {
                              "column": 32,
                              "line": 28
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
                              "column": 59,
                              "line": 28
                            },
                            "start": {
                              "column": 41,
                              "line": 28
                            }
                          },
                          "range": [
                            685,
                            703
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentChild",
                                "optional": false,
                                "range": [
                                  687,
                                  701
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 28
                                  }
                                }
                              },
                              "range": [
                                687,
                                701
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 28
                                },
                                "start": {
                                  "column": 43,
                                  "line": 28
                                }
                              }
                            },
                            "range": [
                              687,
                              703
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 28
                              },
                              "start": {
                                "column": 43,
                                "line": 28
                              }
                            }
                          }
                        },
                        "range": [
                          676,
                          703
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 28
                          },
                          "start": {
                            "column": 32,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      674,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 28
                      },
                      "start": {
                        "column": 30,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  579,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              572,
              705
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              },
              "range": [
                715,
                723
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  717,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              711,
              723
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 13,
              "line": 30
            },
            "start": {
              "column": 1,
              "line": 30
            }
          },
          "range": [
            725,
            737
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                732,
                737
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    733,
                    736
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 30
                    },
                    "start": {
                      "column": 9,
                      "line": 30
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "range": [
                727,
                732
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 30
                },
                "start": {
                  "column": 3,
                  "line": 30
                }
              }
            },
            "range": [
              727,
              737
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 30
              },
              "start": {
                "column": 3,
                "line": 30
              }
            }
          }
        },
        "range": [
          535,
          738
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 30
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
          "column": 14,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        739,
        884
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxs",
          "optional": false,
          "range": [
            755,
            759
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 31
            },
            "start": {
              "column": 16,
              "line": 31
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              },
              "range": [
                772,
                790
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    787,
                    790
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
                          788,
                          789
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 32
                          },
                          "start": {
                            "column": 24,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        788,
                        789
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 32
                        },
                        "start": {
                          "column": 24,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 23,
                      "line": 32
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "range": [
                    774,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 32
                    },
                    "start": {
                      "column": 10,
                      "line": 32
                    }
                  }
                },
                "range": [
                  774,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              768,
              790
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              },
              "range": [
                801,
                851
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "range": [
                        803,
                        813
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 33
                        },
                        "start": {
                          "column": 11,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      803,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 33
                      },
                      "start": {
                        "column": 11,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        816,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 33
                        },
                        "start": {
                          "column": 24,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      816,
                      817
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 33
                      },
                      "start": {
                        "column": 24,
                        "line": 33
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
                          "name": "children",
                          "optional": false,
                          "range": [
                            822,
                            830
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 33
                            },
                            "start": {
                              "column": 30,
                              "line": 33
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
                              "column": 57,
                              "line": 33
                            },
                            "start": {
                              "column": 39,
                              "line": 33
                            }
                          },
                          "range": [
                            831,
                            849
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentChild",
                                "optional": false,
                                "range": [
                                  833,
                                  847
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                833,
                                847
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 33
                                },
                                "start": {
                                  "column": 41,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              833,
                              849
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 33
                              },
                              "start": {
                                "column": 41,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          822,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 33
                          },
                          "start": {
                            "column": 30,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      820,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 33
                      },
                      "start": {
                        "column": 28,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  803,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 33
                  },
                  "start": {
                    "column": 11,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              796,
              851
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              },
              "range": [
                861,
                869
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  863,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              857,
              869
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 13,
              "line": 35
            },
            "start": {
              "column": 1,
              "line": 35
            }
          },
          "range": [
            871,
            883
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                878,
                883
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    879,
                    882
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 35
                    },
                    "start": {
                      "column": 9,
                      "line": 35
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "range": [
                873,
                878
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 35
                },
                "start": {
                  "column": 3,
                  "line": 35
                }
              }
            },
            "range": [
              873,
              883
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 35
              },
              "start": {
                "column": 3,
                "line": 35
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 23,
              "line": 31
            },
            "start": {
              "column": 20,
              "line": 31
            }
          },
          "range": [
            759,
            762
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
                  760,
                  761
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 31
                  },
                  "start": {
                    "column": 21,
                    "line": 31
                  }
                }
              },
              "out": false,
              "range": [
                760,
                761
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 31
                },
                "start": {
                  "column": 21,
                  "line": 31
                }
              }
            }
          ]
        },
        "range": [
          746,
          884
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 35
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 14,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        886,
        1099
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "range": [
            902,
            908
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 37
            },
            "start": {
              "column": 16,
              "line": 37
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              },
              "range": [
                918,
                926
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  920,
                  926
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              914,
              926
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              },
              "range": [
                937,
                1066
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "range": [
                          939,
                          950
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLAttributes",
                        "optional": false,
                        "range": [
                          951,
                          965
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 39
                          },
                          "start": {
                            "column": 23,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        939,
                        965
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 39
                        },
                        "start": {
                          "column": 11,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      939,
                      965
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 39
                      },
                      "start": {
                        "column": 11,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSXInternal",
                        "optional": false,
                        "range": [
                          976,
                          987
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SVGAttributes",
                        "optional": false,
                        "range": [
                          988,
                          1001
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 40
                          },
                          "start": {
                            "column": 20,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        976,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      976,
                      1001
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1018,
                        1031
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1019,
                            1025
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 41
                            },
                            "start": {
                              "column": 15,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            1027,
                            1030
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 41
                            },
                            "start": {
                              "column": 23,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 41
                        },
                        "start": {
                          "column": 14,
                          "line": 41
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        1012,
                        1018
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1012,
                      1031
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
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
                          "name": "children",
                          "optional": false,
                          "range": [
                            1036,
                            1044
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 41
                            },
                            "start": {
                              "column": 32,
                              "line": 41
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
                              "column": 60,
                              "line": 41
                            },
                            "start": {
                              "column": 41,
                              "line": 41
                            }
                          },
                          "range": [
                            1045,
                            1064
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "range": [
                                1047,
                                1064
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 41
                                },
                                "start": {
                                  "column": 43,
                                  "line": 41
                                }
                              }
                            },
                            "range": [
                              1047,
                              1064
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 41
                              },
                              "start": {
                                "column": 43,
                                "line": 41
                              }
                            }
                          }
                        },
                        "range": [
                          1036,
                          1064
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 41
                          },
                          "start": {
                            "column": 32,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "range": [
                      1034,
                      1066
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 41
                      },
                      "start": {
                        "column": 30,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  939,
                  1066
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              932,
              1066
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 42
                }
              },
              "range": [
                1076,
                1084
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1078,
                  1084
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              1072,
              1084
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 13,
              "line": 43
            },
            "start": {
              "column": 1,
              "line": 43
            }
          },
          "range": [
            1086,
            1098
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1093,
                1098
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    1094,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 43
                    },
                    "start": {
                      "column": 9,
                      "line": 43
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 8,
                  "line": 43
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "range": [
                1088,
                1093
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 43
                },
                "start": {
                  "column": 3,
                  "line": 43
                }
              }
            },
            "range": [
              1088,
              1098
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 43
              },
              "start": {
                "column": 3,
                "line": 43
              }
            }
          }
        },
        "range": [
          893,
          1099
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 14,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1100,
        1248
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsxDEV",
          "optional": false,
          "range": [
            1116,
            1122
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 44
            },
            "start": {
              "column": 16,
              "line": 44
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              },
              "range": [
                1135,
                1153
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1150,
                    1153
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
                          1151,
                          1152
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 45
                          },
                          "start": {
                            "column": 24,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1151,
                        1152
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 45
                        },
                        "start": {
                          "column": 24,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 45
                    },
                    "start": {
                      "column": 23,
                      "line": 45
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "range": [
                    1137,
                    1150
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 45
                    },
                    "start": {
                      "column": 10,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1137,
                  1153
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 45
                  },
                  "start": {
                    "column": 10,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              1131,
              1153
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 60,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              },
              "range": [
                1164,
                1215
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Attributes",
                      "optional": false,
                      "range": [
                        1166,
                        1176
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1166,
                      1176
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 46
                      },
                      "start": {
                        "column": 11,
                        "line": 46
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1179,
                        1180
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 46
                        },
                        "start": {
                          "column": 24,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1179,
                      1180
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 46
                      },
                      "start": {
                        "column": 24,
                        "line": 46
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
                          "name": "children",
                          "optional": false,
                          "range": [
                            1185,
                            1193
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 46
                            },
                            "start": {
                              "column": 30,
                              "line": 46
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
                              "column": 58,
                              "line": 46
                            },
                            "start": {
                              "column": 39,
                              "line": 46
                            }
                          },
                          "range": [
                            1194,
                            1213
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComponentChildren",
                              "optional": false,
                              "range": [
                                1196,
                                1213
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 46
                                },
                                "start": {
                                  "column": 41,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              1196,
                              1213
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 46
                              },
                              "start": {
                                "column": 41,
                                "line": 46
                              }
                            }
                          }
                        },
                        "range": [
                          1185,
                          1213
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 46
                          },
                          "start": {
                            "column": 30,
                            "line": 46
                          }
                        }
                      }
                    ],
                    "range": [
                      1183,
                      1215
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 46
                      },
                      "start": {
                        "column": 28,
                        "line": 46
                      }
                    }
                  }
                ],
                "range": [
                  1166,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 46
                  },
                  "start": {
                    "column": 11,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1159,
              1215
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 47
                },
                "start": {
                  "column": 8,
                  "line": 47
                }
              },
              "range": [
                1225,
                1233
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1227,
                  1233
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 47
                  },
                  "start": {
                    "column": 10,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1221,
              1233
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 13,
              "line": 48
            },
            "start": {
              "column": 1,
              "line": 48
            }
          },
          "range": [
            1235,
            1247
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1242,
                1247
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    1243,
                    1246
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 48
                    },
                    "start": {
                      "column": 9,
                      "line": 48
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 48
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VNode",
              "optional": false,
              "range": [
                1237,
                1242
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 48
                },
                "start": {
                  "column": 3,
                  "line": 48
                }
              }
            },
            "range": [
              1237,
              1247
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 48
              },
              "start": {
                "column": 3,
                "line": 48
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 44
            },
            "start": {
              "column": 22,
              "line": 44
            }
          },
          "range": [
            1122,
            1125
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
                  1123,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 44
                  },
                  "start": {
                    "column": 23,
                    "line": 44
                  }
                }
              },
              "out": false,
              "range": [
                1123,
                1124
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 44
                },
                "start": {
                  "column": 23,
                  "line": 44
                }
              }
            }
          ]
        },
        "range": [
          1107,
          1248
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 48
          },
          "start": {
            "column": 7,
            "line": 44
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 14,
          "line": 48
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
            "type": "ExportNamedDeclaration",
            "range": [
              1449,
              1481
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "range": [
                  1463,
                  1466
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 56
                  },
                  "start": {
                    "column": 18,
                    "line": 56
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSXInternal",
                "optional": false,
                "range": [
                  1469,
                  1480
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 56
                  },
                  "start": {
                    "column": 24,
                    "line": 56
                  }
                }
              },
              "range": [
                1456,
                1481
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 56
                },
                "start": {
                  "column": 11,
                  "line": 56
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 36,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1425,
          1483
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 15,
            "line": 54
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          1418,
          1424
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 54
          },
          "start": {
            "column": 8,
            "line": 54
          }
        }
      },
      "kind": "global",
      "range": [
        1410,
        1483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 57
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
    38
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        38
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
              "name": "Comp",
              "optional": false,
              "range": [
                13,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "JSXElement",
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "range": [
                      33,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 33,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    31,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "range": [
                      27,
                      30
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    26,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                },
                "range": [
                  26,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                20,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
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
          "column": 38,
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
      "column": 38,
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
