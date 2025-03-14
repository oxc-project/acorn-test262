__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    751
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Types",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'boolean'",
              "value": "boolean",
              "range": [
                13,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'unknown'",
              "value": "unknown",
              "range": [
                25,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "range": [
              25,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'string'",
              "value": "string",
              "range": [
                37,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "range": [
              37,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          }
        ],
        "range": [
          13,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "range": [
          53,
          63
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                131,
                132
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            },
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 27,
                "line": 4
              }
            }
          },
          "range": [
            125,
            132
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 4
            },
            "start": {
              "column": 21,
              "line": 4
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "range": [
            118,
            121
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  137,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              },
              "range": [
                137,
                140
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
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
                  135,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              },
              "range": [
                135,
                136
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            },
            "range": [
              135,
              141
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 4
              },
              "start": {
                "column": 31,
                "line": 4
              }
            }
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'boolean'",
              "value": "boolean",
              "range": [
                150,
                159
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 4
                },
                "start": {
                  "column": 46,
                  "line": 4
                }
              }
            },
            "range": [
              150,
              159
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 4
              },
              "start": {
                "column": 46,
                "line": 4
              }
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "range": [
                    174,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 4
                    },
                    "start": {
                      "column": 70,
                      "line": 4
                    }
                  }
                },
                "range": [
                  174,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 4
                  },
                  "start": {
                    "column": 70,
                    "line": 4
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
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 4
                    },
                    "start": {
                      "column": 68,
                      "line": 4
                    }
                  }
                },
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 4
                  },
                  "start": {
                    "column": 68,
                    "line": 4
                  }
                }
              },
              "range": [
                172,
                178
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 4
                },
                "start": {
                  "column": 68,
                  "line": 4
                }
              }
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'string'",
                "value": "string",
                "range": [
                  187,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 4
                  },
                  "start": {
                    "column": 83,
                    "line": 4
                  }
                }
              },
              "range": [
                187,
                195
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 4
                },
                "start": {
                  "column": 83,
                  "line": 4
                }
              }
            },
            "falseType": {
              "type": "TSUnknownKeyword",
              "range": [
                207,
                214
              ],
              "loc": {
                "end": {
                  "column": 110,
                  "line": 4
                },
                "start": {
                  "column": 103,
                  "line": 4
                }
              }
            },
            "trueType": {
              "type": "TSStringKeyword",
              "range": [
                198,
                204
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 4
                },
                "start": {
                  "column": 94,
                  "line": 4
                }
              }
            },
            "range": [
              172,
              214
            ],
            "loc": {
              "end": {
                "column": 110,
                "line": 4
              },
              "start": {
                "column": 68,
                "line": 4
              }
            }
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "range": [
              162,
              169
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 4
              },
              "start": {
                "column": 58,
                "line": 4
              }
            }
          },
          "range": [
            135,
            214
          ],
          "loc": {
            "end": {
              "column": 110,
              "line": 4
            },
            "start": {
              "column": 31,
              "line": 4
            }
          }
        },
        "range": [
          102,
          216
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 54,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          63,
          99
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 3
                          },
                          "start": {
                            "column": 32,
                            "line": 3
                          }
                        },
                        "range": [
                          80,
                          88
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            82,
                            88
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 3
                            },
                            "start": {
                              "column": 34,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        77,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    },
                    "range": [
                      89,
                      96
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "range": [
                          91,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 3
                          },
                          "start": {
                            "column": 43,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        91,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 3
                        },
                        "start": {
                          "column": 43,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    76,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                74,
                98
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
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
                64,
                65
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
              64,
              98
            ],
            "loc": {
              "end": {
                "column": 50,
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
        48,
        216
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
        "name": "AnyCtor",
        "optional": false,
        "range": [
          223,
          230
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
              "name": "a",
              "optional": false,
              "range": [
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 41,
                  "line": 7
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 7
                },
                "start": {
                  "column": 42,
                  "line": 7
                }
              },
              "range": [
                260,
                267
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    262,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
                    }
                  }
                },
                "range": [
                  262,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 7
                  },
                  "start": {
                    "column": 44,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              256,
              267
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
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 55,
              "line": 7
            },
            "start": {
              "column": 51,
              "line": 7
            }
          },
          "range": [
            269,
            273
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                272,
                273
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 7
                },
                "start": {
                  "column": 54,
                  "line": 7
                }
              }
            },
            "range": [
              272,
              273
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 7
              },
              "start": {
                "column": 54,
                "line": 7
              }
            }
          }
        },
        "range": [
          251,
          273
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 7
          },
          "start": {
            "column": 33,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 12,
            "line": 7
          }
        },
        "range": [
          230,
          248
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                241,
                247
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
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
                231,
                232
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              231,
              247
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        218,
        273
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "classWithProperties",
        "optional": false,
        "range": [
          292,
          311
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "properties",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 104,
                "line": 9
              },
              "start": {
                "column": 101,
                "line": 9
              }
            },
            "range": [
              376,
              379
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  378,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 9
                  },
                  "start": {
                    "column": 103,
                    "line": 9
                  }
                }
              },
              "range": [
                378,
                379
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 9
                },
                "start": {
                  "column": 103,
                  "line": 9
                }
              }
            }
          },
          "range": [
            366,
            379
          ],
          "loc": {
            "end": {
              "column": 104,
              "line": 9
            },
            "start": {
              "column": 91,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "klass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 123,
                "line": 9
              },
              "start": {
                "column": 111,
                "line": 9
              }
            },
            "range": [
              386,
              398
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  395,
                  398
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
                        396,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 9
                        },
                        "start": {
                          "column": 121,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      396,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 9
                      },
                      "start": {
                        "column": 121,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 123,
                    "line": 9
                  },
                  "start": {
                    "column": 120,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyCtor",
                "optional": false,
                "range": [
                  388,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 120,
                    "line": 9
                  },
                  "start": {
                    "column": 113,
                    "line": 9
                  }
                }
              },
              "range": [
                388,
                398
              ],
              "loc": {
                "end": {
                  "column": 123,
                  "line": 9
                },
                "start": {
                  "column": 113,
                  "line": 9
                }
              }
            }
          },
          "range": [
            381,
            398
          ],
          "loc": {
            "end": {
              "column": 123,
              "line": 9
            },
            "start": {
              "column": 106,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 124,
            "line": 9
          }
        },
        "range": [
          399,
          467
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
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                },
                "range": [
                  412,
                  431
                ],
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          414,
                          415
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 10
                          },
                          "start": {
                            "column": 11,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        414,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
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
                                  "column": 27,
                                  "line": 10
                                },
                                "start": {
                                  "column": 26,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              429,
                              430
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 10
                              },
                              "start": {
                                "column": 26,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "range": [
                          418,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        418,
                        431
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    414,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                407,
                432
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "range": [
                  437,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
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
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                },
                "range": [
                  446,
                  465
                ],
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "range": [
                          448,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        448,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          462,
                          465
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
                                463,
                                464
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 11
                                },
                                "start": {
                                  "column": 30,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              463,
                              464
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 11
                              },
                              "start": {
                                "column": 30,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 11
                          },
                          "start": {
                            "column": 29,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "range": [
                          452,
                          462
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 19,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        452,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 11
                        },
                        "start": {
                          "column": 19,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    448,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              },
              "range": [
                437,
                465
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            }
          ],
          "range": [
            401,
            467
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 126,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 90,
            "line": 9
          },
          "start": {
            "column": 36,
            "line": 9
          }
        },
        "range": [
          311,
          365
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 9
                          },
                          "start": {
                            "column": 53,
                            "line": 9
                          }
                        },
                        "range": [
                          328,
                          336
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            330,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 9
                            },
                            "start": {
                              "column": 55,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        325,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 9
                        },
                        "start": {
                          "column": 50,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 9
                      },
                      "start": {
                        "column": 62,
                        "line": 9
                      }
                    },
                    "range": [
                      337,
                      344
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Types",
                        "optional": false,
                        "range": [
                          339,
                          344
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 9
                          },
                          "start": {
                            "column": 64,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        339,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 9
                        },
                        "start": {
                          "column": 64,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    324,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 9
                    },
                    "start": {
                      "column": 49,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                322,
                346
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 9
                },
                "start": {
                  "column": 47,
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
                312,
                313
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 9
                },
                "start": {
                  "column": 37,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              312,
              346
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 9
              },
              "start": {
                "column": 37,
                "line": 9
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                358,
                364
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 9
                },
                "start": {
                  "column": 83,
                  "line": 9
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
                348,
                349
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 9
                },
                "start": {
                  "column": 73,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              348,
              364
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 9
              },
              "start": {
                "column": 73,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        275,
        468
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "Base",
            "optional": false,
            "range": [
              476,
              480
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
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
                        513,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "kind": "get",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        514,
                        546
                      ],
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
                                "raw": "'boolean'",
                                "value": "boolean",
                                "range": [
                                  526,
                                  535
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 15
                                  }
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "const",
                                  "optional": false,
                                  "range": [
                                    539,
                                    544
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  539,
                                  544
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                526,
                                544
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 15
                                },
                                "start": {
                                  "column": 21,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              519,
                              544
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 15
                              },
                              "start": {
                                "column": 14,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          517,
                          546
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 15
                        },
                        "start": {
                          "column": 9,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      509,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 15
                      },
                      "start": {
                        "column": 4,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        552,
                        553
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 16
                        },
                        "start": {
                          "column": 4,
                          "line": 16
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'string'",
                      "value": "string",
                      "range": [
                        555,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 7,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      552,
                      563
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  503,
                  566
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 17
                  },
                  "start": {
                    "column": 33,
                    "line": 14
                  }
                }
              },
              {
                "type": "ClassExpression",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    579,
                    582
                  ],
                  "body": [],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 18
                    },
                    "start": {
                      "column": 14,
                      "line": 17
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "range": [
                    574,
                    578
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 17
                    },
                    "start": {
                      "column": 9,
                      "line": 17
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  568,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 18
                  },
                  "start": {
                    "column": 3,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "classWithProperties",
              "optional": false,
              "range": [
                483,
                502
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              483,
              583
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 14
              }
            }
          },
          "range": [
            476,
            583
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        470,
        584
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 18
        },
        "start": {
          "column": 0,
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
          613,
          698
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                623,
                624
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
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
                624,
                656
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        644,
                        649
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 15,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      637,
                      650
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  627,
                  656
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "range": [
              619,
              656
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
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
              "name": "y",
              "optional": false,
              "range": [
                665,
                666
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
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
                666,
                696
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "'hi'",
                      "value": "hi",
                      "range": [
                        686,
                        690
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      679,
                      690
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  669,
                  696
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              661,
              696
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 27,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          592,
          599
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          608,
          612
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 20
          },
          "start": {
            "column": 22,
            "line": 20
          }
        }
      },
      "range": [
        586,
        698
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "mine",
            "optional": false,
            "range": [
              706,
              710
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "range": [
                717,
                724
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 29
                },
                "start": {
                  "column": 17,
                  "line": 29
                }
              }
            },
            "range": [
              713,
              726
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 29
              }
            }
          },
          "range": [
            706,
            726
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        700,
        727
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "value",
            "optional": false,
            "range": [
              734,
              739
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
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mine",
              "optional": false,
              "range": [
                742,
                746
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 30
                },
                "start": {
                  "column": 14,
                  "line": 30
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                747,
                748
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 30
                },
                "start": {
                  "column": 19,
                  "line": 30
                }
              }
            },
            "range": [
              742,
              748
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 30
              },
              "start": {
                "column": 14,
                "line": 30
              }
            }
          },
          "range": [
            734,
            748
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
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        728,
        749
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
