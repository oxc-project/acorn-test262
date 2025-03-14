__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    388
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
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              56,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        75
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  285,
                  292
                ],
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    286,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                285,
                292
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              278,
              292
            ],
            "loc": {
              "end": {
                "column": 18,
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
          189,
          294
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 113,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeComponent",
        "optional": false,
        "range": [
          85,
          98
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 9,
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
                "column": 98,
                "line": 3
              },
              "start": {
                "column": 54,
                "line": 3
              }
            },
            "range": [
              130,
              174
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "range": [
                          134,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 3
                          },
                          "start": {
                            "column": 58,
                            "line": 3
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
                            "column": 69,
                            "line": 3
                          },
                          "start": {
                            "column": 66,
                            "line": 3
                          }
                        },
                        "range": [
                          142,
                          145
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              144,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 3
                              },
                              "start": {
                                "column": 68,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            144,
                            145
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 3
                            },
                            "start": {
                              "column": 68,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        134,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 3
                        },
                        "start": {
                          "column": 58,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    132,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 3
                    },
                    "start": {
                      "column": 56,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
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
                          "column": 97,
                          "line": 3
                        },
                        "start": {
                          "column": 96,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      172,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 3
                      },
                      "start": {
                        "column": 96,
                        "line": 3
                      }
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "range": [
                          150,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 3
                          },
                          "start": {
                            "column": 74,
                            "line": 3
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IntrinsicElements",
                        "optional": false,
                        "range": [
                          154,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 3
                          },
                          "start": {
                            "column": 78,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        150,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 3
                        },
                        "start": {
                          "column": 74,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      150,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 3
                      },
                      "start": {
                        "column": 74,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    150,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 3
                    },
                    "start": {
                      "column": 74,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                132,
                174
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 3
                },
                "start": {
                  "column": 56,
                  "line": 3
                }
              }
            }
          },
          "range": [
            125,
            174
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 3
            },
            "start": {
              "column": 49,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 112,
            "line": 3
          },
          "start": {
            "column": 99,
            "line": 3
          }
        },
        "range": [
          175,
          188
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
                177,
                180
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 3
                },
                "start": {
                  "column": 101,
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
                181,
                188
              ],
              "loc": {
                "end": {
                  "column": 112,
                  "line": 3
                },
                "start": {
                  "column": 105,
                  "line": 3
                }
              }
            },
            "range": [
              177,
              188
            ],
            "loc": {
              "end": {
                "column": 112,
                "line": 3
              },
              "start": {
                "column": 101,
                "line": 3
              }
            }
          },
          "range": [
            177,
            188
          ],
          "loc": {
            "end": {
              "column": 112,
              "line": 3
            },
            "start": {
              "column": 101,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        },
        "range": [
          98,
          124
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'button'",
                    "value": "button",
                    "range": [
                      109,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    109,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      120,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 44,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    120,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 44,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                109,
                123
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 3
                },
                "start": {
                  "column": 33,
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
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              99,
              123
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        76,
        294
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
      "type": "FunctionDeclaration",
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
                  356,
                  386
                ],
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "element",
                      "range": [
                        371,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "range": [
                          380,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 9
                          },
                          "start": {
                            "column": 35,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        379,
                        383
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 9
                        },
                        "start": {
                          "column": 34,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      371,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 9
                      },
                      "start": {
                        "column": 26,
                        "line": 9
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "SomeComponent",
                  "range": [
                    357,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                356,
                386
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
              349,
              386
            ],
            "loc": {
              "end": {
                "column": 41,
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
          343,
          388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 47,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          305,
          309
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "el",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 42,
                "line": 8
              }
            },
            "range": [
              338,
              341
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  340,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 44,
                    "line": 8
                  }
                }
              },
              "range": [
                340,
                341
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 8
                },
                "start": {
                  "column": 44,
                  "line": 8
                }
              }
            }
          },
          "range": [
            336,
            341
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 8
            },
            "start": {
              "column": 40,
              "line": 8
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 8
          }
        },
        "range": [
          309,
          335
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'button'",
                    "value": "button",
                    "range": [
                      320,
                      328
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
                  "range": [
                    320,
                    328
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      331,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 8
                      },
                      "start": {
                        "column": 35,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    331,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 8
                    },
                    "start": {
                      "column": 35,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                320,
                334
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
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
                310,
                311
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              310,
              334
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        296,
        388
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
      "line": 2
    }
  },
  "hashbang": null
}
```
