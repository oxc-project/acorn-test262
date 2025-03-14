__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    772
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          57,
          60
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 39,
            "line": 2
          },
          "start": {
            "column": 36,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          31,
          40
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        },
        "range": [
          40,
          56
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                45,
                47
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                41,
                42
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              41,
              47
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
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
                53,
                55
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "range": [
                49,
                50
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              49,
              55
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 28,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        21,
        60
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 2
        },
        "start": {
          "column": 0,
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
          91,
          208
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                97,
                108
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                108,
                134
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    },
                    "range": [
                      114,
                      117
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          116,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        116,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    109,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    },
                    "range": [
                      127,
                      132
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        129,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    119,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              97,
              134
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
              "name": "render",
              "optional": false,
              "range": [
                139,
                145
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                145,
                152
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                },
                "range": [
                  147,
                  151
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    149,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "range": [
              139,
              152
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
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
                157,
                162
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                162,
                205
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        172,
                        191
                      ],
                      "params": [
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
                                  175,
                                  183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 6
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
                                    "column": 35,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 6
                                  }
                                },
                                "range": [
                                  184,
                                  188
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "range": [
                                    186,
                                    188
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
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
                                175,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 6
                                },
                                "start": {
                                  "column": 22,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            173,
                            190
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "range": [
                        164,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 11,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      164,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        202,
                        205
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
                              203,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 6
                              },
                              "start": {
                                "column": 50,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            203,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 6
                            },
                            "start": {
                              "column": 50,
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
                          "column": 49,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "range": [
                        194,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 6
                        },
                        "start": {
                          "column": 41,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      194,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 6
                      },
                      "start": {
                        "column": 41,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  164,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              157,
              206
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
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 3
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          75,
          84
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        },
        "range": [
          84,
          90
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
                85,
                86
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
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
              "name": "S",
              "optional": false,
              "range": [
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        61,
        208
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      274,
                      277
                    ],
                    "body": [],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 27,
                        "line": 11
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "range": [
                      265,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    255,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      310,
                      347
                    ],
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "render",
                          "optional": false,
                          "range": [
                            324,
                            330
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          },
                          "range": [
                            332,
                            336
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              334,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 22,
                                "line": 13
                              }
                            }
                          }
                        },
                        "static": false,
                        "range": [
                          324,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 32,
                        "line": 12
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementClass",
                    "optional": false,
                    "range": [
                      296,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 12
                      },
                      "start": {
                        "column": 18,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    286,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      392,
                      406
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
                            394,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 15
                            },
                            "start": {
                              "column": 46,
                              "line": 15
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
                              "column": 55,
                              "line": 15
                            },
                            "start": {
                              "column": 51,
                              "line": 15
                            }
                          },
                          "range": [
                            399,
                            403
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              401,
                              403
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 15
                              },
                              "start": {
                                "column": 53,
                                "line": 15
                              }
                            }
                          }
                        },
                        "range": [
                          394,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 15
                          },
                          "start": {
                            "column": 46,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
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
                      366,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    356,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      450,
                      467
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
                            452,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 16
                            },
                            "start": {
                              "column": 45,
                              "line": 16
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
                              "column": 57,
                              "line": 16
                            },
                            "start": {
                              "column": 53,
                              "line": 16
                            }
                          },
                          "range": [
                            460,
                            464
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              462,
                              464
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 16
                              },
                              "start": {
                                "column": 55,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          452,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 16
                          },
                          "start": {
                            "column": 45,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 16
                      },
                      "start": {
                        "column": 43,
                        "line": 16
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
                      425,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 16
                      },
                      "start": {
                        "column": 18,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    415,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      507,
                      510
                    ],
                    "body": [],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 17
                      },
                      "start": {
                        "column": 39,
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
                      486,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    476,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      557,
                      560
                    ],
                    "body": [],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 46,
                        "line": 18
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicClassAttributes",
                    "optional": false,
                    "range": [
                      529,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 18
                      },
                      "start": {
                        "column": 18,
                        "line": 18
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 18
                      },
                      "start": {
                        "column": 42,
                        "line": 18
                      }
                    },
                    "range": [
                      553,
                      556
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
                            554,
                            555
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 18
                            },
                            "start": {
                              "column": 43,
                              "line": 18
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          554,
                          555
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 18
                          },
                          "start": {
                            "column": 43,
                            "line": 18
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    519,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
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
                245,
                566
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                241,
                244
              ],
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "kind": "namespace",
            "range": [
              231,
              566
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          225,
          568
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 15,
            "line": 9
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
          218,
          224
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 9
          }
        }
      },
      "kind": "global",
      "range": [
        210,
        568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
        570,
        647
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            598,
            647
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
                  604,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
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
                    "column": 44,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                },
                "range": [
                  613,
                  644
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 23
                          },
                          "start": {
                            "column": 21,
                            "line": 23
                          }
                        },
                        "range": [
                          621,
                          636
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  625,
                                  626
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 23
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
                                    "column": 34,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 23
                                  }
                                },
                                "range": [
                                  626,
                                  634
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    628,
                                    634
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 23
                                    }
                                  }
                                }
                              },
                              "range": [
                                625,
                                634
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 23
                                },
                                "start": {
                                  "column": 25,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "range": [
                            623,
                            636
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          }
                        }
                      },
                      "range": [
                        616,
                        636
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 23
                      },
                      "start": {
                        "column": 38,
                        "line": 23
                      }
                    },
                    "range": [
                      638,
                      644
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        641,
                        644
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 23
                        },
                        "start": {
                          "column": 41,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    615,
                    644
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                }
              },
              "range": [
                604,
                645
              ],
              "loc": {
                "end": {
                  "column": 45,
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
              "column": 28,
              "line": 22
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RouteProps",
          "optional": false,
          "range": [
            587,
            597
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 22
            },
            "start": {
              "column": 17,
              "line": 22
            }
          }
        },
        "range": [
          577,
          647
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        648,
        732
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            729,
            732
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 84,
              "line": 25
            },
            "start": {
              "column": 81,
              "line": 25
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
            661,
            672
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 25
            },
            "start": {
              "column": 13,
              "line": 25
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            716,
            725
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 25
            },
            "start": {
              "column": 68,
              "line": 25
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            725,
            728
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
                  726,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 25
                  },
                  "start": {
                    "column": 78,
                    "line": 25
                  }
                }
              },
              "range": [
                726,
                727
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 25
                },
                "start": {
                  "column": 78,
                  "line": 25
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 25
            },
            "start": {
              "column": 77,
              "line": 25
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 59,
              "line": 25
            },
            "start": {
              "column": 24,
              "line": 25
            }
          },
          "range": [
            672,
            707
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
                  "name": "RouteProps",
                  "optional": false,
                  "range": [
                    683,
                    693
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 25
                    },
                    "start": {
                      "column": 35,
                      "line": 25
                    }
                  }
                },
                "range": [
                  683,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 25
                  },
                  "start": {
                    "column": 35,
                    "line": 25
                  }
                }
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RouteProps",
                  "optional": false,
                  "range": [
                    696,
                    706
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 25
                    },
                    "start": {
                      "column": 48,
                      "line": 25
                    }
                  }
                },
                "range": [
                  696,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 25
                  },
                  "start": {
                    "column": 48,
                    "line": 25
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
                  673,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 25
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                }
              },
              "out": false,
              "range": [
                673,
                706
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            }
          ]
        },
        "range": [
          655,
          732
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 84,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            733,
            772
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "children",
                "range": [
                  746,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      767,
                      769
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 26
                      },
                      "start": {
                        "column": 34,
                        "line": 26
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              759,
                              760
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 26
                              },
                              "start": {
                                "column": 26,
                                "line": 26
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              759,
                              760
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 26
                              },
                              "start": {
                                "column": 26,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            759,
                            760
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 26
                            },
                            "start": {
                              "column": 26,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        757,
                        762
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 26
                        },
                        "start": {
                          "column": 24,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    756,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 26
                    },
                    "start": {
                      "column": 23,
                      "line": 26
                    }
                  }
                },
                "range": [
                  755,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              },
              "range": [
                746,
                770
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "range": [
              734,
              745
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 1,
                "line": 26
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 39,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "range": [
          733,
          772
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        733,
        772
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 39,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
