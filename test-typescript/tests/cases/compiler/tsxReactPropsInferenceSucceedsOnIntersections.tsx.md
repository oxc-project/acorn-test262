__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    422
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          63,
          70
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            52,
            57
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              52,
              57
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
        }
      ],
      "range": [
        45,
        71
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        73,
        186
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "range": [
            85,
            96
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  133,
                  152
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLButtonElement",
                      "optional": false,
                      "range": [
                        134,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 5
                        },
                        "start": {
                          "column": 61,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      134,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 5
                      },
                      "start": {
                        "column": 61,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 5
                  },
                  "start": {
                    "column": 60,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "range": [
                    107,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 5
                    },
                    "start": {
                      "column": 34,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonHTMLAttributes",
                  "optional": false,
                  "range": [
                    113,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 5
                    },
                    "start": {
                      "column": 40,
                      "line": 5
                    }
                  }
                },
                "range": [
                  107,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                107,
                152
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
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
                    "name": "outline",
                    "optional": false,
                    "range": [
                      161,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
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
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    },
                    "range": [
                      169,
                      178
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        171,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 6
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    161,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                155,
                181
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 82,
                  "line": 5
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  184,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              "range": [
                184,
                185
              ],
              "loc": {
                "end": {
                  "column": 5,
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
            107,
            185
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 34,
              "line": 5
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 23,
              "line": 5
            }
          },
          "range": [
            96,
            104
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  101,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
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
                  97,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                97,
                103
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          80,
          186
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 6,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          257,
          260
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 72,
            "line": 9
          },
          "start": {
            "column": 69,
            "line": 9
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "range": [
          202,
          208
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 9
          },
          "start": {
            "column": 14,
            "line": 9
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
            225,
            230
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 9
            },
            "start": {
              "column": 37,
              "line": 9
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
            231,
            240
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 9
            },
            "start": {
              "column": 43,
              "line": 9
            }
          }
        },
        "range": [
          225,
          240
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 9
          },
          "start": {
            "column": 37,
            "line": 9
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          240,
          256
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                252,
                255
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
                      253,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 9
                      },
                      "start": {
                        "column": 65,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    253,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 9
                    },
                    "start": {
                      "column": 65,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 9
                },
                "start": {
                  "column": 64,
                  "line": 9
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProps",
              "optional": false,
              "range": [
                241,
                252
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 9
                },
                "start": {
                  "column": 53,
                  "line": 9
                }
              }
            },
            "range": [
              241,
              255
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 9
              },
              "start": {
                "column": 53,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 9
          },
          "start": {
            "column": 52,
            "line": 9
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 9
          },
          "start": {
            "column": 20,
            "line": 9
          }
        },
        "range": [
          208,
          216
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                213,
                215
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 9
                },
                "start": {
                  "column": 25,
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
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 21,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              209,
              215
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        188,
        260
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          310,
          337
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "customProp",
              "optional": false,
              "range": [
                316,
                326
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 4,
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
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              },
              "range": [
                326,
                334
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  328,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              316,
              335
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 48,
            "line": 11
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
            "name": "ButtonProps",
            "optional": false,
            "range": [
              298,
              309
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 11
              },
              "start": {
                "column": 36,
                "line": 11
              }
            }
          },
          "range": [
            298,
            309
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 11
            },
            "start": {
              "column": 36,
              "line": 11
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CustomButtonProps",
        "optional": false,
        "range": [
          272,
          289
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "range": [
        262,
        337
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "CustomButton",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              },
              "range": [
                357,
                387
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    368,
                    387
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CustomButtonProps",
                        "optional": false,
                        "range": [
                          369,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 15
                          },
                          "start": {
                            "column": 30,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        369,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 15
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 15
                    },
                    "start": {
                      "column": 29,
                      "line": 15
                    }
                  }
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "range": [
                      359,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 15
                      },
                      "start": {
                        "column": 20,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "range": [
                      365,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    359,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  }
                },
                "range": [
                  359,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              345,
              387
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  399,
                  420
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
                        411,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 15
                        },
                        "start": {
                          "column": 72,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      407,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 15
                      },
                      "start": {
                        "column": 68,
                        "line": 15
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Button",
                  "range": [
                    400,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 15
                    },
                    "start": {
                      "column": 61,
                      "line": 15
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 15
                  },
                  "start": {
                    "column": 60,
                    "line": 15
                  }
                }
              },
              "range": [
                399,
                420
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 15
                },
                "start": {
                  "column": 60,
                  "line": 15
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "range": [
                  390,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 15
                  },
                  "start": {
                    "column": 51,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              390,
              420
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 15
              },
              "start": {
                "column": 51,
                "line": 15
              }
            }
          },
          "range": [
            345,
            420
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        339,
        421
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
