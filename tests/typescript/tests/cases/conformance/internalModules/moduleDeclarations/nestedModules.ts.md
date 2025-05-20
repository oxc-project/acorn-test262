__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 484,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 89,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 89,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 87,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 87,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 87,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 62,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 71,
                    "end": 81,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 41,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 12,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 10,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 217,
      "body": {
        "type": "TSModuleBlock",
        "start": 100,
        "end": 217,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 215,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 113,
              "end": 215,
              "body": {
                "type": "TSModuleBlock",
                "start": 122,
                "end": 215,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 132,
                    "end": 168,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 136,
                        "end": 167,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 150,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 141,
                            "end": 150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 143,
                              "end": 150,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 143,
                                "end": 150,
                                "left": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 144,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 145,
                                  "end": 150,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 153,
                          "end": 167,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 155,
                              "end": 159,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 156,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 158,
                                "end": 159,
                                "raw": "0",
                                "value": 0
                              }
                            },
                            {
                              "type": "Property",
                              "start": 161,
                              "end": 165,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 164,
                                "end": 165,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 219,
      "end": 299,
      "body": {
        "type": "TSModuleBlock",
        "start": 231,
        "end": 299,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 237,
            "end": 297,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 244,
              "end": 297,
              "body": {
                "type": "TSInterfaceBody",
                "start": 260,
                "end": 297,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 280,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 273,
                        "end": 279
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 281,
                    "end": 291,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 254,
                "end": 259,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 226,
        "end": 230,
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 228,
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 301,
      "end": 376,
      "body": {
        "type": "TSModuleBlock",
        "start": 311,
        "end": 376,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 317,
            "end": 374,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 324,
              "end": 374,
              "body": {
                "type": "TSModuleBlock",
                "start": 333,
                "end": 374,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 343,
                    "end": 368,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 350,
                      "end": 368,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 354,
                          "end": 367,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 354,
                            "end": 367,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 359,
                              "end": 367,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 361,
                                "end": 367
                              }
                            }
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 386,
            "end": 390,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 386,
              "end": 388,
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 409,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 409,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 403,
                "end": 409
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 420,
            "decorators": [],
            "name": "point",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 423,
            "end": 430,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 425,
              "end": 430,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 465,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 465,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 440,
                "end": 465,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 442,
                    "end": 452,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 443,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 443,
                      "end": 451,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 453,
                    "end": 463,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 454,
                      "end": 462,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 456,
                        "end": 462
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 483,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 483,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 473,
                "end": 483,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 473,
                  "end": 483,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 473,
                    "end": 477,
                    "left": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 475,
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 483,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
