__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    67,
    407
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'react'",
        "value": "react",
        "range": [
          136,
          143
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 5
          },
          "start": {
            "column": 69,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            74,
            79
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              74,
              79
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 7,
                "line": 5
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 5
            },
            "start": {
              "column": 7,
              "line": 5
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "range": [
              83,
              104
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "range": [
              83,
              104
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            83,
            104
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "range": [
              106,
              117
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 39,
                "line": 5
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "range": [
              106,
              117
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 39,
                "line": 5
              }
            }
          },
          "range": [
            106,
            117
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 5
            },
            "start": {
              "column": 39,
              "line": 5
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "range": [
              119,
              128
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 5
              },
              "start": {
                "column": 52,
                "line": 5
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "range": [
              119,
              128
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 5
              },
              "start": {
                "column": 52,
                "line": 5
              }
            }
          },
          "range": [
            119,
            128
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 5
            },
            "start": {
              "column": 52,
              "line": 5
            }
          }
        }
      ],
      "range": [
        67,
        144
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonBaseProps",
        "optional": false,
        "range": [
          151,
          166
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
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
                213,
                216
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
                      214,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 7
                      },
                      "start": {
                        "column": 68,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    214,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 7
                    },
                    "start": {
                      "column": 68,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 7
                },
                "start": {
                  "column": 67,
                  "line": 7
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentPropsWithRef",
              "optional": false,
              "range": [
                192,
                213
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 7
                },
                "start": {
                  "column": 46,
                  "line": 7
                }
              }
            },
            "range": [
              192,
              216
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 7
              },
              "start": {
                "column": 46,
                "line": 7
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
                    221,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 7
                    },
                    "start": {
                      "column": 75,
                      "line": 7
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
                      "column": 95,
                      "line": 7
                    },
                    "start": {
                      "column": 84,
                      "line": 7
                    }
                  },
                  "range": [
                    230,
                    241
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactNode",
                      "optional": false,
                      "range": [
                        232,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 7
                        },
                        "start": {
                          "column": 86,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      232,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 7
                      },
                      "start": {
                        "column": 86,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  221,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 7
                  },
                  "start": {
                    "column": 75,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              219,
              243
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 7
              },
              "start": {
                "column": 73,
                "line": 7
              }
            }
          }
        ],
        "range": [
          192,
          243
        ],
        "loc": {
          "end": {
            "column": 97,
            "line": 7
          },
          "start": {
            "column": 46,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          166,
          189
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
                "name": "ElementType",
                "optional": false,
                "range": [
                  177,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                }
              },
              "range": [
                177,
                188
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 31,
                  "line": 7
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
                167,
                168
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              167,
              188
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        146,
        244
      ],
      "loc": {
        "end": {
          "column": 98,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXFragment",
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "range": [
                  339,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              },
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "range": [
                  337,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                337,
                342
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              330,
              343
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          324,
          345
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 78,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "range": [
          255,
          264
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
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
                "column": 76,
                "line": 9
              },
              "start": {
                "column": 56,
                "line": 9
              }
            },
            "range": [
              302,
              322
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  319,
                  322
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
                        320,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 9
                        },
                        "start": {
                          "column": 74,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      320,
                      321
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 9
                      },
                      "start": {
                        "column": 74,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 9
                  },
                  "start": {
                    "column": 73,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ButtonBaseProps",
                "optional": false,
                "range": [
                  304,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 9
                  },
                  "start": {
                    "column": 58,
                    "line": 9
                  }
                }
              },
              "range": [
                304,
                322
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 9
                },
                "start": {
                  "column": 58,
                  "line": 9
                }
              }
            }
          },
          "range": [
            297,
            322
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 9
            },
            "start": {
              "column": 51,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 9
          }
        },
        "range": [
          264,
          296
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
                "name": "ElementType",
                "optional": false,
                "range": [
                  275,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              "range": [
                275,
                286
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 9
                },
                "start": {
                  "column": 29,
                  "line": 9
                }
              }
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'span'",
                "value": "span",
                "range": [
                  289,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 9
                  },
                  "start": {
                    "column": 43,
                    "line": 9
                  }
                }
              },
              "range": [
                289,
                295
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 43,
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
                265,
                266
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              265,
              295
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        246,
        345
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "v1",
            "optional": false,
            "range": [
              353,
              355
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
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
                358,
                405
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "range": [
                      369,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 22,
                        "line": 13
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "range": [
                              383,
                              384
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 13
                              },
                              "start": {
                                "column": 36,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "preventDefault",
                            "optional": false,
                            "range": [
                              385,
                              399
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 13
                              },
                              "start": {
                                "column": 38,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            383,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 13
                            },
                            "start": {
                              "column": 36,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          383,
                          401
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 13
                          },
                          "start": {
                            "column": 36,
                            "line": 13
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
                          "name": "e",
                          "optional": false,
                          "range": [
                            378,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 13
                            },
                            "start": {
                              "column": 31,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        378,
                        401
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 13
                        },
                        "start": {
                          "column": 31,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      377,
                      402
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 13
                      },
                      "start": {
                        "column": 30,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    369,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 13
                    },
                    "start": {
                      "column": 22,
                      "line": 13
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "range": [
                  359,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 13
                  },
                  "start": {
                    "column": 12,
                    "line": 13
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 58,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              358,
              405
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          },
          "range": [
            353,
            405
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        347,
        406
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
