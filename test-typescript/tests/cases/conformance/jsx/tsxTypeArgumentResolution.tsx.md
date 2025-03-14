__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1403
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          81
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                55,
                56
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
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                56,
                64
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  58,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              55,
              65
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                71,
                79
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  73,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              70,
              79
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
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
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "range": [
          44,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        34,
        81
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          138,
          162
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
              "name": "internalProp",
              "optional": false,
              "range": [
                144,
                156
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              },
              "range": [
                156,
                159
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                },
                "range": [
                  158,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              144,
              160
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 55,
            "line": 8
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "range": [
          97,
          103
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            115,
            120
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 8
            },
            "start": {
              "column": 32,
              "line": 8
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            121,
            130
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 8
            },
            "start": {
              "column": 38,
              "line": 8
            }
          }
        },
        "range": [
          115,
          130
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 8
          },
          "start": {
            "column": 32,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          130,
          137
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
                131,
                132
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 48,
                  "line": 8
                }
              }
            },
            "range": [
              131,
              132
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 8
              },
              "start": {
                "column": 48,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              134,
              136
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 8
              },
              "start": {
                "column": 51,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 8
          },
          "start": {
            "column": 47,
            "line": 8
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 8
          },
          "start": {
            "column": 20,
            "line": 8
          }
        },
        "range": [
          103,
          106
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
                104,
                105
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 21,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        83,
        162
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
            "name": "x",
            "optional": false,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                172,
                202
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "range": [
                      186,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 22,
                        "line": 12
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
                        189,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 25,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      188,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    186,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 22,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      193,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 12
                      },
                      "start": {
                        "column": 29,
                        "line": 12
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      195,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 12
                      },
                      "start": {
                        "column": 31,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    193,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 12
                    },
                    "start": {
                      "column": 29,
                      "line": 12
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp",
                "range": [
                  173,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "selfClosing": true,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  179,
                  185
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prop",
                      "optional": false,
                      "range": [
                        180,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      180,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 15,
                    "line": 12
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 38,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              172,
              202
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            168,
            202
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        164,
        203
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
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
            211,
            212
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                245,
                251
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              }
            },
            "range": [
              243,
              252
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 14
              },
              "start": {
                "column": 32,
                "line": 14
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    229,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
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
                      232,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    231,
                    235
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
                  229,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    236,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    238,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 14
                    },
                    "start": {
                      "column": 27,
                      "line": 14
                    }
                  }
                },
                "range": [
                  236,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                216,
                222
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                222,
                228
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      223,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    223,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              215,
              243
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "range": [
            215,
            252
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        },
        "range": [
          211,
          252
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        211,
        253
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
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
            261,
            262
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              265,
              295
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    279,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 18,
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
                      282,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    281,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 16
                    },
                    "start": {
                      "column": 20,
                      "line": 16
                    }
                  }
                },
                "range": [
                  279,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 16
                  },
                  "start": {
                    "column": 18,
                    "line": 16
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    286,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 25,
                      "line": 16
                    }
                  }
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "raw": "20",
                    "value": 20,
                    "range": [
                      289,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 16
                      },
                      "start": {
                        "column": 28,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    288,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 16
                    },
                    "start": {
                      "column": 27,
                      "line": 16
                    }
                  }
                },
                "range": [
                  286,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 16
                  },
                  "start": {
                    "column": 25,
                    "line": 16
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                266,
                272
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                272,
                278
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      273,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    273,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "range": [
            265,
            295
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "range": [
          261,
          295
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        261,
        296
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
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
            307,
            308
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                341,
                347
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 34,
                  "line": 18
                }
              }
            },
            "range": [
              339,
              348
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 18
              },
              "start": {
                "column": 32,
                "line": 18
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    325,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 18
                    },
                    "start": {
                      "column": 18,
                      "line": 18
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
                      328,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 21,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    327,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 18
                    },
                    "start": {
                      "column": 20,
                      "line": 18
                    }
                  }
                },
                "range": [
                  325,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    332,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 18
                    },
                    "start": {
                      "column": 25,
                      "line": 18
                    }
                  }
                },
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "raw": "20",
                    "value": 20,
                    "range": [
                      335,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 28,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    334,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 18
                    },
                    "start": {
                      "column": 27,
                      "line": 18
                    }
                  }
                },
                "range": [
                  332,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 18
                  },
                  "start": {
                    "column": 25,
                    "line": 18
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                312,
                318
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                318,
                324
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      319,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    319,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              311,
              339
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "range": [
            311,
            348
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        },
        "range": [
          307,
          348
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        307,
        349
      ],
      "loc": {
        "end": {
          "column": 42,
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            360,
            361
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              364,
              400
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    384,
                    385
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
                "value": {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      387,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 27,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    386,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
                    }
                  }
                },
                "range": [
                  384,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    391,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 31,
                      "line": 20
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    393,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 20
                    },
                    "start": {
                      "column": 33,
                      "line": 20
                    }
                  }
                },
                "range": [
                  391,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 20
                  },
                  "start": {
                    "column": 31,
                    "line": 20
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                365,
                371
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 20
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                371,
                383
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      372,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    372,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      378,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    378,
                    382
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 20
                    },
                    "start": {
                      "column": 18,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "loc": {
              "end": {
                "column": 40,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "range": [
            364,
            400
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "range": [
          360,
          400
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        360,
        401
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
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
            412,
            413
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                452,
                458
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 22
                },
                "start": {
                  "column": 40,
                  "line": 22
                }
              }
            },
            "range": [
              450,
              459
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 22
              },
              "start": {
                "column": 38,
                "line": 22
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    436,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
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
                      439,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 27,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    438,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 22
                    },
                    "start": {
                      "column": 26,
                      "line": 22
                    }
                  }
                },
                "range": [
                  436,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 22
                  },
                  "start": {
                    "column": 24,
                    "line": 22
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    443,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 31,
                      "line": 22
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    445,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 22
                    },
                    "start": {
                      "column": 33,
                      "line": 22
                    }
                  }
                },
                "range": [
                  443,
                  449
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 22
                  },
                  "start": {
                    "column": 31,
                    "line": 22
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                417,
                423
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                423,
                435
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      424,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    424,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      430,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    430,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 18,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              416,
              450
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "range": [
            416,
            459
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        },
        "range": [
          412,
          459
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        412,
        460
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
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
            471,
            472
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              475,
              501
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 24
                    },
                    "start": {
                      "column": 14,
                      "line": 24
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
                      488,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    487,
                    491
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
                "range": [
                  485,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    492,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 24
                    },
                    "start": {
                      "column": 21,
                      "line": 24
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    494,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 24
                    },
                    "start": {
                      "column": 23,
                      "line": 24
                    }
                  }
                },
                "range": [
                  492,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 24
                  },
                  "start": {
                    "column": 21,
                    "line": 24
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                476,
                482
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                482,
                484
              ],
              "params": [],
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
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "range": [
            475,
            501
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "range": [
          471,
          501
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        471,
        502
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
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
            513,
            514
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                543,
                549
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 26
                },
                "start": {
                  "column": 30,
                  "line": 26
                }
              }
            },
            "range": [
              541,
              550
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 26
              },
              "start": {
                "column": 28,
                "line": 26
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    527,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 26
                    },
                    "start": {
                      "column": 14,
                      "line": 26
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
                      530,
                      532
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    529,
                    533
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 16,
                      "line": 26
                    }
                  }
                },
                "range": [
                  527,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    534,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 26
                    },
                    "start": {
                      "column": 21,
                      "line": 26
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    536,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 26
                    },
                    "start": {
                      "column": 23,
                      "line": 26
                    }
                  }
                },
                "range": [
                  534,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 26
                  },
                  "start": {
                    "column": 21,
                    "line": 26
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                518,
                524
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 26
                },
                "start": {
                  "column": 5,
                  "line": 26
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                524,
                526
              ],
              "params": [],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              517,
              541
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "range": [
            517,
            550
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "range": [
          513,
          550
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        513,
        551
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
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
            562,
            563
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              565,
              579
            ],
            "attributes": [],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                566,
                572
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                572,
                576
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    573,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 28
                    },
                    "start": {
                      "column": 11,
                      "line": 28
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "loc": {
              "end": {
                "column": 17,
                "line": 28
              },
              "start": {
                "column": 3,
                "line": 28
              }
            }
          },
          "range": [
            565,
            579
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 28
            },
            "start": {
              "column": 3,
              "line": 28
            }
          }
        },
        "range": [
          562,
          579
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        562,
        579
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
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
            587,
            588
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                604,
                610
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            },
            "range": [
              602,
              611
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 15,
                "line": 30
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp",
              "range": [
                591,
                597
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                597,
                601
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "range": [
                    598,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 30
                    },
                    "start": {
                      "column": 11,
                      "line": 30
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            },
            "range": [
              590,
              602
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 30
              },
              "start": {
                "column": 3,
                "line": 30
              }
            }
          },
          "range": [
            590,
            611
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 30
            },
            "start": {
              "column": 3,
              "line": 30
            }
          }
        },
        "range": [
          587,
          611
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        587,
        611
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          711,
          741
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
              "name": "internalProp",
              "optional": false,
              "range": [
                717,
                729
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 33
                },
                "start": {
                  "column": 4,
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
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
                }
              },
              "range": [
                729,
                738
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        732,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 33
                        },
                        "start": {
                          "column": 19,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      732,
                      733
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P2",
                      "optional": false,
                      "range": [
                        735,
                        737
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 33
                        },
                        "start": {
                          "column": 22,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      735,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  731,
                  738
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 33
                  },
                  "start": {
                    "column": 18,
                    "line": 33
                  }
                }
              }
            },
            "value": null,
            "range": [
              717,
              739
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 33
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
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 92,
            "line": 32
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "range": [
          633,
          640
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 32
          },
          "start": {
            "column": 14,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            683,
            688
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 32
            },
            "start": {
              "column": 64,
              "line": 32
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            689,
            698
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 32
            },
            "start": {
              "column": 70,
              "line": 32
            }
          }
        },
        "range": [
          683,
          698
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 32
          },
          "start": {
            "column": 64,
            "line": 32
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          698,
          710
        ],
        "params": [
          {
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
                    699,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 32
                    },
                    "start": {
                      "column": 80,
                      "line": 32
                    }
                  }
                },
                "range": [
                  699,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 32
                  },
                  "start": {
                    "column": 80,
                    "line": 32
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P2",
                  "optional": false,
                  "range": [
                    703,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 32
                    },
                    "start": {
                      "column": 84,
                      "line": 32
                    }
                  }
                },
                "range": [
                  703,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 32
                  },
                  "start": {
                    "column": 84,
                    "line": 32
                  }
                }
              }
            ],
            "range": [
              699,
              705
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 32
              },
              "start": {
                "column": 80,
                "line": 32
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              707,
              709
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 32
              },
              "start": {
                "column": 88,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 32
          },
          "start": {
            "column": 79,
            "line": 32
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 32
          },
          "start": {
            "column": 21,
            "line": 32
          }
        },
        "range": [
          640,
          674
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      653,
                      654
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 34,
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
                        "column": 43,
                        "line": 32
                      },
                      "start": {
                        "column": 35,
                        "line": 32
                      }
                    },
                    "range": [
                      654,
                      662
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        656,
                        662
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
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
                    653,
                    662
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 32
                    },
                    "start": {
                      "column": 34,
                      "line": 32
                    }
                  }
                }
              ],
              "range": [
                651,
                664
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 32
                },
                "start": {
                  "column": 32,
                  "line": 32
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
                641,
                642
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 22,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              641,
              664
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 32
              },
              "start": {
                "column": 22,
                "line": 32
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
                671,
                673
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 32
                },
                "start": {
                  "column": 52,
                  "line": 32
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P2",
              "optional": false,
              "range": [
                666,
                668
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 32
                },
                "start": {
                  "column": 47,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              666,
              673
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 32
              },
              "start": {
                "column": 47,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        619,
        741
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
    },
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
            742,
            743
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              746,
              793
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    779,
                    780
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 35
                    },
                    "start": {
                      "column": 37,
                      "line": 35
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    781,
                    784
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 35
                    },
                    "start": {
                      "column": 39,
                      "line": 35
                    }
                  }
                },
                "range": [
                  779,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 35
                  },
                  "start": {
                    "column": 37,
                    "line": 35
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    785,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 35
                    },
                    "start": {
                      "column": 43,
                      "line": 35
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"b\"",
                  "value": "b",
                  "range": [
                    787,
                    790
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 35
                    },
                    "start": {
                      "column": 45,
                      "line": 35
                    }
                  }
                },
                "range": [
                  785,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 35
                  },
                  "start": {
                    "column": 43,
                    "line": 35
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                747,
                754
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 35
                },
                "start": {
                  "column": 5,
                  "line": 35
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                754,
                778
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          756,
                          757
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 35
                          },
                          "start": {
                            "column": 14,
                            "line": 35
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
                            "column": 23,
                            "line": 35
                          },
                          "start": {
                            "column": 15,
                            "line": 35
                          }
                        },
                        "range": [
                          757,
                          765
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            759,
                            765
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 35
                            },
                            "start": {
                              "column": 17,
                              "line": 35
                            }
                          }
                        }
                      },
                      "range": [
                        756,
                        766
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          767,
                          768
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 35
                          },
                          "start": {
                            "column": 25,
                            "line": 35
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
                            "line": 35
                          },
                          "start": {
                            "column": 26,
                            "line": 35
                          }
                        },
                        "range": [
                          768,
                          776
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            770,
                            776
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 35
                            },
                            "start": {
                              "column": 28,
                              "line": 35
                            }
                          }
                        }
                      },
                      "range": [
                        767,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 35
                        },
                        "start": {
                          "column": 25,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "range": [
                    755,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 35
                    },
                    "start": {
                      "column": 13,
                      "line": 35
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 35
                },
                "start": {
                  "column": 12,
                  "line": 35
                }
              }
            },
            "loc": {
              "end": {
                "column": 51,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "range": [
            746,
            793
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        },
        "range": [
          742,
          793
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        742,
        794
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
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
            802,
            803
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 37
            },
            "start": {
              "column": 0,
              "line": 37
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                853,
                860
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 37
                },
                "start": {
                  "column": 51,
                  "line": 37
                }
              }
            },
            "range": [
              851,
              861
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 37
              },
              "start": {
                "column": 49,
                "line": 37
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    839,
                    840
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 37
                    },
                    "start": {
                      "column": 37,
                      "line": 37
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    841,
                    844
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 37
                    },
                    "start": {
                      "column": 39,
                      "line": 37
                    }
                  }
                },
                "range": [
                  839,
                  844
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 37
                  },
                  "start": {
                    "column": 37,
                    "line": 37
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    845,
                    846
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 37
                    },
                    "start": {
                      "column": 43,
                      "line": 37
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"b\"",
                  "value": "b",
                  "range": [
                    847,
                    850
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 37
                    },
                    "start": {
                      "column": 45,
                      "line": 37
                    }
                  }
                },
                "range": [
                  845,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 37
                  },
                  "start": {
                    "column": 43,
                    "line": 37
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                807,
                814
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 37
                },
                "start": {
                  "column": 5,
                  "line": 37
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                814,
                838
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          816,
                          817
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 37
                          },
                          "start": {
                            "column": 14,
                            "line": 37
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
                            "column": 23,
                            "line": 37
                          },
                          "start": {
                            "column": 15,
                            "line": 37
                          }
                        },
                        "range": [
                          817,
                          825
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            819,
                            825
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 37
                            },
                            "start": {
                              "column": 17,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        816,
                        826
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 37
                        },
                        "start": {
                          "column": 14,
                          "line": 37
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          827,
                          828
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 37
                          },
                          "start": {
                            "column": 25,
                            "line": 37
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
                            "line": 37
                          },
                          "start": {
                            "column": 26,
                            "line": 37
                          }
                        },
                        "range": [
                          828,
                          836
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            830,
                            836
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 37
                            },
                            "start": {
                              "column": 28,
                              "line": 37
                            }
                          }
                        }
                      },
                      "range": [
                        827,
                        836
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 37
                        },
                        "start": {
                          "column": 25,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    815,
                    837
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 37
                    },
                    "start": {
                      "column": 13,
                      "line": 37
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 37
                },
                "start": {
                  "column": 12,
                  "line": 37
                }
              }
            },
            "range": [
              806,
              851
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "range": [
            806,
            861
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 37
            },
            "start": {
              "column": 4,
              "line": 37
            }
          }
        },
        "range": [
          802,
          861
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        802,
        862
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
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
            870,
            871
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              874,
              905
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    889,
                    890
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 39
                    },
                    "start": {
                      "column": 19,
                      "line": 39
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
                      892,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 39
                      },
                      "start": {
                        "column": 22,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    891,
                    895
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 39
                    },
                    "start": {
                      "column": 21,
                      "line": 39
                    }
                  }
                },
                "range": [
                  889,
                  895
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 39
                  },
                  "start": {
                    "column": 19,
                    "line": 39
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    896,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 39
                    },
                    "start": {
                      "column": 26,
                      "line": 39
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    898,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 39
                    },
                    "start": {
                      "column": 28,
                      "line": 39
                    }
                  }
                },
                "range": [
                  896,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 39
                  },
                  "start": {
                    "column": 26,
                    "line": 39
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                875,
                882
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 39
                },
                "start": {
                  "column": 5,
                  "line": 39
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                882,
                888
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      883,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    883,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 39
                },
                "start": {
                  "column": 12,
                  "line": 39
                }
              }
            },
            "loc": {
              "end": {
                "column": 35,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "range": [
            874,
            905
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        },
        "range": [
          870,
          905
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        870,
        906
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
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
            917,
            918
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                952,
                959
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 41
                },
                "start": {
                  "column": 35,
                  "line": 41
                }
              }
            },
            "range": [
              950,
              960
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 41
              },
              "start": {
                "column": 33,
                "line": 41
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    936,
                    937
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 41
                    },
                    "start": {
                      "column": 19,
                      "line": 41
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
                      939,
                      941
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
                  "range": [
                    938,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 41
                    },
                    "start": {
                      "column": 21,
                      "line": 41
                    }
                  }
                },
                "range": [
                  936,
                  942
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    943,
                    944
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 41
                    },
                    "start": {
                      "column": 26,
                      "line": 41
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    945,
                    949
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 41
                    },
                    "start": {
                      "column": 28,
                      "line": 41
                    }
                  }
                },
                "range": [
                  943,
                  949
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 41
                  },
                  "start": {
                    "column": 26,
                    "line": 41
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                922,
                929
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 41
                },
                "start": {
                  "column": 5,
                  "line": 41
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                929,
                935
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      930,
                      934
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 41
                      },
                      "start": {
                        "column": 13,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    930,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 41
                    },
                    "start": {
                      "column": 13,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 41
                },
                "start": {
                  "column": 12,
                  "line": 41
                }
              }
            },
            "range": [
              921,
              950
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "range": [
            921,
            960
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        },
        "range": [
          917,
          960
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        917,
        961
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
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
            972,
            973
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              976,
              1027
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    1011,
                    1012
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 43
                    },
                    "start": {
                      "column": 39,
                      "line": 43
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1013,
                    1017
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 43
                    },
                    "start": {
                      "column": 41,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1011,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 43
                  },
                  "start": {
                    "column": 39,
                    "line": 43
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    1018,
                    1019
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 43
                    },
                    "start": {
                      "column": 46,
                      "line": 43
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1020,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 43
                    },
                    "start": {
                      "column": 48,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1018,
                  1024
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 43
                  },
                  "start": {
                    "column": 46,
                    "line": 43
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                977,
                984
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 43
                },
                "start": {
                  "column": 5,
                  "line": 43
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                984,
                1010
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          986,
                          987
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 43
                          },
                          "start": {
                            "column": 14,
                            "line": 43
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
                            "column": 23,
                            "line": 43
                          },
                          "start": {
                            "column": 15,
                            "line": 43
                          }
                        },
                        "range": [
                          987,
                          995
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            989,
                            995
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 43
                            },
                            "start": {
                              "column": 17,
                              "line": 43
                            }
                          }
                        }
                      },
                      "range": [
                        986,
                        995
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 43
                        },
                        "start": {
                          "column": 14,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "range": [
                    985,
                    996
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 43
                    },
                    "start": {
                      "column": 13,
                      "line": 43
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          999,
                          1000
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 43
                          },
                          "start": {
                            "column": 27,
                            "line": 43
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
                            "line": 43
                          },
                          "start": {
                            "column": 28,
                            "line": 43
                          }
                        },
                        "range": [
                          1000,
                          1008
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1002,
                            1008
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
                      },
                      "range": [
                        999,
                        1008
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 43
                        },
                        "start": {
                          "column": 27,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "range": [
                    998,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 43
                    },
                    "start": {
                      "column": 26,
                      "line": 43
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 43
                },
                "start": {
                  "column": 12,
                  "line": 43
                }
              }
            },
            "loc": {
              "end": {
                "column": 55,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "range": [
            976,
            1027
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "range": [
          972,
          1027
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        972,
        1028
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
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
            1036,
            1037
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 45
            },
            "start": {
              "column": 0,
              "line": 45
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1091,
                1098
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 45
                },
                "start": {
                  "column": 55,
                  "line": 45
                }
              }
            },
            "range": [
              1089,
              1099
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 45
              },
              "start": {
                "column": 53,
                "line": 45
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    1075,
                    1076
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 45
                    },
                    "start": {
                      "column": 39,
                      "line": 45
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1077,
                    1081
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 45
                    },
                    "start": {
                      "column": 41,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1075,
                  1081
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 45
                  },
                  "start": {
                    "column": 39,
                    "line": 45
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    1082,
                    1083
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 45
                    },
                    "start": {
                      "column": 46,
                      "line": 45
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1084,
                    1088
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 45
                    },
                    "start": {
                      "column": 48,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1082,
                  1088
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 45
                  },
                  "start": {
                    "column": 46,
                    "line": 45
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1041,
                1048
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 45
                },
                "start": {
                  "column": 5,
                  "line": 45
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1048,
                1074
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1050,
                          1051
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 45
                          },
                          "start": {
                            "column": 14,
                            "line": 45
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
                            "column": 23,
                            "line": 45
                          },
                          "start": {
                            "column": 15,
                            "line": 45
                          }
                        },
                        "range": [
                          1051,
                          1059
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1053,
                            1059
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 45
                            },
                            "start": {
                              "column": 17,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        1050,
                        1059
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 45
                        },
                        "start": {
                          "column": 14,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    1049,
                    1060
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 45
                    },
                    "start": {
                      "column": 13,
                      "line": 45
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1063,
                          1064
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 45
                          },
                          "start": {
                            "column": 27,
                            "line": 45
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
                            "line": 45
                          },
                          "start": {
                            "column": 28,
                            "line": 45
                          }
                        },
                        "range": [
                          1064,
                          1072
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1066,
                            1072
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 45
                            },
                            "start": {
                              "column": 30,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        1063,
                        1072
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 45
                        },
                        "start": {
                          "column": 27,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "range": [
                    1062,
                    1073
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 45
                    },
                    "start": {
                      "column": 26,
                      "line": 45
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 45
                },
                "start": {
                  "column": 12,
                  "line": 45
                }
              }
            },
            "range": [
              1040,
              1089
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          "range": [
            1040,
            1099
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        },
        "range": [
          1036,
          1099
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 45
          },
          "start": {
            "column": 0,
            "line": 45
          }
        }
      },
      "range": [
        1036,
        1100
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
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
            1108,
            1109
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              1112,
              1169
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    1153,
                    1154
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 47
                    },
                    "start": {
                      "column": 45,
                      "line": 47
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1155,
                    1159
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 47
                    },
                    "start": {
                      "column": 47,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1153,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 47
                  },
                  "start": {
                    "column": 45,
                    "line": 47
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    1160,
                    1161
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 47
                    },
                    "start": {
                      "column": 52,
                      "line": 47
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1162,
                    1166
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 47
                    },
                    "start": {
                      "column": 54,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1160,
                  1166
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 47
                  },
                  "start": {
                    "column": 52,
                    "line": 47
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1113,
                1120
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 47
                },
                "start": {
                  "column": 5,
                  "line": 47
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1120,
                1152
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1122,
                          1123
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 47
                          },
                          "start": {
                            "column": 14,
                            "line": 47
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
                            "column": 23,
                            "line": 47
                          },
                          "start": {
                            "column": 15,
                            "line": 47
                          }
                        },
                        "range": [
                          1123,
                          1131
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1125,
                            1131
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 47
                            },
                            "start": {
                              "column": 17,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        1122,
                        1131
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 14,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    1121,
                    1132
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 47
                    },
                    "start": {
                      "column": 13,
                      "line": 47
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1135,
                          1136
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 47
                          },
                          "start": {
                            "column": 27,
                            "line": 47
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
                            "line": 47
                          },
                          "start": {
                            "column": 28,
                            "line": 47
                          }
                        },
                        "range": [
                          1136,
                          1144
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1138,
                            1144
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 47
                            },
                            "start": {
                              "column": 30,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        1135,
                        1144
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 47
                        },
                        "start": {
                          "column": 27,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    1134,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 47
                    },
                    "start": {
                      "column": 26,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      1147,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 47
                      },
                      "start": {
                        "column": 39,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1147,
                    1151
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 47
                    },
                    "start": {
                      "column": 39,
                      "line": 47
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "loc": {
              "end": {
                "column": 61,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "range": [
            1112,
            1169
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        },
        "range": [
          1108,
          1169
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        1108,
        1170
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
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
            1181,
            1182
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 49
            },
            "start": {
              "column": 0,
              "line": 49
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1242,
                1249
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 49
                },
                "start": {
                  "column": 61,
                  "line": 49
                }
              }
            },
            "range": [
              1240,
              1250
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 49
              },
              "start": {
                "column": 59,
                "line": 49
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    1226,
                    1227
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 49
                    },
                    "start": {
                      "column": 45,
                      "line": 49
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1228,
                    1232
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 49
                    },
                    "start": {
                      "column": 47,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1226,
                  1232
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 49
                  },
                  "start": {
                    "column": 45,
                    "line": 49
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    1233,
                    1234
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 49
                    },
                    "start": {
                      "column": 52,
                      "line": 49
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1235,
                    1239
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 49
                    },
                    "start": {
                      "column": 54,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1233,
                  1239
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 49
                  },
                  "start": {
                    "column": 52,
                    "line": 49
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1186,
                1193
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 49
                },
                "start": {
                  "column": 5,
                  "line": 49
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1193,
                1225
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1195,
                          1196
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 49
                          },
                          "start": {
                            "column": 14,
                            "line": 49
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
                            "column": 23,
                            "line": 49
                          },
                          "start": {
                            "column": 15,
                            "line": 49
                          }
                        },
                        "range": [
                          1196,
                          1204
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1198,
                            1204
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 49
                            },
                            "start": {
                              "column": 17,
                              "line": 49
                            }
                          }
                        }
                      },
                      "range": [
                        1195,
                        1204
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 49
                        },
                        "start": {
                          "column": 14,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "range": [
                    1194,
                    1205
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 49
                    },
                    "start": {
                      "column": 13,
                      "line": 49
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1208,
                          1209
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 49
                          },
                          "start": {
                            "column": 27,
                            "line": 49
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
                            "line": 49
                          },
                          "start": {
                            "column": 28,
                            "line": 49
                          }
                        },
                        "range": [
                          1209,
                          1217
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1211,
                            1217
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 49
                            },
                            "start": {
                              "column": 30,
                              "line": 49
                            }
                          }
                        }
                      },
                      "range": [
                        1208,
                        1217
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 49
                        },
                        "start": {
                          "column": 27,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "range": [
                    1207,
                    1218
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 49
                    },
                    "start": {
                      "column": 26,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prop",
                    "optional": false,
                    "range": [
                      1220,
                      1224
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 49
                      },
                      "start": {
                        "column": 39,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1220,
                    1224
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 49
                    },
                    "start": {
                      "column": 39,
                      "line": 49
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 49
                },
                "start": {
                  "column": 12,
                  "line": 49
                }
              }
            },
            "range": [
              1185,
              1240
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          "range": [
            1185,
            1250
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 49
            }
          }
        },
        "range": [
          1181,
          1250
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 49
          },
          "start": {
            "column": 0,
            "line": 49
          }
        }
      },
      "range": [
        1181,
        1251
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
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
            1262,
            1263
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": null,
          "openingElement": {
            "type": "JSXOpeningElement",
            "range": [
              1266,
              1317
            ],
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    1301,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 51
                    },
                    "start": {
                      "column": 39,
                      "line": 51
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1303,
                    1307
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 51
                    },
                    "start": {
                      "column": 41,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1301,
                  1307
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 51
                  },
                  "start": {
                    "column": 39,
                    "line": 51
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    1308,
                    1309
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 51
                    },
                    "start": {
                      "column": 46,
                      "line": 51
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1310,
                    1314
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 51
                    },
                    "start": {
                      "column": 48,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1308,
                  1314
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 51
                  },
                  "start": {
                    "column": 46,
                    "line": 51
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1267,
                1274
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 51
                },
                "start": {
                  "column": 5,
                  "line": 51
                }
              }
            },
            "selfClosing": true,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1274,
                1300
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1276,
                          1277
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 51
                          },
                          "start": {
                            "column": 14,
                            "line": 51
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
                            "column": 23,
                            "line": 51
                          },
                          "start": {
                            "column": 15,
                            "line": 51
                          }
                        },
                        "range": [
                          1277,
                          1285
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1279,
                            1285
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 51
                            },
                            "start": {
                              "column": 17,
                              "line": 51
                            }
                          }
                        }
                      },
                      "range": [
                        1276,
                        1285
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 51
                        },
                        "start": {
                          "column": 14,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1275,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 51
                    },
                    "start": {
                      "column": 13,
                      "line": 51
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1289,
                          1290
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 51
                          },
                          "start": {
                            "column": 27,
                            "line": 51
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
                            "line": 51
                          },
                          "start": {
                            "column": 28,
                            "line": 51
                          }
                        },
                        "range": [
                          1290,
                          1298
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            1292,
                            1298
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 51
                            },
                            "start": {
                              "column": 30,
                              "line": 51
                            }
                          }
                        }
                      },
                      "range": [
                        1289,
                        1298
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 51
                        },
                        "start": {
                          "column": 27,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1288,
                    1299
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 51
                    },
                    "start": {
                      "column": 26,
                      "line": 51
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 51
                },
                "start": {
                  "column": 12,
                  "line": 51
                }
              }
            },
            "loc": {
              "end": {
                "column": 55,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          "range": [
            1266,
            1317
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 51
            },
            "start": {
              "column": 4,
              "line": 51
            }
          }
        },
        "range": [
          1262,
          1317
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1262,
        1318
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
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
            1329,
            1330
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "right": {
          "type": "JSXElement",
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1384,
                1391
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 53
                },
                "start": {
                  "column": 55,
                  "line": 53
                }
              }
            },
            "range": [
              1382,
              1392
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 53
              },
              "start": {
                "column": 53,
                "line": 53
              }
            }
          },
          "openingElement": {
            "type": "JSXOpeningElement",
            "attributes": [
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "a",
                  "range": [
                    1368,
                    1369
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 53
                    },
                    "start": {
                      "column": 39,
                      "line": 53
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1370,
                    1374
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 53
                    },
                    "start": {
                      "column": 41,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1368,
                  1374
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 53
                  },
                  "start": {
                    "column": 39,
                    "line": 53
                  }
                }
              },
              {
                "type": "JSXAttribute",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "b",
                  "range": [
                    1375,
                    1376
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 53
                    },
                    "start": {
                      "column": 46,
                      "line": 53
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    1377,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 53
                    },
                    "start": {
                      "column": 48,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1375,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 53
                  },
                  "start": {
                    "column": 46,
                    "line": 53
                  }
                }
              }
            ],
            "name": {
              "type": "JSXIdentifier",
              "name": "MyComp2",
              "range": [
                1334,
                1341
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 53
                },
                "start": {
                  "column": 5,
                  "line": 53
                }
              }
            },
            "selfClosing": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1341,
                1367
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          1343,
                          1344
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 53
                          },
                          "start": {
                            "column": 14,
                            "line": 53
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
                            "column": 23,
                            "line": 53
                          },
                          "start": {
                            "column": 15,
                            "line": 53
                          }
                        },
                        "range": [
                          1344,
                          1352
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1346,
                            1352
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 53
                            },
                            "start": {
                              "column": 17,
                              "line": 53
                            }
                          }
                        }
                      },
                      "range": [
                        1343,
                        1352
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 53
                        },
                        "start": {
                          "column": 14,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    1342,
                    1353
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 53
                    },
                    "start": {
                      "column": 13,
                      "line": 53
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1356,
                          1357
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 53
                          },
                          "start": {
                            "column": 27,
                            "line": 53
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
                            "line": 53
                          },
                          "start": {
                            "column": 28,
                            "line": 53
                          }
                        },
                        "range": [
                          1357,
                          1365
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            1359,
                            1365
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 53
                            },
                            "start": {
                              "column": 30,
                              "line": 53
                            }
                          }
                        }
                      },
                      "range": [
                        1356,
                        1365
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 53
                        },
                        "start": {
                          "column": 27,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    1355,
                    1366
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 53
                    },
                    "start": {
                      "column": 26,
                      "line": 53
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 53
                },
                "start": {
                  "column": 12,
                  "line": 53
                }
              }
            },
            "range": [
              1333,
              1382
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          "range": [
            1333,
            1392
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 53
            },
            "start": {
              "column": 4,
              "line": 53
            }
          }
        },
        "range": [
          1329,
          1392
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        1329,
        1393
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 54
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
