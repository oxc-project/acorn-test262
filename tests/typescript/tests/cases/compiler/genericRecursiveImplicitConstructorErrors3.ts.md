__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1243,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 152,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 150,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 31,
              "end": 150,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 47,
                "decorators": [],
                "name": "MemberName",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 48,
                "end": 55,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 49,
                    "end": 50,
                    "name": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 51,
                    "end": 52,
                    "name": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 53,
                    "end": 54,
                    "name": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 55,
                "end": 150,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 65,
                    "end": 144,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 78,
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 78,
                      "end": 144,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 78,
                        "end": 85,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 79,
                            "end": 80,
                            "name": {
                              "type": "Identifier",
                              "start": 79,
                              "end": 80,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 81,
                            "end": 82,
                            "name": {
                              "type": "Identifier",
                              "start": 81,
                              "end": 82,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 83,
                            "end": 84,
                            "name": {
                              "type": "Identifier",
                              "start": 83,
                              "end": 84,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 86,
                          "end": 95,
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 90,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 92,
                              "end": 95
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 97,
                          "end": 107,
                          "decorators": [],
                          "name": "arg2",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 102,
                            "end": 107,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 104,
                              "end": 107
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 109,
                          "end": 119,
                          "decorators": [],
                          "name": "arg3",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 114,
                            "end": 119,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 116,
                              "end": 119
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 120,
                        "end": 132,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 122,
                          "end": 132,
                          "typeName": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 132,
                            "decorators": [],
                            "name": "MemberName",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 133,
                        "end": 144,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 155,
      "end": 1241,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 172,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 173,
        "end": 1241,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 179,
            "end": 261,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 186,
              "end": 261,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 192,
                "end": 202,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 203,
                "end": 210,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 204,
                    "end": 205,
                    "name": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 206,
                    "end": 207,
                    "name": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 207,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 208,
                    "end": 209,
                    "name": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 210,
                "end": 261,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 220,
                    "end": 255,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 231,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 231,
                      "end": 247,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 233,
                        "end": 247,
                        "typeName": {
                          "type": "Identifier",
                          "start": 233,
                          "end": 247,
                          "decorators": [],
                          "name": "PullTypeSymbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 250,
                      "end": 254,
                      "value": null,
                      "raw": "null"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 266,
            "end": 1239,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 273,
              "end": 1239,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 279,
                "end": 293,
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 294,
                "end": 301,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 295,
                    "end": 296,
                    "name": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 296,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 297,
                    "end": 298,
                    "name": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 299,
                    "end": 300,
                    "name": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "Identifier",
                "start": 309,
                "end": 319,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 320,
                "end": 1239,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 330,
                    "end": 374,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 350,
                      "decorators": [],
                      "name": "_elementType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 366,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 352,
                        "end": 366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 366,
                          "decorators": [],
                          "name": "PullTypeSymbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 369,
                      "end": 373,
                      "value": null,
                      "raw": "null"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 383,
                    "end": 583,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 398,
                      "decorators": [],
                      "name": "toString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 398,
                      "end": 583,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 398,
                        "end": 405,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 399,
                            "end": 400,
                            "name": {
                              "type": "Identifier",
                              "start": 399,
                              "end": 400,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 401,
                            "end": 402,
                            "name": {
                              "type": "Identifier",
                              "start": 401,
                              "end": 402,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 403,
                            "end": 404,
                            "name": {
                              "type": "Identifier",
                              "start": 403,
                              "end": 404,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 406,
                          "end": 430,
                          "decorators": [],
                          "name": "scopeSymbol",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 418,
                            "end": 430,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 420,
                              "end": 430,
                              "typeName": {
                                "type": "Identifier",
                                "start": 420,
                                "end": 430,
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 432,
                          "end": 461,
                          "decorators": [],
                          "name": "useConstraintInName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 452,
                            "end": 461,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 454,
                              "end": 461
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 463,
                        "end": 583,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 477,
                            "end": 551,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 481,
                                "end": 550,
                                "id": {
                                  "type": "Identifier",
                                  "start": 481,
                                  "end": 482,
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 485,
                                  "end": 550,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 485,
                                    "end": 548,
                                    "object": {
                                      "type": "CallExpression",
                                      "start": 485,
                                      "end": 539,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 485,
                                        "end": 505,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 485,
                                          "end": 489
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 490,
                                          "end": 505,
                                          "decorators": [],
                                          "name": "getScopedNameEx",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 506,
                                          "end": 517,
                                          "decorators": [],
                                          "name": "scopeSymbol",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        {
                                          "type": "Identifier",
                                          "start": 519,
                                          "end": 538,
                                          "decorators": [],
                                          "name": "useConstraintInName",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 540,
                                      "end": 548,
                                      "decorators": [],
                                      "name": "toString",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 564,
                            "end": 573,
                            "argument": {
                              "type": "Identifier",
                              "start": 571,
                              "end": 572,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 592,
                    "end": 1233,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 614,
                      "decorators": [],
                      "name": "getScopedNameEx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 614,
                      "end": 1233,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 614,
                        "end": 621,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 615,
                            "end": 616,
                            "name": {
                              "type": "Identifier",
                              "start": 615,
                              "end": 616,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 617,
                            "end": 618,
                            "name": {
                              "type": "Identifier",
                              "start": 617,
                              "end": 618,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 619,
                            "end": 620,
                            "name": {
                              "type": "Identifier",
                              "start": 619,
                              "end": 620,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 622,
                          "end": 646,
                          "decorators": [],
                          "name": "scopeSymbol",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 634,
                            "end": 646,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 636,
                              "end": 646,
                              "typeName": {
                                "type": "Identifier",
                                "start": 636,
                                "end": 646,
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 648,
                          "end": 677,
                          "decorators": [],
                          "name": "useConstraintInName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 668,
                            "end": 677,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 670,
                              "end": 677
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 679,
                          "end": 706,
                          "decorators": [],
                          "name": "getPrettyTypeName",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 697,
                            "end": 706,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 699,
                              "end": 706
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 708,
                          "end": 740,
                          "decorators": [],
                          "name": "getTypeParamMarkerInfo",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 731,
                            "end": 740,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 733,
                              "end": 740
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 742,
                        "end": 1233,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 756,
                            "end": 1223,
                            "test": {
                              "type": "CallExpression",
                              "start": 760,
                              "end": 774,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 760,
                                "end": 772,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 760,
                                  "end": 764
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 765,
                                  "end": 772,
                                  "decorators": [],
                                  "name": "isArray",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 776,
                              "end": 1223,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 794,
                                  "end": 1138,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 798,
                                      "end": 1138,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 798,
                                        "end": 815,
                                        "decorators": [],
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "ConditionalExpression",
                                        "start": 818,
                                        "end": 1138,
                                        "test": {
                                          "type": "MemberExpression",
                                          "start": 818,
                                          "end": 835,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 818,
                                            "end": 822
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 823,
                                            "end": 835,
                                            "decorators": [],
                                            "name": "_elementType",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "consequent": {
                                          "type": "ConditionalExpression",
                                          "start": 855,
                                          "end": 1133,
                                          "test": {
                                            "type": "LogicalExpression",
                                            "start": 855,
                                            "end": 923,
                                            "left": {
                                              "type": "CallExpression",
                                              "start": 855,
                                              "end": 882,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 855,
                                                "end": 880,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "start": 855,
                                                  "end": 872,
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 855,
                                                    "end": 859
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 860,
                                                    "end": 872,
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 873,
                                                  "end": 880,
                                                  "decorators": [],
                                                  "name": "isArray",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "CallExpression",
                                              "start": 886,
                                              "end": 923,
                                              "callee": {
                                                "type": "MemberExpression",
                                                "start": 886,
                                                "end": 921,
                                                "object": {
                                                  "type": "MemberExpression",
                                                  "start": 886,
                                                  "end": 903,
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 886,
                                                    "end": 890
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 891,
                                                    "end": 903,
                                                    "decorators": [],
                                                    "name": "_elementType",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "computed": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 904,
                                                  "end": 921,
                                                  "decorators": [],
                                                  "name": "isNamedTypeSymbol",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false
                                            }
                                          },
                                          "consequent": {
                                            "type": "CallExpression",
                                            "start": 942,
                                            "end": 1038,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 942,
                                              "end": 975,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 942,
                                                "end": 959,
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 942,
                                                  "end": 946
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 947,
                                                  "end": 959,
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 960,
                                                "end": 975,
                                                "decorators": [],
                                                "name": "getScopedNameEx",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "start": 976,
                                                "end": 987,
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              {
                                                "type": "Literal",
                                                "start": 989,
                                                "end": 994,
                                                "value": false,
                                                "raw": "false"
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 996,
                                                "end": 1013,
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 1015,
                                                "end": 1037,
                                                "decorators": [],
                                                "name": "getTypeParamMarkerInfo",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "optional": false
                                          },
                                          "alternate": {
                                            "type": "CallExpression",
                                            "start": 1057,
                                            "end": 1133,
                                            "callee": {
                                              "type": "MemberExpression",
                                              "start": 1057,
                                              "end": 1094,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 1057,
                                                "end": 1074,
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 1057,
                                                  "end": 1061
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 1062,
                                                  "end": 1074,
                                                  "decorators": [],
                                                  "name": "_elementType",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 1075,
                                                "end": 1094,
                                                "decorators": [],
                                                "name": "getMemberTypeNameEx",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Literal",
                                                "start": 1095,
                                                "end": 1100,
                                                "value": false,
                                                "raw": "false"
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 1102,
                                                "end": 1113,
                                                "decorators": [],
                                                "name": "scopeSymbol",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 1115,
                                                "end": 1132,
                                                "decorators": [],
                                                "name": "getPrettyTypeName",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "optional": false
                                          }
                                        },
                                        "alternate": {
                                          "type": "Literal",
                                          "start": 1137,
                                          "end": 1138,
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "declare": false
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 1155,
                                  "end": 1209,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1162,
                                    "end": 1208,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1162,
                                      "end": 1179,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 1162,
                                        "end": 1172,
                                        "decorators": [],
                                        "name": "MemberName",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1173,
                                        "end": 1179,
                                        "decorators": [],
                                        "name": "create",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 1180,
                                        "end": 1197,
                                        "decorators": [],
                                        "name": "elementMemberName",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1199,
                                        "end": 1201,
                                        "value": "",
                                        "raw": "\"\""
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 1203,
                                        "end": 1207,
                                        "value": "[]",
                                        "raw": "\"[]\""
                                      }
                                    ],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
