__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    280
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
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
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
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
          51,
          60
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
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
                "column": 38,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            },
            "range": [
              69,
              72
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
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
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 37,
                    "line": 3
                  }
                }
              },
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 3
                }
              }
            }
          },
          "range": [
            64,
            72
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 3
          },
          "start": {
            "column": 40,
            "line": 3
          }
        },
        "range": [
          74,
          87
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
                76,
                79
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 3
                },
                "start": {
                  "column": 42,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                80,
                87
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 3
                },
                "start": {
                  "column": 46,
                  "line": 3
                }
              }
            },
            "range": [
              76,
              87
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "range": [
            76,
            87
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 3
            },
            "start": {
              "column": 42,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 3
          },
          "start": {
            "column": 26,
            "line": 3
          }
        },
        "range": [
          60,
          63
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
                61,
                62
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
              61,
              62
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
        34,
        88
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "decorator",
            "optional": false,
            "range": [
              95,
              104
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        143,
                        167
                      ],
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "range": [
                              158,
                              163
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 5
                              },
                              "start": {
                                "column": 26,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            154,
                            164
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 5
                            },
                            "start": {
                              "column": 22,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Component",
                        "range": [
                          144,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      143,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    136,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                130,
                170
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 41,
                  "line": 4
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  },
                  "range": [
                    125,
                    128
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      127,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  120,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              },
              "range": [
                116,
                119
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
                      117,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    117,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 28,
                      "line": 4
                    }
                  }
                }
              ]
            },
            "range": [
              107,
              170
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          },
          "range": [
            95,
            170
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        89,
        170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "decorator1",
            "optional": false,
            "range": [
              178,
              188
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        247,
                        277
                      ],
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "range": [
                              262,
                              267
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 9
                              },
                              "start": {
                                "column": 26,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            258,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 9
                            },
                            "start": {
                              "column": 22,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "x",
                            "range": [
                              269,
                              270
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 9
                              },
                              "start": {
                                "column": 33,
                                "line": 9
                              }
                            }
                          },
                          "value": {
                            "type": "Literal",
                            "raw": "\"hi\"",
                            "value": "hi",
                            "range": [
                              271,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 9
                              },
                              "start": {
                                "column": 35,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            269,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Component",
                        "range": [
                          248,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      247,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    240,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                234,
                280
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 62,
                  "line": 8
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 8
                    },
                    "start": {
                      "column": 57,
                      "line": 8
                    }
                  },
                  "range": [
                    229,
                    232
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        231,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 8
                        },
                        "start": {
                          "column": 59,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      231,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 8
                      },
                      "start": {
                        "column": 59,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  224,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 8
                  },
                  "start": {
                    "column": 52,
                    "line": 8
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              },
              "range": [
                200,
                223
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            212,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 8
                            },
                            "start": {
                              "column": 40,
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
                              "column": 49,
                              "line": 8
                            },
                            "start": {
                              "column": 41,
                              "line": 8
                            }
                          },
                          "range": [
                            213,
                            221
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              215,
                              221
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 8
                              },
                              "start": {
                                "column": 43,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          212,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 8
                          },
                          "start": {
                            "column": 40,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      211,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 8
                      },
                      "start": {
                        "column": 39,
                        "line": 8
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
                      201,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 8
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    201,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 8
                    },
                    "start": {
                      "column": 29,
                      "line": 8
                    }
                  }
                }
              ]
            },
            "range": [
              191,
              280
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          },
          "range": [
            178,
            280
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        172,
        280
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
