__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    25,
    778
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            48,
            55
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "range": [
          40,
          56
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        25,
        56
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
        "name": "Component",
        "optional": false,
        "range": [
          75,
          84
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            },
            "range": [
              89,
              92
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  91,
                  92
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
              "range": [
                91,
                92
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
            }
          },
          "range": [
            88,
            92
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 30,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 5
          }
        },
        "range": [
          93,
          106
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                95,
                98
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 37,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                99,
                106
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 5
                },
                "start": {
                  "column": 41,
                  "line": 5
                }
              }
            },
            "range": [
              95,
              106
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            }
          },
          "range": [
            95,
            106
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 5
            },
            "start": {
              "column": 37,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 5
          }
        },
        "range": [
          84,
          87
        ],
        "params": [
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
                85,
                86
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
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
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        58,
        107
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "range": [
                    179,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      184,
                      206
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            199,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 28,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          195,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 7
                          },
                          "start": {
                            "column": 24,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Component",
                      "range": [
                        185,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 7
                        },
                        "start": {
                          "column": 14,
                          "line": 7
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    184,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                },
                "range": [
                  179,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              175,
              207
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                  "name": "a2",
                  "optional": false,
                  "range": [
                    216,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      221,
                      249
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            236,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 8
                            },
                            "start": {
                              "column": 28,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          232,
                          240
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 8
                          },
                          "start": {
                            "column": 24,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop1",
                          "range": [
                            241,
                            246
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 33,
                              "line": 8
                            }
                          }
                        },
                        "value": null,
                        "range": [
                          241,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 8
                          },
                          "start": {
                            "column": 33,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Component",
                      "range": [
                        222,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 8
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    221,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "range": [
                  216,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              212,
              250
            ],
            "loc": {
              "end": {
                "column": 42,
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
          169,
          252
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 61,
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
        "name": "createComponent",
        "optional": false,
        "range": [
          117,
          132
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
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
              164,
              167
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  166,
                  167
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
                166,
                167
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
            161,
            167
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 6
            },
            "start": {
              "column": 53,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 6
          }
        },
        "range": [
          132,
          160
        ],
        "params": [
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
                    "name": "prop",
                    "optional": false,
                    "range": [
                      145,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 37,
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
                        "column": 49,
                        "line": 6
                      },
                      "start": {
                        "column": 41,
                        "line": 6
                      }
                    },
                    "range": [
                      149,
                      157
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        151,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
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
                    145,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                143,
                159
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
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
                133,
                134
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              133,
              159
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 6
              },
              "start": {
                "column": 25,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        108,
        252
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "ComponentSpecific",
        "optional": false,
        "range": [
          271,
          288
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 52,
                "line": 11
              },
              "start": {
                "column": 39,
                "line": 11
              }
            },
            "range": [
              293,
              306
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
                    "name": "prop",
                    "optional": false,
                    "range": [
                      297,
                      301
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 11
                      },
                      "start": {
                        "column": 43,
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
                        "column": 50,
                        "line": 11
                      },
                      "start": {
                        "column": 47,
                        "line": 11
                      }
                    },
                    "range": [
                      301,
                      304
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          303,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 11
                          },
                          "start": {
                            "column": 49,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        303,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 11
                        },
                        "start": {
                          "column": 49,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    297,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 11
                    },
                    "start": {
                      "column": 43,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                295,
                306
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 11
                },
                "start": {
                  "column": 41,
                  "line": 11
                }
              }
            }
          },
          "range": [
            292,
            306
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 11
            },
            "start": {
              "column": 38,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 11
          },
          "start": {
            "column": 53,
            "line": 11
          }
        },
        "range": [
          307,
          320
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                309,
                312
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 11
                },
                "start": {
                  "column": 55,
                  "line": 11
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                313,
                320
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 11
                },
                "start": {
                  "column": 59,
                  "line": 11
                }
              }
            },
            "range": [
              309,
              320
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 11
              },
              "start": {
                "column": 55,
                "line": 11
              }
            }
          },
          "range": [
            309,
            320
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 11
            },
            "start": {
              "column": 55,
              "line": 11
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 37,
            "line": 11
          },
          "start": {
            "column": 34,
            "line": 11
          }
        },
        "range": [
          288,
          291
        ],
        "params": [
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
                289,
                290
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 11
                },
                "start": {
                  "column": 35,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              289,
              290
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 11
              },
              "start": {
                "column": 35,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        254,
        321
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "ComponentSpecific1",
        "optional": false,
        "range": [
          339,
          357
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 12
              },
              "start": {
                "column": 40,
                "line": 12
              }
            },
            "range": [
              362,
              398
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
                    "name": "prop",
                    "optional": false,
                    "range": [
                      366,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 12
                      },
                      "start": {
                        "column": 44,
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
                        "column": 51,
                        "line": 12
                      },
                      "start": {
                        "column": 48,
                        "line": 12
                      }
                    },
                    "range": [
                      370,
                      373
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          372,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 12
                          },
                          "start": {
                            "column": 50,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        372,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 12
                        },
                        "start": {
                          "column": 50,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    366,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 12
                    },
                    "start": {
                      "column": 44,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "raw": "\"ignore-prop\"",
                    "value": "ignore-prop",
                    "range": [
                      375,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 12
                      },
                      "start": {
                        "column": 53,
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
                        "column": 74,
                        "line": 12
                      },
                      "start": {
                        "column": 66,
                        "line": 12
                      }
                    },
                    "range": [
                      388,
                      396
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        390,
                        396
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 12
                        },
                        "start": {
                          "column": 68,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    375,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 12
                    },
                    "start": {
                      "column": 53,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                364,
                398
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 12
                },
                "start": {
                  "column": 42,
                  "line": 12
                }
              }
            }
          },
          "range": [
            361,
            398
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 12
            },
            "start": {
              "column": 39,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 90,
            "line": 12
          },
          "start": {
            "column": 77,
            "line": 12
          }
        },
        "range": [
          399,
          412
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "range": [
                401,
                404
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 12
                },
                "start": {
                  "column": 79,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                405,
                412
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 12
                },
                "start": {
                  "column": 83,
                  "line": 12
                }
              }
            },
            "range": [
              401,
              412
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 12
              },
              "start": {
                "column": 79,
                "line": 12
              }
            }
          },
          "range": [
            401,
            412
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 12
            },
            "start": {
              "column": 79,
              "line": 12
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 12
          },
          "start": {
            "column": 35,
            "line": 12
          }
        },
        "range": [
          357,
          360
        ],
        "params": [
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
                358,
                359
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 12
                },
                "start": {
                  "column": 36,
                  "line": 12
                }
              }
            },
            "out": false,
            "range": [
              358,
              359
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 12
              },
              "start": {
                "column": 36,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        322,
        413
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "range": [
                    474,
                    476
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      479,
                      526
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            502,
                            505
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 15
                            },
                            "start": {
                              "column": 36,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          498,
                          506
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
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "range": [
                            507,
                            518
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 15
                            },
                            "start": {
                              "column": 41,
                              "line": 15
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "raw": "\"hi\"",
                          "value": "hi",
                          "range": [
                            519,
                            523
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 15
                            },
                            "start": {
                              "column": 53,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          507,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 15
                          },
                          "start": {
                            "column": 41,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "range": [
                        480,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    479,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  474,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              470,
              527
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
                  "name": "a2",
                  "optional": false,
                  "range": [
                    552,
                    554
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      557,
                      605
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            581,
                            584
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 16
                            },
                            "start": {
                              "column": 37,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          577,
                          585
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 16
                          },
                          "start": {
                            "column": 33,
                            "line": 16
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "range": [
                            586,
                            597
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 16
                            },
                            "start": {
                              "column": 42,
                              "line": 16
                            }
                          }
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              599,
                              601
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
                          },
                          "range": [
                            598,
                            602
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 16
                            },
                            "start": {
                              "column": 54,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          586,
                          602
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 16
                          },
                          "start": {
                            "column": 42,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific1",
                      "range": [
                        558,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    557,
                    605
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 16
                    },
                    "start": {
                      "column": 13,
                      "line": 16
                    }
                  }
                },
                "range": [
                  552,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              548,
              606
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                  "name": "a3",
                  "optional": false,
                  "range": [
                    631,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      636,
                      679
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            659,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 17
                            },
                            "start": {
                              "column": 36,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          655,
                          663
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 17
                          },
                          "start": {
                            "column": 32,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop",
                          "range": [
                            664,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 17
                            },
                            "start": {
                              "column": 41,
                              "line": 17
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            669,
                            676
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 17
                            },
                            "start": {
                              "column": 46,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          664,
                          676
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 17
                          },
                          "start": {
                            "column": 41,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "range": [
                        637,
                        654
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    636,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                },
                "range": [
                  631,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 56,
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
              627,
              680
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                  "name": "a4",
                  "optional": false,
                  "range": [
                    707,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "JSXElement",
                  "children": [],
                  "closingElement": null,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "range": [
                      712,
                      756
                    ],
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            735,
                            738
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 18
                            },
                            "start": {
                              "column": 36,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          731,
                          739
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 18
                          },
                          "start": {
                            "column": 32,
                            "line": 18
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop1",
                          "range": [
                            740,
                            745
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 18
                            },
                            "start": {
                              "column": 41,
                              "line": 18
                            }
                          }
                        },
                        "value": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            746,
                            753
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 18
                            },
                            "start": {
                              "column": 47,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          740,
                          753
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 18
                          },
                          "start": {
                            "column": 41,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "range": [
                        713,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 14,
                          "line": 18
                        }
                      }
                    },
                    "selfClosing": true,
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    712,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  707,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              703,
              757
            ],
            "loc": {
              "end": {
                "column": 58,
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
          464,
          777
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 49,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          424,
          427
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 14
              },
              "start": {
                "column": 44,
                "line": 14
              }
            },
            "range": [
              459,
              462
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  461,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 14
                  },
                  "start": {
                    "column": 46,
                    "line": 14
                  }
                }
              },
              "range": [
                461,
                462
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 14
                },
                "start": {
                  "column": 46,
                  "line": 14
                }
              }
            }
          },
          "range": [
            456,
            462
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 14
            },
            "start": {
              "column": 41,
              "line": 14
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        },
        "range": [
          427,
          455
        ],
        "params": [
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
                    "name": "prop",
                    "optional": false,
                    "range": [
                      440,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 25,
                        "line": 14
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
                        "column": 37,
                        "line": 14
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    },
                    "range": [
                      444,
                      452
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        446,
                        452
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 14
                        },
                        "start": {
                          "column": 31,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    440,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                438,
                454
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 14
                },
                "start": {
                  "column": 23,
                  "line": 14
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
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              428,
              454
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 14
              },
              "start": {
                "column": 13,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        415,
        777
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
