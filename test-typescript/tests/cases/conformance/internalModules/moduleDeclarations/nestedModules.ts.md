__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 485,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 89,
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 89,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 87,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 26,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 41,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 87,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 62,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 71,
                    "end": 81,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 91,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 100,
        "end": 217,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 215,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 113,
              "end": 215,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "id": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 150,
                          "name": "Point",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 141,
                            "end": 150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 143,
                              "end": 150,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 143,
                                "end": 150,
                                "left": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 144,
                                  "name": "C",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 145,
                                  "end": 150,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 156,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 158,
                                "end": 159,
                                "value": 0,
                                "raw": "0"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 161,
                              "end": 165,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 161,
                                "end": 162,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 164,
                                "end": 165,
                                "value": 0,
                                "raw": "0"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 219,
      "end": 299,
      "id": {
        "type": "TSQualifiedName",
        "start": 226,
        "end": 230,
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 228,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 231,
        "end": 299,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 237,
            "end": 297,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 244,
              "end": 297,
              "id": {
                "type": "Identifier",
                "start": 254,
                "end": 259,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 260,
                "end": 297,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 270,
                    "end": 280,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 271,
                      "end": 279,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 273,
                        "end": 279
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 281,
                    "end": 291,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 301,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 311,
        "end": 376,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 317,
            "end": 374,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 324,
              "end": 374,
              "id": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 333,
                "end": 374,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 343,
                    "end": 368,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 350,
                      "end": 368,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 354,
                          "end": 367,
                          "id": {
                            "type": "Identifier",
                            "start": 354,
                            "end": 367,
                            "name": "Point",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 359,
                              "end": 367,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 361,
                                "end": 367
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 386,
            "end": 390,
            "object": {
              "type": "Identifier",
              "start": 386,
              "end": 388,
              "name": "M2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 409,
            "name": "point",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 409,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 403,
                "end": 409
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 420,
            "name": "point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 423,
            "end": 430,
            "object": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 425,
              "end": 430,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 465,
            "name": "p",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 443,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 443,
                      "end": 451,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 453,
                    "end": 463,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 454,
                      "end": 462,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 456,
                        "end": 462
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 483,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 483,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 473,
                "end": 483,
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
                      "name": "M2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 483,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
