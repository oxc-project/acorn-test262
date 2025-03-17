__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 582,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 33,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 79,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 44,
                    "end": 54,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 47,
                        "end": 53
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 63,
                    "end": 73,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 66,
                        "end": 72
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
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
      "start": 83,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 205,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 203,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 110,
              "end": 203,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 120,
                  "end": 197,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 134,
                    "name": "fromCarthesian",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 134,
                    "end": 197,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 135,
                        "end": 145,
                        "name": "p",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 136,
                          "end": 145,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 138,
                            "end": 145,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 138,
                              "end": 145,
                              "left": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 140,
                                "end": 145,
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
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 147,
                      "end": 197,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 161,
                          "end": 187,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 168,
                            "end": 186,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 170,
                                "end": 176,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 170,
                                  "end": 171,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 173,
                                  "end": 176,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 173,
                                    "end": 174,
                                    "name": "p",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 175,
                                    "end": 176,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 178,
                                "end": 184,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 179,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 181,
                                  "end": 184,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 181,
                                    "end": 182,
                                    "name": "p",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 183,
                                    "end": 184,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 268,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 268,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 243,
                "end": 268,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 245,
                    "end": 255,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 248,
                        "end": 254
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 256,
                    "end": 266,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 257,
                      "end": 265,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 259,
                        "end": 265
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
      "start": 270,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 284,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 284,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 277,
                  "end": 284,
                  "left": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 284,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 287,
      "end": 357,
      "id": {
        "type": "TSQualifiedName",
        "start": 294,
        "end": 299,
        "left": {
          "type": "TSQualifiedName",
          "start": 294,
          "end": 297,
          "left": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 298,
          "end": 299,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 300,
        "end": 357,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 306,
            "end": 355,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 313,
              "end": 355,
              "id": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 324,
                "end": 355,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 334,
                    "end": 349,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 340,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 340,
                      "end": 348,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 342,
                        "end": 348
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
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
      "start": 359,
      "end": 504,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 367,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 368,
        "end": 504,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 374,
            "end": 502,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 381,
              "end": 502,
              "id": {
                "type": "Identifier",
                "start": 388,
                "end": 389,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 390,
                "end": 502,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 400,
                    "end": 496,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 407,
                      "end": 496,
                      "id": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 416,
                        "end": 496,
                        "body": [
                          {
                            "type": "ClassDeclaration",
                            "start": 430,
                            "end": 486,
                            "id": {
                              "type": "Identifier",
                              "start": 436,
                              "end": 440,
                              "name": "Line",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "superClass": null,
                            "body": {
                              "type": "ClassBody",
                              "start": 441,
                              "end": 486,
                              "body": [
                                {
                                  "type": "PropertyDefinition",
                                  "start": 459,
                                  "end": 472,
                                  "static": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 459,
                                    "end": 463,
                                    "name": "name",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": null,
                                  "decorators": [],
                                  "declare": false,
                                  "override": false,
                                  "optional": false,
                                  "definite": false,
                                  "readonly": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 463,
                                    "end": 471,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 465,
                                      "end": 471
                                    }
                                  },
                                  "accessibility": null
                                }
                              ]
                            },
                            "decorators": [],
                            "typeParameters": null,
                            "implements": [],
                            "abstract": false,
                            "declare": false,
                            "superTypeArguments": null
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
      "start": 535,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 539,
          "end": 561,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 561,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 540,
              "end": 561,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 542,
                "end": 561,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 544,
                    "end": 559,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 550,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 550,
                      "end": 558,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 552,
                        "end": 558
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
      "start": 562,
      "end": 580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 579,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 579,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 579,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 569,
                "end": 579,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 569,
                  "end": 579,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 569,
                    "end": 574,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 569,
                      "end": 572,
                      "left": {
                        "type": "Identifier",
                        "start": 569,
                        "end": 570,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 572,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 573,
                      "end": 574,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 575,
                    "end": 579,
                    "name": "Line",
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
