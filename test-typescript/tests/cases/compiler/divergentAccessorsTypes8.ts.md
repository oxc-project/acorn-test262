__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2334
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        9
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          32,
          101
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                40,
                45
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  },
                  "range": [
                    47,
                    74
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          49,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 4
                          },
                          "start": {
                            "column": 15,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          58,
                          64
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
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          67,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 4
                          },
                          "start": {
                            "column": 33,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      49,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  46,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              36,
              76
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                83,
                88
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              },
              "range": [
                90,
                98
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  92,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                }
              }
            },
            "static": false,
            "range": [
              79,
              99
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Serializer",
        "optional": false,
        "range": [
          21,
          31
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        11,
        101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "name": "box",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              },
              "range": [
                117,
                129
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Serializer",
                  "optional": false,
                  "range": [
                    119,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                },
                "range": [
                  119,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              114,
              129
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            114,
            129
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        102,
        130
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 7
        },
        "start": {
          "column": 0,
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
            "name": "v",
            "optional": false,
            "range": [
              137,
              138
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "box",
              "optional": false,
              "range": [
                141,
                144
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "'value'",
              "value": "value",
              "range": [
                145,
                152
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              141,
              153
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            137,
            153
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
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
        131,
        153
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "box",
            "optional": false,
            "range": [
              154,
              157
            ],
            "loc": {
              "end": {
                "column": 3,
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
            "type": "Literal",
            "raw": "'value'",
            "value": "value",
            "range": [
              158,
              165
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "range": [
            154,
            166
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            169,
            173
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "range": [
          154,
          173
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
      "range": [
        154,
        174
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "box",
            "optional": false,
            "range": [
              175,
              178
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'value'",
            "value": "value",
            "range": [
              179,
              186
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "range": [
            175,
            187
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            190,
            192
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 10
            },
            "start": {
              "column": 15,
              "line": 10
            }
          }
        },
        "range": [
          175,
          192
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        175,
        193
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "box",
            "optional": false,
            "range": [
              194,
              197
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'value'",
            "value": "value",
            "range": [
              198,
              205
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "range": [
            194,
            206
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            209,
            216
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        },
        "range": [
          194,
          216
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        194,
        217
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          237,
          310
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "range": [
                247,
                252
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              },
              "range": [
                254,
                275
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
                  "optional": false,
                  "range": [
                    256,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 14
                    },
                    "start": {
                      "column": 17,
                      "line": 14
                    }
                  }
                },
                "range": [
                  256,
                  275
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              243,
              276
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cssText",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 21,
                      "line": 15
                    }
                  },
                  "range": [
                    298,
                    306
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      300,
                      306
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  291,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 14,
                    "line": 15
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              281,
              308
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
            "column": 18,
            "line": 13
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
          229,
          236
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        219,
        310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              },
              "range": [
                333,
                342
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "range": [
                    335,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 18
                    },
                    "start": {
                      "column": 23,
                      "line": 18
                    }
                  }
                },
                "range": [
                  335,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 18
                  },
                  "start": {
                    "column": 23,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              326,
              342
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 14,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            326,
            342
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        312,
        343
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "range": [
              344,
              351
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'style'",
            "value": "style",
            "range": [
              352,
              359
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            344,
            360
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"color: red\"",
          "value": "color: red",
          "range": [
            363,
            375
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 19
            },
            "start": {
              "column": 19,
              "line": 19
            }
          }
        },
        "range": [
          344,
          375
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        344,
        376
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "range": [
              377,
              384
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'style'",
            "value": "style",
            "range": [
              385,
              392
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            377,
            393
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "range": [
              396,
              403
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 20
              },
              "start": {
                "column": 19,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "range": [
              404,
              409
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 20
              },
              "start": {
                "column": 27,
                "line": 20
              }
            }
          },
          "range": [
            396,
            409
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 20
            },
            "start": {
              "column": 19,
              "line": 20
            }
          }
        },
        "range": [
          377,
          409
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        377,
        410
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          422,
          684
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                430,
                435
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
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
                435,
                466
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        459,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      452,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 4,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  446,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 25
                  },
                  "start": {
                    "column": 22,
                    "line": 23
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
                    "column": 21,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                },
                "range": [
                  437,
                  445
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    439,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "range": [
              426,
              466
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 23
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
              "name": "prop1",
              "optional": false,
              "range": [
                473,
                478
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                478,
                501
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  499,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 32,
                    "line": 26
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    },
                    "range": [
                      480,
                      497
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            482,
                            488
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 26
                            },
                            "start": {
                              "column": 15,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            491,
                            497
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
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
                        482,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
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
                    479,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              469,
              501
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
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
              "name": "prop2",
              "optional": false,
              "range": [
                509,
                514
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 6,
                  "line": 28
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
                514,
                545
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        538,
                        540
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 29
                        },
                        "start": {
                          "column": 11,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      531,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  525,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 30
                  },
                  "start": {
                    "column": 22,
                    "line": 28
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
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 13,
                    "line": 28
                  }
                },
                "range": [
                  516,
                  524
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    518,
                    524
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
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "range": [
              505,
              545
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 28
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
              "name": "prop2",
              "optional": false,
              "range": [
                552,
                557
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 6,
                  "line": 31
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                557,
                580
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  578,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 31
                  },
                  "start": {
                    "column": 32,
                    "line": 31
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    },
                    "range": [
                      559,
                      576
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            561,
                            567
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 31
                            },
                            "start": {
                              "column": 15,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            570,
                            576
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 31
                            },
                            "start": {
                              "column": 24,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        561,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 31
                        },
                        "start": {
                          "column": 15,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    558,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "range": [
              548,
              580
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
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
              "name": "prop3",
              "optional": false,
              "range": [
                584,
                589
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
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
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 7,
                  "line": 33
                }
              },
              "range": [
                589,
                597
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  591,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                600,
                602
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 33
                },
                "start": {
                  "column": 18,
                  "line": 33
                }
              }
            },
            "range": [
              584,
              603
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
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
              "name": "prop4",
              "optional": false,
              "range": [
                611,
                616
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 35
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
                616,
                647
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        640,
                        642
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 36
                        },
                        "start": {
                          "column": 11,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      633,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  627,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 37
                  },
                  "start": {
                    "column": 22,
                    "line": 35
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
                    "column": 21,
                    "line": 35
                  },
                  "start": {
                    "column": 13,
                    "line": 35
                  }
                },
                "range": [
                  618,
                  626
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    620,
                    626
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 35
                    },
                    "start": {
                      "column": 15,
                      "line": 35
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "range": [
              607,
              647
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 35
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
              "name": "prop4",
              "optional": false,
              "range": [
                654,
                659
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 38
                },
                "start": {
                  "column": 6,
                  "line": 38
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                659,
                682
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  680,
                  682
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 38
                  },
                  "start": {
                    "column": 32,
                    "line": 38
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
                      }
                    },
                    "range": [
                      661,
                      678
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            663,
                            669
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 38
                            },
                            "start": {
                              "column": 15,
                              "line": 38
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            672,
                            678
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 38
                            },
                            "start": {
                              "column": 24,
                              "line": 38
                            }
                          }
                        }
                      ],
                      "range": [
                        663,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    660,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 38
                    },
                    "start": {
                      "column": 12,
                      "line": 38
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "range": [
              650,
              682
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "One",
        "optional": false,
        "range": [
          418,
          421
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        412,
        684
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          696,
          1007
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                704,
                709
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 42
                },
                "start": {
                  "column": 6,
                  "line": 42
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
                709,
                740
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        733,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 43
                        },
                        "start": {
                          "column": 11,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      726,
                      736
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 43
                      },
                      "start": {
                        "column": 4,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  720,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 42
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
                    "column": 21,
                    "line": 42
                  },
                  "start": {
                    "column": 13,
                    "line": 42
                  }
                },
                "range": [
                  711,
                  719
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    713,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 42
                    },
                    "start": {
                      "column": 15,
                      "line": 42
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 42
                }
              }
            },
            "range": [
              700,
              740
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 42
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
              "name": "prop1",
              "optional": false,
              "range": [
                747,
                752
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 45
                },
                "start": {
                  "column": 6,
                  "line": 45
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                752,
                775
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  773,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 45
                  },
                  "start": {
                    "column": 32,
                    "line": 45
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 45
                      },
                      "start": {
                        "column": 13,
                        "line": 45
                      }
                    },
                    "range": [
                      754,
                      771
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            756,
                            762
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 45
                            },
                            "start": {
                              "column": 15,
                              "line": 45
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            765,
                            771
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 45
                            },
                            "start": {
                              "column": 24,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "range": [
                        756,
                        771
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 45
                        },
                        "start": {
                          "column": 15,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    753,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 45
                    },
                    "start": {
                      "column": 12,
                      "line": 45
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "range": [
              743,
              775
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
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
              "name": "prop2",
              "optional": false,
              "range": [
                783,
                788
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 47
                },
                "start": {
                  "column": 6,
                  "line": 47
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
                788,
                819
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        812,
                        814
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 48
                        },
                        "start": {
                          "column": 11,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      805,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 48
                      },
                      "start": {
                        "column": 4,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  799,
                  819
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 49
                  },
                  "start": {
                    "column": 22,
                    "line": 47
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
                    "column": 21,
                    "line": 47
                  },
                  "start": {
                    "column": 13,
                    "line": 47
                  }
                },
                "range": [
                  790,
                  798
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    792,
                    798
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 47
                    },
                    "start": {
                      "column": 15,
                      "line": 47
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 49
                },
                "start": {
                  "column": 11,
                  "line": 47
                }
              }
            },
            "range": [
              779,
              819
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 49
              },
              "start": {
                "column": 2,
                "line": 47
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
              "name": "prop2",
              "optional": false,
              "range": [
                826,
                831
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 50
                },
                "start": {
                  "column": 6,
                  "line": 50
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                831,
                845
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  843,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 50
                  },
                  "start": {
                    "column": 23,
                    "line": 50
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 50
                      },
                      "start": {
                        "column": 13,
                        "line": 50
                      }
                    },
                    "range": [
                      833,
                      841
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        835,
                        841
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 50
                        },
                        "start": {
                          "column": 15,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    832,
                    841
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 50
                    },
                    "start": {
                      "column": 12,
                      "line": 50
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 50
                },
                "start": {
                  "column": 11,
                  "line": 50
                }
              }
            },
            "range": [
              822,
              845
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 50
              },
              "start": {
                "column": 2,
                "line": 50
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
              "name": "prop3",
              "optional": false,
              "range": [
                853,
                858
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 52
                },
                "start": {
                  "column": 6,
                  "line": 52
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
                858,
                889
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        882,
                        884
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 53
                        },
                        "start": {
                          "column": 11,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      875,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 53
                      },
                      "start": {
                        "column": 4,
                        "line": 53
                      }
                    }
                  }
                ],
                "range": [
                  869,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 54
                  },
                  "start": {
                    "column": 22,
                    "line": 52
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
                    "column": 21,
                    "line": 52
                  },
                  "start": {
                    "column": 13,
                    "line": 52
                  }
                },
                "range": [
                  860,
                  868
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    862,
                    868
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 52
                    },
                    "start": {
                      "column": 15,
                      "line": 52
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 52
                }
              }
            },
            "range": [
              849,
              889
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 54
              },
              "start": {
                "column": 2,
                "line": 52
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
              "name": "prop3",
              "optional": false,
              "range": [
                896,
                901
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 55
                },
                "start": {
                  "column": 6,
                  "line": 55
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                901,
                925
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  923,
                  925
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 55
                  },
                  "start": {
                    "column": 33,
                    "line": 55
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 55
                      },
                      "start": {
                        "column": 13,
                        "line": 55
                      }
                    },
                    "range": [
                      903,
                      921
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            905,
                            911
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 55
                            },
                            "start": {
                              "column": 15,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            914,
                            921
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 55
                            },
                            "start": {
                              "column": 24,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        905,
                        921
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 55
                        },
                        "start": {
                          "column": 15,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    902,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 55
                    },
                    "start": {
                      "column": 12,
                      "line": 55
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 55
                },
                "start": {
                  "column": 11,
                  "line": 55
                }
              }
            },
            "range": [
              892,
              925
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
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
              "name": "prop4",
              "optional": false,
              "range": [
                933,
                938
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 57
                },
                "start": {
                  "column": 6,
                  "line": 57
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
                938,
                969
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        962,
                        964
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 58
                        },
                        "start": {
                          "column": 11,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      955,
                      965
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 58
                      },
                      "start": {
                        "column": 4,
                        "line": 58
                      }
                    }
                  }
                ],
                "range": [
                  949,
                  969
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 59
                  },
                  "start": {
                    "column": 22,
                    "line": 57
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
                    "column": 21,
                    "line": 57
                  },
                  "start": {
                    "column": 13,
                    "line": 57
                  }
                },
                "range": [
                  940,
                  948
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    942,
                    948
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 57
                    },
                    "start": {
                      "column": 15,
                      "line": 57
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 59
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "range": [
              929,
              969
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 59
              },
              "start": {
                "column": 2,
                "line": 57
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
              "name": "prop4",
              "optional": false,
              "range": [
                976,
                981
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 60
                },
                "start": {
                  "column": 6,
                  "line": 60
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                981,
                1005
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1003,
                  1005
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 60
                  },
                  "start": {
                    "column": 33,
                    "line": 60
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 60
                      },
                      "start": {
                        "column": 13,
                        "line": 60
                      }
                    },
                    "range": [
                      983,
                      1001
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            985,
                            991
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 60
                            },
                            "start": {
                              "column": 15,
                              "line": 60
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            994,
                            1001
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 60
                            },
                            "start": {
                              "column": 24,
                              "line": 60
                            }
                          }
                        }
                      ],
                      "range": [
                        985,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 60
                        },
                        "start": {
                          "column": 15,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    982,
                    1001
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 60
                    },
                    "start": {
                      "column": 12,
                      "line": 60
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 60
                },
                "start": {
                  "column": 11,
                  "line": 60
                }
              }
            },
            "range": [
              972,
              1005
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 60
              },
              "start": {
                "column": 2,
                "line": 60
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 10,
            "line": 41
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "range": [
          692,
          695
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 41
          },
          "start": {
            "column": 6,
            "line": 41
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        686,
        1007
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "u1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 63
                },
                "start": {
                  "column": 16,
                  "line": 63
                }
              },
              "range": [
                1025,
                1036
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "range": [
                        1027,
                        1030
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 63
                        },
                        "start": {
                          "column": 18,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      1027,
                      1030
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 63
                      },
                      "start": {
                        "column": 18,
                        "line": 63
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "range": [
                        1033,
                        1036
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 63
                        },
                        "start": {
                          "column": 24,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      1033,
                      1036
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 63
                      },
                      "start": {
                        "column": 24,
                        "line": 63
                      }
                    }
                  }
                ],
                "range": [
                  1027,
                  1036
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 63
                  },
                  "start": {
                    "column": 18,
                    "line": 63
                  }
                }
              }
            },
            "range": [
              1023,
              1036
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 63
              },
              "start": {
                "column": 14,
                "line": 63
              }
            }
          },
          "init": null,
          "range": [
            1023,
            1036
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 63
            },
            "start": {
              "column": 14,
              "line": 63
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1009,
        1037
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1039,
              1041
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 65
              },
              "start": {
                "column": 0,
                "line": 65
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop1'",
            "value": "prop1",
            "range": [
              1042,
              1049
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 65
              },
              "start": {
                "column": 3,
                "line": 65
              }
            }
          },
          "range": [
            1039,
            1050
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 65
            },
            "start": {
              "column": 0,
              "line": 65
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1053,
            1055
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 65
            },
            "start": {
              "column": 14,
              "line": 65
            }
          }
        },
        "range": [
          1039,
          1055
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 65
          },
          "start": {
            "column": 0,
            "line": 65
          }
        }
      },
      "range": [
        1039,
        1056
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1057,
              1059
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 66
              },
              "start": {
                "column": 0,
                "line": 66
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop1'",
            "value": "prop1",
            "range": [
              1060,
              1067
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 66
              },
              "start": {
                "column": 3,
                "line": 66
              }
            }
          },
          "range": [
            1057,
            1068
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 66
            },
            "start": {
              "column": 0,
              "line": 66
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1071,
            1078
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 66
            },
            "start": {
              "column": 14,
              "line": 66
            }
          }
        },
        "range": [
          1057,
          1078
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 66
          },
          "start": {
            "column": 0,
            "line": 66
          }
        }
      },
      "range": [
        1057,
        1079
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1081,
              1083
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 68
              },
              "start": {
                "column": 0,
                "line": 68
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop2'",
            "value": "prop2",
            "range": [
              1084,
              1091
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 68
              },
              "start": {
                "column": 3,
                "line": 68
              }
            }
          },
          "range": [
            1081,
            1092
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1095,
            1097
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 68
            },
            "start": {
              "column": 14,
              "line": 68
            }
          }
        },
        "range": [
          1081,
          1097
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        1081,
        1098
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1099,
              1101
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 69
              },
              "start": {
                "column": 0,
                "line": 69
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop2'",
            "value": "prop2",
            "range": [
              1102,
              1109
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 69
              },
              "start": {
                "column": 3,
                "line": 69
              }
            }
          },
          "range": [
            1099,
            1110
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1113,
            1120
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 69
            },
            "start": {
              "column": 14,
              "line": 69
            }
          }
        },
        "range": [
          1099,
          1120
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 69
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1099,
        1121
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1123,
              1125
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 71
              },
              "start": {
                "column": 0,
                "line": 71
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop3'",
            "value": "prop3",
            "range": [
              1126,
              1133
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 71
              },
              "start": {
                "column": 3,
                "line": 71
              }
            }
          },
          "range": [
            1123,
            1134
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 71
            },
            "start": {
              "column": 0,
              "line": 71
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1137,
            1139
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 71
            },
            "start": {
              "column": 14,
              "line": 71
            }
          }
        },
        "range": [
          1123,
          1139
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 71
          },
          "start": {
            "column": 0,
            "line": 71
          }
        }
      },
      "range": [
        1123,
        1140
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1141,
              1143
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 72
              },
              "start": {
                "column": 0,
                "line": 72
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop3'",
            "value": "prop3",
            "range": [
              1144,
              1151
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 72
              },
              "start": {
                "column": 3,
                "line": 72
              }
            }
          },
          "range": [
            1141,
            1152
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1155,
            1162
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 72
            },
            "start": {
              "column": 14,
              "line": 72
            }
          }
        },
        "range": [
          1141,
          1162
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        1141,
        1163
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1164,
              1166
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 73
              },
              "start": {
                "column": 0,
                "line": 73
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop3'",
            "value": "prop3",
            "range": [
              1167,
              1174
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 73
              },
              "start": {
                "column": 3,
                "line": 73
              }
            }
          },
          "range": [
            1164,
            1175
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 73
            },
            "start": {
              "column": 0,
              "line": 73
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            1178,
            1182
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 73
            },
            "start": {
              "column": 14,
              "line": 73
            }
          }
        },
        "range": [
          1164,
          1182
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 73
          },
          "start": {
            "column": 0,
            "line": 73
          }
        }
      },
      "range": [
        1164,
        1183
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1185,
              1187
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 75
              },
              "start": {
                "column": 0,
                "line": 75
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop4'",
            "value": "prop4",
            "range": [
              1188,
              1195
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 75
              },
              "start": {
                "column": 3,
                "line": 75
              }
            }
          },
          "range": [
            1185,
            1196
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 75
            },
            "start": {
              "column": 0,
              "line": 75
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1199,
            1201
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 75
            },
            "start": {
              "column": 14,
              "line": 75
            }
          }
        },
        "range": [
          1185,
          1201
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 75
          },
          "start": {
            "column": 0,
            "line": 75
          }
        }
      },
      "range": [
        1185,
        1202
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1203,
              1205
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 76
              },
              "start": {
                "column": 0,
                "line": 76
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop4'",
            "value": "prop4",
            "range": [
              1206,
              1213
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 76
              },
              "start": {
                "column": 3,
                "line": 76
              }
            }
          },
          "range": [
            1203,
            1214
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 76
            },
            "start": {
              "column": 0,
              "line": 76
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1217,
            1224
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 76
            },
            "start": {
              "column": 14,
              "line": 76
            }
          }
        },
        "range": [
          1203,
          1224
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 76
          },
          "start": {
            "column": 0,
            "line": 76
          }
        }
      },
      "range": [
        1203,
        1225
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u1",
            "optional": false,
            "range": [
              1226,
              1228
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 77
              },
              "start": {
                "column": 0,
                "line": 77
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop4'",
            "value": "prop4",
            "range": [
              1229,
              1236
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 77
              },
              "start": {
                "column": 3,
                "line": 77
              }
            }
          },
          "range": [
            1226,
            1237
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 77
            },
            "start": {
              "column": 0,
              "line": 77
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            1240,
            1244
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 77
            },
            "start": {
              "column": 14,
              "line": 77
            }
          }
        },
        "range": [
          1226,
          1244
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 77
          },
          "start": {
            "column": 0,
            "line": 77
          }
        }
      },
      "range": [
        1226,
        1245
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 79
                },
                "start": {
                  "column": 15,
                  "line": 79
                }
              },
              "range": [
                1262,
                1273
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "One",
                      "optional": false,
                      "range": [
                        1264,
                        1267
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 79
                        },
                        "start": {
                          "column": 17,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1264,
                      1267
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 79
                      },
                      "start": {
                        "column": 17,
                        "line": 79
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Two",
                      "optional": false,
                      "range": [
                        1270,
                        1273
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 79
                        },
                        "start": {
                          "column": 23,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1270,
                      1273
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 79
                      },
                      "start": {
                        "column": 23,
                        "line": 79
                      }
                    }
                  }
                ],
                "range": [
                  1264,
                  1273
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 79
                  },
                  "start": {
                    "column": 17,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              1261,
              1273
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 79
              },
              "start": {
                "column": 14,
                "line": 79
              }
            }
          },
          "init": null,
          "range": [
            1261,
            1273
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 79
            },
            "start": {
              "column": 14,
              "line": 79
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1247,
        1274
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
            "name": "iv1",
            "optional": false,
            "range": [
              1282,
              1285
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 81
              },
              "start": {
                "column": 6,
                "line": 81
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1288,
                1289
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 81
                },
                "start": {
                  "column": 12,
                  "line": 81
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "'prop1'",
              "value": "prop1",
              "range": [
                1290,
                1297
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 81
                },
                "start": {
                  "column": 14,
                  "line": 81
                }
              }
            },
            "range": [
              1288,
              1298
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 81
              },
              "start": {
                "column": 12,
                "line": 81
              }
            }
          },
          "range": [
            1282,
            1298
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 81
            },
            "start": {
              "column": 6,
              "line": 81
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1276,
        1299
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              1300,
              1301
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 82
              },
              "start": {
                "column": 0,
                "line": 82
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop1'",
            "value": "prop1",
            "range": [
              1302,
              1309
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 82
              },
              "start": {
                "column": 2,
                "line": 82
              }
            }
          },
          "range": [
            1300,
            1310
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 82
            },
            "start": {
              "column": 0,
              "line": 82
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1313,
            1315
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 82
            },
            "start": {
              "column": 13,
              "line": 82
            }
          }
        },
        "range": [
          1300,
          1315
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 82
          },
          "start": {
            "column": 0,
            "line": 82
          }
        }
      },
      "range": [
        1300,
        1316
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              1317,
              1318
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 83
              },
              "start": {
                "column": 0,
                "line": 83
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop1'",
            "value": "prop1",
            "range": [
              1319,
              1326
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 83
              },
              "start": {
                "column": 2,
                "line": 83
              }
            }
          },
          "range": [
            1317,
            1327
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 83
            },
            "start": {
              "column": 0,
              "line": 83
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1330,
            1337
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 83
            },
            "start": {
              "column": 13,
              "line": 83
            }
          }
        },
        "range": [
          1317,
          1337
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 83
          },
          "start": {
            "column": 0,
            "line": 83
          }
        }
      },
      "range": [
        1317,
        1338
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
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
            "name": "iv2",
            "optional": false,
            "range": [
              1346,
              1349
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 85
              },
              "start": {
                "column": 6,
                "line": 85
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1352,
                1353
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 85
                },
                "start": {
                  "column": 12,
                  "line": 85
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "'prop2'",
              "value": "prop2",
              "range": [
                1354,
                1361
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 85
                },
                "start": {
                  "column": 14,
                  "line": 85
                }
              }
            },
            "range": [
              1352,
              1362
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 85
              },
              "start": {
                "column": 12,
                "line": 85
              }
            }
          },
          "range": [
            1346,
            1362
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 85
            },
            "start": {
              "column": 6,
              "line": 85
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1340,
        1363
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              1364,
              1365
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 86
              },
              "start": {
                "column": 0,
                "line": 86
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop2'",
            "value": "prop2",
            "range": [
              1366,
              1373
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 86
              },
              "start": {
                "column": 2,
                "line": 86
              }
            }
          },
          "range": [
            1364,
            1374
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 86
            },
            "start": {
              "column": 0,
              "line": 86
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1377,
            1379
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 86
            },
            "start": {
              "column": 13,
              "line": 86
            }
          }
        },
        "range": [
          1364,
          1379
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 86
          },
          "start": {
            "column": 0,
            "line": 86
          }
        }
      },
      "range": [
        1364,
        1380
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "range": [
              1381,
              1382
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 87
              },
              "start": {
                "column": 0,
                "line": 87
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop2'",
            "value": "prop2",
            "range": [
              1383,
              1390
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 87
              },
              "start": {
                "column": 2,
                "line": 87
              }
            }
          },
          "range": [
            1381,
            1391
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 87
            },
            "start": {
              "column": 0,
              "line": 87
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1394,
            1401
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 87
            },
            "start": {
              "column": 13,
              "line": 87
            }
          }
        },
        "range": [
          1381,
          1401
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 87
          },
          "start": {
            "column": 0,
            "line": 87
          }
        }
      },
      "range": [
        1381,
        1402
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1416,
          1520
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                1424,
                1429
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 90
                },
                "start": {
                  "column": 6,
                  "line": 90
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
                1429,
                1460
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        1453,
                        1455
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 91
                        },
                        "start": {
                          "column": 11,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      1446,
                      1456
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 91
                      },
                      "start": {
                        "column": 4,
                        "line": 91
                      }
                    }
                  }
                ],
                "range": [
                  1440,
                  1460
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 92
                  },
                  "start": {
                    "column": 22,
                    "line": 90
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
                    "column": 21,
                    "line": 90
                  },
                  "start": {
                    "column": 13,
                    "line": 90
                  }
                },
                "range": [
                  1431,
                  1439
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1433,
                    1439
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 90
                    },
                    "start": {
                      "column": 15,
                      "line": 90
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 90
                }
              }
            },
            "range": [
              1420,
              1460
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 92
              },
              "start": {
                "column": 2,
                "line": 90
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
              "name": "prop1",
              "optional": false,
              "range": [
                1467,
                1472
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 93
                },
                "start": {
                  "column": 6,
                  "line": 93
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1472,
                1495
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1493,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 93
                  },
                  "start": {
                    "column": 32,
                    "line": 93
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 93
                      },
                      "start": {
                        "column": 13,
                        "line": 93
                      }
                    },
                    "range": [
                      1474,
                      1491
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1476,
                            1482
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 93
                            },
                            "start": {
                              "column": 15,
                              "line": 93
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1485,
                            1491
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 93
                            },
                            "start": {
                              "column": 24,
                              "line": 93
                            }
                          }
                        }
                      ],
                      "range": [
                        1476,
                        1491
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 93
                        },
                        "start": {
                          "column": 15,
                          "line": 93
                        }
                      }
                    }
                  },
                  "range": [
                    1473,
                    1491
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 93
                    },
                    "start": {
                      "column": 12,
                      "line": 93
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 93
                },
                "start": {
                  "column": 11,
                  "line": 93
                }
              }
            },
            "range": [
              1463,
              1495
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 93
              },
              "start": {
                "column": 2,
                "line": 93
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
              "name": "prop2",
              "optional": false,
              "range": [
                1499,
                1504
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 95
                },
                "start": {
                  "column": 2,
                  "line": 95
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
                  "column": 15,
                  "line": 95
                },
                "start": {
                  "column": 7,
                  "line": 95
                }
              },
              "range": [
                1504,
                1512
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1506,
                  1512
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 95
                  },
                  "start": {
                    "column": 9,
                    "line": 95
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "42",
              "value": 42,
              "range": [
                1515,
                1517
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 95
                },
                "start": {
                  "column": 18,
                  "line": 95
                }
              }
            },
            "range": [
              1499,
              1518
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 95
              },
              "start": {
                "column": 2,
                "line": 95
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 12,
            "line": 89
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "range": [
          1410,
          1415
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 89
          },
          "start": {
            "column": 6,
            "line": 89
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1404,
        1520
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1533,
          1696
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                1541,
                1546
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 99
                },
                "start": {
                  "column": 6,
                  "line": 99
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
                1546,
                1583
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1571,
                        1578
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 100
                        },
                        "start": {
                          "column": 11,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      1564,
                      1579
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 100
                      },
                      "start": {
                        "column": 4,
                        "line": 100
                      }
                    }
                  }
                ],
                "range": [
                  1558,
                  1583
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 101
                  },
                  "start": {
                    "column": 23,
                    "line": 99
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
                    "line": 99
                  },
                  "start": {
                    "column": 13,
                    "line": 99
                  }
                },
                "range": [
                  1548,
                  1557
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      1550,
                      1557
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 99
                      },
                      "start": {
                        "column": 15,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    1550,
                    1557
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 99
                    },
                    "start": {
                      "column": 15,
                      "line": 99
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 101
                },
                "start": {
                  "column": 11,
                  "line": 99
                }
              }
            },
            "range": [
              1537,
              1583
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 101
              },
              "start": {
                "column": 2,
                "line": 99
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
              "name": "prop1",
              "optional": false,
              "range": [
                1590,
                1595
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 102
                },
                "start": {
                  "column": 6,
                  "line": 102
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1595,
                1619
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1617,
                  1619
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 102
                  },
                  "start": {
                    "column": 33,
                    "line": 102
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 102
                      },
                      "start": {
                        "column": 13,
                        "line": 102
                      }
                    },
                    "range": [
                      1597,
                      1615
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              1599,
                              1606
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 102
                              },
                              "start": {
                                "column": 15,
                                "line": 102
                              }
                            }
                          },
                          "range": [
                            1599,
                            1606
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 102
                            },
                            "start": {
                              "column": 15,
                              "line": 102
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1609,
                            1615
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 102
                            },
                            "start": {
                              "column": 25,
                              "line": 102
                            }
                          }
                        }
                      ],
                      "range": [
                        1599,
                        1615
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 102
                        },
                        "start": {
                          "column": 15,
                          "line": 102
                        }
                      }
                    }
                  },
                  "range": [
                    1596,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 102
                    },
                    "start": {
                      "column": 12,
                      "line": 102
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 102
                },
                "start": {
                  "column": 11,
                  "line": 102
                }
              }
            },
            "range": [
              1586,
              1619
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 102
              },
              "start": {
                "column": 2,
                "line": 102
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
              "name": "prop2",
              "optional": false,
              "range": [
                1627,
                1632
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 104
                },
                "start": {
                  "column": 6,
                  "line": 104
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
                1632,
                1663
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        1656,
                        1658
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 105
                        },
                        "start": {
                          "column": 11,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      1649,
                      1659
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 105
                      },
                      "start": {
                        "column": 4,
                        "line": 105
                      }
                    }
                  }
                ],
                "range": [
                  1643,
                  1663
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 106
                  },
                  "start": {
                    "column": 22,
                    "line": 104
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
                    "column": 21,
                    "line": 104
                  },
                  "start": {
                    "column": 13,
                    "line": 104
                  }
                },
                "range": [
                  1634,
                  1642
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1636,
                    1642
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 104
                    },
                    "start": {
                      "column": 15,
                      "line": 104
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 106
                },
                "start": {
                  "column": 11,
                  "line": 104
                }
              }
            },
            "range": [
              1623,
              1663
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 104
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
              "name": "prop2",
              "optional": false,
              "range": [
                1670,
                1675
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 107
                },
                "start": {
                  "column": 6,
                  "line": 107
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1675,
                1694
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1692,
                  1694
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 107
                  },
                  "start": {
                    "column": 28,
                    "line": 107
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 107
                      },
                      "start": {
                        "column": 13,
                        "line": 107
                      }
                    },
                    "range": [
                      1677,
                      1690
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1679,
                            1685
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 107
                            },
                            "start": {
                              "column": 15,
                              "line": 107
                            }
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              1688,
                              1690
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 107
                              },
                              "start": {
                                "column": 24,
                                "line": 107
                              }
                            }
                          },
                          "range": [
                            1688,
                            1690
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 107
                            },
                            "start": {
                              "column": 24,
                              "line": 107
                            }
                          }
                        }
                      ],
                      "range": [
                        1679,
                        1690
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 107
                        },
                        "start": {
                          "column": 15,
                          "line": 107
                        }
                      }
                    }
                  },
                  "range": [
                    1676,
                    1690
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 107
                    },
                    "start": {
                      "column": 12,
                      "line": 107
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 107
                },
                "start": {
                  "column": 11,
                  "line": 107
                }
              }
            },
            "range": [
              1666,
              1694
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 107
              },
              "start": {
                "column": 2,
                "line": 107
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 11,
            "line": 98
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Four",
        "optional": false,
        "range": [
          1528,
          1532
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 98
          },
          "start": {
            "column": 6,
            "line": 98
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1522,
        1696
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1709,
          1887
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                1717,
                1722
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 111
                },
                "start": {
                  "column": 6,
                  "line": 111
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
                1722,
                1759
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1747,
                        1754
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 112
                        },
                        "start": {
                          "column": 11,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      1740,
                      1755
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 112
                      },
                      "start": {
                        "column": 4,
                        "line": 112
                      }
                    }
                  }
                ],
                "range": [
                  1734,
                  1759
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 113
                  },
                  "start": {
                    "column": 23,
                    "line": 111
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
                    "line": 111
                  },
                  "start": {
                    "column": 13,
                    "line": 111
                  }
                },
                "range": [
                  1724,
                  1733
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      1726,
                      1733
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 111
                      },
                      "start": {
                        "column": 15,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    1726,
                    1733
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 111
                    },
                    "start": {
                      "column": 15,
                      "line": 111
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 113
                },
                "start": {
                  "column": 11,
                  "line": 111
                }
              }
            },
            "range": [
              1713,
              1759
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 113
              },
              "start": {
                "column": 2,
                "line": 111
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
              "name": "prop1",
              "optional": false,
              "range": [
                1766,
                1771
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 114
                },
                "start": {
                  "column": 6,
                  "line": 114
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1771,
                1796
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1794,
                  1796
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 114
                  },
                  "start": {
                    "column": 34,
                    "line": 114
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 114
                      },
                      "start": {
                        "column": 13,
                        "line": 114
                      }
                    },
                    "range": [
                      1773,
                      1792
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"hello\"",
                            "value": "hello",
                            "range": [
                              1775,
                              1782
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 114
                              },
                              "start": {
                                "column": 15,
                                "line": 114
                              }
                            }
                          },
                          "range": [
                            1775,
                            1782
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 114
                            },
                            "start": {
                              "column": 15,
                              "line": 114
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1785,
                            1792
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 114
                            },
                            "start": {
                              "column": 25,
                              "line": 114
                            }
                          }
                        }
                      ],
                      "range": [
                        1775,
                        1792
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 114
                        },
                        "start": {
                          "column": 15,
                          "line": 114
                        }
                      }
                    }
                  },
                  "range": [
                    1772,
                    1792
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 114
                    },
                    "start": {
                      "column": 12,
                      "line": 114
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 114
                },
                "start": {
                  "column": 11,
                  "line": 114
                }
              }
            },
            "range": [
              1762,
              1796
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 114
              },
              "start": {
                "column": 2,
                "line": 114
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
              "name": "prop2",
              "optional": false,
              "range": [
                1804,
                1809
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 116
                },
                "start": {
                  "column": 6,
                  "line": 116
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
                1809,
                1840
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        1833,
                        1835
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 117
                        },
                        "start": {
                          "column": 11,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      1826,
                      1836
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 117
                      },
                      "start": {
                        "column": 4,
                        "line": 117
                      }
                    }
                  }
                ],
                "range": [
                  1820,
                  1840
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 118
                  },
                  "start": {
                    "column": 22,
                    "line": 116
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
                    "column": 21,
                    "line": 116
                  },
                  "start": {
                    "column": 13,
                    "line": 116
                  }
                },
                "range": [
                  1811,
                  1819
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1813,
                    1819
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 116
                    },
                    "start": {
                      "column": 15,
                      "line": 116
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 118
                },
                "start": {
                  "column": 11,
                  "line": 116
                }
              }
            },
            "range": [
              1800,
              1840
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 118
              },
              "start": {
                "column": 2,
                "line": 116
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
              "name": "prop2",
              "optional": false,
              "range": [
                1847,
                1852
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 119
                },
                "start": {
                  "column": 6,
                  "line": 119
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1852,
                1885
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1883,
                  1885
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 119
                  },
                  "start": {
                    "column": 42,
                    "line": 119
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 119
                      },
                      "start": {
                        "column": 13,
                        "line": 119
                      }
                    },
                    "range": [
                      1854,
                      1881
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1856,
                            1862
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 119
                            },
                            "start": {
                              "column": 15,
                              "line": 119
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1865,
                            1871
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 119
                            },
                            "start": {
                              "column": 24,
                              "line": 119
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1874,
                            1881
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 119
                            },
                            "start": {
                              "column": 33,
                              "line": 119
                            }
                          }
                        }
                      ],
                      "range": [
                        1856,
                        1881
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 119
                        },
                        "start": {
                          "column": 15,
                          "line": 119
                        }
                      }
                    }
                  },
                  "range": [
                    1853,
                    1881
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 119
                    },
                    "start": {
                      "column": 12,
                      "line": 119
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 119
                },
                "start": {
                  "column": 11,
                  "line": 119
                }
              }
            },
            "range": [
              1843,
              1885
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 119
              },
              "start": {
                "column": 2,
                "line": 119
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 11,
            "line": 110
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Five",
        "optional": false,
        "range": [
          1704,
          1708
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 110
          },
          "start": {
            "column": 6,
            "line": 110
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1698,
        1887
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 110
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 122
                },
                "start": {
                  "column": 16,
                  "line": 122
                }
              },
              "range": [
                1905,
                1926
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Three",
                      "optional": false,
                      "range": [
                        1907,
                        1912
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 122
                        },
                        "start": {
                          "column": 18,
                          "line": 122
                        }
                      }
                    },
                    "range": [
                      1907,
                      1912
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 122
                      },
                      "start": {
                        "column": 18,
                        "line": 122
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Four",
                      "optional": false,
                      "range": [
                        1915,
                        1919
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 122
                        },
                        "start": {
                          "column": 26,
                          "line": 122
                        }
                      }
                    },
                    "range": [
                      1915,
                      1919
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 122
                      },
                      "start": {
                        "column": 26,
                        "line": 122
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Five",
                      "optional": false,
                      "range": [
                        1922,
                        1926
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 122
                        },
                        "start": {
                          "column": 33,
                          "line": 122
                        }
                      }
                    },
                    "range": [
                      1922,
                      1926
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 122
                      },
                      "start": {
                        "column": 33,
                        "line": 122
                      }
                    }
                  }
                ],
                "range": [
                  1907,
                  1926
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 122
                  },
                  "start": {
                    "column": 18,
                    "line": 122
                  }
                }
              }
            },
            "range": [
              1903,
              1926
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 122
              },
              "start": {
                "column": 14,
                "line": 122
              }
            }
          },
          "init": null,
          "range": [
            1903,
            1926
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 122
            },
            "start": {
              "column": 14,
              "line": 122
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1889,
        1927
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "range": [
              1929,
              1931
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 124
              },
              "start": {
                "column": 0,
                "line": 124
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop1'",
            "value": "prop1",
            "range": [
              1932,
              1939
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 124
              },
              "start": {
                "column": 3,
                "line": 124
              }
            }
          },
          "range": [
            1929,
            1940
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 124
            },
            "start": {
              "column": 0,
              "line": 124
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1943,
            1945
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 124
            },
            "start": {
              "column": 14,
              "line": 124
            }
          }
        },
        "range": [
          1929,
          1945
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 124
          },
          "start": {
            "column": 0,
            "line": 124
          }
        }
      },
      "range": [
        1929,
        1946
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 124
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "range": [
              1947,
              1949
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 125
              },
              "start": {
                "column": 0,
                "line": 125
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop1'",
            "value": "prop1",
            "range": [
              1950,
              1957
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 125
              },
              "start": {
                "column": 3,
                "line": 125
              }
            }
          },
          "range": [
            1947,
            1958
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 125
            },
            "start": {
              "column": 0,
              "line": 125
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            1961,
            1968
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 125
            },
            "start": {
              "column": 14,
              "line": 125
            }
          }
        },
        "range": [
          1947,
          1968
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 125
          },
          "start": {
            "column": 0,
            "line": 125
          }
        }
      },
      "range": [
        1947,
        1969
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 125
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "range": [
              1971,
              1973
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 127
              },
              "start": {
                "column": 0,
                "line": 127
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop2'",
            "value": "prop2",
            "range": [
              1974,
              1981
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 127
              },
              "start": {
                "column": 3,
                "line": 127
              }
            }
          },
          "range": [
            1971,
            1982
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 127
            },
            "start": {
              "column": 0,
              "line": 127
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            1985,
            1987
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 127
            },
            "start": {
              "column": 14,
              "line": 127
            }
          }
        },
        "range": [
          1971,
          1987
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 127
          },
          "start": {
            "column": 0,
            "line": 127
          }
        }
      },
      "range": [
        1971,
        1988
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 127
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "range": [
              1989,
              1991
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 128
              },
              "start": {
                "column": 0,
                "line": 128
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'prop2'",
            "value": "prop2",
            "range": [
              1992,
              1999
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 128
              },
              "start": {
                "column": 3,
                "line": 128
              }
            }
          },
          "range": [
            1989,
            2000
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 128
            },
            "start": {
              "column": 0,
              "line": 128
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            2003,
            2010
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 128
            },
            "start": {
              "column": 14,
              "line": 128
            }
          }
        },
        "range": [
          1989,
          2010
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 128
          },
          "start": {
            "column": 0,
            "line": 128
          }
        }
      },
      "range": [
        1989,
        2011
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2023,
          2202
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                2031,
                2036
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 131
                },
                "start": {
                  "column": 6,
                  "line": 131
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
                2036,
                2077
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        2070,
                        2072
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 132
                        },
                        "start": {
                          "column": 11,
                          "line": 132
                        }
                      }
                    },
                    "range": [
                      2063,
                      2073
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 132
                      },
                      "start": {
                        "column": 4,
                        "line": 132
                      }
                    }
                  }
                ],
                "range": [
                  2057,
                  2077
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 133
                  },
                  "start": {
                    "column": 32,
                    "line": 131
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
                    "column": 31,
                    "line": 131
                  },
                  "start": {
                    "column": 13,
                    "line": 131
                  }
                },
                "range": [
                  2038,
                  2056
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2040,
                        2047
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 131
                        },
                        "start": {
                          "column": 15,
                          "line": 131
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        2050,
                        2056
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 131
                        },
                        "start": {
                          "column": 25,
                          "line": 131
                        }
                      }
                    }
                  ],
                  "range": [
                    2040,
                    2056
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 131
                    },
                    "start": {
                      "column": 15,
                      "line": 131
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 133
                },
                "start": {
                  "column": 11,
                  "line": 131
                }
              }
            },
            "range": [
              2027,
              2077
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 133
              },
              "start": {
                "column": 2,
                "line": 131
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
              "name": "prop1",
              "optional": false,
              "range": [
                2084,
                2089
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 134
                },
                "start": {
                  "column": 6,
                  "line": 134
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2089,
                2113
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2111,
                  2113
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 134
                  },
                  "start": {
                    "column": 33,
                    "line": 134
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 134
                      },
                      "start": {
                        "column": 13,
                        "line": 134
                      }
                    },
                    "range": [
                      2091,
                      2109
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2093,
                            2100
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 134
                            },
                            "start": {
                              "column": 15,
                              "line": 134
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2103,
                            2109
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 134
                            },
                            "start": {
                              "column": 25,
                              "line": 134
                            }
                          }
                        }
                      ],
                      "range": [
                        2093,
                        2109
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 134
                        },
                        "start": {
                          "column": 15,
                          "line": 134
                        }
                      }
                    }
                  },
                  "range": [
                    2090,
                    2109
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 134
                    },
                    "start": {
                      "column": 12,
                      "line": 134
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 134
                },
                "start": {
                  "column": 11,
                  "line": 134
                }
              }
            },
            "range": [
              2080,
              2113
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 134
              },
              "start": {
                "column": 2,
                "line": 134
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
              "name": "prop2",
              "optional": false,
              "range": [
                2121,
                2126
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 136
                },
                "start": {
                  "column": 6,
                  "line": 136
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
                2126,
                2166
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        2159,
                        2161
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 137
                        },
                        "start": {
                          "column": 11,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      2152,
                      2162
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 137
                      },
                      "start": {
                        "column": 4,
                        "line": 137
                      }
                    }
                  }
                ],
                "range": [
                  2146,
                  2166
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 138
                  },
                  "start": {
                    "column": 31,
                    "line": 136
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
                    "column": 30,
                    "line": 136
                  },
                  "start": {
                    "column": 13,
                    "line": 136
                  }
                },
                "range": [
                  2128,
                  2145
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSBigIntKeyword",
                      "range": [
                        2130,
                        2136
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 136
                        },
                        "start": {
                          "column": 15,
                          "line": 136
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        2139,
                        2145
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 136
                        },
                        "start": {
                          "column": 24,
                          "line": 136
                        }
                      }
                    }
                  ],
                  "range": [
                    2130,
                    2145
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 136
                    },
                    "start": {
                      "column": 15,
                      "line": 136
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 138
                },
                "start": {
                  "column": 11,
                  "line": 136
                }
              }
            },
            "range": [
              2117,
              2166
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 138
              },
              "start": {
                "column": 2,
                "line": 136
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
              "name": "prop2",
              "optional": false,
              "range": [
                2173,
                2178
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 139
                },
                "start": {
                  "column": 6,
                  "line": 139
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2178,
                2200
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2198,
                  2200
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 139
                  },
                  "start": {
                    "column": 31,
                    "line": 139
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 139
                      },
                      "start": {
                        "column": 13,
                        "line": 139
                      }
                    },
                    "range": [
                      2180,
                      2196
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2182,
                            2189
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 139
                            },
                            "start": {
                              "column": 15,
                              "line": 139
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            2192,
                            2196
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 139
                            },
                            "start": {
                              "column": 25,
                              "line": 139
                            }
                          }
                        }
                      ],
                      "range": [
                        2182,
                        2196
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 139
                        },
                        "start": {
                          "column": 15,
                          "line": 139
                        }
                      }
                    }
                  },
                  "range": [
                    2179,
                    2196
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 139
                    },
                    "start": {
                      "column": 12,
                      "line": 139
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 139
                },
                "start": {
                  "column": 11,
                  "line": 139
                }
              }
            },
            "range": [
              2169,
              2200
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 139
              },
              "start": {
                "column": 2,
                "line": 139
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 140
          },
          "start": {
            "column": 10,
            "line": 130
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Six",
        "optional": false,
        "range": [
          2019,
          2022
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 130
          },
          "start": {
            "column": 6,
            "line": 130
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2013,
        2202
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 130
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 142
                },
                "start": {
                  "column": 16,
                  "line": 142
                }
              },
              "range": [
                2220,
                2225
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Six",
                  "optional": false,
                  "range": [
                    2222,
                    2225
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 142
                    },
                    "start": {
                      "column": 18,
                      "line": 142
                    }
                  }
                },
                "range": [
                  2222,
                  2225
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 142
                  },
                  "start": {
                    "column": 18,
                    "line": 142
                  }
                }
              }
            },
            "range": [
              2218,
              2225
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 142
              },
              "start": {
                "column": 14,
                "line": 142
              }
            }
          },
          "init": null,
          "range": [
            2218,
            2225
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 142
            },
            "start": {
              "column": 14,
              "line": 142
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2204,
        2225
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 142
        },
        "start": {
          "column": 0,
          "line": 142
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 143
                },
                "start": {
                  "column": 16,
                  "line": 143
                }
              },
              "range": [
                2242,
                2261
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'prop1'",
                      "value": "prop1",
                      "range": [
                        2244,
                        2251
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 143
                        },
                        "start": {
                          "column": 18,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      2244,
                      2251
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 143
                      },
                      "start": {
                        "column": 18,
                        "line": 143
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'prop2'",
                      "value": "prop2",
                      "range": [
                        2254,
                        2261
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 143
                        },
                        "start": {
                          "column": 28,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      2254,
                      2261
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 143
                      },
                      "start": {
                        "column": 28,
                        "line": 143
                      }
                    }
                  }
                ],
                "range": [
                  2244,
                  2261
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 143
                  },
                  "start": {
                    "column": 18,
                    "line": 143
                  }
                }
              }
            },
            "range": [
              2240,
              2261
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 143
              },
              "start": {
                "column": 14,
                "line": 143
              }
            }
          },
          "init": null,
          "range": [
            2240,
            2261
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 143
            },
            "start": {
              "column": 14,
              "line": 143
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2226,
        2261
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 143
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
            "name": "sv1",
            "optional": false,
            "range": [
              2269,
              2272
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 145
              },
              "start": {
                "column": 6,
                "line": 145
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "range": [
                2275,
                2277
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 145
                },
                "start": {
                  "column": 12,
                  "line": 145
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "range": [
                2278,
                2280
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 145
                },
                "start": {
                  "column": 15,
                  "line": 145
                }
              }
            },
            "range": [
              2275,
              2281
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 145
              },
              "start": {
                "column": 12,
                "line": 145
              }
            }
          },
          "range": [
            2269,
            2281
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 145
            },
            "start": {
              "column": 6,
              "line": 145
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2263,
        2281
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 145
        },
        "start": {
          "column": 0,
          "line": 145
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "range": [
              2282,
              2284
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 146
              },
              "start": {
                "column": 0,
                "line": 146
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "range": [
              2285,
              2287
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 146
              },
              "start": {
                "column": 3,
                "line": 146
              }
            }
          },
          "range": [
            2282,
            2288
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 146
            },
            "start": {
              "column": 0,
              "line": 146
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "42",
          "value": 42,
          "range": [
            2291,
            2293
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 146
            },
            "start": {
              "column": 9,
              "line": 146
            }
          }
        },
        "range": [
          2282,
          2293
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 146
          },
          "start": {
            "column": 0,
            "line": 146
          }
        }
      },
      "range": [
        2282,
        2293
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 146
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "range": [
              2294,
              2296
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 147
              },
              "start": {
                "column": 0,
                "line": 147
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "range": [
              2297,
              2299
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 147
              },
              "start": {
                "column": 3,
                "line": 147
              }
            }
          },
          "range": [
            2294,
            2300
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 147
            },
            "start": {
              "column": 0,
              "line": 147
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            2303,
            2307
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 147
            },
            "start": {
              "column": 9,
              "line": 147
            }
          }
        },
        "range": [
          2294,
          2307
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 147
          },
          "start": {
            "column": 0,
            "line": 147
          }
        }
      },
      "range": [
        2294,
        2307
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 147
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "range": [
              2308,
              2310
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 148
              },
              "start": {
                "column": 0,
                "line": 148
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "range": [
              2311,
              2313
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 148
              },
              "start": {
                "column": 3,
                "line": 148
              }
            }
          },
          "range": [
            2308,
            2314
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 148
            },
            "start": {
              "column": 0,
              "line": 148
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "''",
          "value": "",
          "range": [
            2317,
            2319
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 148
            },
            "start": {
              "column": 9,
              "line": 148
            }
          }
        },
        "range": [
          2308,
          2319
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 148
          },
          "start": {
            "column": 0,
            "line": 148
          }
        }
      },
      "range": [
        2308,
        2319
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "range": [
              2320,
              2322
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 149
              },
              "start": {
                "column": 0,
                "line": 149
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "range": [
              2323,
              2325
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 149
              },
              "start": {
                "column": 3,
                "line": 149
              }
            }
          },
          "range": [
            2320,
            2326
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 149
            },
            "start": {
              "column": 0,
              "line": 149
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            2329,
            2333
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 149
            },
            "start": {
              "column": 9,
              "line": 149
            }
          }
        },
        "range": [
          2320,
          2333
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 149
          },
          "start": {
            "column": 0,
            "line": 149
          }
        }
      },
      "range": [
        2320,
        2333
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 149
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 150
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
